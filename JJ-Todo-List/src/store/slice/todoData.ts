import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TodoData } from '../../types/TodoData';

const initialState: TodoData[] = [];

export const todoDataSlice = createSlice({
  name: 'todoData',
  initialState,
  reducers: {
    addTodo(state: TodoData[], action: PayloadAction<TodoData>) {
      state.push(action.payload);
    },
    removeTodo(state: TodoData[], action: PayloadAction<string>) {
      const updateState = state.filter((item) => item.id !== action.payload);
      state.splice(0, state.length, ...updateState);
    },
    editTodo(
      state: TodoData[],
      action: PayloadAction<{ id: string; newText: string }>
    ) {
      const { id, newText } = action.payload;
      state.forEach((item) => {
        if (item.id === id) {
          item.text = newText;
        }
      });
    },
    completeTodo(state: TodoData[], action: PayloadAction<string>) {
      state.forEach((item) => {
        if (item.id === action.payload) {
          item.done = !item.done;
        }
      });
    },
  },
});

export const { addTodo, removeTodo, editTodo, completeTodo } =
  todoDataSlice.actions;
export const todoDataReducer = todoDataSlice.reducer;
