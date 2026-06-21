import type { ReactNode } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { SxProps, Theme } from "@mui/material/styles";

type AppPageProps = {
  children: ReactNode;
  header?: ReactNode;
  contentSx?: SxProps<Theme>;
  sx?: SxProps<Theme>;
};

type PageHeaderProps = {
  title: string;
  subtitle?: string;
  action?: ReactNode;
};

export const AppPage = ({ children, header, contentSx, sx }: AppPageProps) => {
  return (
    <Box
      sx={[
        {
          position: "relative",
          width: "100%",
          minHeight: "100%",
          px: { xs: 2, md: 3 },
          py: { xs: 3, md: 4 },
          boxSizing: "border-box",
          color: "#ffffff",
          background:
            "radial-gradient(circle at 20% 10%, rgba(59, 130, 246, 0.24), transparent 20%), radial-gradient(circle at 85% 8%, rgba(14, 165, 233, 0.16), transparent 18%), radial-gradient(circle at 80% 90%, rgba(59, 130, 246, 0.18), transparent 22%), linear-gradient(180deg, #0a2047 0%, #051228 100%)",

          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 50% 40%, rgba(255, 255, 255, 0.08), transparent 35%)",
            pointerEvents: "none",
          },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      {header && (
        <Box sx={{ position: "relative", zIndex: 1, mb: { xs: 2, md: 3 } }}>
          {header}
        </Box>
      )}
      <Box
        sx={[
          {
            position: "relative",
            zIndex: 1,
            width: "100%",
            minHeight: 0,
          },
          ...(Array.isArray(contentSx) ? contentSx : [contentSx]),
        ]}
      >
        {children}
      </Box>
    </Box>
  );
};

export const PageHeader = ({ title, subtitle, action }: PageHeaderProps) => {
  return (
    <Stack
      direction="row"
      sx={{ alignItems: "flex-start", justifyContent: "space-between", gap: 2 }}
    >
      <Box sx={{ minWidth: 0, textAlign: "left" }}>
        <Typography
          variant="h4"
          sx={{ color: "#ffffff", fontWeight: 800, lineHeight: 1.05 }}
        >
          {title}
        </Typography>
        {subtitle && (
          <Typography
            sx={{
              color: "rgba(255,255,255,0.72)",
              fontSize: 14,
              fontWeight: 600,
              mt: 0.75,
            }}
          >
            {subtitle}
          </Typography>
        )}
      </Box>
      {action}
    </Stack>
  );
};
