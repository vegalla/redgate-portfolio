import './index.scss';

import { MapContainer, TileLayer } from 'react-leaflet'

import Marker from './Marker';
import { MARKERS } from './CONFIG';

const Neighborhood = () => {

    const markersList = MARKERS.map((marker) => (
        <Marker
            key={marker.header}
            header={marker.header}
            address={marker.address}
            description={marker.description}
        />
            
    ))

    return (
        <div className="container neighborhood-page">
            <div className="marker-text-zone">
                <h1>Cool Digs</h1>
                <div className="marker-container">
                    {markersList}
                </div>
            </div>
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