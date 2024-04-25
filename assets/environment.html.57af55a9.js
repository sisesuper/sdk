import{_ as p,r as o,o as c,c as i,a as n,b as s,d as t,e}from"./app.f18319b0.js";const l={},u=e(`<h1 id="环境-特效" tabindex="-1"><a class="header-anchor" href="#环境-特效" aria-hidden="true">#</a> 环境 &amp; 特效</h1><h3 id="初始化" tabindex="-1"><a class="header-anchor" href="#初始化" aria-hidden="true">#</a> 初始化</h3><p>在meta实例创建后,需要手动进行初始化才能调用effect</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> DTEngine <span class="token keyword">from</span> <span class="token string">&quot;@tslfe/dt-engine&quot;</span>

<span class="token comment">// 获取meta实例</span>
DTEngine<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    host<span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    token<span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>meta<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 将meta挂载到dom上,参数为dom的id</span>
    meta<span class="token punctuation">.</span><span class="token function">amount</span><span class="token punctuation">(</span><span class="token string">&quot;device-container&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 需要加载的场景路径</span>
    meta<span class="token punctuation">.</span><span class="token function">enter</span><span class="token punctuation">(</span><span class="token string">&quot;/yingli46&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 初始化特效和环境</span>
    meta<span class="token punctuation">.</span><span class="token function">loadEffect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 初始化完成后特效effect对象会挂载到meta上</span>
    <span class="token keyword">const</span> effect <span class="token operator">=</span> meta<span class="token punctuation">.</span>effect<span class="token punctuation">;</span>

    <span class="token comment">// 初始化完成后环境environment对象会挂载到meta上</span>
    <span class="token keyword">const</span> environment <span class="token operator">=</span> meta<span class="token punctuation">.</span>environment<span class="token punctuation">;</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建流光线" tabindex="-1"><a class="header-anchor" href="#创建流光线" aria-hidden="true">#</a> 创建流光线</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> DTEngine <span class="token keyword">from</span> <span class="token string">&quot;@tslfe/dt-engine&quot;</span>

<span class="token comment">// 获取meta实例</span>
DTEngine<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    host<span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    token<span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>meta<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 将meta挂载到dom上,参数为dom的id</span>
    meta<span class="token punctuation">.</span><span class="token function">amount</span><span class="token punctuation">(</span><span class="token string">&quot;device-container&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 需要加载的场景路径</span>
    meta<span class="token punctuation">.</span><span class="token function">enter</span><span class="token punctuation">(</span><span class="token string">&quot;/yingli46&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 初始化特效和环境</span>
    meta<span class="token punctuation">.</span><span class="token function">loadEffect</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment">// 生成流光线</span>
    <span class="token keyword">const</span> line <span class="token operator">=</span> meta<span class="token punctuation">.</span>effect<span class="token punctuation">.</span><span class="token function">createLine</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        position<span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span>
            <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        color<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;#E9967A&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;#E9967A&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;#E9967A&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        count<span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),r={href:"/three/api/effect.html#createline",target:"_blank",rel:"noopener noreferrer"},k=e(`<h3 id="修改流光线的设置" tabindex="-1"><a class="header-anchor" href="#修改流光线的设置" aria-hidden="true">#</a> 修改流光线的设置</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> DTEngine <span class="token keyword">from</span> <span class="token string">&quot;@tslfe/dt-engine&quot;</span>

<span class="token comment">// 获取meta实例</span>
DTEngine<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    host<span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    token<span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>meta<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 将meta挂载到dom上,参数为dom的id</span>
    meta<span class="token punctuation">.</span><span class="token function">amount</span><span class="token punctuation">(</span><span class="token string">&quot;device-container&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 需要加载的场景路径</span>
    meta<span class="token punctuation">.</span><span class="token function">enter</span><span class="token punctuation">(</span><span class="token string">&quot;/yingli46&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 初始化特效和环境</span>
    meta<span class="token punctuation">.</span><span class="token function">loadEffect</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment">// 生成流光线</span>
    <span class="token keyword">const</span> line <span class="token operator">=</span> meta<span class="token punctuation">.</span>effect<span class="token punctuation">.</span><span class="token function">createLine</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        position<span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span>
            <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        color<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;#E9967A&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;#E9967A&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;#E9967A&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        count<span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token comment">// 修改流光线的设置</span>
    meta<span class="token punctuation">.</span>effect<span class="token punctuation">.</span><span class="token function">configLine</span><span class="token punctuation">(</span>line<span class="token punctuation">.</span>id<span class="token punctuation">,</span> <span class="token punctuation">{</span>
        color<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;#66ccff&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;#66ccff&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;#66ccff&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        count<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),d={href:"/three/api/effect.html#configline",target:"_blank",rel:"noopener noreferrer"},m=e(`<h3 id="移除流光线" tabindex="-1"><a class="header-anchor" href="#移除流光线" aria-hidden="true">#</a> 移除流光线</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> DTEngine <span class="token keyword">from</span> <span class="token string">&quot;@tslfe/dt-engine&quot;</span>

<span class="token comment">// 获取meta实例</span>
DTEngine<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    host<span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    token<span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>meta<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 将meta挂载到dom上,参数为dom的id</span>
    meta<span class="token punctuation">.</span><span class="token function">amount</span><span class="token punctuation">(</span><span class="token string">&quot;device-container&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 需要加载的场景路径</span>
    meta<span class="token punctuation">.</span><span class="token function">enter</span><span class="token punctuation">(</span><span class="token string">&quot;/yingli46&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 初始化特效和环境</span>
    meta<span class="token punctuation">.</span><span class="token function">loadEffect</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment">// 生成流光线</span>
    <span class="token keyword">const</span> line <span class="token operator">=</span> meta<span class="token punctuation">.</span>effect<span class="token punctuation">.</span><span class="token function">createLine</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        position<span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span>
            <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        color<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;#E9967A&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;#E9967A&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;#E9967A&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        count<span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token comment">// 移除指定id的流光线</span>
    meta<span class="token punctuation">.</span>effect<span class="token punctuation">.</span><span class="token function">clearLines</span><span class="token punctuation">(</span><span class="token punctuation">[</span>line<span class="token punctuation">.</span>id<span class="token punctuation">]</span><span class="token punctuation">)</span>

    <span class="token comment">// 移除所有流光线</span>
    meta<span class="token punctuation">.</span>effect<span class="token punctuation">.</span><span class="token function">clearLines</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),v={href:"/three/api/effect.html#clearlines",target:"_blank",rel:"noopener noreferrer"},b=e(`<h3 id="创建热力图" tabindex="-1"><a class="header-anchor" href="#创建热力图" aria-hidden="true">#</a> 创建热力图</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> DTEngine <span class="token keyword">from</span> <span class="token string">&quot;@tslfe/dt-engine&quot;</span>

<span class="token comment">// 获取meta实例</span>
DTEngine<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    host<span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    token<span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>meta<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 将meta挂载到dom上,参数为dom的id</span>
    meta<span class="token punctuation">.</span><span class="token function">amount</span><span class="token punctuation">(</span><span class="token string">&quot;device-container&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 需要加载的场景路径</span>
    meta<span class="token punctuation">.</span><span class="token function">enter</span><span class="token punctuation">(</span><span class="token string">&quot;/yingli46&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 初始化特效和环境</span>
    meta<span class="token punctuation">.</span><span class="token function">loadEffect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 生成热力图需要2组参数</span>
    <span class="token comment">// 1 热力的数据集,表示空间的哪些位置具有热力值,比如[4, 0, 2.5]这个坐标(范围.8直径内)有8个单位的热力值</span>
    <span class="token comment">// 2 热力图的配置,主要是colors色环和opacity来决定热力图显示的颜色和整体透明度,其他参数默认即可</span>
    <span class="token comment">// 3 热力值总是程圆形向中间扩散,在相交的部分会累加热力值</span>
    <span class="token keyword">const</span> heatMap <span class="token operator">=</span> meta<span class="token punctuation">.</span>effect<span class="token punctuation">.</span><span class="token function">createHeatMap</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">{</span>
        position<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2.5</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        value<span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token comment">// 热力值</span>
        radius<span class="token operator">:</span> <span class="token number">.8</span><span class="token punctuation">,</span> <span class="token comment">//热力扩散直径</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        position<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        value<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token comment">// 热力值</span>
        <span class="token comment">// radius: .6, //热力扩散直径</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        position<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">3.5</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        value<span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token comment">// 热力值</span>
        <span class="token comment">// radius: .4, //热力扩散直径</span>
    <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token comment">// maxValue: 10,  // 热力最大值</span>
        <span class="token comment">// colors: [&quot;transparent&quot;, &quot;green&quot;, &quot;yellow&quot;, &quot;red&quot;], //色环</span>
        <span class="token comment">// segments: 64,  // 粒子数比例</span>
        <span class="token comment">// opacity: 0.15,  // 粒子透明度</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),f={href:"/three/api/effect.html#createheatmap",target:"_blank",rel:"noopener noreferrer"},g=e(`<h3 id="移除所有热力图" tabindex="-1"><a class="header-anchor" href="#移除所有热力图" aria-hidden="true">#</a> 移除所有热力图</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> DTEngine <span class="token keyword">from</span> <span class="token string">&quot;@tslfe/dt-engine&quot;</span>

<span class="token comment">// 获取meta实例</span>
DTEngine<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    host<span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    token<span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>meta<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 将meta挂载到dom上,参数为dom的id</span>
    meta<span class="token punctuation">.</span><span class="token function">amount</span><span class="token punctuation">(</span><span class="token string">&quot;device-container&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 需要加载的场景路径</span>
    meta<span class="token punctuation">.</span><span class="token function">enter</span><span class="token punctuation">(</span><span class="token string">&quot;/yingli46&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 初始化特效和环境</span>
    meta<span class="token punctuation">.</span><span class="token function">loadEffect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 生成热力图需要2组参数</span>
    <span class="token comment">// 1 热力的数据集,表示空间的哪些位置具有热力值,比如[4, 0, 2.5]这个坐标(范围.8直径内)有8个单位的热力值</span>
    <span class="token comment">// 2 热力图的配置,主要是colors色环和opacity来决定热力图显示的颜色和整体透明度,其他参数默认即可</span>
    <span class="token comment">// 3 热力值总是程圆形向中间扩散,在相交的部分会累加热力值</span>
    <span class="token keyword">const</span> heatMap <span class="token operator">=</span> meta<span class="token punctuation">.</span>effect<span class="token punctuation">.</span><span class="token function">createHeatMap</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">{</span>
        position<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2.5</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        value<span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token comment">// 热力值</span>
        radius<span class="token operator">:</span> <span class="token number">.8</span><span class="token punctuation">,</span> <span class="token comment">//热力扩散直径</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        position<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        value<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token comment">// 热力值</span>
        <span class="token comment">// radius: .6, //热力扩散直径</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        position<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">3.5</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        value<span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token comment">// 热力值</span>
        <span class="token comment">// radius: .4, //热力扩散直径</span>
    <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token comment">// maxValue: 10,  // 热力最大值</span>
        <span class="token comment">// colors: [&quot;transparent&quot;, &quot;green&quot;, &quot;yellow&quot;, &quot;red&quot;], //色环</span>
        <span class="token comment">// segments: 64,  // 粒子数比例</span>
        <span class="token comment">// opacity: 0.15,  // 粒子透明度</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token comment">// 移除所有热力图</span>
    meta<span class="token punctuation">.</span>effect<span class="token punctuation">.</span><span class="token function">clearHeatMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),h={href:"/three/api/effect.html#clearheatmap",target:"_blank",rel:"noopener noreferrer"},q=e(`<h3 id="设置环境-下雨" tabindex="-1"><a class="header-anchor" href="#设置环境-下雨" aria-hidden="true">#</a> 设置环境-下雨</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> DTEngine <span class="token keyword">from</span> <span class="token string">&quot;@tslfe/dt-engine&quot;</span>

<span class="token comment">// 获取meta实例</span>
DTEngine<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    host<span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    token<span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>meta<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 将meta挂载到dom上,参数为dom的id</span>
    meta<span class="token punctuation">.</span><span class="token function">amount</span><span class="token punctuation">(</span><span class="token string">&quot;device-container&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 需要加载的场景路径</span>
    meta<span class="token punctuation">.</span><span class="token function">enter</span><span class="token punctuation">(</span><span class="token string">&quot;/yingli46&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 初始化特效和环境</span>
    meta<span class="token punctuation">.</span><span class="token function">loadEffect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 环境设为小雨</span>
    <span class="token keyword">let</span> raining <span class="token operator">=</span> meta<span class="token punctuation">.</span>environment<span class="token punctuation">.</span><span class="token function">raining</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 环境设为浅蓝色的小雨</span>
    raining <span class="token operator">=</span> meta<span class="token punctuation">.</span>environment<span class="token punctuation">.</span><span class="token function">raining</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        color<span class="token operator">:</span> <span class="token string">&#39;#66ccff&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 注:同类型环境只能存在一个实例,即再次调用环境雨会覆盖上一个环境雨</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),y={href:"/three/api/environment.html#raining",target:"_blank",rel:"noopener noreferrer"},_=e(`<h3 id="设置环境-下雪" tabindex="-1"><a class="header-anchor" href="#设置环境-下雪" aria-hidden="true">#</a> 设置环境-下雪</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> DTEngine <span class="token keyword">from</span> <span class="token string">&quot;@tslfe/dt-engine&quot;</span>

<span class="token comment">// 获取meta实例</span>
DTEngine<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    host<span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    token<span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>meta<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 将meta挂载到dom上,参数为dom的id</span>
    meta<span class="token punctuation">.</span><span class="token function">amount</span><span class="token punctuation">(</span><span class="token string">&quot;device-container&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 需要加载的场景路径</span>
    meta<span class="token punctuation">.</span><span class="token function">enter</span><span class="token punctuation">(</span><span class="token string">&quot;/yingli46&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 初始化特效和环境</span>
    meta<span class="token punctuation">.</span><span class="token function">loadEffect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 环境设为小雪</span>
    <span class="token keyword">let</span> snowing <span class="token operator">=</span> meta<span class="token punctuation">.</span>environment<span class="token punctuation">.</span><span class="token function">snowing</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 环境设为浅蓝色的大雪</span>
    snowing <span class="token operator">=</span> meta<span class="token punctuation">.</span>environment<span class="token punctuation">.</span><span class="token function">snowing</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        color<span class="token operator">:</span> <span class="token string">&#39;#66ccff&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 注:同类型环境只能存在一个实例,即再次调用环境雪会覆盖上一个环境雪</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),E={href:"/three/api/environment.html#snowing",target:"_blank",rel:"noopener noreferrer"},w=e(`<h3 id="设置环境-白天-黑夜" tabindex="-1"><a class="header-anchor" href="#设置环境-白天-黑夜" aria-hidden="true">#</a> 设置环境-白天 &amp; 黑夜</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> DTEngine <span class="token keyword">from</span> <span class="token string">&quot;@tslfe/dt-engine&quot;</span>

<span class="token comment">// 获取meta实例</span>
DTEngine<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    host<span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    token<span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>meta<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 将meta挂载到dom上,参数为dom的id</span>
    meta<span class="token punctuation">.</span><span class="token function">amount</span><span class="token punctuation">(</span><span class="token string">&quot;device-container&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 需要加载的场景路径</span>
    meta<span class="token punctuation">.</span><span class="token function">enter</span><span class="token punctuation">(</span><span class="token string">&quot;/yingli46&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 初始化特效和环境</span>
    meta<span class="token punctuation">.</span><span class="token function">loadEffect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 环境设为白天</span>
    <span class="token keyword">let</span> sky <span class="token operator">=</span> meta<span class="token punctuation">.</span>environment<span class="token punctuation">.</span><span class="token function">dayTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 环境设为黑夜</span>
    sky <span class="token operator">=</span> meta<span class="token punctuation">.</span>environment<span class="token punctuation">.</span><span class="token function">nightTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 注:同类型环境只能存在一个实例,即再次调用环境天空会覆盖上一个环境天空</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),x={href:"/three/api/environment.html#daytime",target:"_blank",rel:"noopener noreferrer"},T=e(`<h3 id="移除环境" tabindex="-1"><a class="header-anchor" href="#移除环境" aria-hidden="true">#</a> 移除环境</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> DTEngine <span class="token keyword">from</span> <span class="token string">&quot;@tslfe/dt-engine&quot;</span>

<span class="token comment">// 获取meta实例</span>
DTEngine<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    host<span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    token<span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>meta<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 将meta挂载到dom上,参数为dom的id</span>
    meta<span class="token punctuation">.</span><span class="token function">amount</span><span class="token punctuation">(</span><span class="token string">&quot;device-container&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 需要加载的场景路径</span>
    meta<span class="token punctuation">.</span><span class="token function">enter</span><span class="token punctuation">(</span><span class="token string">&quot;/yingli46&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 初始化特效和环境</span>
    meta<span class="token punctuation">.</span><span class="token function">loadEffect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 环境设为小雨</span>
    <span class="token keyword">let</span> raining <span class="token operator">=</span> meta<span class="token punctuation">.</span>environment<span class="token punctuation">.</span><span class="token function">raining</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 移除下雨</span>
    meta<span class="token punctuation">.</span>environment<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span>raining<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// raining.clear() 移除下雨,同上</span>

    <span class="token comment">// 移除全部环境</span>
    meta<span class="token punctuation">.</span>environment<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),D={href:"/three/api/environment.html#clear",target:"_blank",rel:"noopener noreferrer"};function L(A,M){const a=o("ExternalLinkIcon");return c(),i("div",null,[u,n("blockquote",null,[n("p",null,[s("参考 "),n("a",r,[s("effect.creatLine()"),t(a)])])]),k,n("blockquote",null,[n("p",null,[s("参考 "),n("a",d,[s("effect.creatLine()"),t(a)])])]),m,n("blockquote",null,[n("p",null,[s("参考 "),n("a",v,[s("effect.clearLines()"),t(a)])])]),b,n("blockquote",null,[n("p",null,[s("参考 "),n("a",f,[s("effect.createHeatMap()"),t(a)])])]),g,n("blockquote",null,[n("p",null,[s("参考 "),n("a",h,[s("effect.clearHeatMap()"),t(a)])])]),q,n("blockquote",null,[n("p",null,[s("参考 "),n("a",y,[s("environment.raining()"),t(a)])])]),_,n("blockquote",null,[n("p",null,[s("参考 "),n("a",E,[s("environment.snowing()"),t(a)])])]),w,n("blockquote",null,[n("p",null,[s("参考 "),n("a",x,[s("environment.dayTime()"),t(a)])])]),T,n("blockquote",null,[n("p",null,[s("参考 "),n("a",D,[s("environment.clear()"),t(a)])])])])}const H=p(l,[["render",L],["__file","environment.html.vue"]]);export{H as default};
