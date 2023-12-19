import React from "react";
import {
  StyledTable,
  StyledHeadCell,
  StyledCell,
  StyledRow,
} from "./PricesTable.styled";

interface PriceRow {
  type: string;
  version: string;
  quantity: string[];
  prices: number[];
  xxxlAvailable?: boolean;
  childrenAvailable?: boolean;
}

const tableData: PriceRow[] = [
  {
    type: "koszulka ekonomiczna",
    version: "biała",
    quantity: ["1 do 4", "5 do 19", "20 do 39", "40 do 79", "80 do 200"],
    prices: [18, 16, 15, 14, 13],
    xxxlAvailable: true,
    childrenAvailable: false,
  },
  {
    type: "koszulka ekonomiczna",
    version: "kolor",
    quantity: ["1 do 4", "5 do 19", "20 do 39", "40 do 79", "80 do 200"],
    prices: [20, 18, 17, 16, 15],
    xxxlAvailable: true,
    childrenAvailable: false,
  },
  {
    type: "koszulka standardowa",
    version: "biała",
    quantity: ["1 do 4", "5 do 19", "20 do 39", "40 do 79", "80 do 200"],
    prices: [22, 20, 19, 18, 17],
    xxxlAvailable: false,
    childrenAvailable: true,
  },
  {
    type: "koszulka standardowa",
    version: "kolor",
    quantity: ["1 do 4", "5 do 19", "20 do 39", "40 do 79", "80 do 200"],
    prices: [26, 24, 22, 21, 17],
    xxxlAvailable: false,
    childrenAvailable: true,
  },
  {
    type: "koszulka premium",
    version: "biała",
    quantity: ["1 do 4", "5 do 19", "20 do 39", "40 do 79", "80 do 200"],
    prices: [28, 26, 24, 23, 19],
    xxxlAvailable: true,
    childrenAvailable: true,
  },
  {
    type: "koszulka premium",
    version: "kolor",
    quantity: ["1 do 4", "5 do 19", "20 do 39", "40 do 79", "80 do 200"],
    prices: [30, 28, 27, 25, 22],
    xxxlAvailable: true,
    childrenAvailable: true,
  },
];

const poloShirtData: PriceRow[] = [
  {
    type: "koszulka polo standardowa 177g",
    version: "biała",
    quantity: ["1 do 4", "5 do 19", "20 do 39", "40 do 79", "80 do 200"],
    prices: [38, 36, 34, 32, 30],
    xxxlAvailable: true,
    childrenAvailable: false,
  },
  {
    type: "koszulka polo standardowa 177g",
    version: "kolor",
    quantity: ["1 do 4", "5 do 19", "20 do 39", "40 do 79", "80 do 200"],
    prices: [41, 39, 37, 35, 33],
    xxxlAvailable: true,
    childrenAvailable: false,
  },
  {
    type: "koszulka polo premium 223g",
    version: "biała",
    quantity: ["1 do 4", "5 do 19", "20 do 39", "40 do 79", "80 do 200"],
    prices: [42, 40, 38, 36, 34],
    xxxlAvailable: true,
    childrenAvailable: false,
  },
  {
    type: "koszulka polo premium 223g",
    version: "kolor",
    quantity: ["1 do 4", "5 do 19", "20 do 39", "40 do 79", "80 do 200"],
    prices: [46, 44, 42, 40, 38],
    xxxlAvailable: true,
    childrenAvailable: false,
  },
];

const otherItemsData: PriceRow[] = [
  {
    type: "bluza hoodie z zamkiem",
    version: "classic",
    quantity: ["1 do 4", "5 do 19", "20 do 39", "40 do 79", "80 do 200"],
    prices: [90, 85, 80, 75, 70],
  },
  {
    type: "bluza hoodie z zamkiem",
    version: "premium",
    quantity: ["1 do 4", "5 do 19", "20 do 39", "40 do 79", "80 do 200"],
    prices: [100, 95, 90, 85, 80],
  },
  {
    type: "kamizelka odblaskowa",
    version: "grubotkana",
    quantity: ["1 do 4", "5 do 19", "20 do 39", "40 do 79", "80 do 200"],
    prices: [15, 14, 13, 12, 11],
  },
  {
    type: "torba bawełniana",
    version: "ecru",
    quantity: ["1 do 4", "5 do 19", "20 do 39", "40 do 79", "80 do 200"],
    prices: [6, 5.5, 5, 4.5, 4],
  },
];

const printData: PriceRow[] = [
  {
    type: "Nadruki",
    version: "A3",
    quantity: ["1 do 4", "5 do 19", "20 do 39", "40 do 79", "80 do 200"],
    prices: [50, 45, 40, 35, 30],
  },
  {
    type: "Nadruki",
    version: "A4",
    quantity: ["1 do 4", "5 do 19", "20 do 39", "40 do 79", "80 do 200"],
    prices: [40, 35, 30, 25, 20],
  },
  {
    type: "Nadruki",
    version: "A5",
    quantity: ["1 do 4", "5 do 19", "20 do 39", "40 do 79", "80 do 200"],
    prices: [30, 25, 20, 15, 10],
  },
  {
    type: "Nadruki",
    version: "mały",
    quantity: ["1 do 4", "5 do 19", "20 do 39", "40 do 79", "80 do 200"],
    prices: [12, 10, 8, 8, 8],
  },
];

const combinedTableData = [
  ...tableData,
  ...poloShirtData,
  ...otherItemsData,
  ...printData,
];

const PriceTable: React.FC = () => {
  return (
    <div>
      <StyledTable>
        <thead>
          <StyledRow>
            <StyledHeadCell>Rodzaj odzieży</StyledHeadCell>
            <StyledHeadCell>Wersja</StyledHeadCell>
            {combinedTableData[0].quantity.map((q, index) => (
              <StyledHeadCell key={index}>{q}</StyledHeadCell>
            ))}
            <StyledHeadCell>Czy XXXL (+5zł)</StyledHeadCell>
            <StyledHeadCell>Czy dziecięca (+1zł)</StyledHeadCell>
          </StyledRow>
        </thead>
        <tbody>
          {combinedTableData.map((row, rowIndex) => (
            <StyledRow key={rowIndex}>
              <StyledCell>{row.type}</StyledCell>
              <StyledCell>{row.version}</StyledCell>
              {row.prices.map((price, priceIndex) => (
                <StyledCell key={priceIndex}>{price}</StyledCell>
              ))}
              <StyledCell>{row.xxxlAvailable ? "Tak" : "Nie"}</StyledCell>
              <StyledCell>{row.childrenAvailable ? "Tak" : "Nie"}</StyledCell>
            </StyledRow>
          ))}
        </tbody>
      </StyledTable>
    </div>
  );
};

export default PriceTable;
