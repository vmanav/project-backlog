/* eslint-disable import/no-anonymous-default-export */
export default (state, action) => {
  switch (action.type) {
    case 'ADD_LIST': {
      state.list.push({ listName: action.payload.listName, data: [] })
      return {
        ...state,
      }
    }
    case 'DELETE_LIST':
      return {
        ...state,
        list: state.list.filter((l) => l.listName !== action.payload.listName)
      }
    case 'SET_SELECTED_LIST':
      return {
        ...state,
        selectedList: action.payload.listName
      }


    // case 'ADD_TRANSACTION':
    //   return {
    //     ...state,
    //     transactions: [action.payload, ...state.transactions]
    //   }
    default: return state
  }
}