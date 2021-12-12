import {ADD_TODO, DELETE_TODO} from './ToDoActionsTypes';

export const addToDo = toDoName => ({
  type: ADD_TODO,
  payload: toDoName,
});

export const deleteToDo = toDoName => ({
  type: DELETE_TODO,
  payload: toDoName,
});
