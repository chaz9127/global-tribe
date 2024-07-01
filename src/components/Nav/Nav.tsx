import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

const Links = [
    {
        to: '/',
        text: 'home'
    },
    {
        to: '/about',
        text: 'about us'
    },
    {
        to: '/contact',
        text: 'contact'
    },
];

const Nav = () => {
    const [showMobileNav, setShowMobileNav] = useState(false);
    const getNavLinkClass = (link: string) => {
        const activeClass = link === window.location.pathname ? 'active' : '';
        return `${activeClass}`;
    };
    
    const closeNav = () => {
        setShowMobileNav(false);
    };
    const showNav = () => {
        setShowMobileNav(true);
    };
    return (
        <nav className="nav">
            <div className="logo">
                <Link className="logo-link" to="/">
                    <img src="/logo.jpg" alt="Global Tribe Logo" />
                    <h1 className="title">Global<span className="orange">Tribe</span></h1>
                </Link>
            </div>
            <div className="nav-links desktop">
                {Links.map((link, idx) => (
                    <Link
                        className={getNavLinkClass(link.to)}
                        key={idx}
                        to={link.to}
                    >
                        {link.text}
                    </Link>
                ))}
            </div>
            <div className="nav-links mobile">
                <i onClick={showNav} className="fa-solid fa-bars menu-bars"></i>
                <div  className={`${showMobileNav ? 'show-mobile-nav' : ''} mobile-nav-links`}>
                    <div className="close-button" onClick={closeNav}>
                        <i className="fa-solid fa-xmark"></i>
                    </div>
                    <ul>
                        {Links.map((link, idx) => (
                            <li key={idx}
                            >
                                <Link
                                    className={getNavLinkClass(link.to)}
                                    to={link.to}
                                >
                                    {link.text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )   
}

export default Nav;