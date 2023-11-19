import {
  Grid,
  GlobalStyles,
  Typography,
  Box,
  TextField,
  Button,
  Link,
} from "@mui/material";
import { useStyles } from "./styles";
import { Bar } from "./Components/Bar";
import { Footer } from "./Components/Footer";
import { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import InputAdornment from "@mui/material/InputAdornment";
import { useNavigate } from 'react-router-dom';
import {setMorador} from '../../App'

export const Login = () => {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(true);

  // const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setEmail(event.target.value);
  // };

  // const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setPassword(event.target.value);
  // };
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });

    fetch('http://localhost:4000/moradores/login/'+data.get("email")+"/"+data.get("password"), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        
      },
      //body: JSON.stringify(data),
      //body: {
        //email: data.get('email'),
        //password: data.get('password')
      //}
    })
      .then((response) => response.json())
      .then((data) => {
        if (data === null) {
          console.log('Os dados retornados são nulos.');
          // Faça algo apropriado para lidar com a situação de dados nulos
        } else {
          setMorador(data);
          navigate('/system', { state: { userData: data } });

        }
      })
      .catch((error) => {
        // gerencie erros
        console.error('Houve um erro ao chamar a API: ', error);
      });

  };


  return (
    <Grid container>
      <GlobalStyles
        styles={{
          //body: { backgroundImage: "url('/background.png')" }
          body: {
            backgroundImage:
              "url('/left_background.png'), url('/right_bg_login.png')",
            backgroundRepeat: "no-repeat, no-repeat",
            backgroundPosition: "bottom left, bottom right",
            position: "relative, relative",
          },
        }}
      />
      <Bar />
      <Grid item xs={6}>
        <Grid
          justifyContent="center"
          alignItems="center"
          direction="column"
          container
          className={classes.leftContent}
        >
          <Box mb={20} ml={30}>
            <img src="/imagem_login.png" alt="" width={550} />
          </Box>

          {/* <Typography
            variant="h2"
            className={classes.title}
            align="center"
            mb={6}
          >
            Reinventando o <br /> conceito de moradia
          </Typography>
          <Typography variant="h4" className={classes.subtitle} align="center">
            O projeto “CConect” ajuda a <br /> deixar a seu condomínio <br />{" "}
            ainda mais cômodo.
          </Typography> */}


        </Grid>
        <Box sx={{ ml: "90px", mt: "-230px" }}>
          <img src="/facebook.png" alt="Facebook" />
          <img style={{ marginLeft: "20px" }} src="/twitter.png" alt="Twitter" />
          <img
            style={{ marginLeft: "20px" }}
            src="/linkedin.png"
            alt="Linkedin"
          />
          <img
            style={{ marginLeft: "20px" }}
            src="pinterest.png"
            alt="Pinterest"
          />
        </Box>

        <Box sx={{
          ml: "300px",
          mt: "-30px",
          color: "#76768F",
          fontFamily: "Poppins",
          fontSize: "19px",
          fontStyle: "normal",
          fontWeight: 550,
          lineHeight: "normal",
        }}>
          <Typography>Saiba mais como mudamos o mercado residencial.</Typography>
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Grid
          marginTop={"-60px"}
          justifyContent="center"
          alignItems="center"
          direction="column"
          container
          className={classes.rightContent}
        >
          <Grid sx={{
            borderRadius: "8px",
            background: "#FFF",
            boxShadow: "4px 4px 60px 4px rgba(152, 206, 180, 0.20)",
            mt: "-10px"
          }} className={classes.rect}>
            <Box>
              <Box display="flex" justifyContent="center" mt={5}>
                <img src="/Bem vindo ao Futuro.png" alt="" width={450} />
              </Box>
              <Box ml={"60px"}>
                <img
                  style={{ marginTop: "30px" }}
                  src="/Login with facebook.png"
                  alt=""
                  width={500}
                />
              </Box>
              <Box ml={"60px"}>
                <img src="/Login with Google.png" alt="" width={500} />
              </Box>
            </Box>

            <Box mt={3} component="form" onSubmit={handleSubmit} noValidate>
              <Box ml={"75px"}>
                <TextField
                  id="email"
                  required
                  label="E-mail"
                  variant="outlined"
                  name="email"
                  className={classes.input}
                // onChange={handleChangeEmail}
                />
              </Box>

              <Box mt={3} ml={"75px"}>
                <TextField
                  sx = {{width: "470px"}}
                  id="password"
                  label="Senha"
                  required
                  variant="outlined"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  // onChange={handleChangePassword}
                  // value={password}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Button
                          sx={{ position: "end", mr: "-10px", color: "#696969", }}
                          id="show-password"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </Button>
                      </InputAdornment>
                    ),
                  }}
                />
                <Box>
                  <Box mt={2} textAlign={"left"}>
                    <FormControlLabel
                      sx={{ color: "#696969" }}
                      control={
                        <Checkbox
                          defaultChecked
                          sx={{
                            color: "#D9D9D9",
                            "&.Mui-checked": {
                              color: "#6358DC",
                            },
                          }}
                        />
                      }
                      label="Lembrar-me"
                    />
                  </Box>
                  <Box
                    mt={-3.8}
                    mr={9.4}
                    textAlign={"right"}
                    sx={{
                      fontFamily: "Poppins",
                      fontSize: "16px",
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "135.5%",
                    }}
                  >
                    <Link
                      component="button"
                      sx={{ color: "#6358DC" }}
                      className={classes.link}
                    >
                      Esqueceu a senha?
                    </Link>
                  </Box>
                </Box>
              </Box>
              <Box display="flex" marginLeft={"75px"} mt={4}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className={classes.btn}
                >
                  <Typography sx={{ fontFamily: "Poppins", fontSize: "24px", fontWeight: 700 }}> Entrar </Typography>

                </Button>
              </Box>
            </Box>
            <Box ml={20} mt={4}>
              <Box mb={1}>
                <Typography sx={{ fontFamily: "Poppins" }}> Não tem uma conta?
                  <Link component="button" className={classes.link}>
                    <a href="/register" style={{ textDecoration: "none", color: "#6358DC" }}>&nbsp;Registre-se</a>
                  </Link>
                </Typography>
              </Box>
            </Box>
          </Grid>

        </Grid>
      </Grid>
      <Box className={classes.footer}>
        <Footer />
      </Box>
    </Grid>
  );
};