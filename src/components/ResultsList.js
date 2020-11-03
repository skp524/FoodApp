import React from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import ResultDetails from './ResultDetails';

const ResultsList = ({ title, response, navigation }) => {
  if (!response.length) {
    return null;
  }
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        data={response}
        horizontal
        key={(response) => response.id}
        renderItem={({ item }) => {
          return (
            <View>
              <TouchableOpacity onPress={() => navigation.navigate('RestaurantDetails', {
                id: item.id
              })}>
                <ResultDetails item={item} />
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: 'bold'
  }
});
export default withNavigation(ResultsList);