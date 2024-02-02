import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';

interface PrivateRouteProps extends RouteProps {
    children: React.ReactNode;
}

const isAuthenticated = (): boolean => {
    const token = localStorage.getItem('token');
    return !!token;
};

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children, ...rest }) => {
    return (
        <Route
            {...rest}
            render={({ location }) =>
                isAuthenticated() ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;