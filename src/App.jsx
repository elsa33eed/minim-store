import BuyOnline from "./Components/Container/BuyOnline";
import Contact from "./Components/Container/Contact";
import Footer from "./Components/Container/Footer";
import Home from "./Components/Container/Home";
import PopularProduct from "./Components/Container/PopularProducts";
import Review from "./Components/Container/Review";
import ScrollToTop from "./Components/Container/ScrollToTop";
import Shopping from "./Components/Container/shopping";
import Navbar from "./Components/Navbar/Navbar";
import "./Sass/main.scss";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <PopularProduct />
      <Shopping />
      <BuyOnline />
      <Review />
      <Contact />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
