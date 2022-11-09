import React from 'react';
import Header from '../components/Header';
import NotExist from '../components/NotExist'
import Footer from '../components/Footer';

const NotFoundPage = () => {
    return (
        <div>
            <Header />
            <NotExist />
            <Footer />
        </div>
    );
};

export default NotFoundPage;