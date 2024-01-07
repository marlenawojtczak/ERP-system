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

const tshirtData: PriceRow[] = [
  {
    type: "koszulka ekonomiczna",
    version: "biała",
    quantity: ["1 do 4", "5 do 19", "20 do 39", "40 do 79", "80 do 200"],
    prices: [18, 16, 15, 14, 13],
    xxxlAvailable: false,
    childrenAvailable: false,
  },
  {
    type: "koszulka ekonomiczna",
    version: "kolor",
    quantity: ["1 do 4", "5 do 19", "20 do 39", "40 do 79", "80 do 200"],
    prices: [20, 18, 17, 16, 15],
    xxxlAvailable: false,
    childrenAvailable: false,
  },
  {
    type: "koszulka standardowa",
    version: "biała",
    quantity: ["1 do 4", "5 do 19", "20 do 39", "40 do 79", "80 do 200"],
    prices: [20, 18, 17, 16, 15],
    xxxlAvailable: false,
    childrenAvailable: false,
  },
  {
    type: "koszulka standardowa",
    version: "kolor",
    quantity: ["1 do 4", "5 do 19", "20 do 39", "40 do 79", "80 do 200"],
    prices: [22, 20, 19, 18, 17],
    xxxlAvailable: false,
    childrenAvailable: false,
  },
  {
    type: "koszulka premium",
    version: "biała",
    quantity: ["1 do 4", "5 do 19", "20 do 39", "40 do 79", "80 do 200"],
    prices: [26, 24, 22, 21, 17],
    xxxlAvailable: false,
    childrenAvailable: false,
  },
  {
    type: "koszulka premium",
    version: "kolor",
    quantity: ["1 do 4", "5 do 19", "20 do 39", "40 do 79", "80 do 200"],
    prices: [28, 26, 24, 23, 19],
    xxxlAvailable: false,
    childrenAvailable: false,
  },
];

const poloShirtData: PriceRow[] = [
  {
    type: "koszulka polo standardowa 177g",
    version: "biała",
    quantity: ["1 do 4", "5 do 19", "20 do 39", "40 do 79", "80 do 200"],
    prices: [38, 38, 38, 38, 38],
    xxxlAvailable: false,
    childrenAvailable: false,
  },
  {
    type: "koszulka polo standardowa 177g",
    version: "kolor",
    quantity: ["1 do 4", "5 do 19", "20 do 39", "40 do 79", "80 do 200"],
    prices: [41, 41, 41, 41, 41],
    xxxlAvailable: false,
    childrenAvailable: false,
  },
  {
    type: "koszulka polo premium 223g",
    version: "biała",
    quantity: ["1 do 4", "5 do 19", "20 do 39", "40 do 79", "80 do 200"],
    prices: [42, 42, 42, 42, 42],
    xxxlAvailable: false,
    childrenAvailable: false,
  },
  {
    type: "koszulka polo premium 223g",
    version: "kolor",
    quantity: ["1 do 4", "5 do 19", "20 do 39", "40 do 79", "80 do 200"],
    prices: [46, 46, 46, 46, 46],
    xxxlAvailable: false,
    childrenAvailable: false,
  },
  {
    type: "koszulka polo FOTL standardowa",
    version: "biała",
    quantity: ["1 do 4", "5 do 19", "20 do 39", "40 do 79", "80 do 200"],
    prices: [35, 35, 35, 35, 35],
    xxxlAvailable: false,
    childrenAvailable: false,
  },
  {
    type: "koszulka polo FOTL standardowa",
    version: "kolor",
    quantity: ["1 do 4", "5 do 19", "20 do 39", "40 do 79", "80 do 200"],
    prices: [38, 38, 38, 38, 38],
    xxxlAvailable: false,
    childrenAvailable: false,
  },
  {
    type: "koszulka polo FOTL premium",
    version: "biała/kolor",
    quantity: ["1 do 4", "5 do 19", "20 do 39", "40 do 79", "80 do 200"],
    prices: [50, 50, 50, 50, 50],
    xxxlAvailable: false,
    childrenAvailable: false,
  },
  {
    type: "koszulka polo FOTL 35/65",
    version: "biała/kolor",
    quantity: ["1 do 4", "5 do 19", "20 do 39", "40 do 79", "80 do 200"],
    prices: [49, 49, 49, 49, 49],
    xxxlAvailable: false,
    childrenAvailable: false,
  },
];

const otherItemsData: PriceRow[] = [
  {
    type: "bluza hoodie z zamkiem",
    version: "classic",
    quantity: ["1 do 4", "5 do 19", "20 do 39", "40 do 79", "80 do 200"],
    prices: [90, 90, 90, 90, 90],
  },
  {
    type: "bluza hoodie z zamkiem",
    version: "premium",
    quantity: ["1 do 4", "5 do 19", "20 do 39", "40 do 79", "80 do 200"],
    prices: [100, 100, 100, 100, 100],
  },
  {
    type: "bluza hoodie bez zamka",
    version: "classic",
    quantity: ["1 do 4", "5 do 19", "20 do 39", "40 do 79", "80 do 200"],
    prices: [80, 80, 80, 80, 80],
  },
  {
    type: "bluza hoodie bez zamka",
    version: "premium",
    quantity: ["1 do 4", "5 do 19", "20 do 39", "40 do 79", "80 do 200"],
    prices: [90, 90, 90, 90, 90],
  },
  {
    type: "bluza bez kaptura i kieszeni",
    version: "classic",
    quantity: ["1 do 4", "5 do 19", "20 do 39", "40 do 79", "80 do 200"],
    prices: [70, 70, 70, 70, 70],
  },
  {
    type: "bluza bez kaptura i kieszeni",
    version: "premium",
    quantity: ["1 do 4", "5 do 19", "20 do 39", "40 do 79", "80 do 200"],
    prices: [80, 80, 80, 80, 80],
  },
  {
    type: "kamizelka odblaskowa",
    version: "grubotkana",
    quantity: ["1 do 4", "5 do 19", "20 do 39", "40 do 79", "80 do 200"],
    prices: [15, 15, 15, 15, 15],
  },
  {
    type: "torba bawełniana",
    version: "ecru",
    quantity: ["1 do 4", "5 do 19", "20 do 39", "40 do 79", "80 do 200"],
    prices: [6, 6, 6, 6, 6],
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
    prices: [12, 10, 10, 8, 8],
  },
];

const combinedTableData = [
  ...tshirtData,
  ...poloShirtData,
  ...otherItemsData,
  ...printData,
];

const jsonData = JSON.stringify(combinedTableData);
localStorage.setItem("priceListData", jsonData);

// console.log("jsonData:", jsonData);

const jsonParsedData = JSON.parse(jsonData);
localStorage.setItem("priceListData", JSON.stringify(jsonParsedData));
const retrievedData = localStorage.getItem("priceListData");
const priceListData = JSON.parse(retrievedData);
const standardShirtData = priceListData[2];
console.log("Dane koszulki standardowej:", standardShirtData);

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
