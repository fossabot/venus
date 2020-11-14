(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2d22675a"],{e96f:function(e,t,a){"use strict";a.r(t);a("96cf");var n=a("1da1"),o=a("cebe"),r=a.n(o),i={name:"AmapSample",data:function(){return{key:"f616f5a0f4e91791da57d63a0f41ee39",mapDemo3D:null,mapDemoPoint:null}},mounted:function(){var e=this,t=document.createElement("script");document.head.appendChild(t),t.onload=Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.loadMap3D(),e.loadMapPoint();case 2:case"end":return t.stop()}}),t)}))),t.id="amap",t.src="//webapi.amap.com/maps?v=1.4.15&plugin=Map3D&key=".concat(this.key)},methods:{loadMap3D:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=e.$message.loading("正在加载 3D 地图",0);try{e.mapDemo3D=new AMap.Map("map-demo-3d",{viewMode:"3D",center:[113.321206,23.119293],rotateEnable:!0,pitchEnable:!0,zoom:17,zooms:[2,20],pitch:50,rotation:-15}),AMap.plugin(["AMap.Scale","AMap.ControlBar"],(function(){e.mapDemo3D.addControl(new AMap.ControlBar({position:{right:"10px",top:"10px"}})),e.mapDemo3D.addControl(new AMap.Scale)})),e.mapDemo3D.on("complete",(function(){a()}))}catch(t){e.$notify.error({duration:null,message:"3D 地图加载出错",description:t}),a()}case 2:case"end":return t.stop()}}),t)})))()},loadMapPoint:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var a,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=e.$message.loading("正在加载武汉市车辆密度图",0);try{o=document.createElement("script"),document.head.appendChild(o),o.onload=Object(n.a)(regeneratorRuntime.mark((function t(){var n,o,i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.mapDemoPoint=new AMap.Map("map-demo-point",{viewMode:"3D",center:[114.284702,30.5],zoom:11.5,features:["bg","road"],skyColor:"#eee",pitch:0,mapStyle:"amap://styles/grey"}),e.mapDemoPoint.on("complete",(function(){a()})),t.next=4,r.a.get("https://a.amap.com/Loca/static/mock/sfcars.csv");case 4:n=t.sent,o=n.data,(i=new Loca.PointCloudLayer({map:e.mapDemoPoint,fitView:!1})).setData(o,{lnglat:function(e){var t=e.value;return[t.lng,t.lat]},type:"csv"}),i.setOptions({style:{opacity:.8,radius:.9,color:"rgba(42, 167, 184, 1)"}}),i.render();case 10:case"end":return t.stop()}}),t)}))),o.src="//webapi.amap.com/loca?v=1.3.2&key=".concat(e.key),o.id="loca"}catch(t){e.$notify.error({duration:null,message:"武汉市车辆密度图加载出错",description:t}),a()}case 2:case"end":return t.stop()}}),t)})))()}},beforeDestroy:function(){this.mapDemo3D&&(this.mapDemo3D.destroy(),this.mapDemo3D=null),this.mapDemoPoint&&(this.mapDemoPoint.destroy(),this.mapDemoPoint=null),window.AMap=null,window.Loca=null;for(var e=document.getElementsByTagName("script"),t=0;t<e.length;t+=1)"amap"!==e[t].id&&"loca"!==e[t].id||e[t].parentNode.removeChild(e[t])}},s=a("2877"),c=Object(s.a)(i,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"section-card mb-6"},[a("h3",{staticClass:"section-card__title"},[e._v("3D 地图")]),a("p",{staticClass:"mt-6 mb-2"},[e._v("开启 3D 地图视图效果，需要引用 JSAPI v1.4.0 以上版本的JSAPI，同时在 Map 初始化的时候给地图 viewMode:3D 属性")]),a("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[a("code",{staticClass:"javascript"},[e._v(e._s("const map = new AMap.Map('container', {\n    pitch:75, // 地图俯仰角度，有效范围 0 度- 83 度\n    viewMode:'3D', // 开启3D视图，默认为关闭\n})"))])])]),e._m(0),a("div",{staticClass:"section-card mb-6"},[a("h3",{staticClass:"section-card__title"},[e._v("武汉市车辆密度图")]),a("p",{staticClass:"mt-6 mb-2"},[e._v("开启 3D 地图视图效果，需要引用 JSAPI v1.4.0 以上版本的JSAPI，同时在 Map 初始化的时候给地图 viewMode:3D 属性")]),a("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[a("code",{staticClass:"javascript"},[e._v(e._s("const layer = new Loca.PointCloudLayer({\n    map: this.mapDemoPoint,\n    fitView: false,\n})\n\nlayer.setData(csv, {\n    lnglat(obj) {\n        const { value } = obj\n        return [value.lng, value.lat]\n    },\n    type: 'csv',\n})\n\nlayer.setOptions({\n    style: {\n        opacity: 0.8,\n        radius: 0.9,\n        color: 'rgba(42, 167, 184, 1)',\n    },\n})\n\nlayer.render()"))])]),a("p",{staticClass:"mt-4 mb-2"},[e._v("效果如下：")]),e._m(1)])])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"mb-16"},[t("div",{staticClass:"w-full",staticStyle:{height:"400px"},attrs:{id:"map-demo-3d"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"rounded-lg overflow-hidden"},[t("div",{staticClass:"w-full",staticStyle:{height:"600px"},attrs:{id:"map-demo-point"}})])}],!1,null,null,null);t.default=c.exports}}]);