import React, { useState } from 'react';
import {
	Container, Grid, makeStyles, Paper, Button, FormControl, ButtonGroup, Input, InputLabel, TextareaAutosize, FormControlLabel,
	Checkbox, InputAdornment, useTheme, TextField, CssBaseline, AppBar, Toolbar, ListItemText, IconButton, Drawer, Typography, Divider, List, ListItem, ListItemIcon
} from '@material-ui/core';
import { Check, Menu, Inbox, Mail, ChevronLeft, Delete, ChevronRight, Add, Edit, CheckBox, ViewComfy } from '@material-ui/icons';
import { ToggleButton } from '@material-ui/lab';
import { yellow } from '@material-ui/core/colors';
import clsx from 'clsx';

import LeftDrawerContent from './LeftDrawerContent'

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

const StrongDivider = () => (<>
	<Divider />
	<Divider />
</>)

export default function DrawerComponent() {
	const [open, setOpen] = useState(true);
	const [listSelected, setListSelected] = useState(false);
	const [selectedList, setselectedList] = useState({ name: "My List", data: [] });

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
						{listSelected ? (<TextField id="standard" placeholder="ListName" />) : (<TextField
							id="standard-read-only-input"
							defaultValue={selectedList.name}
							InputProps={{
								readOnly: true,
							}}
						/>)}
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

								{/* <Button
                  variant="contained"
                  color="secondary"
                  size="small"
                  startIcon={<Delete />}
                >
                  Delete List
              </Button> */}
							</Grid>

						</Grid>


						{/* Todo Input  */}
						<Grid item xs={12}>
							{/* <FormControl fullWidth size="medium" style={{ marginBottom: 6 }}>
                <TextField id="outlined" label="Title" variant="outlined" placeholder="Enter Title here"
                  size="small"
                />
              </FormControl> */}
							<Grid
								container
								spacing={1}
								direction="row"
								justify="center"
								alignItems="center"
							// style={{ backgroundColor: 'pink' }}
							>
								<Grid item xs={2}>
									<FormControl fullWidth size="medium"
									// style={{ marginBottom: 6 }}
									>
										<TextField id="outlined" label="Title" variant="outlined" placeholder="Enter Title here"
											size="small"
										// onChange={}
										/>
									</FormControl>
								</Grid>
								<Grid item xs={3}>
									<FormControl fullWidth size="medium"
									// style={{ marginBottom: 6 }}
									>
										<TextField id="outlined" label="Title" variant="outlined" placeholder="Enter Title here"
											size="small"
										// onChange={}
										/>
									</FormControl>
								</Grid>
								<Grid item xs={3}>
									<FormControl fullWidth size="medium"
									// style={{ marginBottom: 6 }}
									>
										<TextField id="outlined" label="Title" variant="outlined" placeholder="Enter Title here"
											size="small"
										// onChange={}
										/>
									</FormControl>
								</Grid>
								<Grid item xs={2}>
									<FormControl fullWidth size="medium"
									// style={{ marginBottom: 6 }}
									>
										<TextField id="outlined" label="Title" variant="outlined" placeholder="Enter Title here"
											size="small"
										// multiline
										// rows={2}
										// rowsMax={2}
										// onChange={}
										/>
									</FormControl>
								</Grid>
								<Grid item xs={1}>
									<IconButton aria-label="addproject">
										<Add />
									</IconButton>
								</Grid>
							</Grid>
							<StrongDivider />
						</Grid>

						{/* Todo jaha list me h uski grid */}
						<Grid item xs={12} style={{ backgroundColor: 'lightgreen' }}>

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


						</Grid>

					</Grid>

				</Container>
			</main>
		</div >
	);
};
