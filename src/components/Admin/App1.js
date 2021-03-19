import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import AdminPageNavigator from './AdminPageNavigator';

import SideBar from './SideBar';

const App1 = () => {
    return (
        <>
            <BrowserRouter>
                <SideBar/>                    
            </BrowserRouter>
        </>
    )
}

export default App1
