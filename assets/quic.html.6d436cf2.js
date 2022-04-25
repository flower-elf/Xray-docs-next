import{_ as e,d as n}from"./app.9843a57b.js";const s={},a=n(`<h1 id="quic" tabindex="-1"><a class="header-anchor" href="#quic" aria-hidden="true">#</a> QUIC</h1><p>QUIC \u5168\u79F0 Quick UDP Internet Connection\uFF0C\u662F\u7531 Google \u63D0\u51FA\u7684\u4F7F\u7528 UDP \u8FDB\u884C\u591A\u8DEF\u5E76\u53D1\u4F20\u8F93\u7684\u534F\u8BAE\u3002\u5176\u4E3B\u8981\u4F18\u52BF\u662F:</p><ol><li>\u51CF\u5C11\u4E86\u63E1\u624B\u7684\u5EF6\u8FDF\uFF081-RTT \u6216 0-RTT\uFF09</li><li>\u591A\u8DEF\u590D\u7528\uFF0C\u5E76\u4E14\u6CA1\u6709 TCP \u7684\u963B\u585E\u95EE\u9898</li><li>\u8FDE\u63A5\u8FC1\u79FB\uFF0C\uFF08\u4E3B\u8981\u662F\u5728\u5BA2\u6237\u7AEF\uFF09\u5F53\u7531 Wifi \u8F6C\u79FB\u5230 4G \u65F6\uFF0C\u8FDE\u63A5\u4E0D\u4F1A\u88AB\u65AD\u5F00\u3002</li></ol><p>QUIC \u76EE\u524D\u5904\u4E8E\u5B9E\u9A8C\u671F\uFF0C\u4F7F\u7528\u4E86\u6B63\u5728\u6807\u51C6\u5316\u8FC7\u7A0B\u4E2D\u7684 IETF \u5B9E\u73B0\uFF0C\u4E0D\u80FD\u4FDD\u8BC1\u4E0E\u6700\u7EC8\u7248\u672C\u7684\u517C\u5BB9\u6027\u3002</p><ul><li>\u9ED8\u8BA4\u8BBE\u5B9A: <ul><li>12 \u5B57\u8282\u7684 Connection ID</li><li>30 \u79D2\u6CA1\u6709\u6570\u636E\u901A\u8FC7\u65F6\u81EA\u52A8\u65AD\u5F00\u8FDE\u63A5 (\u53EF\u80FD\u4F1A\u5F71\u54CD\u4E00\u4E9B\u957F\u8FDE\u63A5\u7684\u4F7F\u7528)</li></ul></li></ul><h2 id="quicobject" tabindex="-1"><a class="header-anchor" href="#quicobject" aria-hidden="true">#</a> QuicObject</h2><p><code>QuicObject</code> \u5BF9\u5E94\u4F20\u8F93\u914D\u7F6E\u7684 <code>quicSettings</code> \u9879\u3002</p><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>\u5BF9\u63A5\u7684\u4E24\u7AEF\u7684\u914D\u7F6E\u5FC5\u987B\u5B8C\u5168\u4E00\u81F4\uFF0C\u5426\u5219\u8FDE\u63A5\u5931\u8D25\u3002 QUIC \u5F3A\u5236\u8981\u6C42\u5F00\u542F TLS\uFF0C\u5728\u4F20\u8F93\u914D\u7F6E\u4E2D\u6CA1\u6709\u5F00\u542F TLS \u65F6\uFF0CXray \u4F1A\u81EA\u884C\u7B7E\u53D1\u4E00\u4E2A\u8BC1\u4E66\u8FDB\u884C TLS \u901A\u8BAF\u3002</p></div><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;security&quot;</span><span class="token operator">:</span> <span class="token string">&quot;none&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;header&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;none&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><blockquote><p><code>security</code>: &quot;none&quot; | &quot;aes-128-gcm&quot; | &quot;chacha20-poly1305&quot;</p></blockquote><p>\u52A0\u5BC6\u65B9\u5F0F\u3002</p><p>\u6B64\u52A0\u5BC6\u662F\u5BF9 QUIC \u6570\u636E\u5305\u7684\u52A0\u5BC6\uFF0C\u52A0\u5BC6\u540E\u6570\u636E\u5305\u65E0\u6CD5\u88AB\u63A2\u6D4B\u3002</p><p>\u9ED8\u8BA4\u503C\u4E3A\u4E0D\u52A0\u5BC6\u3002</p><blockquote><p><code>key</code>: string</p></blockquote><p>\u52A0\u5BC6\u65F6\u6240\u7528\u7684\u5BC6\u94A5\u3002</p><p>\u53EF\u4EE5\u662F\u4EFB\u610F\u5B57\u7B26\u4E32\u3002\u5F53 <code>security</code> \u4E0D\u4E3A <code>&quot;none&quot;</code> \u65F6\u6709\u6548\u3002</p><blockquote><p><code>header</code>: <a href="#headerobject">HeaderObject</a></p></blockquote><p>\u6570\u636E\u5305\u5934\u90E8\u4F2A\u88C5\u8BBE\u7F6E</p><h3 id="headerobject" tabindex="-1"><a class="header-anchor" href="#headerobject" aria-hidden="true">#</a> HeaderObject</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;none&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><blockquote><p><code>type</code>: string</p></blockquote><p>\u4F2A\u88C5\u7C7B\u578B\uFF0C\u53EF\u9009\u7684\u503C\u6709\uFF1A</p><ul><li><code>&quot;none&quot;</code>\uFF1A\u9ED8\u8BA4\u503C\uFF0C\u4E0D\u8FDB\u884C\u4F2A\u88C5\uFF0C\u53D1\u9001\u7684\u6570\u636E\u662F\u6CA1\u6709\u7279\u5F81\u7684\u6570\u636E\u5305\u3002</li><li><code>&quot;srtp&quot;</code>\uFF1A\u4F2A\u88C5\u6210 SRTP \u6570\u636E\u5305\uFF0C\u4F1A\u88AB\u8BC6\u522B\u4E3A\u89C6\u9891\u901A\u8BDD\u6570\u636E\uFF08\u5982 FaceTime\uFF09\u3002</li><li><code>&quot;utp&quot;</code>\uFF1A\u4F2A\u88C5\u6210 uTP \u6570\u636E\u5305\uFF0C\u4F1A\u88AB\u8BC6\u522B\u4E3A BT \u4E0B\u8F7D\u6570\u636E\u3002</li><li><code>&quot;wechat-video&quot;</code>\uFF1A\u4F2A\u88C5\u6210\u5FAE\u4FE1\u89C6\u9891\u901A\u8BDD\u7684\u6570\u636E\u5305\u3002</li><li><code>&quot;dtls&quot;</code>\uFF1A\u4F2A\u88C5\u6210 DTLS 1.2 \u6570\u636E\u5305\u3002</li><li><code>&quot;wireguard&quot;</code>\uFF1A\u4F2A\u88C5\u6210 WireGuard \u6570\u636E\u5305\u3002\uFF08\u5E76\u4E0D\u662F\u771F\u6B63\u7684 WireGuard \u534F\u8BAE\uFF09</li></ul><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u5F53\u52A0\u5BC6\u548C\u4F2A\u88C5\u90FD\u4E0D\u542F\u7528\u65F6\uFF0C\u6570\u636E\u5305\u5373\u4E3A\u539F\u59CB\u7684 QUIC \u6570\u636E\u5305\uFF0C\u53EF\u4EE5\u4E0E\u5176\u5B83\u7684 QUIC \u5DE5\u5177\u5BF9\u63A5\u3002 \u4E3A\u4E86\u907F\u514D\u88AB\u63A2\u6D4B\uFF0C\u5EFA\u8BAE\u52A0\u5BC6\u6216\u4F2A\u88C5\u81F3\u5C11\u5F00\u542F\u4E00\u9879\u3002</p></div>`,24);function o(t,c){return a}var u=e(s,[["render",o],["__file","quic.html.vue"]]);export{u as default};
