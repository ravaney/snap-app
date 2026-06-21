import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { AppPage } from "../../components/layout/AppPage";
import { Greetings } from "./Greetings";
import styles from "./HomePage.module.css";
import { BalanceCard } from "./BalanceCard";
import { QuickActions } from "./QuickActions";
import snapLogo from "../../assets/snap.jpg";

export const HomePage = () => {
  return (
    <AppPage
      header={
        <Stack
          direction="row"
          sx={{ alignItems: "flex-start", justifyContent: "space-between" }}
        >
          <Greetings name="Lamar" snapTag="@lewislam" />
          <Box
            component="img"
            src={snapLogo}
            alt="Snap"
            sx={{
              width: 44,
              height: 44,
              borderRadius: 2,
              objectFit: "cover",
              boxShadow: "0 12px 24px rgba(0,0,0,0.18)",
            }}
          />
        </Stack>
      }
    >
      <Box className={styles.content}>
        <Box className={styles.cardGrid}>
          <BalanceCard />
          <Box className={styles.sideStack}>
            <QuickActions />
            {/* //coupons */}
          </Box>
        </Box>
      </Box>
    </AppPage>
  );
};
