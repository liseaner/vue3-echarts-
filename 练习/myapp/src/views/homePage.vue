    <template>
      <div>
      <header> 
        <h1>vue3-大数据可视化</h1>
      </header>
      <!-- /大容器 -->
      <section class="container">
        <!-- 左容器 -->
        <section class="itemLeft"> 
          <ItemPage>
            <ItemOne />
          </ItemPage>
          <ItemPage>
            <ItemTwo />
          </ItemPage>
        </section>
        <!-- 中 -->
        <section class="itemCenter">
          <!-- <h2>地图展示</h2> -->
          <MapPage />
        </section>
        <!-- 右 -->
        <section class="itemRight"> 
          <ItemPage> 
            <ItemThree />
          </ItemPage>
          <ItemPage> 
            <ItemFour />
          </ItemPage>
        </section>
      </section>
      </div>
    </template>
    
    <script>
    import ItemPage from "@/components/itemPage.vue"
    import ItemOne from "@/components/itemOne.vue"
    import ItemTwo from "@/components/itemTwo.vue"
    import ItemThree from "@/components/itemThree.vue"
    import ItemFour from "@/components/itemFour.vue"
    import MapPage from "@/components/mapPage.vue"
    import {inject} from "vue"//接收
    export default {
    components:{
      ItemPage,
      ItemOne,ItemTwo,ItemThree,ItemFour,MapPage
    },
    setup(){
      let $echarts=inject("echarts")
      let $http=inject("axios")
      console.log('$http',$http)
      console.log("$echarts",$echarts)
    }
    // data: [
    //             { name: "北京", value: [116.46, 39.92, 4367] },
    //             { name: "上海", value: [121.48, 31.22, 8675] },
    //             { name: "深圳", value: [114.07, 22.62, 2461] },
    //             { name: "广州", value: [113.23, 23.16, 187] },
    //             { name: "西安", value: [108.45, 34, 3421] },
    //           ],

    }
    </script>
    
    <style lang="less">
   header{
    height:1rem;
    width: 100%;
    background-color: rgba(0,0,255,0.2);
    h1{
      font-size: .375rem;
      color: rgb(255, 255, 255);
      text-align: center;
      line-height: 1rem;
    }
   }
  //  Da容器
  .container{
    min-width: 1200px;
    max-width: 2048px;
    margin:0 auto;
    // border: 1px solid #000;
    padding: .125rem .125rem 0;
    // height: 500px;
    // background-color:#fff ;
    display: flex;
    // 设置左右在页面的份数
    .itemLeft,.itemRight{
      flex: 3;
    }
    .itemCenter{
      flex: 5;
      height: 10.5rem;
      border: 1px solid #ccc;
      padding: 0.125rem;
      margin: 0.25rem;
    }
  }
    </style>