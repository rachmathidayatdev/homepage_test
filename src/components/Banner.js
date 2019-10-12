import React, { useEffect, useState } from 'react';
import ContentLoader from 'react-content-loader';

const Banner = () => {

    const [banner, setBanner] = useState([])
    const [loadingState] = useState([1, 2, 3, 4])

    useEffect(() => {
        setTimeout(() => {
            setBanner([
                {
                    "imageUrl": "https://ecs7.tokopedia.net/img/cache/1242/banner/2019/10/11/21525271/21525271_716d9670-73c4-40ca-8132-17312d066c11"
                },
                {
                    "imageUrl": "https://ecs7.tokopedia.net/img/cache/1242/banner/2019/10/10/20723472/20723472_a7ad390d-c71c-4ad0-9ff3-55bb59adb82c.jpg"
                },
                {
                    "imageUrl": "https://ecs7.tokopedia.net/img/cache/1242/banner/2019/10/10/20723472/20723472_c5f7bdd4-0805-43e9-868c-21a6d75df6b4.jpg"
                },
                {
                    "imageUrl": "https://ecs7.tokopedia.net/img/cache/1242/banner/2019/10/10/20723472/20723472_3ef16fe1-e23c-488b-8710-b69b3a463725.png"
                },
            ])
        }, 2000)
    })

    const renderData = () => {
        return (
            <ul className="uk-slider-items uk-grid">
                { banner.map((item, index) => (
                    <li className="uk-width-1-2" key={ index }>
                        <div className="uk-panel">
                            <img src={ item.imageUrl } className="image-border" alt=""/>
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
                    <li className="uk-width-1-2" key={ index }>
                        <div className="uk-panel">
                            <ContentLoader 
                                height={125}
                                width={400}
                                speed={2}
                                primaryColor="#f3f3f3"
                                secondaryColor="#ecebeb"
                            >   
                                <rect x="7" y="6" rx="0" ry="0" width="385" height="240" /> 
                            </ContentLoader>
                        </div>
                    </li>
                )) }
            </ul>
        )
    }

    return (
        <div className="banner-container">
            <div className="uk-position-relative uk-visible-toggle uk-light" tabIndex="-1" uk-slider="center: true; autoplay: true">

                { banner.length > 0 ? renderData() : renderLoadingState() }

                <a className="uk-position-center-left uk-position-small uk-hidden-hover custom-color uk-icon-button" href="#" uk-icon="chevron-left" uk-slider-item="previous"></a>
                <a className="uk-position-center-right uk-position-small uk-hidden-hover custom-color uk-icon-button" href="#" uk-icon="chevron-right" uk-slider-item="next"></a>
            </div>
        </div>
    )
}

export default Banner;