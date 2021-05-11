import {
  SET_NEW_RELEASES,
  SET_FEATURED_PLAYLIST,
  SET_CATEGORIES
} from './types';

import axios from 'axios';
import config from '../config'

const { api:{baseUrl}} = config


export const fetchNewReleases = () => (dispatch) => {
  console.log('inside dispatch')

  axios.get(`${baseUrl}/browse/new-releases`).then(({ data }) => {

    dispatch({
      type:SET_NEW_RELEASES,
      payload:data?.albums?.items
    })
  })
}

export const fetchPlaylist = () => (dispatch) => {
  
  axios.get(`${baseUrl}/browse/featured-playlists`).then(({ data }) => {
    
    console.log('playlist', data?.playlists?.items)
    
    dispatch({
      type:SET_FEATURED_PLAYLIST,
      payload:data?.playlists?.items
    })
  })
}

export const fetchCategories = () => (dispatch) => {
  console.log('inside dispatch')

  axios.get(`${baseUrl}/browse/categories`).then(({ data }) => {
    console.log('categories', data)

    dispatch({
      type:SET_CATEGORIES,
      payload:data?.categories?.items
    })
  })
}