import { RouteObject } from "react-router-dom";
import AchatIndex, { achatChildren } from "./modules/achat";
import HomeIndex from "./modules/home";
import AuthIndex, { authChildren } from "./modules/auth";
import DashboardIndex from "./modules/dashboard";



/** @type RouteObject */
const routeObject = [
    {
        path: "",
        element: <HomeIndex />,
    },
    {
        path: "achat",
        element: <AchatIndex />,
        children: achatChildren,
    },
    {
        path: "auth",
        element: <AuthIndex />,
        children: authChildren,
    },
    {
        path: "dashboard",
        element: <DashboardIndex />,
        // children: authChildren,
    },
]

export default routeObject;

