import React, { useState } from 'react';
import './App.css';

import { Container, Grid, makeStyles, Paper, Button, FormControl, Input, InputLabel, InputAdornment, useTheme, TextField, CssBaseline, AppBar, Toolbar, ListItemText, IconButton, Drawer, Typography, Divider, List, ListItem, ListItemIcon } from '@material-ui/core';
import { Check, Menu, Inbox, Mail, ChevronLeft, Delete, ChevronRight } from '@material-ui/icons';
import { ToggleButton } from '@material-ui/lab';
import { yellow } from '@material-ui/core/colors';
import clsx from 'clsx';


const drawerWidth = 200;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(1),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },

  // For COntaent
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }

}));


function DrawerComponent() {
  const [open, setOpen] = useState(true);
  const classes = useStyles();

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  // const handleDrawerClose = () => {
  //   setOpen(false);
  // };
  return (
    <div className={classes.root}>

      <CssBaseline />

      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar

        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            edge="start"
            className={clsx(classes.menuButton)}
          >
            <Menu />
          </IconButton>
          <Typography noWrap>
            <TextField id="standard" placeholder="ListName" />
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Left Drawer  */}
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerToggle}>
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
          </ListItem>
        </List>

        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <Inbox /> : < Mail />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
          <ListItem button key={'New List'}>
            <ListItemIcon>
              <Inbox />
            </ListItemIcon>
            <ListItemText primary={'New List'} />
          </ListItem>
        </List>
      </Drawer>

      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
        style={{ backgroundColor: 'yellow', height: '1000 px', padding: 0 }}
      >
        <div className={classes.drawerHeader} />
        <Container style={{ backgroundColor: 'lightcyan', border: '1px solid black' }} maxWidth="lg">

          <Grid container spacing={1} style={{ paddingTop: 10, paddingBottom: 10 }}>

            <Grid item xs={12}
            >
              <Grid
                container
                direction="row"
                justify="flex-end"
                alignItems="center"
              >
                <Button
                  variant="contained"
                  color="secondary"
                  size="small"
                  startIcon={<Delete />}
                >
                  Delete List
              </Button>
              </Grid>

            </Grid>

            <Grid item xs={12}>
              <FormControl fullWidth size="medium" style={{ marginBottom: 6 }}>
                <TextField id="outlined" label="Title" variant="outlined" placeholder="Enter Title here"
                  size="small"
                // onChange={}
                />
              </FormControl>
              <Divider />
            </Grid>
            <Grid item xs={12}>
              <Grid
                container
                spacing={1}
                direction="row"
                justify="flex-end"
                alignItems="center"
              >
                <Grid item xs={1}>
                  <FormControl fullWidth size="medium" style={{ marginBottom: 6 }}>
                    <TextField id="outlined" label="Title" variant="outlined" placeholder="Enter Title here"
                      size="small"
                    // onChange={}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={2}>
                  <Paper className={classes.paper}>xs=12 sm=6</Paper>
                </Grid>
                <Grid item xs={3}>
                  <Paper className={classes.paper}>xs=12 sm=6</Paper>
                </Grid>
                <Grid item xs={3}>
                  <Paper className={classes.paper}>xs=12 sm=6</Paper>
                </Grid>
                <Grid item xs={3}>
                  <Paper className={classes.paper}>xs=12 sm=6</Paper>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper}>xs=12 sm=6</Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper}>xs=12 sm=6</Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper}>xs=12 sm=6</Paper>
            </Grid>
          </Grid>

        </Container>
      </main>
    </div >
  );
}

function App() {
  const [selected, setSelected] = useState(false);


  return (

    <div className="App">
      <div className="Main">
        <DrawerComponent />
      </div>
    </div>

  );
}

export default App;
