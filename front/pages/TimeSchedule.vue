<template>
  <div>
    <b-container class="mt-5">
      <div class="card p-1">
        <b-row>
          <b-col lg="7">
            <div>
              <!-- <pie-chart 
                :chart-data="datacollection" 
                :options="chartOptions">
              </pie-chart> -->
              <b-button 
              id="download"
              @click="onDownload()">download</b-button>
            </div>
          </b-col>
          <b-col lg="5">
            <b-row class="mt-5 no-gutters">
              <b-col cols="1"></b-col>
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
            v-bind:key="schedule.id"
            class="no-gutters">
              <b-col cols="1" >
                <b-button 
                v-bind:style="{ backgroundColor: baseColors[schedule.colorNo] }"
                id="colorBox"
                @click="onChangeColor(index)" ></b-button>
              </b-col>
              <b-col cols="3" class="">
                <p class="form-control">{{schedule.fromTime}}</p>
              </b-col>
              <b-col cols="3">
                <b-form-select
                  v-model="schedule.toTime"
                  :options="timeOptions()"
                  class="mb-3"
                  @input="selectToTime()"
                ></b-form-select>
              </b-col>
              <b-col cols="5">
                <b-form-input v-model="schedule.plan"></b-form-input>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="9"></b-col>
              <b-col cols="3">
                <b-button class="btn-block" variant="primary" @click="onAddSchedule()">追加</b-button>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
        <b-row class="mt-4">
          <b-col lg="8" cols="12"></b-col>
          <b-col lg="2" cols="6">
            <b-button variant="primary" class="btn-block mt-3" @click="SetSample()">test</b-button>
          </b-col>
          <b-col lg="2" cols="6">
            <b-button variant="primary" class="btn-block mt-3" @click="fillData()">Set</b-button>
          </b-col>
        </b-row>
      </div>
    </b-container>
  </div>
</template>

<script>
import PieChart from "./PieChart.js";
import "chartjs-plugin-labels";

export default {
  components: {
    PieChart
  },
  data() {
    return {
      activeColor: 'black',
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
              render: function(args) {
                var time;
                if (args.index == 0) {
                  time = "0 ~ " + args.value;
                }else {
                  var from = 0;
                  var to = 0;
                  for (var i = 0; i < args.index; i++) {
                    if (i != args.dataset.data.length - 1) {
                      from += args.dataset.data[i];
                      to = from + args.value;
                    }
                  }
                  time = from + "~" + to;
                }
                return time;
              },
              fontSize: 14,
              fontStyle: "bold",
              fontColor: "#000",
              position: "outside"
            },
            {
              render: "label",
              fontSize: 14,
              fontStyle: "bold",
              fontColor: "#000"
            }
          ]
        }
      },
      datas: [],
      baseColors: [
        "rgb(255, 99, 132)" ,
        "rgb(255, 159, 64)" ,
        "rgb(255, 205, 86)" ,
        "rgb(75, 192, 192)" ,
        "rgb(54, 162, 235)" ,
        "rgb(153, 102, 255)" ,
        "rgb(201, 203, 207)"
      ],
      graphColors: [],
      labels: [],
      schedules: [
        {
          colorNo: 0,
          fromTime: 0,
          toTime: 1,
          plan: "",
        }
      ],
      timeOptions: () => {
        var times = [];
        for (var i = 0; i <= 24; i += 0.5) {
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
      this.setChartParam();
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
    setChartParam() {
      this.datas = [];
      this.graphColors = [];
      this.labels = [];
      //スケジュール分 時刻・カラー・ラベルを設定する
      for (var i = 0; i < this.schedules.length; i++) {
        this.datas.push(this.schedules[i].toTime - this.schedules[i].fromTime);
        var addColor = this.baseColors[i % this.baseColors.length].color;
        this.graphColors.push(addColor);
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
    onAddSchedule() {
      var fromTime = this.schedules.slice(-1)[0].toTime;
      this.schedules.push({
        colorNo: this.schedules.length,
        fromTime: fromTime,
        toTime: fromTime + 1,
        plan: "",
      });
    },
    SetSample() {
      this.schedules = [
        {
          colorNo: 0,
          fromTime: 0,
          toTime: 7,
          plan: "寝る"
        },
        {
          colorNo: 1,
          fromTime: 7,
          toTime: 8,
          plan: "準備＆通勤"
        },
        {
          colorNo: 2,
          fromTime: 8,
          toTime: 17,
          plan: "仕事"
        },
        {
          colorNo: 3,
          fromTime: 17,
          toTime: 18,
          plan: "退勤"
        },
        {
          colorNo: 4,
          fromTime: 18,
          toTime: 20,
          plan: "夜ご飯＆風呂"
        },
        {
          colorNo: 5,
          fromTime: 20,
          toTime: 22,
          plan: "副業"
        },
        {
          colorNo: 6,
          fromTime: 22,
          toTime: 24,
          plan: "自由"
        }
      ];
      this.schedules.push();
    },
    onDownload() {
      let canvas = document.getElementById("pie-chart");
      let link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = "time_schedule.png";
      link.click();
    },
    onChangeColor(index) {
      this.schedules[index].colorNo = 
      (this.schedules[index].colorNo + 1 )%this.baseColors.length
    }
  }
};
</script>

<style>
.small {
  max-width: 600px;
  margin: 150px auto;
}
#colorBox{
  margin-top: 7px;
  width: 20px;
  height: 25px;
}
</style>