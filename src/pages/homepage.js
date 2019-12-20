import React from "react";
import { Link } from "@reach/router";
import { css } from "@emotion/core";
import { Button, Container, Box } from "@material-ui/core";
import Navbar from "../components/Navbar";

const HomePage = () => {
  return (
    <>
      <Navbar>
        <Button component={Link} to="/login">
          Zaloguj się
        </Button>
      </Navbar>
      <Container
        css={css`
          display: flex;
          justify-content: center;
          align-items: center;
          height: calc(100% - 64px);
        `}>
        <Box>
          <p>Tutaj będzie kiedyś super landing page!</p>
          <p>Serio! Mówię wam...</p>
        </Box>
      </Container>
    </>
  );
};

export default HomePage;
