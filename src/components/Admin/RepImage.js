import React from 'react'

const RepImage = () => {
    const serverBaseURI='http://localhost:5000';
    return (
        <div>
            {/* <image src={} ></image> */}
            <img src={`${serverBaseURI}/8b1d1878-f45c-4af3-b84b-928e17dca859-1616493798043.jpg`} alt="hello"/>
        </div>
    )
}

export default RepImage 
