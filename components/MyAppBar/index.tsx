import { AppBar, Toolbar, Typography } from "@mui/material";

export const MyAppBar = () => {
  return (
    <AppBar sx={{ height: "64px" }} position="static">
      <Toolbar>
        <Typography width={"100%"} align="center">
          ドットアイコンメーカー
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
