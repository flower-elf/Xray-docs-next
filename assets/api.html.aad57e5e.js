import{_ as r,r as t,o as c,c as l,a as s,b as a,w as p,F as i,e as n,d as u}from"./app.9843a57b.js";const d={},k=s("h1",{id:"api-\u63A5\u53E3",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#api-\u63A5\u53E3","aria-hidden":"true"},"#"),n(" API \u63A5\u53E3")],-1),b=n("API \u63A5\u53E3\u914D\u7F6E\u63D0\u4F9B\u4E86\u4E00\u4E9B\u57FA\u4E8E "),h={href:"https://grpc.io/",target:"_blank",rel:"noopener noreferrer"},q=n("gRPC"),m=n("\u7684 API \u63A5\u53E3\u4F9B\u8FDC\u7A0B\u8C03\u7528\u3002"),g=n("\u53EF\u4EE5\u901A\u8FC7 api \u914D\u7F6E\u6A21\u5757\u5F00\u542F\u63A5\u53E3. \u5F53 api \u914D\u7F6E\u5F00\u542F\u65F6\uFF0CXray \u4F1A\u81EA\u5EFA\u4E00\u4E2A\u51FA\u7AD9\u4EE3\u7406\uFF0C\u987B\u624B\u52A8\u5C06\u6240\u6709\u7684 API \u5165\u7AD9\u8FDE\u63A5\u901A\u8FC7 "),_=n("\u8DEF\u7531\u89C4\u5219\u914D\u7F6E"),v=n(" \u6307\u5411\u8FD9\u4E00\u51FA\u7AD9\u4EE3\u7406\u3002"),f=u(`<p>\u8BF7\u53C2\u8003\u672C\u8282\u4E2D\u7684 <a href="#%E7%9B%B8%E5%85%B3%E9%85%8D%E7%BD%AE">\u76F8\u5173\u914D\u7F6E</a></p><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>\u5927\u591A\u6570\u7528\u6237\u5E76\u4E0D\u4F1A\u7528\u5230\u6B64 API\uFF0C\u65B0\u624B\u53EF\u4EE5\u76F4\u63A5\u5FFD\u7565\u8FD9\u4E00\u9879\u3002</p></div><h2 id="apiobject" tabindex="-1"><a class="header-anchor" href="#apiobject" aria-hidden="true">#</a> ApiObject</h2><p><code>ApiObject</code> \u5BF9\u5E94\u914D\u7F6E\u6587\u4EF6\u7684 <code>api</code> \u9879\u3002</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;api&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;api&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;services&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;HandlerService&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;LoggerService&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;StatsService&quot;</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><blockquote><p><code>tag</code>: string</p></blockquote><p>\u51FA\u7AD9\u4EE3\u7406\u6807\u8BC6\u3002</p><blockquote><p><code>services</code>: [string]</p></blockquote><p>\u5F00\u542F\u7684 API \u5217\u8868\uFF0C\u53EF\u9009\u7684\u503C\u89C1 <a href="#%E6%94%AF%E6%8C%81%E7%9A%84-api-%E5%88%97%E8%A1%A8">API \u5217\u8868</a>\u3002</p><h2 id="\u76F8\u5173\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u76F8\u5173\u914D\u7F6E" aria-hidden="true">#</a> \u76F8\u5173\u914D\u7F6E</h2><p>\u53EF\u4EE5\u5728 inbounds \u914D\u7F6E\u4E2D\u589E\u52A0\u4E00\u4E2A api \u7684 inbound</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token property">&quot;inbounds&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token property">&quot;listen&quot;</span><span class="token operator">:</span> <span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">10085</span><span class="token punctuation">,</span>
    <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dokodemo-door&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;settings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;127.0.0.1&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;api&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u5728\u8DEF\u7531\u914D\u7F6E\u4E2D\u589E\u52A0\u9488\u5BF9 api inbound \u7684\u8DEF\u7531\u89C4\u5219</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token property">&quot;routing&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;settings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;inboundTag&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token string">&quot;api&quot;</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;outboundTag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;api&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;field&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;strategy&quot;</span><span class="token operator">:</span> <span class="token string">&quot;rules&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="\u652F\u6301\u7684-api-\u5217\u8868" tabindex="-1"><a class="header-anchor" href="#\u652F\u6301\u7684-api-\u5217\u8868" aria-hidden="true">#</a> \u652F\u6301\u7684 API \u5217\u8868</h2><h3 id="handlerservice" tabindex="-1"><a class="header-anchor" href="#handlerservice" aria-hidden="true">#</a> HandlerService</h3><p>\u4E00\u4E9B\u5BF9\u4E8E\u5165\u7AD9\u51FA\u7AD9\u4EE3\u7406\u8FDB\u884C\u4FEE\u6539\u7684 API\uFF0C\u53EF\u7528\u7684\u529F\u80FD\u5982\u4E0B\uFF1A</p><ul><li>\u6DFB\u52A0\u4E00\u4E2A\u65B0\u7684\u5165\u7AD9\u4EE3\u7406\uFF1B</li><li>\u6DFB\u52A0\u4E00\u4E2A\u65B0\u7684\u51FA\u7AD9\u4EE3\u7406\uFF1B</li><li>\u5220\u9664\u4E00\u4E2A\u73B0\u6709\u7684\u5165\u7AD9\u4EE3\u7406\uFF1B</li><li>\u5220\u9664\u4E00\u4E2A\u73B0\u6709\u7684\u51FA\u7AD9\u4EE3\u7406\uFF1B</li><li>\u5728\u4E00\u4E2A\u5165\u7AD9\u4EE3\u7406\u4E2D\u6DFB\u52A0\u4E00\u4E2A\u7528\u6237\uFF08\u4EC5\u652F\u6301 VMess\u3001VLESS\u3001Trojan\u3001Shadowsocks\uFF08v1.3.0+\uFF09\uFF09\uFF1B</li><li>\u5728\u4E00\u4E2A\u5165\u7AD9\u4EE3\u7406\u4E2D\u5220\u9664\u4E00\u4E2A\u7528\u6237\uFF08\u4EC5\u652F\u6301 VMess\u3001VLESS\u3001Trojan\u3001Shadowsocks\uFF08v1.3.0+\uFF09\uFF09\uFF1B</li></ul><h3 id="loggerservice" tabindex="-1"><a class="header-anchor" href="#loggerservice" aria-hidden="true">#</a> LoggerService</h3><p>\u652F\u6301\u5BF9\u5185\u7F6E Logger \u7684\u91CD\u542F\uFF0C\u53EF\u914D\u5408 logrotate \u8FDB\u884C\u4E00\u4E9B\u5BF9\u65E5\u5FD7\u6587\u4EF6\u7684\u64CD\u4F5C\u3002</p><h3 id="statsservice" tabindex="-1"><a class="header-anchor" href="#statsservice" aria-hidden="true">#</a> StatsService</h3>`,21),y=n("\u5185\u7F6E\u7684\u6570\u636E\u7EDF\u8BA1\u670D\u52A1\uFF0C\u8BE6\u89C1 "),x=n("\u7EDF\u8BA1\u4FE1\u606F"),A=n("\u3002");function j(E,S){const o=t("ExternalLinkIcon"),e=t("RouterLink");return c(),l(i,null,[k,s("p",null,[b,s("a",h,[q,a(o)]),m]),s("p",null,[g,a(e,{to:"/en/config/routing.html"},{default:p(()=>[_]),_:1}),v]),f,s("p",null,[y,a(e,{to:"/en/config/stats.html"},{default:p(()=>[x]),_:1}),A])],64)}var P=r(d,[["render",j],["__file","api.html.vue"]]);export{P as default};
