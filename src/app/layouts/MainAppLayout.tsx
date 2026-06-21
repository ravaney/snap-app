import { NavLink, Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { FiHome, FiActivity, FiUser } from "react-icons/fi";
import { VIVID_BLUE } from "../../CONST";

const navItems = [
  { label: "Home", path: "/home", icon: <FiHome size={20} /> },
  { label: "Activity", path: "/activity", icon: <FiActivity size={20} /> },
  { label: "Profile", path: "/profile", icon: <FiUser size={20} /> },
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
  background: isActive ? "#ffffff" : "transparent",
  borderRadius: 14,
  textDecoration: "none",
  transition: "background 0.18s ease, color 0.18s ease, transform 0.18s ease",
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
              {item.icon}
              <Typography
                sx={{
                  fontSize: 11,
                  fontWeight: 700,
                  lineHeight: 1,
                  textTransform: "none",
                }}
              >
                {item.label}
              </Typography>
            </NavLink>
          ))}
        </Stack>
      </Box>
    </Box>
  );
};
