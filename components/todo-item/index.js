import React from 'react';
import {Text, TouchableWithoutFeedback, View, StyleSheet} from 'react-native';
import Icon from 'react-native-ionicons';

function TodoItem({text, onComplete, onDelete, completed}) {
  return (
    <View style={styles.container}>
      <View styles={styles.item}>
        <Text style={styles.text}>{text}</Text>
      </View>
      <View style={styles.actions}>
        <View style={styles.spacer}>
          <TouchableWithoutFeedback onPress={onComplete}>
            <Icon
              name={completed ? 'checkbox' : 'checkbox-outline'}
              size={28}
              color={'#000000'}
            />
          </TouchableWithoutFeedback>
        </View>
        <View>
          <TouchableWithoutFeedback onPress={onDelete}>
            <Icon name="trash" size={28} color={'#000000'} />
          </TouchableWithoutFeedback>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
  },
  text: {
    color: 'black',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  spacer: {
    marginRight: 16,
  },
});

export default TodoItem;
