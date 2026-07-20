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
        variant="h6"
        sx={{
          fontSize: "1.1rem",
          fontWeight: 750,
          textAlign: "left",
          color: "text.primary",
          mb: 0.75,
        }}
      >
        What's your phone number?
      </Typography>
      <Typography
        variant="body2"
        sx={{ textAlign: "left", color: "text.secondary", mb: 3 }}
      >
        We'll use it to create and secure your Snap account.
      </Typography>
      <FormControl
        sx={{
          width: "100%",
          flex: 1,
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
        <Typography
          variant="caption"
          sx={{ textAlign: "left", color: "text.secondary", lineHeight: 1.5 }}
        >
          By continuing, you agree to our <a href="/terms">Terms</a> and{" "}
          <a href="/privacy">Privacy Policy</a>.
        </Typography>
        <Button
          disabled={!phoneNumber}
          variant="contained"
          type="submit"
          className={styles.button}
          sx={{
            mt: "auto",
            minHeight: 52,
            borderRadius: 2.5,
            fontSize: "1rem",
            fontWeight: 750,
            textTransform: "none",
          }}
        >
          Continue
        </Button>
      </FormControl>
    </Box>
  );
};
