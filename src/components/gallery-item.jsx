import arrow from '../assets/shared/arrow-white.svg';

const GalleryItem = (props) => {
    const { title, img, date, author } = props;

    return (
    <div className="gallery__item" style={{backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.7)), url(${img})`}}>
        <div className="gallery__textWrap">
            {date && <p className="gallery__date">{date}</p>}
            <h3 className="gallery__heading">{title}</h3>
            <p className="gallery__author">{author}</p>

            <a href="/" className="gallery__link u-link">Read story<img src={arrow} alt="" className="link__arrow" /></a>
        </div>
    </div>
    )
}

export default GalleryItem