import React, { useState } from 'eact';
import {
  Box,
  Button,
  Typography,
  Grid,
  useTheme,
} from '@mui/material';

const Banner = () => {
  const theme = useTheme();
  const [slideIndex, setSlideIndex] = useState(0);

  const slides = [
    {
      title: 'Plataforma de cursos completa',
      text: 'Lorem ipsum nisl etiam himenaeos ligula augue vehicula gravida tincidunt, etiam magna sapien gravida sodales sed vel pulvinar suspendisse, morbi mi proin urna ornare posuere donec aptent.',
    },
    {
      title: 'Plataforma de cursos completa',
      text: 'Lorem ipsum nisl etiam himenaeos ligula augue vehicula gravida tincidunt, etiam magna sapien gravida sodales sed vel pulvinar suspendisse, morbi mi proin urna ornare posuere donec aptent.',
    },
    // Adicione mais slides aqui
  ];

  const handleNextSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrevSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <Box
      sx={{
        width: '100%',
        height: '300px', // Altere o tamanho do banner aqui
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h2" component="h2">
            {slides[slideIndex].title}
          </Typography>
          <Typography variant="body1" component="p">
            {slides[slideIndex].text}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleNextSlide}
          >
            Próximo
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handlePrevSlide}
          >
            Anterior
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Banner;