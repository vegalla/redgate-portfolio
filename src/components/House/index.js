import './index.scss';

import React, { useState, useEffect } from 'react';

const House = () => {
    const [roomDisplay, setRoomDisplay] = useState('communal');

    const handleClick = event => {
        setRoomDisplay(event);
        console.log(roomDisplay)
    }

    // Consider rewriting button to a component

    return (
        <div className='container house-page'>
            <div className="room-nav-bar">
                <div className="grid-container">
                    <div className="grid-item">
                        <button className="button" onClick={() => handleClick("communal")}>Communal Space</button>
                    </div>
                    <div className="grid-item">
                        <button disabled className="button" onClick={() => handleClick("bedroom-1")}>Bedroom 1</button>
                    </div>
                    <div className="grid-item">
                        <button className="button" onClick={() => handleClick("bedroom-2")}>Bedroom 2</button>
                    </div>
                    <div className="grid-item">
                        <button disabled className="button" onClick={() => handleClick("bedroom-3")}>Bedroom 3</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default House;