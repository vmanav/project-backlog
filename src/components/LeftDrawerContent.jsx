import React, { useState } from 'react';
import {
  Container, Grid, makeStyles, Paper, Button, FormControl, Dialog, ListItemAvatar, Avatar, DialogTitle, ButtonGroup, Input, Tooltip, InputLabel, TextareaAutosize, FormControlLabel,
  Checkbox, InputAdornment, useTheme, TextField, CssBaseline, AppBar, Toolbar, ListItemText, IconButton, Drawer, Typography, Divider, List, ListItem, ListItemIcon
} from '@material-ui/core';
import { Check, Menu, Inbox, Mail, ChevronLeft, Delete, ChevronRight, Person, Add, Edit, CheckBox, ViewComfy } from '@material-ui/icons';
import { ToggleButton } from '@material-ui/lab';
import { yellow } from '@material-ui/core/colors';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  }
}));


function SimpleDialog(props) {
  const { onClose, open } = props;
  const [newList, setNewList] = useState('');
  const handleClose = () => {
    onClose();
  };

  const handleAddNewList = (e) => {
    console.log("Add new list : ", newList);
    onClose();
  }

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title">Start a New List</DialogTitle>
      <List>
        <ListItem>
          <TextField id="outlined" label="Title" variant="outlined" placeholder="Enter Title here"
            size="small"
            onChange={(e) => setNewList(e.target.value)}
          />
        </ListItem>
        <ListItem onClick={handleAddNewList}>
          <ListItemAvatar>
            <Avatar>
              <Add />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Add account" />
        </ListItem>
      </List>
    </Dialog>
  );
}

export default function LeftDrawerContent() {
  const classes = useStyles();
  const [newListModalOpen, setnewListModalOpen] = useState(false);

  const handleNewListModalOpen = () => {
    setnewListModalOpen(true);
  };

  const handleNewListModalClose = (value) => {
    setnewListModalOpen(false);
  };


  return (
    <>
      <div className={classes.drawerHeader}>
        <IconButton>
          <ChevronLeft />
        </IconButton>
      </div>
      <Divider />
      <List>
        <ListItem button key={Inbox}>
          <ListItemIcon>
            <Inbox />
          </ListItemIcon>
          <ListItemText primary={'All'} />
          <IconButton aria-label="delete" size="small">
            <Tooltip title="Delete All" placement="right" arrow>
              <Delete />
            </Tooltip>
          </IconButton>
        </ListItem>
      </List>

      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <Inbox /> : < Mail />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <Divider />

      <List>
        <ListItem button key={'New List'} onClick={handleNewListModalOpen} >
          <ListItemIcon>
            <Add />
          </ListItemIcon>
          <ListItemText primary={'New List'} />
        </ListItem>
        <SimpleDialog open={newListModalOpen} onClose={handleNewListModalClose} />
      </List>
    </>
  );
};
