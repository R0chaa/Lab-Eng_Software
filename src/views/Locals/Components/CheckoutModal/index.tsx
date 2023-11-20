import * as React from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Checkout from "../Reserve/Checkout";

interface CheckoutModalProps {
  localId: number;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ localId }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  return (
    <div>
      <Button onClick={handleOpen}>Reservar</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Checkout localId={localId}/>
      </Modal>
    </div>
  );
}