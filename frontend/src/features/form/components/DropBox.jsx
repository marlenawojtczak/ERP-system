import React, { useCallback, useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { useDispatch, useSelector } from "react-redux";
import { setTotalLength } from "../../redux/actions";
import {
  Form,
  DropBoxStyled,
  DropBoxList,
  DropBoxElement,
  CopiesInput,
  DropBoxImage,
  DropBoxRemoveBtn,
  RemoveIcon,
  PrintBtn,
  DropBoxInfo,
} from "./DropBox.styled";

export const DropBox = () => {
  const [files, setFiles] = useState([]);
  const [rejected, setRejected] = useState([]);
  const [imageInfo, setImageInfo] = useState({});
  const [localTotalLength, setLocalTotalLength] = useState(0);

  const dispatch = useDispatch();
  const totalLength = useSelector((state) => state.totalLength);

  const onDrop = useCallback(
    (acceptedFiles, rejectedFiles) => {
      if (acceptedFiles?.length) {
        const newFiles = acceptedFiles.filter(
          (file) =>
            !files.some((existingFile) => existingFile.name === file.name)
        );
        const updatedFiles = newFiles.map((file) => {
          const reader = new FileReader();

          reader.onload = () => {
            const imageElement = new window.Image();
            imageElement.onload = () => {
              const length = imageElement.height;
              const copies = "1";

              setImageInfo((prevImageInfo) => ({
                ...prevImageInfo,
                [file.name]: { length: length, copies: copies },
              }));
            };
            imageElement.src = reader.result;
          };

          reader.readAsDataURL(file);

          return Object.assign(file, { preview: URL.createObjectURL(file) });
        });

        setFiles((previousFiles) => [...previousFiles, ...updatedFiles]);
      }

      if (rejectedFiles?.length) {
        setRejected((previousFiles) => [...previousFiles, ...rejectedFiles]);
        console.log("Wrong type of file");
      }
    },
    [files]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "image/*": [],
    },
    onDrop,
    noClick: true,
  });

  const removeFile = (name) => {
    const length = imageInfo[name] || 0;
    setFiles((prevFiles) => prevFiles.filter((file) => file.name !== name));
    setImageInfo((prevImageInfo) => {
      const newImageInfo = { ...prevImageInfo };
      delete newImageInfo[name];
      return newImageInfo;
    });
  };

  let totalLengthTimesCopies = 0;

  useEffect(() => {
    const totalLengthTimesCopies = Object.values(imageInfo).reduce(
      (total, obj) => {
        const length = obj.length || 0;
        const copies = parseInt(obj.copies) || 1;
        return total + length * copies;
      },
      0
    );

    setLocalTotalLength(totalLengthTimesCopies);
    dispatch(setTotalLength(totalLengthTimesCopies));
  }, [dispatch, imageInfo]);

  const handleChange = (event, fileName) => {
    setImageInfo((prevImageInfo) => ({
      ...prevImageInfo,
      [fileName]: {
        ...prevImageInfo[fileName],
        copies: event.target.value,
      },
    }));
  };

  const handlePrint = () => {
    window.print();
  };

  const formatPxToMb = (nbInPixels) => {
    const nbInMeters = Number(nbInPixels * 0.000091).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
    return nbInMeters;
  };

  console.log("totallength", totalLength);

  return (
    <Form>
      <DropBoxStyled {...getRootProps()}>
        <input {...getInputProps()} />
        {files.length > 0 ? (
          <></>
        ) : (
          <DropBoxInfo>Tutaj przeciągnij swoje pliki</DropBoxInfo>
        )}

        <DropBoxList>
          {files.map((file) => (
            <DropBoxElement key={file.name}>
              <CopiesInput
                type="text"
                name="copies"
                value={imageInfo[file.name] ? imageInfo[file.name].copies : "1"}
                onChange={(e) => handleChange(e, file.name)}
              />

              <DropBoxImage
                src={file.preview}
                alt={file.name}
                width={100}
                height={100}
              />
              <DropBoxRemoveBtn
                type="button"
                onClick={() => removeFile(file.name, file.height)}
              >
                <RemoveIcon>X</RemoveIcon>
              </DropBoxRemoveBtn>
            </DropBoxElement>
          ))}
        </DropBoxList>
      </DropBoxStyled>
      <PrintBtn type="button" onClick={handlePrint}>
        Wydrukuj
      </PrintBtn>
    </Form>
  );
};
