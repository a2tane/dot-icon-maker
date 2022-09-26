import { Box } from "@mui/material";

type ColorCellProps = {
  color: string;
  callback: Function;
};
export const ColorCell = (props: ColorCellProps) => {
  const { color, callback } = props;
  const onClick = () => {
    callback();
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
      onClick={onClick}
    ></Box>
  );
};

ColorCell.defaultProps = {
  color: "#fafad2",
  callback: () => {
    console.log("click");
  },
};
