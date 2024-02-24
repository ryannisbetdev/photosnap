
import './homepage.scss';
import HeroImgMobile from '../../assets/home/mobile/create-and-share.jpg';
import HeroImgTablet from '../../assets/home/tablet/create-and-share.jpg';
import HeroImgDesktop from '../../assets/home/desktop/create-and-share.jpg';

import whiteArrow from '../../assets/shared/arrow-white.svg';
import darkArrow from '../../assets/shared/arrow-dark.svg';

import Section1ImgMobile from '../../assets/home/mobile/beautiful-stories.jpg';
import Section1ImgTablet from '../../assets/home/tablet/beautiful-stories.jpg';
import Section1ImgDesktop from '../../assets/home/desktop/beautiful-stories.jpg';

import Section2ImgMobile from '../../assets/home/mobile/designed-for-everyone.jpg';
import Section2ImgTablet from '../../assets/home/tablet/designed-for-everyone.jpg';
import Section2ImgDesktop from '../../assets/home/desktop/designed-for-everyone.jpg';

import GalleryImg1 from '../../assets/stories/mountains.jpg';
import GalleryImg2 from '../../assets/stories/cityscapes.jpg';
import GalleryImg3 from '../../assets/stories/18-days-voyage.jpg';
import GalleryImg4 from '../../assets/stories/architecturals.jpg';

import FeatureImg1 from '../../assets/features/responsive.svg';
import FeatureImg2 from '../../assets/features/no-limit.svg';
import FeatureImg3 from '../../assets/features/embed.svg';

import GalleryItem from '../../components/gallery-item';

const galleryItems = [

    {
        img: GalleryImg1,
        title: 'The Mountains',
        author: 'by John Appleseed'
    },
    {
        img: GalleryImg2,
        title: 'Sunset Cityscapes',
        author: 'by Benjamin Cruz'
    },
    {
        img: GalleryImg3,
        title: '18 Days Voyage',
        author: 'by Alexei Borodin'
    },
    {
        img: GalleryImg4,
        title: 'Architecturals',
        author: 'by Samantha Brooke'
    }
]

function Homepage() {
    return (
        <>
            <section className="hero homepage__hero">
                <picture className="hero__img">
                    <source media="(min-width: 1440px)" srcSet={HeroImgDesktop} />
                    <source media="(min-width: 768px)" srcSet={HeroImgTablet} />
                    <img src={HeroImgMobile} alt="Create and share stories" />
                </picture>

                <div className="hero__content">
                    <h1 className="heading">Create and share your photo stories.</h1>
                    <p className="hero__text">Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect to others.</p>
                    <a href="/" className="u-link">Get an invite <img src={whiteArrow} className="link__arrow"/></a>
                </div>
            </section>

            <section className="homepage__section">
                <div className="section__item section__item--stories">
                    <picture className="section__img">
                        <source media="(min-width: 1440px)" srcSet={Section1ImgDesktop} />
                        <source media="(min-width: 768px)" srcSet={Section1ImgTablet} />
                        <img src={Section1ImgMobile} alt="Beautiful stories every time" />
                    </picture>

                    <div className="section__content">
                        <h2 className="heading">Beautiful stories every time</h2>
                        <p className="section__text">We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.</p>
                        <a href="/" className="u-link u-link--dark">View the stories <img src={darkArrow} className="link__arrow"/></a>
                    </div>
                </div>

                <div className="section__item section__item--designed">
                    <picture className="section__img">
                        <source media="(min-width: 1440px)" srcSet={Section2ImgDesktop} />
                        <source media="(min-width: 768px)" srcSet={Section2ImgTablet} />
                        <img src={Section2ImgMobile} alt="Designed for everyone" />
                    </picture>

                    <div className="section__content">
                        <h2 className="heading">Designed for everyone</h2>
                        <p className="section__text">Photosnap can help you create stories that resonate with your audience. Our tool is designed for photographers of all levels, brands, businesses you name it.</p>
                        <a href="/" className="u-link u-link--dark">View the stories <img src={darkArrow} className="link__arrow"/></a>
                    </div>
                </div>
            </section>

            <section className="homepage__section">
                <div className="gallery">
                    {galleryItems.map((item, index) => (
                        <GalleryItem key={index} {...item} />
                    ))}
                </div>
            </section>

            <section className="homepage__section feature__container">
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
                    <p className="feature__text">Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more.</p>
                </div>
            </section>

        </>
    )
}

export default Homepage;
