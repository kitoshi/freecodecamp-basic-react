// Define ADD, addMessage(), messageReducer(), and store here:

const ADD = 'ADD'

const addMessage = message => {
  return {
    type: ADD,
    message
  }
}

const messageReducer = (state  = [], action) => {
  switch(action.type){
    case ADD:
    const newArr = state.concat(action.message)
    return newArr

    default:
    return state
  }
}

const store = Redux.createStore(messageReducer)

