import React from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import Products from '../components/Products.jsx';
import Filters from '../components/Filters.jsx';

const IndexPage = props => {
    return (
        <div className="index-page">
            <Header match={props.match}/>
            <main>
                <Filters/>
                <Products match={props.match}/>
            </main>
            <Footer match={props.match}/>
        </div>
    );
};

export default IndexPage;