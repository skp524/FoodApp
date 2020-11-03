import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const ResultDetails = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: item.image_url }}
      />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.name}>{item.rating} Stars, {item.review_count} Reviews</Text>
      <Text style={styles.name}></Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  image: {
    width: 250,
    height: 120,
    padding: 5
  },
  name: {
    fontSize: 14,
    fontWeight: 'bold'
  }
});
export default ResultDetails;