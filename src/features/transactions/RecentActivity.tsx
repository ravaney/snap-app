import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import dayjs from "dayjs";
import isToday from "dayjs/plugin/isToday";
import isYesterday from "dayjs/plugin/isYesterday";
import { Activity, type ActivityProps } from "./Activity";

dayjs.extend(isToday);
dayjs.extend(isYesterday);

const formatDateHeader = (dateStr: string) => {
  const date = dayjs(dateStr);
  if (date.isToday()) return "Today";
  if (date.isYesterday()) return "Yesterday";
  return date.format("MMMM D, YYYY");
};

const activities: ActivityProps[] = [
  {
    id: "1",
    description: "Spotify",
    amount: 12.99,
    category: "Subscription",
    date: "2026-06-20", // consistent ISO format
    isIncome: false,
  },
  {
    id: "2",
    description: "Dinner out",
    date: "2026-06-20",
    amount: 48.3,
    category: "Food",
    isIncome: false,
  },
  {
    id: "3",
    description: "Salary",
    date: "2026-05-15",
    amount: 3250,
    category: "Income",
    isIncome: true,
  },
  {
    id: "4",
    description: "Utilities",
    date: "2026-05-14",
    amount: 82.75,
    category: "Bills",
    isIncome: false,
  },
];

export const RecentActivity = () => {
  const groupByDate = (activities: ActivityProps[]) => {
    return activities.reduce<Record<string, ActivityProps[]>>(
      (groups, activity) => {
        const date = activity.date; // now consistently "YYYY-MM-DD"
        if (!groups[date]) {
          groups[date] = [];
        }
        groups[date].push(activity);
        return groups;
      },
      {},
    );
  };

  const grouped = groupByDate(activities);

  const sortedDates = Object.keys(grouped).sort(
    (a, b) => new Date(b).getTime() - new Date(a).getTime(),
  );

  return (
    <Stack sx={{ gap: 2, width: "100%" }}>
      {sortedDates.map((date) => (
        <Stack key={date} sx={{ gap: 1 }}>
          <Typography
            sx={{
              textAlign: "left",
              color: "#e2ecf8",
              fontSize: 12,
              fontWeight: 500,
              letterSpacing: 1,
              lineHeight: 1.2,
              textTransform: "uppercase",
            }}
          >
            {formatDateHeader(date)}
          </Typography>
          <Activity activities={grouped[date]} key={date} />
        </Stack>
      ))}
    </Stack>
  );
};
