import React from 'react'
import '../Css/Popup.css'
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

function Popup(props) {
    const {trigger} = props;
    return (
        trigger &&
        <div className="popup">
            <div className="popup-inner">
                <IconButton className="close-btn" onClick={() => props.setTrigger(false)}>
                    <CloseIcon fontSize={"small"}/></IconButton>
                {props.children}
            </div>
        </div>
    )
}

export default Popup
