import { Link } from "react-router-dom";
import { Header } from "./components/Header";
import { Content } from "./components/Content";
import { Image } from "./components/Image";

export const Part1 = () => {
  return (
    <>
      <Header />
      <Content />
      <Image />
      <Link to="/part2">Go to the part 2</Link>
    </>
  );
};
