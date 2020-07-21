<template>
   <div style="margin:auto; display:flex; justify-content: space-around;">
        <div>
            <h3>场景一 超过页面</h3> 
            <div style="width:200px;border:1px solid #ddd">
                <flex-footer 
                containerHeight='300'
                mode='fixed'
                >
                    <template v-slot:content>
                        <div style="margin:20px">something</div>
                        <div style="margin:20px">something</div>
                        <div style="margin:20px">something</div>
                        <div style="margin:20px">something</div>
                        <div style="margin:20px">something</div>
                        <div style="margin:20px">something</div>
                        <div style="margin:20px">something</div>
                        <div style="margin:20px">something</div>
                        <div style="margin:20px">something</div>
                        <div style="margin:20px">something</div>
                    </template>
                    <template v-slot:footer>
                        <p style="text-align:center">Here's footer</p>
                    </template>
                </flex-footer>
            </div>
        </div>

        <div>
            <h3>场景一 不超过页面</h3>
            <div style="width:200px;border:1px solid #ddd">
                <flex-footer 
                containerHeight='300'
                mode='fixed'
                >
                    <template v-slot:content>
                        <div style="margin:20px">something</div>
                        <div style="margin:20px">something</div>
                        <div style="margin:20px">something</div>
                    </template>
                    <template v-slot:footer>
                        <p style="text-align:center">Here's footer</p>
                    </template>
                </flex-footer>
            </div>
        </div>

        <div>
            <h3>场景二 超过页面</h3> 
            <div style="width:200px;border:1px solid #ddd;overflow:hidden">
                <flex-footer 
                containerHeight='300'
                mode='flex'
                >
                    <template v-slot:content>
                        <div style="margin:20px">something</div>
                        <div style="margin:20px">something</div>
                        <div style="margin:20px">something</div>
                        <div style="margin:20px">something</div>
                        <div style="margin:20px">something</div>
                        <div style="margin:20px">something</div>
                        <div style="margin:20px">something</div>
                        <div style="margin:20px">something</div>
                        <div style="margin:20px">something</div>
                        <div style="margin:20px">something</div>
                    </template>
                    <template v-slot:footer>
                        <p style="text-align:center">Here's footer</p>
                    </template>
                </flex-footer>
            </div>
        </div>

        <div>
            <h3>场景二 不超过页面</h3> 
            <div style="width:200px;border:1px solid #ddd">
                <flex-footer 
                containerHeight='300'
                mode='flex'
                >
                    <template v-slot:content>
                        <div style="margin:20px">something</div>
                        <div style="margin:20px">something</div>
                        <div style="margin:20px">something</div>
                    </template>
                    <template v-slot:footer>
                        <p style="text-align:center">Here's footer</p>
                    </template>
                </flex-footer>
            </div>
        </div>
   </div>
</template>

<script>
import FlexFooter from '../components/flex-footer'
export default {
  name: 'flexfooter',
  components:{FlexFooter},
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

</style>
