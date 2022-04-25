import{_ as a,r as d,o as u,c as l,a as e,b as t,w as n,F as i,d as c,e as o}from"./app.9843a57b.js";const r={},p=c(`<h1 id="freedom" tabindex="-1"><a class="header-anchor" href="#freedom" aria-hidden="true">#</a> Freedom</h1><p>Freedom \u662F\u4E00\u4E2A\u51FA\u7AD9\u534F\u8BAE\uFF0C\u53EF\u4EE5\u7528\u6765\u5411\u4EFB\u610F\u7F51\u7EDC\u53D1\u9001\uFF08\u6B63\u5E38\u7684\uFF09 TCP \u6216 UDP \u6570\u636E\u3002</p><h2 id="outboundconfigurationobject" tabindex="-1"><a class="header-anchor" href="#outboundconfigurationobject" aria-hidden="true">#</a> OutboundConfigurationObject</h2><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;domainStrategy&quot;</span><span class="token operator">:</span> <span class="token string">&quot;AsIs&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;redirect&quot;</span><span class="token operator">:</span> <span class="token string">&quot;127.0.0.1:3366&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;userLevel&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><blockquote><p><code>domainStrategy</code>: &quot;AsIs&quot; | &quot;UseIP&quot; | &quot;UseIPv4&quot; | &quot;UseIPv6&quot;</p></blockquote><p>\u5728\u76EE\u6807\u5730\u5740\u4E3A\u57DF\u540D\u65F6, \u914D\u7F6E\u76F8\u5E94\u7684\u503C, Freedom \u7684\u884C\u4E3A\u6A21\u5F0F\u5982\u4E0B:</p>`,6),_=e("li",null,[e("code",null,'"AsIs"'),o(": Freedom \u901A\u8FC7\u7CFB\u7EDF DNS \u670D\u52A1\u5668\u89E3\u6790\u83B7\u53D6 IP, \u5411\u6B64\u57DF\u540D\u53D1\u51FA\u8FDE\u63A5.")],-1),h=e("code",null,'"UseIP"',-1),m=o("\u3001"),q=e("code",null,'"UseIPv4"',-1),b=o(" \u548C "),v=e("code",null,'"UseIPv6"',-1),f=o(": Xray \u4F7F\u7528 "),k=o("\u5185\u7F6E DNS \u670D\u52A1\u5668"),I=o(" \u89E3\u6790\u83B7\u53D6 IP, \u5411\u6B64\u57DF\u540D\u53D1\u51FA\u8FDE\u63A5. \u9ED8\u8BA4\u503C\u4E3A "),P=e("code",null,'"AsIs"',-1),g=o("\u3002"),y={class:"custom-container tip"},F=e("p",{class:"custom-container-title"},"TIP 1",-1),U=o("\u5F53\u4F7F\u7528 "),j=e("code",null,'"UseIP"',-1),x=o(" \u6A21\u5F0F\uFF0C\u5E76\u4E14 "),T=o("\u51FA\u7AD9\u8FDE\u63A5\u914D\u7F6E"),N=o(" \u4E2D\u6307\u5B9A\u4E86 "),L=e("code",null,"sendThrough",-1),S=o(" \u65F6\uFF0CFreedom \u4F1A\u6839\u636E "),A=e("code",null,"sendThrough",-1),C=o(" \u7684\u503C\u81EA\u52A8\u5224\u65AD\u6240\u9700\u7684 IP \u7C7B\u578B\uFF0CIPv4 \u6216 IPv6\u3002"),V=c('<div class="custom-container tip"><p class="custom-container-title">TIP 2</p><p>\u5F53\u4F7F\u7528 <code>&quot;UseIPv4&quot;</code> \u6216 <code>&quot;UseIPv6&quot;</code> \u6A21\u5F0F\u65F6\uFF0CFreedom \u4F1A\u53EA\u4F7F\u7528\u5BF9\u5E94\u7684 IPv4 \u6216 IPv6 \u5730\u5740\u3002\u5F53 <code>sendThrough</code> \u6307\u5B9A\u4E86\u4E0D\u5339\u914D\u7684\u672C\u5730\u5730\u5740\u65F6\uFF0C\u5C06\u5BFC\u81F4\u8FDE\u63A5\u5931\u8D25\u3002</p></div><blockquote><p><code>redirect</code>: address_port</p></blockquote><p>Freedom \u4F1A\u5F3A\u5236\u5C06\u6240\u6709\u6570\u636E\u53D1\u9001\u5230\u6307\u5B9A\u5730\u5740\uFF08\u800C\u4E0D\u662F inbound \u6307\u5B9A\u7684\u5730\u5740\uFF09\u3002</p><p>\u5176\u503C\u4E3A\u4E00\u4E2A\u5B57\u7B26\u4E32\uFF0C\u6837\u4F8B\uFF1A<code>&quot;127.0.0.1:80&quot;</code>\uFF0C<code>&quot;:1234&quot;</code>\u3002</p><p>\u5F53\u5730\u5740\u4E0D\u6307\u5B9A\u65F6\uFF0C\u5982 <code>&quot;:443&quot;</code>\uFF0CFreedom \u4E0D\u4F1A\u4FEE\u6539\u539F\u5148\u7684\u76EE\u6807\u5730\u5740\u3002 \u5F53\u7AEF\u53E3\u4E3A <code>0</code> \u65F6\uFF0C\u5982 <code>&quot;xray.com: 0&quot;</code>\uFF0CFreedom \u4E0D\u4F1A\u4FEE\u6539\u539F\u5148\u7684\u7AEF\u53E3\u3002</p><blockquote><p><code>userLevel</code>: number</p></blockquote>',6),B=o("\u7528\u6237\u7B49\u7EA7\uFF0C\u8FDE\u63A5\u4F1A\u4F7F\u7528\u8FD9\u4E2A\u7528\u6237\u7B49\u7EA7\u5BF9\u5E94\u7684 "),D=o("\u672C\u5730\u7B56\u7565"),w=o("\u3002"),O=o("userLevel \u7684\u503C, \u5BF9\u5E94 "),R=o("policy"),E=o(" \u4E2D "),X=e("code",null,"level",-1),z=o(" \u7684\u503C\u3002 \u5982\u4E0D\u6307\u5B9A, \u9ED8\u8BA4\u4E3A 0\u3002");function G(H,J){const s=d("RouterLink");return u(),l(i,null,[p,e("ul",null,[_,e("li",null,[h,m,q,b,v,f,t(s,{to:"/en/config/dns.html"},{default:n(()=>[k]),_:1}),I,P,g])]),e("div",y,[F,e("p",null,[U,j,x,t(s,{to:"/en/config/outbound.html#outboundobject"},{default:n(()=>[T]),_:1}),N,L,S,A,C])]),V,e("p",null,[B,t(s,{to:"/en/config/policy.html#levelpolicyobject"},{default:n(()=>[D]),_:1}),w]),e("p",null,[O,t(s,{to:"/en/config/policy.html#policyobject"},{default:n(()=>[R]),_:1}),E,X,z])],64)}var M=a(r,[["render",G],["__file","freedom.html.vue"]]);export{M as default};
