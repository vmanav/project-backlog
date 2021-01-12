import React, { useState, useContext } from 'react';
import {
	Container, Grid, makeStyles, Paper, Button, FormControl, ButtonGroup, Input, InputLabel, TextareaAutosize, FormControlLabel,
	Checkbox, InputAdornment, useTheme, TextField, CssBaseline, AppBar, Toolbar, ListItemText, IconButton, Drawer, Typography, Divider, List, ListItem, ListItemIcon
} from '@material-ui/core';
import { Check, Menu, Inbox, Mail, ChevronLeft, Delete, ChevronRight, Add, Edit, CheckBox, ViewComfy } from '@material-ui/icons';
import { ToggleButton } from '@material-ui/lab';
import { yellow } from '@material-ui/core/colors';
import clsx from 'clsx';

import LeftDrawerContent from './LeftDrawerContent';
import AppContainer from './AppContainer';

import { GlobalContext } from '../context/GlobalState';

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

	// For Content
	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary,
	}
}));

export default function DrawerComponent() {
	const [open, setOpen] = useState(true);

	const { selectedList, list } = useContext(GlobalContext);
	console.log("Selected List Id : ", selectedList)


	const classes = useStyles();

	const handleDrawerToggle = () => {
		setOpen(!open);
	};

	return (
		<div className={classes.root}>

			<CssBaseline />
			<AppBar
				position="fixed"
				className={clsx(classes.appBar, {
					[classes.appBarShift]: open,
				})}
			>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						onClick={handleDrawerToggle}
						edge="start"
						className={clsx(classes.menuButton)}
					>
						<Menu />
					</IconButton>
					{/* TopNavBar ListName */}
					<Typography noWrap>
						{selectedList === (-1) ?
							(<Typography variant="h5" >
								"PLAESAE SELECT A ALIST dwaes"
							</Typography >
							) :
							(<Typography variant="h5" >
								{list.filter((l) => l.id === selectedList)[0].listName}
							</Typography>
							)
						}
					</Typography>
				</Toolbar>
			</AppBar>

			{/* Left Drawer  */}
			{/* <LeftDrawerContent /> */}
			<Drawer
				className={classes.drawer}
				variant="persistent"
				anchor="left"
				open={open}
				classes={{
					paper: classes.drawerPaper,
				}}
			>
				<LeftDrawerContent />
			</Drawer>

			{/* Main */}
			<main
				className={clsx(classes.content, {
					[classes.contentShift]: open,
				})}
				style={{ backgroundColor: 'yellow', height: '1000 px', padding: 0 }}
			>
				<div className={classes.drawerHeader} />
				<AppContainer />
			</main>
		</div >
	);
};
