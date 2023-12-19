import styled from "styled-components";

interface TextAreaProps {
  type?: string;
}
interface PriorityButtonProps {
  isActive: boolean;
}

export const MainForm = styled.form`
  display: flex;
`;

export const PrintableForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen {
    padding: 24px;
  }
  @media print {
    width: 100%;
    margin: auto;
    padding: 2cm;
    margin-left: -240px;
    margin-top: -60px;
    @page {
      margin: 1cm;
      margin-top: 0;
      margin-bottom: 0;
      /* size: A4; */
    }
  }
`;

export const NoPrintableForm = styled.div`
  height: calc(100vh - 120px);
  border-left: 2px solid black;
  padding: 24px;

  @media print {
    display: none;
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 8px;
  display: flex;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 2px;
  width: 150px;
`;

export const Input = styled.input`
  width: 250px;
  padding: 4px;
  font-size: 12px;
`;

export const TextArea = styled.textarea<TextAreaProps>`
  width: 250px;
  padding: 4px;
  font-size: 12px;
  resize: none;
`;

export const RadioGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-right: 12px;
`;
export const RadioInput = styled.input`
  padding: 4px;
  font-size: 12px;
`;
export const RadioLabel = styled.label`
  display: block;
  margin-bottom: 2px;
`;

export const PriorityButton = styled.button<PriorityButtonProps>`
  padding: 10px;
  font-size: 16px;
  background-color: ${({ isActive }) => (isActive ? "#dc4c64" : "white")};
  color: ${({ isActive }) => (isActive ? "white" : "black")};
  border: none;
  cursor: pointer;
  width: 100px;
`;

export const SubmitButton = styled.button`
  padding: 10px;
  font-size: 16px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  cursor: pointer;
  width: 80%;

  &:hover {
    background-color: #45a049;
  }

  @media print {
    display: none;
  }
`;

export const ResetButton = styled.button`
  margin-left: 10px;
  padding: 10px;
  font-size: 16px;
  background-color: white;
  color: #dc4c64;
  border: none;
  cursor: pointer;
  width: 100px;

  &:hover {
    background-color: #dc4c64;
    color: white;
  }
`;
