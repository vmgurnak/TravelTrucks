// const { VITE_API_URL } = import.meta.env;

import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io',

  // baseURL: VITE_API_URL,
});

export const requestCampers = async () => {
  const {
    data: { items },
  } = await instance.get('/campers');

  return items;
};

export const requestCamperID = async id => {
  const { data } = await instance.get(`/campers/${id}`);
  return data;
};
