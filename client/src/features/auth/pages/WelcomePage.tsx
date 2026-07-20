import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import snapLogo from "../../../assets/snap.jpg";
import styles from "./LoginPage.module.css";

import { NEON_PINK, VIVID_BLUE } from "../../../CONST";

export const WelcomePage = () => {
  const navigate = useNavigate();

  return (
    <Box
      component="main"
      sx={{
        minHeight: "100dvh",
        display: "grid",
        gridTemplateRows: "1fr auto",
        px: 3,
        pt: "max(32px, env(safe-area-inset-top))",
        pb: "max(24px, env(safe-area-inset-bottom))",
        boxSizing: "border-box",
        color: "white",
      }}
    >
      {/* Branding */}
      <Stack
        spacing={3}
        sx={{
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <header className={styles.header}>
          <img className={styles.logoIcon} src={snapLogo} alt="Snap" />
          <h1 className={styles.logo}>Snap</h1>
          <p className={styles.subtitle}>Send money instantly</p>
        </header>
      </Stack>

      {/* Authentication actions */}
      <Stack
        spacing={1.5}
        sx={{
          width: "100%",
          maxWidth: 420,
          mx: "auto",
        }}
      >
        <Button
          fullWidth
          variant="contained"
          onClick={() => navigate("/signup")}
          sx={{
            minHeight: 52,
            borderRadius: 3,
            fontSize: "1rem",
            fontWeight: 700,
            color: "white",
            borderColor: NEON_PINK,

            "&:hover": {
              background: `linear-gradient(135deg, ${VIVID_BLUE}, ${NEON_PINK})`,
              filter: "brightness(1.08)",
            },
          }}
        >
          Create account
        </Button>

        <Button
          fullWidth
          variant="outlined"
          onClick={() => navigate("/login")}
          sx={{
            minHeight: 52,
            borderRadius: 3,
            fontSize: "1rem",
            fontWeight: 700,
            color: VIVID_BLUE,
            borderColor: VIVID_BLUE,

            "&:hover": {
              borderColor: "white",
              bgcolor: "rgba(255,255,255,0.08)",
            },
          }}
        >
          Log in
        </Button>

        <Typography
          variant="caption"
          sx={{
            pt: 1,
            textAlign: "center",
            color: VIVID_BLUE,
          }}
        >
          By continuing, you agree to our Terms and Privacy Policy.
        </Typography>
      </Stack>
    </Box>
  );
};
