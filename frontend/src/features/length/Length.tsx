import React from "react";

export const Length: React.FC = () => {
  const formatPxToMb = (nbInPixels: number) => {
    const nbInMeters = Number(nbInPixels * 0.000085).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
    return nbInMeters;
  };

  return (
    <>
      {/* <p>Całkowita długość w pikselach: {totalLength} pikseli</p> */}
      <p>Całkowita długość w metrach: {formatPxToMb(0)} metrów</p>
    </>
  );
};
