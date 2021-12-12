import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import ToDoReducer from './reducers/ToDoReducer';

const configureStore = () => {
  const middlewares = [thunk];
  const enhancers = compose(applyMiddleware(...middlewares));
  const reducers = combineReducers({
    toDo: ToDoReducer,
  });
  const store = createStore(reducers, enhancers);

  return store;
};
export default configureStore;
