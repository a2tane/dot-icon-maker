import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { MuiColorInput } from "mui-color-input";
import { useState } from "react";

export const ColorPickerDialog = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [color, setColor] = useState("#ffffff");

  const handleChange = (color: string) => {
    setColor(color);
  };

  return (
    <Dialog open={isOpen}>
      <DialogTitle>色を追加する</DialogTitle>
      <DialogContent>
        <MuiColorInput value={color} onChange={handleChange} />
      </DialogContent>
      <DialogActions>
        <Button
          variant="outlined"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          キャンセル
        </Button>
        <Button variant="contained">追加する</Button>
      </DialogActions>
    </Dialog>
  );
};
