import { useState, useEffect } from 'react';
import Yelp from '../api/Yelp';

export default () => {
  const [response, setResponse] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');

  const fetchRestaurants = async (term) => {
    try {
      const response = await Yelp.get('search', {
        params: {
          limit: 50,
          term,
          location: 'san jose'
        }
      });
      setResponse(response.data.businesses);
    }
    catch (e) {
      setErrorMsg('Something went wrong');
    }
  }

  useEffect(() => { fetchRestaurants('pasta'); }, []);

  return [fetchRestaurants, response, errorMsg];
}