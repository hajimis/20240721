<template>
    <div class="main">
        <nav class="nav">
            <router-link to="/">屏幕1</router-link> 
            <router-link to="/p2">屏幕2</router-link>
            <router-link to="/p3">屏幕3</router-link>
            <router-link to="/p4">屏幕4</router-link>
         </nav>
        <h1 class="h1-title">
            <slot name="title"></slot>
        </h1>
        <div class="content">
            <slot name="content"></slot>
         </div>
    </div>
</template>


<style lang="scss">
.main{
    width: 100vw;
    overflow: hidden;
    padding: 0 20px;
    min-height: 100vh;
    background: #eee;
    .nav{
        margin: auto;
        display: flex;
        padding:10px 0;
        a{
            display: block;
            width: 80px;
            text-align: center
        }
    }
    .content{

    }
}
.h1-title{
    text-align: center;
    font-size: 35px;
}
@media only screen and (max-width:700px) {
    .main{
        padding: 0;
    }
}
</style>