// src/components/Header.tsx
import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";
import { useLocation, Link as RouterLink } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

type HeaderProps = {
  mode: "light" | "dark";
  toggleMode: () => void;
};

export default function Header({ mode, toggleMode }: HeaderProps) {
  const location = useLocation();
  const currentPath = location.pathname;

  const navItems = [
    { label: "About", path: "/" },
    { label: "Projects", path: "/projects" },
    { label: "Build Log", path: "/build" },
  ];
  return (
    <AppBar position="static" color="primary">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          variant="h6"
          component={RouterLink}
          to="/"
          sx={{ textDecoration: "none", color: "inherit", fontWeight: 600 }}
        >
          CM
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          {navItems.map(({ label, path }) => (
            <Button
              key={label}
              component={RouterLink}
              to={path}
              color="inherit"
              sx={{
                borderBottom:
                  currentPath === path
                    ? "2px solid white"
                    : "2px solid transparent",
                borderRadius: 0,
              }}
            >
              {label}
            </Button>
          ))}
          <DarkModeToggle mode={mode} toggleMode={toggleMode} />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
