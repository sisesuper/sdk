import{_ as p,r as o,o as c,c as i,a as n,b as s,d as t,e}from"./app.f18319b0.js";const l={},u=e(`<h1 id="相机操作" tabindex="-1"><a class="header-anchor" href="#相机操作" aria-hidden="true">#</a> 相机操作</h1><h3 id="将当前的视野飞跃到指定位置" tabindex="-1"><a class="header-anchor" href="#将当前的视野飞跃到指定位置" aria-hidden="true">#</a> 将当前的视野飞跃到指定位置</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> DTEngine <span class="token keyword">from</span> <span class="token string">&quot;@tslfe/dt-engine&quot;</span>

<span class="token comment">// 获取meta实例</span>
DTEngine<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    host<span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    token<span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>meta<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 将meta挂载到dom上,参数为dom的id</span>
    meta<span class="token punctuation">.</span><span class="token function">amount</span><span class="token punctuation">(</span><span class="token string">&quot;device-container&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 需要加载的场景路径</span>
    meta<span class="token punctuation">.</span><span class="token function">enter</span><span class="token punctuation">(</span><span class="token string">&quot;/yingli46&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// camera飞跃到一个模型</span>
    <span class="token keyword">let</span> airModel <span class="token operator">=</span> meta<span class="token punctuation">.</span>context<span class="token punctuation">.</span>components<span class="token punctuation">.</span><span class="token function">getModel</span><span class="token punctuation">(</span><span class="token string">&quot;1029221000246&quot;</span><span class="token punctuation">)</span>
    meta<span class="token punctuation">.</span>camera<span class="token punctuation">.</span><span class="token function">flyTo</span><span class="token punctuation">(</span>airModel<span class="token punctuation">)</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),r={href:"/three/api/camera.html#flyto",target:"_blank",rel:"noopener noreferrer"},d=e(`<h3 id="改变当前视野的深度" tabindex="-1"><a class="header-anchor" href="#改变当前视野的深度" aria-hidden="true">#</a> 改变当前视野的深度</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> DTEngine <span class="token keyword">from</span> <span class="token string">&quot;@tslfe/dt-engine&quot;</span>

<span class="token comment">// 获取meta实例</span>
DTEngine<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    host<span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    token<span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>meta<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 将meta挂载到dom上,参数为dom的id</span>
    meta<span class="token punctuation">.</span><span class="token function">amount</span><span class="token punctuation">(</span><span class="token string">&quot;device-container&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 需要加载的场景路径</span>
    meta<span class="token punctuation">.</span><span class="token function">enter</span><span class="token punctuation">(</span><span class="token string">&quot;/yingli46&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 设置camera的深度</span>
    meta<span class="token punctuation">.</span>camera<span class="token punctuation">.</span><span class="token function">setZoom</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),k={href:"/three/api/camera.html#setzoom",target:"_blank",rel:"noopener noreferrer"},m=e(`<h3 id="播放一组轨迹动画" tabindex="-1"><a class="header-anchor" href="#播放一组轨迹动画" aria-hidden="true">#</a> 播放一组轨迹动画</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> DTEngine <span class="token keyword">from</span> <span class="token string">&quot;@tslfe/dt-engine&quot;</span>

<span class="token comment">// 获取meta实例</span>
DTEngine<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    host<span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    token<span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>meta<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 将meta挂载到dom上,参数为dom的id</span>
    meta<span class="token punctuation">.</span><span class="token function">amount</span><span class="token punctuation">(</span><span class="token string">&quot;device-container&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 需要加载的场景路径</span>
    meta<span class="token punctuation">.</span><span class="token function">enter</span><span class="token punctuation">(</span><span class="token string">&quot;/yingli46&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 传入模型id集合进行轨迹动画</span>
    <span class="token keyword">const</span> stop <span class="token operator">=</span> meta<span class="token punctuation">.</span>camera<span class="token punctuation">.</span><span class="token function">travel</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;2000300002&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;2000200001&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;1029221000237&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> loop<span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 停止动画</span>
    <span class="token function">stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),v={href:"/three/api/camera.html#travel",target:"_blank",rel:"noopener noreferrer"};function b(h,g){const a=o("ExternalLinkIcon");return c(),i("div",null,[u,n("blockquote",null,[n("p",null,[s("参考 "),n("a",r,[s("camera.flyTo()"),t(a)])])]),d,n("blockquote",null,[n("p",null,[s("参考 "),n("a",k,[s("camera.setZoom()"),t(a)])])]),m,n("blockquote",null,[n("p",null,[s("参考 "),n("a",v,[s("camera.travel()"),t(a)])])])])}const q=p(l,[["render",b],["__file","camera.html.vue"]]);export{q as default};
