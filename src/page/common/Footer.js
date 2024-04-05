import { useDeviceSize } from "../../components/CustomHooks";
const Footer = () => {
  const { isDesktopOrLaptop, isTabletOrMobileDevice } = useDeviceSize();
  return (
    <>
      {isDesktopOrLaptop && (
        <footer className="footer" style={{ paddingLeft: "250px" }}>
          <div>
            <p>Made By 이윤수</p>
            <p>KH 정보교육원 수강생들을 위한 실습문제 페이지 입니다.</p>
          </div>
        </footer>
      )}
      {isTabletOrMobileDevice && (
        <footer className="footer">
          <div>
            <p>Made By 이윤수</p>
            <p>KH 정보교육원 수강생들을 위한 실습문제 페이지 입니다.</p>
          </div>
        </footer>
      )}
    </>
  );
};

export default Footer;
