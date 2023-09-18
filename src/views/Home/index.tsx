import { GlobalStyles, Box, Typography} from "@mui/material";
import { Bar } from "./Components/Bar";

export function Home() {
  return (
    <Box sx={{flexGrow: 1}}>
      <GlobalStyles styles={{
          body: { 
            backgroundImage: "url('/left_background.png'), url('/right_background.png')", 
            backgroundRepeat: "no-repeat, no-repeat", 
            backgroundPosition: "0% 1100%, top right",
          }
        }}
      />
      <Bar/>
      <Box >
        <Typography style={{marginLeft: "70px", marginTop: "50px", color: "#BA4FFD", fontFamily: "Poppins", fontSize: "86px", fontWeight: 700, lineHeight: "normal", letterSpacing: "2.58px"}}> 
        Convivência<br/>
        </Typography>
        <Typography style={{marginLeft: "70px", color: "#32A8EB", fontFamily: "Poppins", fontSize: "86px", fontWeight: 700, lineHeight: "normal", letterSpacing: "2.58px"}}> 
        & Praticidade
        </Typography>
      </Box>
    </Box>
  );
}

