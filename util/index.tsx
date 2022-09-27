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

const IMAGE_SIZE = 150;

// TODO キャンバスのサイズが正方形じゃないと正常に画像が出力されない
const makeCanvas = (canvas: Canvas) => {
  const canvasElement = document.createElement("canvas");
  const canvasRatio = canvas.cells[0].length / canvas.cells.length;
  canvasElement.width = Math.floor(IMAGE_SIZE * canvasRatio);
  canvasElement.height = Math.floor(IMAGE_SIZE * (1 / canvasRatio));

  const ctx = canvasElement.getContext("2d");
  if (ctx != null) {
    const imageData = ctx.createImageData(
      canvasElement.width,
      canvasElement.height
    );
    const xDiviser = canvasElement.width / canvas.cells[0].length;
    const yDiviser = canvasElement.height / canvas.cells.length;

    for (let i = 0; i < imageData.data.length; i += 4) {
      let dx = Math.floor((Math.floor(i / 4) % canvasElement.width) / xDiviser);
      let dy = Math.floor(
        Math.floor(Math.floor(i / 4) / canvasElement.height) / yDiviser
      );

      if (dx < canvas.cells[0].length && dy < canvas.cells.length) {
        let color = canvas.cells[dy][dx].color;

        let red = parseInt((color || "#f0f0f688").substring(1, 3), 16);
        let green = parseInt((color || "#f0f0f688").substring(3, 5), 16);
        let blue = parseInt((color || "#f0f0f688").substring(5, 7), 16);
        let alpha = parseInt((color || "#f0f0f688").substring(7, 9), 16);

        imageData.data[i + 0] = red; // R value
        imageData.data[i + 1] = green; // G value
        imageData.data[i + 2] = blue; // B value
        imageData.data[i + 3] = alpha; // A value
      }
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
