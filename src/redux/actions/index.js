import {
  INPUT_NUMBER,
  PLUS,
  MINUS,
  MULTIPLY,
  DIVIDE,
  EQUAL,
  CLEAR,
} from "./types";

//numberがクリックされた時のイベント
export const onNumberClick = (number) => ({
  type: INPUT_NUMBER,
  number,
});

// //numberをクリックした時のイベントを定義
// 引数でnumberを受け取ってそれをpaloadとして
//ディビューサーに渡す
//payloadのバリューとキーが一緒の場合は省略して「number」でよい

//プラスボタンが押された時のイベント
export const onPlusClick = () => ({
  type: PLUS,
});

//マイナスボタンがクリックされた時のイベント
export const onMinusClick = () => ({
  type: MINUS,
});

//マルチプレイがクリックされた時のイベント
export const onMultiplayClick = () => ({
  type: MULTIPLY,
});

//ディバイドがクリックされた時のイベント
export const onDivideClick = () => ({
  type: DIVIDE,
});

//マルチプレイがクリックされた時のイベント
export const onEqualClick = () => ({
  type: EQUAL,
});

//ディバイドがクリックされた時のイベント
export const onClearClick = () => ({
  type: CLEAR,
});
