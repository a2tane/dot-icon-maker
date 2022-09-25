import { Card, CardContent } from "@mui/material";
import { Stack } from "@mui/system";
import { useState } from "react";
import { Size } from "../../util";
import { CanvasArea } from "../CanvasArea";
import { PaletteArea } from "../PaletteArea";
import { SizeArea } from "../SizeArea";
import { ToolsArea } from "../ToolsArea";

export const Contents = () => {
  const [canvasSize, setCanvasSize] = useState<Size>({ x: 5, y: 5 });
  const [selectedColor, setSelectedColor] = useState("");

  const changeCanvasSize = (size: Size) => {
    setCanvasSize(size);
  };
  return (
    <Card>
      <CardContent>
        <Stack alignItems={"center"} spacing={"30px"}>
          <SizeArea changeCanvasSize={changeCanvasSize}></SizeArea>
          <CanvasArea
            selectedColor={selectedColor}
            canvasSize={canvasSize}
          ></CanvasArea>
          <PaletteArea setSelectedColor={setSelectedColor}></PaletteArea>
          <ToolsArea></ToolsArea>
        </Stack>
      </CardContent>
    </Card>
  );
};
