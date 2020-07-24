import {
  GET_SHOES,
  ADD_SHOE,
  UPDATE_SHOE,
  DELETE_SHOE,
} from "../actions/types";

const initialState = {
  shoes: [],
  shoe: {},
  shoeLoading: true,
};

const beltReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_SHOES:
      return {
        ...state,
        shoes: payload,
        shoeLoading: false,
      };
    case ADD_SHOE:
      return {
        ...state,
        shoeLoading: false,
      };
    case UPDATE_SHOE:
      return {
        ...state,
        shoeLoading: false,
      };
    case DELETE_SHOE:
      return {
        ...state,
        shoeLoading: false,
      };
    default:
      return state;
  }
};
export default beltReducer;
