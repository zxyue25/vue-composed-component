<template>
    <div class="container" :style="`height:${containerHeight}px`">
        <div class="content" :style="mode == 'fixed' ? 'flex:1' : ''">
            <slot name="content"></slot>
        </div>
        <div class="footer">
            <slot name="footer"></slot>
        </div>
    </div>
</template>
<script>
export default {
  name: 'flex-footer',
  props: {
      containerHeight:{
          type:String,
          default:'200'
      },
      mode:{
          type:String,
          default:'fixed'
      }
  },
  data () {
    return {
  
    }
  },
  methods:{
 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
    display: flex;
    flex-direction: column;
}
.content{
    overflow-y: auto;
}
</style>
