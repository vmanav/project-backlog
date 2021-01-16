import React, { useState, useContext } from 'react';
import {
  Grid, Box, FormControl, ButtonGroup, Tooltip, FormControlLabel,
  Checkbox, IconButton, Divider
} from '@material-ui/core';
import { Delete, Edit } from '@material-ui/icons';
import { amber, red } from '@material-ui/core/colors';

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

  const handleEditTodoModalClose = () => {
    setEditTodoModalOpen(false);
  };

  const { todoStatusToggle, selectedList, deleteTodo } = useContext(GlobalContext);

  const handleTodoMark = (todoId) => {
    todoStatusToggle({
      listId: selectedList,
      todoId: todoId
    });
  }

  const handleTodoDelete = () => {
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
        spacing={0}
        direction="row"
        // justify="center"
        // justify="space-between"
        alignItems="center"
        style={{
          backgroundColor: 'white'
          // , border: '1px solid red'
        }}
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
                  <Edit style={{ color: amber[600] }} />
                </Tooltip>
              </IconButton>
              <IconButton aria-label="delete" onClick={handleTodoDelete}>
                <Tooltip title="Delete Todo" placement="top" arrow>
                  <Delete style={{ color: red[400] }} />
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