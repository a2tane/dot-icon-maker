export interface Size {
  x: number;
  y: number;
}

export interface CanvasCell {
  color?: string;
}

export interface Canvas {
  cells: CanvasCell[][];
}

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
};

const ImageSize = 150;

const makeCanvas = (canvas: Canvas) => {
  const canvasElement = document.createElement("canvas");
  canvasElement.width = ImageSize;
  canvasElement.height = ImageSize;

  const ctx = canvasElement.getContext("2d");
  if (ctx != null) {
    const imageData = ctx.createImageData(ImageSize, ImageSize);
    const diviser = ImageSize / canvas.cells.length;
    for (let i = 0; i < imageData.data.length; i += 4) {
      let color =
        canvas.cells[
          Math.floor(Math.floor(Math.floor(i / 4) / ImageSize) / diviser)
        ][Math.floor((Math.floor(i / 4) % ImageSize) / diviser)].color;

      let red = parseInt((color || "#f0f0f688").substring(1, 3), 16);
      let green = parseInt((color || "#f0f0f688").substring(3, 5), 16);
      let blue = parseInt((color || "#f0f0f688").substring(5, 7), 16);
      let alpha = parseInt((color || "#f0f0f688").substring(7, 9), 16);

      imageData.data[i + 0] = red; // R value
      imageData.data[i + 1] = green; // G value
      imageData.data[i + 2] = blue; // B value
      imageData.data[i + 3] = alpha; // A value
    }

    ctx.putImageData(imageData, 0, 0);
  }

  return canvasElement;
};

export const download = (canvas: Canvas) => {
  const canvasElement = makeCanvas(canvas);
  canvasElement.toBlob((blob) => {
    downloadImage(blob);
  }, "image/png");
};
