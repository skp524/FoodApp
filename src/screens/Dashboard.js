import React, { useState } from 'react';
import { Text, View, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import UseResponse from '../hooks/UseResponse';
import ResultsList from '../components/ResultsList';

const Dashboard = () => {

  const [searchKey, setSearchKey] = useState('');
  const [fetchRestaurants, response, errorMsg] = UseResponse();

  const filterResponseByPrice = (price) => {
    return response.filter(response => {
      return response.price === price;
    });
  }
  return (
    <>
      <SearchBar
        searchKey={searchKey}
        onChange={value => setSearchKey(value)}
        onSubmit={() => fetchRestaurants(searchKey)}
      />
      <Text>{errorMsg}</Text>
      <ScrollView>
        <ResultsList title='Cost Effective' response={filterResponseByPrice('$')} />
        <ResultsList title='Bit Pricer' response={filterResponseByPrice('$$')} />
        <ResultsList title='Big Spender!' response={filterResponseByPrice('$$$')} />
      </ScrollView>
    </>
  );
}
export default Dashboard;