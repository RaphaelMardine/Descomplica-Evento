import * as React from 'react';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import { signOut, useSession } from 'next-auth/react';
import Image from "next/image";
import { Box, CircularProgress, Grid } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';

export interface SimpleDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}

function SimpleDialog(props: SimpleDialogProps) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value: string) => {
    onClose(value);
  };
  


  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Perfil and Log out</DialogTitle>
      <List sx={{ pt: 0 }}>
      <ListItem autoFocus button onClick={() => alert("Incompleto")}>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                <PersonIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Perfil" />
            </ListItem>
        <ListItem autoFocus button onClick={() => signOut({callbackUrl: `${window.location.origin}`})}>
          <ListItemAvatar>
            <Avatar>
              <LogoutIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </Dialog>
  );
}

export default function SimpleDialogDemo() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
  };

  const { data, status } = useSession();

    console.log(status)

  return (
    <div>
      <Typography variant="subtitle1" component="div">
        {status !== 'loading' ? 
            <Box sx={{    display: "flex", justifyContent: "center", alignItems: "center", mt: "18px" }}>
            <Image src={data.user.image} width={40} height={40} onClick={handleClickOpen} style={{borderRadius: "25px", cursor: "pointer"}}/>
            <KeyboardArrowDownIcon />
            </Box>
  :
            
            <CircularProgress />
            }
      
      </Typography>
      <br />
 


      <SimpleDialog
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}
