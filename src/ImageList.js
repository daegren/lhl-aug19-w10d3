import React from "react";
import { FlatList, View, Image } from 'react-native'

const ImageList = ({ images }) => {
  return <FlatList
    style={{ width: '100%' }}
    data={images}
    renderItem={flatListItem => <Item image={flatListItem.item} />}
    keyExtractor={item => item.id}
  />;
}

const Item = ({ image }) => {
  return (
    <View style={{ width: 150, height: 150, justifyContent: 'center', alignItems: 'center' }}>
      <Image style={{ width: 140, height: 140 }}
        source={{ uri: image.src }} />
    </View>
  )
}

export default ImageList;
