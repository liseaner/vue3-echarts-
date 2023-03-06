<template>
  <div class="map" id="map"></div>
</template>

<script>
// import {provide} from "vue"
import axios from "axios"
import { onMounted ,inject} from "vue";
import { reactive } from 'vue';
// import { mapData } from '../../../../代码/myapp/src/assets/mapData';
export default {
    setup(){
        let $echarts=inject("echarts")
        let mapData=reactive({})
        async function getState(){
            // mapData=await axios.get("http://localhost:8080/map/china.json")
            mapData=await axios.get("/china/data")
        }
        onMounted(()=>{
            console.log("地图数据",mapData)
            getState().then(()=>{
                console.log("mapData",mapData)
                $echarts.registerMap("china",mapData.data.chinaData)
               let myChart=$echarts.init(document.getElementById("map"))
                myChart.setOption({
                    geo:{
                        map:"china",
                        itemStyle:{
                            areaColor:"rgb(48, 146, 238)",
                            borderColor:"#ccc",
                            shadowColor:"rgba(23,13,70,0.5)",
                            shadowBlur:15,
                            emphasis:{
                                focus:"self"
                            }
                        }
                    },

                    // 散点图数据
                     // data: [
    //             { name: "北京", value: [116.46, 39.92, 4367] },
    //             { name: "上海", value: [121.48, 31.22, 8675] },
    //             { name: "深圳", value: [114.07, 22.62, 2461] },
    //             { name: "广州", value: [113.23, 23.16, 187] },
    //             { name: "西安", value: [108.45, 34, 3421] },
    //           ],
    tooltip:{
        trigger:"item"
    },
    title:{
        text:"城市销量",
        left:"45%",
        textStyle:{
            color:"#fff",
            fontSize:20,
            textShadowBlur:10,
            textShadowColor:"#33fff"
        }
    },
    visualMap:{
        type:"continuous",
        min:100,
        max:5000,
        calculable:true,
        inRange:{
            color:["#50a3ba","#eac736","#d94e5d"]}
    },
    textStyle:{
        color:"#fff"
    },
    series:[
        {
            type:"scatter",
            itemStyle:{
                color:"pink",
            },
            coordinateSystem:"geo",
             data: [
                { name: "北京", value: [116.46, 39.92, 4367] },
                { name: "上海", value: [121.48, 31.22, 8675] },
                { name: "深圳", value: [114.07, 22.62, 2461] },
                { name: "广州", value: [113.23, 23.16, 187] },
                { name: "西安", value: [108.45, 34, 3421] },
              ],

        }
    ]
                })
            })
        })
        return{
            getState,mapData
        }
    }
}
</script>

<style>
.map{
    width: 100%;
    height: 100%;
}
</style>