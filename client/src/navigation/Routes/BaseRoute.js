import React from "react";
import PropTypes from "prop-types";

import { Route } from "react-router-dom";

import BaseLayout from "../../Layout/BaseLayout";

export default function BaseRoute({
  component: Component,
  isDarkMode,
  toggleTheme,
  routes,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={(props) => {
        const crumbs = routes
          .filter(({ path }) => props.match.path.includes(path))
          .map(({ path, ...rest2 }) => ({
            path: Object.keys(props.match.params).length
              ? Object.keys(props.match.params).reduce(
                  (path, param) =>
                    path.replace(`:${param}`, props.match.params[param]),
                  path
                )
              : path,
            ...rest2,
          }));
        console.log(`generated crumbs for ${props.match.path}`);
        crumbs.map(({ title, path }) => console.log({ title, path }));
        return (
          <BaseLayout isDarkMode={isDarkMode} toggleTheme={toggleTheme}>
            <Component {...props} crumbs={crumbs}/>
          </BaseLayout>
        );
      }}
      // render={(props) => (
      //     <BaseLayout isDarkMode={isDarkMode} toggleTheme={toggleTheme}>
      //         <Component {...props} />
      //     </BaseLayout>
      // )}
    />
  );
}

BaseLayout.propTypes = {};
