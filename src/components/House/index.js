import './index.scss';

import React, { useState, useEffect } from 'react';

import ImageGallery from 'react-image-gallery';

const House = () => {
    const [roomDisplay, setRoomDisplay] = useState();

    const handleClick = event => {
        if (roomDisplay === event) {
            setRoomDisplay("")
        }
        else {
            setRoomDisplay(event);
        }
    }

    // Consider rewriting button to a component

    const images = [
        {
            original: 'https://picsum.photos/id/1018/1000/600/',
            thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1015/1000/600/',
            thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
    ];

    return (
        <div className='container house-page'>
            <div className="room-nav-bar">
                <div className="grid-container">
                    <div className="grid-item">
                        <button className={`button ${roomDisplay === "communal" ? 'button-active' : ''}`} onClick={() => handleClick("communal")}>Communal Space</button>
                    </div>
                    <div className="grid-item">
                        <button disabled className={`button ${roomDisplay === "bedroom-1" ? 'button-active' : ''}`} onClick={() => handleClick("bedroom-1")}>Bedroom 1</button>
                    </div>
                    <div className="grid-item">
                        <button className={`button ${roomDisplay === "bedroom-2" ? 'button-active' : ''}`} onClick={() => handleClick("bedroom-2")}>Bedroom 2</button>
                    </div>
                    <div className="grid-item">
                        <button disabled className={`button ${roomDisplay === "bedroom-3" ? 'button-active' : ''}`} onClick={() => handleClick("bedroom-3")}>Bedroom 3</button>
                    </div>
                </div>
            </div>
            <div className="gallery-zone">
                <ImageGallery items={images} />
            </div>
        </div>
    )
}

export default House;