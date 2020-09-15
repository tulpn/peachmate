import React from 'react';

import { Route, Switch, Redirect } from "react-router-dom"

import BaseRoute from "../Routes/BaseRoute"

import CalendarContainer from "../container/Calendar"
import SettingsContainer from "../container/Settings"
import ConnectContainer from "../container/Connect"
import DashboardContainer from "../container/Dashboard"
import PostContainer from "../container/Posts"

export default function NavigationProvider(props) {
  return (
    <Switch>
        <BaseRoute path="/dashboard" toggleTheme={props.toggleTheme} isDarkMode={props.isDarkMode} exact component={DashboardContainer} />
        <BaseRoute path="/settings" exact toggleTheme={props.toggleTheme} isDarkMode={props.isDarkMode} component={SettingsContainer} />
        <BaseRoute path="/connect" exact toggleTheme={props.toggleTheme} isDarkMode={props.isDarkMode} component={ConnectContainer} />
        <BaseRoute path="/calendar" toggleTheme={props.toggleTheme} isDarkMode={props.isDarkMode} component={CalendarContainer} />
        <BaseRoute path="/posts" toggleTheme={props.toggleTheme} isDarkMode={props.isDarkMode} component={PostContainer} />
        <BaseRoute path="/" toggleTheme={props.toggleTheme} isDarkMode={props.isDarkMode} component={DashboardContainer} />

        <Redirect to='/' />
    </Switch>
  );
}
