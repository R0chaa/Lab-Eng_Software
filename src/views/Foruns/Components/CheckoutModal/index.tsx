import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { Grid, Box, Typography, TextField, Paper } from "@mui/material";
import { useStyles } from "../../styles";
import { getMorador } from "App";



interface Mensagem {
  id: number;
  data_post: string;
  post: string;
  createdAt: string;
  updatedAt: string;
  id_morador: number;
}

interface MensagensDisplayProps {
  mensagens: Mensagem[];
}

export async function enviarMensagem(mensagem: string): Promise<Mensagem | null> {
  try {
    const id_morador = getMorador();
    const response = await fetch('http://localhost:4000/forums', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data_post: new Date().toISOString(),
        post: mensagem,
        id_morador: id_morador.id
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Erro ao enviar mensagem:', data);
      return null;
    }

    return data;
  } catch (error) {
    console.error('Houve um erro ao chamar a API: ', error);
    throw error;
  }
}

export async function fetchMensagens(): Promise<Mensagem[]> {
  try {
    const response = await fetch('http://localhost:4000/forums', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    if (!response.ok) {
      console.log('Erro ao obter mensagens:', data);
      return [];
    }

    return data;
  } catch (error) {
    console.error('Houve um erro ao chamar a API: ', error);
    throw error;
  }
}



export const MensagensDisplay: React.FC<MensagensDisplayProps> = ({ mensagens }) => {
  const formatarData = (data: string) => {
    const dataFormatada = new Date(data);
    return dataFormatada.toLocaleString(); // Ajuste aqui conforme necessário
  };

  return (
    <Box sx={{ overflow: 'auto', maxHeight: '500px' }}>
      {mensagens.map((mensagem) => (
        <Paper key={mensagem.id} elevation={3} style={{ margin: "10px", padding: "10px" }}>
          <Typography variant="body1">#{mensagem.id} - Morador: {mensagem.id_morador} --  Data do post: {formatarData(mensagem.data_post)}</Typography>
          <Typography variant="body1">{mensagem.post}</Typography>
          {/* Adicione mais informações da mensagem conforme necessário */}
        </Paper>
      ))}
    </Box>
  );
};

export default function CheckoutModal() {
  const [open, setOpen] = React.useState(false);
  const [mensagens, setMensagens] = useState<Mensagem[]>([]);
  const classes = useStyles();
  const [mensagem, setMensagem] = useState("");


  useEffect(() => {
    fetchMensagens()
      .then((data) => setMensagens(data))
      .catch((error) => console.error('Erro ao obter mensagens:', error));
  }, []);

  const setMessage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMensagem(event.target.value);
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleEnviarMensagem = async () => {
    if (mensagem != '') {


      try {
        const novaMensagem = await enviarMensagem(mensagem);

        if (novaMensagem) {
          setMensagens([...mensagens, novaMensagem]);
          setMensagem('');
        }
      } catch (error) {
        console.error('Erro ao enviar mensagem:', error);
      }
    }
  };


  return (
    <div>
      <Button onClick={handleOpen}>Participar</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Grid>
          <Grid
            sx={{
              ml: "16%",
              mt: "75px",
              width: "1287px",
              height: "817px",
              flexShrink: 0,
              borderRadius: "50px",
              background: "#FFF",
              boxShadow: "4px 4px 60px 4px rgba(152, 206, 180, 0.20)",
            }}
            className={classes.rect}
          >
            <Grid
              sx={{
                width: "1287px",
                height: "135px",
                flexShrink: 0,
                background: "#D9D9D9",
                borderRadius: "50px 50px 0px 0px",
              }}
            >
              <Box display="flex">
                <Button
                  sx={{ mt: "40px", ml: "50px", borderRadius: "50px" }}
                  type="submit"
                  href="/foruns"
                  variant="contained"
                  color="primary"
                  className={classes.btn}
                >
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontSize: "24px",
                      fontWeight: 700,
                    }}
                  >
                    {" "}
                    Voltar{" "}
                  </Typography>
                </Button>
                <Typography
                  sx={{
                    mt: "22px",
                    ml: "720px",
                    color: "#0C4565",
                    fontFamily: "Montserrat",
                    fontSize: "64px",
                    fontStyle: "normal",
                    fontWeight: 700,
                    lineHeight: "135.5%",
                  }}
                >
                  Fórum
                </Typography>
              </Box>
            </Grid>
            <Box>
              <MensagensDisplay mensagens={mensagens} />
            </Box>



            <Box>
              <TextField
                id="message"
                required
                label="Digite"
                variant="outlined"
                name="message"
                value={mensagem}
                onChange={setMessage}
                sx={{
                  ml: "25%",
                  mt: "5%",
                  width: "700px",
                  borderRadius: "5% 5% 5% 5%",
                  color: "#606060",
                }}
              />
              <Button sx={{ mt: "65px", ml: "10px", borderRadius: "50px" }}
                variant="contained"
                color="primary"
                className={classes.btn}
                onClick={handleEnviarMensagem}>
                <Typography sx={{
                  fontFamily: "Poppins",
                  fontSize: "24px",
                  fontWeight: 700,
                }}

                >
                  Enviar
                </Typography>
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Modal>
    </div>
  );
}
