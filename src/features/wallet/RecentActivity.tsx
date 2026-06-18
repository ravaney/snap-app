import { useState } from "react";
import { useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import {
  FiArrowDownCircle,
  FiCoffee,
  FiHome,
  FiRepeat,
} from "react-icons/fi";

const activity = [
  { name: "Spotify", date: "Today", amount: "- $12.99", tag: "Subscription" },
  { name: "Dinner out", date: "May 16", amount: "- $48.30", tag: "Food" },
  { name: "Salary", date: "May 15", amount: "+ $3,250", tag: "Income" },
  { name: "Utilities", date: "May 14", amount: "- $82.75", tag: "Bills" },
];

type RecentActivityProps = {
  mode?: "full" | "collapsed";
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

export const RecentActivity = ({
  mode: initialMode = "full",
}: RecentActivityProps) => {
  const location = useLocation();
  const isHome = location.pathname === "/home";
  const isActivity = location.pathname === "/activity";
  const defaultMode: "full" | "collapsed" = isActivity
    ? "full"
    : isHome
      ? "collapsed"
      : initialMode;
  const [mode, setMode] = useState<"full" | "collapsed">(defaultMode);

  const showButton = !isHome;
  const shownActivity = mode === "collapsed" ? activity.slice(0, 3) : activity;

  return (
    <Box
      sx={{
        p: 1.5,
        borderRadius: 3,
        bgcolor: "rgba(255,255,255,0.08)",
        border: "1px solid rgba(255,255,255,0.14)",
        boxShadow: "0 16px 32px rgba(7, 14, 31, 0.14)",
        backdropFilter: "blur(14px)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 1,
          mb: 1,
        }}
      >
        <Box>
          <Typography
            variant="subtitle2"
            sx={{
              color: "rgba(255,255,255,0.95)",
              letterSpacing: 0.75,
              fontWeight: 700,
              lineHeight: 1.2,
              textAlign: "left",
              mb: 0.25,
            }}
          >
            Recent activity
          </Typography>
          <Typography
            variant="caption"
            sx={{
              color: "rgba(255,255,255,0.72)",
              fontSize: 11,
              lineHeight: 1.4,
            }}
          >
            Today and this week
          </Typography>
        </Box>
        {showButton && (
          <Button
            size="small"
            variant="text"
            sx={{ color: "rgba(255,255,255,0.85)", textTransform: "none" }}
            onClick={() =>
              setMode((current) =>
                current === "collapsed" ? "full" : "collapsed",
              )
            }
          >
            {mode === "collapsed" ? "Show all" : "Show less"}
          </Button>
        )}
      </Box>

      <Stack spacing={0.75}>
        {shownActivity.map((item, index) => {
          const style =
            categoryStyles[item.tag as keyof typeof categoryStyles] ??
            categoryStyles.Bills;
          const isIncome = item.amount.trim().startsWith("+");

          return (
            <Box key={item.name + item.date}>
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
                    {item.name}
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
                    {item.tag}
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
                      color: isIncome ? "#34d399" : "rgba(255,255,255,0.94)",
                      fontWeight: 800,
                      fontSize: 13,
                    }}
                  >
                    {item.amount}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      color: "rgba(255,255,255,0.7)",
                      fontSize: 10,
                      lineHeight: 1.2,
                    }}
                  >
                    {item.date}
                  </Typography>
                </Box>
              </Box>
              {index < shownActivity.length - 1 && (
                <Divider
                  sx={{ borderColor: "rgba(255,255,255,0.14)", my: 1 }}
                />
              )}
            </Box>
          );
        })}
      </Stack>
    </Box>
  );
};
