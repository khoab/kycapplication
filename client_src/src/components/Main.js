import React from 'react';
import { Switch, Route} from 'react-router-dom'
import Customer from './Customer'

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Customer} />
        </Switch>
        
    </main>
)

export default Main;
