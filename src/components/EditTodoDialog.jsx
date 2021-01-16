import React, { useState, useContext } from 'react';
import {
  FormControl, Snackbar, Dialog, DialogTitle, TextField, ListItemText, Divider, List, ListItem
} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';

import { GlobalContext } from '../context/GlobalState';


function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function EditTodoDialog(props) {
  const { onClose, open, data } = props;
  const [snkBarOpen, setSnkBarOpen] = useState(false);


  const [title, setTitle] = useState(data.title);
  const [desc, setDesc] = useState(data.desc);
  const [pointers, setPointers] = useState(data.pointers);
  const [ref, setRef] = useState(data.ref);

  const { editTodo, selectedList } = useContext(GlobalContext);

  const handleClose = () => {
    onClose();
  };


  const handleSnkBarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnkBarOpen(false);
  };


  return (
    <>
      <Dialog
        fullWidth={true}
        onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
        <DialogTitle id="simple-dialog-title" style={{ textAlign: 'center' }}>Edit Todo</DialogTitle>
        <Divider />
        {/* <Grid container xs={12} spacing={2}>

          <Grid item xs={12} spacing={2}>

          </Grid>
        </Grid> */}
        <List style={{ alignItems: 'center', padding: 8 }} >
          <ListItem >
            <FormControl fullWidth>
              <TextField
                id="outlined"
                label="Title"
                variant="outlined"
                defaultValue={title}
                size="small"
                onChange={(e) => setTitle(e.target.value)}
                error={title === '' ? true : false}
                helperText="Must not be Empty"
              />
            </FormControl>
          </ListItem>
          <ListItem>
            <FormControl fullWidth>
              <TextField
                id="outlined"
                label="Description"
                variant="outlined"
                defaultValue={desc}
                size="small"
                onChange={(e) => setDesc(e.target.value)}
              />
            </FormControl>
          </ListItem>
          <ListItem>
            <FormControl fullWidth>
              <TextField
                id="outlined"
                label="Pointers"
                variant="outlined"
                defaultValue={pointers}
                size="small"
                onChange={(e) => setPointers(e.target.value)}
              />
            </FormControl>
          </ListItem>
          <ListItem>
            <FormControl fullWidth>
              <TextField
                id="outlined"
                label="Reference"
                variant="outlined"
                defaultValue={ref}
                size="small"
                onChange={(e) => setRef(e.target.value)}
              />
            </FormControl>
          </ListItem>
          <ListItem style={{ justifyContent: 'flex-end' }}>
            <List >
              <ListItem button style={{ textAlign: 'center', color: 'green' }}>
                <ListItemText primary="Save Todo" />
              </ListItem>
            </List>
          </ListItem>
        </List>
      </Dialog>

      {/* Snackbar */}
      <Snackbar
        open={snkBarOpen}
        autoHideDuration={3000}
        onClose={handleSnkBarClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Alert onClose={handleClose} severity="error">
          List Name must not be Empty!
          </Alert>
      </Snackbar>
    </>
  );
}