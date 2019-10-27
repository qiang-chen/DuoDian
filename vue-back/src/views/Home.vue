<template>
  <div class="home">
    <Button type="primary">主要按钮</Button>meivhu
    <el-image style="width: 100px; height: 100px" :src="url" :fit="fit"></el-image>
    <hr>
    <Lazy>
      <template v-slot:head>
        <div>我是插槽头部的名字</div>
      </template>
      <div>
        <ul>
          <li>我是主题第一部分名字叫做banner图</li>
        </ul>
      </div>
      <template #foot>
        <div>我是插槽尾部里面的东西</div>
      </template>
    </Lazy>
    <h1 ref="hh">{{num}}</h1>
    <button @click="btn">点我</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import { Button, Image } from 'element-ui';
//引入插槽
import Lazy from '@/components/lazy.vue';
export default {
    data() {
        return {
            fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
            url:
                'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
            num: 2
        };
    },
    components: {
        HelloWorld,
        Button,
        Image,
        Lazy
    },
    methods: {
        btn() {
            this.num = 999;
            console.log(this.$refs.hh.innerText);
        }
    }
};
</script>
