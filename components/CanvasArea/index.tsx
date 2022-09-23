import { Stack } from "@mui/system";
import { ColorCell } from "../ColorCell";

export const CanvasArea = () => {
  const x = 3;
  const y = 3;

  const cells = [];

  for (let index = 0; index < y; index++) {
    let list = [];
    for (let index = 0; index < x; index++) {
      list.push(<ColorCell></ColorCell>);
    }
    cells.push(<Stack direction={"row"}>{list}</Stack>);
  }

  return (
    <div>
      <Stack>{cells}</Stack>
    </div>
  );
};
