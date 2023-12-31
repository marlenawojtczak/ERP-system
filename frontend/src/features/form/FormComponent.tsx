import React, {
  useEffect,
  useState,
  forwardRef,
  Ref,
  ButtonHTMLAttributes,
} from "react";
import { useDispatch } from "react-redux";
import { saveObjectToLocalStorage } from "./redux/actions";
import Notiflix from "notiflix";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { DropBox } from "./components/DropBox";
import {
  GlobalPrintStyle,
  MainForm,
  PrintableForm,
  NoPrintableForm,
  FormGroup,
  Label,
  Input,
  InputSmall,
  TextArea,
  RadioGroup,
  RadioGroupNested,
  RadioGroupColumn,
  RadioInput,
  RadioLabel,
  PriorityButton,
  ResetButton,
  SubmitButton,
  DateInput,
} from "./FormComponent.styled";

interface DateInputProps {
  value?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  placeholderText?: string;
}

export interface FormDataType {
  name: string;
  order: string;
  deadline: Date | null;
  shipment: string;
  length: number;
  welds: number;
  email: string;
  phone: string;
  mailbox: string;
  invoice: string;
  nameInvoice: string;
  nip: string;
  address: string;
  shipmentAddress: string;
  paczkomat: string;
  cost: number;
  comments: string;
  priority: boolean;
  hereOrTogo: string;
}

export const FormComponent: React.FC = () => {
  const [localTotalLength, setLocalTotalLength] = useState<number>(0);
  const [files, setFiles] = useState([]);
  const [imageInfo, setImageInfo] = useState({});
  const [isActive, setIsActive] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const InitialState = {
    name: "",
    order: "",
    deadline: null as Date | null,
    shipment: "Kurier",
    length: localTotalLength,
    welds: 0,
    email: "",
    phone: "",
    mailbox: "mailbox_option1",
    invoice: "Nie",
    nameInvoice: "",
    nip: "",
    address: "",
    shipmentAddress: "",
    paczkomat: "",
    cost: 0,
    comments: "",
    priority: false,
    hereOrTogo: "togo",
    imageInfo: imageInfo,
  };

  const [formData, setFormData] = useState<FormDataType>(InitialState);
  console.log(formData);

  const dispatch = useDispatch();

  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      deadline: selectedDate,
      length: localTotalLength,
      imageInfo: imageInfo,
    }));
  }, [selectedDate, localTotalLength, imageInfo]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    const cleanedValue = cleanInputValue(name, value);

    if (name === "hereOrTogo") {
      if (value === "here") {
        setFiles([]);
        setImageInfo({}), setLocalTotalLength(0);
      } else {
        setFormData((prevData) => ({
          ...prevData,
          welds: 0,
        }));
      }
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: cleanedValue,
    }));
  };

  const cleanInputValue = (name: string, value: string | number): string => {
    const checkIfPositiveNumber = (value: any) => {
      const numericValue =
        typeof value === "number" ? value : parseInt(value, 10);
      if (!/^\d+$/.test(String(numericValue)) || numericValue < 0) {
        return "0";
      }
      return numericValue;
    };

    if (name === "cost") {
      return String(checkIfPositiveNumber(value)).replace(",", ".");
    } else if (name === "welds") {
      return String(checkIfPositiveNumber(value));
    }

    return String(value);
  };

  const handleTogglePriority = () => {
    setFormData((prevData) => ({
      ...prevData,
      priority: !prevData.priority,
    }));
    setIsActive((prevIsActive) => !prevIsActive);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    dispatch(saveObjectToLocalStorage(formData));

    Notiflix.Notify.success("Zamówienie zostało zapisane", {
      timeout: 1000,
    });
    setTimeout(() => {
      window.print();
    }, 1000);
    setTimeout(() => {
      handleReset();
    }, 2000);
  };

  const handleReset = () => {
    setFormData(InitialState);
    setIsActive(false);
    setLocalTotalLength(0);
    setFiles([]);
    setImageInfo({});
    setSelectedDate(null);
    fetchOrderNumber();
  };

  const handleDateChange = (date: any) => {
    setSelectedDate(date);
  };

  //start logic for generating order number
  const fetchOrderNumber = async () => {
    const getPrevNumber = () => {
      const savedObjectsString = localStorage.getItem("savedObjects");

      if (savedObjectsString) {
        const savedObjects = JSON.parse(savedObjectsString);
        const today = new Date();
        const formattedToday = today
          .toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          })
          .replace(/\//g, "-");

        const filteredOrders = savedObjects.filter((order: FormDataType) =>
          order.order.startsWith(formattedToday)
        );

        return filteredOrders.length;
      } else {
        return 0;
      }
    };

    const generateOrderNumber = () => {
      const today = new Date();
      const formattedDate = `${today.getDate()}-${
        today.getMonth() + 1
      }-${today.getFullYear()}`;

      const prevNum = getPrevNumber();
      const orderNumber = prevNum + 1;

      return `${formattedDate}_${(orderNumber ?? 0)
        .toString()
        .padStart(3, "0")}`;
    };

    const newOrderNumber = generateOrderNumber();
    console.log("ORDER", newOrderNumber);

    setFormData((prevData) => ({
      ...prevData,
      order: newOrderNumber,
    }));
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetchOrderNumber();
    };
    fetchData();
  }, []);

  //end

  const formatPxToMb = (nbInPixels: number) => {
    const nbInMeters = Number(nbInPixels * 0.000085).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
    return nbInMeters;
  };

  const amountFormatter = (amount: number) => {
    return Number(amount).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  const ExampleCustomInput = forwardRef(
    (
      { value, onClick, placeholderText, ...rest }: DateInputProps,
      ref: Ref<HTMLButtonElement>
    ) => {
      const handleDateClick = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
      ) => {
        e.preventDefault();
        if (onClick) {
          onClick(e);
        }
      };

      const placeholderStyle = {
        color: "grey",
      };
      const valueStyle = {
        color: "black",
      };

      return (
        <>
          <GlobalPrintStyle />
          <DateInput onClick={handleDateClick} ref={ref} {...rest}>
            <span
              className={value ? undefined : "print-placeholder"}
              style={value ? valueStyle : placeholderStyle}
            >
              {value || placeholderText}
            </span>
          </DateInput>
        </>
      );
    }
  );

  return (
    <>
      <MainForm onSubmit={handleSubmit}>
        <PrintableForm>
          <DropBox
            localTotalLength={localTotalLength}
            setLocalTotalLength={setLocalTotalLength}
            files={files}
            setFiles={setFiles}
            imageInfo={imageInfo}
            setImageInfo={setImageInfo}
          />
          <FormGroup>
            <Label htmlFor="name">Nazwa:</Label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Google"
              className={formData.name !== "" ? undefined : "print-placeholder"}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="order">Nr zamówienia:</Label>
            <Input
              type="text"
              id="order"
              name="order"
              value={formData.order}
              onChange={handleInputChange}
              readOnly
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="deadline">Termin realizacji:</Label>

            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              dateFormat="dd.MM.yyyy"
              customInput={
                <ExampleCustomInput placeholderText="Wybierz datę" />
              }
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="shipment">Wysyłka:</Label>
            <Input
              type="text"
              id="shipment"
              name="shipment"
              value={formData.shipment}
              onChange={handleInputChange}
              readOnly
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="length">Metraż:</Label>
            <Input
              type="text"
              id="length"
              name="length"
              value={formatPxToMb(formData.length) + ` metrów bieżących`}
              onChange={handleInputChange}
              readOnly
              className={
                formData.length !== 0 ? undefined : "print-placeholder"
              }
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="welds">Zgrzewy:</Label>
            <Input
              type="text"
              id="welds"
              name="welds"
              value={formData.welds}
              onChange={handleInputChange}
              className={formData.welds !== 0 ? undefined : "print-placeholder"}
            />
          </FormGroup>
        </PrintableForm>
        <NoPrintableForm>
          <FormGroup>
            <Label htmlFor="email">email:</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="kowalski@gmail.com"
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="phone">nr telefonu:</Label>
            <Input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="555-444-777"
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="mailbox">Skrzynka:</Label>
            <RadioGroup>
              <RadioInput
                type="radio"
                id="mailbox_option1"
                name="mailbox"
                value="mailbox_option1"
                checked={formData.mailbox === "mailbox_option1"}
                onChange={handleInputChange}
              />
              <RadioLabel htmlFor="mailbox_option1">Zamówienia</RadioLabel>
            </RadioGroup>
            <RadioGroup>
              <RadioInput
                type="radio"
                id="mailbox_option2"
                name="mailbox"
                value="mailbox_option2"
                checked={formData.mailbox === "mailbox_option2"}
                onChange={handleInputChange}
              />
              <RadioLabel htmlFor="mailbox_option2">Sklep</RadioLabel>
            </RadioGroup>
            <RadioGroup>
              <RadioInput
                type="radio"
                id="mailbox_option3"
                name="mailbox"
                value="mailbox_option3"
                checked={formData.mailbox === "mailbox_option3"}
                onChange={handleInputChange}
              />
              <RadioLabel htmlFor="mailbox_option3">fb</RadioLabel>
            </RadioGroup>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="shipment">Wysyłka:</Label>
            <RadioGroup>
              <RadioInput
                type="radio"
                id="shipment_option1"
                name="shipment"
                value="Kurier"
                checked={formData.shipment === "Kurier"}
                onChange={handleInputChange}
              />
              <RadioLabel htmlFor="shipment_option1">Kurier</RadioLabel>
            </RadioGroup>
            <RadioGroup>
              <RadioInput
                type="radio"
                id="shipment_option2"
                name="shipment"
                value="Paczkomat"
                checked={formData.shipment === "Paczkomat"}
                onChange={handleInputChange}
              />
              <RadioLabel htmlFor="shipment_option2">Paczkomat</RadioLabel>
            </RadioGroup>
            <RadioGroup>
              <RadioInput
                type="radio"
                id="shipment_option3"
                name="shipment"
                value="Osobiście"
                checked={formData.shipment === "Osobiście"}
                onChange={handleInputChange}
              />
              <RadioLabel htmlFor="shipment_option3">Osobiście</RadioLabel>
            </RadioGroup>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="invoice">Faktura:</Label>
            <RadioGroup>
              <RadioInput
                type="radio"
                id="invoice_option1"
                name="invoice"
                value="Tak"
                checked={formData.invoice === "Tak"}
                onChange={handleInputChange}
              />
              <RadioLabel htmlFor="invoice_option1">Tak</RadioLabel>
            </RadioGroup>
            <RadioGroup>
              <RadioInput
                type="radio"
                id="invoice_option2"
                name="invoice"
                value="Nie"
                checked={formData.invoice === "Nie"}
                onChange={handleInputChange}
              />
              <RadioLabel htmlFor="invoice_option2">Nie</RadioLabel>
            </RadioGroup>
          </FormGroup>
          {formData.invoice === "Tak" && (
            <>
              <p>Dane do faktury:</p>
              <FormGroup>
                <Label htmlFor="nip">NIP:</Label>
                <Input
                  type="text"
                  id="nip"
                  name="nip"
                  value={formData.nip}
                  onChange={handleInputChange}
                  placeholder="022-41-11-111"
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="address">Adres:</Label>
                <Input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="ul. Adresowa 10, 02-100 Warszawa"
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="nameInvoice">Nazwa firmy:</Label>
                <Input
                  type="text"
                  id="nameInvoice"
                  name="nameInvoice"
                  value={formData.nameInvoice}
                  onChange={handleInputChange}
                  placeholder="Google sp. z o.o."
                />
              </FormGroup>
            </>
          )}
          {(formData.shipment === "Kurier" ||
            formData.shipment === "Paczkomat") && <p>Dane do wysyłki:</p>}

          {formData.shipment === "Kurier" && (
            <FormGroup>
              <Label htmlFor="shipmentAddress">Adres:</Label>
              <Input
                type="text"
                id="shipmentAddress"
                name="shipmentAddress"
                value={formData.shipmentAddress}
                onChange={handleInputChange}
                placeholder="ul. Adresowa 10, 02-100 Warszawa"
              />
            </FormGroup>
          )}
          {formData.shipment === "Paczkomat" && (
            <FormGroup>
              <Label htmlFor="paczkomat">Nr Paczkomatu:</Label>
              <Input
                type="text"
                id="paczkomat"
                name="paczkomat"
                value={formData.paczkomat}
                onChange={handleInputChange}
                placeholder="WAW17A"
              />
            </FormGroup>
          )}
          <FormGroup>
            <Label htmlFor="cost">Koszt:</Label>
            <InputSmall
              type="text"
              id="cost"
              name="cost"
              value={`${formData.cost}`.replace(".", ",")}
              onChange={handleInputChange}
            />
            zł brutto ({amountFormatter(formData.cost / 1.23)} zł netto)
          </FormGroup>
          <FormGroup>
            <Label htmlFor="comments">Uwagi:</Label>
            <TextArea
              type="text"
              id="comments"
              name="comments"
              value={formData.comments}
              onChange={handleInputChange}
              rows={5}
              placeholder="Dajemy zniżkę 10% na kubki Clammers, ale tylko przy odbiorze osobistym."
            ></TextArea>
          </FormGroup>
          <FormGroup>
            {/* <Label htmlFor="hereOrTogo"></Label> */}
            <RadioGroupColumn>
              <RadioInput
                type="radio"
                id="togo"
                name="hereOrTogo"
                value="togo"
                checked={formData.hereOrTogo === "togo"}
                onChange={handleInputChange}
              />

              <RadioGroupNested>
                <RadioLabel htmlFor="togo">Wydruki</RadioLabel>
                {formData.hereOrTogo === "togo" && (
                  <>
                    <p>
                      Metraż: {formatPxToMb(formData.length)} metrów bieżących
                    </p>
                  </>
                )}
              </RadioGroupNested>
            </RadioGroupColumn>
          </FormGroup>
          <FormGroup>
            <RadioGroupColumn>
              <RadioInput
                type="radio"
                id="here"
                name="hereOrTogo"
                value="here"
                checked={formData.hereOrTogo === "here"}
                onChange={handleInputChange}
              />
              <RadioGroupNested>
                <RadioLabel htmlFor="here">Odzież z nadrukiem</RadioLabel>
                {formData.hereOrTogo === "here" && (
                  <p>Zgrzewy: {formData.welds}</p>
                )}
              </RadioGroupNested>
            </RadioGroupColumn>
          </FormGroup>

          <PriorityButton
            type="button"
            id="priority"
            onClick={handleTogglePriority}
            isActive={isActive}
          >
            {formData.priority ? "Pilne on" : "Pilne off"}
            {/* Pilne */}
          </PriorityButton>
          <ResetButton type="button" onClick={handleReset}>
            Reset Form
          </ResetButton>

          <SubmitButton type="submit">Utwórz zamówienie</SubmitButton>
        </NoPrintableForm>
      </MainForm>
    </>
  );
};
