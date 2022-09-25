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
