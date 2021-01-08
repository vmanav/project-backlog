import React, { useState } from 'react';
import {
  Container, Grid, makeStyles, Paper, Button, FormControl, ButtonGroup, Input, Snackbar, InputLabel, TextareaAutosize, FormControlLabel,
  Checkbox, InputAdornment, useTheme, TextField, CssBaseline, AppBar, Toolbar, ListItemText, IconButton, Drawer, Typography, Divider, List, ListItem, ListItemIcon
} from '@material-ui/core';
import { Check, Menu, Inbox, Mail, ChevronLeft, Delete, ChevronRight, Add, Edit, CheckBox, ViewComfy } from '@material-ui/icons';
import { ToggleButton } from '@material-ui/lab';
import { yellow } from '@material-ui/core/colors';
import clsx from 'clsx';
import MuiAlert from '@material-ui/lab/Alert';


const StrongDivider = () => (
  <>
    <Divider />
    <Divider />
  </>
)

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function AddTodo() {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [pointers, setPointers] = useState('');
  const [ref, setRef] = useState('');
  const [errorSnkBarOpen, setErrorSnkBarOpen] = useState(false);

  const handleSnkBarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setErrorSnkBarOpen(false);
  };

  const addTodo = () => {
    console.log("Creating a Todo : ", title, desc, pointers, ref);
    if (title === '') {
      setErrorSnkBarOpen(true);
    }
  }

  return (
    <>
      <Grid
        container
        spacing={1}
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={2}>
          <FormControl fullWidth size="medium">
            <TextField
              id="outlined"
              label="Title"
              variant="outlined"
              placeholder="Enter Title"
              size="small"
              onChange={(e) => setTitle(e.target.value)}
              error={title === '' ? true : false}
            />
          </FormControl>
        </Grid>
        <Grid item xs={3}>
          <FormControl fullWidth size="medium">
            <TextField
              id="outlined"
              label="Description"
              variant="outlined"
              placeholder="Description"
              size="small"
              onChange={(e) => setDesc(e.target.value)}
            />
          </FormControl>
        </Grid>
        <Grid item xs={3}>
          <FormControl fullWidth size="medium" >
            <TextField
              id="outlined"
              label="Pointers"
              variant="outlined"
              placeholder="Enter Pointers"
              size="small"
              onChange={(e) => setPointers(e.target.value)}
            />
          </FormControl>
        </Grid>
        <Grid item xs={2}>
          <FormControl fullWidth size="medium">
            <TextField
              id="outlined"
              label="References"
              variant="outlined"
              placeholder="Enter References"
              size="small"
              onChange={(e) => setRef(e.target.value)}
            />
          </FormControl>
        </Grid>
        <Grid item xs={1}>
          <IconButton aria-label="addproject" onClick={addTodo}>
            <Add />
          </IconButton>
        </Grid>
      </Grid>
      <StrongDivider />

      {/* Snackbar */}
      <Snackbar open={errorSnkBarOpen} autoHideDuration={3000} onClose={handleSnkBarClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}>
        <Alert severity="error">
          Name must not be Empty!
          </Alert>
      </Snackbar>
    </>
  )
}