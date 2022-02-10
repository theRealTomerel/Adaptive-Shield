import React from 'react';
import './ModalBackdrop.css';

export default function ModalBackdrop(props) {
  return (
    <div className="backdrop" onClick={props.onClick}>
        {props.children}
    </div>
  )
}
