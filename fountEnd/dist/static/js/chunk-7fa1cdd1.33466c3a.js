(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7fa1cdd1"],{"22ce":function(e,t,r){"use strict";r.d(t,"f",(function(){return o})),r.d(t,"d",(function(){return a})),r.d(t,"e",(function(){return s})),r.d(t,"b",(function(){return n})),r.d(t,"i",(function(){return l})),r.d(t,"c",(function(){return c})),r.d(t,"j",(function(){return m})),r.d(t,"a",(function(){return u})),r.d(t,"h",(function(){return p})),r.d(t,"g",(function(){return d}));var i=r("b775");function o(e){return Object(i["a"])({url:"/service/serviceList",method:"get",params:e})}function a(e){return Object(i["a"])({url:"/service/serviceDelete",method:"get",params:e})}function s(e){return Object(i["a"])({url:"/service/serviceDetail",method:"get",params:e})}function n(e){return Object(i["a"])({url:"/service/serviceAddHttp",method:"post",params:e})}function l(e){return Object(i["a"])({url:"/service/serviceUpdateHttp",method:"post",params:e})}function c(e){return Object(i["a"])({url:"/service/serviceAddTcp",method:"post",params:e})}function m(e){return Object(i["a"])({url:"/service/serviceUpdateTcp",method:"post",params:e})}function u(e){return Object(i["a"])({url:"/service/serviceAddGrpc",method:"post",params:e})}function p(e){return Object(i["a"])({url:"/service/serviceUpdateGrpc",method:"post",params:e})}function d(e){return Object(i["a"])({url:"/service/serviceStat",method:"get",params:e})}},5357:function(e,t,r){},8446:function(e,t,r){"use strict";r.r(t);var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"mixin-components-container"},[r("el-row",[r("el-form",{ref:"form",attrs:{model:e.form,"label-width":"130px"}},[r("el-card",{staticClass:"box-card",staticStyle:{"margin-bottom":"20px"}},[r("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[!1===e.is_edit?r("span",[e._v("创建TCP服务")]):e._e(),!0===e.is_edit?r("span",[e._v("修改TCP服务")]):e._e()]),r("div",[r("el-form-item",{staticClass:"is-required",attrs:{label:"服务名称"}},[r("el-input",{attrs:{disabled:!0===e.is_edit,placeholder:"6-128位字母数字下划线"},model:{value:e.form.serviceName,callback:function(t){e.$set(e.form,"serviceName",t)},expression:"form.serviceName"}})],1),r("el-form-item",{staticClass:"is-required",attrs:{label:"服务描述"}},[r("el-input",{attrs:{placeholder:"最多255字符，必填"},model:{value:e.form.serviceDesc,callback:function(t){e.$set(e.form,"serviceDesc",t)},expression:"form.serviceDesc"}})],1),r("el-form-item",{staticClass:"is-required",attrs:{label:"端口"}},[r("el-input",{attrs:{disabled:!0===e.is_edit,placeholder:"需要设置8001-8999范围内数字，必填"},model:{value:e.form.port,callback:function(t){e.$set(e.form,"port",t)},expression:"form.port"}})],1),r("el-form-item",{attrs:{label:"开启验证"}},[r("el-switch",{attrs:{"active-value":"1","inactive-value":"0"},model:{value:e.form.openAuth,callback:function(t){e.$set(e.form,"openAuth",t)},expression:"form.openAuth"}})],1),r("el-form-item",{attrs:{label:"IP白名单"}},[r("el-input",{attrs:{placeholder:"格式: 127.0.0.1 多条换行，白名单优先级高于黑名单",type:"textarea",autosize:{minRows:2,maxRows:20}},model:{value:e.form.whiteList,callback:function(t){e.$set(e.form,"whiteList",t)},expression:"form.whiteList"}})],1),r("el-form-item",{attrs:{label:"IP黑名单"}},[r("el-input",{attrs:{placeholder:"格式: 127.0.0.1 多条换行",type:"textarea",autosize:{minRows:2,maxRows:20}},model:{value:e.form.blackList,callback:function(t){e.$set(e.form,"blackList",t)},expression:"form.blackList"}})],1),r("el-form-item",{attrs:{label:"客户端限流"}},[r("el-input",{attrs:{placeholder:"0表示无限制"},model:{value:e.form.clientIpFlowLimit,callback:function(t){e.$set(e.form,"clientIpFlowLimit",t)},expression:"form.clientIpFlowLimit"}})],1),r("el-form-item",{attrs:{label:"服务端限流"}},[r("el-input",{attrs:{placeholder:"0表示无限制"},model:{value:e.form.serviceIpFlowLimit,callback:function(t){e.$set(e.form,"serviceIpFlowLimit",t)},expression:"form.serviceIpFlowLimit"}})],1),r("el-form-item",{attrs:{label:"轮询方式"}},[r("el-radio",{attrs:{label:"0"},model:{value:e.form.roundType,callback:function(t){e.$set(e.form,"roundType",t)},expression:"form.roundType"}},[e._v("random")]),r("el-radio",{attrs:{label:"1"},model:{value:e.form.roundType,callback:function(t){e.$set(e.form,"roundType",t)},expression:"form.roundType"}},[e._v("round-robin")]),r("el-radio",{attrs:{label:"2"},model:{value:e.form.roundType,callback:function(t){e.$set(e.form,"roundType",t)},expression:"form.roundType"}},[e._v("weight_round-robin")]),r("el-radio",{attrs:{label:"3"},model:{value:e.form.roundType,callback:function(t){e.$set(e.form,"roundType",t)},expression:"form.roundType"}},[e._v("ip_hash")])],1),r("el-form-item",{staticClass:"is-required",attrs:{label:"IP列表"}},[r("el-input",{attrs:{placeholder:"格式: 127.0.0.1:80 多条换行",type:"textarea",autosize:{minRows:2,maxRows:20}},model:{value:e.form.ipList,callback:function(t){e.$set(e.form,"ipList",t)},expression:"form.ipList"}})],1),r("el-form-item",{staticClass:"is-required",attrs:{label:"权重列表"}},[r("el-input",{attrs:{placeholder:"格式: 50 多条换行",type:"textarea",autosize:{minRows:2,maxRows:20}},model:{value:e.form.weightList,callback:function(t){e.$set(e.form,"weightList",t)},expression:"form.weightList"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary",loading:e.disableButton},on:{click:e.onSubmit}},[e._v("立即提交")])],1)],1)])],1)],1)],1)},o=[],a=(r("d3b7"),r("25f0"),r("ac1f"),r("5319"),r("a9e3"),r("22ce")),s={components:{},data:function(){return{is_edit:!1,disableButton:!1,form:{id:"0",serviceName:"",serviceDesc:"",port:"",ruleType:"0",rule:"",needHttps:"0",needStripUri:"1",needWebsocket:"1",urlRewrite:"",headerTransfor:"",openAuth:"0",blackList:"",whiteList:"",whiteHostName:"",clientIpFlowLimit:"",serviceIpFlowLimit:"",roundType:"2",ipList:"",weightList:"",forbidList:"",upstreamConnectTimeout:"",upstreamHeaderTimeout:"",upstreamIdleTimeout:"",upstreamMaxIdle:""}}},created:function(){var e=this.$route.params&&this.$route.params.id;e>0&&(this.is_edit=!0,this.fetchData(e)),this.tempRoute=Object.assign({},this.$route)},methods:{fetchData:function(e){var t=this;this.listLoading=!0;var r={id:e};Object(a["e"])(r).then((function(e){var r=e.data;t.form.id=r.info.id,t.form.serviceName=r.info.service_name,t.form.serviceDesc=r.info.service_desc,t.form.port=r.tcp.port.toString(),t.form.ruleType=r.http.rule_type.toString(),t.form.rule=r.http.rule,t.form.needHttps=r.http.need_https.toString(),t.form.needStripUri=r.http.need_strip_uri.toString(),t.form.needWebsocket=r.http.need_websocket.toString(),t.form.urlRewrite=r.http.url_rewrite.replace(/,/g,"\n"),t.form.headerTransfor=r.http.header_transfor.replace(/,/g,"\n"),t.form.openAuth=r.accessControl.open_auth.toString(),t.form.blackList=r.accessControl.black_list.replace(/,/g,"\n"),t.form.whiteList=r.accessControl.white_list.replace(/,/g,"\n"),t.form.whiteHostName=r.accessControl.white_host_name.replace(/,/g,"\n"),t.form.clientIpFlowLimit=r.accessControl.clientip_flow_limit,t.form.serviceIpFlowLimit=r.accessControl.service_flow_limit,t.form.roundType=r.loadBalance.round_type.toString(),t.form.ipList=r.loadBalance.ip_list.replace(/,/g,"\n"),t.form.weightList=r.loadBalance.weight_list.replace(/,/g,"\n"),t.form.forbidList=r.loadBalance.forbid_list.replace(/,/g,"\n"),t.form.upstreamConnectTimeout=r.loadBalance.upstream_connect_timeout,t.form.upstreamHeaderTimeout=r.loadBalance.upstream_header_timeout,t.form.upstreamIdleTimeout=r.loadBalance.upstream_idle_timeout,t.form.upstreamMaxIdle=r.loadBalance.upstream_max_idle,t.listLoading=!1}))},onSubmit:function(){var e=this;this.disableButton=!0;var t=Object.assign({},this.form);t.port=Number(t.port),t.ruleType=Number(t.ruleType),t.needHttps=Number(t.needHttps),t.needStripUri=Number(t.needStripUri),t.needWebsocket=Number(t.needWebsocket),t.openAuth=Number(t.openAuth),t.roundType=Number(t.roundType),t.clientIpFlowLimit=Number(t.clientIpFlowLimit),t.serviceIpFlowLimit=Number(t.serviceIpFlowLimit),t.upstreamConnectTimeout=Number(t.upstreamConnectTimeout),t.upstreamHeaderTimeout=Number(t.upstreamHeaderTimeout),t.upstreamIdleTimeout=Number(t.upstreamIdleTimeout),t.upstreamMaxIdle=Number(t.upstreamMaxIdle),t.ipList=t.ipList.replace(/\n/g,","),t.weightList=t.weightList.replace(/\n/g,","),t.forbidList=t.forbidList.replace(/\n/g,","),t.whiteHostName=t.whiteHostName.replace(/\n/g,","),t.whiteList=t.whiteList.replace(/\n/g,","),t.blackList=t.blackList.replace(/\n/g,","),t.headerTransfor=t.headerTransfor.replace(/\n/g,","),t.urlRewrite=t.urlRewrite.replace(/\n/g,","),this.is_edit?Object(a["j"])(t).then((function(){e.disableButton=!1,e.$notify({title:"Success",message:"修改成功",type:"success",duration:1500})}),(function(){e.disableButton=!1})):Object(a["c"])(t).then((function(){e.disableButton=!1,e.$notify({title:"Success",message:"添加成功",type:"success",duration:1500})}),(function(){e.disableButton=!1}))}}},n=s,l=(r("8e2f"),r("2877")),c=Object(l["a"])(n,i,o,!1,null,"15330546",null);t["default"]=c.exports},"8e2f":function(e,t,r){"use strict";r("5357")}}]);