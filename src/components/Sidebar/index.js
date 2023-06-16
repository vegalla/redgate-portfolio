import './index.scss';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare, faHome, faMap, faQuestion, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
    return (
        <div className='nav-bar'>
            <nav>
                <NavLink exact="true" activeclassname="active" to="/">
                    <FontAwesomeIcon icon={faSquare} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="house-page" to="/house">
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="neighborhood-page" to="/neighborhood">
                    <FontAwesomeIcon icon={faMap} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="faq-page" to="/faq">
                    <FontAwesomeIcon icon={faQuestion} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="contact-page" to="/contact">
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                </NavLink>
            </nav>
        </div>
    )
}
export default Sidebar;