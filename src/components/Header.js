import React from 'react';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
UIkit.use(Icons);
// import ShopQIcon from '../assets/images/shopq_icon.png';

const Header = () => {

    const ShopQIcon = require('../assets/images/shopq_icon.png');

    return (
        <nav className="uk-navbar-container uk-navbar-container__padding" uk-navbar="true">
            <div className="uk-navbar-left">
                <img src={ ShopQIcon } width="100" height="100" alt=""/>
            </div>
            <div className="uk-navbar-center uk-navbar-center__width-custom uk-visible@m">
                <div className="uk-inline uk-inline__search-input-width">
                    <span className="uk-form-icon uk-form-icon-flip" uk-icon="icon: search"></span>
                    <input className="uk-input" type="text" placeholder="Cari produk yang anda inginkan disini..." style={{ borderRadius: '5px' }}/>
                </div>
            </div>
            <div className="uk-navbar-right">
                <ul className="header-right-content uk-visible@m">
                    <li><button type="button" className="uk-button" style={{ textTransform: 'capitalize' }}>Masuk</button></li>
                    <li><button type="button" className="uk-button uk-button-default btn-daftar" style={{ textTransform: 'capitalize' }}>Daftar</button></li>
                </ul>
                <div className="header-right-content uk-hidden@m">
                    <span className="uk-navbar-toggle" uk-navbar-toggle-icon="true" style={{ minHeight: 'unset' }}></span>
                </div>
            </div>
        </nav>
    )
}

export default Header;