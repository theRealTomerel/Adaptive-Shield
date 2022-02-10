import React from 'react';
import './SearchBar.css';

export default function SearchBar(props) {
  const filterPhotos = (e)=>{
    props.setAlbumPhotos(props.photosData.filter((photoData)=>photoData.title.includes(e.target.value)))//filter the full photos collection accourding to the inserted values
  }
  return (
    <input type="text" className="searchBar" placeholder="Search Photo" onChange={filterPhotos}/>
  )
}
