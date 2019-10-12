import React, { useEffect, useState } from 'react';
import ContentLoader from 'react-content-loader';

const ProdukPromo = ({ ...props }) => {

    const [loadingState] = useState([1, 2, 3, 4, 5])

    const renderData = () => {
        return (
            <div className="uk-grid-match uk-grid-small produk-promo-content" uk-grid="true">
                { props.produkPromo.map((item, index) => (
                    <div className="uk-width-1-5@m" key={ index }>
                        <div className="uk-card uk-card-default produk-promo">
                            <div className="uk-card-media-top produk-promo">
                                <img src={ item.imageUrl } width="auto" alt="" />
                            </div>
                            <div className="uk-card-media-bottom produk-promo">
                                <h3 className="title-produk-promo">{ item.title }</h3>
                                <div>
                                    <span className="title-price">
                                        <span>{ item.price }</span>
                                        <span><span uk-icon="heart"></span> { item.loved }</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )
    }

    const renderLoadingState = () => {
        return (
            <div className="uk-grid-match uk-grid-small produk-promo-content" uk-grid="true">
                { loadingState.map((item, index) => (
                    <div className="uk-width-1-5@m" key={ index }>
                        <div className="uk-card uk-card-default produk-promo">
                            <ContentLoader 
                                height={360}
                                width={400}
                                speed={2}
                                primaryColor="#f3f3f3"
                                secondaryColor="#ecebeb"
                            >   
                                <rect x="7" y="6" rx="0" ry="0" width="385" height="260" /> 
                                <rect x="7" y="280" rx="0" ry="0" width="385" height="12" /> 
                                <rect x="7" y="310" rx="0" ry="0" width="385" height="12" />
                            </ContentLoader>
                        </div>
                    </div>
                )) }
            </div>
        )
    }

    return (
        <div className="produk-promo-container">
                <div className="header-container">
                    <label className="title-content">Produk Promo</label>
                    {/* <button type="button">Muat Lainnya</button> */}
                </div>
                <div className="content-container">
                    { props.produkPromo.length > 0 ? renderData() : renderLoadingState() }
                </div>
            </div>
    )

}

export default ProdukPromo;