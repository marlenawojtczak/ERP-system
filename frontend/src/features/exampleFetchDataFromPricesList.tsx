import React, { useState, useEffect } from "react";

// Typ dla danych cen
type PricesData = {
  id: string;
  createdAt: string;
  updatedAt: string;
  type: string;
  version: string;
  prices: number[];
  xxxlAvailable: boolean;
  childrenAvailable: boolean;
};

export const PriceCalculator = () => {
  // Stan dla danych cen
  const [priceData, setPriceData] = useState<PricesData[] | null>(null);

  const fetchPrices = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/prices");

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: PricesData = await response.json();
      setPriceData(data);
      console.log("data:", data);
      console.log("Second price from the first object:", data[0].prices[1]);

      return data;
    } catch (error) {
      console.error("There was an error fetching the prices:", error);
    }
  };

  useEffect(() => {
    fetchPrices();
  }, []);

  const getSecondPrice = () => {
    return priceData?.[0]?.prices?.[1] ?? "Loading...";
  };

  if (!priceData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Price Calculator</h1>
      <p>Second Price: {getSecondPrice()}</p>
      {/* Reszta UI */}
    </div>
  );
};
