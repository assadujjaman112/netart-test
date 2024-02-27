import Banner from "../Banner/Banner";
import MainSection from "../Banner/MainSection/MainSection";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-white to-amber-100">
      {/* Header Section */}
      <Header></Header>
      {/* Banner Section */}
      <Banner></Banner>
      <MainSection></MainSection>
      {/* footer Section */}
      <Footer></Footer>
    </div>
  );
};

export default Home;
