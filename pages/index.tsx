import { Card } from "@mui/material";
import { Container, Stack } from "@mui/system";
import type { NextPage } from "next";
import { MyAppBar } from "../components/MyAppBar";

const Spacer = () => {
  return <div style={{ height: "50px" }}></div>;
};

const Home: NextPage = () => {
  return (
    <div>
      <MyAppBar></MyAppBar>
      <Spacer></Spacer>
      <Container>
        <Stack spacing={"5px"}>
          <Card>HOGE</Card>
        </Stack>
      </Container>
    </div>
  );
};

export default Home;
