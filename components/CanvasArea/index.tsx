import { Stack } from "@mui/system";
import { useState } from "react";
import { Canvas } from "../../util";
import { ColorCell } from "../ColorCell";

type CanvasAreaProps = {
  selectedColor: string;
  canvas: Canvas;
  setCanvas: Function;
};

export const CanvasArea = (props: CanvasAreaProps) => {
  const { selectedColor, canvas, setCanvas } = props;
  const [isDrawing, setIsDrawing] = useState(false);

  const changeColor = (x: number, y: number) => {
    return () => {
      canvas.cells[y][x] = { color: selectedColor };
      setCanvas({ ...canvas });
    };
  };

  let cells = [];
  for (let index_y = 0; index_y < canvas.cells.length; index_y++) {
    let row = [];
    for (let index_x = 0; index_x < canvas.cells[0].length; index_x++) {
      row.push(
        <ColorCell
          key={`${index_x}-${index_y}`}
          callback={changeColor(index_x, index_y)}
          color={canvas.cells[index_y][index_x].color || "#FFFFFFFF"}
          isDrawing={isDrawing}
        ></ColorCell>
      );
    }
    cells.push(
      <Stack
        onMouseDown={() => {
          setIsDrawing(true);
          console.log("down");
        }}
        onMouseUp={() => {
          setIsDrawing(false);
          console.log("up");
        }}
        key={index_y}
        direction={"row"}
      >
        {row}
      </Stack>
    );
  }

  return (
    <div>
      <Stack>{cells}</Stack>
    </div>
  );
};

CanvasArea.defaultProps = {
  selectedColor: "#FFFFFFFF",
  canvas: {
    cells: [
      [{ color: "" }, { color: "" }, { color: "" }],
      [{ color: "" }, { color: "" }, { color: "" }],
      [{ color: "" }, { color: "" }, { color: "" }],
    ],
  },
  setCanvas: () => {},
};
