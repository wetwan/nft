import AllProject from "../components/AllProject";
import Auctions from "../components/Auctions";
import Community from "../components/Community";
import Discovery from "../components/Discovery";
import Hero from "../components/Hero";
import Overline from "../components/Overline";
import Overline1 from "../components/Overline1";
import PopularAuction from "../components/PopularAuction";

const Home = () => {
  return (
    <>
      <Hero />
      <Auctions />
      <Overline />
      <Discovery />
      <Overline1 />
      <PopularAuction />
      <Community />
      <AllProject />
    </>
  );
};

export default Home;
