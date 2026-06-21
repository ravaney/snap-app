import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import dayjs from "dayjs";
import isToday from "dayjs/plugin/isToday";
import isYesterday from "dayjs/plugin/isYesterday";
import { Activity, type ActivityProps } from "./Activity";
import { MOCK } from "../../CONST";

dayjs.extend(isToday);
dayjs.extend(isYesterday);

const formatDateHeader = (dateStr: string) => {
  const date = dayjs(dateStr);
  if (date.isToday()) return "Today";
  if (date.isYesterday()) return "Yesterday";
  return date.format("MMMM D, YYYY");
};

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

  const grouped = groupByDate(MOCK);

  const sortedDates = Object.keys(grouped).sort(
    (a, b) => new Date(b).getTime() - new Date(a).getTime(),
  );

  return (
    <Stack sx={{ gap: 2, width: "100%", pb: 1 }}>
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
