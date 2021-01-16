import React, { useState, useContext } from 'react';
import {
  Snackbar, Dialog, ListItemAvatar, Avatar, DialogTitle, TextField, ListItemText, List, ListItem
} from '@material-ui/core';
import { Add } from '@material-ui/icons';
import MuiAlert from '@material-ui/lab/Alert';


import { GlobalContext } from '../context/GlobalState';


function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function NewListDialog(props) {
  const { onClose, open } = props;
  const [newList, setNewList] = useState('');
  const [snkBarOpen, setSnkBarOpen] = useState(false);

  const { addList
    // , setSelectedList
  } = useContext(GlobalContext);

  const handleClose = () => {
    onClose();
  };

  const handleAddNewList = () => {
    console.log("handleAddNewList CALLED: ", newList);
    // console.log("typeof newList : ", typeof newList)
    if (newList === '') {
      setSnkBarOpen(true);
    } else {
      addList(newList);
      // setSelectedList(newList);
      onClose();
    }
  }

  const handleSnkBarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnkBarOpen(false);
  };

  return (
    <>
      <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
        <DialogTitle id="simple-dialog-title">Start a New List</DialogTitle>
        <List>
          <ListItem>
            <TextField id="outlined" label="Title" variant="outlined" placeholder="Enter Title"
              size="small"
              onChange={(e) => setNewList(e.target.value)}
              error={newList === '' ? true : false}
              helperText="Must not be Empty"
            />
          </ListItem>
          <ListItem button onClick={handleAddNewList}>
            <ListItemAvatar>
              <Avatar>
                <Add />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Add New List" />
          </ListItem>
        </List>
      </Dialog>

      {/* Snackbar */}
      <Snackbar open={snkBarOpen} autoHideDuration={3000} onClose={handleSnkBarClose} anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}>
        <Alert onClose={handleClose} severity="error">
          List Name must not be Empty!
          </Alert>
      </Snackbar>
    </>
  );
}