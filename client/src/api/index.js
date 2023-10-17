import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:5000',
});

const api = createApi({
  baseQuery,
  tagTypes: ['Guide', 'User'],
  endpoints: () => ({}),
});

export default api;
