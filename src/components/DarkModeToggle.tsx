// src/components/DarkModeToggle.tsx
import { IconButton, Tooltip } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';

type DarkModeToggleProps = {
  mode: 'light' | 'dark';
  toggleMode: () => void;
};

export default function DarkModeToggle({ mode, toggleMode }: DarkModeToggleProps) {
  return (
    <Tooltip title="Toggle light/dark mode">
      <IconButton onClick={toggleMode} color="inherit">
        {mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
      </IconButton>
    </Tooltip>
  );
}
