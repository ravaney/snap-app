import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
type Greetingsprops = {
  name: string;
};
export const Greetings = ({ name }: Greetingsprops) => {
  return (
    <Stack sx={{ textAlign: "left", gap: 0.5 }}>
      <Typography
        variant="subtitle2"
        sx={{
          color: "rgba(255,255,255,0.75)",
          textTransform: "uppercase",
          letterSpacing: 1,
        }}
      >
        Good morning
      </Typography>
      <Typography variant="h4" sx={{ fontWeight: 700, color: "#ffffff" }}>
        {name}
      </Typography>
    </Stack>
  );
};
