import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from './assets/backgroundImg.jpg';

function PageNotFound() {
    return (
        <div
            className="page-not-found"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="content">
                <h1 className="error-code">404</h1>
                <div className="error-details">
                    <h2>Page Not Found</h2>
                    <p>The page you are looking for no longer exists. Perhaps you can return back to the site's homepage and see if you can find what you are looking for.</p>
                    <Link to="/" className="back-home-btn">« Back to Homepage</Link>
                </div>
            </div>
        </div>
    );
}

export default PageNotFound;