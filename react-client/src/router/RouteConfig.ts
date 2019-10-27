import React from 'react';
const RouteConfig = [
    {
        path: '/main',
        component: React.lazy(() => import('views/main/index')),
        children: [
            {
                path: '/main/home',
                component: React.lazy(() => import('views/main/home/index'))
            },
            {
                path: '/main/castShopCar',
                component: React.lazy(() =>
                    import('views/main/castShopCar/castShopCar')
                )
            },
            {
                path: '/main/mine',
                component: React.lazy(() => import('views/main/mine/index'))
            },
            {
                path: '/main/order',
                component: React.lazy(() => import('views/main/order/index'))
            },
            {
                path: '/main/class',
                component: React.lazy(() => import('views/main/classfy/index'))
            }
        ]
    },
    {
        path: '/login',
        component: React.lazy(() => import('views/login/index'))
    },
    {
        path: '/changeinfo',
        component: React.lazy(() => import('views/changeinfo/index'))
    },
    {
        path: '/search',
        component: React.lazy(() => import('views/search/index'))
    },
    {
        path: '/groupbuying',
        component: React.lazy(() => import('views/groupbuying/index'))
    },
    {
        path: '/quanbpj',
        component: React.lazy(() => import('views/groupbuying/quanbpj/index'))
    },
    {
        path: '/location',
        component: React.lazy(() => import('views/location/index'))
    },
    {
        path: '/updateAddress',
        component: React.lazy(() => import('views/location/addressUpdate'))
    },
    {
        path: '/addRegion',
        component: React.lazy(() => import('views/location/addRegion'))
    },
    {
        path: '/locationNow',
        component: React.lazy(() => import('views/location/locationNow'))
    },
    {
        path: '/sureCast',
        component: React.lazy(() => import('views/sureCast/sureCast'))
    },
    {
        path: '/youhui',
        component: React.lazy(() => import('views/sureCast/youhui'))
    },
    {
        path: '/updateAddress',
        component: React.lazy(() => import('views/location/addressUpdate'))
    },
    {
        path: '/classDetails',
        component: React.lazy(() => import('views/classDetails'))
    },
    {
        path: '/bianji',
        component: React.lazy(() => import('views/sureCast/bianji'))
    },
    {
        path: '/echarts',
        component: React.lazy(() => import('views/echarts/index'))
    }, {
        path: "/load",
        component: React.lazy(() => import("views/upload/index"))
    },
    {
        path: '/',
        redirect: '/main/home'
    }
];

export default RouteConfig;
