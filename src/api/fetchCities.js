import axios from 'axios'
import {API_URL_CITY, API_KEY} from '../constants'
export const fetchCities = async () => {
      return await axios.get(`${API_URL_CITY}`, {
        headers: { "X-Api-Key": API_KEY }
      });
   
  };