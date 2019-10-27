<template>
    <div class="lazy">
        <div class="header">
            <h1>我是一个公共的头部</h1>
            <slot name="head"></slot>
        </div>
        <div class="main">这里面相放页面主题部分
            <slot></slot>
        </div>
        <div class="foot">
            <h2>我是一个公共的尾部</h2>
            <slot name="foot"></slot>
        </div>
    </div>
</template>
