import {
  OPEN,
} from "types";

const productReducer = (state, action) => {
  switch (action.type) {
    case OPEN:
      return {
        ...state,
        productsDetail: action.payload,
      };
    default:
      return state;
  }
};
export default productReducer;
