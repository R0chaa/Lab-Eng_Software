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
import BasicModal from "./Components/Modal";
import CheckoutModal from "./Components/CheckoutModal";
import { cards } from "./styles";
import React from "react";
import Button from "@mui/material/Button";

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export const Locals = () => {
  const [open, setOpen] = React.useState(false);
  const handleChange = () => setOpen(!open);

  return (
    <ThemeProvider theme={defaultTheme}>
      <Bar />
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        ></Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4} mt={-20}>
            {cards.map((card) => (
              <Grid item key={Math.random()} xs={12} sm={6} md={6}>
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
                    image={card.img}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.title}
                    </Typography>
                    <Typography>{card.description}</Typography>
                  </CardContent>
                  <CardActions>
                    {/* <button onClick={() => handleCardClick(card)}>
                      Open Modal
                    </button> */}
                    <Button onClick={handleChange}>Saiba mais</Button>
                    <BasicModal
                      title={card.title}
                      description={card.description}
                      open={open}
                      handleChange={handleChange}
                    />
                    <CheckoutModal />
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <Footer />
      {/* {selectedCard !== null && (
        <BasicModal
          title={modalContent.title}
          description={modalContent.description}
        />
      )} */}
    </ThemeProvider>
  );
};
