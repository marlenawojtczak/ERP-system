import styled from "styled-components";

export const DropBoxStyled = styled.div`
  padding: 16px;
  margin-top: 10px;
  margin-bottom: 60px;
  border: 2px dashed rgb(229, 229, 229);
  border-radius: 15px;
  height: 460px;
  width: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DropBoxInfo = styled.p``;

export const DropBoxList = styled.ul`
  list-style: none;
  display: grid;
  grid-auto-flow: column dense;
  grid-template-rows: 230px 230px;
  grid-auto-columns: auto;
`;
export const DropBoxElement = styled.li`
  position: relative;
  border-radius: 0.375rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  margin: 8px;

  &:nth-child(4n + 2) {
    grid-row: 1;
  }
`;

export const CopiesInput = styled.input`
  width: 100%;
  margin-bottom: 10px;
  text-align: center;
  border: none;
  font-size: 30px;
  color: black;
`;

export const DropBoxImage = styled.img`
  border-radius: 0.375rem;
  display: block;
  margin: 0 auto;
  max-height: 160px;
  width: auto;
`;

export const DropBoxRemoveBtn = styled.button`
  display: flex;
  position: absolute;
  height: 26px;
  width: 26px;
  top: 1.5rem;
  right: 0;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border-width: 1px;
  border-color: transparent;
  background-color: #dc4c64;
  transition-property: color, background-color, border-color,
    text-decoration-color;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;

  &:hover {
    background-color: #ffffff;
    border-color: #dc4c64;
    cursor: pointer;

    > div {
      color: #dc4c64;
    }
  }

  @media print {
    display: none;
  }
`;

export const RemoveIcon = styled.div`
  width: 1.25rem;
  height: 1.25rem;
  font-size: 16px;
  font-weight: 700;
  color: white;
  margin: 0;
  padding: 0;
  transition-property: color, background-color, border-color,
    text-decoration-color;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;

  &:hover {
    color: #dc4c64;
  }
`;
