import{_ as c,r as p,o as r,c as u,a as n,b as s,d as e,f as o,w as i,e as a}from"./app.f18319b0.js";const d={},k={id:"renderer",tabindex:"-1"},v=n("a",{class:"header-anchor",href:"#renderer","aria-hidden":"true"},"#",-1),m=a('<p>渲染器，用于渲染三维场景，并提供对渲染器的操作方法</p><h2 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h2><h3 id="composer" tabindex="-1"><a class="header-anchor" href="#composer" aria-hidden="true">#</a> composer</h3><div class="custom-container tip"><p class="custom-container-title">效果合成器</p><ul><li><p>类型: <code>EffectComposer</code></p></li><li><p>说明: 用于实现后期处理效果。它管理了产生最终视觉效果的后期处理过程链。</p></li></ul></div><h3 id="ispaused" tabindex="-1"><a class="header-anchor" href="#ispaused" aria-hidden="true">#</a> isPaused</h3><div class="custom-container tip"><p class="custom-container-title">暂停渲染器标识</p><ul><li><p>类型: <code>EffectComposer</code></p></li><li><p>说明: 用于标识渲染器当前状态。</p></li></ul></div><h2 id="方法" tabindex="-1"><a class="header-anchor" href="#方法" aria-hidden="true">#</a> 方法</h2>',7),h=a(`<h3 id="start" tabindex="-1"><a class="header-anchor" href="#start" aria-hidden="true">#</a> start( )</h3><p>开始页面实时刷新</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function-variable function">start</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><p>参数</p><ul><li>无</li></ul></li><li><p>返回值</p><ul><li>无</li></ul></li><li><p>示例</p></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token operator">...</span>省略获取meta实例的步骤<span class="token operator">...</span>

<span class="token keyword">const</span> renderer <span class="token operator">=</span> meta<span class="token punctuation">.</span>renderer
renderer<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="stop" tabindex="-1"><a class="header-anchor" href="#stop" aria-hidden="true">#</a> stop( )</h3><p>暂停页面刷新</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function-variable function">stop</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><p>参数</p><ul><li>无</li></ul></li><li><p>返回值</p><ul><li>无</li></ul></li><li><p>示例</p></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token operator">...</span>省略获取meta实例的步骤<span class="token operator">...</span>

<span class="token keyword">const</span> renderer <span class="token operator">=</span> meta<span class="token punctuation">.</span>renderer
renderer<span class="token punctuation">.</span><span class="token function">stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="dispose" tabindex="-1"><a class="header-anchor" href="#dispose" aria-hidden="true">#</a> dispose( )</h3><p>销毁渲染器</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function-variable function">dispose</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><p>参数</p><ul><li>无</li></ul></li><li><p>返回值</p><ul><li>无</li></ul></li><li><p>示例</p></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token operator">...</span>省略获取meta实例的步骤<span class="token operator">...</span>

<span class="token keyword">const</span> renderer <span class="token operator">=</span> meta<span class="token punctuation">.</span>renderer
renderer<span class="token punctuation">.</span><span class="token function">dispose</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),b=a(`<h3 id="onrender" tabindex="-1"><a class="header-anchor" href="#onrender" aria-hidden="true">#</a> onRender( )</h3><p>监听渲染过程</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function-variable function">onRender</span><span class="token operator">:</span> <span class="token punctuation">(</span>fn<span class="token operator">:</span> RenderFn<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,3),g=n("p",null,"参数",-1),f=n("p",null,[n("code",null,"fn:"),s(" 回调函数")],-1),_=n("li",null,[n("p",null,"返回值"),n("ul",null,[n("li",null,[n("code",null,"() => void:"),s(" 删除该监听的方法")])])],-1),y=n("li",null,[n("p",null,"示例")],-1),w=a(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token operator">...</span>省略获取meta实例的步骤<span class="token operator">...</span>

<span class="token keyword">const</span> renderer <span class="token operator">=</span> meta<span class="token punctuation">.</span>renderer
<span class="token keyword">const</span> del <span class="token operator">=</span> renderer<span class="token punctuation">.</span><span class="token function">onRender</span><span class="token punctuation">(</span><span class="token punctuation">(</span>time<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">rendering: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>time<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">del</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="onresize" tabindex="-1"><a class="header-anchor" href="#onresize" aria-hidden="true">#</a> onResize( )</h3><p>监听渲染器宽高变化</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function-variable function">onResize</span><span class="token operator">:</span> <span class="token punctuation">(</span>fn<span class="token operator">:</span> ResizeFn<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,4),x=n("p",null,"参数",-1),R=n("p",null,[n("code",null,"fn:"),s(" 回调函数")],-1),z=n("li",null,[n("p",null,"返回值"),n("ul",null,[n("li",null,[n("code",null,"() => void:"),s(" 删除该监听的方法")])])],-1),C=n("li",null,[n("p",null,"示例")],-1),N=a(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token operator">...</span>省略获取meta实例的步骤<span class="token operator">...</span>

<span class="token keyword">const</span> renderer <span class="token operator">=</span> meta<span class="token punctuation">.</span>renderer
<span class="token keyword">const</span> del <span class="token operator">=</span> renderer<span class="token punctuation">.</span><span class="token function">onResize</span><span class="token punctuation">(</span><span class="token punctuation">(</span>w<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> h<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">newWdith: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>w<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, newHeight: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>h<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">del</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function T(V,E){const l=p("badge"),t=p("RouterLink");return r(),u("div",null,[n("h1",k,[v,s(" Renderer "),e(l,{text:"webgl"})]),m,o(` ### amount( )

挂载渲染器

::: warning 注意
如果已经挂载过，则 **不允许** 再次调用
:::

\`\`\`ts
function amount: (el: string | HTMLElement) => void
\`\`\`

- 参数
  
  - \`el:\` HTML元素的 id ，用于绘制三维场景的容器

- 返回值
  
  - 无

- 示例
  
\`\`\`ts
...省略获取meta实例的步骤...

const renderer = meta.renderer
renderer.amount("three-container");
\`\`\` `),h,o(` ### resize( )

重设渲染器宽高

\`\`\`ts
function resize: (w?: number, h?: number) => void
\`\`\`

- 参数
  
  - \`w:\` 渲染器宽度（若为空，则默认为容器宽度）

  - \`h:\` 渲染器高度（若为空，则默认为容器高度）

- 返回值
  
  - 无

- 示例
  
\`\`\`ts
...省略获取meta实例的步骤...

const renderer = meta.renderer
renderer.resize(500, 500);
\`\`\` `),b,n("ul",null,[n("li",null,[g,n("ul",null,[n("li",null,[f,n("ul",null,[n("li",null,[s("参考: "),e(t,{to:"/three/help/declare.html#renderfn"},{default:i(()=>[s("RenderFn")]),_:1})])])])])]),_,y]),w,n("ul",null,[n("li",null,[x,n("ul",null,[n("li",null,[R,n("ul",null,[n("li",null,[s("参考: "),e(t,{to:"/three/help/declare.html#resizefn"},{default:i(()=>[s("ResizeFn")]),_:1})])])])])]),z,C]),N])}const L=c(d,[["render",T],["__file","renderer.html.vue"]]);export{L as default};
