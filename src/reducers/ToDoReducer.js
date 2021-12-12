import {ADD_TODO, DELETE_TODO} from '../actions/ToDo/ToDoActionsTypes';

const INITIAL_STATE = {
  allToDo: [],
};

const ToDoReducer = (state = INITIAL_STATE, action) => {
  const {allToDo} = state;
  let toDoName, newState;

  switch (action.type) {
    case ADD_TODO:
      toDoName = action.payload;
      newState = {
        allToDo: [...allToDo, toDoName],
      };
      return newState;
    case DELETE_TODO:
      toDoName = action.payload;
      allToDo.splice(allToDo.indexOf(toDoName), 1);

      newState = {
        allToDo: [...allToDo],
      };
      return newState;
    default:
      return state;
  }
};

export default ToDoReducer;
