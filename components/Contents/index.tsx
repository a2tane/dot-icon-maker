import { Stack } from "@mui/system";
import { useEffect, useState } from "react";
import { Canvas, download, Size } from "../../util";
import { CanvasArea } from "../CanvasArea";
import { PaletteArea } from "../PaletteArea";
import { SizeArea } from "../SizeArea";
import { ToolsArea } from "../ToolsArea";

const initCanvas = (x: number, y: number): Canvas => {
  let canvas = [];
  for (let index_y = 0; index_y < y; index_y++) {
    let canvasRow = [];
    for (let index_x = 0; index_x < x; index_x++) {
      canvasRow.push({ color: "#FFFFFF" });
    }
    canvas.push(canvasRow);
  }
  return { cells: canvas };
};

export const Contents = () => {
  const [canvasSize, setCanvasSize] = useState<Size>({ x: 5, y: 5 });
  const [canvas, setCanvas] = useState<Canvas>(
    initCanvas(canvasSize.x, canvasSize.y)
  );
  const [selectedColor, setSelectedColor] = useState("");

  useEffect(() => {
    setCanvas(initCanvas(canvasSize.x, canvasSize.y));
  }, [canvasSize]);

  return (
    <Stack alignItems={"center"} spacing={"30px"}>
      <SizeArea setCanvasSize={setCanvasSize}></SizeArea>
      <CanvasArea
        selectedColor={selectedColor}
        canvas={canvas}
        setCanvas={setCanvas}
      ></CanvasArea>
      <PaletteArea setSelectedColor={setSelectedColor}></PaletteArea>
      <ToolsArea
        download={() => {
          download(canvas);
        }}
      ></ToolsArea>
    </Stack>
  );
};
