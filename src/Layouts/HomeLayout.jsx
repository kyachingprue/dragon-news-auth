
import Header from "./Header";
import LatestNews from "./LatestNews";

const HomeLayout = () => {
  return (
    <div>
      <Header></Header>
      <div className="w-11/12 mx-auto">
        <LatestNews></LatestNews>
      </div>
    </div>
  );
};

export default HomeLayout;