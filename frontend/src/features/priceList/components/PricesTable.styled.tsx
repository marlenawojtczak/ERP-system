import styled from "styled-components";

export const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin: 0 auto;
`;

export const StyledHeadCell = styled.th`
  border: 1px solid black;
  padding: 5px;
  background-color: #f2f2f2;
`;

export const StyledCell = styled.td`
  border: 1px solid black;
  padding: 5px;
`;

export const StyledRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;
