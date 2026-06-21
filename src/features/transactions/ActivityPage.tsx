import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { FaArrowTrendDown } from "react-icons/fa6";
import { AppPage } from "../../components/layout/AppPage";
import Button from "@mui/material/Button";
import { RecentActivity } from "./RecentActivity";

const cardSx = {
  flex: 1,
  p: 2,
  borderRadius: "0.5rem",
  bgcolor: "#234169",
  textAlign: "left",
};
type MetricCardProps = {
  icon: React.ReactNode;
  label: string;
  value: string;
  color: string;
};
const MetricCard = ({ icon, label, value, color }: MetricCardProps) => {
  return (
    <Box sx={cardSx}>
      <Typography
        variant="caption"
        sx={{
          letterSpacing: 1,
        }}
      >
        {icon} {label}
      </Typography>
      <Typography variant="h6" sx={{ color, fontWeight: 700 }}>
        {value}
      </Typography>
    </Box>
  );
};

const FilterButton = ({ name }: { name: string }) => {
  return (
    <Button
      sx={{
        bgcolor: "#5b8fd8",
        color: "white",
        textTransform: "none",
        px: 2,
      }}
    >
      {name}
    </Button>
  );
};

export const ActivityPage = () => {
  return (
    <AppPage
      contentSx={{ px: 0, color: "#e2ecf8" }}
      header={
        <Stack
          direction="row"
          sx={{
            alignItems: "flex-start",
            justifyContent: "space-between",
            mt: { xs: 2, md: 3 },
          }}
        >
          <Stack sx={{ textAlign: "left", color: "#e2ecf8", gap: 0.5 }}>
            <Typography variant="h4" sx={{ fontWeight: 600 }}>
              Activity
            </Typography>
            <Typography
              variant="caption"
              sx={{
                textAlign: "left",
                letterSpacing: 1,
                textTransform: "uppercase",
                fontWeight: 700,
              }}
            >
              June 2026
            </Typography>
          </Stack>
        </Stack>
      }
    >
      <Stack sx={{ gap: 2, width: "100%", mb: 1 }}>
        <Stack direction="row" sx={{ gap: 2 }}>
          <MetricCard
            icon={<FaArrowTrendUp color="#2ecc8a" />}
            label={"TOTAL INCOME"}
            value={"+$5,800.00"}
            color={"#2ecc8a"}
          />
          <MetricCard
            icon={<FaArrowTrendDown color="#e05555" />}
            label={"TOTAL EXPENSES"}
            value={"-$300.00"}
            color={"#e05555"}
          />
        </Stack>
        <TextField
          sx={{
            bgcolor: "#234169",
            borderRadius: "0.5rem",
            "& input::placeholder": {
              color: "#e2ecf8",
              opacity: 1,
              fontSize: 14,
              letterSpacing: 1,
            },
          }}
          size="small"
          placeholder="Search transactions..."
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <FaSearch size={12} color="#e2ecf8" />
                </InputAdornment>
              ),
            },
          }}
        />
        <Stack direction={"row"} sx={{ gap: 1 }}>
          <FilterButton name="All" />
          <FilterButton name="Income" />
          <FilterButton name="Expenses" />
        </Stack>
      </Stack>
      <RecentActivity />
    </AppPage>
  );
};
