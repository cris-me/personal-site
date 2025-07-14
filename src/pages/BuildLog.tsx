import { Box, Typography, Paper, Stack } from "@mui/material";

export default function Build() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
      <Paper elevation={2} sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom>
          How I Built The Income Tax Estimator
        </Typography>

        <Stack spacing={2}>
          <Typography variant="body1">
            This project is a full-stack income tax estimator built using{" "}
            <strong>Spring Boot</strong> on the backend and a{" "}
            <strong>MongoDB</strong> database.
          </Typography>

          <Typography variant="body1">
            The backend service is deployed on{" "}
            <strong>AWS Elastic Beanstalk</strong>. It stores income source
            documents (like W-2s or 1099s) in one collection, and the tax
            estimate results in another collection within the MongoDB database.
          </Typography>

          <Typography variant="body1">
            The system is designed to support multiple users, but for
            demonstration purposes, a sample user with pre-loaded tax documents
            is used to generate estimates.
          </Typography>

          <Typography variant="body1">
            Tax logic uses federal tax brackets but is simplified to use only
            the standard deduction and child tax credits. The API returns
            details like taxable income, tax owed, withheld amounts, credits,
            and estimated refund. The tax logic has been.
          </Typography>
        </Stack>
      </Paper>

      <Paper elevation={2} sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom>
          CI/CD & GitHub Workflow
        </Typography>

        <Stack spacing={2}>
          <Typography variant="body1">
            The repository uses <strong>GitHub Actions</strong> for continuous
            integration. Each pull request triggers an automated build and test
            workflow to ensure new code does not break existing functionality.
          </Typography>

          <Typography variant="body1">
            A successful build is required before a pull request can be merged
            into the <code>main</code> branch.
          </Typography>

          <Typography variant="body1">
            The repository includes a <code>CODEOWNERS</code> file designating
            me as the required reviewer for all changes. This ensures I
            personally approve any updates before they are merged.
          </Typography>

          <Typography variant="body1">
            Additional GitHub branch protections are in place:
          </Typography>

          <Box
            component="ul"
            sx={{
              mt: 0,
              mb: 0,
              pl: 2,
            }}
          >
            {" "}
            <li>
              <Typography variant="body2">
                Direct commits to <code>main</code> are blocked
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                Pull requests must pass all status checks before merging
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                Code reviews are required based on the CODEOWNERS file
              </Typography>
            </li>
          </Box>

          <Typography variant="body1">
            This setup mirrors a professional software development workflow,
            ensuring code quality and consistent deployment standards.
          </Typography>
        </Stack>
      </Paper>
    </Box>
  );
}
