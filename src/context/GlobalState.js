import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial State
const initialState = {
  selectedList: -1,
  llen: 1,
  list: [{
    listName: 'random',
    len: 1,
    id: 0,
    data: [{
      title: 'sampleTitle',
      desc: 'sampleDescription',
      pointers: 'samplePointers, samplePointers, samplePointers,inters, samplePointers,inters, samplePointers,interlePointers, samplePointers,inters, samplePointers,inters, samplePointers,inters, samplePointers,inters, samplePointers, samplePointers, samplePointers, samplePointers, samplePointers, samplePointers, samplePointers, samplePointers, samplePointers, samplePointers, samplePointers, samplePointers, samplePointers, samplePointers, samplePointers, samplePointers, samplePointers, samplePointers',
      ref: 'sampleRef.com, sampleRef.co',
      completed: true,
      id: 0
    }, {
      title: 'sampleTitle2',
      desc: 'sampleDescription2',
      pointers: 'samplePointers, samplePointers, samplePointers2',
      ref: 'sampleRef2.com, sampleRef2.co',
      completed: false,
      id: 1
    }]
  },
  {
    listName: 'secondRandom',
    len: 1,
    id: 1,
    data: [{
      title: 'sampleTitle',
      desc: 'sampleDescription',
      pointers: 'samplePointers, samplePointers, samplePointers',
      ref: 'sampleRef.com, sampleRef.co',
      completed: false,
      id: 0
    }, {
      title: 'sampleTitle2',
      desc: 'sampleDescription2',
      pointers: 'samplePointers, samplePointers, samplePointers2',
      ref: 'sampleRef2.com, sampleRef2.co',
      completed: false,
      id: 1
    }]
  }]
}

// Create A Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  // function deleteTransaction(id) {
  //   dispatch({
  //     type: 'DELETE_TRANSACTION',
  //     payload: id
  //   });
  // }

  function addList(listName) {
    dispatch({
      type: 'ADD_LIST',
      payload: {
        listName: listName
      }
    })
  }

  function deleteList(listId) {
    dispatch({
      type: 'DELETE_LIST',
      payload: {
        listId: listId
      }
    })
  }

  function setSelectedList(listId) {
    dispatch({
      type: 'SET_SELECTED_LIST',
      payload: {
        listId: listId
      }
    })
  }

  function todoStatusToggle({ listId, todoId }) {
    dispatch({
      type: 'TODO_STATUS_TOGGLE',
      payload: {
        listId: listId,
        todoId: todoId
      }
    })
  }

  function addTodo({ title, desc, pointers, ref, selectedList }) {
    dispatch({
      type: 'ADD_TODO',
      payload: {
        title: title,
        desc: desc,
        pointers: pointers,
        ref: ref,
        selectedList: selectedList
      }
    })
  }

  function deleteTodo({ listId, todoId }) {
    dispatch({
      type: 'DELETE_TODO',
      payload: {
        listId: listId,
        todoId: todoId
      }
    })
  }
  function deleteAllTodo({ listId }) {
    console.log("INCOMING listId : ", listId)
    dispatch({
      type: 'DELETE_ALL_TODO',
      payload: {
        listId: listId,
      }
    })
  }

  return (
    <GlobalContext.Provider value={{
      list: state.list,
      selectedList: state.selectedList,
      addList,
      deleteList,
      setSelectedList,
      todoStatusToggle,
      addTodo,
      deleteTodo,
      deleteAllTodo
    }}>
      {children}
    </GlobalContext.Provider>
  )

}