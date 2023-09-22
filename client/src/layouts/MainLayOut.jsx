import Footer from "./Footer/Footer.component";
import Header from "./Header/Header.component";
import MainNavigation from "./Header/components/MainNavigation.components";

const MainLayOut = ({ children }) => {
  return (
    <>
      <Header>
        <MainNavigation />
      </Header>
      <main>{children}</main>
      <Footer />
    </>
  );
};
export default MainLayOut;
