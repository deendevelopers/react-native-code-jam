import React from 'react';
import {Alert, StyleSheet} from 'react-native';

import Layout from '../../components/layout';
import TodoItem from '../../components/todo-item';
import useTodos from '../../hooks/use-todos';

function All() {
  const {todos, remove, update} = useTodos();

  return (
    <Layout>
      {todos.map((todo) => {
        if (!todo.completed) {
          return (
            <TodoItem
              key={todo.id}
              text={todo.label}
              onComplete={() => remove(todo.id)}
              onDelete={() => update(todo.id)}
              completed={todo.completed}
            />
          );
        }
        return null;
      })}
    </Layout>
  );
}

export default All;
