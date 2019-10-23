import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchBar from './src/SearchBar';
import ImageList from './src/ImageList';

export default function App() {
  const [images, setImages] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const url = `https://reddit.com/r/aww/search.json?q=${searchTerm}&restrict_sr=true&type=link`
    if (!searchTerm) { return }

    console.log('fetching', url)

    fetch(url)
      .then(resp => resp.json())
      .then(json => {
        const items = json.data.children
        const images = items.map(child => ({
          id: child.data.id,
          src: child.data.thumbnail
        }))
        setImages(images);
      })
  }, [searchTerm])

  return (
    <View style={styles.container}>
      <SearchBar search={term => setSearchTerm(term)} />
      <ImageList images={images} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: 20
  }
});
