import axios from "axios";

import {
  GET_SHOES,
  ADD_SHOE,
  UPDATE_SHOE,
  ENABLE_FLASH_MESSAGE,
} from "./types";

// Get Shoes
export const getShoes = () => (dispatch) => {
  axios
    .get(`${process.env.REACT_APP_API}/shoe`)
    .then((res) => {
      dispatch({
        type: GET_SHOES,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: ENABLE_FLASH_MESSAGE,
        payload: { message: "Error", type: "error" },
      });
    });
};
// Add Shoes
export const addShoe = (shoeData) => (dispatch) => {
  axios
    .post(`${process.env.REACT_APP_API}/shoe`, shoeData)
    .then((res) => {
      dispatch({
        type: ENABLE_FLASH_MESSAGE,
        payload: { message: res.data.message, type: "success" },
      });

      dispatch({
        type: ADD_SHOE,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: ENABLE_FLASH_MESSAGE,
        payload: { message: "Something Went wrong try again", type: "error" },
      });
    });
};
