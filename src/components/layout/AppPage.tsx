import type { ReactNode } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { SxProps, Theme } from "@mui/material/styles";
import snapLogo from "../../assets/snap.jpg";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import { IoMdNotificationsOutline } from "react-icons/io";
import mockPerson from "../../assets/profile.png";
import Avatar from "@mui/material/Avatar";
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
          width: "100%",
          height: "100%", // fill the parent outlet
          display: "flex",
          flexDirection: "column",
          px: { xs: 2, md: 3 },
          py: { xs: 3, md: 4 },
          boxSizing: "border-box",
          color: "#ffffff",
          background:
            "radial-gradient(circle at 20% 10%, rgba(59, 130, 246, 0.24), transparent 20%), radial-gradient(circle at 85% 8%, rgba(14, 165, 233, 0.16), transparent 18%), radial-gradient(circle at 80% 90%, rgba(59, 130, 246, 0.18), transparent 22%), linear-gradient(180deg, #0a2047 0%, #051228 100%)",
          overflow: "hidden", // prevent whole page scrolling
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
      {/* ---------- Fixed Top Bar (never scrolls) ---------- */}
      <Box sx={{ flexShrink: 0, position: "relative", zIndex: 2 }}>
        <Stack
          direction="row"
          sx={{
            justifyContent: "space-between",
            pb: 1,
            boxShadow: "0 16px 24px -16px rgba(0,0,0,0.45)",
            backdropFilter: "blur(6px)",
          }}
        >
          <Avatar
            src={mockPerson}
            aria-label="Profile"
            sx={{
              width: 48,
              height: 48,
              borderRadius: "50%",
              bgcolor: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.16)",
              color: "white",
              boxShadow: "0 10px 20px rgba(0,0,0,0.12)",
            }}
          />
          <Box
            component="img"
            src={snapLogo}
            alt="Snap"
            sx={{
              width: 44,
              height: 44,
              borderRadius: 2,
              objectFit: "cover",
              boxShadow: "0 12px 24px rgba(0,0,0,0.18)",
            }}
          />
          <IconButton aria-label="Notifications">
            <Badge badgeContent={5} color="secondary" max={99}>
              <IoMdNotificationsOutline size={36} color="white" />
            </Badge>
          </IconButton>
        </Stack>
      </Box>

      {/* ---------- Scrollable Content Area ---------- */}
      <Box
        sx={{
          flex: 1, // takes remaining height
          overflowY: "auto", // scrolls when content overflows
          position: "relative",
          zIndex: 1,
          width: "100%",
          // Optional: add top spacing if needed
          // mt: 1,
        }}
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
