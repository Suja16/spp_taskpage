import React, { useState } from 'react';
import Chip from '@mui/material/Chip';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 'var(--Chip-radius)',
          minHeight: 'var(--Chip-minHeight)',
          cursor: 'pointer',
        },
      },
    },
  },
});

const CustomChip = ({ labels }: { labels: string[] }) => {
  const [selectedChip, setSelectedChip] = useState<number | null>(null);

  const handleChipClick = (index: number) => {
    setSelectedChip(index === selectedChip ? null : index);
  };

  return (
    <ThemeProvider theme={theme}>
      {labels.map((label, index) => (
        <Chip
          color='primary'
          key={index}
          label={label}
          variant={selectedChip === index ? 'filled' : 'outlined'}
          onClick={() => handleChipClick(index)}
          sx={{
            margin: '4px',
            "--Chip-radius": "3px",
            "--Chip-minHeight": "38px",
          }}
        />
      ))}
    </ThemeProvider>
  );
};

export default CustomChip;
