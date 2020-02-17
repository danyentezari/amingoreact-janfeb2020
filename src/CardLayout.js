import React from 'react';

const CardLayout = (prop) => {

    const myStyle = {
        display: "Flex",
        margin: "0 auto",
        flexWrap: "wrap",
        justifyContent: "center"
    }

    return (
        <div style={myStyle}>
            {prop.children}
        </div>
    )
}

export default CardLayout;