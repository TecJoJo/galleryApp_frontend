import React from 'react'
import GalleryList from '../presentational/GalleryList'
import Navigator from '../presentational/Navigator'
import SearchBar from '../presentational/SearchBar'

function Home() {
  return (
    <>
    <Navigator/>
    <SearchBar/>
    <GalleryList/>
    </>
    
  )
}

export default Home