import React, { useState, useContext } from 'react';
import {
  Container, Grid, makeStyles, Paper, Button, Box, FormControl, ButtonGroup, Input, InputLabel, TextareaAutosize, FormControlLabel,
  Checkbox, InputAdornment, useTheme, TextField, CssBaseline, AppBar, Toolbar, ListItemText, IconButton, Drawer, Typography, Divider, List, ListItem, ListItemIcon
} from '@material-ui/core';
import { Check, Menu, Inbox, Mail, ChevronLeft, Delete, ChevronRight, Add, Edit, CheckBox, ViewComfy } from '@material-ui/icons';
import { ToggleButton } from '@material-ui/lab';
import { yellow } from '@material-ui/core/colors';
import clsx from 'clsx';


import { GlobalContext } from '../context/GlobalState';


export default function Todo(props) {
  const { data } = props;
  const todoStatus = data.completed;
  // console.log("Data : ", data);

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
              <IconButton aria-label="delete">
                <Edit />
              </IconButton>
              <IconButton aria-label="delete" onClick={handleTodoDelete}>
                <Delete />
              </IconButton>
            </ButtonGroup>
          </FormControl>
        </Grid>


      </Grid>
      <Divider />
    </>
  )
}