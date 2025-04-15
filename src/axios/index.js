import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://67efa3202a80b06b88951c8f.mockapi.io/api/v1',
});

export const axiosFileInstance = axios.create({
  baseURL: 'https://api.magicapi.dev/api/v1',
  headers: {
    'Content-Type': 'multipart/form-data',
    'x-magicapi-key': 'cm99qj1k80001ju04y7csv3rs',
  },
});
