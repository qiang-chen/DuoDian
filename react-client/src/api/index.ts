import request from "utils/request";
class Https {
    then(arg0: (res: { data: { result: any } }) => void) {
        throw new Error("Method not implemented.");
    }
    /**
     * 登陆接口
     * parmas:{mobile:用户名,password:密码}
     */
    public postLogin = (parmas: object): Promise<any> =>
        request.post("/auth/loginByMobile", parmas);

    /**
     * 获取首页数据
    /**
     *大类唯一的id
     *
     * @memberof Https
     */
    public postAllList = (parmas: object): Promise<any> =>
        request.post("/classfy/allList", parmas);
    /**
     *
     *
     * @memberof Https
     */
    public postheadList = (parmas: object): Promise<any> =>
        request.post("/classfy/headList", parmas);
    /**
     *点击小类获取对应的数据
     *
     * @memberof Https
     */
    public postsubprolist = (parmas: object): Promise<any> =>
        request.post("/classfy/subprolist", parmas);
    /**
     *
     *添加到购物车
     * @memberof Https
     */
    public postupdateshop = (parmas: object): Promise<any> =>
        request.post("/classfy/changenum", parmas);
    /**
     *获取大类数据
     * @memberof Https
     */
    public getHomeList = (): Promise<any> => request.get("/");

    public searchConnector = (text: any): Promise<any> =>
        request.get(`/seacrch/memu?seacrchtext=${text}`);

    public swiperList = (): Promise<any> => request.get("/home/swiper");

    // public addcar = (parmas: object): Promise<any> =>
    // request.post('/home/addcar', parmas);

    public getShopCarData = (): Promise<any> =>
        request.get("/shopCar/getShopCarData");
    public getProList = (): Promise<any> => request.get("/classfy/mainList");
    /***
     * 获取详情数据
     */
    public postDetaillist = (parmas: object): Promise<any> =>
        request.post("/classfy/detaillist", parmas);

    // public getAuthCode = (): Promise<any> => request.get("/getAuthCode");
    public getAuthCode = (parmas: object): Promise<any> =>
        request.post("/getAuthCode", parmas);
    public login = (parmas: object): Promise<any> =>
        request.post("/login", parmas);
    //获取订单数据
    public postorderList = (parmas: object): Promise<any> =>
        request.post("/order/orderList", parmas);
    //改变信息
    public changeinfo = (parmas: object): Promise<any> =>
        request.post("/user/changeinfo", parmas);
    public changefile = (parmas: object): Promise<any> => {
        console.log(parmas, "没进来吗")
        return request.post("/user/changefile", parmas);
    }

    public addUser = (parmas: object): Promise<any> =>
        request.post("/addUser", parmas);
    public postinfo = (parmas: object): Promise<any> =>
        request.post("/user/postinfo", parmas);
}

export default new Https();
