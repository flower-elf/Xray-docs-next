import{_ as l,r as e,o as c,c as r,a as n,b as a,w as t,F as u,e as s,d as i}from"./app.9843a57b.js";const d={},k=n("h1",{id:"shadowsocks",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#shadowsocks","aria-hidden":"true"},"#"),s(" Shadowsocks")],-1),b={href:"https://zh.wikipedia.org/wiki/Shadowsocks",target:"_blank",rel:"noopener noreferrer"},h=s("Shadowsocks"),q=s(" \u534F\u8BAE\uFF0C\u517C\u5BB9\u5927\u90E8\u5206\u5176\u5B83\u7248\u672C\u7684\u5B9E\u73B0\u3002"),m=i(`<p>\u76EE\u524D\u517C\u5BB9\u6027\u5982\u4E0B\uFF1A</p><ul><li><p>\u652F\u6301 TCP \u548C UDP \u6570\u636E\u5305\u8F6C\u53D1\uFF0C\u5176\u4E2D UDP \u53EF\u9009\u62E9\u6027\u5173\u95ED\uFF1B</p></li><li><p>\u63A8\u8350\u7684\u52A0\u5BC6\u65B9\u5F0F\uFF1A</p><ul><li>AES-256-GCM</li><li>AES-128-GCM</li><li>ChaCha20-Poly1305 \u6216\u79F0 ChaCha20-IETF-Poly1305</li><li>none \u6216 plain</li></ul><p>\u4E0D\u63A8\u8350\u7684\u52A0\u5BC6\u65B9\u5F0F:</p><ul><li>AES-256-CFB</li><li>AES-128-CFB</li><li>ChaCha20</li><li>ChaCha20-IETF</li></ul></li></ul><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>&quot;none&quot; \u4E0D\u52A0\u5BC6\u65B9\u5F0F\u4E0B\uFF0C\u670D\u52A1\u5668\u7AEF\u4E0D\u4F1A\u9A8C\u8BC1 &quot;password&quot; \u4E2D\u7684\u5BC6\u7801\u3002\u4E3A\u786E\u4FDD\u5B89\u5168\u6027, \u4E00\u822C\u9700\u8981\u52A0\u4E0A TLS \u5E76\u5728\u4F20\u8F93\u5C42\u4F7F\u7528\u5B89\u5168\u914D\u7F6E\uFF0C\u4F8B\u5982 WebSocket \u914D\u7F6E\u8F83\u957F\u7684 path</p></div><h2 id="outboundconfigurationobject" tabindex="-1"><a class="header-anchor" href="#outboundconfigurationobject" aria-hidden="true">#</a> OutboundConfigurationObject</h2><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;servers&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;email&quot;</span><span class="token operator">:</span> <span class="token string">&quot;love@xray.com&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">1234</span><span class="token punctuation">,</span>
      <span class="token property">&quot;method&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u52A0\u5BC6\u65B9\u5F0F&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;password&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u5BC6\u7801&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><blockquote><p><code>servers</code>: [<a href="#serverobject">ServerObject</a>]</p></blockquote><p>\u4E00\u4E2A\u6570\u7EC4\uFF0C\u4EE3\u8868\u4E00\u7EC4 Shadowsocks \u670D\u52A1\u7AEF\u8BBE\u7F6E, \u5176\u4E2D\u6BCF\u4E00\u9879\u662F\u4E00\u4E2A <a href="#serverobject">ServerObject</a>\u3002</p><h3 id="serverobject" tabindex="-1"><a class="header-anchor" href="#serverobject" aria-hidden="true">#</a> ServerObject</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;email&quot;</span><span class="token operator">:</span> <span class="token string">&quot;love@xray.com&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">1234</span><span class="token punctuation">,</span>
  <span class="token property">&quot;method&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u52A0\u5BC6\u65B9\u5F0F&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;password&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u5BC6\u7801&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><blockquote><p><code>email</code>: string</p></blockquote><p>\u90AE\u4EF6\u5730\u5740\uFF0C\u53EF\u9009\uFF0C\u7528\u4E8E\u6807\u8BC6\u7528\u6237</p><blockquote><p><code>address</code>: address</p></blockquote><p>Shadowsocks \u670D\u52A1\u7AEF\u5730\u5740\uFF0C\u652F\u6301 IPv4\u3001IPv6 \u548C\u57DF\u540D\u3002\u5FC5\u586B\u3002</p><blockquote><p><code>port</code>: number</p></blockquote><p>Shadowsocks \u670D\u52A1\u7AEF\u7AEF\u53E3\u3002\u5FC5\u586B\u3002</p><blockquote><p><code>method</code>: string</p></blockquote><p>\u5FC5\u586B\u3002</p><ul><li>\u63A8\u8350\u7684\u52A0\u5BC6\u65B9\u5F0F\uFF1A <ul><li>AES-256-GCM</li><li>AES-128-GCM</li><li>ChaCha20-Poly1305 \u6216\u79F0 ChaCha20-IETF-Poly1305</li><li>none \u6216 plain</li></ul></li></ul><blockquote><p><code>password</code>: string</p></blockquote><p>\u5FC5\u586B\u3002\u4EFB\u610F\u5B57\u7B26\u4E32\u3002</p><p>Shadowsocks \u534F\u8BAE\u4E0D\u9650\u5236\u5BC6\u7801\u957F\u5EA6\uFF0C\u4F46\u77ED\u5BC6\u7801\u4F1A\u66F4\u53EF\u80FD\u88AB\u7834\u89E3\uFF0C\u5EFA\u8BAE\u4F7F\u7528 16 \u5B57\u7B26\u6216\u66F4\u957F\u7684\u5BC6\u7801\u3002</p><blockquote><p><code>level</code>: number</p></blockquote>`,22),_=s("\u7528\u6237\u7B49\u7EA7\uFF0C\u8FDE\u63A5\u4F1A\u4F7F\u7528\u8FD9\u4E2A\u7528\u6237\u7B49\u7EA7\u5BF9\u5E94\u7684 "),v=s("\u672C\u5730\u7B56\u7565"),g=s("\u3002"),y=n("code",null,"level",-1),C=s(" \u7684\u503C, \u5BF9\u5E94 "),f=s("policy"),w=s(" \u4E2D "),S=n("code",null,"level",-1),j=s(" \u7684\u503C\u3002 \u5982\u4E0D\u6307\u5B9A, \u9ED8\u8BA4\u4E3A 0\u3002");function x(E,P){const p=e("ExternalLinkIcon"),o=e("RouterLink");return c(),r(u,null,[k,n("p",null,[n("a",b,[h,a(p)]),q]),m,n("p",null,[_,a(o,{to:"/en/config/policy.html#levelpolicyobject"},{default:t(()=>[v]),_:1}),g]),n("p",null,[y,C,a(o,{to:"/en/config/policy.html#policyobject"},{default:t(()=>[f]),_:1}),w,S,j])],64)}var F=l(d,[["render",x],["__file","shadowsocks.html.vue"]]);export{F as default};
