<template>
  <Layout title="校园超市"
          :isShow="true">
    <div>
      <van-card @click="detail(item.id)"
                v-for="(item, index) in list"
                :key="index"
                :price="item.presentPrice"
                :title="item.name"
                :thumb="item.img" />
    </div>
  </Layout>
</template>

<script>
import Layout from "components/layout";
import { Card } from "vant";
import { gettype } from "api/home/index.js";
export default {
  data() {
    return {
      list: [],
      historys: []
    };
  },
  created() {
    let value = this.$route.params.id;
    gettype({ value }).then(res => {
      this.list = res.result.type_data;
    });
  },
  methods: {
    detail: function(id) {
      this.$router.push(`/list/detail/${id}`);
    }
  },
  components: {
    Layout,
    [Card.name]: Card
  }
};
</script>

<style lang='scss' scoped>
%juzhong {
  display: flex;
  align-items: center;

  justify-content: center;
}
.box {
  @extend %juzhong;
}

.van-card__title {
  margin-top: 10%;
}
</style>