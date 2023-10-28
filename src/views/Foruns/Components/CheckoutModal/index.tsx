import * as React from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { Grid, Box, Typography, TextField } from "@mui/material";
import { useStyles } from "../../styles";

export default function CheckoutModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const classes = useStyles();

  return (
    <div>
      <Button onClick={handleOpen}>
        Participar
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Grid item xs={6}>
          <Grid sx={{
            ml: "600px",
            mt: "75px",
            width: "1287px",
            height: "817px",
            flexShrink: 0,
            borderRadius: "50px",
            background: "#FFF",
            boxShadow: "4px 4px 60px 4px rgba(152, 206, 180, 0.20)",
          }} className={classes.rect}>
            <Grid sx={{
              width: "1287px",
              height: "135px",
              flexShrink: 0,
              background: "#D9D9D9",
              borderRadius: "50px 50px 0px 0px",
            }}>

              <Box display="flex">
                <Button
                  sx={{ mt: "40px", ml: "50px", borderRadius: "50px", }}
                  type="submit"
                  href="/foruns"
                  variant="contained"
                  color="primary"
                  className={classes.btn}
                >
                  <Typography sx={{ fontFamily: "Poppins", fontSize: "24px", fontWeight: 700 }}> Voltar </Typography>

                </Button>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Modal>
    </div>
  );
}