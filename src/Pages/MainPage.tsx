import ProductList from "../components/Product/ProductList";
import Chasto from "../components/OftenQues/MainQuestion";
import Contacts from "../components/Contacts";
import ImgBanner from "../components/Banners/AboutUs";
import Questions from "../components/Questions";
import Podbor from "../components/Selection/SelectionMain";
import Team from "../components/Team";

export const MainPage = () => {
  return (
    <>
      <ProductList />
      <ImgBanner />
      <Podbor />
      <Team />
      <Chasto />
      <Contacts />
      <Questions />
    </>
  );
};

export default MainPage;
