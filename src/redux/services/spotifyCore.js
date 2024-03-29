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
      }),  
    }),
      getGenre: builder.query({
        query: () => ({
        url: '/genre_view/',
        method: 'GET',
        params: {id: '0JQ5DAqbMKFEC4WFtoNRpw', content_limit: '10', limit: '20'},
        }),
      }),
      getTracks: builder.query({
        query: () => ({
        url: '/tracks/',
        method: 'GET',
        params: {ids: '4WNcduiCmDNfmTEz7JvmLv'},
        }),
      }),
      getTrackLyrics: builder.query({
        query: (songId) => ({
        url: '/track_lyrics/',
        method: 'GET',
        params: {id: songId },
        }),
      }),
      getArtistDetails: builder.query({
        query: (artistId) => ({
        url: '/artist_overview/',
        method: 'GET',
        params: {id: artistId },
        }),
      }),
      getConcerts: builder.query({
        query: () => ({
        url: '/concerts/',
        method: 'GET',
        params: {gl: 'US'},
        }),
      }),
  }),
});

export const {
  useGetAlbumsQuery,
  useGetAlbumTracksQuery,
  useGetPlaylistsQuery,
  useGetPlaylistTracksQuery,
  useGetGenreQuery,
  useGetTrackLyricsQuery,
  useGetArtistDetailsQuery,
  useGetConcertsQuery
} = spotifyApi;
