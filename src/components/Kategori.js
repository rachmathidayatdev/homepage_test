import React, { useEffect, useState } from 'react';
import ContentLoader from 'react-content-loader';

const Kategori = ({ ...props }) => {

    const [category, setCategory] = useState([])
    const [loadingState] = useState([1, 2, 3, 4])

    useEffect(() => {
        setTimeout(() => {
            setCategory(props.kategori)
        }, 2000)
    })

    const renderData = () => {
        return (
            <ul className="uk-slider-items uk-grid">
            { category.map((item, index) => (
                <li className="uk-width-1-4@m" key={ index }>
                    <div className="uk-card uk-card-default uk-card-body card-kategori">
                        <div className="uk-width-1-3@m">
                            <img src={ item.imageUrl } width="50" height="50" alt=""/>
                        </div>
                        <label className="uk-width-2-3@m">{ item.name }</label>
                    </div>
                </li>
            )) }
            </ul>
        )
    }

    const renderLoadingState = () => {
        return (
            <ul className="uk-slider-items uk-grid">
                { loadingState.map((item, index) => (
                    <li className="uk-width-1-4@m" key={ index }>
                        <div className="uk-card uk-card-default" style={{ padding: '10px' }}>
                            <ContentLoader
                                height={100}
                                width={400}
                                speed={2}
                                primaryColor="#f3f3f3"
                                secondaryColor="#ecebeb"
                            >
                                <rect x="110" y="21" rx="4" ry="4" width="254" height="6" />
                                <rect x="111" y="41" rx="3" ry="3" width="185" height="7" />
                                <circle cx="48" cy="48" r="48" />
                            </ContentLoader>
                        </div>
                    </li>
                )) }
            </ul>
        )
    }

    return (
        <div className="kategori-container">
            <div className="header-container">
                <label className="title-content">Kategori</label>
                {/* <button type="button">Muat Lainnya</button> */}
            </div>
            <div className="content-container">
                <div className="uk-position-relative uk-visible-toggle uk-light" style={{ padding: '5px 5px 5px 5px' }} tabIndex="-1" uk-slider="true">
                    
                    { category.length > 0 ? renderData() : renderLoadingState() }

                    <a className="uk-position-center-left uk-position-small uk-hidden-hover custom-color uk-icon-button" href="#" uk-icon="chevron-left" uk-slider-item="previous"></a>
                    <a className="uk-position-center-right uk-position-small uk-hidden-hover custom-color uk-icon-button" href="#" uk-icon="chevron-right" uk-slider-item="next"></a>
                </div>
            </div>
        </div>
    )
}

export default Kategori;