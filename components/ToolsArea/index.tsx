import { Download } from "@mui/icons-material";
import { IconButton } from "@mui/material";

// let canvas = document.createElement("canvas");
// const ctx = canvas.getContext("2d");
// if (ctx != null) {
//   const imageData = ctx.createImageData(100, 100);

//   // Fill the array with RGBA values
//   for (let i = 0; i < imageData.data.length; i += 4) {
//     // Percentage in the x direction, times 255
//     let x = ((i % 400) / 400) * 255;
//     // Percentage in the y direction, times 255
//     let y = (Math.ceil(i / 400) / 100) * 255;

//     // Modify pixel data
//     imageData.data[i + 0] = x; // R value
//     imageData.data[i + 1] = y; // G value
//     imageData.data[i + 2] = 255 - x; // B value
//     imageData.data[i + 3] = 255; // A value
//   }

//   // Draw image data to the canvas
//   ctx.putImageData(imageData, 20, 20);
// }

export const ToolsArea = () => {
  const downloadImage = (blob: any) => {
    const url = URL.createObjectURL(blob);

    const anchor = document.createElement("a");
    anchor.setAttribute("href", url);
    anchor.setAttribute("download", "dot-icon.png");

    const mouseEvent = new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
      view: window,
    });

    anchor.dispatchEvent(mouseEvent);
    console.log("click");
  };

  const handleDownload = () => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (ctx != null) {
      const imageData = ctx.createImageData(100, 100);

      // Fill the array with RGBA values
      for (let i = 0; i < imageData.data.length; i += 4) {
        // Percentage in the x direction, times 255
        let x = ((i % 400) / 400) * 255;
        // Percentage in the y direction, times 255
        let y = (Math.ceil(i / 400) / 100) * 255;

        // Modify pixel data
        imageData.data[i + 0] = x; // R value
        imageData.data[i + 1] = y; // G value
        imageData.data[i + 2] = 255 - x; // B value
        imageData.data[i + 3] = 255; // A value
      }

      // Draw image data to the canvas
      ctx.putImageData(imageData, 20, 20);
    }
    canvas.toBlob((blob) => {
      downloadImage(blob);
    }, "image/png");
  };

  return (
    <IconButton onClick={handleDownload}>
      <Download></Download>
    </IconButton>
  );
};
