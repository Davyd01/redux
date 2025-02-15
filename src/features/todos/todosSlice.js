import { createSlice } from '@reduxjs/toolkit';

export const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [], 
  },
  reducers: {
    addTodo: (state, action) => {
      state.items.push(action.payload); 
    },
  },
});

export const { addTodo } = todosSlice.actions;

export const selectTodos = (state) => state.todos.items;

export default todosSlice.reducer;
