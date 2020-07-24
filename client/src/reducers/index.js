import { combineReducers } from "redux";
import shoeReducer from "./shoeReducer";
import beltReducer from "./beltReducer";
import flashReducer from "./flashReducer";

export default combineReducers({
  shoe: shoeReducer,
  belt: beltReducer,
  flash: flashReducer,
});
