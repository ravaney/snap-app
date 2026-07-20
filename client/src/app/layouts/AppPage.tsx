import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export const AppPage = ({ children, header, contentSx, sx }: any) => {
  return (
    <Box
      sx={[
        {
          width: "100%",
          px: { xs: 2, md: 3 },
          py: { xs: 3, md: 4 },
          boxSizing: "border-box",
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      {header && <Box sx={{ mb: { xs: 2, md: 3 } }}>{header}</Box>}

      <Box
        sx={[
          {
            width: "100%",
          },
          ...(Array.isArray(contentSx) ? contentSx : [contentSx]),
        ]}
      >
        {children}
      </Box>
    </Box>
  );
};

export const PageHeader = ({ title, subtitle, action }: any) => {
  return (
    <Stack
      direction="row"
      sx={{ alignItems: "flex-start", justifyContent: "space-between", gap: 2 }}
    >
      {" "}
      <Box sx={{ minWidth: 0, textAlign: "left" }}>
        {" "}
        <Typography
          variant="h4"
          sx={{ color: "#ffffff", fontWeight: 800, lineHeight: 1.05 }}
        >
          {" "}
          {title}{" "}
        </Typography>{" "}
        {subtitle && (
          <Typography
            sx={{
              color: "rgba(255,255,255,0.72)",
              fontSize: 14,
              fontWeight: 600,
              mt: 0.75,
            }}
          >
            {" "}
            {subtitle}{" "}
          </Typography>
        )}{" "}
      </Box>{" "}
      {action}{" "}
    </Stack>
  );
};
