import{_ as i,r as o,o as u,c as d,a as n,b as s,d as a,w as r,f as t,e}from"./app.f18319b0.js";const k={},m=n("h1",{id:"model",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#model","aria-hidden":"true"},"#"),s(" Model")],-1),h=n("code",null,"Model",-1),v=n("strong",null,"颜色设置",-1),b=n("strong",null,"旋转",-1),g=n("strong",null,"缩放",-1),_=n("strong",null,"透明度",-1),f=n("strong",null,"位置",-1),y=n("strong",null,"隐藏",-1),x=n("strong",null,"显示",-1),w=n("h2",{id:"属性",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#属性","aria-hidden":"true"},"#"),s(" 属性")],-1),q=n("h3",{id:"target",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#target","aria-hidden":"true"},"#"),s(" target")],-1),M={class:"custom-container tip"},E=n("p",{class:"custom-container-title"},"目标模型",-1),P={href:"https://threejs.org/docs/index.html?q=Obje#api/zh/core/Object3D",target:"_blank",rel:"noopener noreferrer"},I=n("h3",{id:"modelid",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#modelid","aria-hidden":"true"},"#"),s(" modelId")],-1),j=n("div",{class:"custom-container tip"},[n("p",{class:"custom-container-title"},"模型id"),n("ul",null,[n("li",null,[s("类型: "),n("code",null,"string")])])],-1),R=e('<h3 id="color" tabindex="-1"><a class="header-anchor" href="#color" aria-hidden="true">#</a> color</h3><div class="custom-container tip"><p class="custom-container-title">模型颜色</p><ul><li><p>类型: <code>string</code></p></li><li><p>说明: 设置颜色的格式为: <code>&quot;yellow 0.5&quot;</code> ，以空格为分隔符，前面是颜色，后面是透明度；支持threejs color的所有格式；若传入空字符串，则还原模型颜色。</p></li></ul></div><h3 id="opacity" tabindex="-1"><a class="header-anchor" href="#opacity" aria-hidden="true">#</a> opacity</h3><div class="custom-container tip"><p class="custom-container-title">模型透明度</p><ul><li>类型: <code>number</code></li></ul></div><h3 id="disabled" tabindex="-1"><a class="header-anchor" href="#disabled" aria-hidden="true">#</a> disabled</h3><div class="custom-container tip"><p class="custom-container-title">模型是否禁用，禁用后无法设置为selected</p><ul><li>类型: <code>boolean</code></li></ul></div><h3 id="selected" tabindex="-1"><a class="header-anchor" href="#selected" aria-hidden="true">#</a> selected</h3><div class="custom-container tip"><p class="custom-container-title">模型是否选中</p><ul><li>类型: <code>boolean</code></li></ul></div><h2 id="方法" tabindex="-1"><a class="header-anchor" href="#方法" aria-hidden="true">#</a> 方法</h2>',9),T=e(`<h3 id="add" tabindex="-1"><a class="header-anchor" href="#add" aria-hidden="true">#</a> add( )</h3><p>添加模型</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function-variable function">add</span><span class="token operator">:</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>model<span class="token operator">:</span> WebglModel<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token keyword">void</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><p>参数</p><ul><li><code>model:</code> 模型对象</li></ul></li><li><p>返回值</p><ul><li><code>Promise&lt;void&gt;</code></li></ul></li><li><p>示例</p></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> <span class="token constant">THREE</span> <span class="token keyword">from</span> <span class="token string">&quot;three&quot;</span><span class="token punctuation">;</span>
<span class="token operator">...</span>省略获取meta实例的步骤<span class="token operator">...</span>

<span class="token keyword">const</span> component <span class="token operator">=</span> meta<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;ModelId&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> model <span class="token operator">=</span> component<span class="token punctuation">.</span>model<span class="token punctuation">;</span>
<span class="token keyword">const</span> geometry <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token constant">THREE</span></span><span class="token punctuation">.</span><span class="token function">BoxGeometry</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> material <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token constant">THREE</span></span><span class="token punctuation">.</span><span class="token function">MeshBasicMaterial</span><span class="token punctuation">(</span><span class="token punctuation">{</span> color<span class="token operator">:</span> <span class="token number">0x00ff00</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> cube <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token constant">THREE</span></span><span class="token punctuation">.</span><span class="token function">Mesh</span><span class="token punctuation">(</span>geometry<span class="token punctuation">,</span> material<span class="token punctuation">)</span><span class="token punctuation">;</span>
model<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">{</span> target<span class="token operator">:</span> cube <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),B={id:"attach",tabindex:"-1"},C=n("a",{class:"header-anchor",href:"#attach","aria-hidden":"true"},"#",-1),N=e(`<p>添加模型</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function-variable function">attach</span><span class="token operator">:</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>model<span class="token operator">:</span> WebglModel<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token keyword">void</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><p>参数</p><ul><li><code>model:</code> 模型对象</li></ul></li><li><p>返回值</p><ul><li><code>Promise&lt;void&gt;</code></li></ul></li><li><p>示例</p></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token operator">...</span>省略获取meta实例的步骤<span class="token operator">...</span>

<span class="token keyword">const</span> component <span class="token operator">=</span> meta<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;ModelId&quot;</span><span class="token punctuation">)</span><span class="token operator">!</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> model <span class="token operator">=</span> component<span class="token punctuation">.</span>model<span class="token punctuation">;</span>
meta<span class="token punctuation">.</span><span class="token function">createComponent</span><span class="token punctuation">(</span><span class="token string">&quot;/model_2.glb&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>target<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">//设置target对应的坐标</span>
  target<span class="token punctuation">.</span>model<span class="token punctuation">.</span>position<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
  model<span class="token punctuation">.</span><span class="token function">attach</span><span class="token punctuation">(</span>target<span class="token punctuation">.</span>model<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),V={id:"replace",tabindex:"-1"},H=n("a",{class:"header-anchor",href:"#replace","aria-hidden":"true"},"#",-1),L=e(`<p>替换模型</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function-variable function">replace</span><span class="token operator">:</span> <span class="token punctuation">(</span>model<span class="token operator">:</span> WebglModel<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><p>参数</p><ul><li><code>model:</code> 模型对象</li></ul></li><li><p>返回值</p><ul><li><code>void</code></li></ul></li><li><p>示例</p></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token operator">...</span>省略获取meta实例的步骤<span class="token operator">...</span>

<span class="token keyword">const</span> component <span class="token operator">=</span> meta<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;ModelId&quot;</span><span class="token punctuation">)</span><span class="token operator">!</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> model <span class="token operator">=</span> component<span class="token punctuation">.</span>model<span class="token punctuation">;</span>
meta<span class="token punctuation">.</span><span class="token function">createComponent</span><span class="token punctuation">(</span><span class="token string">&quot;/model_2.glb&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>target<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">//设置target对应的坐标</span>
  target<span class="token punctuation">.</span>model<span class="token punctuation">.</span>position<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
  model<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>target<span class="token punctuation">.</span>model<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function W(D,F){const c=o("RouterLink"),l=o("ExternalLinkIcon"),p=o("badge");return u(),d("div",null,[m,n("p",null,[h,s(" 继承自 "),a(c,{to:"/three/help/declare.html#dtmodel"},{default:r(()=>[s("DTModel")]),_:1}),s(" ，表示三维场景中的三维模型，并可对其进行管理控制，这些操作包括："),v,s(" 、"),b,s(" 、"),g,s(" 、"),_,s(" 、"),f,s(" 、"),y,s(" 、"),x,s(" 等。")]),w,q,n("div",M,[E,n("ul",null,[n("li",null,[s("类型: "),n("a",P,[s("Object3D"),a(l)])])])]),I,j,t(` ### rotation

::: tip 模型的旋转角度

- 类型: [Euler](https://threejs.org/docs/index.html?q=eul#api/zh/math/Euler)
::: `),R,t(` ### dispose( )

销毁模型

\`\`\`ts
function dispose: async () => Promise<void>
\`\`\`

- 参数

  - 无

- 返回值

  - \`Promise<void>\`

- 示例

\`\`\`ts
...省略获取meta实例的步骤...

const component = meta.get("ModelId");
const model = component.model;
model.dispose();
\`\`\` `),t(` ### removeFromParent( )

从父模型中移除

\`\`\`ts
function removeFromParent: async () => Promise<void>
\`\`\`

- 参数

  - 无

- 返回值

  - \`Promise<void>\`

- 示例

\`\`\`ts
...省略获取meta实例的步骤...

const component = meta.get("ModelId");
const model = component.model;
model.removeFromParent();
\`\`\` `),T,n("h3",B,[C,s(" attach( ) "),a(p,{type:"danger",text:"v4.1.6"})]),N,t(` ### remove( )

移除模型，不销毁

\`\`\`ts
function remove: async (model: WebglModel) => Promise<void>
\`\`\`

- 参数

  - \`model:\` 模型对象

- 返回值

  - \`Promise<void>\`

- 示例

\`\`\`ts
...省略获取meta实例的步骤...

const component = meta.get("ModelId");
const model = component.model;
model.remove(model);
\`\`\` `),n("h3",V,[H,s(" replace( ) "),a(p,{type:"danger",text:"v4.1.6"})]),L])}const z=i(k,[["render",W],["__file","model.html.vue"]]);export{z as default};
