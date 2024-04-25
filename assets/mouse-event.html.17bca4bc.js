import{_ as p,r as o,o as c,c as i,a as n,b as s,d as t,e}from"./app.f18319b0.js";const l={},u=n("h1",{id:"鼠标事件",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#鼠标事件","aria-hidden":"true"},"#"),s(" 鼠标事件")],-1),k={href:"/three/api/eventemitter.html",target:"_blank",rel:"noopener noreferrer"},d={href:"/three/advanced/event.html#%E5%A6%82%E4%BD%95%E6%89%A9%E5%B1%95%E4%BA%8B%E4%BB%B6",target:"_blank",rel:"noopener noreferrer"},r=e(`<h2 id="自定义事件" tabindex="-1"><a class="header-anchor" href="#自定义事件" aria-hidden="true">#</a> 自定义事件</h2><h3 id="step1-编写一个双击事件" tabindex="-1"><a class="header-anchor" href="#step1-编写一个双击事件" aria-hidden="true">#</a> step1:编写一个双击事件</h3><blockquote><p>dbclick.ts</p></blockquote><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineEvent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@tslfe/dt-engine&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> DTEvent <span class="token keyword">from</span> <span class="token string">&quot;@tslfe/dt-engine/core/event&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> getIntersects <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@tslfe/dt-engine/common/tool&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// 事件常量</span>
<span class="token keyword">const</span> ModelEvent <span class="token operator">=</span> <span class="token punctuation">{</span>
    dbclick<span class="token operator">:</span> <span class="token string">&quot;dbclick&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> ModelMouseEvent <span class="token operator">=</span> <span class="token punctuation">{</span>
    dbclick<span class="token operator">:</span> <span class="token string">&#39;dblclick&#39;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineEvent</span><span class="token punctuation">(</span>ModelMouseEvent<span class="token punctuation">.</span>dbclick<span class="token punctuation">,</span> <span class="token punctuation">(</span>event<span class="token punctuation">,</span> context<span class="token punctuation">,</span> meta<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

    <span class="token keyword">const</span> <span class="token function-variable function">onDblClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span>me<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> meta<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> intersects <span class="token operator">=</span> <span class="token function">getIntersects</span><span class="token punctuation">(</span>me<span class="token punctuation">,</span> meta<span class="token punctuation">.</span>el<span class="token operator">!</span><span class="token punctuation">,</span> meta<span class="token punctuation">.</span>camera<span class="token punctuation">,</span> meta<span class="token punctuation">.</span>scene<span class="token punctuation">.</span>children<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">const</span> event <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DTEvent</span><span class="token punctuation">(</span>ModelMouseEvent<span class="token punctuation">.</span>dbclick<span class="token punctuation">,</span> macthedComponent<span class="token punctuation">,</span> me<span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token comment">// 选中</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>intersects<span class="token punctuation">.</span>length <span class="token operator">!==</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> intersects<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>object <span class="token keyword">instanceof</span> <span class="token class-name">Mesh</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 判断事件冒泡</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>event<span class="token punctuation">.</span>stopped<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                meta<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span>ModelMouseEvent<span class="token punctuation">.</span>dbclick<span class="token punctuation">,</span> event<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token comment">// 判断事件是否禁用</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>macthedComponent<span class="token punctuation">.</span>disabled<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                context<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span>ModelEvent<span class="token punctuation">.</span>dbclick<span class="token punctuation">,</span> event<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token comment">// 未选中</span>
            context<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span>ModelEvent<span class="token punctuation">.</span>dbclick<span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">DTEvent</span><span class="token punctuation">(</span>ModelEvent<span class="token punctuation">.</span>dbclick<span class="token punctuation">,</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> me<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>event <span class="token keyword">instanceof</span> <span class="token class-name">MouseEvent</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">onDblClick</span><span class="token punctuation">(</span>event<span class="token punctuation">,</span> meta<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="step2-注册双击事件" tabindex="-1"><a class="header-anchor" href="#step2-注册双击事件" aria-hidden="true">#</a> step2: 注册双击事件</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 获取刚才编写的双击事件</span>
<span class="token keyword">import</span> Dbclick <span class="token keyword">from</span> <span class="token string">&#39;Dbclick.ts&#39;</span>
<span class="token keyword">import</span> DTEngine <span class="token keyword">from</span> <span class="token string">&quot;@tslfe/dt-engine&quot;</span>

<span class="token comment">// 获取meta实例</span>
DTEngine<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    host<span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    token<span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>meta<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 将meta挂载到dom上,参数为dom的id</span>
    meta<span class="token punctuation">.</span><span class="token function">amount</span><span class="token punctuation">(</span><span class="token string">&quot;device-container&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 需要加载的场景路径</span>
    meta<span class="token punctuation">.</span><span class="token function">enter</span><span class="token punctuation">(</span><span class="token string">&quot;/yingli46&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 注册事件</span>
    meta<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">&quot;event&quot;</span><span class="token punctuation">,</span> Dbclick<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="监听双击事件" tabindex="-1"><a class="header-anchor" href="#监听双击事件" aria-hidden="true">#</a> 监听双击事件</h2><blockquote><ul><li>直接监听事件请查看step3.1</li><li>如果想在插件内使用插件,请查看step3.2~step4.2</li></ul></blockquote><h3 id="step3-1-监听事件" tabindex="-1"><a class="header-anchor" href="#step3-1-监听事件" aria-hidden="true">#</a> step3.1: 监听事件</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> DTEvent <span class="token keyword">from</span> <span class="token string">&quot;../core/event&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// 事件常量</span>
<span class="token keyword">const</span> ModelEvent <span class="token operator">=</span> <span class="token punctuation">{</span>
    dbclick<span class="token operator">:</span> <span class="token string">&quot;dbclick&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token comment">// 选中项</span>
<span class="token keyword">let</span> selectedObjects <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

meta<span class="token punctuation">.</span>context<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span>ModelEvent<span class="token punctuation">.</span>dbclick<span class="token punctuation">,</span> <span class="token punctuation">(</span>event<span class="token operator">:</span> DTEvent<span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>target <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>target <span class="token keyword">as</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token punctuation">.</span>model<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> object3D <span class="token operator">=</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>target <span class="token keyword">as</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token punctuation">.</span>model<span class="token punctuation">;</span>
        selectedObjects <span class="token operator">=</span> <span class="token punctuation">[</span>object3D<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        selectedObjects <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="step3-2-监听插件内的事件" tabindex="-1"><a class="header-anchor" href="#step3-2-监听插件内的事件" aria-hidden="true">#</a> step3.2: 监听插件内的事件</h3><blockquote><p>myPlugin.ts</p></blockquote><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 引入插件库</span>
<span class="token keyword">import</span> definePlugin <span class="token keyword">from</span> <span class="token string">&quot;../define/plugin&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// 事件常量</span>
<span class="token keyword">const</span> ModelEvent <span class="token operator">=</span> <span class="token punctuation">{</span>
    dbclick<span class="token operator">:</span> <span class="token string">&quot;dbclick&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> ModelMouseEvent <span class="token operator">=</span> <span class="token punctuation">{</span>
    dbclick<span class="token operator">:</span> <span class="token string">&#39;dblclick&#39;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">definePlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">&quot;myPlugin&quot;</span><span class="token punctuation">,</span>
    <span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>context<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span>ModelEvent<span class="token punctuation">.</span>dbclick<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>dbclick<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">beforeUnmount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>context<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span>ModelEvent<span class="token punctuation">.</span>dbclick<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>dbclick<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">setup</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        
        <span class="token comment">// 选中项</span>
        <span class="token keyword">let</span> selectedObjects <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
       
        <span class="token comment">// 监听双击事件</span>
        <span class="token keyword">const</span> <span class="token function-variable function">dbclick</span> <span class="token operator">=</span> <span class="token punctuation">(</span>event<span class="token operator">:</span> DTEvent<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>target <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>target <span class="token keyword">as</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token punctuation">.</span>model<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">const</span> object3D <span class="token operator">=</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>target <span class="token keyword">as</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token punctuation">.</span>model<span class="token punctuation">;</span>
                selectedObjects <span class="token operator">=</span> <span class="token punctuation">[</span>object3D<span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                selectedObjects <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
        
        <span class="token comment">// 获取到选中的模型做你想做的...</span>

        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            dbclick<span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),v={href:"/three/help/plugin.html",target:"_blank",rel:"noopener noreferrer"},m=e(`<h3 id="step4-2-注册插件" tabindex="-1"><a class="header-anchor" href="#step4-2-注册插件" aria-hidden="true">#</a> step4.2: 注册插件</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> DTEngine <span class="token keyword">from</span> <span class="token string">&quot;@tslfe/dt-engine&quot;</span>

<span class="token keyword">import</span> myPlugin form <span class="token string">&#39;myPlugin.ts&#39;</span>

<span class="token comment">// 获取meta实例</span>
DTEngine<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    host<span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    token<span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>meta<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 将meta挂载到dom上,参数为dom的id</span>
    meta<span class="token punctuation">.</span><span class="token function">amount</span><span class="token punctuation">(</span><span class="token string">&quot;device-container&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 需要加载的场景路径</span>
    meta<span class="token punctuation">.</span><span class="token function">enter</span><span class="token punctuation">(</span><span class="token string">&quot;/yingli46&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token comment">// 注册插件</span>
    meta<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">&#39;customPluginType&#39;</span><span class="token punctuation">,</span> <span class="token function">myPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function b(g,h){const a=o("ExternalLinkIcon");return c(),i("div",null,[u,n("blockquote",null,[n("p",null,[s("TacOS可以监听鼠标事件,也可以自定义事件进行监听, 如果你对事件并不了解,建议先阅读"),n("a",k,[s("事件"),t(a)]),s("和"),n("a",d,[s("自定义事件"),t(a)])])]),r,n("blockquote",null,[n("p",null,[s("参考"),n("a",v,[s("插件"),t(a)])])]),m])}const f=p(l,[["render",b],["__file","mouse-event.html.vue"]]);export{f as default};
