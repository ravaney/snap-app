import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import styles from "./LoginPage.module.css";
import { useState } from "react";
import { MuiTelInput } from "mui-tel-input";
import Typography from "@mui/material/Typography";

export const PhoneNumberSignup = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  return (
    <>
      {/* <Box sx={{ textAlign: "center" }}> */}
      <Typography
        variant="caption"
        sx={{
          fontSize: "1rem",
          pb: 3,
        }}
      >
        Enter your phone number to sign up for Snap.
      </Typography>
      {/* </Box> */}
      <FormControl
        sx={{
          mx: "auto",
          p: 3,
          gap: 2,
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
        >
          Continue
        </Button>
      </FormControl>
    </>
  );
};
