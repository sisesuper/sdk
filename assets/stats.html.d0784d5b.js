import{_ as e,r as t,o as l,c as p,a as s,b as n,d as o,w as i,e as c}from"./app.f18319b0.js";const u={},r=s("h1",{id:"stats",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#stats","aria-hidden":"true"},"#"),n(" stats")],-1),d=s("p",null,"性能监视器，用于监视当前页面的渲染性能",-1),k=s("li",null,[s("p",null,"插件名称"),s("p",null,[s("strong",null,"stats")])],-1),v=s("p",null,"初始参数",-1),h=s("p",null,[s("code",null,"props: StatsProps"),n(" 性能监视器配置参数")],-1),m=s("li",null,[s("p",null,"注: 初始参数可以为空")],-1),g=s("li",null,[s("p",null,"示例")],-1),_=c(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> webglPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@tslfe/dt-enging&quot;</span>
<span class="token operator">...</span>省略获取meta实例的步骤<span class="token operator">...</span>

<span class="token keyword">const</span> statsPlugin <span class="token operator">=</span> meta<span class="token punctuation">.</span>plugin<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>webglPlugin<span class="token punctuation">.</span><span class="token function">stats</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="方法" tabindex="-1"><a class="header-anchor" href="#方法" aria-hidden="true">#</a> 方法</h2><h3 id="update" tabindex="-1"><a class="header-anchor" href="#update" aria-hidden="true">#</a> update( )</h3><p>更新监视器数据，该方法会在每次渲染时 <strong>自动调用</strong></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function-variable function">update</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><p>参数</p><ul><li>无</li></ul></li><li><p>返回值</p><ul><li>无</li></ul></li></ul><h3 id="remove" tabindex="-1"><a class="header-anchor" href="#remove" aria-hidden="true">#</a> remove( )</h3><p>移除监视器</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function-variable function">remove</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><p>参数</p><ul><li>无</li></ul></li><li><p>返回值</p><ul><li>无</li></ul></li><li><p>示例</p></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token operator">...</span>省略挂载stats插件的步骤<span class="token operator">...</span>

statsPlugin<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11);function b(f,y){const a=t("RouterLink");return l(),p("div",null,[r,d,s("ul",null,[k,s("li",null,[v,s("ul",null,[s("li",null,[h,s("ul",null,[s("li",null,[s("p",null,[n("参考: "),o(a,{to:"/three/help/declare.html#statsprops"},{default:i(()=>[n("StatsProps")]),_:1})])]),m])])])]),g]),_])}const w=e(u,[["render",b],["__file","stats.html.vue"]]);export{w as default};
