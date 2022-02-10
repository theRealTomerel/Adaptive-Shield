import React from 'react';
import Backdrop from '../ModalBackdrop/ModalBackdrop';
import './AlbumModal.css';

export default function AlbumModal(props) {
  return (
    <Backdrop onClick={props.onClick}>
          <div className="modal">
            <div className="ModalImageContainer">
                <img src={props.photoData.url} className="ModalThumbnailImage"></img>
            </div>
            <div className="ModalContentContainer">
            <div className="ModalContainer">
                <h2 className="photoTitle">{props.photoData.title}</h2>
            </div>
                <h3 className="albumId">album-id:{props.photoData.albumId}</h3>
                <h3 className="albumId">photo-id:{props.photoData.id}</h3>
            </div>
          </div>
      </Backdrop>
  )
}
