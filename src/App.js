import { useEffect, useState } from "react";
import Header from "./page/common/Header";
import SideMenu from "./page/common/SideMenu";
import { useDeviceSize } from "./components/CustomHooks";
import ContentArea from "./page/common/ContentArea";
import Footer from "./page/common/Footer";
import { Route, Routes } from "react-router-dom";
import JavaMain from "./page/java/JavaMain";
import { motion } from "framer-motion";

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
    <motion.div
      className="wrap"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <SideMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <Header toggleMenu={toggleMenu} />
      <ContentArea>
        <Routes>
          <Route path="/java/*" element={<JavaMain />} />
        </Routes>
      </ContentArea>
      <Footer></Footer>
    </motion.div>
  );
}

export default App;
