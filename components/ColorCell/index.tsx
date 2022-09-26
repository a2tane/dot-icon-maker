import { Box } from "@mui/material";

type ColorCellProps = {
  color: string;
  callback: Function;
  isDrawing: boolean;
};
export const ColorCell = (props: ColorCellProps) => {
  const { color, callback, isDrawing } = props;
  const onMouseDown = () => {
    callback();
  };

  const onMouseEnter = () => {
    if (isDrawing) {
      callback();
    }
  };

  return (
    <Box
      sx={{
        border: 1,
        borderColor: "#7b7b7d88",
        bgcolor: color,
        height: 45,
        width: 45,
      }}
      onMouseDown={onMouseDown}
      onMouseEnter={onMouseEnter}
    ></Box>
  );
};

ColorCell.defaultProps = {
  color: "#fafad2",
  callback: () => {
    console.log("click");
  },
  isDrawing: false,
};
