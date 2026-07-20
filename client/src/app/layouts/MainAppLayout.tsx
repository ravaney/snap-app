import { NavLink, Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { FiActivity } from "react-icons/fi";
import { IoPerson } from "react-icons/io5";
import { NEON_PINK, VIVID_BLUE } from "../../CONST";
import snapLogo from "../../assets/snap.jpg";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { useState } from "react";
import { AppHeader } from "./AppHeader";

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
          width: 20,
          height: 20,
          objectFit: "cover",
          filter: isActive ? "none" : "brightness(0) invert(1)",
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
    label: "Account",
    path: "/profile",
    icon: (color: string) => <IoPerson size={20} color={color} />,
  },
];

export const MainAppLayout = () => {
  const [value, setValue] = useState(0);
  return (
    <Box
      sx={{
        height: "100dvh",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        color: "white",

        // Put the shared background on the layout
        background:
          "radial-gradient(circle at 20% 10%, rgba(59, 130, 246, 0.24), transparent 20%), radial-gradient(circle at 85% 8%, rgba(14, 165, 233, 0.16), transparent 18%), radial-gradient(circle at 80% 90%, rgba(59, 130, 246, 0.18), transparent 22%), linear-gradient(180deg, #0a2047 0%, #051228 100%)",
      }}
    >
      <AppHeader />
      {/* Content area – takes all remaining space and scrolls */}
      <Box
        component="main"
        sx={{
          flex: 1,
          minHeight: 0,
          overflowY: "auto",
          overscrollBehaviorY: "contain",
          width: "100%",
          boxSizing: "border-box",
          // The nav overlays this scroller, so reserve enough space for the
          // final outlet content to scroll completely above it.
          pb: "calc(72px + env(safe-area-inset-bottom))",
          scrollPaddingBottom: "calc(72px + env(safe-area-inset-bottom))",
          scrollbarWidth: "none",

          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        <Outlet />
      </Box>

      {/* Navbar – now part of the flex flow, no fixed positioning */}
      <BottomNavigation
        value={value}
        onChange={(_event, newValue) => setValue(newValue)}
        showLabels
        sx={{
          position: "absolute",
          bottom: 0,
          right: 0,
          left: 0,
          zIndex: (theme) => theme.zIndex.appBar,

          height: "calc(72px + env(safe-area-inset-bottom))",
          pb: "env(safe-area-inset-bottom)",
          boxSizing: "border-box",

          bgcolor: "transparent",
          backdropFilter: "blur(1px)",
          WebkitBackdropFilter: "blur(1px)",
          borderTop: "1px solid rgba(255, 255, 255, 0.12)",
        }}
      >
        {navItems.map((item, index) => {
          const isActive = value === index;
          const color = isActive ? NEON_PINK : "";
          return (
            <BottomNavigationAction
              key={item.path}
              component={NavLink}
              to={item.path}
              label={
                <Typography sx={{ fontWeight: isActive ? 800 : 400 }}>
                  {item.label}
                </Typography>
              }
              icon={item.icon(color, isActive)}
              sx={{
                color: isActive ? VIVID_BLUE : "white",
              }}
            />
          );
        })}
      </BottomNavigation>
    </Box>
  );
};
