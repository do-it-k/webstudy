import { useMediaQuery } from "react-responsive";

const useDeviceSize = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width : 1000px)",
  });
  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-width : 999px)",
  });
  return { isDesktopOrLaptop, isTabletOrMobileDevice };
};

const useMenuList = () => {
  const mainMenu = [
    { index: 1, title: "JAVA", to: "/java/start" },
    { index: 2, title: "ORACLE", to: "/oracle/start" },
    { index: 3, title: "HTML", to: "/html/start" },
    { index: 4, title: "CSS", to: "/css/start" },
    { index: 5, title: "JAVASCRIPT", to: "/js/start" },
    { index: 6, title: "JQUERY", to: "/jq/start" },
  ];
  const javaMenu = [
    { index: 1, title: "자바 시작하기", to: "/java/start" },
    { index: 2, title: "숫자와 문자", to: "/java/data" },
    { index: 3, title: "변수", to: "/java/variable" },
    { index: 4, title: "연산자", to: "/java/operator" },
    { index: 5, title: "제어문", to: "/java/control" },
    { index: 6, title: "난수", to: "/java/random" },
    { index: 7, title: "배열", to: "/java/array" },
  ];
  return { mainMenu, javaMenu };
};

export { useDeviceSize, useMenuList };
