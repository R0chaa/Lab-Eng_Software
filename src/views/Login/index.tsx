import { Grid, Typography, Box, TextField, Button, Link } from "@mui/material";
import { useStyles } from "./styles";

export const Login = () => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={6}>
        <Grid
          justifyContent="center"
          alignItems="center"
          direction="column"
          container
          className={classes.leftContent}
        >
          <Box mb={10}>
            <img src="/login.svg" alt="" width={300} />
          </Box>

          <Typography
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
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={6}>
        <Grid
          justifyContent="center"
          alignItems="center"
          direction="column"
          container
          className={classes.rightContent}
        >
          <Box>
            <Box display="flex" justifyContent="center" mb={1}>
              <img src="/Group 658.svg" alt="" width={100} />
            </Box>
            <Box>
              <img src="/CConect.svg" alt="" width={200} />
            </Box>
          </Box>

          <Box mt={8}>
            <Box>
              <TextField
                id="outlined-basic"
                label="Usuário"
                variant="outlined"
                className={classes.input}
              />
            </Box>

            <Box mt={3}>
              <TextField
                id="outlined-basic"
                label="Senha"
                variant="outlined"
                className={classes.input}
                type="password"
              />

              <Box mt={1}>
                <Link component="button" className={classes.link}>
                  Esqueci minha senha
                </Link>
              </Box>
            </Box>

            <Box display="flex" justifyContent="center" mt={4}>
              <Button
                href="/home"
                variant="contained"
                color="primary"
                className={classes.btn}
              >
                Entrar
              </Button>
            </Box>
          </Box>

          <Box mt={5}>
            <Box mb={1}>
              <Link component="button" className={classes.link}>
                Não possui conta?
              </Link>
            </Box>
            <Button variant="contained" color="primary" className={classes.btn}>
              Inscreva-se
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};
