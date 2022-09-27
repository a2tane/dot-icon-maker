import { Stack, TextField } from "@mui/material";
import { useState } from "react";

type SizeAreaProps = {
  setCanvasSize: Function;
};

export const SizeArea = (props: SizeAreaProps) => {
  const { setCanvasSize } = props;
  const [size, setSize] = useState({ x: 5, y: 5 });

  const handleOnChange = (type: "X" | "Y", value: number) => {
    // 正方形じゃないと画像が正常に出力されないので、X,Yは同じ値が入るようにひとまず変更
    switch (type) {
      case "X":
        setSize({
          x: value,
          y: value,
        });
        setCanvasSize({
          x: value,
          y: value,
        });
        break;
      case "Y":
        setSize({
          x: value,
          y: value,
        });
        setCanvasSize({
          x: value,
          y: value,
        });
        break;
      default:
        break;
    }
  };
  return (
    <Stack direction={"row"} spacing={"15px"}>
      <TextField
        label="X"
        value={size.x}
        onChange={(event) => {
          handleOnChange("X", Number(event.target.value));
        }}
      ></TextField>
      <TextField
        label="Y"
        value={size.y}
        onChange={(event) => {
          handleOnChange("Y", Number(event.target.value));
        }}
      ></TextField>
    </Stack>
  );
};

SizeArea.defaultProps = {
  changeCanvasSize: () => {
    console.log("change");
  },
};
