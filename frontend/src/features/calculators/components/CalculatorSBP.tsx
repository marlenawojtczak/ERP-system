import { nanoid } from "nanoid";
import { useState } from "react";

interface SubmittedData {
  id: string;
  width: number;
  height: number;
  quantity: number;
}

export const CalculatorSBP = () => {
  const [squareMeter, setSquareMeter] = useState(0);
  const [grossPrice, setGrossPrice] = useState(0);
  const [netPrice, setNetPrice] = useState(0);
  const [submittedData, setSubmittedData] = useState<SubmittedData[]>([]);
  let id = nanoid();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const widthInput = form.elements.namedItem("width") as HTMLInputElement;
    const heightInput = form.elements.namedItem("height") as HTMLInputElement;
    const quantityInput = form.elements.namedItem(
      "quantity"
    ) as HTMLInputElement;

    const width = parseFloat(widthInput.value);
    const height = parseFloat(heightInput.value);
    const quantity = parseFloat(quantityInput.value);

    setSquareMeter(
      (prevSquareMeter) => prevSquareMeter + width * height * quantity
    );

    setSubmittedData((prevSubmittedData) => [
      ...prevSubmittedData,
      { id, width, height, quantity },
    ]);

    form.reset();
  };

  const handleDelete = (id: string) => {
    setSubmittedData((prevSubmittedData) => {
      const deletedItem = prevSubmittedData.find((data) => data.id === id);

      if (deletedItem) {
        setSquareMeter(
          (prevSquareMeter) =>
            prevSquareMeter -
            deletedItem.width * deletedItem.height * deletedItem.quantity
        );
      }

      return prevSubmittedData.filter((data) => data.id !== id);
    });
  };

  const handleCalculation = () => {
    setGrossPrice(squareMeter * 5);
    setNetPrice(parseFloat(((squareMeter * 5) / 1.23).toFixed(2)));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Format (cm)
          <input
            type="number"
            name="width"
            placeholder="szerokość"
            required
          ></input>
          <span>x</span>
          <input
            type="number"
            name="height"
            placeholder="wysokość"
            required
          ></input>
        </label>
        <label>
          Ilość
          <input type="number" name="quantity" placeholder="0" required></input>
        </label>
        <button type="submit">Dodaj</button>
      </form>
      {submittedData.map((data) => (
        <div key={data.id}>
          <p>szerokość: {data.width}</p>
          <span>x</span>
          <p>wysokość: {data.height}</p>
          <p>ilość: {data.quantity}</p>
          <button type="button" onClick={() => handleDelete(data.id)}>
            x
          </button>
        </div>
      ))}
      <button type="button" onClick={handleCalculation}>
        Oblicz koszt
      </button>
      <p>
        {grossPrice}zł (brutto) {netPrice}zł (netto)
      </p>
    </>
  );
};
