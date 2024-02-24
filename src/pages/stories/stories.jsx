import HeroImg from '../../assets/stories/moon-of-appalacia.jpg';
import './stories.scss';
import whiteArrow from '../../assets/shared/arrow-white.svg';
import GalleryItem from '../../components/gallery-item';

import GalleryImg1 from '../../assets/stories/mountains.jpg';
import GalleryImg2 from '../../assets/stories/cityscapes.jpg';
import GalleryImg3 from '../../assets/stories/18-days-voyage.jpg';
import GalleryImg4 from '../../assets/stories/architecturals.jpg';
import GalleryImg5 from '../../assets/stories/world-tour.jpg';
import GalleryImg6 from '../../assets/stories/unforeseen-corners.jpg';
import GalleryImg7 from '../../assets/stories/king-on-africa.jpg';
import GalleryImg8 from '../../assets/stories/trip-to-nowhere.jpg';
import GalleryImg9 from '../../assets/stories/rage-of-the-sea.jpg';
import GalleryImg10 from '../../assets/stories/running-free.jpg';
import GalleryImg11 from '../../assets/stories/behind-the-waves.jpg';
import GalleryImg12 from '../../assets/stories/calm-waters.jpg';
import GalleryImg13 from '../../assets/stories/milky-way.jpg';
import GalleryImg14 from '../../assets/stories/dark-forest.jpg';
import GalleryImg15 from '../../assets/stories/somwarpet.jpg';
import GalleryImg16 from '../../assets/stories/land-of-dreams.jpg';


const galleryItems = [

    {
        img: GalleryImg1,
        title: 'The Mountains',
        author: 'by John Appleseed',
        date: 'April 16th 2020'
    },
    {
        img: GalleryImg2,
        title: 'Sunset Cityscapes',
        author: 'by Benjamin Cruz',
        date: 'April 14th 2020'
    },
    {
        img: GalleryImg3,
        title: '18 Days Voyage',
        author: 'by Alexei Borodin',
        date: 'April 11th 2020'
    },
    {
        img: GalleryImg4,
        title: 'Architecturals',
        author: 'by Samantha Brooke',
        date: 'April 9th 2020'
    },
    {
        img: GalleryImg5,
        title: 'World Tour 2019',
        author: 'by Timothy Wagner',
        date: 'April 7th 2020'
    },
    {
        img: GalleryImg6,
        title: 'Unforeseen Corners',
        author: 'by William Malcolm',
        date: 'April 3rd 2020'
    },
    {
        img: GalleryImg7,
        title: 'King on Africa: Part II',
        author: 'by Tim Hillenburg',
        date: 'March 29th 2020'
    },
    {
        img: GalleryImg8,
        title: 'The Trip to Nowhere',
        author: 'by Felicia Rourke',
        date: 'March 21st 2020'
    },
    {
        img: GalleryImg9,
        title: 'Rage of The Sea',
        author: 'by Mohammed Abdul',
        date: 'March 19th 2020'
    },
    {
        img: GalleryImg10,
        title: 'Running Free',
        author: 'by Michelle',
        date: 'March 16th 2020'
    },
    {
        img: GalleryImg11,
        title: 'Behind the Waves',
        author: 'by Lamarr Wilson',
        date: 'March 15th 2020'
    },
    {
        img: GalleryImg12,
        title: 'Calm Waters',
        author: 'by Samantha Brooke',
        date: 'March 11th 2020'
    },
    {
        img: GalleryImg13,
        title: 'The Milky Way',
        author: 'by Benjamin Cruz',
        date: 'March 9th 2020'
    },
    {
        img: GalleryImg14,
        title: 'Night at The Dark Forest',
        author: 'by Mohammed Abdul',
        date: 'March 5th 2020'
    },
    {
        img: GalleryImg15,
        title: 'Somwarpet’s Beauty',
        author: 'by Michelle',
        date: 'March 4th 2020'
    },
    {
        img: GalleryImg16,
        title: 'Land of Dreams',
        author: 'by William Malcolm',
        date: 'March 2nd 2020'
    }

]

function Stories() {
    return (
        <>
            <section className="hero stories__hero">

            <img className="hero__img" src={HeroImg} alt="Create and share stories" />

                <div className="hero__content">
                    <h2 className="subheading">Last month's featured story</h2>
                    <h1 className="heading">Hazy full moon of appalachia</h1>
                    <p className="hero__text"> March 2nd 2020 <span className="hero__author"> by John Appleseed</span></p>
                    <p className="hero__text">The dissected plateau area, while not actually made up of geological mountains, is popularly called &quot;mountains&quot;, especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged.</p>
                    <a href="/" className="u-link">Read the story <img src={whiteArrow} className="link__arrow"/></a>
                </div>
            </section>

            <section className="stories__section">
                <div className="gallery">
                    {galleryItems.map((item, index) => (
                        <GalleryItem key={index} {...item} />
                    ))}
                </div>
            </section>
        </>
    )
}

export default Stories
