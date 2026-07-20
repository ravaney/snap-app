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
          filter: isActive ? "none" : "grayscale(1) opacity(0.6)",
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
        position: "fixed", // keep fixed to cover the whole viewport
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden", // prevent any overflow outside
        boxSizing: "border-box",
      }}
    >
      {/* Content area – takes all remaining space and scrolls */}
      <Box
        sx={{
          flex: 1,
          minHeight: 0, // allow shrinking in flex
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

      {/* Navbar – now part of the flex flow, no fixed positioning */}
      <BottomNavigation
        value={value}
        onChange={(_event, newValue) => setValue(newValue)}
        showLabels
        sx={{
          position: "fixed",
          right: 0,
          bottom: 0,
          left: 0,
          zIndex: (theme) => theme.zIndex.appBar,
          borderTop: "1px solid rgba(255, 255, 255, 0.2)",
          // Semi-transparent background allows the blur to remain visible
          bgcolor: "rgba(8, 0, 0, 0.3)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          height: 72,
          pb: "env(safe-area-inset-bottom)",
        }}
      >
        {navItems.map((item, index) => {
          const isActive = value === index;
          const color = isActive ? VIVID_BLUE : NEON_PINK;
          return (
            <BottomNavigationAction
              key={item.path}
              component={NavLink}
              to={item.path}
              label={<Typography variant="caption">{item.label}</Typography>}
              icon={item.icon(color, isActive)}
              sx={{
                color: isActive ? VIVID_BLUE : "white",
                "& .MuiBottomNavigationAction-label": {
                  fontSize: "0.75rem", // 12px
                  fontWeight: 500,
                },

                // MUI normally increases the selected label size
                "& .MuiBottomNavigationAction-label.Mui-selected": {
                  fontSize: "0.75rem",
                  fontWeight: 600,
                },
              }}
            />
          );
        })}
      </BottomNavigation>
    </Box>
  );
};
