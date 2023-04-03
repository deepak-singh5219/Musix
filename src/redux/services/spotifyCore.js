import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import axios from 'axios';

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://spotify23.p.rapidapi.com',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  prepareHeaders: (headers) => {
    headers.set('X-RapidAPI-Key', 'e824587f6dmsh639569ffbc02a34p1e1278jsnfa23b31c52c4');
    return headers;
  },
  // Add URL query params using the `prepareParams` option
  prepareParams: () => {
    const parameters = {
      ids: '3IBcauSj5M2A6lTeffJzdv',
    };
    return parameters;
  },
});

export const spotifyApi = createApi({
  reducerPath: 'spotifyApi',
  baseQuery,
  endpoints: (builder) => ({
    getAlbums: builder.query({
      query: () => ({
        url: '/albums/',
        method: 'GET',
        params: {
          ids: '3IBcauSj5M2A6lTeffJzdv',
        },
      }),
    }),
    
  }),
});

export const {
  useGetAlbumsQuery,
} = spotifyApi;
