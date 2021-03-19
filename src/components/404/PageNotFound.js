import React from 'react';
import {Image, Button} from 'react-bootstrap';

import {Link} from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div className = "text-center">
            <Image
                height = {650}
                width = {650}
                src= 'https://miro.medium.com/max/5120/1*DeBkx8vjbumpCO-ZkPE9Cw.png'
            />
            
            <Link
                to="/"
            >
            <Button 
            variant = "info"
            > 
            Back to Home
            </Button>
            </Link>
        </div>
    )
}

export default PageNotFound
