import React, { useState, useContext } from 'react';
import {
  Container, Grid, makeStyles, Paper, Button, FormControl, Snackbar, Dialog, ListItemAvatar, Avatar, DialogTitle, ButtonGroup, Input, Tooltip, InputLabel, TextareaAutosize, FormControlLabel,
  Checkbox, InputAdornment, useTheme, TextField, CssBaseline, AppBar, Toolbar, ListItemText, IconButton, Drawer, Typography, Divider, List, ListItem, ListItemIcon
} from '@material-ui/core';
import { Check, Menu, Inbox, Mail, ChevronLeft, Delete, ChevronRight, Close, Person, Add, Edit, CheckBox, ViewComfy } from '@material-ui/icons';
import { ToggleButton } from '@material-ui/lab';
import MuiAlert from '@material-ui/lab/Alert';

import { yellow } from '@material-ui/core/colors';
import clsx from 'clsx';

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