import React from 'react';

const Banner = (prop) => {

    const bannerStyle = {
        
        backgroundImage: `url(${prop.photo})`,
        backgroundSize: '100%',
        backgroundPosition: 'center',
        minHeight: '300px'
    }

    const headerStyle = {
        textAlign: 'center'
    }

    return(
        <div className="jumbotron"
        style={bannerStyle}>
            
            <h1 style={headerStyle}>This is the Banner</h1>

        </div>
    )
}

export default Banner;