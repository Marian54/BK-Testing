import React, {useState} from 'react';
import Popup from "../common/Popup";

const PopupFromButton = () => {
    const [buttonPopup,setButtonPopup]= useState(true);
    return (
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
            <div class="textAreaStylePopup">
                <p>Parking lot was created.</p>
                <p>You can now add parking places.</p>
            </div>

            <div>
                <button class="outLinedButton buttonPopup1"><a href='/AddParkingLot' style={{color: 'inherit', textDecoration: 'none'}}>Add Now</a>
                </button>
                <button class="outLinedButton buttonPopup2" onClick={()=> setButtonPopup(false)}>Add Later</button>
            </div>
        </Popup>
    );
};

export default PopupFromButton;