import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

type Greetingsprops = {
  name: string;
  snapTag: string;
};

const currentHour = new Date().getHours();
const getGreeting = () => {
  if (currentHour >= 3 && currentHour < 12) {
    return "Good Morning";
  } else if (currentHour >= 12 && currentHour < 15) {
    return "Good Afternoon";
  } else if (currentHour >= 15 && currentHour < 20) {
    return "Good Evening";
  } else if (currentHour >= 20 || currentHour < 3) {
    return "Good Night";
  } else {
    return "Hello";
  }
};

export const Greetings = ({ name, snapTag }: Greetingsprops) => {
  return (
    <Stack sx={{ textAlign: "left", gap: 0.5 }}>
      <Typography
        variant="caption"
        sx={{
          color: "rgba(255,255,255,0.75)",
          textTransform: "uppercase",
          letterSpacing: 1,
        }}
      >
        {getGreeting()},
      </Typography>
      <Typography variant="h4" sx={{ fontWeight: 600, color: "#e2ecf8" }}>
        {snapTag}
      </Typography>
      {/* <Typography
        sx={{
          color: "rgba(255,255,255,0.78)",
          fontSize: 14,
          fontWeight: 600,
          lineHeight: 1,
        }}
      >
        {snapTag}
      </Typography> */}
    </Stack>
  );
};
