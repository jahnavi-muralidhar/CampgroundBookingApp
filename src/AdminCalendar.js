import React, { useRef, useEffect, useState, useCallback } from 'react';
import { Calendar, Views, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import ReservationDetailsModal from './ReservationDetailsModal';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const localizer = momentLocalizer(moment);
const myEventsList = [
  { start: new Date(2022, 3, 17), end: new Date(2022, 3, 25), title: "Reserved - RV site 1", bookedBy: 'John Doe', email: 'xxx@xxx.com' },
  { start: new Date(2022, 3, 18), end: new Date(2022, 3, 20), title: "Reserved - RV site 2", bookedBy: 'Jan', email: 'yuyu@yyy.com' }
];

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  textAlign: 'center'
};

const closeStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
};

function AdminCalendar() {

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

  function renderModal(e) {
    return (
      "<div>Booked By : " + e.bookedBy + "</div>"
    )
  };

  const handleSelectEvent = useCallback(
    (event) => window.alert(
      event.title + '\n' +
      event.bookedBy),
    []
  )

  return (
    <div className="App">
      <Calendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        views={{
          day: true,
          week: true,
          month: true
        }}
        selectable={true}
        onSelectEvent={handleOpen}
        popup
        style={{ height: 500, padding: 20 }}
      />

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} >
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}  >
            Reservation Details
            {/* <IconButton aria-label="close" onClick={handleClose} sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}>
              <CloseIcon />
            </IconButton> */}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div>Booked by : {ev.bookedBy}</div>
            <div>Email : {ev.email} </div>
            {/* <div> From : {ev.start } </div>
            <div> To : {ev.end } </div> */}
          </Typography>
          <Button autoFocus onClick={handleClose} color="rgb(144, 202, 249)" >
            Close
          </Button>
        </Box>
      </Modal>

    </div>
  );
}

export default AdminCalendar;