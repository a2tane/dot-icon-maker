import { AddCircle } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { Stack } from "@mui/system";
import { ColorCell } from "../ColorCell";

type PaletteAreaProps = {
  setSelectedColor: Function;
};

export const PaletteArea = (props: PaletteAreaProps) => {
  const { setSelectedColor } = props;
  const palette = ["#f0f8ff", "#008080", "#fafad2"];
  const paletteElements = [];

  const changeColor = (index: number) => {
    return () => {
      setSelectedColor(palette[index]);
    };
  };

  for (let index = 0; index < palette.length; index++) {
    paletteElements.push(
      <ColorCell
        key={index}
        color={palette[index]}
        callback={changeColor(index)}
      ></ColorCell>
    );
  }
  return (
    <Stack direction={"row"} alignItems={"center"}>
      {paletteElements}
      <IconButton>
        <AddCircle></AddCircle>
      </IconButton>
    </Stack>
  );
};

PaletteArea.defaultProps = {
  setSelectedColor: () => {
    console.log("click");
  },
};
