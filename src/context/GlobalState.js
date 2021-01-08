import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial State
const initialState = {
  selectedList: '',
  list: [{
    listName: 'random',
    data: [{
      title: 'sampleTitle',
      desc: 'sampleDescription',
      pointers: 'samplePointers, samplePointers, samplePointers',
      ref: 'sampleRef.com, sampleRef.co'
    }, {
      title: 'sampleTitle2',
      desc: 'sampleDescription2',
      pointers: 'samplePointers, samplePointers, samplePointers2',
      ref: 'sampleRef2.com, sampleRef2.co'
    }]
  },
  {
    listName: 'secondRandom',
    data: [{
      title: 'sampleTitle',
      desc: 'sampleDescription',
      pointers: 'samplePointers, samplePointers, samplePointers',
      ref: 'sampleRef.com, sampleRef.co'
    }, {
      title: 'sampleTitle2',
      desc: 'sampleDescription2',
      pointers: 'samplePointers, samplePointers, samplePointers2',
      ref: 'sampleRef2.com, sampleRef2.co'
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

  function deleteList(listName) {
    dispatch({
      type: 'DELETE_LIST',
      payload: {
        listName: listName
      }
    })
  }

  function setSelectedList(listName) {
    dispatch({
      type: 'SET_SELECTED_LIST',
      payload: {
        listName: listName
      }
    })
  }

  return (
    <GlobalContext.Provider value={{
      list: state.list,
      selectedList: state.selectedList,
      addList,
      deleteList,
      setSelectedList
    }}>
      {children}
    </GlobalContext.Provider>
  )

}