import { useLocation } from "react-router-dom";
import JavaRouting from "./JavaRouting";

const JavaMain = () => {
  const location = useLocation();
  const fullUrl = location.pathname;
  const lastUrl = fullUrl.substring(location.pathname.lastIndexOf("/") + 1);
  return (
    <div>
      <div className="content-title">JAVA</div>
      <hr></hr>
      <div>
        <JavaRouting />
      </div>
    </div>
  );
};

export default JavaMain;
