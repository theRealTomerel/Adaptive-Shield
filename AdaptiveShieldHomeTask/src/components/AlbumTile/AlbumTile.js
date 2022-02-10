import React from "react";
import './AlbumTile.css';

const AlbumTile = (props)=>{
    const openModal = ()=>{
        props.setCurrentPhoto(props.photoData);
        props.toggleModal();
    }
    return(
        <div className="tile">
            <div className="tileImageContainer">
                <img src={props.photoData.url} className="thumbnailImage" onClick={openModal}></img>
            </div>
            <div className="tileContentContainer">
                <div className="titleContainer">
                    <h2 className="photoTitle">{props.photoData.title}</h2>
                </div>
                <h3 className="albumId">id:{props.photoData.albumId}</h3>
                <div className="url">
                    <p className="urlText">{props.photoData.url}</p>
                </div>
            </div>
        </div>
        )
}

export default AlbumTile;