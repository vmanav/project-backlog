import React, { useState, useContext } from 'react';
import {
  Container, Grid, makeStyles, Paper, Button, FormControl, ButtonGroup, Input, InputLabel, Tooltip, TextareaAutosize, FormControlLabel,
  Checkbox, InputAdornment, useTheme, TextField, CssBaseline, AppBar, Toolbar, ListItemText, IconButton, Drawer, Typography, Divider, List, ListItem, ListItemIcon
} from '@material-ui/core';
import { Check, Menu, Inbox, Mail, ChevronLeft, Delete, ChevronRight, Add, Edit, CheckBox, ViewComfy } from '@material-ui/icons';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import { ToggleButton } from '@material-ui/lab';
import { yellow } from '@material-ui/core/colors';
import clsx from 'clsx';

import { GlobalContext } from '../context/GlobalState';

import AddTodo from './AddTdodo';
import Todo from './Todo';


const StrongDivider = () => (
  <>
    <Divider />
    <Divider />
  </>
)

export default function AppContainer() {

  const { selectedList, list, deleteAllTodo, viewNotCompleted, showTodoToggle } = useContext(GlobalContext);

  const handleDeleteAllTodo = () => {
    deleteAllTodo({ listId: selectedList });
  }

  const handleTodoShow = () => {
    console.log("handleTodoShow CALLED");
    showTodoToggle();
  }

  if (selectedList === (-1)) {
    return (
      <Container style={{ backgroundColor: 'lightcyan', border: '1px solid black' }} maxWidth="lg">
        >
        SELECT A LIST PLEASE
      </Container>
    )
  }
  else {


    return (
      <Container style={{ backgroundColor: 'lightcyan', border: '1px solid black' }} maxWidth="lg">

        <Grid container spacing={1} style={{ paddingTop: 10, paddingBottom: 10 }}>

          {/* 3 Buttons */}
          <Grid item xs={12}>
            <Grid
              container
              direction="row"
              justify="flex-end"
              alignItems="center"
            >
              <ButtonGroup color="secondary" aria-label="outlined secondary button group">
                <IconButton aria-label="delete" size="small" onClick={handleDeleteAllTodo}>
                  <Tooltip title="Delete All Todos" placement="top" arrow>
                    <Delete />
                  </Tooltip>
                </IconButton>
                <IconButton aria-label="delete" size="small" onClick={() => handleTodoShow()}>
                  {viewNotCompleted ? (
                    <Tooltip title="Show Completed" placement="top" arrow>
                      <CheckBoxOutlineBlankIcon />
                    </Tooltip>
                  ) : (
                      <Tooltip title="Show Pending" placement="top" arrow>
                        <CheckBoxIcon />
                      </Tooltip>
                    )}
                </IconButton>
                <IconButton aria-label="delete" size="small">
                  <ViewComfy />
                </IconButton>
              </ButtonGroup>
            </Grid>
          </Grid>

          {/* Todo Input  */}
          <Grid item xs={12}>
            <AddTodo />
          </Grid>

          {/* TodoList*/}
          <Grid item xs={12} style={{ backgroundColor: 'lightgreen' }}>
            {
              list.filter((l) => l.id === selectedList)[0].data.map((todoItem) => {
                if (viewNotCompleted !== todoItem.completed) {
                  return (
                    <Todo data={todoItem} key={todoItem.id} />
                  )
                } else {
                  return <></>
                }
              })
            }
          </Grid>

        </Grid>

      </Container >)
  }
}