import { GlobalStyles, Box, Typography } from "@mui/material";
import { Bar } from "./Components/Bar";
import { Footer } from "./Components/Footer";
import { getMorador } from "../../App"



export function Home() {
  const morador = getMorador();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <GlobalStyles
        styles={{
          body: {
            backgroundImage:
              "url('/left_background.png'), url('/right_background.png')",
            backgroundRepeat: "no-repeat, no-repeat",
            backgroundPosition: "top left, top right",
            position: "relative, relative",
          },
        }}
      />
      <Bar />
      <Box>
        <Typography
          style={{
            marginLeft: "70px",
            marginTop: "50px",
            color: "#BA4FFD",
            fontFamily: "Poppins",
            fontSize: "86px",
            fontWeight: 700,
            lineHeight: "normal",
            letterSpacing: "2.58px",
          }}
        >
          Convivência
          <br />
        </Typography>
        <Typography
          style={{
            marginLeft: "70px",
            color: "#32A8EB",
            fontFamily: "Poppins",
            fontSize: "86px",
            fontWeight: 700,
            lineHeight: "normal",
            letterSpacing: "2.58px",
          }}
        >
          & Praticidade
        </Typography>
      </Box>
      <Box>
        <Typography
          style={{
            marginLeft: "70px",
            color: "#76768F",
            fontFamily: "Poppins",
            fontSize: "19px",
            fontStyle: "normal",
            fontWeight: 550,
            lineHeight: "normal",
            marginTop: "20px",
          }}
        >
          Visando facilitar uma série de interações, nosso app surge como
          <br />
          uma ótima maneira de simplificar e agilizar múltiplos processos
          <br /> dentro de um condomínio residencial.
        </Typography>
      </Box>

      <Box sx={{ ml: "70px", mt: "50px" }}>
        {morador.id === -1 && (<a href="/login">
          <img src="Login.png" alt="Login"></img>
        </a>)}
        {morador.id !== -1 && (<a href="/system">
          <img src="System.png" alt="System"></img>
        </a>)}
      </Box>

      <Box sx={{ ml: "70px", mt: "180px" }}>
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
        ml:"280px", 
        mt:"-28px",
        color: "#76768F",
        fontFamily: "Poppins",
        fontSize: "19px",
        fontStyle: "normal",
        fontWeight: 550,
        lineHeight: "normal",
        }}>
        <Typography>Saiba mais como mudamos o mercado residencial.</Typography>
      </Box>
      <Box sx={{width: "100%", mt: "90px"}}>
        <Footer />
      </Box>
    </Box>
  );
}
