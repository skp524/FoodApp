import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const SearchBar = ({ searchKey, onSubmit, onChange }) => {
  return (
    <View style={styles.container}>
      <Icon name='search' style={styles.iconStyle} />
      <TextInput
        placeholder='Search'
        value={searchKey}
        onChangeText={(value) => onChange(value)}
        onEndEditing={onSubmit}
        style={styles.inputText}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    borderRadius: 5,
    backgroundColor: '#F0EEEE'
  },
  iconStyle: {
    fontSize: 35
  },
  inputText: {
    flex: 1,
    marginLeft: 15,
    fontSize: 18
  }
});
export default SearchBar;