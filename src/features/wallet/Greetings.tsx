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

export const Greetings = ({ snapTag }: Greetingsprops) => {
  return (
    <Stack
      sx={{
        gap: 0.5,
        justifySelf: "center",
        alignItems: "center",
        mt: { xs: 2, md: 3 },
      }}
      direction={"row"}
    >
      <Typography
        variant="subtitle1"
        sx={{
          fontWeight: 600,
          color: "#e2ecf8",
        }}
      >
        {getGreeting()},
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{ fontWeight: 600, color: "#e2ecf8" }}
      >
        {snapTag}
      </Typography>
    </Stack>
  );
};
