import { combineReducers } from 'redux';
import ReducerMonuments from "./reducer_monuments";
import ReducerSelectedMonument from "./reducer_selected_monument";

const rootReducer = combineReducers({
  monuments: ReducerMonuments,
  selectedMonument: ReducerSelectedMonument
});

export default rootReducer;
