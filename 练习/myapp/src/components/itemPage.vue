<template>
  <div class="item">
    <!-- 设置插槽 -->
    <slot></slot>
  </div>
</template>

<script>
import axios from 'axios';
import { onMounted,reactive } from 'vue';

export default {

setup(){
  let mapData=reactive({});
  async function getState(){
    mapData=await axios.get("http://localhost:8080/map/china.json")
  }
  onMounted(()=>{
    getState().then(()=>{
      console.log("map",mapData)
    })
  })
return{
  getState,mapData
}
}
}
</script>

<style lang="less">
.item{
    height: 5.125rem;
    // border: 1px solid rgb(56, 56, 241);
    border: 1px solid #ccc;
    margin: .25rem;
    background-color:rgba(108, 121, 241, 0.5) ;
}

</style>