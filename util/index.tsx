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

    // for (let index_y = 0; index_y < canvas.cells.length; index_y++) {
    //   for (
    //     let index_x = 0;
    //     index_x < canvas.cells[index_y].length;
    //     index_x++
    //   ) {}
    // }

    const diviser = ImageSize / canvas.cells.length;
    console.log(canvas);
    for (let i = 0; i < imageData.data.length; i += 4) {
      //   let color =
      //     canvas.cells[(i / 4 / ImageSize) % diviser][
      //       ((i / 4) % ImageSize) % diviser
      //     ].color;
      imageData.data[i + 0] = 255; // R value
      imageData.data[i + 1] = 255; // G value
      imageData.data[i + 2] = 255; // B value
      imageData.data[i + 3] = 255; // A value
    }

    // Draw image data to the canvas
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
