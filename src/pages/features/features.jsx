
import HeroImgMobile from '../../assets/features/mobile/hero.jpg';
import HeroImgTablet from '../../assets/features/tablet/hero.jpg';
import HeroImgDesktop from '../../assets/features/desktop/hero.jpg';

import FeatureImg1 from '../../assets/features/responsive.svg';
import FeatureImg2 from '../../assets/features/no-limit.svg';
import FeatureImg3 from '../../assets/features/embed.svg';
import FeatureImg4 from '../../assets/features/custom-domain.svg';
import FeatureImg5 from '../../assets/features/boost-exposure.svg';
import FeatureImg6 from '../../assets/features/drag-drop.svg';

import arrow from '../../assets/shared/arrow-white.svg';


function Features() {
    return (
        <>
            <section className="hero features__hero">
                <picture className="hero__img">
                    <source media="(min-width: 1440px)" srcSet={HeroImgDesktop} />
                    <source media="(min-width: 768px)" srcSet={HeroImgTablet} />
                    <img src={HeroImgMobile} alt="Create and share stories" />
                </picture>

                <div className="hero__content">
                    <h1 className="heading">Features</h1>
                    <p className="hero__text">We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories.</p>
                </div>
            </section>

            <section className="feature__container">

                <div className="feature__item">
                    <img src={FeatureImg1} alt="Responsive" />
                    <h3 className="feature__heading">100% Responsive</h3>
                    <p className="feature__text">No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.</p>
                </div>

                <div className="feature__item">
                    <img src={FeatureImg2} alt="No limit" />
                    <h3 className="feature__heading">No Photo Upload Limit</h3>
                    <p className="feature__text">Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.</p>
                </div>

                <div className="feature__item">
                    <img src={FeatureImg3} alt="Embed" />
                    <h3 className="feature__heading">Available to Embed</h3>
                    <p className="feature__text">Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more. </p>
                </div>

                <div className="feature__item">
                    <img src={FeatureImg4} alt="Custom Domain" />
                    <h3 className="feature__heading">Custom Domain</h3>
                    <p className="feature__text">With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!</p>
                </div>

                <div className="feature__item">
                    <img src={FeatureImg5} alt="Boost Exposure" />
                    <h3 className="feature__heading">Boost Your Exposure</h3>
                    <p className="feature__text">Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list.</p>
                </div>

                <div className="feature__item">
                    <img src={FeatureImg6} alt="Drag & Drop" />
                    <h3 className="feature__heading">Drag & Drop Image</h3>
                    <p className="feature__text">Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to make your stories beautiful.</p>
                </div>

            </section>

            <div className="beta__section">
                <h1 className="heading">We're in Beta. Get your invite today!</h1>
                <a href="/" className="u-link">Get an invite<img src={arrow} alt="" className="link__arrow" /></a>
            </div>

        </>
    )
}

export default Features
