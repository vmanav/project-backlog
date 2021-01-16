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
    case 'DELETE_ALL_LISTS':
      return {
        ...state,
        selectedList: -1,
        llen: -1,
        viewNotCompleted: true,
        list: []
      }
    case 'TODO_STATUS_TOGGLE': {
      for (let i in state.list) {
        // console.log("listItem : ", l);
        if (state.list[i].id === action.payload.listId) {
          for (let j in state.list[i].data) {
            if (state.list[i].data[j].id === action.payload.todoId) {
              // console.log("UPDATE @ lid:", action.payload.listId, ", tid:", action.payload.todoId);
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
    case 'ADD_TODO': {
      for (let i in state.list) {
        if (state.list[i].id === action.payload.selectedList) {
          state.list[i].data.push({
            title: action.payload.title,
            desc: action.payload.desc,
            pointers: action.payload.pointers,
            ref: action.payload.ref,
            completed: false,
            id: state.list[i].len + 1
          });
          state.list[i].len += 1;
          break;
        }
      }
      return {
        ...state
      }
    }
    case 'DELETE_TODO': {
      for (let i in state.list) {
        if (state.list[i].id === action.payload.listId) {
          const newTodos = state.list[i].data.filter((t) => t.id !== action.payload.todoId)
          // state.list[i].len -= 1;
          state.list[i].data = newTodos
          break;
        }
      }
      return {
        ...state
      }
    }
    case 'DELETE_ALL_TODO': {
      for (let i in state.list) {
        console.log("listItem : ", state.list[i]);
        console.log("action.payload.listId = ", action.payload.listId)
        if (state.list[i].id === action.payload.listId) {
          console.log("FFound")
          state.list[i].data = [];
          state.list[i].len = -1;
          break;
        }
      }
      return {
        ...state
      }
    }

    case 'EDIT_TODO': {
      for (let i in state.list) {
        if (state.list[i].id === action.payload.selectedList) {
          for (let j in state.list[i].data) {
            if (state.list[i].data[j].id === action.payload.id) {
              state.list[i].data[j].title = action.payload.title;
              state.list[i].data[j].desc = action.payload.desc;
              state.list[i].data[j].pointers = action.payload.pointers;
              state.list[i].data[j].ref = action.payload.ref;
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

    case 'SHOW_TODO_TOGGLE': {
      return {
        ...state,
        viewNotCompleted: !state.viewNotCompleted
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