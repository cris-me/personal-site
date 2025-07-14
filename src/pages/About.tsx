// src/pages/About.tsx
import { Box, Typography, Button, Stack } from "@mui/material";
import { PictureAsPdf } from "@mui/icons-material";

export default function About() {
  return (
    <Box sx={{ maxWidth: 800, mx: "auto", textAlign: "center", mt: 6 }}>
      <Stack spacing={3} alignItems="center">
        <Typography variant="h4" component="h1">
          Hi! I'm Cristopher Melendez
        </Typography>

        <Typography variant="body1">
          Thank you for coming to my site. I am a full-stack developer experienced in building scalable web
          applications in Agile teams. U.S. Marine Corps veteran with a strong
          background in systems troubleshooting and team leadership. Committed
          to writing clean, maintainable code and delivering impactful software
          solutions.
        </Typography>

        <Stack direction="row" spacing={2} justifyContent="center">
          <Button variant="contained" href="/projects">
            View My Projects
          </Button>

          <Button
            variant="outlined"
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<PictureAsPdf />}
          >
            View Resume
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}
