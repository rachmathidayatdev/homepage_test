import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Main = ({ match, history, location, children }) => {
    return (
        <div>
            <div uk-sticky="true">
                <Header/>
            </div>
            <div className="uk-container">
                <div className="content-container">
                    { children }
                </div>
                <div>
                    <Footer/>
                </div>
            </div>
        </div>
    )
}

export default Main;