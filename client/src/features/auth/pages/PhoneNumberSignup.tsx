import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import styles from "./LoginPage.module.css";
import { useState } from "react";
import { MuiTelInput } from "mui-tel-input";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export const PhoneNumberSignup = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  return (
    <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
      <Typography
        variant="caption"
        sx={{
          fontSize: "1rem",
          pb: 3,
        }}
      >
        Enter your phone number to sign up for Snap.
      </Typography>
      <FormControl
        sx={{
          mx: "auto",
          p: 3,
          gap: 2,
          width: "100%",
          boxSizing: "border-box",
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <MuiTelInput
          value={phoneNumber}
          onChange={(newValue) => setPhoneNumber(newValue)}
          defaultCountry="US"
          forceCallingCode
          placeholder="Phone Number"
          className={styles.input}
          size="medium"
        />
        <div>
          By continuing, you agree to our <a href="/terms">Terms</a> and{" "}
          <a href="/privacy">Privacy Policy</a>.
        </div>
        <Button
          disabled={!phoneNumber}
          variant="contained"
          type="submit"
          className={styles.button}
          sx={{ mt: "auto" }}
        >
          Continue
        </Button>
      </FormControl>
    </Box>
  );
};
