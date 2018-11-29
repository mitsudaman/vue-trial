<template>
  <div class="small">
    <!-- <line-chart :chart-data="datacollection"></line-chart> -->
    <pie-chart :chart-data="datacollection"></pie-chart>
    <button @click="fillData()">Randomize</button>
  </div>
</template>

<script>
// import LineChart from './LineChart.js'
import PieChart from "./PieChart.js";

export default {
  components: {
    // LineChart
    PieChart
  },
  data() {
    return {
      datacollection: null,
      datas: [],
      baseColors: [
        {
          label: "red",
          color: "rgb(255, 99, 132)"
        },
        {
          label: "orange",
          color: "rgb(255, 159, 64)"
        },
        {
          label: "yellow",
          color: "rgb(255, 205, 86)"
        },
        {
          label: "green",
          color: "rgb(75, 192, 192)"
        },
        {
          label: "blue",
          color: "rgb(54, 162, 235)"
        },
        {
          label: "purple",
          color: "rgb(153, 102, 255)"
        },
        {
          label: "grey",
          color: "rgb(201, 203, 207)"
        },
      ],
      graphColors:[],
      labels:[],
    };
  },
  mounted() {
    this.fillData();
  },
  methods: {
    fillData() {
      this.getRandomInt()
      this.datacollection = {
        datasets: [
          {
            data: this.datas,
            backgroundColor: this.graphColors
          }
        ],
        labels: this.labels
      };
    },
    getRandomInt() {
      this.datas.push(5)
      var addColor = this.baseColors[(this.datas.length-1)%this.baseColors.length].color
      this.graphColors.push(addColor)
      var addLabel = this.baseColors[(this.datas.length-1)%this.baseColors.length].label
      this.labels.push(addLabel)


    },
    getBackGroundColors(){
      colors = []
      for(var i =0; i< this.data.count ;i++){
        console.log(this.colors[i])
        colors.push(this.colors[i])
      }
    }
  }
};
</script>

<style>
.small {
  max-width: 600px;
  margin: 150px auto;
}
</style>