import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import { IoMdNotificationsOutline } from "react-icons/io";
import mockPerson from "../../assets/profile.png";
import snapLogo from "../../assets/snap.jpg";

export const AppHeader = () => {
  return (
    <Box
      component="header"
      sx={{
        flexShrink: 0,
        position: "relative",
        zIndex: 2,
        px: { xs: 2, md: 3 },
        pt: {
          xs: "max(24px, env(safe-area-inset-top))",
          md: 4,
        },
      }}
    >
      <Stack
        direction="row"
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          pb: 1,
          boxShadow: "0 16px 24px -16px rgba(0,0,0,0.45)",
        }}
      >
        <Avatar
          src={mockPerson}
          aria-label="Profile"
          sx={{
            width: 48,
            height: 48,
            border: "1px solid rgba(255,255,255,0.16)",
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
          }}
        />

        <IconButton aria-label="Notifications">
          <Badge badgeContent={5} color="secondary" max={99}>
            <IoMdNotificationsOutline size={36} color="white" />
          </Badge>
        </IconButton>
      </Stack>
    </Box>
  );
};
