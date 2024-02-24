import Logo from '../assets/logo.svg'
import Facebook from '../assets/shared/facebook.svg'
import Twitter from '../assets/shared/twitter.svg'
import Pinterest from '../assets/shared/pinterest.svg'
import Instagram from '../assets/shared/instagram.svg'
import YouTube from '../assets/shared/youtube.svg'

import arrow from '../assets/shared/arrow-white.svg'

function Footer() {
    return (
        <footer className="footer__container">
            <img src={Logo} alt="" className="footer__logo" />

            <div className="footer__socials">
                <a href="/" className="social__item"> <img src={Facebook} alt="Facebook logo" className="social__icon" /></a>
                <a href="/" className="social__item"> <img src={YouTube} alt="YouTube logo" className="social__icon" /></a>
                <a href="/" className="social__item"> <img src={Twitter} alt="Twitter logo" className="social__icon" /></a>
                <a href="/" className="social__item"> <img src={Pinterest} alt="Pinterest logo" className="social__icon" /></a>
                <a href="/" className="social__item"> <img src={Instagram} alt="Instagram logo" className="social__icon" /></a>
            </div>

            <div className="footer__links">
                <a href="/" className="u-link">Home</a>
                <a href="/stories" className="u-link">Stories</a>
                <a href="/features" className="u-link">Features</a>
                <a href="/pricing" className="u-link">Pricing</a>
            </div>

            <a href="/" className="u-link footer__link">Get an invite <img src={arrow} className="link__arrow"/></a>

            <p className="footer__copy">Website developed by Ryan Nisbet.</p>
            
        </footer>
    )
}

export default Footer
