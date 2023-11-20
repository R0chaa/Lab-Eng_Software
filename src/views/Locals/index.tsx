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
import { CheckoutModal } from "./Components/CheckoutModal";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const imageUrls = [
  "https://images.unsplash.com/photo-1498206005704-36d87df55231?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8d2FsbHBhcGVyc3x8fHx8fDE2OTc4OTY3MDM&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
  "https://images.unsplash.com/photo-1560260240-c6ef90a163a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8d2FsbHBhcGVyc3x8fHx8fDE2OTc4OTY3MDc&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
  "https://images.unsplash.com/photo-1450778869180-41d0601e046e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8d2FsbHBhcGVyc3x8fHx8fDE2OTc4OTY3MTU&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
  "https://images.unsplash.com/photo-1511300636408-a63a89df3482?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8d2FsbHBhcGVyc3x8fHx8fDE2OTc4OTY3MTg&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
  "https://images.unsplash.com/photo-1501446690852-da55df7bfe07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8d2FsbHBhcGVyc3x8fHx8fDE2OTc4OTY3MjE&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
  "https://images.unsplash.com/photo-1503104538136-7491acef4d5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8d2FsbHBhcGVyc3x8fHx8fDE2OTc4OTY3MjM&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
  "https://images.unsplash.com/photo-1609528138312-25c1111cfb3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8d2FsbHBhcGVyc3x8fHx8fDE2OTc4OTY3MjY&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
  "https://source.unsplash.com/random?wallpapers",
];
// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export const Locals = () => {
  const [localsData, setLocalsData] = useState<any[]>([]);
  const [fetchDone, setFetchDone] = useState(false);
  const location = useLocation();
  const condData = location.state?.condData || null;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:4000/localidades/" + condData.id,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const data = await response.json();

        if (data === null) {
          console.log("Os dados retornados são nulos.");
          // Faça algo apropriado para lidar com a situação de dados nulos
        } else {
          setLocalsData(data);
        }
      } catch (error) {
        // gerencie erros
        console.error("Houve um erro ao chamar a API: ", error);
      }
      setFetchDone(true);
    };

    if (!fetchDone) {
      fetchData();
    }
  }, [condData, localsData]);

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
            {localsData.map((local) => (
              <Grid item key={local.id} xs={12} sm={6} md={6}>
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
                    image={imageUrls[1]}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      <p>{local.nome}</p>
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <CheckoutModal localId={local.id}/>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <Footer />
    </ThemeProvider>
  );
};
