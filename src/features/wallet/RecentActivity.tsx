import { useState } from "react";
import { useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const activity = [
  { name: "Spotify", date: "Today", amount: "- $12.99", tag: "Subscription" },
  { name: "Dinner out", date: "May 16", amount: "- $48.30", tag: "Food" },
  { name: "Salary", date: "May 15", amount: "+ $3,250", tag: "Income" },
  { name: "Utilities", date: "May 14", amount: "- $82.75", tag: "Bills" },
];

type RecentActivityProps = {
  mode?: "full" | "collapsed";
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
        p: 1.25,
        borderRadius: 2.5,
        bgcolor: "rgba(255,255,255,0.08)",
        border: "1px solid rgba(255,255,255,0.12)",
        boxShadow: "0 10px 20px rgba(7, 14, 31, 0.1)",
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
            Latest transactions in your account
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
        {shownActivity.map((item, index) => (
          <Box key={item.name + item.date}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 0.75,
                flexWrap: "nowrap",
              }}
            >
              <Box sx={{ minWidth: 0, overflow: "hidden", textAlign: "left" }}>
                <Typography
                  sx={{
                    fontWeight: 700,
                    fontSize: 13,
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
                    fontSize: 10,
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
                <Typography sx={{ fontWeight: 700, fontSize: 13 }}>
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
              <Divider sx={{ borderColor: "rgba(255,255,255,0.14)", my: 1 }} />
            )}
          </Box>
        ))}
      </Stack>
    </Box>
  );
};
