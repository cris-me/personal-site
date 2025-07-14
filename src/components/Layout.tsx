import { Container, Box } from '@mui/material';
import Header from './Header';
import Footer from './Footer';

type LayoutProps = {
  children: React.ReactNode;
  mode: 'light' | 'dark';
  toggleMode: () => void;
};

export default function Layout({ children, mode, toggleMode }: LayoutProps) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header mode={mode} toggleMode={toggleMode} />
      <Container component="main" sx={{ flexGrow: 1, py: 4 }}>
        {children}
      </Container>
      <Footer />
    </Box>
  );
}
