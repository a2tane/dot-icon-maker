import { Stack } from "@mui/system";
import { useEffect, useState } from "react";
import { Size } from "../../util";
import { ColorCell } from "../ColorCell";

type CanvasAreaProps = {
  selectedColor: string;
  canvasSize: Size;
};

interface CanvasCell {
  color?: string;
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
  const { selectedColor, canvasSize } = props;

  const [canvas, setCanvas] = useState(initCanvas(canvasSize.x, canvasSize.y));

  useEffect(() => {
    setCanvas(initCanvas(canvasSize.x, canvasSize.y));
  }, [canvasSize]);

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
          color={canvas.cells[index_y][index_x].color || "#FFFFFF"}
        ></ColorCell>
      );
    }
    cells.push(
      <Stack key={index_y} direction={"row"}>
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
  selectedColor: "#008080",
  canvasSize: {
    x: 5,
    y: 5,
  },
};
