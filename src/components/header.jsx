import Logo from '../assets/logo.svg';
import { useState } from 'react';

import './layout.scss';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header__container">
            <img className="header__logo" src={Logo} alt="Photosnap" />

            <button className={`header__hamburger ${isMenuOpen ? 'close' : ''}`} onClick={toggleMenu}>
                <span className="hamburger__line"></span>
                <span className="hamburger__line"></span>
            </button>

            <div className={`navigation__container ${isMenuOpen ? '' : 'close'}`}>

                <ul className="navigation">
                    <li className="navigation__item"> <a href="/" className="navigation__link">Stories</a></li>
                    <li className="navigation__item"> <a href="/" className="navigation__link">Features</a></li>
                    <li className="navigation__item"> <a href="/" className="navigation__link">Pricing</a></li>
                </ul>
                
                <a href="/" className="navigation__btn btn btn--dark">Get an invite</a>
            </div>



            
        </header>


    )
}

export default Header;