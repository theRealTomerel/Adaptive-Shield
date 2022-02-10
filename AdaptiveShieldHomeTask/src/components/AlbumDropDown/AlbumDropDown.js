import React from 'react';
import './AlbumDropDown.css';
import DropDownItem from '../DropDownItem/DropDownItem';

export default function AlbumDropDown(props) {

    const filterPhotos = (e)=>{
      if(e.target.value!=="Select Album"){
        props.setAlbumPhotos(props.photosData.filter((photoData)=>photoData.albumId===Number(e.target.value)))//filter the photos by the album id
      }
      else{
        props.setAlbumPhotos(props.photosData)
      }
    }
  return (
    <div>
        <select name="albums" className="dropDownButton" onChange={filterPhotos}>
            <DropDownItem albumId={"Select Album"}/>
            {[...new Set((props.photosData.map((photoData)=>photoData.albumId)))].map((albumId)=><DropDownItem key={props.id} albumId={albumId}/>)}
        </select>

    </div>
  )
}
