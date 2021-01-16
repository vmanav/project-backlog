import React, { useState, useContext } from 'react';
import {
  Container, Grid, makeStyles, Paper, Button, FormControl, Chip, Snackbar, Dialog, ListItemAvatar, Avatar, DialogTitle, ButtonGroup, Input, Tooltip, InputLabel, TextareaAutosize, FormControlLabel,
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
    justifyContent: 'center',
  }
}));

const StrongDivider = () => (
  <>
    <Divider />
    <Divider />
  </>
)

export default function LeftDrawerContent() {
  const classes = useStyles();
  const [newListModalOpen, setnewListModalOpen] = useState(false);

  const { list, deleteList, setSelectedList, deleteAllLists } = useContext(GlobalContext);

  console.log("LIST IN LEFT DRAWER: ", list);
  const listNames = list.map((l) => {
    return {
      listName: l.listName,
      listId: l.id
    }
  });
  // console.log("listNames : ", listNames);

  const handleNewListModalOpen = () => {
    setnewListModalOpen(true);
  };

  const handleNewListModalClose = (value) => {
    setnewListModalOpen(false);
  };

  const handleDeleteList = (e, listId) => {
    e.stopPropagation();
    deleteList(listId);
  }

  const handleListItemClick = (listId) => {
    setSelectedList(listId);
  }

  const handleDeleteAll = () => {
    console.log("handleDeleteAll CALLED");
    deleteAllLists();
  }

  const handleChipClick = () => {

  }

  return (
    <>
      <div className={classes.drawerHeader}>
        <Typography>
          <Chip
            variant="outlined"
            onClick={handleChipClick}
            label="Project - Backlog"
          />
        </Typography>
        {/* <IconButton>
          <ChevronLeft />
        </IconButton> */}
      </div>
      <Divider />
      <List>
        {/* <Tooltip title="Delete All" placement="right" arrow> */}
        <ListItem button key={Delete} onClick={handleDeleteAll}>
          <ListItemIcon>
            <Delete />
          </ListItemIcon>
          <ListItemText primary={'Delete All Lists'} />
        </ListItem>
        {/* </Tooltip> */}
      </List>

      <Divider />

      {listNames.length === 0 ? (
        <List>
          <ListItem button>
            <ListItem style={{ textAlign: 'center', color: 'red', justifyContent: 'center' }} >
              No Lists Found !
              </ListItem>
          </ListItem>
        </List>
      ) : (<></>)
      }

      <List>
        {listNames.map(({ listName, listId }, index) => (
          <>
            <ListItem button key={listId} onClick={() => handleListItemClick(listId)}>
              {/* <ListItemIcon>{index % 2 === 0 ? <Inbox /> : < Mail />}</ListItemIcon> */}
              <ListItemText primary={listName} />
              <IconButton aria-label="delete" size="small" onClick={(e) => handleDeleteList(e, listId)}>
                <Tooltip title="Delete List" placement="right" arrow>
                  <Delete />
                </Tooltip>
              </IconButton>
            </ListItem>
            {(index !== (listNames.length - 1)) ? (<Divider />) : (<></>)}
          </>
        ))}
      </List>

      <StrongDivider />
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
