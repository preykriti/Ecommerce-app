import LatestCollection from "../components/LatestCollection.jsx";
import Banner from "../components/Banner.jsx";
import Policy from "../components/Policy.jsx";
import NewsLetter from "../components/NewsLetter.jsx";

const Home = () => {
  return (
    <div>
      <Banner />
      <LatestCollection/>
      <Policy/>
      <NewsLetter/>
    </div>
  );
};

export default Home;
