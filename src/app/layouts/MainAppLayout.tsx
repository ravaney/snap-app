import { NavLink, Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { FiActivity, FiUser } from "react-icons/fi";
import { NEON_PINK, VIVID_BLUE } from "../../CONST";
import snapLogo from "../../assets/snap.jpg";

const navItems = [
  {
    label: "Home",
    path: "/home",
    icon: (_color: string, isActive = false) => (
      <Box
        component="img"
        src={snapLogo}
        alt="Snap"
        sx={{
          width: 22,
          height: 22,
          objectFit: "cover",
          filter: isActive ? undefined : "brightness(0) invert(1)",
        }}
      />
    ),
  },
  {
    label: "Activity",
    path: "/activity",
    icon: (color: string) => <FiActivity size={20} color={color} />,
  },
  {
    label: "Profile",
    path: "/profile",
    icon: (color: string) => <FiUser size={20} color={color} />,
  },
];

const NAVBAR_HEIGHT = 56;

const navLinkStyles = ({ isActive }: { isActive: boolean }) => ({
  flex: "1 1 0%",
  minWidth: 0,
  maxWidth: "100%",
  display: "flex",
  flexDirection: "column" as const,
  alignItems: "center",
  justifyContent: "center",
  gap: 2,
  padding: "6px",
  color: isActive ? VIVID_BLUE : "rgba(255,255,255,0.68)",
  background: "transparent",
  borderRadius: 14,
  textDecoration: "none",
  transition: "color 0.18s ease, transform 0.18s ease",
  textAlign: "center" as const,
  WebkitTapHighlightColor: "transparent",
});

export const MainAppLayout = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        minHeight: "100svh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        overflowX: "hidden",
        boxSizing: "border-box",
      }}
    >
      <Box
        sx={{
          flex: 1,
          minHeight: 0,
          height: `calc(100svh - ${NAVBAR_HEIGHT}px)`,
          overflowY: "auto",
          width: "100%",
          boxSizing: "border-box",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        <Outlet />
      </Box>

      <Box
        component="nav"
        sx={{
          position: "fixed",
          insetX: 0,
          bottom: 0,
          zIndex: 1000,
          px: 2,
          pb: "env(safe-area-inset-bottom)",
          height: `calc(${NAVBAR_HEIGHT}px + env(safe-area-inset-bottom))`,
          width: "100%",
          boxSizing: "border-box",
          bgcolor: "rgba(5, 18, 40, 0.96)",
          borderTop: "1px solid rgba(255,255,255,0.12)",
          backdropFilter: "blur(12px)",
          boxShadow: "0 -16px 36px rgba(0,0,0,0.24)",
        }}
      >
        <Stack
          direction="row"
          spacing={0.75}
          sx={{ width: "100%", height: `${NAVBAR_HEIGHT}px` }}
        >
          {navItems.map((item) => (
            <NavLink key={item.path} to={item.path} style={navLinkStyles}>
              {({ isActive }) => {
                const iconColor = isActive
                  ? NEON_PINK
                  : "rgba(255,255,255,0.68)";

                return (
                  <>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 28,
                        height: 28,
                        color: iconColor,
                        textShadow: isActive
                          ? `0 0 8px ${NEON_PINK}, 0 0 16px ${VIVID_BLUE}`
                          : undefined,
                      }}
                    >
                      {item.icon(iconColor, isActive)}
                    </Box>
                    <Typography
                      sx={{
                        fontSize: 12,
                        fontWeight: 700,
                        lineHeight: 1,
                        textTransform: "none",
                      }}
                    >
                      {item.label}
                    </Typography>
                  </>
                );
              }}
            </NavLink>
          ))}
        </Stack>
      </Box>
    </Box>
  );
};
