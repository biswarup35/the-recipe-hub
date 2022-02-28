import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  AppBar,
  Toolbar,
  Stack,
  Button,
  Drawer,
} from "../../components";
import { useMediaQuery } from "../../hooks";
import { MenuIcon } from "../../icons";
import Logo from "../../icons/Logo";

export const menuList = [
  {
    category: "indian",
    label: "Indian",
  },
  {
    category: "mexican",
    label: "Mexican",
  },
  {
    category: "chinese",
    label: "Chinese",
  },
  {
    category: "italian",
    label: "Italian",
  },
  {
    category: "american",
    label: "American",
  },
];

const Header = () => {
  const sm = useMediaQuery("sm-down");
  const [open, setOpen] = useState(false);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  return (
    <React.Fragment>
      <AppBar color="primary">
        <Container maxWidth="lg">
          <Toolbar variant="dense">
            <Link to="/" style={{ flexGrow: 1, textDecoration: "none" }}>
              <Logo />
            </Link>
            {!sm && (
              <nav>
                <Stack direction="row" alignItems="center" gap={1}>
                  {menuList.map((item) => (
                    <Link key={item.label} to={`/category/${item.category}`}>
                      <Button className="px-2 py-1 bg-secondary-light radius-1 pointer">
                        {item.label}
                      </Button>
                    </Link>
                  ))}
                </Stack>
              </nav>
            )}
            {sm && (
              <div
                onClick={() => {
                  setOpen(true);
                  console.log("click");
                }}
              >
                <MenuIcon />
              </div>
            )}
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer onOpen={open}>
        <Stack className="mx-2 my-2" alignItems="center">
          <Button
            onClick={handleClose}
            className="px-2 py-1 bg-tertiary radius-1 pointer"
          >
            Close
          </Button>
        </Stack>
        <Stack className="mx-2" direction="column" alignItems="center" gap={1}>
          {menuList.map((item) => (
            <Link
              className="full-width"
              key={item.label}
              to={`/category/${item.category}`}
            >
              <Button
                onClick={handleClose}
                className="px-2 py-1 bg-secondary-light radius-1 pointer full-width"
              >
                {item.label}
              </Button>
            </Link>
          ))}
        </Stack>
      </Drawer>
    </React.Fragment>
  );
};

export default Header;
