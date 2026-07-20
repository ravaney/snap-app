import { useState } from "react";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import styles from "./LoginPage.module.css";

const fieldSx = {
  "& .MuiOutlinedInput-root": {
    minHeight: 54,
    borderRadius: 1,
    bgcolor: "#ffffff",
    color: "#10295a",
    fontWeight: 600,
    boxShadow: "0 8px 24px rgba(31, 71, 136, 0.10)",
    transition: "box-shadow 160ms ease",
    "& fieldset": { border: "1px solid rgba(211, 222, 238, 0.45)" },
    "&:hover fieldset": { borderColor: "rgba(79, 116, 179, 0.28)" },
    "&.Mui-focused": {
      boxShadow:
        "0 0 0 3px rgba(75, 105, 219, 0.12), 0 10px 26px rgba(31, 71, 136, 0.12)",
    },
    "&.Mui-focused fieldset": { borderColor: "#6478e8" },
  },
  "& .MuiOutlinedInput-input": {
    px: 2,
    py: 1.5,
    "&::placeholder": { color: "#71809e", opacity: 1, fontWeight: 500 },
  },
};

export const EmailSignup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const visibilityButton = (
    visible: boolean,
    toggle: () => void,
    label: string,
  ) => (
    <InputAdornment position="end">
      <IconButton
        aria-label={label}
        onClick={toggle}
        edge="end"
        sx={{ color: "#6979df" }}
      >
        {visible ? <IoEyeOffOutline /> : <IoEyeOutline />}
      </IconButton>
    </InputAdornment>
  );

  return (
    <FormControl
      sx={{
        width: "100%",
        gap: 1.25,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <TextField
        type="text"
        placeholder="First Name"
        size="small"
        sx={fieldSx}
      />
      <TextField
        type="text"
        placeholder="Last Name"
        size="small"
        sx={fieldSx}
      />
      <TextField type="email" placeholder="Email" size="small" sx={fieldSx} />
      <TextField
        type={showPassword ? "text" : "password"}
        placeholder="Password"
        size="small"
        sx={fieldSx}
        slotProps={{
          input: {
            endAdornment: visibilityButton(
              showPassword,
              () => setShowPassword((visible) => !visible),
              showPassword ? "Hide password" : "Show password",
            ),
          },
        }}
      />
      <TextField
        type={showConfirmation ? "text" : "password"}
        placeholder="Confirm Password"
        size="small"
        sx={fieldSx}
        slotProps={{
          input: {
            endAdornment: visibilityButton(
              showConfirmation,
              () => setShowConfirmation((visible) => !visible),
              showConfirmation ? "Hide confirmation" : "Show confirmation",
            ),
          },
        }}
      />
      <FormControlLabel
        sx={{ my: -0.5 }}
        control={<Checkbox size="small" />}
        label={
          <Typography variant="body2">
            I agree to the <Link to="/terms">Terms</Link>
            {" and "}
            <Link to="/privacy">Privacy Policy</Link>
          </Typography>
        }
      />
      <Button
        variant="contained"
        type="submit"
        className={styles.button}
        sx={{ minHeight: 44, borderRadius: 2.5, textTransform: "none" }}
      >
        Sign Up
      </Button>
    </FormControl>
  );
};
