import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { AppPage, PageHeader } from "../../app/layouts/AppPage";

export const SendMoney = () => {
  return (
    <AppPage
      header={
        <PageHeader
          title="Send money"
          subtitle="Choose a recipient and enter an amount."
        />
      }
    >
      <Stack spacing={2}>
        <Box
          sx={{
            p: 2,
            borderRadius: 3,
            bgcolor: "rgba(255,255,255,0.96)",
            border: "1px solid rgba(168,196,237,0.55)",
            boxShadow: "0 18px 36px rgba(7, 14, 31, 0.18)",
            color: "#0a3d7a",
            textAlign: "left",
          }}
        >
          <Typography sx={{ fontWeight: 800, fontSize: 16 }}>
            Transfer details
          </Typography>
          <Typography
            sx={{
              color: "rgba(10, 61, 122, 0.64)",
              fontSize: 13,
              fontWeight: 600,
              mt: 0.5,
            }}
          >
            Recipient and amount controls can sit here.
          </Typography>
        </Box>
      </Stack>
    </AppPage>
  );
};
