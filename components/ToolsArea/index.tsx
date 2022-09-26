import { Download } from "@mui/icons-material";
import { IconButton } from "@mui/material";

type ToolAreaProps = {
  download: Function;
};

export const ToolsArea = (props: ToolAreaProps) => {
  const { download } = props;

  const handleDownload = () => {
    download();
  };

  return (
    <IconButton onClick={handleDownload}>
      <Download></Download>
    </IconButton>
  );
};

ToolsArea.defaultProps = {
  download: () => {
    console.log("download");
  },
};
