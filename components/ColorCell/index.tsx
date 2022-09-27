import { Box } from "@mui/material";

type ColorCellProps = {
  color: string;
  onMouseDown: Function;
  onMouseEnter: Function;
};
export const ColorCell = (props: ColorCellProps) => {
  const { color, onMouseDown, onMouseEnter } = props;
  const handleOnMouseDown = () => {
    onMouseDown();
  };

  const handleOnMouseEnter = () => {
    onMouseEnter();
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
      onMouseDown={handleOnMouseDown}
      onMouseEnter={handleOnMouseEnter}
    ></Box>
  );
};

ColorCell.defaultProps = {
  color: "#FFFFFFFF",
  onMouseDown: () => {
    console.log("mouseDown");
  },
  onMouseEnter: () => {
    console.log("mouseEnter");
  },
};
