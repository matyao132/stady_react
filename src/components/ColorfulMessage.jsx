import React from "react";

export const ColorfulMessage = (props) => {
  // 分割代入よく使う
  const { color, children } = props;
  const contentStyle = {
    // 変数が同じときはコロンの前を省略できる
    color,
    fontSize: "18px"
  };
  // タグの間の要素はchildrenに入ってくる
  return <p style={contentStyle}>{children}</p>;
};
