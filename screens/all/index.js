import React from 'react';
import {Alert, StyleSheet} from 'react-native';

import Layout from '../../components/layout';
import TodoItem from '../../components/todo-item';

function All() {
  function onCompletePress() {
    Alert.alert(
      'Complete Press',
      'You pressed the complete button',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {cancelable: true},
    );
  }

  function onDeletePress() {
    Alert.alert(
      'Delete Press',
      'You pressed the delete button',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {cancelable: true},
    );
  }

  return (
    <Layout>
      <TodoItem
        text="Make sure to read before going to bed"
        onComplete={onCompletePress}
        onDelete={onDeletePress}
      />
      <TodoItem
        text="Make sure to read before going to bed"
        onComplete={onCompletePress}
        onDelete={onDeletePress}
      />
      <TodoItem
        text="Make sure to read before going to bed"
        onComplete={onCompletePress}
        onDelete={onDeletePress}
      />
    </Layout>
  );
}

const styles = StyleSheet.create({});

export default All;
