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
import { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import InputAdornment from "@mui/material/InputAdornment";

export const Login = () => {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(true);

  return (
    <Grid container>
      <GlobalStyles
        styles={{
          //body: { backgroundImage: "url('/background.png')" }
          body: {
            backgroundImage:
              "url('/left_background.png'), url('/right_bg_login.png')",
            backgroundRepeat: "no-repeat, no-repeat",
            backgroundPosition: "top left, bottom right",
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
          <Box mb={10} ml={30}>
            <img src="/imagem_login.png" alt="" width={653} />
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
          <Box>
            <Box display="flex" justifyContent="center" mb={1}>
              <img src="/Bem vindo ao Futuro.png" alt="" width={500} />
            </Box>
            <Box ml={25.5}>
              <img
                style={{ marginTop: "15px" }}
                src="/Login with facebook.png"
                alt=""
                width={500}
              />
              <img src="/Login with Google.png" alt="" width={500} />
            </Box>
          </Box>

          <Box mt={3}>
            <Box ml={"-28px"}>
              <TextField
                id="outlined-basic"
                label="E-mail"
                variant="outlined"
                className={classes.input}
              />
            </Box>

            <Box mt={3} ml={"-28px"}>
              <TextField
                id="outlined-basic"
                label="Senha"
                variant="outlined"
                className={classes.input}
                type={showPassword ? "password" : "text"}
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
              <Box>
                <Box mt={1} textAlign={"left"}>
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
                  mt={-4.2}
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
          </Box>

          <Box ml={-3} display="flex" justifyContent="center" mt={4}>
              <Button
                href="/home"
                variant="contained"
                color="primary"
                className={classes.btn}
              >
                Entrar
              </Button>
            </Box>

          <Box ml={-3} mt={5}>
            <Box mb={1}>
              <Typography sx={{fontFamily: "Poppins"}}> Não tem uma conta?
              <Link component="button" className={classes.link}>
                <a href="/home" style={{textDecoration:"none", color:"#6358DC"}}>&nbsp;Registre-se</a>
              </Link>
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};
