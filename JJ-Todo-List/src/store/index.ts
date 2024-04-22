import { configureStore } from '@reduxjs/toolkit';
import { todoDataReducer } from './slice/todoData';
import { addTodo, removeTodo, editTodo, completeTodo } from './slice/todoData';

const store = configureStore({
  reducer: {
    todoData: todoDataReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store, addTodo, removeTodo, editTodo, completeTodo };
