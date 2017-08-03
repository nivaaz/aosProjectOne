import React from 'react'
import {Route, IndexRoute} from 'react-router'
import Quiz from '../container/Quiz' /*routes>src>container */
import ATAR from '../container/ATAR'
import Reverse from '../container/Reverse' 
import Home from '../container/Home' 
/*https://github.com/reactjs/react-router-tutorial/tree/master/lessons/08-index-routes#index-routes */
const createRoutes = ( ) => {
    return (
        <Route
             path ='/'
             component={Home} 
        >
            <IndexRoute 
                component ={Quiz} 
            />
            <Route 
                path ={'/atar'} 
                component ={ATAR}
                 />
            <Route 
                path ={'/reverse'} 
                component ={Reverse}
            />
        </Route>
    )
}

const Routes = createRoutes( )

export default Routes 