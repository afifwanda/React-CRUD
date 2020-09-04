import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from "react-router-dom";

const GuardRoute = ({ component: Component, ...rest }) => {
    const checkToken = useSelector(state=>state.reducer.token)
    return(
        <Route {...rest} render={(props) => (
            checkToken !== null
                ? <Component {...props} />
                : <Redirect to='/articles' />
        )} />
    )
}

export default GuardRoute;