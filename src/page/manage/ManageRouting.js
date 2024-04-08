import { Route, Routes } from "react-router-dom";
import ManageStatus from "./ManageStatus";
import ManageRegist from "./ManageRegist";

const ManageRouting = () => {
  return (
    <Routes>
      <Route path="/status" element={<ManageStatus />}></Route>
      <Route path="/regist" element={<ManageRegist />}></Route>
    </Routes>
  );
};

export default ManageRouting;
