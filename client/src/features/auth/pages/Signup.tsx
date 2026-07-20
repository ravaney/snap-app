import styles from "./LoginPage.module.css";
import snapLogo from "../../../assets/snap.jpg";
import { AppPage } from "../../../app/layouts/AppPage";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";

export const Signup = () => {
  return (
    <AppPage
      component="main"
      sx={{
        flex: 1,
        minHeight: 0,
        overflowY: "auto",
        width: "100%",
      }}
    >
      <Stack
        spacing={2}
        sx={{
          alignItems: "center",
          mb: 3,
        }}
      >
        <Box
          component="img"
          src={snapLogo}
          alt="Snap"
          sx={{
            width: 90,
            height: "auto",
            objectFit: "contain",
          }}
        />

        <Box sx={{ textAlign: "center" }}>
          <Typography
            component="h1"
            variant="h5"
            sx={{
              fontSize: "1.5rem",
              fontWeight: 700,
              lineHeight: 1.2,
            }}
          >
            Create your account
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              mt: 0.75,
              fontSize: "0.875rem",
            }}
          >
            Enter your details to get started.
          </Typography>
        </Box>
      </Stack>

      <FormControl
        sx={{
          mx: "auto",
          px: 3,
          gap: 2,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <TextField
          type="text"
          placeholder="First Name"
          className={styles.input}
        />
        <TextField
          type="text"
          placeholder="Last Name"
          className={styles.input}
        />
        <TextField type="email" placeholder="Email" className={styles.input} />
        <TextField
          type="password"
          placeholder="Password"
          className={styles.input}
        />
        <TextField
          type="password"
          placeholder="Confirm Password"
          className={styles.input}
        />
        <FormControlLabel
          control={<Checkbox />}
          label={
            <Typography variant="body2">
              I agree to the <Link to="/terms">Terms</Link>
              {" and "}
              <Link to="/privacy">Privacy Policy</Link>
            </Typography>
          }
        />
        <Button variant="contained" type="submit" className={styles.button}>
          Sign Up
        </Button>
      </FormControl>
      <Typography variant="body2" sx={{ textAlign: "center", mt: 2 }}>
        Already have an account? <Link to="/login">Log in</Link>
      </Typography>
    </AppPage>
  );
};
