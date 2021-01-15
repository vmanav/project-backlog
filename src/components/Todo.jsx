import React, { useState, useContext } from 'react';
import {
  Container, Grid, makeStyles, Paper, Button, Box, FormControl, ButtonGroup, Input, InputLabel, Tooltip, TextareaAutosize, FormControlLabel,
  Checkbox, InputAdornment, useTheme, TextField, CssBaseline, AppBar, Toolbar, ListItemText, IconButton, Drawer, Typography, Divider, List, ListItem, ListItemIcon
} from '@material-ui/core';
import { Check, Menu, Inbox, Mail, ChevronLeft, Delete, ChevronRight, Add, Edit, CheckBox, ViewComfy } from '@material-ui/icons';
import { ToggleButton } from '@material-ui/lab';
import { yellow } from '@material-ui/core/colors';
import clsx from 'clsx';

import EditTodoDialog from './EditTodoDialog';

import { GlobalContext } from '../context/GlobalState';

export default function Todo(props) {
  const { data } = props;
  const todoStatus = data.completed;
  // console.log("Data : ", data);

  const [editTodoModalOpen, setEditTodoModalOpen] = useState(false);

  const handleEditTodoModalOpen = () => {
    setEditTodoModalOpen(true);
  };

  const handleEditTodoModalClose = (value) => {
    setEditTodoModalOpen(false);
  };

  const { todoStatusToggle, selectedList, deleteTodo } = useContext(GlobalContext);

  const handleTodoMark = (todoId) => {
    todoStatusToggle({
      listId: selectedList,
      todoId: todoId
    });
  }

  const handleTodoDelete = (todoId) => {
    deleteTodo({
      listId: selectedList,
      todoId: data.id
    });
  }

  const handleTodoEdit = () => {
    handleEditTodoModalOpen();
  }

  return (
    <>
      <Grid
        container
        spacing={2}
        direction="row"
        // justify="center"
        // justify="space-between"
        alignItems="center"
        style={{ backgroundColor: 'lightblue', border: '1px solid red' }}
      >
        <Grid item xs={1} style={{ textAlign: 'right' }}>
          <FormControlLabel
            control={
              <Checkbox
                checked={todoStatus}
                onChange={() => handleTodoMark(data.id)}
                name="checkedB"
                color="primary"
              />
            }
          />
        </Grid>
        <Grid item xs={2}>
          <Box component="div" overflow="visible">
            {data.title}
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Box component="div" overflow="visible">
            {data.desc}
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box component="div" overflow="visible">
            {data.pointers}
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Box component="div" overflow="visible">
            {data.ref}
          </Box>
        </Grid>
        <Grid item xs={2} style={{}}>
          <FormControl fullWidth size="medium">
            <ButtonGroup color="secondary" aria-label="outlined secondary button group">
              <IconButton aria-label="edit" onClick={handleTodoEdit}>
                <Tooltip title="Edit Todo" placement="top" arrow>
                  <Edit />
                </Tooltip>
              </IconButton>
              <IconButton aria-label="delete" onClick={handleTodoDelete}>
                <Tooltip title="Delete Todo" placement="top" arrow>
                  <Delete />
                </Tooltip>
              </IconButton>
            </ButtonGroup>
          </FormControl>
        </Grid>


      </Grid>
      <Divider />
      <EditTodoDialog open={editTodoModalOpen} onClose={handleEditTodoModalClose} data={data} />
    </>
  )
}