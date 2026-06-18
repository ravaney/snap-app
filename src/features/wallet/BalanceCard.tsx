import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

export const BalanceCard = () => {
  return (
    <Box
      sx={{
        p: { xs: 2.5, md: 3 },
        borderRadius: 3,
        color: "white",
        background:
          "linear-gradient(145deg, rgba(255,255,255,0.2) 0%, rgba(35,84,167,0.22) 48%, rgba(7,22,49,0.44) 100%)",
        border: "1px solid rgba(255,255,255,0.18)",
        display: "flex",
        flexDirection: "column",
        gap: 2.25,
        boxShadow: "0 24px 48px rgba(7, 14, 31, 0.18)",
        backdropFilter: "blur(14px)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Typography variant="subtitle2" sx={{ opacity: 0.82, letterSpacing: 0.7 }}>
          Cash Balance
        </Typography>
        <Typography
          variant="caption"
          sx={{
            px: 1,
            py: 0.5,
            borderRadius: 999,
            color: "#d7fbe8",
            bgcolor: "rgba(34,197,94,0.14)",
            border: "1px solid rgba(134,239,172,0.28)",
            fontWeight: 700,
            lineHeight: 1,
          }}
        >
          Available
        </Typography>
      </Box>

      <Box sx={{ textAlign: "left" }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 800,
            letterSpacing: "-0.02em",
            lineHeight: 1,
            textShadow: "0 8px 28px rgba(0,0,0,0.2)",
          }}
        >
          $4,820.55
        </Typography>
        <Typography variant="body2" sx={{ mt: 1, opacity: 0.68 }}>
          Updated 5 min ago
        </Typography>
      </Box>

      <Box
        sx={{
          p: 1.5,
          borderRadius: 2,
          bgcolor: "rgba(2, 8, 23, 0.22)",
          border: "1px solid rgba(255,255,255,0.12)",
        }}
      >
        <Stack
          direction="row"
          sx={{
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: 2,
          }}
        >
          <Box sx={{ textAlign: "left" }}>
            <Typography
              variant="caption"
              sx={{
                opacity: 0.68,
                textTransform: "uppercase",
                letterSpacing: 0.75,
                display: "block",
              }}
            >
              Loan balance
            </Typography>
            <Typography variant="subtitle2" sx={{ fontWeight: 800, mt: 0.5 }}>
              $1,275.20
            </Typography>
          </Box>
          <Box sx={{ textAlign: "right" }}>
            <Typography
              variant="caption"
              sx={{
                opacity: 0.68,
                textTransform: "uppercase",
                letterSpacing: 0.75,
                display: "block",
              }}
            >
              Next payment
            </Typography>
            <Typography variant="subtitle2" sx={{ fontWeight: 800, mt: 0.5 }}>
              $145.00
            </Typography>
            <Typography
              variant="caption"
              sx={{ opacity: 0.62, display: "block", mt: 0.25 }}
            >
              Due May 21
            </Typography>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};
