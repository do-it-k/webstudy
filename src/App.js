import { useEffect, useState } from "react";
import Header from "./page/common/Header";
import SideMenu from "./page/common/SideMenu";
import { useDeviceSize } from "./components/CustomHooks";
import ContentArea from "./page/common/ContentArea";
import Footer from "./page/common/Footer";
import { Route, Routes } from "react-router-dom";
import JavaMain from "./page/java/JavaMain";

import Main from "./page/common/Main";

function App() {
  const { isDesktopOrLaptop, isTabletOrMobileDevice } = useDeviceSize();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = (newOpen) => () => {
    setIsMenuOpen(newOpen);
  };
  useEffect(() => {
    if (isDesktopOrLaptop) {
      setIsMenuOpen(true);
    } else {
      setIsMenuOpen(false);
    }
  }, [isDesktopOrLaptop]);
  return (
    <div className="wrap">
      <SideMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <Header toggleMenu={toggleMenu} />
      <ContentArea>
        <Routes>
          <Route path="/java/*" element={<JavaMain />} />
          <Route path="*" element={<Main />} />
        </Routes>
      </ContentArea>
      <Footer></Footer>
    </div>
  );
}

export default App;
