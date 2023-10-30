import * as React from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { Grid, Box, Typography, TextField } from "@mui/material";
import { useStyles } from "../../styles";

export default function CheckoutModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const classes = useStyles();

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
              </Box>
            </Grid>
            <Box>
              <img
                src="/participantes.png"
                alt=""
                style={{ marginLeft: "970px", marginTop: "20px" }}
              />
              <img
                src="/chat_background.png"
                alt=""
                width={"940px"}
                height={"682px"}
                style={{ marginTop: "-73px" }}
              />
              <img
                src="/photo.png"
                alt=""
                style={{ marginLeft: "-850px", marginBottom: "50px"}}
              />
              <img src="/document.png" alt="" style={{ marginLeft: "30px", marginBottom: "50px" }} />
            </Box>
            <Box>
              <TextField
                id="message"
                required
                label="Digite"
                variant="outlined"
                name="message"
                className={classes.input}
                sx={{
                  ml: "250px",
                  mt: "-100px",
                  borderRadius: "50px 50px 50px 50px",
                  color: "#606060",
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Modal>
    </div>
  );
}
