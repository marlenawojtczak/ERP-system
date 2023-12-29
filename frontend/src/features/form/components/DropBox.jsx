import React, { useCallback, useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import {
  DropBoxStyled,
  DropBoxList,
  DropBoxElement,
  CopiesInput,
  RollTypeInput,
  DropBoxImage,
  DropBoxRemoveBtn,
  RemoveIcon,
  DropBoxInfo,
} from "./DropBox.styled";

export const DropBox = ({
  localTotalLength: propLocalTotalLength,
  setLocalTotalLength,
  files,
  setFiles,
  imageInfo,
  setImageInfo,
}) => {
  const [rejected, setRejected] = useState([]);

  const loadImageInfo = async (file) => {
    return new Promise((resolve) => {
      const imageElement = new window.Image();

      imageElement.onload = () => {
        const length = imageElement.height;
        const width = imageElement.width;
        const copies = "1";

        setImageInfo((prevImageInfo) => ({
          ...prevImageInfo,
          [file.name]: { length, width, copies },
        }));

        resolve({ length, width, copies });
      };
      imageElement.src = URL.createObjectURL(file);
    });
  };

  const createThumbnail = (file, maxWidth, maxHeight) => {
    return new Promise((resolve) => {
      const image = new Image();
      image.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        const aspectRatio = image.width / image.height;
        let newWidth = image.width;
        let newHeight = image.height;

        if (newWidth > maxWidth) {
          newWidth = maxWidth;
          newHeight = newWidth / aspectRatio;
        }

        if (newHeight > maxHeight) {
          newHeight = 130;
          newWidth = newHeight * aspectRatio;
        }

        canvas.width = newWidth;
        canvas.height = newHeight;

        // Use Lanczos resampling for higher quality
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = "high";

        ctx.drawImage(image, 0, 0, newWidth, newHeight);

        canvas.toBlob((blob) => {
          const thumbnailFile = new File([blob], file.name, {
            type: file.type,
            lastModified: Date.now(),
          });
          resolve(thumbnailFile);
        }, file.type);
      };
      image.src = URL.createObjectURL(file);
    });
  };

  const onDrop = async (acceptedFiles, rejectedFiles) => {
    if (acceptedFiles?.length) {
      const newFiles = acceptedFiles.filter(
        (file) => !files.some((existingFile) => existingFile.name === file.name)
      );

      const updatedFiles = await Promise.all(
        newFiles.map(async (file) => {
          const { length, width, copies } = await loadImageInfo(file);
          const thumbnailFile = await createThumbnail(file, 100, 100);

          return Object.assign(thumbnailFile, {
            preview: URL.createObjectURL(thumbnailFile),
            originalFile: file,
            width,
            height: length,
            copies,
          });
        })
      );

      setFiles((previousFiles) => [...previousFiles, ...updatedFiles]);
    }

    if (rejectedFiles?.length) {
      setRejected((previousFiles) => [...previousFiles, ...rejectedFiles]);
      console.log("Wrong type of file");
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "image/*": [],
    },
    onDrop,
    noClick: true,
  });

  const removeFile = (name) => {
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
  }, [imageInfo, setLocalTotalLength]);

  const handleChange = (event, fileName) => {
    const inputValue = event.target.value;
    const copiesValue = inputValue > 0 ? inputValue : "1";

    setImageInfo((prevImageInfo) => ({
      ...prevImageInfo,
      [fileName]: {
        ...prevImageInfo[fileName],
        copies: copiesValue,
      },
    }));
  };

  const formatPxToMbCalc = (nbInPixels) => {
    const nbInMeters = Number(nbInPixels * 0.000085);
    return nbInMeters;
  };

  const checkRollType = (widthPx) => {
    const widthMb = formatPxToMbCalc(widthPx);
    const lengthMb = formatPxToMbCalc(propLocalTotalLength);

    if (lengthMb < 5.0) {
      if (widthMb > 0.43) {
        return "A3/R60";
      } else if (widthMb > 0.3) {
        return "A3/R40";
      } else {
        return "A3/R30";
      }
    } else if (widthMb > 0.43) {
      return "R60";
    } else if (widthMb > 0.3) {
      return "R40";
    } else {
      return "R30";
    }
  };

  return (
    <>
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
              <RollTypeInput
                type="text"
                name="roll"
                value={
                  imageInfo[file.name]
                    ? checkRollType(imageInfo[file.name].width)
                    : "0"
                }
              />
            </DropBoxElement>
          ))}
        </DropBoxList>
      </DropBoxStyled>
    </>
  );
};
