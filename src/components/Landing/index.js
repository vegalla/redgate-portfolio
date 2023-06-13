import './index.scss';

import { Link } from 'react-router-dom';

import GhentPostcard from '../../assets/images/ghent-img.jpg';

const Landing = () => {
    return (
        <div className="container landing-page">
            <div className="gallery-zone-1">
                <img src={GhentPostcard} alt='Ghent Neighborhood' />
            </div>   
            {/* <div className="gallery-zone-2">
            </div> */}
            <div className="text-zone">
                <h1>Welcome Home</h1>
                <h2>
                    <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/home">Tour the House</Link> | <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/neighborhood">Explore the Neighborhood</Link>
                </h2>
                <Link to="/contact" className='flat-button'>INQUIRE ABOUT ROOM AVAILABILITY</Link>
            </div>
        </div>
    )
}

export default Landing;