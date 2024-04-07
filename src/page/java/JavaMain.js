import { useLocation } from "react-router-dom";
import JavaRouting from "./JavaRouting";
import { motion } from "framer-motion";

const JavaMain = () => {
  const location = useLocation();
  const fullUrl = location.pathname;
  const lastUrl = fullUrl.substring(location.pathname.lastIndexOf("/") + 1);
  return (
    <div className="content-wrap">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="content-category"
      >
        JAVA
      </motion.div>
      <div>
        <JavaRouting />
      </div>
    </div>
  );
};

export default JavaMain;
