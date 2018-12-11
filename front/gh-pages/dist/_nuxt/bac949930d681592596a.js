/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[5,4],{289:function(t,e,s){var o={"./af":162,"./af.js":162,"./ar":163,"./ar-dz":164,"./ar-dz.js":164,"./ar-kw":165,"./ar-kw.js":165,"./ar-ly":166,"./ar-ly.js":166,"./ar-ma":167,"./ar-ma.js":167,"./ar-sa":168,"./ar-sa.js":168,"./ar-tn":169,"./ar-tn.js":169,"./ar.js":163,"./az":170,"./az.js":170,"./be":171,"./be.js":171,"./bg":172,"./bg.js":172,"./bm":173,"./bm.js":173,"./bn":174,"./bn.js":174,"./bo":175,"./bo.js":175,"./br":176,"./br.js":176,"./bs":177,"./bs.js":177,"./ca":178,"./ca.js":178,"./cs":179,"./cs.js":179,"./cv":180,"./cv.js":180,"./cy":181,"./cy.js":181,"./da":182,"./da.js":182,"./de":183,"./de-at":184,"./de-at.js":184,"./de-ch":185,"./de-ch.js":185,"./de.js":183,"./dv":186,"./dv.js":186,"./el":187,"./el.js":187,"./en-au":188,"./en-au.js":188,"./en-ca":189,"./en-ca.js":189,"./en-gb":190,"./en-gb.js":190,"./en-ie":191,"./en-ie.js":191,"./en-il":192,"./en-il.js":192,"./en-nz":193,"./en-nz.js":193,"./eo":194,"./eo.js":194,"./es":195,"./es-do":196,"./es-do.js":196,"./es-us":197,"./es-us.js":197,"./es.js":195,"./et":198,"./et.js":198,"./eu":199,"./eu.js":199,"./fa":200,"./fa.js":200,"./fi":201,"./fi.js":201,"./fo":202,"./fo.js":202,"./fr":203,"./fr-ca":204,"./fr-ca.js":204,"./fr-ch":205,"./fr-ch.js":205,"./fr.js":203,"./fy":206,"./fy.js":206,"./gd":207,"./gd.js":207,"./gl":208,"./gl.js":208,"./gom-latn":209,"./gom-latn.js":209,"./gu":210,"./gu.js":210,"./he":211,"./he.js":211,"./hi":212,"./hi.js":212,"./hr":213,"./hr.js":213,"./hu":214,"./hu.js":214,"./hy-am":215,"./hy-am.js":215,"./id":216,"./id.js":216,"./is":217,"./is.js":217,"./it":218,"./it.js":218,"./ja":219,"./ja.js":219,"./jv":220,"./jv.js":220,"./ka":221,"./ka.js":221,"./kk":222,"./kk.js":222,"./km":223,"./km.js":223,"./kn":224,"./kn.js":224,"./ko":225,"./ko.js":225,"./ky":226,"./ky.js":226,"./lb":227,"./lb.js":227,"./lo":228,"./lo.js":228,"./lt":229,"./lt.js":229,"./lv":230,"./lv.js":230,"./me":231,"./me.js":231,"./mi":232,"./mi.js":232,"./mk":233,"./mk.js":233,"./ml":234,"./ml.js":234,"./mn":235,"./mn.js":235,"./mr":236,"./mr.js":236,"./ms":237,"./ms-my":238,"./ms-my.js":238,"./ms.js":237,"./mt":239,"./mt.js":239,"./my":240,"./my.js":240,"./nb":241,"./nb.js":241,"./ne":242,"./ne.js":242,"./nl":243,"./nl-be":244,"./nl-be.js":244,"./nl.js":243,"./nn":245,"./nn.js":245,"./pa-in":246,"./pa-in.js":246,"./pl":247,"./pl.js":247,"./pt":248,"./pt-br":249,"./pt-br.js":249,"./pt.js":248,"./ro":250,"./ro.js":250,"./ru":251,"./ru.js":251,"./sd":252,"./sd.js":252,"./se":253,"./se.js":253,"./si":254,"./si.js":254,"./sk":255,"./sk.js":255,"./sl":256,"./sl.js":256,"./sq":257,"./sq.js":257,"./sr":258,"./sr-cyrl":259,"./sr-cyrl.js":259,"./sr.js":258,"./ss":260,"./ss.js":260,"./sv":261,"./sv.js":261,"./sw":262,"./sw.js":262,"./ta":263,"./ta.js":263,"./te":264,"./te.js":264,"./tet":265,"./tet.js":265,"./tg":266,"./tg.js":266,"./th":267,"./th.js":267,"./tl-ph":268,"./tl-ph.js":268,"./tlh":269,"./tlh.js":269,"./tr":270,"./tr.js":270,"./tzl":271,"./tzl.js":271,"./tzm":272,"./tzm-latn":273,"./tzm-latn.js":273,"./tzm.js":272,"./ug-cn":274,"./ug-cn.js":274,"./uk":275,"./uk.js":275,"./ur":276,"./ur.js":276,"./uz":277,"./uz-latn":278,"./uz-latn.js":278,"./uz.js":277,"./vi":279,"./vi.js":279,"./x-pseudo":280,"./x-pseudo.js":280,"./yo":281,"./yo.js":281,"./zh-cn":282,"./zh-cn.js":282,"./zh-hk":283,"./zh-hk.js":283,"./zh-tw":284,"./zh-tw.js":284};function i(t){var e=a(t);return s(e)}function a(t){var e=o[t];if(!(e+1)){var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}return e}i.keys=function(){return Object.keys(o)},i.resolve=a,t.exports=i,i.id=289},293:function(t,e,s){var o=s(359);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,s(13).default)("641b39ba",o,!0,{})},304:function(t,e,s){"use strict";s.r(e);var o=s(295),i=o.c.reactiveProp;e.default={extends:o.b,mixins:[i],props:["options"],mounted:function(){this.renderChart(this.chartData,this.options)}}},357:function(t,e){!function(){"use strict";if("undefined"!=typeof Chart){"function"!=typeof Object.assign&&(Object.assign=function(t,e){if(null==t)throw new TypeError("Cannot convert undefined or null to object");for(var s=Object(t),o=1;o<arguments.length;o++){var i=arguments[o];if(null!=i)for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(s[a]=i[a])}return s});var t={};["pie","doughnut","polarArea","bar"].forEach(function(e){t[e]=!0}),e.prototype.setup=function(t,e){this.chart=t,this.ctx=t.ctx,this.args={},this.barTotal={};var s=t.config.options;this.options=Object.assign({position:"default",precision:0,fontSize:s.defaultFontSize,fontColor:s.defaultFontColor,fontStyle:s.defaultFontStyle,fontFamily:s.defaultFontFamily,shadowOffsetX:3,shadowOffsetY:3,shadowColor:"rgba(0,0,0,0.3)",shadowBlur:6,images:[],outsidePadding:2,textMargin:2,overlap:!0},e),"bar"===t.config.type&&(this.options.position="default",this.options.arc=!1,this.options.overlap=!0)},e.prototype.render=function(){this.labelBounds=[],this.chart.data.datasets.forEach(this.renderToDataset)},e.prototype.renderToDataset=function(t,e){this.totalPercentage=0,this.total=null;var s=this.args[e];s.meta.data.forEach(function(e,o){this.renderToElement(t,s,e,o)}.bind(this))},e.prototype.renderToElement=function(t,e,s,o){if(this.shouldRenderToElement(e.meta,s)){this.percentage=null;var i=this.getLabel(t,s,o);if(i){var a=this.ctx;a.save(),a.font=Chart.helpers.fontString(this.options.fontSize,this.options.fontStyle,this.options.fontFamily);var r=this.getRenderInfo(s,i);this.drawable(s,i,r)?(a.beginPath(),a.fillStyle=this.getFontColor(t,s,o),this.renderLabel(i,r),a.restore()):a.restore()}}},e.prototype.renderLabel=function(t,e){return this.options.arc?this.renderArcLabel(t,e):this.renderBaseLabel(t,e)},e.prototype.renderBaseLabel=function(t,e){var s=this.ctx;if("object"==typeof t)s.drawImage(t,e.x-t.width/2,e.y-t.height/2,t.width,t.height);else{s.save(),s.textBaseline="top",s.textAlign="center",this.options.textShadow&&(s.shadowOffsetX=this.options.shadowOffsetX,s.shadowOffsetY=this.options.shadowOffsetY,s.shadowColor=this.options.shadowColor,s.shadowBlur=this.options.shadowBlur);for(var o=t.split("\n"),i=0;i<o.length;i++){var a=e.y-this.options.fontSize/2*o.length+this.options.fontSize*i;s.fillText(o[i],e.x,a)}s.restore()}},e.prototype.renderArcLabel=function(t,e){var s=this.ctx,o=e.radius,i=e.view;if(s.save(),s.translate(i.x,i.y),"string"==typeof t){s.rotate(e.startAngle),s.textBaseline="middle",s.textAlign="left";var a=t.split("\n"),r=0,n=[],l=0;"border"===this.options.position&&(l=(a.length-1)*this.options.fontSize/2);for(var h=0;h<a.length;++h){var c=s.measureText(a[h]);c.width>r&&(r=c.width),n.push(c.width)}for(h=0;h<a.length;++h){var u=a[h],d=(a.length-1-h)*-this.options.fontSize+l;s.save();var f=(r-n[h])/2;s.rotate(f/o);for(var p=0;p<u.length;p++){var g=u.charAt(p);c=s.measureText(g),s.save(),s.translate(0,-1*o),s.fillText(g,0,d),s.restore(),s.rotate(c.width/o)}s.restore()}}else s.rotate((i.startAngle+Math.PI/2+e.endAngle)/2),s.translate(0,-1*o),this.renderLabel(t,{x:0,y:0});s.restore()},e.prototype.shouldRenderToElement=function(t,e){return!t.hidden&&!e.hidden&&(this.options.showZero||"polarArea"===this.chart.config.type?0!==e._view.outerRadius:0!==e._view.circumference)},e.prototype.getLabel=function(t,e,s){var o;if("function"==typeof this.options.render)o=this.options.render({label:this.chart.config.data.labels[s],value:t.data[s],percentage:this.getPercentage(t,e,s),dataset:t,index:s});else switch(this.options.render){case"value":o=t.data[s];break;case"label":o=this.chart.config.data.labels[s];break;case"image":o=this.options.images[s]?this.loadImage(this.options.images[s]):"";break;case"percentage":default:o=this.getPercentage(t,e,s)+"%"}return"object"==typeof o?o=this.loadImage(o):null!=o&&(o=o.toString()),o},e.prototype.getFontColor=function(t,e,s){var o=this.options.fontColor;return"function"==typeof o?o=o({label:this.chart.config.data.labels[s],value:t.data[s],percentage:this.getPercentage(t,e,s),backgroundColor:t.backgroundColor[s],dataset:t,index:s}):"string"!=typeof o&&(o=o[s]||this.chart.config.options.defaultFontColor),o},e.prototype.getPercentage=function(t,e,s){if(null!==this.percentage)return this.percentage;var o;if("polarArea"===this.chart.config.type){if(null===this.total){this.total=0;for(var i=0;i<t.data.length;++i)this.total+=t.data[i]}o=t.data[s]/this.total*100}else if("bar"===this.chart.config.type){if(void 0===this.barTotal[s]){this.barTotal[s]=0;for(i=0;i<this.chart.data.datasets.length;++i)this.barTotal[s]+=this.chart.data.datasets[i].data[s]}o=t.data[s]/this.barTotal[s]*100}else o=e._view.circumference/this.chart.config.options.circumference*100;return o=parseFloat(o.toFixed(this.options.precision)),this.options.showActualPercentages||("bar"===this.chart.config.type&&(this.totalPercentage=this.barTotalPercentage[s]||0),this.totalPercentage+=o,this.totalPercentage>100&&(o-=this.totalPercentage-100,o=parseFloat(o.toFixed(this.options.precision))),"bar"===this.chart.config.type&&(this.barTotalPercentage[s]=this.totalPercentage)),this.percentage=o,o},e.prototype.getRenderInfo=function(t,e){return"bar"===this.chart.config.type?this.getBarRenderInfo(t,e):this.options.arc?this.getArcRenderInfo(t,e):this.getBaseRenderInfo(t,e)},e.prototype.getBaseRenderInfo=function(t,e){if("outside"===this.options.position||"border"===this.options.position){var s,o,i=t._view,a=i.startAngle+(i.endAngle-i.startAngle)/2,r=i.outerRadius/2;if("border"===this.options.position?o=(i.outerRadius-r)/2+r:"outside"===this.options.position&&(o=i.outerRadius-r+r+this.options.textMargin),s={x:i.x+Math.cos(a)*o,y:i.y+Math.sin(a)*o},"outside"===this.options.position){var n=this.options.textMargin+this.measureLabel(e).width/2;s.x+=s.x<i.x?-n:n}return s}return t.tooltipPosition()},e.prototype.getArcRenderInfo=function(t,e){var s,o=t._view;s="outside"===this.options.position?o.outerRadius+this.options.fontSize+this.options.textMargin:"border"===this.options.position?(o.outerRadius/2+o.outerRadius)/2:(o.innerRadius+o.outerRadius)/2;var i=o.startAngle,a=o.endAngle,r=a-i;return i+=Math.PI/2,{radius:s,startAngle:i+=((a+=Math.PI/2)-(this.measureLabel(e).width/s+i))/2,endAngle:a,totalAngle:r,view:o}},e.prototype.getBarRenderInfo=function(t,e){var s=t.tooltipPosition();return s.y-=this.measureLabel(e).height/2+this.options.textMargin,s},e.prototype.drawable=function(t,e,s){if(this.options.overlap)return!0;if(this.options.arc)return s.endAngle-s.startAngle<=s.totalAngle;var o=this.measureLabel(e),i=s.x-o.width/2,a=s.x+o.width/2,r=s.y-o.height/2,n=s.y+o.height/2;return"outside"===this.options.renderInfo?this.outsideInRange(i,a,r,n):t.inRange(i,r)&&t.inRange(i,n)&&t.inRange(a,r)&&t.inRange(a,n)},e.prototype.outsideInRange=function(t,e,s,o){for(var i=this.labelBounds,a=0;a<i.length;++a){for(var r=i[a],n=[[t,s],[t,o],[e,s],[e,o]],l=0;l<n.length;++l){var h=n[l][0],c=n[l][1];if(h>=r.left&&h<=r.right&&c>=r.top&&c<=r.bottom)return!1}n=[[r.left,r.top],[r.left,r.bottom],[r.right,r.top],[r.right,r.bottom]];for(l=0;l<n.length;++l){h=n[l][0],c=n[l][1];if(h>=t&&h<=e&&c>=s&&c<=o)return!1}}return i.push({left:t,right:e,top:s,bottom:o}),!0},e.prototype.measureLabel=function(t){if("object"==typeof t)return{width:t.width,height:t.height};for(var e=0,s=t.split("\n"),o=0;o<s.length;++o){var i=this.ctx.measureText(s[o]);i.width>e&&(e=i.width)}return{width:e,height:this.options.fontSize*s.length}},e.prototype.loadImage=function(t){var e=new Image;return e.src=t.src,e.width=t.width,e.height=t.height,e},Chart.plugins.register({id:"labels",beforeDatasetsUpdate:function(s,o){if(t[s.config.type]){Array.isArray(o)||(o=[o]);var i=o.length;s._labels&&i===s._labels.length||(s._labels=o.map(function(){return new e}));for(var a=!1,r=0,n=0;n<i;++n){var l=s._labels[n];if(l.setup(s,o[n]),"outside"===l.options.position){a=!0;var h=1.5*l.options.fontSize+l.options.outsidePadding;h>r&&(r=h)}}a&&(s.chartArea.top+=r,s.chartArea.bottom-=r)}},afterDatasetUpdate:function(e,s,o){t[e.config.type]&&e._labels.forEach(function(t){t.args[s.index]=s})},beforeDraw:function(e){t[e.config.type]&&e._labels.forEach(function(t){t.barTotalPercentage={}})},afterDatasetsDraw:function(e){t[e.config.type]&&e._labels.forEach(function(t){t.render()})}})}else console.error("Can not find Chart object.");function e(){this.renderToDataset=this.renderToDataset.bind(this)}}()},358:function(t,e,s){"use strict";var o=s(293);s.n(o).a},359:function(t,e,s){(t.exports=s(12)(!1)).push([t.i,"\n.small{max-width:600px;margin:150px auto\n}",""])},364:function(t,e,s){"use strict";s.r(e);var o=s(304),i=(s(357),{components:{PieChart:o.default},data:function(){return{datacollection:null,chartOptions:{title:{display:!0,fontSize:35,text:"タイムスケジュール"},plugins:{labels:[{render:function(t){var e;if(console.log(t),0==t.index)e="0 ~ "+t.value;else{for(var s=0,o=0,i=0;i<t.index;i++)i!=t.dataset.data.length-1&&(o=(s+=t.dataset.data[i])+t.value);e=s+"~"+o}return e},fontSize:14,fontStyle:"bold",fontColor:"#000",position:"outside"},{render:"label",fontSize:14,fontStyle:"bold",fontColor:"#000"}]}},datas:[],baseColors:[{color:"rgb(255, 99, 132)"},{color:"rgb(255, 159, 64)"},{color:"rgb(255, 205, 86)"},{color:"rgb(75, 192, 192)"},{color:"rgb(54, 162, 235)"},{color:"rgb(153, 102, 255)"},{color:"rgb(201, 203, 207)"}],graphColors:[],labels:[],schedules:[{fromTime:0,toTime:1,plan:""}],timeOptions:function(){for(var t=[],e=0;e<=24;e+=.5)t.push({value:e,text:e});return t}}},mounted:function(){this.fillData()},methods:{fillData:function(){this.setPieChart(),this.datacollection={datasets:[{data:this.datas,backgroundColor:this.graphColors}],labels:this.labels}},setPieChart:function(){this.datas=[],this.graphColors=[],this.labels=[];for(var t=0;t<this.schedules.length;t++){this.datas.push(this.schedules[t].toTime-this.schedules[t].fromTime);var e=this.baseColors[t%this.baseColors.length].color;this.graphColors.push(e);var s=this.schedules[t].plan;this.labels.push(s)}if(this.schedules.slice(-1)[0].toTime<24){this.datas.push(24-this.schedules.slice(-1)[0].toTime);e=this.baseColors[(this.schedules.length+1)%this.baseColors.length].color;this.graphColors.push(e),this.labels.push("その他")}},getBackGroundColors:function(){colors=[];for(var t=0;t<this.data.count;t++)colors.push(this.colors[t])},selectToTime:function(){this.toTimeEqualizeNextFromTime()},toTimeEqualizeNextFromTime:function(){for(var t=0;t<this.schedules.length;t++)t!=this.schedules.length-1&&(this.schedules[t+1].fromTime=this.schedules[t].toTime)},addSchedule:function(){var t=this.schedules.slice(-1)[0].toTime;this.schedules.push({fromTime:t,toTime:t+1,plan:""})},SetSample:function(){this.schedules=[{fromTime:0,toTime:7,plan:"寝る"},{fromTime:7,toTime:8,plan:"準備＆通勤"},{fromTime:8,toTime:17,plan:"仕事"},{fromTime:17,toTime:18,plan:"退勤"},{fromTime:18,toTime:20,plan:"夜ご飯＆風呂"},{fromTime:20,toTime:22,plan:"副業"},{fromTime:22,toTime:24,plan:"自由"}],this.schedules.push()}}}),a=(s(358),s(18)),r=Object(a.a)(i,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("b-container",{staticClass:"mt-5"},[s("div",{staticClass:"card p-1"},[s("b-row",[s("b-col",{attrs:{lg:"7"}},[s("div",[s("pie-chart",{attrs:{"chart-data":t.datacollection,options:t.chartOptions}})],1)]),t._v(" "),s("b-col",{attrs:{lg:"5"}},[s("b-row",{staticClass:"mt-5"},[s("b-col",{attrs:{cols:"1"}}),t._v(" "),s("b-col",{attrs:{cols:"3"}},[s("label",[t._v("From")])]),t._v(" "),s("b-col",{attrs:{cols:"3"}},[s("label",[t._v("To")])]),t._v(" "),s("b-col",{attrs:{cols:"5"}},[s("label",[t._v("スケジュール")])])],1),t._v(" "),t._l(t.schedules,function(e,o){return s("b-row",{key:e.id},[s("b-col",{staticClass:"h2",attrs:{cols:"1"}},[t._v(t._s(o+1))]),t._v(" "),s("b-col",{attrs:{cols:"3"}},[s("p",{staticClass:"form-control"},[t._v(t._s(e.fromTime))])]),t._v(" "),s("b-col",{attrs:{cols:"3"}},[s("b-form-select",{staticClass:"mb-3",attrs:{options:t.timeOptions()},on:{input:function(e){t.selectToTime()}},model:{value:e.toTime,callback:function(s){t.$set(e,"toTime",s)},expression:"schedule.toTime"}})],1),t._v(" "),s("b-col",{attrs:{cols:"5"}},[s("b-form-input",{model:{value:e.plan,callback:function(s){t.$set(e,"plan",s)},expression:"schedule.plan"}})],1)],1)}),t._v(" "),s("b-row",[s("b-col",{attrs:{cols:"9"}}),t._v(" "),s("b-col",{attrs:{cols:"3"}},[s("b-button",{staticClass:"btn-block",attrs:{variant:"primary"},on:{click:function(e){t.addSchedule()}}},[t._v("追加")])],1)],1)],2)],1),t._v(" "),s("b-row",{staticClass:"mt-4"},[s("b-col",{attrs:{lg:"8",col:"12"}}),t._v(" "),s("b-col",{attrs:{lg:"2",col:"6"}},[s("b-button",{staticClass:"btn-block mt-3",attrs:{variant:"primary"},on:{click:function(e){t.SetSample()}}},[t._v("test")])],1),t._v(" "),s("b-col",{attrs:{lg:"2",col:"6"}},[s("b-button",{staticClass:"btn-block mt-3",attrs:{variant:"primary"},on:{click:function(e){t.fillData()}}},[t._v("Set")])],1)],1)],1)])],1)},[],!1,null,null,null);r.options.__file="RandomChart.vue";e.default=r.exports}}]);