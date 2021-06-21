const immutableReducer = (state = ['Do not mutate state!'], action) => {
    switch(action.type) {
      case 'ADD_TO_DO':
        let newArray = [...state]
        newArray.push(action.todo)
        return newArray
      default:
        return state;
    }
  };
  
  const addToDo = (todo) => {
    return {
      type: 'ADD_TO_DO',
      todo
    }
  }
  
  const store = Redux.createStore(immutableReducer);