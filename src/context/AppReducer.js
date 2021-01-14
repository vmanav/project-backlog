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
    case 'TODO_STATUS_TOGGLE': {
      for (let i in state.list) {
        // console.log("listItem : ", l);
        if (state.list[i].id === action.payload.listId) {
          for (let j in state.list[i].data) {
            if (state.list[i].data[j].id === action.payload.todoId) {
              console.log("UPDATE @ lid:", action.payload.listId, ", tid:", action.payload.todoId);
              state.list[i].data[j].completed = !state.list[i].data[j].completed;
              break;
            }
          }
          break;
        }
      }
      return {
        ...state
      }
    }
    // case 'ADD_TRANSACTION':
    //   return {
    //     ...state,
    //     transactions: [action.payload, ...state.transactions]
    //   }
    default: return state
  }
}