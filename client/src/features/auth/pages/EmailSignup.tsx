import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import styles from "./LoginPage.module.css";
import { Link } from "react-router-dom";

export const EmailSignup = () => {
  return (
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
      <TextField type="text" placeholder="Last Name" className={styles.input} />
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
  );
};
