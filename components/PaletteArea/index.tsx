import { AddCircle } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { Stack } from "@mui/system";
import { ColorCell } from "../ColorCell";

export const PaletteArea = () => {
  const palette = ["#f0f8ff", "#008080", "#fafad2"];
  const paletteElements = [];
  for (let index = 0; index < palette.length; index++) {
    paletteElements.push(<ColorCell key={index} color="#fafad2"></ColorCell>);
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
