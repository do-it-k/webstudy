import { useLocation } from "react-router-dom";

import { motion } from "framer-motion";
import ManageRouting from "./ManageRouting";

const ManageMain = () => {
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
        MANAGE
      </motion.div>
      <div>
        <ManageRouting />
      </div>
    </div>
  );
};

export default ManageMain;
