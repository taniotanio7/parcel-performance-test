import React, { useMemo } from "react";
import { Link } from "@reach/router";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import Navbar from "../components/Navbar";
import {
  Paper,
  Typography,
  IconButton,
  TextField,
  Button,
  Grid,
  useTheme
} from "@material-ui/core";
import { MdArrowBack, MdLockOutline, MdAccountCircle } from "react-icons/md";
import UnstyledFieldWithIcon from "../components/FieldWithIcon";

const LoginPage = () => {
  const theme = useTheme();

  const FieldWithIcon = styled(UnstyledFieldWithIcon)`
    margin-top: ${theme.spacing(2)}px;
  `;

  return (
    <>
      <Navbar
        before={
          <IconButton
            component={Link}
            to="/"
            css={css`
              margin-left: -12px;
            `}
          >
            <MdArrowBack />
          </IconButton>
        }
      />
      <main
        css={css`
          height: calc(100% - 64px);
          display: flex;
          justify-content: center;
          align-items: center;
        `}
      >
        <Paper
          css={css`
            width: 33.33%;
            padding: ${theme.spacing(4)}px;
          `}
        >
          <Typography variant="h5" component="h2" align="center">
            Logowanie
          </Typography>
          <form>
            <FieldWithIcon icon={<MdAccountCircle />}>
              <TextField
                label="Login"
                name="login"
                variant="outlined"
                required
                fullWidth
                autoFocus
              />
            </FieldWithIcon>
            <FieldWithIcon icon={<MdLockOutline />}>
              <TextField
                label="Hasło"
                name="password"
                variant="outlined"
                type="password"
                required
                fullWidth
              />
            </FieldWithIcon>
            <Grid container justify="center">
              <Button
                variant="contained"
                color="primary"
                css={css`
                  margin-top: ${theme.spacing(3)}px;
                `}
              >
                Zaloguj się
              </Button>
            </Grid>
            <Grid
              container
              justify="space-between"
              css={css`
                margin-top: ${theme.spacing(2)}px;
              `}
            >
              <Grid item>
                <Typography color="secondary" component={Link} to="/register">
                  Zarejestruj się
                </Typography>
              </Grid>
              <Grid item>
                <Typography color="secondary" component={Link} to="/forgot">
                  Zapomniałem hasła
                </Typography>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </main>
    </>
  );
};

export default LoginPage;
