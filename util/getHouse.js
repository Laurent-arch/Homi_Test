import axios from 'axios';

export async function fetchHouseList() {
  try {
    const res = await axios.get('http://localhost:3001/api/houses');
    return res.data;
  } catch (error) {
    console.error('Error fetching house data:', error);
    return [];
  }
}