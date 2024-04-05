import { useDeviceSize } from "../../components/CustomHooks";

const ContentArea = (props) => {
  const children = props.children;
  const { isDesktopOrLaptop, isTabletOrMobileDevice } = useDeviceSize();
  return (
    <>
      {isDesktopOrLaptop && (
        <div className="main-container" style={{ paddingLeft: "250px" }}>
          {children}
        </div>
      )}
      {isTabletOrMobileDevice && (
        <div className="main-container">{children}</div>
      )}
    </>
  );
};

export default ContentArea;
