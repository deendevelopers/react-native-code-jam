import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Layout from '../../components/layout';

function Completed() {
  return (
    <Layout>
      <View style={styles.container}>
        <Text>This is the completed screen</Text>
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Completed;
