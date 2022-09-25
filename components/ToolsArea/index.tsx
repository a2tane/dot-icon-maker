import { Download } from "@mui/icons-material";
import { IconButton } from "@mui/material";

export const ToolsArea = () => {
  const handleDownload = () => {
    const text = "TEXT";
    const blob = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    const anchor = document.createElement("a");
    anchor.setAttribute("href", url);
    anchor.setAttribute("download", "FILENAME.txt");

    const mouseEvent = new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
      view: window,
    });

    anchor.dispatchEvent(mouseEvent);
    console.log("click");
  };

  return (
    <IconButton onClick={handleDownload}>
      <Download></Download>
    </IconButton>
  );
};
