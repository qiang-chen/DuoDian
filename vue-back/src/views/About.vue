<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Button type="default">nihao</Button>
    <Button type="primary">主要按钮</Button>
    <el-button type="primary">按钮</el-button>
    <el-image style="width: 100px; height: 100px" :src="url" :fit="fit"></el-image>
  </div>
</template>


<script>
import { Button, Image } from 'element-ui';
export default {
    data() {
        return {
            fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
            url:
                'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
        };
    },
    components: {
        Button,
        elButton: Button,
        elImage: Image
    }
};
</script>
