import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { MuiColorInput } from "mui-color-input";
import { useState } from "react";

type ColorPickerDialogProps = {
  open: boolean;
  onClose: Function;
  addColor: Function;
};

export const ColorPickerDialog = (props: ColorPickerDialogProps) => {
  const { open, onClose, addColor } = props;
  const [color, setColor] = useState("#f0f0f688");

  const handleChange = (color: string) => {
    setColor(color);
  };

  return (
    <Dialog open={open}>
      <DialogTitle>色を追加する</DialogTitle>
      <DialogContent>
        <MuiColorInput format="hex8" value={color} onChange={handleChange} />
      </DialogContent>
      <DialogActions>
        <Button
          variant="outlined"
          onClick={() => {
            onClose();
          }}
        >
          キャンセル
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            addColor(color);
            onClose();
          }}
        >
          追加する
        </Button>
      </DialogActions>
    </Dialog>
  );
};

ColorPickerDialog.defaultProps = {
  open: true,
  onClose: () => {
    console.log("close");
  },
  addColor: () => {
    console.log("add");
  },
};
