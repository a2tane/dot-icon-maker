import { Box } from "@mui/material";

type ColorCellProps = {
  color: string;
};
export const ColorCell = (props: ColorCellProps) => {
  const { color } = props;
  return <Box sx={{ border: 1, bgcolor: color, height: 30, width: 30 }}></Box>;
};

ColorCell.defaultProps = {
  color: "#fafad2",
};
