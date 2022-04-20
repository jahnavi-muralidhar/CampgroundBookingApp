import React, { useRef, useEffect, useState, useCallback } from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4
  };
  
  const closeStyle = {
    display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
  };

export default function ReservationDetailsModal() {

    const [open, setOpen] = React.useState(false);
    const [ev, setDetails] = useState('');
    const handleOpen = (e) => {
        renderResDetails(e);
        setOpen(true)
    };
    const handleClose = () => setOpen(false);

    const renderResDetails = (e) => {
        setDetails(e)
    };

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style} >
                <Typography id="modal-modal-title" variant="h6" component="h2" sx={closeStyle}>
                    Reservation Details
                    {/* <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton> */}
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <div>Booked by : {ev.bookedBy}</div>
                    <div>Email : {ev.email} </div>
                    {/* <div> From : {ev.start } </div>
            <div> To : {ev.end } </div> */}
                </Typography>
            </Box>
        </Modal>
    );
}