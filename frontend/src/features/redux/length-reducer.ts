import { RootState } from "./types";
import { AnyAction } from "redux";

const initialState: RootState = {
  totalLength: 0,
};

const lengthReducer = (state: RootState = initialState, action: AnyAction) => {
  switch (action.type) {
    case "SET_TOTAL_LENGTH":
      return {
        ...state,
        totalLength: action.payload,
      };
    // Other action cases...
    default:
      return state;
  }
};

export default lengthReducer;
