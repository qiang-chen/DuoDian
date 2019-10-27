import Mock from "mockjs";

const list = [
    {
        id: 0,
        img:
            "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3295174058,1884872095&fm=26&gp=0.jpg",
        title: "小***圆",
        rili: "2019-06-10",
        pj: "很满意"
    },
    {
        id: 1,
        img:
            "http://img4.imgtn.bdimg.com/it/u=3276179142,1686381254&fm=26&gp=0.jpg",
        title: "小***李",
        rili: "2019-07-08",
        pj: "中评"
    },
    {
        id: 2,
        img:
            "http://img3.imgtn.bdimg.com/it/u=3414414030,1436910499&fm=11&gp=0.jpg",
        title: "小***王",
        rili: "2019-08-09",
        pj: "差评"
    },
    {
        id: 3,
        img:
            "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3295174058,1884872095&fm=26&gp=0.jpg",
        title: "小***张",
        rili: "2019-11-14",
        pj: "有图"
    },
    {
        id: 4,
        img:
            "http://img4.imgtn.bdimg.com/it/u=3276179142,1686381254&fm=26&gp=0.jpg",
        title: "小***丽",
        rili: "2019-09-19",
        pj: "最新"
    },
    {
        id: 5,
        img:
            "http://img3.imgtn.bdimg.com/it/u=3414414030,1436910499&fm=11&gp=0.jpg",
        title: "小***七",
        rili: "2019-09-24",
        pj: "很满意"
    }
];

const data = [
    {
        img:
            "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3295174058,1884872095&fm=26&gp=0.jpg",
        title: "小妮***子",
        rili: "2018.11.11"
    },
    {
        img:
            "http://img4.imgtn.bdimg.com/it/u=3276179142,1686381254&fm=26&gp=0.jpg",
        title: "王瘸子",
        rili: "2018.11.11"
    },
    {
        img:
            "http://img3.imgtn.bdimg.com/it/u=3414414030,1436910499&fm=11&gp=0.jpg",
        title: "混小子",
        rili: "2018.11.11"
    },
    {
        img:
            "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3295174058,1884872095&fm=26&gp=0.jpg",
        title: "卷册",
        rili: "2018.11.11"
    },
    {
        img:
            "http://img4.imgtn.bdimg.com/it/u=3276179142,1686381254&fm=26&gp=0.jpg",
        title: "多次不打算",
        rili: "2018.11.11"
    },
    {
        img:
            "http://img3.imgtn.bdimg.com/it/u=3414414030,1436910499&fm=11&gp=0.jpg",
        title: "从是的深V",
        rili: "2018.11.11"
    },
    {
        img:
            "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3295174058,1884872095&fm=26&gp=0.jpg",
        title: "活动符合",
        rili: "2018.11.11"
    },
    {
        img:
            "http://img4.imgtn.bdimg.com/it/u=3276179142,1686381254&fm=26&gp=0.jpg",
        title: "豆腐干豆腐",
        rili: "2018.11.11"
    },
    {
        img:
            "http://img3.imgtn.bdimg.com/it/u=3414414030,1436910499&fm=11&gp=0.jpg",
        title: "个别地方过度",
        rili: "2018.11.11"
    },
    {
        img:
            "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3295174058,1884872095&fm=26&gp=0.jpg",
        title: "鬼地方个",
        rili: "2018.11.11"
    },
    {
        img:
            "http://img4.imgtn.bdimg.com/it/u=3276179142,1686381254&fm=26&gp=0.jpg",
        title: "不方便",
        rili: "2018.11.11"
    },
    {
        img:
            "http://img3.imgtn.bdimg.com/it/u=3414414030,1436910499&fm=11&gp=0.jpg",
        title: "贝多芬",
        rili: "2018.11.11"
    }
];

Mock.mock("/list", () => {
    return list;
});
Mock.mock("/data", () => {
    return data;
});
