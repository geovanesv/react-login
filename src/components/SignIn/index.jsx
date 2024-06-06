

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
import { FaApple, FaFacebook, FaGoogle, FaTwitch, FaTwitter } from "react-icons/fa";
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

      {/* Banner --> Slide */}
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


        {/* Formulario */}
        <div className="container2">
          
          <Form onSubmit={handleSubmit}>
            <Box display="flex" justifyContent="flex-end" >
              <Button  className="criar-conta">
                Criar conta
              </Button>
            </Box>
            <Box display="flex" flexDirection="column" alignItems="flex-start" className="inicio-logo">
              <img src="Logo.png" alt="Logo" className="logo"/>
              <Typography variant="body1" gutterBottom style={{marginTop:"30px", fontSize:"30px", fontWeight:"bold"}}>
                Boas-vindas!
              </Typography>
              <Typography variant="body1" gutterBottom>
                Entre utilizando uma das opções abaixo
              </Typography>
            </Box>
            {/* <Box display="flex" justifyContent="flex-start" >
              <Typography variant="h9" gutterBottom>
                <img src="Logo.png" alt="Logo" className="logo"  />
              </Typography>
              <Typography variant="body1" gutterBottom>
                Boas-vindas!
              </Typography>
              <Typography variant="body1" gutterBottom>
                Entre utilizando uma das opções abaixo
              </Typography>
            </Box> */}
            <Grid container spacing={2} mt={2}>
              <Grid item xs={12} display="flex" justifyContent="center" className="social-icons">
                <IconButton aria-label="Google" className="social-item">
                  <FaGoogle />
                </IconButton>
                <IconButton aria-label="Facebook" className="social-item">
                  <FaFacebook />
                </IconButton>
                <IconButton aria-label="Apple" className="social-item">
                  <FaApple />
                </IconButton>
                <IconButton aria-label="Twitter" className="social-item">
                  <FaTwitter/>
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
                <Button type="submit" variant="contained" fullWidth className="botao-entrar">
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
