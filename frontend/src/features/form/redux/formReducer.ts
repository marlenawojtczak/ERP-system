import { FormDataType } from "../FormComponent";

interface AppState {
  savedObjects: FormDataType[];
}

const getInitialState = (): AppState => {
  const savedObjectsString = localStorage.getItem("savedObjects");
  const savedObjects = savedObjectsString ? JSON.parse(savedObjectsString) : [];

  return {
    savedObjects,
  };
};

const formReducer = (state: AppState = getInitialState(), action: any) => {
  switch (action.type) {
    case "SAVE_OBJECT_TO_LOCAL_STORAGE":
      const newSavedObjects = [...state.savedObjects, action.payload];

      localStorage.setItem("savedObjects", JSON.stringify(newSavedObjects));

      return {
        ...state,
        savedObjects: newSavedObjects,
      };

    default:
      return state;
  }
};

export default formReducer;
