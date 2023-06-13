import './index.scss';

import React, { useRef } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDog } from '@fortawesome/free-solid-svg-icons';


const Contact = () => {
    const form = useRef();

    return (
        <div className="container contact-page">
            <div className="text-zone">
                <h1>Inquire about Room Availability</h1>
                <div className="contact-form">
                    <form ref={form}>
                        <ul>
                            <li className="half">
                                <input placeholder="Name" type="text" name="name" required />
                            </li>
                            <li className="half">
                                <input
                                    placeholder="Email"
                                    type="email"
                                    name="email"
                                    required
                                />
                            </li>
                            <li>
                                <input
                                    placeholder="Subject"
                                    type="text"
                                    name="subject"
                                    required
                                />
                            </li>
                            <li>
                                <textarea
                                    placeholder="Message"
                                    name="message"
                                    required
                                ></textarea>
                            </li>
                            <li>
                                <input type="submit" className="flat-button" value="SEND" />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
            <div className="resident-profile">
                <h1>Millie</h1>
                <div className="pfp">
                    <FontAwesomeIcon icon={faDog} size="9x" color="#4d4de" />
                </div>
                <div>
                    <p>I'm a dog~</p>
                </div>
            </div>
        </div>
    )
}

export default Contact;