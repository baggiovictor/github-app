import axios from 'axios';
import { BASE_URL } from '../utils/url';


export const fetchGithubUsers = async () => {
  const response = await axios.get(`${BASE_URL}users?q=location:brazil`);
  return response.data;
};