import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import SvgIcon from "@mui/material/SvgIcon";
import Typography from "@mui/material/Typography";
import { GiReceiveMoney } from "react-icons/gi";

type ActionColor = "primary" | "secondary" | "info";

type QuickAction = {
  label: string;
  color: ActionColor;
  icon: React.ReactNode;
};

const actions: QuickAction[] = [
  {
    label: "Send",
    color: "primary",
    icon: (
      <SvgIcon viewBox="0 0 24 24">
        <path d="M2 12l19 7-7-7 7-7z" />
      </SvgIcon>
    ),
  },
  {
    label: "Request",
    color: "secondary",
    icon: (
      <SvgIcon viewBox="0 0 24 24">
        <path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm-1 5v4H7l5 5 5-5h-4V7h-2z" />
      </SvgIcon>
    ),
  },
  {
    label: "Borrow",
    color: "info",
    icon: <GiReceiveMoney size={20} />,
  },
];

export const QuickActions = () => {
  return (
    <Box
      sx={{
        p: 3,
        borderRadius: 4,
        bgcolor: "rgba(255,255,255,0.08)",
        border: "1px solid rgba(255,255,255,0.14)",
        boxShadow: "0 24px 50px rgba(7, 14, 31, 0.16)",
      }}
    >
      <Typography
        variant="subtitle2"
        sx={{ mb: 2, color: "rgba(255,255,255,0.9)", letterSpacing: 0.6 }}
      >
        Quick actions
      </Typography>
      <Stack direction="row" spacing={2}>
        {actions.map((action) => (
          <Button
            key={action.label}
            variant="contained"
            color={action.color}
            startIcon={action.icon}
            sx={{
              width: "100%",
              borderRadius: 3,
              py: 1.75,
              textTransform: "none",
              fontWeight: 700,
              minWidth: 0,
            }}
          >
            {action.label}
          </Button>
        ))}
      </Stack>
    </Box>
  );
};
