import { useState } from "react";
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
  const [mode, setMode] = useState<"full" | "collapsed">(initialMode);
  const shownActivity = mode === "collapsed" ? activity.slice(0, 3) : activity;

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
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Box>
          <Typography
            variant="subtitle2"
            sx={{ color: "rgba(255,255,255,0.9)", letterSpacing: 0.6 }}
          >
            Recent activity
          </Typography>
          <Typography
            variant="caption"
            sx={{ color: "rgba(255,255,255,0.68)" }}
          >
            Latest transactions in your account
          </Typography>
        </Box>
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
      </Box>

      <Stack spacing={2}>
        {shownActivity.map((item, index) => (
          <Box key={item.name + item.date}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 2,
                flexWrap: "nowrap",
              }}
            >
              <Box sx={{ minWidth: 0, overflow: "hidden" }}>
                <Typography
                  sx={{
                    fontWeight: 700,
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
                    color: "rgba(255,255,255,0.68)",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {item.tag}
                </Typography>
              </Box>
              <Box sx={{ textAlign: "right", whiteSpace: "nowrap" }}>
                <Typography sx={{ fontWeight: 700 }}>{item.amount}</Typography>
                <Typography
                  variant="caption"
                  sx={{ color: "rgba(255,255,255,0.68)" }}
                >
                  {item.date}
                </Typography>
              </Box>
            </Box>
            {index < shownActivity.length - 1 && (
              <Divider sx={{ borderColor: "rgba(255,255,255,0.12)", my: 2 }} />
            )}
          </Box>
        ))}
      </Stack>
    </Box>
  );
};
