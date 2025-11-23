import LatestCollection from "../components/LatestCollection.jsx";
import Banner from "../components/Banner.jsx";
import Policy from "../components/Policy.jsx";
import NewsLetter from "../components/NewsLetter.jsx";
import BestSeller from "@/components/BestSeller.jsx";

const Home = () => {
  return (
    <div>
      <Banner />
      <LatestCollection/>
      <BestSeller/>
      <Policy/>
      <NewsLetter/>
    </div>
  );
};

export default Home;
