import {
  SET_NEW_RELEASES
} from '../actions/types';

const initialState = {
  newReleases:{
    loading:true,
    items:[]
  }
}

export default function ( state = initialState, action) {
  const {type,payload} = action

  switch (type) {
    case SET_NEW_RELEASES:
      return{
        ...state,
        newReleases:{
          loading:false,
          items:payload
        }
      }
   
    default:
      return{
        ...state
      }
  }
}