import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import useAuth from '../Context/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const {user, isLoading } = useAuth();
    if(isLoading){
        return <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    }
    
    return (
        <Route
        {...rest}
        render = {({location})=>user.displayName? children : <Redirect
        to={{
            pathname: "/login",
            state: { from: location }
          }}
        ></Redirect>}


        >
            
        </Route>
    );
};

export default PrivateRoute;