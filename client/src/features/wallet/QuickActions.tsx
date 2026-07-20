import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { FiArrowDownCircle, FiCreditCard, FiSend } from "react-icons/fi";
import { DARK_BLUE, NEON_PINK, PINK, VIVID_BLUE } from "../../CONST";
import { useNavigate } from "react-router-dom";

type QuickAction = {
  label: string;
  description: string;
  path: string;
  color: string;
  background: string;
  icon: React.ReactNode;
};

const actions: QuickAction[] = [
  {
    label: "Send",
    description: "Pay anyone",
    path: "/send",
    color: VIVID_BLUE,
    background: "rgba(13, 71, 161, 0.1)",
    icon: <FiSend size={20} />,
  },
  {
    label: "Request",
    description: "Ask for cash",
    path: "/request",
    color: PINK,
    background: "rgba(194, 24, 91, 0.1)",
    icon: <FiArrowDownCircle size={20} />,
  },
  {
    label: "Borrow",
    description: "Get a loan",
    path: "/borrow",
    color: NEON_PINK,
    background: "rgba(193, 57, 160, 0.1)",
    icon: <FiCreditCard size={20} />,
  },
];

export const QuickActions = () => {
  const nav = useNavigate();
  return (
    <Box
      sx={{
        p: 1.25,
        borderRadius: 3,
        background:
          "linear-gradient(145deg, rgba(255,255,255,0.96) 0%, rgba(232,241,255,0.9) 100%)",
        border: "1px solid rgba(168,196,237,0.55)",
        boxShadow: "0 18px 36px rgba(7, 14, 31, 0.18)",
      }}
    >
      <Stack direction="row" spacing={1} sx={{ width: "100%" }}>
        {actions.map((action) => (
          <Button
            onClick={() => nav(action.path)}
            key={action.label}
            variant="text"
            sx={{
              flex: 1,
              minWidth: 0,
              px: 0.75,
              py: 1.25,
              borderRadius: 2,
              color: DARK_BLUE,
              bgcolor: action.background,
              border: "1px solid rgba(13,71,161,0.08)",
              display: "flex",
              flexDirection: "column",
              gap: 0.65,
              textTransform: "none",
              "&:hover": {
                bgcolor: action.background,
                boxShadow: "0 10px 18px rgba(13, 71, 161, 0.12)",
                transform: "translateY(-1px)",
              },
            }}
          >
            <Box
              sx={{
                width: 38,
                height: 38,
                borderRadius: "50%",
                display: "grid",
                placeItems: "center",
                color: "#ffffff",
                bgcolor: action.color,
                boxShadow: `0 8px 16px ${action.background}`,
              }}
            >
              {action.icon}
            </Box>
            <Typography sx={{ fontSize: 13, fontWeight: 800, lineHeight: 1 }}>
              {action.label}
            </Typography>
            <Typography
              sx={{
                color: "rgba(10, 61, 122, 0.62)",
                fontSize: 10,
                fontWeight: 700,
                lineHeight: 1,
                whiteSpace: "nowrap",
              }}
            >
              {action.description}
            </Typography>
          </Button>
        ))}
      </Stack>
    </Box>
  );
};
