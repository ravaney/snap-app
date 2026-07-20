import snapLogo from "../../../assets/snap.jpg";
import { AppPage } from "../../../app/layouts/AppPage";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { useState } from "react";
import { EmailSignup } from "./EmailSignup";
import { PhoneNumberSignup } from "./PhoneNumberSignup";

export const Signup = () => {
  const [signupMode, setSignupMode] = useState<"email" | "phone">("phone");
  return (
    <AppPage
      component="main"
      sx={{
        flex: 1,
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
        overflowY: "auto",
        width: "100%",
        bgcolor: "white",
      }}
      contentSx={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Stack
        spacing={2}
        sx={{
          alignItems: "center",
          mb: 1,
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
            pt: "max(32px, env(safe-area-inset-top))",
            pb: 3,
          }}
        />
        <Typography
          variant="h5"
          sx={{
            fontSize: "1.5rem",
            fontWeight: 700,
            lineHeight: 1.2,
          }}
        >
          Create your account
        </Typography>
      </Stack>
      {signupMode === "email" ? <EmailSignup /> : <PhoneNumberSignup />}
      <Box sx={{ mt: 2 }}>
        <Stack
          direction="row"
          spacing={1}
          sx={{ alignItems: "center", justifyContent: "center" }}
        >
          <Typography variant="body2">Sign up with:</Typography>
          <Typography
            variant="body2"
            sx={{
              color: "primary.main",
              cursor: "pointer",
            }}
            onClick={() =>
              setSignupMode(signupMode === "email" ? "phone" : "email")
            }
          >
            {signupMode === "email" ? "Phone" : "Email"}
          </Typography>
        </Stack>
      </Box>
      <Box id="footer" sx={{ mt: "auto", pb: "env(safe-area-inset-bottom)" }}>
        <Typography variant="body2" sx={{ textAlign: "center", mt: 2 }}>
          Already have an account? <Link to="/login">Log in</Link>
        </Typography>
      </Box>
    </AppPage>
  );
};
