import{_ as o,r as c,o as p,c as i,a as e,b as n,d as a,w as t,e as l}from"./app.f18319b0.js";const u={},r=l(`<h1 id="对空间下的设备下发指令" tabindex="-1"><a class="header-anchor" href="#对空间下的设备下发指令" aria-hidden="true">#</a> 对空间下的设备下发指令</h1><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> Tacos<span class="token punctuation">,</span> <span class="token punctuation">{</span> Root <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@tslfe/tacos-sdk&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Device <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@tslfe/tacos-sdk&quot;</span><span class="token punctuation">;</span>

Tacos<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// 连接参数</span>
    <span class="token operator">...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span>core<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 获取root实例</span>
    <span class="token keyword">const</span> root <span class="token operator">=</span> core<span class="token punctuation">.</span><span class="token function">creatInstance</span><span class="token punctuation">(</span>Root<span class="token punctuation">)</span>
    <span class="token comment">// 获取设备-空调</span>
    <span class="token keyword">const</span> AirConditioner <span class="token operator">=</span> <span class="token keyword">await</span> root<span class="token punctuation">.</span><span class="token generic-function"><span class="token function">saerch</span><span class="token generic class-name"><span class="token operator">&lt;</span>Device<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token string">&quot;/Office/xxx/xxx/devices/*[@driver=&#39;AirConditioner&#39;]&quot;</span><span class="token punctuation">)</span>
    <span class="token comment">// 下发命令-打开空调</span>
    <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">await</span> AirConditioner<span class="token punctuation">.</span><span class="token function">cmd</span><span class="token punctuation">(</span>
        <span class="token string">&quot;air_condition_status_set&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>air_condition_status_value<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">}</span>
    <span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function d(k,m){const s=c("RouterLink");return p(),i("div",null,[r,e("blockquote",null,[e("p",null,[n("参考: "),a(s,{to:"/digital/help/declare.html#core"},{default:t(()=>[n("Core")]),_:1}),n("; "),a(s,{to:"/digital/api/root.html#search"},{default:t(()=>[n("Root.search()")]),_:1}),n("; "),a(s,{to:"/digital/api/device.html#cmd"},{default:t(()=>[n("Device.cmd()")]),_:1})])])])}const _=o(u,[["render",d],["__file","command.html.vue"]]);export{_ as default};
