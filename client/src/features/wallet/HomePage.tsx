import Box from "@mui/material/Box";
import { AppPage } from "../../app/layouts/AppPage";
import { Greetings } from "./Greetings";
import styles from "./HomePage.module.css";
import { BalanceCard } from "./BalanceCard";
import { QuickActions } from "./QuickActions";

export const HomePage = () => {
  return (
    <AppPage header={<Greetings name="Lamar" snapTag="@lewislam" />}>
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
