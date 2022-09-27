import { AddCircle } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { Stack } from "@mui/system";
import { useState } from "react";
import { ColorCell } from "../ColorCell";
import { ColorPickerDialog } from "../ColorPickerDialog";

type PaletteAreaProps = {
  setSelectedColor: Function;
};

export const PaletteArea = (props: PaletteAreaProps) => {
  const { setSelectedColor } = props;
  const [open, setOpen] = useState(false);

  const [palette, setPalette] = useState([
    "#ff8a8aff",
    "#ccff8aff",
    "#8ac7ffff",
  ]);
  const paletteElements = [];

  const changeColor = (index: number) => {
    return () => {
      setSelectedColor(palette[index]);
    };
  };

  const handleClose = () => {
    setOpen(false);
  };

  const addColor = (color: string) => {
    console.log(color);
    palette.push(color);
    setPalette(palette.concat());
  };

  for (let index = 0; index < palette.length; index++) {
    paletteElements.push(
      <ColorCell
        key={index}
        color={palette[index]}
        onMouseDown={changeColor(index)}
      ></ColorCell>
    );
  }
  return (
    <Stack direction={"row"} alignItems={"center"}>
      {paletteElements}
      <IconButton
        onClick={() => {
          setOpen(true);
        }}
      >
        <AddCircle></AddCircle>
      </IconButton>
      <ColorPickerDialog
        open={open}
        onClose={handleClose}
        addColor={addColor}
      ></ColorPickerDialog>
    </Stack>
  );
};

PaletteArea.defaultProps = {
  setSelectedColor: () => {
    console.log("click");
  },
};
