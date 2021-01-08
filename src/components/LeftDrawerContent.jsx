import React, { useState } from 'react';
import {
  Container, Grid, makeStyles, Paper, Button, FormControl, Snackbar, Dialog, ListItemAvatar, Avatar, DialogTitle, ButtonGroup, Input, Tooltip, InputLabel, TextareaAutosize, FormControlLabel,
  Checkbox, InputAdornment, useTheme, TextField, CssBaseline, AppBar, Toolbar, ListItemText, IconButton, Drawer, Typography, Divider, List, ListItem, ListItemIcon
} from '@material-ui/core';
import { Check, Menu, Inbox, Mail, ChevronLeft, Delete, ChevronRight, Close, Person, Add, Edit, CheckBox, ViewComfy } from '@material-ui/icons';
import { ToggleButton } from '@material-ui/lab';
import MuiAlert from '@material-ui/lab/Alert';

import { yellow } from '@material-ui/core/colors';
import clsx from 'clsx';
import NewListDialog from './NewListDialog';

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
            <IconButton aria-label="delete" size="small">
              <Tooltip title="Delete All" placement="right" arrow>
                <Delete />
              </Tooltip>
            </IconButton>
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
        <NewListDialog open={newListModalOpen} onClose={handleNewListModalClose} />
      </List>
    </>
  );
};
