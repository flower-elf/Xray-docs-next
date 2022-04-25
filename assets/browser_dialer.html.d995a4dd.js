import{_ as c,r as n,o as d,c as i,b as a,a as e,F as l,e as o,d as s}from"./app.9843a57b.js";const _={},h=e("h1",{id:"browser-dialer",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#browser-dialer","aria-hidden":"true"},"#"),o(" Browser Dialer")],-1),u=o(),p=e("h2",{id:"background",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#background","aria-hidden":"true"},"#"),o(" Background")],-1),S=o("\u57FA\u4E8E "),y={href:"https://github.com/v2ray/discussion/issues/754#issuecomment-647934994",target:"_blank",rel:"noopener noreferrer"},b=o("\u4E00\u5E74\u524D\u7684\u60F3\u6CD5"),f=o(" \uFF0C\u5229\u7528\u539F\u751F JS \u5B9E\u73B0\u4E86\u7B80\u6D01\u7684 WSS Browser Dialer\uFF0C\u8FBE\u5230\u4E86\u771F\u5B9E\u6D4F\u89C8\u5668\u7684 TLS \u6307\u7EB9\u3001\u884C\u4E3A\u7279\u5F81\u3002"),g=s('<p>\u4E0D\u8FC7 WSS \u4ECD\u5B58\u5728 ALPN \u660E\u663E\u7684\u95EE\u9898\uFF0C\u6240\u4EE5\u4E0B\u4E00\u6B65\u662F\u6D4F\u89C8\u5668\u8F6C\u53D1 <code>HTTP/2</code>,<code>QUIC</code>\u3002</p><h2 id="xray-js" tabindex="-1"><a class="header-anchor" href="#xray-js" aria-hidden="true">#</a> Xray &amp; JS</h2><p>\u521B\u9020\u4E86\u4E00\u4E2A\u975E\u5E38\u7B80\u5355\u3001\u5DE7\u5999\u7684\u901A\u4FE1\u673A\u5236\uFF1A</p><ul><li>Xray \u76D1\u542C\u5730\u5740\u7AEF\u53E3 A\uFF0C\u4F5C\u4E3A HTTP \u670D\u52A1\uFF0C\u6D4F\u89C8\u5668\u8BBF\u95EE A\uFF0C\u52A0\u8F7D\u7F51\u9875\u4E2D\u7684 JS\u3002</li><li>JS \u4E3B\u52A8\u5411 A \u5EFA\u7ACB WebSocket \u8FDE\u63A5\uFF0C\u6210\u529F\u540E\uFF0CXray \u5C06\u8FDE\u63A5\u53D1\u7ED9 channel\u3002</li><li>\u9700\u8981\u5EFA\u7ACB\u8FDE\u63A5\u65F6\uFF0CXray \u4ECE channel \u63A5\u6536\u4E00\u4E2A\u53EF\u7528\u7684\u8FDE\u63A5\uFF0C\u5E76\u53D1\u9001\u76EE\u6807 URL \u548C\u53EF\u9009\u7684 early data\u3002</li><li>JS \u6210\u529F\u8FDE\u63A5\u5230\u76EE\u6807\u540E\u544A\u77E5 Xray\uFF0C\u5E76\u7EE7\u7EED\u7528\u8FD9\u4E2A conn \u5168\u53CC\u5DE5\u53CC\u5411\u8F6C\u53D1\u6570\u636E\uFF0C\u8FDE\u63A5\u5173\u95ED\u884C\u4E3A\u540C\u6B65\u3002</li><li>\u8FDE\u63A5\u4F7F\u7528\u540E\u5C31\u4F1A\u88AB\u5173\u95ED\uFF0C\u4F46 JS \u4F1A\u786E\u4FDD\u59CB\u7EC8\u6709\u65B0\u7A7A\u95F2\u8FDE\u63A5\u53EF\u7528\u3002</li></ul><h2 id="early-data" tabindex="-1"><a class="header-anchor" href="#early-data" aria-hidden="true">#</a> Early data</h2><p>\u6839\u636E\u6D4F\u89C8\u5668\u7684\u9700\u6C42\uFF0C\u5BF9 early data \u673A\u5236\u8FDB\u884C\u4E86\u5982\u4E0B\u8C03\u6574\uFF1A</p>',6),x=e("li",null,[o("\u670D\u52A1\u7AEF\u54CD\u5E94\u5934\u4F1A\u5E26\u6709\u8BF7\u6C42\u7684 "),e("code",null,"Sec-WebSocket-Protocol"),o("\uFF0C\u8FD9\u4E5F\u521D\u6B65\u6DF7\u6DC6\u4E86 WSS \u63E1\u624B\u54CD\u5E94\u7684\u957F\u5EA6\u7279\u5F81\u3002")],-1),m=e("li",null,[o("\u7528\u4E8E\u6D4F\u89C8\u5668\u7684 early data \u7F16\u7801\u662F "),e("code",null,"base64.RawURLEncoding"),o(" \u800C\u4E0D\u662F "),e("code",null,"StdEncoding"),o("\uFF0C\u670D\u52A1\u7AEF\u505A\u4E86\u517C\u5BB9\u3002")],-1),k=o("\u6B64\u5916\uFF0C\u7531\u4E8E "),X={href:"https://github.com/XTLS/Xray-core/pull/375",target:"_blank",rel:"noopener noreferrer"},w=o("Xray-core#375"),B=o(" \u63A8\u8350 "),E=e("code",null,"?ed=2048",-1),L=o("\uFF0C\u8FD9\u4E2A PR \u987A\u4FBF\u5C06\u670D\u52A1\u7AEF\u4E00\u5904 "),R=e("code",null,"MaxHeaderBytes",-1),T=o(" \u6269\u81F3\u4E86 4096\u3002 "),W=e("s",null,"\uFF08\u867D\u7136\u597D\u50CF\u4E0D\u6539\u4E5F\u6CA1\u95EE\u9898\uFF09",-1),v={id:"configuration",tabindex:"-1"},A=e("a",{class:"header-anchor",href:"#configuration","aria-hidden":"true"},"#",-1),N=o(" Configuration "),J=s("<p>\u8FD9\u662F\u4E00\u4E2A\u63A2\u7D22\u7684\u8FC7\u7A0B\uFF0C\u76EE\u524D\u4E24\u8FB9\u90FD\u662F Xray-core v1.4.1 \u65F6\u7684\u914D\u7F6E\u65B9\u5F0F\uFF1A</p><ul><li>\u51C6\u5907\u4E00\u4EFD\u53EF\u7528\u7684 WSS \u914D\u7F6E\uFF0C\u6CE8\u610F address \u5FC5\u987B\u586B\u57DF\u540D\uFF0C\u82E5\u9700\u8981\u6307\u5B9A IP\uFF0C\u8BF7\u914D\u7F6E DNS \u6216\u7CFB\u7EDF hosts\u3002</li><li>\u82E5\u6D4F\u89C8\u5668\u7684\u6D41\u91CF\u4E5F\u4F1A\u7ECF\u8FC7 Xray-core\uFF0C\u52A1\u5FC5\u5C06\u8FD9\u4E2A\u57DF\u540D\u8BBE\u4E3A\u76F4\u8FDE\uFF0C\u5426\u5219\u4F1A\u9020\u6210\u6D41\u91CF\u56DE\u73AF\u3002</li><li>\u8BBE\u7F6E\u73AF\u5883\u53D8\u91CF\u6307\u5B9A\u8981\u76D1\u542C\u7684\u5730\u5740\u7AEF\u53E3\uFF0C\u6BD4\u5982 <code>XRAY_BROWSER_DIALER = 127.0.0.1:8080</code>\u3002</li><li>\u5148\u8FD0\u884C Xray-core\uFF0C\u518D\u7528\u4EFB\u610F\u6D4F\u89C8\u5668\u8BBF\u95EE\u4E0A\u9762\u6307\u5B9A\u7684\u5730\u5740\u7AEF\u53E3\uFF0C\u8FD8\u53EF\u4EE5 <code>F12</code> \u770B <code>Console</code> \u548C <code>Network</code>\u3002</li><li>\u6D4F\u89C8\u5668\u4F1A\u9650\u5236 WebSocket \u8FDE\u63A5\u6570\uFF0C\u6240\u4EE5\u5EFA\u8BAE\u5F00\u542F <code>Mux.Cool</code>\u3002</li></ul>",2);function P(C,I){const t=n("Badge"),r=n("ExternalLinkIcon");return d(),i(l,null,[h,a(t,{text:"BETA",type:"warning"}),u,a(t,{text:"v1.4.1+",type:"warning"}),p,e("p",null,[S,e("a",y,[b,a(r)]),f]),g,e("ul",null,[x,m,e("li",null,[k,e("a",X,[w,a(r)]),B,E,L,R,T,W])]),e("h2",v,[A,N,a(t,{text:"v1.4.1",type:"warning"})]),J],64)}var V=c(_,[["render",P],["__file","browser_dialer.html.vue"]]);export{V as default};
