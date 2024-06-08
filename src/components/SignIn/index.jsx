import { Container, Form } from "./styles";
import CaptchaComponent from "./captcha";
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
  CircularProgress,
  Alert,
} from "@mui/material";
import { HiOutlineUser } from "react-icons/hi";
import { SlLock } from "react-icons/sl";
import { FaApple, FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";
import Slider from "./slider";

export const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loginMessage, setLoginMessage] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  


  const exampleUser = {
    username: "geovane",
    password: "123456",
  };

  const validateFields = () => {
    let valid = true;
    if (username.trim() === "") {
      setUsernameError("Insira o seu usuario");
      valid = false;
    } else {
      setUsernameError("");
    }

    if (password.trim() === "") {
      setPasswordError("Insira sua Senha");
      valid = false;
    } else {
      setPasswordError("");
    }

    return valid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (!validateFields()) {
      return;
    }

    setIsLoading(true);
    setLoginMessage("");

    // Simulação de uma chamada de API de login
    setTimeout(() => {
      setIsLoading(false);
      if (username === exampleUser.username && password === exampleUser.password) {
        setLoginMessage("Login realizado com sucesso!");
      } else {
        setLoginMessage("Erro ao realizar login. Verifique suas credenciais.");
      }
    }, 2000);
  };

  return (
    <Container>
       
      <div className="container">
        <div className="container1">
          <div className="image">
            <Slider />
          </div>
        </div>

        <div className="container2">
          <Form onSubmit={(event) => handleSubmit(event)}>
            <Box display="flex" justifyContent="flex-end" className="criar-conta">
              

              <Button className="botao-conta">
                Criar conta
              </Button>
            </Box>

            <Box display="flex" flexDirection="column" alignItems="flex-start" className="inicio-logo">
              <img src="Logo.png" alt="Logo" className="logo" />
              <Typography variant="body1" gutterBottom style={{ marginTop: "30px", fontSize: "30px", fontWeight: "bold" }}>
                Boas-vindas!
              </Typography>
              <Typography variant="body1" gutterBottom style={{ whiteSpace: 'nowrap' }}>
                Entre utilizando uma das opções abaixo
              </Typography>
            </Box>

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
                  <FaTwitter />
                </IconButton>
              </Grid>
              <Grid container style={{ marginLeft: "12px" }} mt={2} display="flex" justifyContent="center" alignItems="center">
                <div className="divider">
                  <hr />
                  <span style={{ color: "#4b4b4b" }}>ou</span>
                  <hr />
                </div>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  id="username"
                  label="Usuário"
                  variant="outlined"
                  fullWidth
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  error={!!usernameError}
                  helperText={usernameError}
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
                  error={!!passwordError}
                  helperText={passwordError}
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
              <Grid container spacing={2}>
                <Grid item xs={12} display="flex" justifyContent="center" className="captcha-box">
                  <CaptchaComponent onVerify={setIsCaptchaVerified} />
                </Grid>
              </Grid>

              <Grid item xs={12}>
                <Button onClick={handleSubmit} type="submit" variant="contained" fullWidth className="botao-entrar" style={{cursor:'pointer'}}>
                  Entrar 
                </Button>
              </Grid>
            </Grid>
            {loginMessage && (
              <Grid item xs={12} mt={2}>
                <Alert severity={loginMessage.startsWith("Login realizado") ? "success" : "error"}>
                  {loginMessage}
                </Alert>
              </Grid>
            )}
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
