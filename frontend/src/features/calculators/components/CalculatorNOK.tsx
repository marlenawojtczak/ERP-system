import { useState } from "react";

export const CalculatorNOK = () => {
  const [grossPrice, setGrossPrice] = useState(0);
  const [netPrice, setNetPrice] = useState(0);
  const [selectedValue, setSelectedValue] = useState("");
  const [quantities, setQuantities] = useState({
    a3: 0,
    a4: 0,
    a5: 0,
    mały: 0,
  });

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const quantityInput = form.elements.namedItem(
      "quantity"
    ) as HTMLInputElement;
    const quantity = parseFloat(quantityInput.value);

    switch (selectedValue) {
      case "a3":
      case "a4":
      case "a5":
      case "mały":
        setQuantities((prevQuantities) => ({
          ...prevQuantities,
          [selectedValue]: prevQuantities[selectedValue] + quantity,
        }));
        break;

      default:
        console.log("Invalid subscription type");

      // obsłużyć błąd biblioteką
    }

    setSelectedValue("");
    form.reset();
  };

  const handleDelete = (size: "a3" | "a4" | "a5" | "mały") => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [size]: 0,
    }));
  };

  const a3Calculation = (): number => {
    const a3Quantity = quantities.a3;
    let a3NetSum;

    if (a3Quantity >= 1 && a3Quantity <= 4) {
      a3NetSum = a3Quantity * 50;
    } else if (a3Quantity >= 5 && a3Quantity <= 19) {
      a3NetSum = a3Quantity * 45;
    } else if (a3Quantity >= 20 && a3Quantity <= 39) {
      a3NetSum = a3Quantity * 40;
    } else if (a3Quantity >= 40 && a3Quantity <= 79) {
      a3NetSum = a3Quantity * 35;
    } else if (a3Quantity >= 80 && a3Quantity <= 200) {
      a3NetSum = a3Quantity * 30;
    }

    return a3NetSum || 0;
  };

  const a4Calculation = (): number => {
    const a4Quantity = quantities.a4;
    let a4NetSum;

    if (a4Quantity >= 1 && a4Quantity <= 4) {
      a4NetSum = a4Quantity * 40;
    } else if (a4Quantity >= 5 && a4Quantity <= 19) {
      a4NetSum = a4Quantity * 35;
    } else if (a4Quantity >= 20 && a4Quantity <= 39) {
      a4NetSum = a4Quantity * 30;
    } else if (a4Quantity >= 40 && a4Quantity <= 79) {
      a4NetSum = a4Quantity * 25;
    } else if (a4Quantity >= 80 && a4Quantity <= 200) {
      a4NetSum = a4Quantity * 20;
    }

    return a4NetSum || 0;
  };

  const a5Calculation = (): number => {
    const a5Quantity = quantities.a5;
    let a5NetSum;

    if (a5Quantity >= 1 && a5Quantity <= 4) {
      a5NetSum = a5Quantity * 30;
    } else if (a5Quantity >= 5 && a5Quantity <= 19) {
      a5NetSum = a5Quantity * 25;
    } else if (a5Quantity >= 20 && a5Quantity <= 39) {
      a5NetSum = a5Quantity * 20;
    } else if (a5Quantity >= 40 && a5Quantity <= 79) {
      a5NetSum = a5Quantity * 15;
    } else if (a5Quantity >= 80 && a5Quantity <= 200) {
      a5NetSum = a5Quantity * 10;
    }

    return a5NetSum || 0;
  };

  const smallCalculation = (): number => {
    const smallQuantity = quantities.mały;
    let smallNetSum;

    if (smallQuantity >= 1 && smallQuantity <= 4) {
      smallNetSum = smallQuantity * 12;
    } else if (smallQuantity >= 5 && smallQuantity <= 19) {
      smallNetSum = smallQuantity * 25;
    } else if (smallQuantity >= 20 && smallQuantity <= 39) {
      smallNetSum = smallQuantity * 20;
    } else if (smallQuantity >= 40 && smallQuantity <= 79) {
      smallNetSum = smallQuantity * 15;
    } else if (smallQuantity >= 80 && smallQuantity <= 200) {
      smallNetSum = smallQuantity * 10;
    }

    return smallNetSum || 0;
  };

  const handleCalculation = () => {
    const a3Result = a3Calculation();
    const a4Result = a4Calculation();
    const a5Result = a5Calculation();
    const smallResult = smallCalculation();

    setNetPrice(a3Result + a4Result + a5Result + smallResult);
    setGrossPrice((a3Result + a4Result + a5Result + smallResult) * 1.23);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="printSize"> Wielkość nadruku:</label>
        <select
          name="prints"
          id="printSize"
          value={selectedValue}
          onChange={handleSelectChange}
        >
          <option value="">Wybierz rozmiar</option>
          <option value="a3">A3</option>
          <option value="a4">A4</option>
          <option value="a5">A5</option>
          <option value="mały">mały</option>
        </select>
        <label>
          Ilość
          <input type="number" name="quantity" placeholder="0" required></input>
        </label>
        <button type="submit">Dodaj</button>
      </form>
      {Object.entries(quantities).map(
        ([size, count]) =>
          count !== 0 && (
            <div key={size}>
              <p>
                {size}: {count}
              </p>
              <button
                type="button"
                onClick={() =>
                  handleDelete(size as "a3" | "a4" | "a5" | "mały")
                }
              >
                x
              </button>
            </div>
          )
      )}
      <button type="button" onClick={handleCalculation}>
        Oblicz koszt
      </button>
      <p>
        {grossPrice}zł brutto ({netPrice}zł netto)
      </p>
    </>
  );
};
