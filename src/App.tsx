import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import About from "./pages/About";
import Layout from "./components/Layout";
import Projects from "./pages/Projects";
import BuildLog from "./pages/BuildLog";


function App() {
  const [mode, setMode] = useState<'light' | 'dark'>('dark');

  const theme = createTheme({ palette: { mode } });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route
          path="/"
          element={
            <Layout mode={mode} toggleMode={() => setMode(prev => (prev === 'light' ? 'dark' : 'light'))}>
              <About />
            </Layout>
          }
        />
        <Route
          path="/projects"
          element={
            <Layout mode={mode} toggleMode={() => setMode(prev => (prev === 'light' ? 'dark' : 'light'))}>
              <Projects />
            </Layout>
          }
        />
        <Route
          path="/build"
          element={
            <Layout mode={mode} toggleMode={() => setMode(prev => (prev === 'light' ? 'dark' : 'light'))}>
              <BuildLog />
            </Layout>
          }
        />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
