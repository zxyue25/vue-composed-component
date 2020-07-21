<template>
    <div class="container">
        scroll-type='scroll-up' 向上滚动
        <div class="header" style="color:red">
            <text-scroll 
                scroll-type='scroll-up'
                :data='textScrollList'
                scroll-heigth='40px'
                >
            </text-scroll>
        </div>

        scroll-type='scroll-up-linear' 向上匀速滚动
        <div class="header" style="font-size:14px">
            <text-scroll 
                scroll-type='scroll-up-linear'
                :data='textScrollList'
                scroll-heigth='40px'
                >
            </text-scroll>
        </div>

        scroll-type='scroll-left' 向左滚动
        <div class="header">
            <text-scroll 
                scroll-type='scroll-left'
                :data='textScrollList'
                scroll-width='200px'
                :speed='1000'
                >
            </text-scroll>
        </div>

        scroll-type='scroll-left-linear' 向左边匀速滚动
        <div class="header" >
            <text-scroll 
                scroll-type='scroll-left-linear'
                :data='textScrollList'
                scroll-width='300px'
                :speed='1000'
                >
            </text-scroll>
        </div>
    </div>
</template>

<script>
import TextScroll from '../components/text-scroll'
export default {
    components:{TextScroll},
    data(){
        return{
            textScrollList:[
                {text:'请注意～～～～～'},
                {text:'不要操作某某某！！！！！1'},
                {text:'通知：新系统迁移¥¥¥¥¥'},
            ]
        }
    }

}
</script>

<style>
.header{
    margin-bottom:40px;
    background-color:#ddd;
    height:40px;
    line-height:40px;
    overflow:hidden
}
</style>