import './index.scss';

import { MapContainer, TileLayer } from 'react-leaflet'

const Neighborhood = () => {
    return (
        <div className="container">
            <div className='info-map'>
                West Ghent
                <br />
                Norfolk, VA
            </div>
            <div className="map-wrap">
                <MapContainer center={[36.86643, -76.30727]} zoom={13}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                </MapContainer>
            </div>
        </div>
    )
}

export default Neighborhood;