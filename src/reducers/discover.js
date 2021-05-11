import {
  SET_NEW_RELEASES,
  SET_FEATURED_PLAYLIST,
  SET_CATEGORIES
} from '../actions/types';

const initialState = {
  newReleases: {
    loading: true,
    items: []
  },

  playlist: {
    loading: true,
    items: []
  },

  categories: {
    loading: true,
    items: []
  }
}

export default function (state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case SET_NEW_RELEASES:
      return {
        ...state,
        newReleases: {
          loading: false,
          items: payload
        }
      }

    case SET_FEATURED_PLAYLIST:
      return {
        ...state,
        playlist: {
          loading: false,
          items: payload
        }
      }


    case SET_CATEGORIES:
      return {
        ...state,
        categories: {
          loading: false,
          items: payload
        }
      }

    default:
      return {
        ...state
      }
  }
}