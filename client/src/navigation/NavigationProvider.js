import React from "react";

import { Switch, Redirect } from "react-router-dom";

import BaseRoute from "./Routes/BaseRoute";

import RoutesMap from "./Routes/RoutesMap";

export default function NavigationProvider(props) {
  return (
    <Switch>
      {RoutesMap.map(({path, title, component, exactMatch}, key) => {
        return <BaseRoute
          key={key}
          path={path}
          toggleTheme={props.toggleTheme}
          isDarkMode={props.isDarkMode}
          exact={exactMatch}
          component={component}
          routes={RoutesMap}
        />;
      })}

      <Redirect to="/" />
    </Switch>
  );
}
