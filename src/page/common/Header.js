import { useDeviceSize } from "../../components/CustomHooks";
import { useNavigate } from "react-router-dom";
import "./default.css";

const Header = (props) => {
  const { isDesktopOrLaptop, isTabletOrMobileDevice } = useDeviceSize();
  const navigate = useNavigate();
  const toggleMenu = props.toggleMenu;
  const settings = () => {
    navigate("/manage/status");
  };
  return (
    <>
      {isDesktopOrLaptop && (
        <header className="header" style={{ paddingLeft: "250px" }}>
          <div>
            <span className="material-icons setting-icon" onClick={settings}>
              settings
            </span>
          </div>
        </header>
      )}
      {isTabletOrMobileDevice && (
        <header className="header">
          <div>
            <span
              className="material-icons menu-icon"
              onClick={toggleMenu(true)}
            >
              menu
            </span>
            <span className="material-icons setting-icon" onClick={settings}>
              settings
            </span>
          </div>
        </header>
      )}
    </>
  );
};

export default Header;
