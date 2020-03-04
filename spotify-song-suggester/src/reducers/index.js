import { combineReducers } from "redux";
// Import all reducer files here
// import { loginReducer } from "./loginReducer";
import { favoriteReducer } from "./favoriteReducer";
import { SongListReducer } from "./SongListReducer"
 
const allReducers = combineReducers({
//   loginReducer: loginReducer,
  favoriteReducer: favoriteReducer,
  SongListReducer: SongListReducer

});

export default allReducers;