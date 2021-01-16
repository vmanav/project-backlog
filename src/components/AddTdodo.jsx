import React, { useState, useContext } from 'react';
import {
  Grid, FormControl, Tooltip, Snackbar, TextField, IconButton, Divider
} from '@material-ui/core';
import { Add } from '@material-ui/icons';
import MuiAlert from '@material-ui/lab/Alert';

import { GlobalContext } from '../context/GlobalState';

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

  const { addTodo, selectedList } = useContext(GlobalContext);


  const handleSnkBarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setErrorSnkBarOpen(false);
  };

  const handleTodoAddClick = () => {
    // console.log("Creating a Todo : ", title, desc, pointers, ref);
    if (title === '') {
      setErrorSnkBarOpen(true);
    } else {
      addTodo({ title, desc, pointers, ref, selectedList })
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
          <IconButton aria-label="addproject" onClick={handleTodoAddClick}>
            <Tooltip title="Add Todo" placement="right" arrow>
              <Add />
            </Tooltip>
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