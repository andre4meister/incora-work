import { Redirect, Route } from "react-router-dom";
import { SettingsProps } from "./Settings";
import React from "react";


function PrivateRoute(login: boolean, Component: React.ElementType<SettingsProps>, props: SettingsProps) {

  return (
    <Route>
      {login ? (
        <Component {...props} />
      ) : (
        <Redirect to='/task2' from='/settings' />
      )}
    </Route>
  );
}

export default PrivateRoute;
