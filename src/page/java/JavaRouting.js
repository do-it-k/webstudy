import { Route, Routes } from "react-router-dom";
import JavaStart from "./JavaStart";
import JavaData from "./JavaData";

const JavaRouting = () => {
  return (
    <Routes>
      <Route path="/start" element={<JavaStart />}></Route>
      <Route path="/data" element={<JavaData />}></Route>
    </Routes>
  );
};

export default JavaRouting;
