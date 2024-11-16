
import Header from "./Header";
import LatestNews from "./LatestNews";
import Main from "./Main";
import Navbar from "./Navbar";

const HomeLayout = () => {
  return (
    <div className="font-poppins">
      <Header></Header>
      <section className="w-11/12 mx-auto">
        <LatestNews></LatestNews>
      </section>
      <section className="w-11/12 mx-auto py-7">
        <Navbar></Navbar>
      </section>
      <section className="w-11/12 mx-auto">
        <Main></Main>
      </section>
    </div>
  );
};

export default HomeLayout;