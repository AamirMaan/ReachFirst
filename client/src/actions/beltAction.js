import axios from "axios";

import {
  GET_BELT,
  ADD_BELT,
  UPDATE_BELT,
  ENABLE_FLASH_MESSAGE,
  DELETE_BELT,
} from "./types";

// Get Belts
export const getBelts = () => (dispatch) => {
  axios
    .get(`${process.env.REACT_APP_API}/belt`)
    .then((res) => {
      dispatch({
        type: GET_BELT,
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
// Update Belt
export const updateBelt = (beltData) => (dispatch) => {
  axios
    .patch(`${process.env.REACT_APP_API}/belt`)
    .then((res) => {
      dispatch({
        type: UPDATE_BELT,
        payload: res.data,
      });
      dispatch(getBelts());
    })
    .catch((err) => {
      dispatch({
        type: ENABLE_FLASH_MESSAGE,
        payload: { message: "Error", type: "error" },
      });
    });
};
// Add Belts
export const addBelt = (beltData) => (dispatch) => {
  axios
    .post(`${process.env.REACT_APP_API}/belt`, beltData)
    .then((res) => {
      dispatch({
        type: ENABLE_FLASH_MESSAGE,
        payload: { message: res.data.message, type: "success" },
      });

      dispatch({
        type: ADD_BELT,
        payload: res.data,
      });
      dispatch(getBelts());
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: ENABLE_FLASH_MESSAGE,
        payload: { message: "Something Went wrong try again", type: "error" },
      });
    });
};
// Delete Belt
export const deleteBelt = (id) => (dispatch) => {
  axios
    .delete(`${process.env.REACT_APP_API}/belt?id=${id}`)
    .then((res) => {
      dispatch({
        type: ENABLE_FLASH_MESSAGE,
        payload: { message: res.data.message, type: "success" },
      });
      dispatch(getBelts());
      dispatch({
        type: DELETE_BELT,
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
