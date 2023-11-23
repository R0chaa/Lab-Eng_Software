import makeStyles from "@mui/styles/makeStyles";

export const cards = [1, 2, 3, 4];

export const title = ["Avisos", "Moradores", "Fórum", "Fórum"];

export const description = [
  "Este espaço virtual foi criado com o objetivo de promover uma comunicação eficiente e transparente entre os moradores do nosso condomínio. Aqui, você encontrará um ambiente dedicado à troca de informações importantes, avisos e novidades relevantes para o dia a dia de todos.",
  "Este é o espaço digital exclusivo para todos os moradores do nosso condomínio se conectarem, compartilharem informações e fortalecerem os laços da nossa comunidade.",
];

export const useStyles = makeStyles(() => ({
  footer: {
    width: "100%",
  },
  leftContent: {
    position: "relative",
    height: "100%",
    minHeight: "100vh",
  },
  rightContent: {
    position: "relative",
    height: "100%",
    minHeight: "100vh",
  },
  title: {
    color: "white",
    fontWeight: "700 !important",
    lineHeight: "70px !important",
  },
  subtitle: {
    color: "white",
    fontWeight: "400 !important",
  },
  btn: {
    width: "200px",
    height: "50px",
    background:
      "linear-gradient(90deg, #AD00FE 1.72%, rgba(50, 168, 235, 0.50) 101.11%)",
  },
  input: {
    width: "600px",
  },
  link: {
    textDecoration: "none !important",
    color: "#6358DC",
  },
  rect: {
    width: "620px",
    height: "660px",
  },
}));
