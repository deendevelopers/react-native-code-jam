import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView} from 'react-native';

function Layout({children}) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>{children}</ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
});

export default Layout;
