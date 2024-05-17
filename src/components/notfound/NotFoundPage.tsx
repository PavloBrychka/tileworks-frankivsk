import './NotFoundPage.css';
import React from 'react';

const NotFoundPage = () => {

    const goBack = () => {
        window.history.back();
    };

    return (
        <>
            <div className="container">
                <div className="text">
                    <h1>404</h1>
                    <h3>Page Not Found</h3>
                    <button onClick={goBack}>Go Back</button>
                </div>
            </div>
        </>
    );
}

export default NotFoundPage;