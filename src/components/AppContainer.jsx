import React, { useState, useContext } from 'react';
import {
  Container, Grid, makeStyles, Paper, Button, FormControl, ButtonGroup, Input, InputLabel, TextareaAutosize, FormControlLabel,
  Checkbox, InputAdornment, useTheme, TextField, CssBaseline, AppBar, Toolbar, ListItemText, IconButton, Drawer, Typography, Divider, List, ListItem, ListItemIcon
} from '@material-ui/core';
import { Check, Menu, Inbox, Mail, ChevronLeft, Delete, ChevronRight, Add, Edit, CheckBox, ViewComfy } from '@material-ui/icons';
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

  const { selectedList, list } = useContext(GlobalContext);

  if (selectedList === '') {
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
                <IconButton aria-label="delete" size="small">
                  <Delete />
                </IconButton>
                <IconButton aria-label="delete" size="small">
                  <CheckBox />
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
              list.filter((l) => l.listName === selectedList)[0].data.map((todoItem) => {
                return (
                  <Todo data={todoItem} key={todoItem.id} />
                )
              })
            }
          </Grid>

        </Grid>

      </Container >)
  }
}