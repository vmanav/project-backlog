import React, { useState } from 'react';
import {
  Container, Grid, makeStyles, Paper, Button, FormControl, ButtonGroup, Input, InputLabel, TextareaAutosize, FormControlLabel,
  Checkbox, InputAdornment, useTheme, TextField, CssBaseline, AppBar, Toolbar, ListItemText, IconButton, Drawer, Typography, Divider, List, ListItem, ListItemIcon
} from '@material-ui/core';
import { Check, Menu, Inbox, Mail, ChevronLeft, Delete, ChevronRight, Add, Edit, CheckBox, ViewComfy } from '@material-ui/icons';
import { ToggleButton } from '@material-ui/lab';
import { yellow } from '@material-ui/core/colors';
import clsx from 'clsx';

export default function TodoList() {

  return (
    <Grid
      container
      spacing={1}
      direction="row"
      // justify="center"
      // justify="space-between"
      alignItems="center"
    // style={{ backgroundColor: 'pink' }}
    >
      <Grid item xs={1} style={{ textAlign: 'right' }}>
        <FormControlLabel
          control={
            <Checkbox
              // checked={false}
              // onChange={handleChange}
              name="checkedB"
              color="primary"
            />
          }
        />
      </Grid>
      <Grid item xs={2}>
        <FormControl fullWidth size="medium">
          <TextField id="standard" label="Title" variant="standard" placeholder="Enter Title here"
            size="small"
          />
        </FormControl>
      </Grid>
      <Grid item xs={2}>
        <FormControl fullWidth size="medium">
          <TextField id="standard" label="Title" variant="standard" placeholder="Enter Title here"
            size="small"
          />
        </FormControl>
      </Grid>
      <Grid item xs={3}>
        <FormControl fullWidth size="medium">
          <TextField id="standard" label="Title" variant="standard" placeholder="Enter Title here"
            size="small"
          />
        </FormControl>
      </Grid>
      <Grid item xs={2}>
        <FormControl fullWidth size="medium">
          <TextField id="standard" label="Title" variant="standard" placeholder="Enter Title here"
            size="small"
          />
        </FormControl>
      </Grid>
      <Grid item xs={2} style={{}}>

        <FormControl fullWidth size="medium">
          <ButtonGroup color="secondary" aria-label="outlined secondary button group">
            <IconButton aria-label="delete">
              <Edit />
            </IconButton>
            <IconButton aria-label="delete">
              <Delete />
            </IconButton>
          </ButtonGroup>
        </FormControl>
      </Grid>


    </Grid>
  )
}