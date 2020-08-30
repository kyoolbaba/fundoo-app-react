import React from "react";
import { Route, Redirect } from "react-router-dom";
import Auth from "./Auth";

export default function NonProtectedRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (Auth.isAuthenticated()) {
            return (
                <Redirect
                  to={{
                    pathname: "/profile",
                    state: {
                      from: props.location,
                    },
                  }}
                />
              );
        } else {
            return <Component {...props} />;
        }
      }}
    />
  );
}
