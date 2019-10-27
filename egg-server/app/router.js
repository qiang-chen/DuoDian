"use strict";

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const {
        router,
        controller
    } = app;
    //获取职业列表数据
    router.get("/profession/getProfessionList", controller.profession.getList);
    //点击职业返回对应数据
    router.get(
        "/profession/clickProfession",
        controller.profession.clickProfession
    );
    //更新实时选择的地图
    //获取地址数据  经纬度
    router.get("/location_address", controller.profession.information);
    //获取所有的地址列表
    router.get("/getDate", controller.profession.getDate);
    //修改默选中地址
    router.post("/defaultAddress", controller.profession.defaultAddress);
    //修改对应用户的收货地址数据
    router.post("/updateAddress", controller.profession.updateAddress);
    //添加收货地址
    router.post("/addAddress", controller.profession.addAddress);
    //过滤所需要的地址
    router.get("/AddressSearch", controller.profession.AddressSearch);
    //发送验证码
    router.post("/getAuthCode", controller.login.getAuthCode);
    router.post("/login", controller.login.login);
    router.post("/addUser", controller.login.addUser);
    // 获取详情数据
    router.get(
        "/productlist/groupbuying",
        controller.groupbuying.groupbuyingList
    );
    // 获取详情数据id
    router.get(
        "/productlist/groupbuyingListId",
        controller.groupbuying.groupbuyingId
    );
    // 搜索菜单
    router.get("/seacrch/memu", controller.search.memu);
    // 首页轮播图
    router.get("/home/swiper", controller.home.index);
    // 首页列表
    router.get("/home/list", controller.home.list);
    // 加入购物车
    router.post("/home/addcar", controller.home.addcarFn);
    // 首页tab
    router.post("/home/tab", controller.home.tabFn);
    //获取购物车数据
    router.get("/shopCar/getShopCarData", controller.shopCar.getShopCarData);
    //改变购买数量
    router.get("/shopCar/updateBuyCount", controller.shopCar.updateBuyCount);
    //数量为0改变type值
    router.get("/shopCar/deleteShop", controller.shopCar.deleteShop);
    //获取用户信息
    router.get("/shopCar/getUserAds", controller.shopCar.getUserAds);
    router.get("/shopCar/orderType", controller.shopCar.orderType);
    router.get("/shopCar/updateUserMsg", controller.shopCar.updateUserMsg);
    // router.get("/", controller.home.index);
    router.get("/classfy/mainList", controller.classfy.getproList);
    router.post("/classfy/allList", controller.classfy.getallList);
    router.post("/classfy/headList", controller.classfy.getheadList);
    router.post("/classfy/subprolist", controller.classfy.getsubprolist);
    router.post("/classfy/changenum", controller.classfy.changenumfn);
    // 获取详情数据
    router.post("/classfy/detaillist", controller.groupbuying.groupbuyingId);
    router.post("/order/orderList", controller.order.getorderList);
    router.get('/groupbuying/addcarFn', controller.groupbuying.addcarFn);
    //修改订单信息
    router.post("/user/changeinfo", controller.changeinfo.changeinfoList);
    //获取用户个人信息
    router.post('/user/postinfo', controller.user.getinfo);
    //修改头像
    router.post("/user/changefile", controller.changeinfo.changefile);

};