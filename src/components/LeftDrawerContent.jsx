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
import NewListDialog from './NewListDialog';

import { GlobalContext } from '../context/GlobalState';

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

  const { list, deleteList, setSelectedList } = useContext(GlobalContext);

  console.log("=====LIST : ", list);
  const listNames = list.map((l) => l.listName);
  // console.log("listNames : ", listNames);

  const handleNewListModalOpen = () => {
    setnewListModalOpen(true);
  };

  const handleNewListModalClose = (value) => {
    setnewListModalOpen(false);
  };

  const handleDeleteList = (lName) => {
    console.log("delete List : ", lName);
    deleteList(lName);
  }

  const handleListItemClick = (lName) => {
    console.log("CLADLL `lName` : ", lName);
    setSelectedList(lName);
  }

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
        {listNames.map((lName, index) => (
          <>
            <ListItem button key={lName} onClick={() => handleListItemClick(lName)}>
              {/* <ListItemIcon>{index % 2 === 0 ? <Inbox /> : < Mail />}</ListItemIcon> */}
              <ListItemText primary={lName} />
              <IconButton aria-label="delete" size="small" onClick={() => handleDeleteList(lName)}>
                <Tooltip title="Delete List" placement="right" arrow>
                  <Delete />
                </Tooltip>
              </IconButton>
            </ListItem>
            {(index !== (listNames.length - 1)) ? (<Divider />) : (<></>)}
          </>
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
