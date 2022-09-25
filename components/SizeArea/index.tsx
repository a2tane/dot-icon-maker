import { Stack, TextField } from "@mui/material";
import { useState } from "react";

type SizeAreaProps = {
  changeCanvasSize: Function;
};

export const SizeArea = (props: SizeAreaProps) => {
  const { changeCanvasSize } = props;
  const [size, setSize] = useState({ x: 5, y: 5 });

  const changeSize = (type: "X" | "Y", value: number) => {
    switch (type) {
      case "X":
        setSize({
          ...size,
          x: value,
        });
        changeCanvasSize({
          ...size,
          x: value,
        });
        break;
      case "Y":
        setSize({
          ...size,
          y: value,
        });
        changeCanvasSize({
          ...size,
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
          changeSize("X", Number(event.target.value));
        }}
      ></TextField>
      <TextField
        label="Y"
        value={size.y}
        onChange={(event) => {
          changeSize("Y", Number(event.target.value));
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
