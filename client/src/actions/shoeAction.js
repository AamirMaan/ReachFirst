import axios from "axios";

import {
  GET_SHOES,
  ADD_SHOE,
  UPDATE_SHOE,
  ENABLE_FLASH_MESSAGE,
  DELETE_SHOE,
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
      dispatch(getShoes());
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: ENABLE_FLASH_MESSAGE,
        payload: { message: "Something Went wrong try again", type: "error" },
      });
    });
};
// Update Shoe
export const updateShoe = (id, shoeData) => (dispatch) => {
  axios
    .patch(`${process.env.REACT_APP_API}/shoe?id=${id}`, shoeData)
    .then((res) => {
      dispatch({
        type: UPDATE_SHOE,
        payload: res.data,
      });
      dispatch(getShoes());
    })
    .catch((err) => {
      dispatch({
        type: ENABLE_FLASH_MESSAGE,
        payload: { message: "Error", type: "error" },
      });
    });
};
// Delete Shoes
export const deleteShoe = (id) => (dispatch) => {
  axios
    .delete(`${process.env.REACT_APP_API}/shoe?id=${id}`)
    .then((res) => {
      dispatch({
        type: ENABLE_FLASH_MESSAGE,
        payload: { message: res.data.message, type: "success" },
      });
      dispatch(getShoes());
      dispatch({
        type: DELETE_SHOE,
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
