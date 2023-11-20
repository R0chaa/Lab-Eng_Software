import {
  Grid,
  GlobalStyles,
  Typography,
  Box,
  TextField,
  Button,
} from "@mui/material";
import { useStyles } from "./styles";
import { Bar } from "./Components/Bar";
import { Footer } from "./Components/Footer";
import { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router";
import InputAdornment from "@mui/material/InputAdornment";

export const Register = () => {
  const navigate = useNavigate();
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(true);

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [telefone, setTelefone] = useState("");
  const [residencia, setResidencia] = useState("");
  const [condominio, setCondominio] = useState("");

  const handleRegister = () => {
    fetch('http://localhost:4000/moradores', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        senha: senha,
        nome_completo: nome,
        residencia: residencia,
        telefone: telefone,
        id_condominio: condominio
      }),
    });
    navigate('/login');
  }
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
            <Box display="flex" justifyContent="center" mt={7}>
              <img src="/Bem vindo ao Futuro.png" alt="" width={450} />
            </Box>


            <Box mt={6}>
              <Box ml={"75px"}>
                <TextField
                  id="outlined-basic"
                  label="Nome"
                  variant="outlined"
                  className={classes.input}
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                />
              </Box>
              <Box mt={3} ml={"75px"}>
                <TextField
                  id="outlined-basic"
                  label="E-mail"
                  variant="outlined"
                  className={classes.input}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Box>

              <Box mt={3} ml={"75px"}>
                <TextField
                  id="outlined-basic"
                  label="Senha"
                  variant="outlined"
                  className={classes.input}
                  type={showPassword ? "password" : "text"}
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Button
                          sx={{ position: "end", mr: "-10px", color: "#696969" }}
                          id="show-password"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </Button>
                      </InputAdornment>
                    ),
                  }}
                />
                {/* <Box>
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
                </Box> */}
              </Box>
              <Box mt={3} ml={"75px"}>
                <TextField
                  id="outlined-basic"
                  label="Telefone"
                  variant="outlined"
                  className={classes.input}
                  value={telefone}
                  onChange={(e) => setTelefone(e.target.value)}
                />
              </Box>
              <Box>
                <Box mt={3} ml={"75px"}>
                  <TextField
                    id="outlined-basic"
                    label="Número da Residência"
                    variant="outlined"
                    className={classes.shortInput}
                    value={residencia}
                    onChange={(e) => setResidencia(e.target.value)}
                  />
                </Box>
                <Box mt={-7} ml={"320px"}>
                  <TextField
                    id="outlined-basic"
                    label="Condominio"
                    variant="outlined"
                    className={classes.shortInput}
                    value={condominio}
                    onChange={(e) => setCondominio(e.target.value)}
                  />
                </Box>
              </Box>
            </Box>

            <Box display="flex" marginLeft={"75px"} mt={4}>
              <Button
                onClick={handleRegister}
                variant="contained"
                color="primary"
                className={classes.btn}
              >
                <Typography sx={{ fontFamily: "Poppins", fontSize: "24px", fontWeight: 700 }}> Registre-se </Typography>

              </Button>
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
