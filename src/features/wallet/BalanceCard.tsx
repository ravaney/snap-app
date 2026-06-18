import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

export const BalanceCard = () => {
  return (
    <Box
      sx={{
        p: { xs: 3, md: 4 },
        borderRadius: 4,
        color: "white",
        background: "linear-gradient(135deg, #2354a7 0%, #1b3e75 100%)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxShadow: "0 28px 60px rgba(8, 25, 70, 0.25)",
      }}
    >
      <Box>
        <Typography
          variant="subtitle2"
          sx={{ opacity: 0.8, letterSpacing: 0.7 }}
        >
          Cash Balance
        </Typography>
        <Typography
          variant="h3"
          sx={{ fontWeight: 700, mt: 1, letterSpacing: "-0.02em" }}
        >
          $4,820.55
        </Typography>
      </Box>
      <Box sx={{ mt: 2 }}>
        <Stack
          direction="row"
          sx={{ justifyContent: "space-between", alignItems: "center" }}
        >
          <Typography variant="body2" sx={{ opacity: 0.72 }}>
            Available now
          </Typography>
          <Typography variant="caption" sx={{ opacity: 0.72 }}>
            Updated 5 min ago
          </Typography>
        </Stack>
        <Box
          component="hr"
          sx={{
            border: 0,
            borderTop: "1px solid rgba(255,255,255,0.18)",
            my: 2,
            opacity: 0.9,
          }}
        />
        <Stack
          direction="row"
          sx={{
            justifyContent: "space-between",
            alignItems: "flex-start",
            mt: 2,
          }}
        >
          <Box>
            <Typography
              variant="caption"
              sx={{
                opacity: 0.7,
                textTransform: "uppercase",
                letterSpacing: 0.8,
              }}
            >
              Outstanding loan balance
            </Typography>
            <Typography variant="subtitle2" sx={{ fontWeight: 700, mt: 0.5 }}>
              $1,275.20
            </Typography>
          </Box>
          <Box sx={{ textAlign: "right" }}>
            <Typography
              variant="caption"
              sx={{ opacity: 0.64, display: "block" }}
            >
              Next payment
            </Typography>
            <Typography variant="subtitle2" sx={{ fontWeight: 700, mt: 0.5 }}>
              $145.00
            </Typography>
            <Typography
              variant="caption"
              sx={{ opacity: 0.64, display: "block", mt: 0.5 }}
            >
              Due May 21
            </Typography>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};
