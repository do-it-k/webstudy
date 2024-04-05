import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useDeviceSize, useMenuList } from "../../components/CustomHooks";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const SideMenu = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const fullUrl = location.pathname;
  const subUrl = fullUrl.substring(
    1,
    fullUrl.lastIndexOf("/", fullUrl.lastIndexOf("/"))
  );

  const isMenuOpen = props.isMenuOpen;
  const toggleMenu = props.toggleMenu;
  const { isDesktopOrLaptop, isTabletOrMobileDevice } = useDeviceSize();
  const { mainMenu, javaMenu } = useMenuList();
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    setMenu(subUrl === "java" ? javaMenu : mainMenu);
  }, [subUrl]);

  return (
    <div className="side-menu">
      {isDesktopOrLaptop && (
        <Drawer
          sx={{
            width: 250,
            flexShrink: 0,
            "& .MuiList-root": {
              padding: 0,
            },
            "& .MuiModal-backdrop": {
              width: 0,
              boxSizing: "border-box",
            },
            "& .MuiListItemButton-root": {
              padding: "3px 16px",
            },
            "& .MuiListItemText-primary": {
              fontSize: 14,
            },
          }}
          open={isMenuOpen}
          onClose={toggleMenu(false)}
        >
          <Box
            sx={{ width: 250, flexShrink: 0 }}
            role="presentation"
            onClick={toggleMenu(false)}
          >
            <div
              className="side-head"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <Link to="/">
                <img src="https://do-it-k.github.io/webstudy/image/logo.png"></img>
                <span>WebStudy</span>
              </Link>
            </div>

            <List>
              {menu.map((item) => {
                return (
                  <ListItem
                    key={item.to}
                    disablePadding
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    <ListItemButton>
                      <ListItemText
                        onClick={() => {
                          navigate(item.to);
                        }}
                        primary={`${item.index}. ${item.title}`}
                      />
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Box>
        </Drawer>
      )}
      {isTabletOrMobileDevice && (
        <Drawer
          sx={{
            width: 250,
            flexShrink: 0,
            "& .MuiListItemButton-root": {
              padding: "3px 16px",
            },
            "& .MuiListItemText-primary": {
              fontSize: 14,
            },
          }}
          open={isMenuOpen}
          onClose={toggleMenu(false)}
        >
          <Box
            sx={{ width: 250, flexShrink: 0 }}
            role="presentation"
            onClick={toggleMenu(false)}
          >
            <div
              className="side-head"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <Link to="/">
                <img src="/image/logo.png"></img>
                <span>WebStudy</span>
              </Link>
            </div>

            <List>
              {menu.map((item) => {
                return (
                  <ListItem
                    key={item.to}
                    disablePadding
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    <ListItemButton>
                      <ListItemText
                        onClick={() => {
                          navigate(item.to);
                        }}
                        primary={`${item.index}. ${item.title}`}
                      />
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Box>
        </Drawer>
      )}
    </div>
  );
};

export default SideMenu;
