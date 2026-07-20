import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { FiArrowDownCircle, FiCoffee, FiHome, FiRepeat } from "react-icons/fi";
import { formatCurrency } from "../../CONST";

export type ActivityProps = {
  id: string;
  description: string;
  amount: number;
  category: string;
  date: string; // or Date object
  isIncome: boolean;
};

const categoryStyles = {
  Subscription: {
    icon: <FiRepeat size={16} />,
  },
  Food: {
    icon: <FiCoffee size={16} />,
  },
  Income: {
    icon: <FiArrowDownCircle size={16} />,
  },
  Bills: {
    icon: <FiHome size={16} />,
  },
};

export const Activity = ({ activities }: { activities: ActivityProps[] }) => {
  return (
    <Stack
      sx={{
        p: 1.5,
        borderRadius: 3,
        bgcolor: "rgba(255,255,255,0.08)",
        border: "1px solid rgba(255,255,255,0.14)",
        boxShadow: "0 16px 32px rgba(7, 14, 31, 0.14)",
        backdropFilter: "blur(14px)",
        display: "flex",
      }}
    >
      <Stack spacing={0.75}>
        {activities.map((activity, index) => {
          const style =
            categoryStyles[activity.category as keyof typeof categoryStyles] ??
            categoryStyles.Bills;
          return (
            <Box key={activity.description + activity.date}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: 1,
                  flexWrap: "nowrap",
                  py: 0.25,
                }}
              >
                <Box
                  sx={{
                    width: 34,
                    height: 34,
                    borderRadius: "50%",
                    flex: "0 0 auto",
                    display: "grid",
                    placeItems: "center",
                    color: "rgba(255,255,255,0.74)",
                    bgcolor: "rgba(255,255,255,0.1)",
                    border: "1px solid rgba(255,255,255,0.12)",
                  }}
                >
                  {style.icon}
                </Box>
                <Box
                  sx={{
                    minWidth: 0,
                    overflow: "hidden",
                    textAlign: "left",
                    mr: "auto",
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 700,
                      fontSize: 14,
                      lineHeight: 1.2,
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {activity.description}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      color: "rgba(255,255,255,0.7)",
                      fontSize: 11,
                      lineHeight: 1.2,
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {activity.category}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    textAlign: "right",
                    whiteSpace: "nowrap",
                    minWidth: "auto",
                  }}
                >
                  <Typography
                    sx={{
                      color: activity.isIncome
                        ? "#34d399"
                        : "rgba(255,255,255,0.94)",
                      fontWeight: 800,
                      fontSize: 13,
                    }}
                  >
                    {formatCurrency(activity.amount)}
                  </Typography>
                </Box>
              </Box>
              {activities.length > 1 && index < activities.length - 1 && (
                <Divider sx={{ borderColor: "rgba(255,255,255,0.12)" }} />
              )}
            </Box>
          );
        })}
      </Stack>
    </Stack>
  );
};
