<template>
    <div> 
      <h2>周销图</h2>
      <div class="chart" id="myEchartsTwo"> 
          图表的容器
      </div>
    </div>
  </template>
  
  <script>
  import {inject,onMounted,reactive}from "vue";
  export default {
  setup(){
    let $echarts=inject("echarts")
    let $http=inject("axios")
    let data=reactive({})
    async function getState(){
      data=await $http({url:"/two/data"})
    }
    onMounted(()=>{
      getState().then(()=>{
        console.log("折线图",data.data.chartData.chartData)
       let myChart=$echarts.init(document.getElementById("myEchartsTwo"))
       myChart.setOption({
        tooltip:{ 
          trigger:"axis",
          axisPointer:{
            type:"cross",
            label:{
              backgroundColor:"#e6b600"
            }
          }
        },
        legend:{
          data:["药品","服饰","电子","家居","日化"]
        },
        grid:{
          left:"1%",
          right:"4%",
          bottom:"3%",
          containLabel:true
        },
        xAxis:{
          type:"category",
          boundaryGap:false,
          data:data.data.chartData.chartData.day,
          axisLine:{
            lineStyle:{
              color:"#fff"
            }
          }
        },
        yAxis:{
          type:"value",
          axisLine:{
            lineStyle:{
              color:"#fff"
            }
          }
        },
        series:[
        {
            name:"药品",
            type:"line",
            data:data.data.chartData.chartData.num.Chemicals,
            smooth:true,//让折线图变得平滑
            showSymbol:false,//关闭折线图的点
            stack:"Total",//堆叠
            lineStyle:{//折线图的线
              width:0//宽度为0即线隐藏、消失了
            },
            emphasis:{
              focus:"series"
            },
            areaStyle:{
              opacity:0.8,
              color:new $echarts.graphic.LinearGradient(0,0,0,1,
              {
                offset:0,
                color: "rgb(89, 233, 190)",           
              },
              {
                offset:1,
                color:" rgb(48, 235, 235)"
              }
              )
            }
          },
          {
                        name:"服饰",
                        type:"line",
                        data:data.data.chartData.chartData.num.Clothes,
                        stack: "Total",//数据堆叠
                          smooth: true,//折线图平滑效果 变成曲线图
                          showSymbol: false,//   隐藏所有数据点
                          
                            areaStyle: {
                            opacity: 0.8,
                            color: new $echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                offset: 0,
                                color: "rgb(0, 221, 255)",
                                },
                                {
                                offset: 1,
                                color: "rgb(77, 119, 255)",
                                },
                            ]),
                        },  
                            lineStyle: { // 设置线段样式
                                width: 0,
                            },
                            emphasis: {//设置高亮的图形样式和标签样式 
                              focus: "series",//只显示选中的内容高亮
                            }, 
          },
          {
            name:"电子",
            type:"line",
            data:data.data.chartData.chartData.num.Electrical,
            stack: "Total",//数据堆叠
                          smooth: true,//折线图平滑效果 变成曲线图
                          showSymbol: false,//   隐藏所有数据点
                          
                      areaStyle: {
                                opacity: 0.8,
                            color: new $echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                offset: 0,
                                color: "rgb(55, 162, 255)",
                                },
                                {
                                offset: 1,
                                color: "rgb(116, 21, 219)",
                                },
                            ]),
                    
                        },  
                            lineStyle: { // 设置线段样式
                                width: 0,
                            },
                            emphasis: {//设置高亮的图形样式和标签样式 
                              focus: "series",//只显示选中的内容高亮
                            }, 
          },
          {
            name:"家居",
            type:"line",
            data:data.data.chartData.chartData.num.digit,
            stack: "Total",//数据堆叠
                          smooth: true,//折线图平滑效果 变成曲线图
                          showSymbol: false,//   隐藏所有数据点
                          
                            areaStyle: {
                            opacity: 0.8,
                            color: new $echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                offset: 0,
                                color: "rgb(255, 0, 135)",
                                },
                                {
                                offset: 1,
                                color: "rgb(135, 0, 157)",
                                },
                            ]),
                    
                        },  
                            lineStyle: { // 设置线段样式
                                width: 0,
                            },
                            emphasis: {//设置高亮的图形样式和标签样式 
                              focus: "series",//只显示选中的内容高亮
                            }, 
          },
          {
            name:"日化",
            type:"line",
            data:data.data.chartData.chartData.num.gear,
            stack: "Total",//数据堆叠
                          smooth: true,//折线图平滑效果 变成曲线图
                          showSymbol: false,//   隐藏所有数据点
                          
                            areaStyle: {
                            opacity: 0.8,
                            color: new $echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                offset: 0,
                                color: "rgb(255, 191, 0)",
                                },
                                {
                                offset: 1,
                                color: "rgb(224, 62, 76)",
                                },
                            ]),
                    
                        },  
                            lineStyle: { // 设置线段样式
                                width: 0,
                            },
                            emphasis: {//设置高亮的图形样式和标签样式 
                              focus: "series",//只显示选中的内容高亮
                            }, 
          }
        ]
       })
})
    })
    return{
      getState,data
    }
  }
}
  </script>
  
  <style>
  h2{
    color: rgb(89, 233, 190);
    color: rgb(48, 235, 235);
    color: rgb(58, 216, 163);
    color: rgb(69, 182, 235);
    color: rgb(0, 162, 255);
    color: rgb(22, 129, 179);
  }
  </style>