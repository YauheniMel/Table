import {
  DELETE_SONGS,
  GET_ALL_SONGS_COUNT,
  GET_SONG,
  GET_SONGS,
  SET_IS_LOADING,
  SET_SONG_RATING,
  SORT_SONGS,
} from './actions.js';
import { sortListBy } from '../utils/sortListBy';

const initState = {
  songs: [],
  targetSong: {},
  allSongsCount: 0,
  isLoading: false,
};

export default function reducer(state = initState, action) {
  switch (action.type) {
    case GET_SONGS:
      return {
        ...state,
        songs: action.payload,
      };
    case GET_SONG:
      return {
        ...state,
        targetSong: action.payload,
      };
    case SORT_SONGS: {
      const songs = sortListBy(
        {
          name: action.payload.parameter,
          isAscending: action.payload.isAscending,
        },
        state.songs
      );

      return {
        ...state,
        songs,
      };
    }
    case GET_ALL_SONGS_COUNT:
      return {
        ...state,
        allSongsCount: action.payload,
      };
    case SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case SET_SONG_RATING: {
      const songs = state.songs.map((song) => {
        if (song.id === action.payload.id) {
          return {
            ...song,
            rating: action.payload.rating,
          };
        }

        return song;
      });

      return {
        ...state,
        songs,
      };
    }
    case DELETE_SONGS: {
      const songs = state.songs.filter(
        (song) => !action.payload.includes(song.id)
      );

      return {
        ...state,
        songs,
      };
    }
    default:
      return state;
  }
}
