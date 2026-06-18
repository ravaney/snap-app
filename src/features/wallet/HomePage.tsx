import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { Greetings } from "./Greetings";
import styles from "./HomePage.module.css";
import { BalanceCard } from "./BalanceCard";
import { QuickActions } from "./QuickActions";
import { RecentActivity } from "./RecentActivity";

export const HomePage = () => {
  return (
    <Stack
      className={styles.homepage}
      sx={{ px: { xs: 2, md: 3 }, py: { xs: 3, md: 4 }, minHeight: "100svh" }}
    >
      <Greetings name="Lamar" />
      <Box className={styles.content}>
        <Box className={styles.cardGrid}>
          <BalanceCard />
          <Box className={styles.sideStack}>
            <QuickActions />
            <RecentActivity />
          </Box>
        </Box>
      </Box>
    </Stack>
  );
};
