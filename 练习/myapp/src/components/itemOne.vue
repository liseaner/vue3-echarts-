<template>
  <div> 
    <h2>图表</h2>
    <div class="chart" id="oneChart"> 
        图表的容器
    </div>
  </div>
</template>

<script>
import {inject,onMounted,reactive} from "vue"
export default {
setup(){
  let $echarts=inject("echarts")
  let $http=inject("axios")

  let data=reactive({})
  let xdata=reactive([])
  let ydata=reactive([])
function setData(){
 xdata=data.data.chartData.chartData.map(v=>v.title)
 ydata=data.data.chartData.chartData.map(v=>v.num)
 console.log("xdata",xdata)
 console.log("ydata",ydata)
}

  async function getState(){
    // let oneData=await $http({url:"/one/data"})
    data=await $http({url:"/one/data"})
    // console.log('oneData',oneData.data.chartData.chartData)
  }
  onMounted(()=>{
    getState().then(()=>{
      let myChart=$echarts.init(document.getElementById("oneChart"))
      setData()
      myChart.setOption({
        grid:{
          top:"15%",
          left:"5%",
          containLabel:true
        },
      xAxis:{
        type:"value",
      },
      yAxis:{
        type:"category",
        data:xdata
      },
      series:[
        {
          type:"bar",
          data:ydata,
          itemStyle:{
            normal:{
              barBorderRadius:[0,15,15,0],
              color:new $echarts.graphic.LinearGradient(0,0,1,0,[
                {
                  offset:0,
                  color:"rgb(7, 147, 241)",
                },
                {
                  offset:0.5,
                  color:"rgb(94, 176, 231)",
                },
                {
                  offset:1,
                  color:"rgb(100, 202, 209)",
                }
              ])
            }
          }
        }
      ]
    })
  })
    })
  //  let myChart=$echarts.init(document.getElementById("oneChart"))
  //   myChart.setOption({
  //     xAixs:{
  //       type:"value"
  //     },
  //     yAxis:{
  //       type:"category"
  //     },
  //     series:[
  //       {
  //         type:"bar"
  //       }
  //     ]
  //   })
  // })
  return{
    getState,data,xdata,ydata,setData
  }
}
}
</script>

<style lang="less" scoped>
.chart{
  height: 4.5rem;
}
h2{
  height: 0.6rem;
  color: #fff;
  line-height: 0.6rem;
  font-size: 0.25rem;
  text-align: center;
}
</style>