import{_ as p,r as o,o as c,c as i,a as n,b as s,d as t,e}from"./app.f18319b0.js";const l={},u=e(`<h1 id="图层操作" tabindex="-1"><a class="header-anchor" href="#图层操作" aria-hidden="true">#</a> 图层操作</h1><h3 id="批量显示-隐藏模型和标签" tabindex="-1"><a class="header-anchor" href="#批量显示-隐藏模型和标签" aria-hidden="true">#</a> 批量显示/隐藏模型和标签</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> DTEngine <span class="token keyword">from</span> <span class="token string">&quot;@tslfe/dt-engine&quot;</span>

<span class="token comment">// 获取meta实例</span>
DTEngine<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    host<span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    token<span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>meta<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 将meta挂载到dom上,参数为dom的id</span>
    meta<span class="token punctuation">.</span><span class="token function">amount</span><span class="token punctuation">(</span><span class="token string">&quot;device-container&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 需要加载的场景路径</span>
    meta<span class="token punctuation">.</span><span class="token function">enter</span><span class="token punctuation">(</span><span class="token string">&quot;/yingli46&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 显示英利46楼所有的灯</span>
    meta<span class="token punctuation">.</span>layer<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token string">&quot;/yingli/46/device/light&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),r={href:"/three/api/layer.html#filter",target:"_blank",rel:"noopener noreferrer"},d=e(`<h3 id="隐藏所有设备和标签" tabindex="-1"><a class="header-anchor" href="#隐藏所有设备和标签" aria-hidden="true">#</a> 隐藏所有设备和标签</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> DTEngine <span class="token keyword">from</span> <span class="token string">&quot;@tslfe/dt-engine&quot;</span>

<span class="token comment">// 获取meta实例</span>
DTEngine<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    host<span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    token<span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>meta<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 将meta挂载到dom上,参数为dom的id</span>
    meta<span class="token punctuation">.</span><span class="token function">amount</span><span class="token punctuation">(</span><span class="token string">&quot;device-container&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 需要加载的场景路径</span>
    meta<span class="token punctuation">.</span><span class="token function">enter</span><span class="token punctuation">(</span><span class="token string">&quot;/yingli46&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 隐藏所有模型和标签</span>
    meta<span class="token punctuation">.</span>layer<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),k={href:"/three/api/layer.html#clear",target:"_blank",rel:"noopener noreferrer"},m=e(`<h3 id="显示所有设备和标签" tabindex="-1"><a class="header-anchor" href="#显示所有设备和标签" aria-hidden="true">#</a> 显示所有设备和标签</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> DTEngine <span class="token keyword">from</span> <span class="token string">&quot;@tslfe/dt-engine&quot;</span>

<span class="token comment">// 获取meta实例</span>
DTEngine<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    host<span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    token<span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>meta<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 将meta挂载到dom上,参数为dom的id</span>
    meta<span class="token punctuation">.</span><span class="token function">amount</span><span class="token punctuation">(</span><span class="token string">&quot;device-container&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 需要加载的场景路径</span>
    meta<span class="token punctuation">.</span><span class="token function">enter</span><span class="token punctuation">(</span><span class="token string">&quot;/yingli46&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 显示所有模型和标签</span>
    meta<span class="token punctuation">.</span>layer<span class="token punctuation">.</span><span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),v={href:"/three/api/layer.html#reset",target:"_blank",rel:"noopener noreferrer"},b=e(`<h3 id="自定义标签显示" tabindex="-1"><a class="header-anchor" href="#自定义标签显示" aria-hidden="true">#</a> 自定义标签显示</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> DTEngine <span class="token keyword">from</span> <span class="token string">&quot;@tslfe/dt-engine&quot;</span>

<span class="token comment">// 获取meta实例</span>
DTEngine<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    host<span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    token<span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>meta<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 自定义标签函数</span>
    <span class="token keyword">let</span> <span class="token function-variable function">configLabel</span> <span class="token operator">=</span> <span class="token punctuation">(</span>component<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            type<span class="token operator">:</span> <span class="token string">&#39;text&#39;</span><span class="token punctuation">,</span>
            name<span class="token operator">:</span> component<span class="token punctuation">.</span>options<span class="token punctuation">.</span>name<span class="token punctuation">,</span>
            offset<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token comment">//标签向y轴偏移2米</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 调用自定义配置</span>
    meta<span class="token punctuation">.</span>layer<span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span>configLabel<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),g={href:"/three/api/layer.html#config",target:"_blank",rel:"noopener noreferrer"};function h(f,q){const a=o("ExternalLinkIcon");return c(),i("div",null,[u,n("blockquote",null,[n("p",null,[s("参考 "),n("a",r,[s("layer.filter()"),t(a)])])]),d,n("blockquote",null,[n("p",null,[s("参考 "),n("a",k,[s("layer.clear()"),t(a)])])]),m,n("blockquote",null,[n("p",null,[s("参考 "),n("a",v,[s("layer.reset()"),t(a)])])]),b,n("blockquote",null,[n("p",null,[s("参考 "),n("a",g,[s("layer.config()"),t(a)])])])])}const _=p(l,[["render",h],["__file","layer.html.vue"]]);export{_ as default};
