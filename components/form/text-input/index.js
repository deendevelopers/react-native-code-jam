import React from 'react';
import {Field, getIn} from 'formik';
import {View, Text, TextInput as RNTextInput, StyleSheet} from 'react-native';

export default function TextInput({
  name,
  placeholder = '',
  onChangeText,
  onBlur,
  style,
}) {
  return (
    <Field name={name}>
      {({field, form}) => {
        const errors = getIn(form.errors, name);
        const touched = getIn(form.touched, name);
        const isInvalid = !!errors && !!touched;

        return (
          <View style={[styles.container, style ? style : null]}>
            <RNTextInput
              style={[styles.input, isInvalid ? styles.inputError : null]}
              value={field.value}
              onChangeText={
                onChangeText
                  ? (text) => {
                      onChangeText(text);
                    }
                  : field.onChange
              }
              onBlur={onBlur}
              placeholder={placeholder}
            />
            {isInvalid && (
              <View style={styles.errorContainer}>
                <Text style={styles.errorMessage}>{form.errors[name]}</Text>
              </View>
            )}
          </View>
        );
      }}
    </Field>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 45,
    paddingVertical: 10,
    paddingRight: 10,
    flex: 1,
    color: '#000000',
    fontSize: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#000000',
  },
  inputError: {
    borderBottomColor: '#ff0000',
  },
  errorContainer: {
    marginTop: 5,
  },
  errorMessage: {
    color: '#ff0000',
  },
});
