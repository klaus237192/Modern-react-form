import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'white',
  p: 4,
};

export default function Submit({ name, avatar, birthday, multiSelect, gender, phoneNumber, isValidPhoneNumber ,email,fruit}) {
  const [open, setOpen] = React.useState(false);
  const [modalText,setModalText]=useState("")
  const handleClose = () => setOpen(false);
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent default form submission
    if (name === '') {
      setModalText("Please input name correctly")
      setOpen(true)
    } else if (email===""){
      setModalText("Please input email correctly")
      setOpen(true)
    } else if (birthday===null){
      setModalText("Please input birthday correctly")
      setOpen(true)
    } else if (gender===""){
      setModalText("Please input gender correctly")
      setOpen(true)
    } else if (isValidPhoneNumber===false){
      setModalText("Please input phone number correctly")
      setOpen(true)
    } else if (fruit===""){
      setModalText("Please input fruit correctly")
      setOpen(true)
    } else if (multiSelect.length===0){
      setModalText("Please input friends correctly")
      setOpen(true)
    } else if (avatar===null){
      setModalText("Please select picture correctly")
      setOpen(true)
    } 
    else {
      console.log({ user: { name: name ,email:email, birthday: birthday,gender: gender, phoneNumber: phoneNumber,fruit:fruit, multiSelect: multiSelect,  avatar: avatar } });
    }
  };

  return (
    <div className=" mt-2 ml-[215px]">
      <form onSubmit={handleSubmit}>
        <Stack direction="row" spacing={2}>
          <Button type="submit"  contained="true" endIcon={<SendIcon />} >
            Send
          </Button>
        </Stack>
      </form>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
            Input error
          </Typography>
          <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
            {modalText}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
