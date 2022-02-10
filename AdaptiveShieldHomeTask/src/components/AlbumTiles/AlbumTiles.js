import React,{useState,useEffect} from "react";
import './AlbumTiles.css';
import AlbumTile from'../AlbumTile/AlbumTile';

const AlbumTiles = (props)=>{
    return(
        <div className="Tiles">
            {props.photosData.map((photoData)=><AlbumTile key={photoData.id} photoData={photoData}
             toggleModal={props.toggleModal} setCurrentPhoto={props.setCurrentPhoto}/>)}
        </div>
        )
}

export default AlbumTiles;