import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/types";

export const Length = () => {
  const totalLength = useSelector((state: RootState) => state.totalLength);

  const formatPxToMb = (nbInPixels: number) => {
    const nbInMeters = Number(nbInPixels * 0.000091).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
    return nbInMeters;
  };

  return (
    <>
      <p>Całkowita długość w pikselach: {totalLength} pikseli</p>
      <p>Całkowita długość w metrach: {formatPxToMb(totalLength)} metrów</p>
    </>
  );
};
