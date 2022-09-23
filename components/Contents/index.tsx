import { Card, CardContent } from "@mui/material";
import { Stack } from "@mui/system";
import { CanvasArea } from "../CanvasArea";
import { PaletteArea } from "../PaletteArea";
import { ToolsArea } from "../ToolsArea";

export const Contents = () => {
  return (
    <Card>
      <CardContent>
        <Stack alignItems={"center"} spacing={"30px"}>
          <CanvasArea></CanvasArea>
          <PaletteArea></PaletteArea>
          <ToolsArea></ToolsArea>
        </Stack>
      </CardContent>
    </Card>
  );
};
