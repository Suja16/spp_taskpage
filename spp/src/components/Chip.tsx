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

const CustomChip = ({ labels, value, onChange }: { labels: string[], value?: string, onChange?: (value: string) => void }) => {
  const [selectedChip, setSelectedChip] = useState<number | null>(null);

  const handleChipClick = (index: number) => {
    const selectedValue = labels[index];
    setSelectedChip(index);
    if (onChange) {
      onChange(selectedValue);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      {labels.map((label, index) => (
        <Chip
          key={index}
          label={label}
          variant={selectedChip === index ? 'filled' : 'outlined'}
          onClick={() => handleChipClick(index)}
          sx={{
            margin: '4px',
            "--Chip-radius": "3px",
            "--Chip-minHeight": "38px",
            backgroundColor: selectedChip === index ? '#48B1ED' : ' white',
            color: selectedChip === index ? 'white' : '#48B1ED',
            ':hover': {
              backgroundColor: selectedChip === index ? '#48B1ED' : ' white',
              color: selectedChip === index ? 'black' : '#48B1ED',
            },
          }}
        />
      ))}
    </ThemeProvider>
  );
};

export default CustomChip;
