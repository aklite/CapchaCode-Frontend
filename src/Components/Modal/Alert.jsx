import React, {useContext} from 'react'
// Material UI Components for Modal
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button } from '@mui/material';


// router dom
import {useNavigate} from 'react-router-dom'; // importing navigate


// importing alert state management api
import {AlertStateManagementAPI} from '../../API/Context/Alert State Management API'; // importing alert state management api

// Modal Styling
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export function AlertModal({messsageTitle, MainMessage, ButtonText, Path, buttonColor}) {
  let navigator = useNavigate(); // using navigate
  let {UpdateAlertModalState} = useContext(AlertStateManagementAPI); // Using the alert state management api
  const [open, setOpen] = React.useState(true); // setting the modal state to open

  const handleClose = () =>{
     setOpen(false)
      UpdateAlertModalState({})
    };

  const Navigation = ()=>{
    navigator(Path);
    UpdateAlertModalState({})
  }; // navigating to login page


  return (
    <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">

    <Box sx={style}> 
      <Typography id="modal-modal-title" variant="h6" component="h2">
        {messsageTitle}
      </Typography>
      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        {MainMessage}
      </Typography>
      <Button color='success' style={{backgroundColor: buttonColor, marginTop:'1rem', color: 'white'}} onClick={Navigation}>{ButtonText}</Button>
    </Box>
  </Modal>
  )
}

AlertModal.defaultProps = {
  messsageTitle: 'Alert',
  MainMessage: 'This is a alert message',
  ButtonText: 'Ok',
  Path: '',
  buttonColor:'red'
}
