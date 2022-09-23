import { Container, Stack } from "@mui/system";
import type { NextPage } from "next";
import { Contents } from "../components/Contents";
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
          <Contents></Contents>
        </Stack>
      </Container>
    </div>
  );
};

export default Home;
