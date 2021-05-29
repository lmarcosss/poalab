import { Box } from "@chakra-ui/react";
import { Banner } from "../components/Banner";
import { Header } from "../components/Header";

export default function Home() {
  return (
    <Box>
      <Header />
      <Banner />
    </Box>
  );
}
