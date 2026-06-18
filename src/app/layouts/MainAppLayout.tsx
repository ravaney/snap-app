import { NavLink, Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { FiHome, FiActivity, FiUser } from "react-icons/fi";

const navItems = [
  { label: "Home", path: "/home", icon: <FiHome size={20} /> },
  { label: "Activity", path: "/activity", icon: <FiActivity size={20} /> },
  { label: "Profile", path: "/profile", icon: <FiUser size={20} /> },
];

const navLinkStyles = ({ isActive }: { isActive: boolean }) => ({
  flex: "1 1 0%",
  minWidth: 0,
  maxWidth: "100%",
  display: "flex",
  flexDirection: "column" as const,
  alignItems: "center",
  justifyContent: "center",
  gap: 4,
  padding: "10px 6px",
  color: isActive ? "#ffffff" : "rgba(255,255,255,0.7)",
  background: isActive ? "rgba(255,255,255,0.08)" : "transparent",
  borderRadius: 12,
  textDecoration: "none",
  transition: "background 0.2s, color 0.2s",
  textAlign: "center" as const,
});

export const MainAppLayout = () => {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100svh",
        position: "relative",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box sx={{ flex: 1, pb: { xs: 10, sm: 12 } }}>
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
          py: 1,
          width: "100%",
          boxSizing: "border-box",
          bgcolor: "rgba(10, 18, 37, 0.96)",
          borderTop: "1px solid rgba(255,255,255,0.12)",
          backdropFilter: "blur(12px)",
        }}
      >
        <Stack direction="row" spacing={1} sx={{ width: "100%" }}>
          {navItems.map((item) => (
            <NavLink key={item.path} to={item.path} style={navLinkStyles}>
              {item.icon}
              <Typography sx={{ fontSize: 12, textTransform: "none" }}>
                {item.label}
              </Typography>
            </NavLink>
          ))}
        </Stack>
      </Box>
    </Box>
  );
};
