import './pricing.scss';
import { useState } from 'react';

import HeroImgMobile from '../../assets/pricing/mobile/hero.jpg';
import HeroImgTablet from '../../assets/pricing/tablet/hero.jpg';
import HeroImgDesktop from '../../assets/pricing/desktop/hero.jpg';

import arrow from '../../assets/shared/arrow-white.svg';

function Pricing() {
    const [isYearly, setIsYearly] = useState(false),
          planText = isYearly ? 'per year' : 'per month';

    const handleToggle = () => {
        setIsYearly(!isYearly);
    }

    return (
        <>
            <section className="hero pricing__hero">
                <picture className="hero__img">
                    <source media="(min-width: 1440px)" srcSet={HeroImgDesktop} />
                    <source media="(min-width: 768px)" srcSet={HeroImgTablet} />
                    <img src={HeroImgMobile} alt="Create and share stories" />
                </picture>

                <div className="hero__content">
                    <h1 className="heading">Pricing</h1>
                    <p className="hero__text">Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos.</p>
                </div>
            </section>

            <section className="pricing__section">
                <div className="pricing__toggleWrap">
                        <p className={`pricing__option ${isYearly ? '' : 'active'}`}>Monthly</p>
                        <label className="pricing__toggle">
                            <input type="checkbox" className="pricing__checkbox" onChange={handleToggle} />
                            <span className="pricing__slider"></span>
                        </label>
                        
                        <p className={`pricing__option ${isYearly ? 'active' : ''}`}>Yearly</p>
                 </div>

                <div className="pricing__cards">
                    <div className="pricing__card">

                        <div className="pricing__textWrap">
                            <h2 className="pricing__heading">Basic</h2>
                            <p className="pricing__text">Includes basic usage on our platform. Recommended for new and aspiring photographers.</p>
                        </div>

                        <div className="pricing__priceWrap">
                            <h3 className="pricing__price">{isYearly ? '$190.00' : '$19.00'}</h3>
                            <p className="pricing__plan">{planText}</p>
                        </div>

                        <button className="btn btn--dark">Pick plan</button>
                    </div>

                    <div className="pricing__card dark">

                        <div className="pricing__textWrap">
                            <h2 className="pricing__heading">Pro</h2>
                            <p className="pricing__text">More advanced features available. Recommended for photography veterans and professionals.</p>
                        </div>

                        <div className="pricing__priceWrap">
                            <h3 className="pricing__price">{isYearly ? '$390.00' : '$39.00'}</h3>
                            <p className="pricing__plan">{planText}</p>
                        </div>

                        <button className="btn">Pick plan</button>
                    </div>

                    <div className="pricing__card">

                        <div className="pricing__textWrap">
                            <h2 className="pricing__heading">Business</h2>
                            <p className="pricing__text">Additional features available such as more detailed metrics. Recommended for business owners.</p>
                        </div>

                        <div className="pricing__priceWrap">
                            <h3 className="pricing__price">{isYearly ? '$990.00' : '$99.00'}</h3>
                            <p className="pricing__plan">{planText}</p>
                        </div>  

                        <button className="btn btn--dark">Pick plan</button>
                    </div>
                </div>
            </section>

            <section className="pricing__section pricing__compare">
                <h1 className="pricing__heading">Compare</h1>

                <table className="pricing__table">
                    <thead>
                        <tr  className="table__headingWrap">
                            <th className="table__heading">Features</th>
                                <div className="table__section--heading">
                                    <th className="table__heading">Basic</th>
                                    <th className="table__heading">Pro</th>
                                    <th className="table__heading">Business</th>
                             </div>

                        </tr>
                    </thead>
                    <tbody>
                        <tr className="table__row">
                            <td className="table__heading">Unlimited Story Posting</td>
                            <div className="table__section">
                                <td className="table__label basic"><i className="material-symbols-outlined table__check">Done</i></td>
                                <td className="table__label pro"><i className="material-symbols-outlined table__check">Done</i></td>
                                <td className="table__label business"><i className="material-symbols-outlined table__check">Done</i></td>
                            </div>
                        </tr>
                        <tr className="table__row">
                            <td className="table__heading">Unlimited Photo Upload</td>
                            <div className="table__section">
                                <td className="table__label basic"><i className="material-symbols-outlined table__check">Done</i></td>
                                <td className="table__label pro"><i className="material-symbols-outlined table__check">Done</i></td>
                                <td className="table__label business"><i className="material-symbols-outlined table__check">Done</i></td>
                            </div>
                        </tr>
                        <tr className="table__row">
                            <td className="table__heading">Embedding Custom Content</td>
                            <div className="table__section">
                                <td className="table__label basic"></td>
                                <td className="table__label pro"><i className="material-symbols-outlined table__check">Done</i></td>
                                <td className="table__label business"><i className="material-symbols-outlined table__check">Done</i></td>
                            </div>
                        </tr>
                        <tr className="table__row">
                            <td className="table__heading">Customize Metadata</td>
                            <div className="table__section">
                                <td className="table__label basic"></td>
                                <td className="table__label pro"><i className="material-symbols-outlined table__check">Done</i></td>
                                <td className="table__label business"><i className="material-symbols-outlined table__check">Done</i></td>
                            </div>
                        </tr>
                        <tr className="table__row">
                            <td className="table__heading" >Advanced Metrics</td>
                            <div className="table__section">
                                <td className="table__label basic"></td>
                                <td className="table__label pro"></td>
                                <td className="table__label business"><i className="material-symbols-outlined table__check">Done</i></td>
                            </div>
                        </tr>
                        <tr className="table__row">
                            <td className="table__heading">Photo Downloads</td>
                            <div className="table__section">
                                <td className="table__label basic"></td>
                                <td className="table__label pro"></td>
                                <td className="table__label business"><i className="material-symbols-outlined table__check">Done</i></td>
                            </div>
                        </tr>
                        <tr className="table__row">
                            <td className="table__heading">Search Engine Indexing</td>
                            <div className="table__section">
                                <td className="table__label basic"></td>
                                <td className="table__label pro"></td>
                                <td className="table__label business"><i className="material-symbols-outlined table__check">Done</i></td>
                            </div>
                        </tr>
                        <tr className="table__row">
                            <td className="table__heading">Custom Analytics</td>
                            <div className="table__section">
                                <td className="table__label basic"></td>
                                <td className="table__label pro"></td>
                                <td className="table__label business"><i className="material-symbols-outlined table__check">Done</i></td>
                            </div>
                        </tr>
                    </tbody>
                </table>
            </section>

            <div className="beta__section">
                <h1 className="heading">We're in Beta. Get your invite today!</h1>
                <a href="/" className="u-link">Get an invite<img src={arrow} alt="" className="link__arrow" /></a>
            </div>
        </>
    )
}

export default Pricing
