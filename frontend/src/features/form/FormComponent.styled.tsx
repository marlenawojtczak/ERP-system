import styled from "styled-components";

export const MainForm = styled.form`
  display: flex;
`;

export const PrintableForm = styled.div`
  padding: 24px;
`;

export const NoPrintableForm = styled.div`
  height: calc(100vh - 120px);
  border-left: 2px solid black;
  padding: 24px;
`;

export const FormGroup = styled.div`
  margin-bottom: 8px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 2px;
`;

export const Input = styled.input`
  width: 60%;
  padding: 4px;
  font-size: 12px;
`;

export const SubmitButton = styled.button`
  padding: 10px;
  font-size: 16px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;
