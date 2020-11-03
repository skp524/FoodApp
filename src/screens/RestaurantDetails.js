import React, { useEffect, useState } from 'react';
import { View, FlatList, Image, StyleSheet } from 'react-native';
import Yelp from '../api/Yelp';

const RestaurantDetails = ({ navigation }) => {

  const [response, setResponse] = useState([]);
  const id = navigation.getParam('id');

  const fetchImages = async (id) => {
    const response = await Yelp.get(`/${id}`);
    setResponse(response.data);
  }
  useEffect(() => { fetchImages(id); }, []);
  if (!response) {
    return null;
  }
  return (
    <View>
      <FlatList
        data={response.photos}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => {
          return (
            <View style={styles.container}>
              <Image
                style={styles.image}
                source={{ uri: item }}
              />
            </View>
          );
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 5
  },
  image: {
    width: 300,
    height: 200
  }
})
export default RestaurantDetails;