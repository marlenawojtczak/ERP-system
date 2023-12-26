import { FormDataType } from "../FormComponent";

export const saveObjectToLocalStorage = (object: FormDataType) => ({
  type: "SAVE_OBJECT_TO_LOCAL_STORAGE",
  payload: object,
});
