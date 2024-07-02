import { Link } from 'react-router-dom';
import './Footer.scss';

const Footer: React.FC = () => {
    return (
        <footer>
            <div className="footer-content">
                <div className="footer-inner">
                    <div className="footer-column">
                        <div className="footer-logo">
                            <img src="/logo.png" alt="Global Tribe Logo" />
                            <span>Global<span className="orange">Tribe</span></span>
                        </div>
                        <div className="footer-mission-statement">
                            Dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua.
                        </div>
                    </div>
                    <div className="footer-column quick-link-column">
                        <span className="footer-header">Quick Links</span>
                        <ul className="quick-links">
                            <li>
                                <Link to="/">
                                    <i className="fa-solid fa-arrow-right link-arrow"></i>Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/about">
                                    <i className="fa-solid fa-arrow-right link-arrow"></i>About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact">
                                    <i className="fa-solid fa-arrow-right link-arrow"></i>Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <span className="footer-header">Contact Info</span>
                        <ul className="contact-links">
                            <li>
                                <Link to="https://maps.google.com" target='_blank'>
                                    <i className="fa-solid fa-location-dot link-arrow"></i>
                                    <span>
                                        123 Fake St.<br />
                                        P.O. Box 456<br />
                                        Boca Raton, Flordia 12345
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link to="tel:1-555-123-4567">
                                    <i className="fa-solid fa-mobile-screen link-arrow"></i>
                                    <span>
                                        +1-555-123-4567
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link to="mailto:contact@globaltribe.com">
                                    <i className="fa-regular fa-paper-plane link-arrow"></i>contact@globaltribe.com
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;