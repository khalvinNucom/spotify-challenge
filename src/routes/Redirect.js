import React,{useEffect} from 'react'
import axios from 'axios'
import {useHistory} from 'react-router-dom';
import {setAuth} from '../utils/setAuth'

const Redirect = () => {
  
  let history = useHistory();
  const setToken = () => {
    const hash = window.location.hash
  .substring(1)
  .split("&")
  .reduce(function(initial, item) {
    if (item) {
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
    }
    return initial;
  }, {});

    localStorage.setItem('token', hash.access_token)
  } 

 
  useEffect(() => {
    setToken()
    setAuth()
    history.push('/')
  }, [])


  return (
    null
  )
}

export default Redirect
