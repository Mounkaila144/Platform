// assets
import { IconDashboard } from '@tabler/icons';
import {useNavigate} from "react-router-dom";
import {useIsAuthenticated, useSignOut} from "react-auth-kit";


// constant
const icons = { IconDashboard };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
    id: 'Platform',
    title: 'Platform',
    type: 'group',
    children: [
         {
            id: 'Menu',
            title: 'Menu',
            type: 'item',
            url: '/',
            icon: icons.IconDashboard,
            breadcrumbs: true
        },
         {
            id: 'Article',
            title: 'PTR Niger',
            type: 'item',
            url: '/materiel',
            icon: icons.IconDashboard,
            breadcrumbs: false
        },
{
            id: 'b',
            title: 'BABA SALAM',
            type: 'item',
            url: '/materiel',
            icon: icons.IconDashboard,
            breadcrumbs: false
        },
{
            id: 'v',
            title: 'Voiture',
            type: 'item',
            url: '/materiel',
            icon: icons.IconDashboard,
            breadcrumbs: false
        },

    ]
};

export default dashboard;
