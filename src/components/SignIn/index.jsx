

import { Container, Form, Logo } from "./styles";
import FilledInput from "@mui/material/FilledInput";

import React, { useState } from "react";
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Typography,
  Link,
  InputAdornment,
  Box,
  IconButton,
} from "@mui/material";
import { HiOutlineUser } from "react-icons/hi";
import { SlLock } from "react-icons/sl";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import axios from 'axios';

export const Signin = () => {
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('/login', { username, password })
      .then((response) => {
        console.log('Login realizado com sucesso:', response);
      })
      .catch((error) => {
        console.error('Erro ao realizar login:', error);
      });
  };

  return (
    <Container>
      <div className="container">
        <div className="container1">
          <div className="image">
            <img
              src="Banner01.png"
              // width={400}
              // height={400}
              className="img-banner"
              alt="banner"
            />
          </div>
        </div>

        <div className="container2">
          
          <Form onSubmit={handleSubmit}>
            <Box display="flex" justifyContent="space-between" mb={2}>
              <Typography variant="h5" gutterBottom>
                <img src="Logo.png" alt="Logo" className="logo"  />
              </Typography>
              <Button variant="contained criar-conta">
                Criar conta
              </Button>
            </Box>
            <Typography variant="body1" gutterBottom>
              Boas-vindas!
            </Typography>
            <Typography variant="body1" gutterBottom>
              Entre utilizando uma das opções abaixo
            </Typography>
            <Grid container spacing={2} mt={2}>
              <Grid item xs={12} display="flex" justifyContent="center">
                <IconButton aria-label="Facebook" color="primary">
                  <FaFacebook />
                </IconButton>
                <IconButton aria-label="Google" color="primary">
                  <FaGoogle />
                </IconButton>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="username"
                  label="Usuário"
                  variant="outlined"
                  fullWidth
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <HiOutlineUser />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="password"
                  label="Senha"
                  type="password"
                  variant="outlined"
                  fullWidth
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SlLock />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                    />
                  }
                  label="Manter conectado"
                />
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" fullWidth>
                  Entrar
                </Button>
              </Grid>
            </Grid>
            <Typography variant="body2" mt={2} textAlign="center">
              Esqueceu sua senha?{" "}
              <Link href="/">Recuperar senha</Link>
            </Typography>
          </Form>
        </div>
      </div>
    </Container>
  );
};
