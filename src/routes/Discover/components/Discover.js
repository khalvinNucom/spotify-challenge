import React, { Component, useState,useEffect } from 'react';
import DiscoverBlock from './DiscoverBlock/components/DiscoverBlock';
import '../styles/_discover.scss';
import config from '../../../config'
import axios from 'axios';
import {useDispatch} from 'react-redux'
import { fetchNewReleases } from '../../../actions/discover';



const Discover = ()=>   {
const {api:{baseUrl, authUrl, redirectUrl, clientId}} = config
const dispatch = useDispatch()

if (!localStorage.getItem('token')) {
  window.location = `${authUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&response_type=token&show_dialog=true`
}


  const [newReleases, setNewReleases] = useState([])
  const [playlists, setPlaylists] = useState([])
  const [categories, setCategories] = useState([])

  
useEffect(() => {
  dispatch(fetchNewReleases())
}, [])

    return (
      <div className="discover">
        <DiscoverBlock text="RELEASED THIS WEEK" id="released" data={newReleases} />
        <DiscoverBlock text="FEATURED PLAYLISTS" id="featured" data={playlists} />
        <DiscoverBlock text="BROWSE" id="browse" data={categories} imagesKey="icons" />
      </div>
    );
  
}

export default Discover
