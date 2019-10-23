import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from 'react-native'

const SearchBar = ({ search }) => {
  const [value, setValue] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={text => setValue(text)}
        value={value}
      />
      <Button title="😻" onPress={() => {
        search(value);
        setValue('')
      }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 10,
    flexDirection: 'row'
  },
  input: {
    padding: 5,
    borderColor: 'gray',
    borderWidth: 1,
    height: 40,
    flex: 1
  }
})

export default SearchBar;
