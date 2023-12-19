import React, { useEffect, useState } from "react";
import { DropBox } from "./components/DropBox";
import {
  MainForm,
  PrintableForm,
  NoPrintableForm,
  FormGroup,
  Label,
  Input,
  TextArea,
  RadioGroup,
  RadioInput,
  RadioLabel,
  PriorityButton,
  ResetButton,
  SubmitButton,
} from "./FormComponent.styled";

interface FormData {
  name: string;
  order: string;
  deadline: string;
  shipment: string;
  roll: string;
  length: number;
  welds: string;
  email: string;
  phone: string;
  mailbox: string;
  invoice: string;
  nip: string;
  address: string;
  shipmentAddress: string;
  paczkomat: string;
  cost: string;
  comments: string;
  priority: boolean;
}

export const FormComponent: React.FC = () => {
  const [localTotalLength, setLocalTotalLength] = useState<number>(0);
  const [files, setFiles] = useState([]);
  const [isActive, setIsActive] = useState<boolean>(false);

  const InitialState = {
    name: "",
    order: "",
    deadline: "",
    shipment: "",
    roll: "",
    length: localTotalLength,
    welds: "",
    email: "",
    phone: "",
    mailbox: "",
    invoice: "",
    nip: "",
    address: "",
    shipmentAddress: "",
    paczkomat: "",
    cost: "",
    comments: "",
    priority: false,
  };

  const [formData, setFormData] = useState<FormData>(InitialState);

  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      length: localTotalLength,
    }));
  }, [localTotalLength]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleTogglePriority = () => {
    setFormData((prevData) => ({
      ...prevData,
      priority: !prevData.priority,
    }));
    setIsActive((prevIsActive) => !prevIsActive);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    handlePrint();
  };

  const handleReset = () => {
    setFormData(InitialState);
    setIsActive(false);
    setLocalTotalLength(0);
    setFiles([]);
  };

  const formatPxToMb = (nbInPixels: number) => {
    const nbInMeters = Number(nbInPixels * 0.000085).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
    return nbInMeters;
  };

  return (
    <>
      <MainForm onSubmit={handleSubmit}>
        <PrintableForm>
          <DropBox
            localTotalLength={localTotalLength}
            setLocalTotalLength={setLocalTotalLength}
            files={files}
            setFiles={setFiles}
          />
          <FormGroup>
            <Label htmlFor="name">Nazwa:</Label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
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
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="deadline">Termin realizacji:</Label>
            <Input
              type="text"
              id="deadline"
              name="deadline"
              value={formData.deadline}
              onChange={handleInputChange}
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
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="roll">Rolka:</Label>
            <Input
              type="text"
              id="roll"
              name="roll"
              value={formData.roll}
              onChange={handleInputChange}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="length">Metraż:</Label>
            <Input
              type="text"
              id="length"
              name="length"
              value={formatPxToMb(formData.length)}
              onChange={handleInputChange}
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
          <p>Dane do faktury:</p>
          <FormGroup>
            <Label htmlFor="nip">NIP:</Label>
            <Input
              type="text"
              id="nip"
              name="nip"
              value={formData.nip}
              onChange={handleInputChange}
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
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="name">Nazwa firmy:</Label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </FormGroup>
          <p>Dane do wysyłki:</p>
          <FormGroup>
            <Label htmlFor="shipmentAddress">Adres:</Label>
            <Input
              type="text"
              id="shipmentAddress"
              name="shipmentAddress"
              value={formData.shipmentAddress}
              onChange={handleInputChange}
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="paczkomat">Nr Paczkomatu:</Label>
            <Input
              type="text"
              id="paczkomat"
              name="paczkomat"
              value={formData.paczkomat}
              onChange={handleInputChange}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="cost">Koszt:</Label>
            <Input
              type="text"
              id="cost"
              name="cost"
              value={formData.cost}
              onChange={handleInputChange}
            />
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
            >
              Komentarz
            </TextArea>
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
