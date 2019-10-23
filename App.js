import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MyCoolComponent from './src/MyCoolComponent'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Open up App.js to start working on your app!</Text>
      <Text style={styles.text}>Open up App.js to start working on your app!</Text>
      <MyCoolComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  text: {
    flex: 1,
    padding: 5,
    margin: 10,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'red'
  }
});
