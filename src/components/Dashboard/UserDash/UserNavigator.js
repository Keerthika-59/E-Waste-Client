import React from 'react'
import { BrowserRouter as Route, Switch } from "react-router-dom";
import Activity from './pages/activity';
import Pending from './pages/pending';
import Completed from './pages/completed';

function Navigator() {
    return (
        <>
            <Switch>
                <Route path='/activity' exact component={Activity} />
                <Route path='/pending' exact component={Pending} />
                <Route path='/completed' exact component={Completed} />
            </Switch>
        </>
    )

}

export default Navigator;