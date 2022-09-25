import { Stack } from "@mui/system";
import { useState } from "react";
import { ColorCell } from "../ColorCell";

type CanvasAreaProps = {
  selectedColor: string;
  x: number;
  y: number;
};

interface CanvasCell {
  color: string;
}

interface Canvas {
  cells: CanvasCell[][];
}

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

export const CanvasArea = (props: CanvasAreaProps) => {
  const { selectedColor, x, y } = props;

  const [canvas, setCanvas] = useState(initCanvas(x, y));

  const changeColor = (x: number, y: number) => {
    return () => {
      canvas.cells[x][y] = { color: selectedColor };
      setCanvas({ ...canvas });
    };
  };

  const cells = [];

  for (let index_y = 0; index_y < y; index_y++) {
    let list = [];
    for (let index_x = 0; index_x < x; index_x++) {
      list.push(
        <ColorCell
          key={`${index_x}-${index_y}`}
          callback={changeColor(index_x, index_y)}
          color={canvas.cells[index_x][index_y].color}
        ></ColorCell>
      );
    }
    cells.push(
      <Stack key={index_y} direction={"row"}>
        {list}
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
  selectedColor: "#008080",
  x: 3,
  y: 3,
};
