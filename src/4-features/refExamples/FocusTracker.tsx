import { useRef } from 'react';
import { TextField, Button, Box } from '@mui/material';

interface FocusData {
  focusTransitions: number;
  isProgrammaticFocus: boolean;
}

export function FocusTracker() {
  const firstInputRef = useRef<HTMLInputElement>(null);
  const secondInputRef = useRef<HTMLInputElement>(null);
  const focusDataRef = useRef<FocusData>({
    focusTransitions: 0,
    isProgrammaticFocus: false,
  });

  const handleFocusFirst = () => {
    focusDataRef.current.isProgrammaticFocus = true;
    firstInputRef.current?.focus();
  };

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    if (focusDataRef.current.isProgrammaticFocus) {
      focusDataRef.current.isProgrammaticFocus = false;
      return;
    }

    if (event.relatedTarget) {
      focusDataRef.current.focusTransitions += 1;
      console.log(`Переходов фокуса: ${focusDataRef.current.focusTransitions}`);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        width: '100%',
        mb: 4,
      }}
    >
      <TextField
        inputRef={firstInputRef}
        onFocus={handleFocus}
        fullWidth
        type="text"
        label="Первое поле"
        variant="outlined"
      />
      <TextField
        inputRef={secondInputRef}
        onFocus={handleFocus}
        fullWidth
        type="text"
        label="Второе поле"
        variant="outlined"
      />
      <Button variant="contained" onClick={handleFocusFirst}>
        Сфокусировать на первом
      </Button>
    </Box>
  );
}
