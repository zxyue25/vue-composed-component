<template>
    <div class="TextScroll" :style="`width:${scrollWidth};height:${scrollHeight};line-height:${scrollHeight};`">
        <transition 
            :name="scrollType" 
            mode="out-in"
        >
            <p class="text" style="margin:auto" :key="text.id">{{text.val}}</p>
        </transition>
    </div>
</template>

<script>
export default {
    data() {
        return {
            count: 0, // 当前索引  当v-for中的index等于count时 v-show=true 即显示当前元素
            intervalId: null, // 定时器ID
        }
    },
    props:{
        data:{
            type:Array,
            default:[]
        },
        scrollType:{
            type:String,
            default:'scroll-up'
        },
        scrollWidth:{
            type: String,
            default: '200px'
        },
        scrollHeight:{
            type: String,
            default: '40px'
        },
        speed:{
            type: Number,
            default: 1000
        }
    },
    computed: {
        text() {
            return {
                id: this.count,
                val: this.data[this.count].text,
            };
        },
    },
    mounted(){
       
    },
    created() {
        this.intervalId = setInterval(()=>{ // 定义定时器
            this.getText();
        }, this.speed)
        
    },
    methods: {
        getText() {
            let len = this.data.length; // 获取数组长度
            if (len == 0) {
                return // 当数组为空时，直接返回
            }
            if (this.count == len - 1) { // 当前为最后一个时
                this.count = 0 // 从第一个开始
            } else {
                this.count++ // 自增
            }
        }
    },
    destroyed() {
        clearInterval(this.intervalId) // 清除定时器
    }
}
</script>

<style>
/* 向上滚动动画 */
.scroll-up-enter-active,
.scroll-up-leave-active{
    transition: all 1s ease;
}
.scroll-up-enter{
    transform:translateY(100%);
}
.scroll-up-leave-to{
    transform: translateY(-100%);
}


/* 向上匀速滚动动画 */
.scroll-up-linear-enter-active,
.scroll-up-linear-leave-active{
    transition: all 1s linear;  /*此时间必须和 playTime 保持一致*/
}
.scroll-up-linear-enter{
    transform: translateY(100%);
}
.scroll-up-linear-leave-to{
    transform: translateY(-100%);
}


/* 向左滚动动画 */
.scroll-left-enter-active,
.scroll-left-leave-active{
    transition: all 1s ease;
}
.scroll-left-enter{
    transform: translateX(100%);
}
.scroll-left-leave-to{
    transform: translateX(-100%);
}

/* 向左匀速滚动动画 */
.scroll-left-linear-enter-active,
.scroll-left-linear-leave-active{
    transition: all 1s linear;   /*此时间必须和 playTime 保持一致*/
}
.scroll-left-linear-enter{
    transform: translateX(100%);
}
.scroll-left-linear-leave-to{
    transform: translateX(-100%);
}

</style>