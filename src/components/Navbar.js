import React, { useContext } from "react";
import {
  AppBar,
  Icon,
  IconButton,
  Toolbar,
  Typography
} from "@material-ui/core";
import { css } from "@emotion/core";
import { FaHandHoldingUsd } from "react-icons/fa";
import { IoMdMoon } from "react-icons/io";
import { AppContext } from "../App";

const DarkModeToggle = () => {
  const { theme, setContext, ...context } = useContext(AppContext);
  return (
    <IconButton
      aria-label="Zmień motyw kolorystyczny"
      value={theme}
      onClick={() => {
        const newTheme = theme === "light" ? "dark" : "light";
        setContext({ theme: newTheme, ...context });
      }}
    >
      <IoMdMoon />
    </IconButton>
  );
};

const Navbar = ({ children, noGrow = false, before }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <div
          data-testid="navbar-before-container"
          css={css`
            margin-right: ${before && "0.75rem"};
          `}
        >
          {before}
        </div>
        <Icon style={{ marginRight: "0.75em" }}>
          <FaHandHoldingUsd />
        </Icon>
        <Typography
          variant="h6"
          component="h1"
          css={css`
            flex-grow: ${noGrow ? 0 : 1};
          `}
        >
          Daj Kasę
        </Typography>
        <DarkModeToggle />
        {children}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
