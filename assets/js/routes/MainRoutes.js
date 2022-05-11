import * as React from 'react';

import { lazy } from 'react';

// project imports
import MainLayout from '../layout/MainLayout';
import Loadable from '../ui-component/Loadable';
import Menu from "../views/platform/Menu";
import Login from "../views/platform/Login";
import Materiel from "../views/platform/Materiel";

// dashboard routing
// utilities routing

// sample page routing


// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <Menu />
        },
        {
            path: '/login',
            element: <Login />
        },

        {
            path: '/materiel',
            element: <Materiel />
        },
    ]
};

export default MainRoutes;
