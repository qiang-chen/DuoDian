export default [{
        name: '学校超市',
        path: '/list',
        component: () =>
            import('views/list'),
        children: [{
                name: '首页',
                path: '/list/home',
                skeletonId: 'Skeleton1',
                component: () =>
                    import('views/list/home')
            },
            {
                name: '搜索商品',
                path: '/list/search',
                component: () =>
                    import('views/list/home/search')
            },
            {
                name: '分类列表',
                path: '/list/list/:id',
                component: () =>
                    import('views/list/list')
            },
            {
                name: '分类',
                path: '/list/classify',
                component: () =>
                    import('views/list/classify')
            },
            {
                name: '购物车',
                path: '/list/shop',
                component: () =>
                    import('views/list/shop')
            },
            {
                name: 'order',
                path: '/orderDetail',
                component: () =>
                    import('views/pay/orderDetail')
            },
            {
                name: '我的',
                path: '/list/my',
                skeletonId: 'Skeleton2',
                component: () =>
                    import('views/list/my')
            },
            {
                name: '订单状态',
                path: '/list/orderType/:id',
                component: () =>
                    import('views/list/orderType')
            },
            {
                name: '商品详情',
                path: '/list/detail/:id',
                component: () =>
                    import('views/list/productDetail')
            },
            {
                name: '分类详情',
                path: '/list/classify/detail/:id',
                component: () => import('views/list/classifyDetail')
            },
            {
                name: '联系客服页面',
                path: '/list/customerService',
                component: () => import('views/list/customer')
            },
            {
                path: '/list',
                redirect: '/list/home'
            }
        ]
    },
    {
        name: '搜索',
        path: '/search',
        component: () =>
            import('views/search')
    },
    {
        name: '搜索列表',
        path: '/searchlist/:id',
        component: () =>
            import('views/searchlist')
    },
    {
        name: '登陆',
        path: '/login',
        component: () =>
            import('views/login')
    },

    {
        name: '定位',
        path: '/location',
        component: () =>
            import('views/location')
    },

    {
        name: 'address',
        path: '/address',
        component: () =>
            import('views/address')
    },
    {
        name: 'findAddress',
        path: '/findAddress',
        component: () =>
            import('views/address/FindAddress')
    },
    {
        name: '订单详情',
        path: '/orderDetail'
    },
    {
        name: '订单',
        path: '/orderDetail',
        component: () =>
            import('views/pay/orderDetail')
    },
    {
        name: '确认订单',
        path: '/confirmOrder',
        component: () =>
            import('views/confirmOrder')
    },
    {
        name: '地址列表',
        path: '/addressPage',
        component: () =>
            import('views/addressPage')
    },
    {
        name: 'editAddress',
        path: '/editAddress',
        component: () =>
            import('views/editAddress')
    },
    {
        name: '支付',
        path: '/payment',
        component: () =>
            import('views/pay/payment')
    },
    {
        name: '支付结果',
        path: '/payend',
        component: () =>
            import('views/pay/payend')
    },
    {
        name: '没登录',
        path: '/notLogin',
        component: () =>
            import('views/login/notLogin')
    },
    {
        name: '优惠卷',
        path: "/coupon",
        component: () => import('views/Coupon')
    },
    {
        name: '资质规则',
        path: "/qualifications",
        component: () => import('views/Qualifications')

    },
    {
        path: '/',
        redirect: '/location'
    }
]