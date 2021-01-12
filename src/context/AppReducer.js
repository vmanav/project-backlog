/* eslint-disable import/no-anonymous-default-export */
export default (state, action) => {
  switch (action.type) {
    case 'ADD_LIST': {
      state.list.push({ listName: action.payload.listName, data: [], len: -1, id: state.llen + 1 })
      return {
        ...state,
      }
    }
    case 'DELETE_LIST': {
      if (state.selectedList === action.payload.listId) {
        return {
          ...state,
          list: state.list.filter((l) => l.id !== action.payload.listId),
          selectedList: -1,
        }
      }
      // else
      return {
        ...state,
        list: state.list.filter((l) => l.id !== action.payload.listId)
      }

    }
    case 'SET_SELECTED_LIST':
      return {
        ...state,
        selectedList: action.payload.listId
      }
    // case 'TODO_STATUS_TOGGLE': {
    //   const newList = state.list.map((l) => {
    //     if (l.id === action.payload.listId) {
    //       l.data.map((t) => {
    //         if (t.id === action.payload.todoId) {
    //           t.completed = !t.completed;
    //           return t;
    //         } else {
    //           return t;
    //         }
    //       })
    //     } else {
    //       return l;
    //     }
    //   })
    //   console.log("newList : ", newList);
    //   return {
    //     ...state,
    //     list: newList
    //   }
    // }
    // case 'ADD_TRANSACTION':
    //   return {
    //     ...state,
    //     transactions: [action.payload, ...state.transactions]
    //   }
    default: return state
  }
}