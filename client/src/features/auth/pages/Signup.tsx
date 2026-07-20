import snapLogo from "../../../assets/snap.jpg";
import { AppPage } from "../../../app/layouts/AppPage";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { useState } from "react";
import { EmailSignup } from "./EmailSignup";
import { PhoneNumberSignup } from "./PhoneNumberSignup";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";

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
        bgcolor: "grey",
        px: { xs: 0, md: 0 },
        py: { xs: 0, md: 0 },
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
          justifyContent: "center",
          height: signupMode === "email" ? "28svh" : "40svh",
          minHeight: signupMode === "email" ? 210 : 280,
          flexShrink: 0,
          px: 3,
          pb: 5,
          background:
            "radial-gradient(circle at 20% 10%, rgba(59, 130, 246, 0.24), transparent 20%), radial-gradient(circle at 85% 8%, rgba(14, 165, 233, 0.16), transparent 18%), radial-gradient(circle at 80% 90%, rgba(59, 130, 246, 0.18), transparent 22%), linear-gradient(180deg, #0a2047 0%, #051228 100%)",
        }}
      >
        <Box
          component="img"
          src={snapLogo}
          alt="Snap"
          sx={{
            width: signupMode === "email" ? 64 : 90,
            height: "auto",
            objectFit: "contain",
          }}
        />
        <Typography
          variant="h5"
          sx={{
            fontSize: "1.5rem",
            fontWeight: 700,
            lineHeight: 1.2,
            color: "white",
          }}
        >
          Create your account
        </Typography>
      </Stack>
      <Box
        sx={{
          bgcolor: "white",
          flex: 1,
          minHeight:
            signupMode === "email"
              ? "calc(72svh - 16px)"
              : "calc(60svh - 16px)",
          mx: 2,
          mb: 2,
          mt: -5,
          px: { xs: 3, sm: 4 },
          pt: 1.25,
          pb: 2.5,
          borderRadius: "24px 24px 10px 10px",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          zIndex: 1,
          boxShadow: "0 -10px 35px rgba(5, 18, 40, 0.18)",
        }}
      >
        <Box
          aria-hidden="true"
          sx={{
            width: 44,
            height: 4,
            borderRadius: 999,
            bgcolor: "rgba(15, 23, 42, 0.16)",
            mx: "auto",
            mb: signupMode === "email" ? 1.5 : 3,
          }}
        />
        {signupMode === "email" ? <EmailSignup /> : <PhoneNumberSignup />}
        <Stack spacing={2} sx={{ mt: 2.5 }}>
          <Stack direction="row" sx={{ alignItems: "center", gap: 1.5 }}>
            <Divider sx={{ flex: 1 }} />
            <Typography variant="caption" sx={{ color: "text.secondary" }}>
              OR
            </Typography>
            <Divider sx={{ flex: 1 }} />
          </Stack>
          <Button
            fullWidth
            variant="outlined"
            onClick={() =>
              setSignupMode(signupMode === "email" ? "phone" : "email")
            }
            sx={{
              minHeight: 48,
              borderRadius: 2.5,
              textTransform: "none",
              fontWeight: 700,
            }}
          >
            Sign up with {signupMode === "email" ? "phone" : "email"}
          </Button>
        </Stack>
        <Box id="footer" sx={{ pb: "env(safe-area-inset-bottom)" }}>
          <Typography
            variant="body2"
            sx={{ textAlign: "center", mt: 2.5, color: "text.secondary" }}
          >
            Already have an account?{" "}
            <Link to="/login" style={{ fontWeight: 700 }}>
              Log in
            </Link>
          </Typography>
        </Box>
      </Box>
    </AppPage>
  );
};
