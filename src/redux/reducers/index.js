import { conmbinReducers } from "redu";
import { combineReducers } from "redux";
import calculator from "./calculator";

const reducer = combineReducers(calculator);

export default reducer;
　

//「conmbinReducers」　複数の reducerをまとめてくれる
//今回は一つのreducerなので本来は必要ない