<template>
  <Layout title="商品详情" :isShow="true" :showFooter="false">
    <div class="container">
      <van-swipe indicator-color="white" :height="280">
        <van-swipe-item>
          <img :src="this.productDetail.img" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img
            src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=828383629,4196982908&fm=26&gp=0.jpg"
            alt
          />
        </van-swipe-item>
        <van-swipe-item>
          <img
            src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1620241180,3694954653&fm=26&gp=0.jpg"
            alt
          />
        </van-swipe-item>
      </van-swipe>
      <div class="price-wrap">
        <div class="price">
          <p class="price-num">
            <span>￥</span>
            <span class="price-number">
              {{
              this.productDetail.presentPrice
              }}
            </span>
            <span class="price-history">￥{{ this.productDetail.originalPrice }}</span>
          </p>
          <p class="price-sell">累计销售2223份</p>
        </div>
      </div>
      <div class="title">
        <div class="title-con">
          <h3>{{ this.productDetail.name }}</h3>
          <p>剩余3458份</p>
        </div>
        <div class="title-share">
          <div class="icon-border">
            <van-icon name="share" size=".2rem" color="#FE3212" />
          </div>
          <span>分享好友</span>
        </div>
      </div>
      <div class="tuijian">
        <h3>小编推荐</h3>
        <div class="tuijian-box">与那动力煤萨勒曼到拉萨目睹了生命的拉萨麦当劳马路对面啥莫德凯撒没打开</div>
      </div>
      <div class="buy-history">
        <div class="buy-history-tit">
          <div>购买记录</div>
          <div>
            共
            <span>2233</span> 人购买
          </div>
        </div>
        <div class="buy-history-list">
          <div class="touxiang"></div>
          <div class="buy-history-name">
            <p>小妮***子</p>
            <p>2018.11.11</p>
          </div>
          <div class="buy-history-num">
            购买
            <span>1</span> 件
          </div>
        </div>
        <div class="buy-history-list">
          <div class="touxiang"></div>
          <div class="buy-history-name">
            <p>lu***</p>
            <p>2018.11.11</p>
          </div>
          <div class="buy-history-num">
            购买
            <span>2</span> 件
          </div>
        </div>
        <div class="more">查看更多</div>
      </div>
      <div class="evaluate">
        <div class="evaluate-tit">
          <div>商品评价（8）</div>
          <div>
            好评度
            <span>100%</span>
          </div>
        </div>
        <div class="evaluate-list">
          <div class="evaluate-list-item">
            <div class="item-top">
              <div class="item-touxiang"></div>
              <div class="item-name">
                <p>小***圆</p>
                <p>2019-06-08</p>
              </div>
              <div class="item-eva">
                <div></div>
                <p>很满意</p>
              </div>
            </div>
            <p>商品完好</p>
          </div>
          <div class="evaluate-list-item">
            <div class="item-top">
              <div class="item-touxiang"></div>
              <div class="item-name">
                <p>小***圆</p>
                <p>2019-06-08</p>
              </div>
              <div class="item-eva">
                <div></div>
                <p>很满意</p>
              </div>
            </div>
            <p>商品完好</p>
          </div>
          <div class="evaluate-list-item">
            <div class="item-top">
              <div class="item-touxiang"></div>
              <div class="item-name">
                <p>小***圆</p>
                <p>2019-06-08</p>
              </div>
              <div class="item-eva">
                <div></div>
                <p>很满意</p>
              </div>
            </div>
            <p>商品完好</p>
          </div>
        </div>
      </div>
      <div class="mask" @click="showPopup" v-show="show">
        <div>
          <van-icon name="success" color="#FC6642" size=".5rem" />
        </div>
        <p>添加成功，在购物车等待亲~</p>
      </div>
    </div>
    <div class="footbar">
      <div class="home-page">
        <van-icon name="shop-o" size=".25rem" @click="toHome" />首页
      </div>
      <div class="shop-car">
        <van-icon name="shopping-cart-o" size=".25rem" :info="allIsbuy" @click="toShopCar" />购物车
      </div>
      <div class="add-shopCar" @click="showPopup()">加入购物车</div>
      <div class="go-buy" @click="pay">直接购买</div>
    </div>
  </Layout>
</template>
<script>
import { Icon } from "vant";
import { getDetail, addIsBuy, cartList } from "api/cart";
import { Swipe, SwipeItem } from "vant";
import "vant/lib/icon/local.css";
import Layout from "components/layout";
export default {
  props: {},
  components: {
    Layout,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Icon.name]: Icon
  },
  data() {
    return {
      show: false,
      timer: null,
      productDetail: {},
      allIsbuy: 0
    };
  },
  computed: {},
  methods: {
    showPopup() {
      if (this.show) {
        this.timer = null;
      } else {
        this.show = true;
        this.timer = setTimeout(() => {
          this.show = false;
        }, 1500);
      }
      addIsBuy(this.productDetail.id);
      let flag = true;
      this.list.forEach(item => {
        if (item.id == this.productDetail.id) {
          flag = false;
        }
      });
      if (flag) {
        this.allIsbuy = this.allIsbuy + 1;
      }
    },
    toShopCar() {
      this.$router.push("/list/shop");
    },
    toHome() {
      this.$router.push("/list/home");
    },
    pay() {
      this.$router.push({
        path: "/orderDetail",
        params: {
          name: "橘子味窝窝头",
          num: 1,
          price: 56.91
        }
      });
    }
  },

  created() {
    let id = this.$route.params.id;
    getDetail(id).then(res => {
      this.productDetail = res.data;
    });
    cartList().then(res => {
      this.list = res.result.filter(item => item.isbuy == "true");
      this.allIsbuy = this.list.length;
    });
  },
  mounted() {},
  update() {}
};
</script>
<style scoped lang="scss">
.mask {
  width: 2rem;
  height: 1rem;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.8);
  div {
    width: 100%;
    text-align: center;
  }
  p {
    width: 100%;
    color: #fff;
    font-size: 0.14rem;
    text-align: center;
  }
}
img {
  width: 100%;
}
%box-between {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: row nowrap;
  margin-bottom: 0.2rem;
  div:nth-of-type(1) {
    font-weight: 600;
    font-size: 0.2rem;
  }
  div:nth-of-type(2) {
    font-size: 0.18rem;
    span {
      color: #fe7a67;
    }
  }
}
.evaluate {
  padding: 0.2rem 0 0.2rem 0.2rem;
  background: #fff;
  margin-bottom: 0.1rem;
  .evaluate-tit {
    @extend %box-between;
    padding-right: 0.2rem;
  }
  .evaluate-list {
    width: 100%;
    overflow-x: scroll;
    white-space: nowrap;
    .evaluate-list-item {
      display: inline-block;
      width: 3rem;
      margin-right: 0.2rem;
      background: #fbfbfb;
      padding: 0.1rem;
      .item-top {
        width: 100%;
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: center;
        .item-touxiang {
          width: 0.5rem;
          height: 0.5rem;
          margin: 0.1rem;
          border-radius: 50%;
          background: #a2a2a2;
        }
        .item-name {
          flex: 1;
          p:nth-of-type(1) {
            font-size: 0.18rem;
            font-weight: 600;
          }
          p:nth-of-type(2) {
            margin-top: 0.08rem;
            color: #878787;
          }
        }
        .item-eva {
          width: 1rem;
          text-align: right;
          color: #878787;
        }
      }
      > p {
        padding-left: 0.2rem;
        height: 0.4rem;
        line-height: 0.4rem;
        font-size: 0.16rem;
        color: #878787;
      }
    }
  }
}
.buy-history {
  padding: 0.2rem 0.2rem 0;
  background: #fff;
  margin-bottom: 0.1rem;
  .more {
    height: 0.5rem;
    line-height: 0.5rem;
    color: #a2a2a2;
    text-align: center;
    font-size: 0.16rem;
  }
  .buy-history-tit {
    @extend %box-between;
  }
  .buy-history-list {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row nowrap;
    height: 0.8rem;
    font-size: 0.18rem;
    .touxiang {
      margin: 0.1rem;
      width: 0.5rem;
      height: 0.5rem;
      background: #e0e0e0;
      border-radius: 50%;
    }
    .buy-history-name {
      flex: 1;
      p:nth-of-type(2) {
        color: #a2a2a2;
        font-size: 0.16rem;
        margin-top: 0.05rem;
      }
    }
    .buy-history-num {
      width: 1rem;
      span {
        color: #fe7a67;
      }
    }
  }
}
.tuijian {
  @extend %bj;
  margin-top: 0.1rem;
  margin-bottom: 0.1rem;
  h3 {
    color: #fc6642;
    font-size: 0.22rem;
    margin-bottom: 0.1rem;
  }
  .tuijian-box {
    padding: 0.2rem;
    background: #fbfbfb;
    color: #b4b4b4;
    font-size: 0.18rem;
  }
}
.title {
  @extend %bj;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  .title-con {
    flex: 8;
    h3 {
      font-size: 0.2rem;
      margin-bottom: 0.1rem;
    }
    p {
      color: #666;
    }
  }
  .title-share {
    flex: 2;
    @extend %column;
    .icon-border {
      width: 0.35rem;
      height: 0.35rem;
      @extend %column;
      border: 3px solid #fe3212;
      border-radius: 50%;
      margin-bottom: 0.05rem;
    }
    span {
      color: #fe3212;
    }
  }
}
.price-wrap {
  height: 0.7rem;
  background: #fff;
}
.price {
  height: 100%;
  background: #fe3212;
  color: #fff;
  font-size: 0.15rem;
  border-radius: 0.2rem 0.2rem 0 0;
  padding-left: 0.2rem;
  padding-right: 0.2rem;
  padding-top: 0.1rem;
  .price-num {
    .price-number {
      font-size: 0.25rem;
    }
    .price-history {
      text-decoration: line-through;
    }
  }
}
%bj {
  width: 100%;
  background: #fff;
  padding: 0.2rem;
}
%column {
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
}
.main-content {
  display: flex;
  flex-flow: column wrap;
}
.container {
  height: 92%;
  overflow: auto;
  background: #f8f8f8;
  position: relative;
}
.footbar {
  height: 8%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  .home-page {
    @extend %column;
    width: 15%;
  }
  .shop-car {
    @extend %column;
    width: 15%;
  }
  .add-shopCar {
    width: 30%;
    @extend %column;
    background: #ffba2f;
    color: #fff;
    height: 100%;
    font-size: 18px;
  }
  .go-buy {
    width: 40%;
    @extend %column;
    background: #fe3212;
    color: #fff;
    height: 100%;
    font-size: 18px;
  }
}
</style>