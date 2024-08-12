import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Slider,
  TextField,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';

export default function PasswordGenerator() {
  const [length, setLength] = useState(6);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');

  const generatePassword = () => {
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let generatedPassword = '';

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      generatedPassword += characters[randomIndex].toUpperCase();
    }

    setPassword(generatedPassword);
  };

  console.log('pass', password);

  return (
    <Box textAlign={'center'}>
      <Container maxWidth={'xl'}>
        <Typography
          variant="h4"
          color={'gray'}
          sx={{ borderBottom: 1, width: 'object-fit', marginTop: '20px' }}
        >
          Password Generater
        </Typography>

        <Box mt={10} display={'flex'} justifyContent={'center'} gap={4}>
          <TextField
            type="text"
            variant="filled"
            readOnly
            size="small"
            value={password}
          />
          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={generatePassword}
          >
            Generate
          </Button>
        </Box>
        <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
          <Box
            mt={10}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            maxWidth={500}
            flexWrap={'wrap'}
          >
            <Slider
              aria-label="Volume"
              min={6}
              max={20}
              value={length}
              valueLabelDisplay="auto"
              onChange={(e) => setLength(e.target.value)}
            />
            <FormControlLabel label="Number" control={<Checkbox />} />
            <FormControlLabel label="Character" control={<Checkbox />} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
