import {
  SET_NEW_RELEASES
} from './types';

import axios from 'axios';
import config from '../config'

const { api:{baseUrl}} = config


export const fetchNewReleases = () => (dispatch) => {
  console.log('inside dispatch')

  axios.get(`${baseUrl}/browse/new-releases`).then(({ data }) => {
    console.log('%c ⚠ data ', 'color:yellow;background:black;padding:5px;', data)
    
    dispatch({
      type:SET_NEW_RELEASES,
      payload:data?.albums?.items
    })

  })

}