import React from 'react';

const CardLayout = (prop) => {

    const myStyle = {
        display: "Flex"
    }

    return (
        <div style={myStyle}>
            {prop.children}
        </div>
    )
}

export default CardLayout;