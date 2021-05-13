import React, { Component, useState,useEffect } from 'react';
import DiscoverBlock from './DiscoverBlock/components/DiscoverBlock';
import '../styles/_discover.scss';
import config from '../../../config'
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux'
import { fetchNewReleases, fetchCategories, fetchPlaylist} from '../../../actions/discover';



const Discover = ()=>   {
const {api:{baseUrl, authUrl, redirectUrl, clientId}} = config
const dispatch = useDispatch()

const newReleases = useSelector(state => state.discover.newReleases)
const playlists = useSelector(state => state.discover.playlist)
const categories = useSelector(state => state.discover.categories)

if (!localStorage.getItem('token')) {
  window.location = `${authUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&response_type=token&show_dialog=true`
}


useEffect(() => {
  dispatch(fetchNewReleases())
  dispatch(fetchCategories())
  dispatch(fetchPlaylist())
}, [])

    return (
      <div className="discover">
        <DiscoverBlock text="RELEASED THIS WEEK" id="released" data={newReleases.items}   loading={newReleases.loading}/>
        <DiscoverBlock text="FEATURED PLAYLISTS" id="featured" data={playlists.items} loading={playlists.loading} />
        <DiscoverBlock text="BROWSE" id="browse" data={categories.items} imagesKey="icons"  loading={categories.loading}/>
      </div>
    );
  
}
 
export default Discover
