
import CalendarContainer from "../../container/Calendar/Calendar"
import SettingsContainer from "../../container/Settings/Settings"
import ConnectContainer from "../../container/Connect/Connect"
import DashboardContainer from "../../container/Dashboard/Dashboard"
import PostList from "../../container/Posts/List/List"
import PostSave from "../../container/Posts/Save/Save"

export default [
    // Dashboard
    {
        title: "Dashboard",
        path: "/",
        component: DashboardContainer,
        exactMatch: true
    },
    {
        title: "Dashboard",
        path: "/dashboard",
        component: DashboardContainer,
        exactMatch: true
    },
    // Settings
    {
        title: "Settings",
        path: "/settings",
        component: SettingsContainer,
        exactMatch: true
    },
    // Posts
    {
        title: "Posts",
        path: "/posts",
        component: PostList,
        exactMatch: true
    },
    {
        title: "Posts",
        path: "/posts/list",
        component: PostList,
        exactMatch: true
    },
    {
        title: "Save Post",
        path: "/posts/save/:id?",
        component: PostSave,
        exactMatch: true
    },
    // Calendar
    {
        title: "Calendar",
        path: "/calendar",
        component: CalendarContainer,
        exactMatch: true
    },
    // Connect
    {
        title: "Connect",
        path: "/connect",
        component: ConnectContainer,
        exactMatch: true
    },
]