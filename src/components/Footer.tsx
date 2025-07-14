// src/components/Footer.tsx
import { Box, Typography, IconButton, Link } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        mt: "auto",
        py: 3,
        px: 2,
        textAlign: "center",
        backgroundColor: (theme) => theme.palette.background.paper,
      }}
    >
      <Typography variant="body2" color="text.secondary">
        © 2025 Cristopher Melendez
      </Typography>
      <Box mt={1}>
        <IconButton
          component={Link}
          href="https://github.com/cris-me"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <GitHubIcon />
        </IconButton>
        <IconButton
          component={Link}
          href="https://linkedin.com/in/cristopher-melendez/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <LinkedInIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
