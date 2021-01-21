import React, {createContext, useCallback, useContext, useState} from 'react';
import createId from '../utils/create-id';

const DEFAULT_VALUE = {
  add: () => {},
  remove: () => {},
  update: () => {},
  todos: [
    {
      id: createId(),
      label: 'Go to the gym',
      completed: false,
    },
    {
      id: createId(),
      label: 'Read a book',
      completed: false,
    },
    {
      id: createId(),
      label: 'Learn a new skill',
      completed: false,
    },
  ],
};

export const TodosContext = createContext(DEFAULT_VALUE);

export const TodosContextProvider = ({children}) => {
  const [todos, setTodos] = useState(DEFAULT_VALUE.todos);

  const add = useCallback(
    (todo) => {
      const updatedTodos = [...todos, todo];
      setTodos(updatedTodos);
    },
    [todos],
  );

  const update = useCallback(
    (id) => {
      const updatedTodos = todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
      setTodos(updatedTodos);
    },
    [todos],
  );

  const remove = useCallback(
    (id) => {
      const updatedTodos = todos.filter((todo) => todo.id !== id);
      setTodos(updatedTodos);
    },
    [todos],
  );

  // console.log(JSON.stringify(todos, null, 2));

  return (
    <TodosContext.Provider
      value={{
        todos,
        add,
        remove,
        update,
      }}>
      {children}
    </TodosContext.Provider>
  );
};

export default function useTodos() {
  return useContext(TodosContext);
}
