import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

function Layout({children}) {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>{children}</ScrollView>
      </View>
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
