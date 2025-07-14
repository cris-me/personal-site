import { Box, Stack } from "@mui/material";
import ProjectCard from "../components/ProjectCard";
import IncomeTaxEstimatorCard from "../components/IncomeTaxProjectCard";

export default function Projects() {
  return (
    <Box>
      <Stack spacing={4} alignItems="center">
        <ProjectCard
          title="Personal Portfolio Site"
          description="A fast, modern personal website built with Vite, React, and MUI."
          techStack={["React", "TypeScript", "Vite", "MUI"]}
          githubUrl="https://github.com/cris-me/personal-site"
        />
        <IncomeTaxEstimatorCard />
      </Stack>
    </Box>
  );
}
