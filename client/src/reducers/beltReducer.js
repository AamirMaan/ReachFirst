import { GET_BELT, ADD_BELT, UPDATE_BELT } from "../actions/types";

const initialState = {
  belts: [],
  belt: {},
  beltLoading: true,
};

const beltReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_BELT:
      return {
        ...state,
        belts: payload,
        beltLoading: false,
      };
    case ADD_BELT:
      return {
        ...state,
        beltLoading: false,
      };
    case UPDATE_BELT:
      return {
        ...state,
        beltLoading: false,
      };
    default:
      return state;
  }
};
export default beltReducer;
