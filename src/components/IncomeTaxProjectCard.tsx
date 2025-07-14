import { useState } from 'react';
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Stack,
  CircularProgress,
  Alert,
} from '@mui/material';

type TaxEstimate = {
  year: number;
  totalIncome: number;
  totalWithheld: number;
  taxableIncome: number;
  estimatedTaxOwed: number;
  totalCredits: number;
  refundOrOwed: number;
};

export default function IncomeTaxEstimatorCard() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<TaxEstimate | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchEstimate = async () => {
    setLoading(true);
    setError(null);
    setData(null);

    try {
      const res = await fetch('http://federal-tax-estimator-env.eba-xhmavxbb.us-east-2.elasticbeanstalk.com/api/taxes?email=jsmith@gmail.com&year=2024');
      if (!res.ok) throw new Error('API request failed');
      const json = await res.json();
      setData(json);
    } catch (err: any) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card elevation={3} sx={{ maxWidth: 600, width: '100%' }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Income Tax Estimator
        </Typography>

        <Typography variant="body2">
          This project estimates U.S. federal income tax based on stored user income sources. To demonstate a sample user has been created with 2 stored tax documents.
        </Typography>

        {loading && <CircularProgress />}

        {error && (
          <Alert severity="error" sx={{ mt: 2 }}>
            {error}
          </Alert>
        )}

        {data && (
          <Stack spacing={1} mt={2}>
            <Typography variant="body2">Tax Year: {data.year}</Typography>
            <Typography variant="body2">Total Income: ${data.totalIncome.toLocaleString()}</Typography>
            <Typography variant="body2">Taxable Income: ${data.taxableIncome.toLocaleString()}</Typography>
            <Typography variant="body2">Tax Owed: ${data.estimatedTaxOwed.toLocaleString()}</Typography>
            <Typography variant="body2">Total Withheld: ${data.totalWithheld.toLocaleString()}</Typography>
            <Typography variant="body2">Total Credits: ${data.totalCredits.toLocaleString()}</Typography>
            <Typography variant="body2">Refund or Owed:{" "}
              <Typography
                component="strong"
                sx={{ color: data.refundOrOwed < 0 ? "success.main" : "error.main", fontWeight: "bold" }}
                display="inline"
                >
                ${Math.abs(data.refundOrOwed).toLocaleString()} {data.refundOrOwed < 0 ? "Refund" : "Owed"}
              </Typography>
            </Typography>
          </Stack>
        )}
      </CardContent>

      <CardActions>
        <Button
            size="small"
            href={"https://github.com/cris-me/federal-tax-estimate"}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Button>
        <Button onClick={fetchEstimate} disabled={loading}>
          Fetch Estimate
        </Button>
      </CardActions>
    </Card>
  );
}
