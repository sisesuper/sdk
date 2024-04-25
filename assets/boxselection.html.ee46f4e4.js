import{_ as i,r as o,o as c,c as u,a as n,b as s,d as a,w as d,e}from"./app.f18319b0.js";const r={},k={id:"boxselection",tabindex:"-1"},v=n("a",{class:"header-anchor",href:"#boxselection","aria-hidden":"true"},"#",-1),h=n("p",null,"三维框选插件，该插件提供了在三维场景中通过鼠标点击的方式绘制框选区域，并获取落在区域范围中的模型对象。",-1),b=n("blockquote",null,[n("p",null,"注：该插件在俯视角度下使用体验最佳")],-1),m=n("li",null,[n("p",null,"插件名称"),n("p",null,[n("strong",null,"box-selection")])],-1),g=n("p",null,"初始参数",-1),_=n("p",null,[n("code",null,"options: BoxSelectionOptions"),s(" 区域线配置参数")],-1),f=n("li",null,[n("p",null,"示例")],-1),y=e(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> webglPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@tslfe/dt-enging&quot;</span>
<span class="token operator">...</span>省略获取meta实例的步骤<span class="token operator">...</span>

<span class="token keyword">const</span> selectionPlugin <span class="token operator">=</span> meta<span class="token punctuation">.</span>plugin<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>webglPlugin<span class="token punctuation">.</span><span class="token function">boxSelection</span><span class="token punctuation">(</span><span class="token punctuation">{</span>color<span class="token operator">:</span> <span class="token string">&#39;red&#39;</span><span class="token punctuation">,</span> radius<span class="token operator">:</span> <span class="token number">0.1</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h2><h3 id="list" tabindex="-1"><a class="header-anchor" href="#list" aria-hidden="true">#</a> list</h3>`,3),x={class:"custom-container tip"},w=n("p",{class:"custom-container-title"},"框选中的模型集合",-1),P=n("p",null,[s("类型: "),n("code",null,"ComponentGroup")],-1),q={href:"/three/api/componentgroup.html",target:"_blank",rel:"noopener noreferrer"},E=n("li",null,[n("p",null,"说明: 获取当前处于绘制区域中的模型集合")],-1),L=e(`<h2 id="方法" tabindex="-1"><a class="header-anchor" href="#方法" aria-hidden="true">#</a> 方法</h2><h3 id="start" tabindex="-1"><a class="header-anchor" href="#start" aria-hidden="true">#</a> start( )</h3><p>开启框选机制，然后通过鼠标在三维场景中点击打点</p><blockquote><p>注：只有在打点超过 1 个后才会开始渲染连接线</p></blockquote><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function-variable function">create</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><p>参数</p><ul><li>无</li></ul></li><li><p>返回值</p><ul><li>无</li></ul></li><li><p>示例</p></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token operator">...</span>省略挂载tool插件的步骤<span class="token operator">...</span>
selectionPlugin<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>；
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="clear" tabindex="-1"><a class="header-anchor" href="#clear" aria-hidden="true">#</a> clear( )</h3><p>清除当前绘制的框选区域线</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function-variable function">clear</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><p>参数</p><ul><li>无</li></ul></li><li><p>返回值</p><ul><li>无</li></ul></li><li><p>示例</p></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token operator">...</span>省略挂载tool插件的步骤<span class="token operator">...</span>

selectionPlugin<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="end" tabindex="-1"><a class="header-anchor" href="#end" aria-hidden="true">#</a> end( )</h3><p>结束框选操作</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function-variable function">end</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><p>参数</p><ul><li>无</li></ul></li><li><p>返回值</p><ul><li>无</li></ul></li><li><p>示例</p></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token operator">...</span>省略挂载tool插件的步骤<span class="token operator">...</span>

selectionPlugin<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17),B={id:"undo",tabindex:"-1"},S=n("a",{class:"header-anchor",href:"#undo","aria-hidden":"true"},"#",-1),C=e(`<p>根据指定的撤销数量，从后往前撤销已插入点</p><blockquote><p>注：传入的撤销数量为正整数</p></blockquote><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function-variable function">undo</span><span class="token operator">:</span> <span class="token punctuation">(</span>num <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><p>参数</p><ul><li><code>num: number</code> 撤销数量，默认为 1</li></ul></li><li><p>返回值</p><ul><li>无</li></ul></li><li><p>示例</p></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token operator">...</span>省略挂载tool插件的步骤<span class="token operator">...</span>

selectionPlugin<span class="token punctuation">.</span><span class="token function">undo</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),N={id:"dispose",tabindex:"-1"},T=n("a",{class:"header-anchor",href:"#dispose","aria-hidden":"true"},"#",-1),V=e(`<p>销毁当前的框选插件实例，移除所有事件监听</p><blockquote><p>注：当不再需要使用该插件时，应调用该方法销毁实例防止内存泄漏</p></blockquote><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function-variable function">dispose</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><p>参数</p><ul><li>无</li></ul></li><li><p>返回值</p><ul><li>无</li></ul></li><li><p>示例</p></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token operator">...</span>省略挂载tool插件的步骤<span class="token operator">...</span>

selectionPlugin<span class="token punctuation">.</span><span class="token function">dispose</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),D={id:"addeventlistener",tabindex:"-1"},G=n("a",{class:"header-anchor",href:"#addeventlistener","aria-hidden":"true"},"#",-1),I=e(`<p>监听框选中指定的事件，事件类型支持：<code>start</code> <code>end</code> <code>point-change</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function-variable function">addEventListener</span><span class="token operator">:</span> <span class="token punctuation">(</span>type<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token function-variable function">listener</span><span class="token operator">:</span> <span class="token punctuation">(</span>e<span class="token operator">:</span> DTEvent<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><p>参数</p><ul><li><code>type: string</code> 事件类型，支持 <code>start</code> <code>end</code> <code>point-change</code></li><li><code>listener: (e: DTEvent) =&gt; void</code> 事件回调函数，参数 <code>e</code> 为 <code>DTEvent</code> 类型</li></ul></li><li><p>返回值</p><ul><li>无</li></ul></li><li><p>示例</p></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token operator">...</span>省略挂载tool插件的步骤<span class="token operator">...</span>

selectionPlugin<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;end&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token comment">// 输出当前处于绘制区域中的模型集合</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>selectionPlugin<span class="token punctuation">.</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function O(R,j){const t=o("badge"),l=o("RouterLink"),p=o("ExternalLinkIcon");return c(),u("div",null,[n("h1",k,[v,s(" boxSelection "),a(t,{type:"danger",text:"v4.1.4"})]),h,b,n("ul",null,[m,n("li",null,[g,n("ul",null,[n("li",null,[_,n("ul",null,[n("li",null,[s("参考："),a(l,{to:"/three/help/declare.html#boxselectionoptions"},{default:d(()=>[s("BoxSelectionOptions")]),_:1})])])])])]),f]),y,n("div",x,[w,n("ul",null,[n("li",null,[P,n("ul",null,[n("li",null,[s("参考: "),n("a",q,[s("ComponentGroup"),a(p)])])])]),E])]),L,n("h3",B,[S,s(" undo( ) "),a(t,{type:"danger",text:"v4.1.4"})]),C,n("h3",N,[T,s(" dispose( ) "),a(t,{type:"danger",text:"v4.1.4"})]),V,n("h3",D,[G,s(" addEventListener( ) "),a(t,{type:"danger",text:"v4.1.4"})]),I])}const A=i(r,[["render",O],["__file","boxselection.html.vue"]]);export{A as default};