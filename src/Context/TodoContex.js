import React, { createContext, useReducer } from "react";

export const TodoProvider = createContext();

const initState = {
  todos: [
    { id: 1, task: "Buy Milk", done: false },
    { id: 2, task: "Meeting With Wife", done: false },
  ],
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, payload],
      };

    case "DELETE_TODO":
      const newTodo = state.todos.filter(todo => todo.id !== payload);
      return {
        ...state,
        todos: newTodo,
      };

    case "UPDATE_TODO":
      const updateTodo = state.todos.map(todo =>
        todo.id === payload.id ? payload : todo,
      );
      return {
        ...state,
        todos: updateTodo,
      };

    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === payload ? { ...todo, done: !todo.done } : todo,
        ),
      };

    default:
      return state;
  }
};

const TodoContex = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);

  const addTodo = todo => {
    dispatch({
      type: "ADD_TODO",
      payload: todo,
    });
  };

  const removeTodo = id => {
    dispatch({
      type: "DELETE_TODO",
      payload: id,
    });
  };

  const updateTodo = todo => {
    dispatch({
      type: "UPDATE_TODO",
      payload: todo,
    });
  };

  const toggleTodo = id => {
    dispatch({
      type: "TOGGLE_TODO",
      payload: id,
    });
  };

  return (
    <TodoProvider.Provider
      value={{ state, addTodo, removeTodo, updateTodo, toggleTodo }}>
      {children}
    </TodoProvider.Provider>
  );
};

export default TodoContex;
