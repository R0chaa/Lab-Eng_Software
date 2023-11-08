import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Bar } from "./Components/Bar";
import { Footer } from "./Components/Footer";
import { LocalsButton, ForunsButton } from "./Components/Buttons";
import { description, title, cards } from "./styles";

const imageUrls = [
  "https://images.unsplash.com/photo-1498206005704-36d87df55231?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8d2FsbHBhcGVyc3x8fHx8fDE2OTc4OTY3MDM&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
  "https://images.unsplash.com/photo-1560260240-c6ef90a163a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8d2FsbHBhcGVyc3x8fHx8fDE2OTc4OTY3MDc&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
];

export function System() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Bar />
      <Box>
        <Typography
          style={{
            marginLeft: "200px",
            marginTop: "50px",
            color: "#BA4FFD",
            fontFamily: "Montserrat",
            fontSize: "60px",
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "135.5%",
          }}
        >
          Meus Condomínios
          <br />
        </Typography>
        <Container sx={{ mt: "200px", ml: "500px", py: 1 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4} mt={-20}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={6}>
                <Card
                  sx={{
                    height: "100%",
                    width: "350px",
                    margin: "10px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: "56.25%",
                    }}
                    image={imageUrls[card - 1]}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {title[card - 1]}
                    </Typography>
                    <Typography>{description[card - 1]}</Typography>
                  </CardContent>
                  <CardActions>
                    {/* <button onClick={() => handleCardClick(card)}>
                      Open Modal
                    </button> */}
                    <LocalsButton />
                    <ForunsButton />
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      <Box>
        <Typography
          style={{
            marginLeft: "200px",
            marginTop: "100px",
            color: "#32A8EB",
            fontFamily: "Montserrat",
            fontSize: "60px",
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "135.5%",
          }}
        >
          Buscar Condomínios
        </Typography>
        <Container sx={{ mt: "200px", ml: "500px", py: 1 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4} mt={-20}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={6}>
                <Card
                  sx={{
                    height: "100%",
                    width: "350px",
                    margin: "10px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: "56.25%",
                    }}
                    image={imageUrls[card - 1]}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {title[card - 1]}
                    </Typography>
                    <Typography>{description[card - 1]}</Typography>
                  </CardContent>
                  <CardActions>
                    {/* <button onClick={() => handleCardClick(card)}>
                      Open Modal
                    </button> */}
                    <LocalsButton />
                    <ForunsButton />
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box sx={{ ml: "70px", mt: "100px" }}>
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

      <Box
        sx={{
          ml: "280px",
          mt: "-28px",
          color: "#76768F",
          fontFamily: "Poppins",
          fontSize: "19px",
          fontStyle: "normal",
          fontWeight: 550,
          lineHeight: "normal",
        }}
      >
        <Typography>Saiba mais como mudamos o mercado residencial.</Typography>
      </Box>
      <Box sx={{ width: "100%", mt: "90px" }}>
        <Footer />
      </Box>
    </Box>
  );
}
