import { useRef, useState } from 'react';
import { TextField, Typography, Box } from '@mui/material';

export function PreviousInput() {
  const [currentValue, setCurrentValue] = useState('');
  const previousValueRef = useRef<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    previousValueRef.current = currentValue;
    setCurrentValue(newValue);
  };

  return (
    <Box>
      <TextField
        value={currentValue}
        onChange={handleChange}
        fullWidth
        type="text"
        label="Введите текст"
        variant="outlined"
      />
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        Предыдущее значение: {previousValueRef?.current || '—'}
      </Typography>
    </Box>
  );
}
