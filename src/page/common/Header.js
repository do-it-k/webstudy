import { useDeviceSize } from "../../components/CustomHooks";
import "./default.css";

const Header = (props) => {
  const { isDesktopOrLaptop, isTabletOrMobileDevice } = useDeviceSize();
  const toggleMenu = props.toggleMenu;
  return (
    <>
      {isDesktopOrLaptop && (
        <header className="header" style={{ paddingLeft: "250px" }}>
          <div>
            <span className="material-icons setting-icon">settings</span>
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
            <span className="material-icons setting-icon">settings</span>
          </div>
        </header>
      )}
    </>
  );
};

export default Header;
