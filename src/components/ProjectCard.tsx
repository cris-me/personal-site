import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Chip,
  Stack,
} from "@mui/material";

type ProjectCardProps = {
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  detailsUrl?: string;
};

export default function ProjectCard({
  title,
  description,
  techStack,
  githubUrl,
  liveUrl,
  detailsUrl,
}: ProjectCardProps) {
  return (
    <Card elevation={3} sx={{ maxWidth: 600, width: "100%" }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {title}
        </Typography>

        <Typography variant="body2" color="text.secondary" paragraph>
          {description}
        </Typography>

        <Stack direction="row" spacing={1} flexWrap="wrap">
          {techStack.map((tech) => (
            <Chip key={tech} label={tech} size="small" />
          ))}
        </Stack>
      </CardContent>

      <CardActions>
        {githubUrl && (
          <Button
            size="small"
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Button>
        )}
        {liveUrl && (
          <Button
            size="small"
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
          </Button>
        )}
        {detailsUrl && (
          <Button size="small" href={detailsUrl}>
            Learn More
          </Button>
        )}
      </CardActions>
    </Card>
  );
}
