import React from 'react';
import './DropDownItem.css';

export default function DropDownItem(props) {
  return (
    <option value={props.albumId} className="dropDownItem">
        {props.albumId}
    </option>
  )
}
