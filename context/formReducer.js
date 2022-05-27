import { GET_INFO } from "types";

const userReducer = (state, action) => {
  switch (action.type) {
    case GET_INFO:
      return {
        ...state,
        usersInfo: action.payload,
      };
    default:
      return state;
  }
};
export default userReducer;
