import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

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
    getAlbumTracks: builder.query({
      query: () => ({
        url: '/album_tracks/',
        method: 'GET',
        params: {
          id: '3IBcauSj5M2A6lTeffJzdv',
          offset: '0',
          limit: '300',
        },
      }),
    }),
    getPlaylists: builder.query({
      query: () => ({
        url: '/playlist/',
        method: 'GET',
        params: {
          id: '37i9dQZF1DX4Wsb4d7NKfP',
        },
      }),
    }),
    getPlaylistTracks: builder.query({
      query: () => ({
        url: '/playlist_tracks/',
        method: 'GET',
        params: {id: '37i9dQZF1DX4Wsb4d7NKfP', offset: '0', limit: '100'}, 
      })
      
    })
  }),
});

export const {
  useGetAlbumsQuery,
  useGetAlbumTracksQuery,
  useGetPlaylistsQuery,
  useGetPlaylistTracksQuery
} = spotifyApi;
