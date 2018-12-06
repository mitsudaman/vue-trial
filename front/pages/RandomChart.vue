<template>
  <div>
    <b-container class="mt-5">
      <b-card 
        img-top
        class="mb-2">
      <b-row>
        <b-col cols="7">
          <div class="">
            <!-- <line-chart :chart-data="datacollection"></line-chart> -->
            <pie-chart 
            :chart-data="datacollection"
            :options="chartOptions"></pie-chart>{{chartOptions}}
          </div>
        </b-col>
        <b-col cols="5">
          <b-row>
            <b-col cols="1">
            </b-col>
            <b-col cols="3">
              <label>From</label>
            </b-col>
            <b-col cols="3">
              <label>To</label>
            </b-col>
            <b-col cols="5">
              <label>スケジュール</label>
            </b-col>
          </b-row>
          <b-row
          v-for="(schedule,index) in schedules"
          v-bind:key="schedule.id">
            <b-col cols="1" class="h2">
              {{index + 1}}
            </b-col>
            <b-col cols="3">
              <p class="form-control">{{schedule.fromTime}}</p>
            </b-col>
            <b-col cols="3">
              <b-form-select 
                v-model="schedule.toTime" 
                :options="timeOptions()" 
                class="mb-3"
                @input="selectToTime()">
              </b-form-select>
            </b-col>
            <b-col cols="5">
              <b-form-input v-model="schedule.plan"></b-form-input>
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="9">
            </b-col>
            <b-col cols="3">
              <b-button  
                class="btn-block" 
                variant="primary"
                @click="addSchedule()">追加</b-button>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="10"></b-col>
        <b-col cols="2">
          <b-button 
            variant="primary"
            class="btn-block mt-3"
            @click="fillData()">Set</b-button ></b-col>
      </b-row>
    </b-card>
    </b-container>
  </div>
</template>

<script>
// import LineChart from './LineChart.js'
import PieChart from "./PieChart.js";
import 'chartjs-plugin-labels';

export default {
  components: {
    // LineChart
    PieChart
  },
  data() {
    return {
      datacollection: null,
      chartOptions: {
        title: {
          display: true,
          fontSize: 35,
          text: "タイムスケジュール"
        },
        plugins: {
          labels: [
            {
              render: 'value',
              position: 'outside'
            },
            {
              render: 'label'
            }
          ]
        },
      },
      datas: [],
      baseColors: [
        { color: "rgb(255, 99, 132)" },
        { color: "rgb(255, 159, 64)" },
        { color: "rgb(255, 205, 86)" },
        { color: "rgb(75, 192, 192)" },
        { color: "rgb(54, 162, 235)" },
        { color: "rgb(153, 102, 255)" },
        { color: "rgb(201, 203, 207)" }
      ],
      graphColors: [],
      labels: [],
      schedules: [
        {
          fromTime: 0,
          toTime: 1,
          plan: ""
        }
      ],
      timeOptions: () => {
        var times = [];
        for (var i = 0; i <= 24; i++) {
          times.push({ value: i, text: i });
        }
        return times;
      }
    };
  },
  mounted() {
    this.fillData();
  },
  methods: {
    fillData() {
      this.setPieChart();
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
    setPieChart() {
      this.datas = [];
      this.graphColors = [];
      this.labels = [];
      //スケジュール分 時刻・カラー・ラベルを設定する
      for (var i = 0; i < this.schedules.length; i++) {
        this.datas.push(this.schedules[i].toTime - this.schedules[i].fromTime);

        var addColor = this.baseColors[i % this.baseColors.length].color;
        this.graphColors.push(addColor);
        // var addLabel = this.baseColors[(i)%this.baseColors.length].label
        var addLabel = this.schedules[i].plan;
        this.labels.push(addLabel);
      }
      //最後のtoTimeが24以下の場合埋め合わせ用の時間を入れる
      if (this.schedules.slice(-1)[0].toTime < 24) {
        this.datas.push(24 - this.schedules.slice(-1)[0].toTime);
        var addColor = this.baseColors[
          (this.schedules.length + 1) % this.baseColors.length
        ].color;
        this.graphColors.push(addColor);
        this.labels.push("その他");
      }
    },
    getBackGroundColors() {
      colors = [];
      for (var i = 0; i < this.data.count; i++) {
        colors.push(this.colors[i]);
      }
    },
    selectToTime() {
      this.toTimeEqualizeNextFromTime();
    },
    toTimeEqualizeNextFromTime() {
      for (var i = 0; i < this.schedules.length; i++) {
        if (i != this.schedules.length - 1) {
          this.schedules[i + 1].fromTime = this.schedules[i].toTime;
        }
      }
    },
    addSchedule() {
      var fromTime = this.schedules.slice(-1)[0].toTime;
      this.schedules.push({
        fromTime: fromTime,
        toTime: fromTime + 1,
        plan: ""
      });
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