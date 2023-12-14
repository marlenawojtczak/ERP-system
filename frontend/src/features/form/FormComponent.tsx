import React, { useEffect, useState } from "react";
import { DropBox } from "./components/DropBox";
import {
  MainForm,
  PrintableForm,
  NoPrintableForm,
  FormGroup,
  Label,
  Input,
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
}

export const FormComponent: React.FC = () => {
  const [localTotalLength, setLocalTotalLength] = useState<number>(0);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    order: "",
    deadline: "",
    shipment: "",
    roll: "",
    length: localTotalLength,
    welds: "",
  });

  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      length: localTotalLength,
    }));
  }, [localTotalLength]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // You can perform form submission logic here, e.g., send data to a server
    console.log("Form submitted:", formData);
  };

  const formatPxToMb = (nbInPixels: number) => {
    const nbInMeters = Number(nbInPixels * 0.000091).toLocaleString(undefined, {
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
          <SubmitButton type="submit">Submit</SubmitButton>
        </PrintableForm>
        <NoPrintableForm>
          <p>TESTING2</p>
        </NoPrintableForm>
      </MainForm>
    </>
  );
};
