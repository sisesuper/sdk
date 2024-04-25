import{_ as c,r as l,o as i,c as u,a as n,b as s,d as a,w as e,e as o}from"./app.f18319b0.js";const r={},d=n("h1",{id:"component",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#component","aria-hidden":"true"},"#"),s(" Component")],-1),k=n("code",null,"Component",-1),m={class:"custom-container warning"},v=n("p",{class:"custom-container-title"},"提示",-1),h=n("p",null,[s("以下所有的 "),n("code",null,"<M>"),s(" = "),n("code",null,"<M extends DTModel>")],-1),b=o(`<h2 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h2><h3 id="iscomponent" tabindex="-1"><a class="header-anchor" href="#iscomponent" aria-hidden="true">#</a> isComponent</h3><div class="custom-container tip"><p class="custom-container-title">是否为组件的标识符</p><ul><li>类型: <code>boolean</code></li></ul></div><h3 id="id" tabindex="-1"><a class="header-anchor" href="#id" aria-hidden="true">#</a> id</h3><div class="custom-container tip"><p class="custom-container-title">组件id</p><ul><li>类型: <code>string</code></li></ul></div><h3 id="modelid" tabindex="-1"><a class="header-anchor" href="#modelid" aria-hidden="true">#</a> modelId</h3><div class="custom-container tip"><p class="custom-container-title">组件对应的模型id</p><ul><li>类型: <code>string</code></li></ul></div><h3 id="type" tabindex="-1"><a class="header-anchor" href="#type" aria-hidden="true">#</a> type</h3><div class="custom-container tip"><p class="custom-container-title">组件真实类型</p><ul><li><p>类型: <code>string</code></p></li><li><p>说明: 此类型为，在搭建模型时，赋予的物体真实类型，比如 <strong>AICamrea、Aircondition、Robot</strong></p></li></ul></div><h3 id="ext" tabindex="-1"><a class="header-anchor" href="#ext" aria-hidden="true">#</a> ext</h3><div class="custom-container tip"><p class="custom-container-title">组件扩展信息</p><ul><li><p>说明: 扩展信息包含</p><ul><li><p><code>tags: string[]</code> 标志符</p></li><li><p><code>type: string</code> 模型所属大类别，比如 <strong>AICamera、Aircondition、Robot 属于 iot 大类</strong></p></li><li><p><code>typeCode: string | number</code> 模型所属大类别的编码</p></li></ul></li></ul></div><h3 id="children" tabindex="-1"><a class="header-anchor" href="#children" aria-hidden="true">#</a> children</h3><div class="custom-container tip"><p class="custom-container-title">子组件数组</p><ul><li>类型: <code>Component</code></li></ul></div><h3 id="parent" tabindex="-1"><a class="header-anchor" href="#parent" aria-hidden="true">#</a> parent</h3><div class="custom-container tip"><p class="custom-container-title">父组件</p><ul><li>类型: <code>Component&lt;M&gt; | undefined</code></li></ul></div><h3 id="model" tabindex="-1"><a class="header-anchor" href="#model" aria-hidden="true">#</a> model</h3><div class="custom-container tip"><p class="custom-container-title">组件对应的模型</p><ul><li>类型: <code>M extends DTModel</code></li></ul></div><h2 id="方法" tabindex="-1"><a class="header-anchor" href="#方法" aria-hidden="true">#</a> 方法</h2><h3 id="search" tabindex="-1"><a class="header-anchor" href="#search" aria-hidden="true">#</a> search( )</h3><p>根据 <strong>类型</strong> 搜索组件</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">search</span><span class="token punctuation">(</span>type<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> shallow<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">)</span><span class="token operator">:</span> ComponentGroup<span class="token operator">&lt;</span><span class="token constant">M</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,21),g=n("p",null,"参数",-1),_=n("li",null,[n("p",null,[n("code",null,"type:"),s(" 组件真实类型")]),n("ul",null,[n("li",null,[s("参考: "),n("a",{href:"#type"},"Type")])])],-1),f=n("code",null,"shallow:",-1),y=n("ul",null,[n("li",null,"注意: 该参数只在 Unity 引擎中生效")],-1),x=n("p",null,"返回值",-1),w=n("p",null,[n("code",null,"Group<M>:"),s(" 组件组对象")],-1),C=n("li",null,[n("p",null,"示例")],-1),q=o(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token operator">...</span>省略获取meta实例的步骤<span class="token operator">...</span>

<span class="token keyword">const</span> rootComponent <span class="token operator">=</span> meta<span class="token punctuation">.</span>component<span class="token punctuation">;</span>
<span class="token keyword">const</span> component <span class="token operator">=</span> rootComponent<span class="token punctuation">.</span><span class="token function">search</span><span class="token punctuation">(</span><span class="token string">&quot;Type&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>component<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="filter" tabindex="-1"><a class="header-anchor" href="#filter" aria-hidden="true">#</a> filter( )</h3><p>自定义筛选子组件</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function-variable function">filter</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token function-variable function">callback</span><span class="token operator">:</span> <span class="token punctuation">(</span>component<span class="token operator">:</span> Component<span class="token operator">&lt;</span><span class="token constant">M</span><span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">boolean</span><span class="token punctuation">,</span> shallow<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> ComponentGroup<span class="token operator">&lt;</span><span class="token constant">M</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,4),M=n("p",null,"参数",-1),P=n("li",null,[n("p",null,[n("code",null,"callback:"),s(" 筛选规则回调函数")])],-1),T=n("code",null,"shallow:",-1),I=n("ul",null,[n("li",null,"注意: 该参数只在 Unity 引擎中生效")],-1),E=n("p",null,"返回值",-1),G=n("p",null,[n("code",null,"Group<M>:"),s(" 组件组对象")],-1),D=n("li",null,[n("p",null,"示例")],-1),A=o(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token operator">...</span>省略获取meta实例的步骤<span class="token operator">...</span>

<span class="token keyword">const</span> rootComponent <span class="token operator">=</span> meta<span class="token punctuation">.</span>component<span class="token punctuation">;</span>
<span class="token keyword">const</span> component <span class="token operator">=</span> rootComponent<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span>child<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>child<span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token string">&quot;Type&quot;</span><span class="token punctuation">)</span> <span class="token keyword">return</span> child<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>component<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="get" tabindex="-1"><a class="header-anchor" href="#get" aria-hidden="true">#</a> get( )</h3><p>根据 <strong>id</strong> 获取组件</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function-variable function">get</span><span class="token operator">:</span> <span class="token punctuation">(</span>id<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> Component<span class="token operator">&lt;</span><span class="token constant">M</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><p>参数</p><ul><li><code>id:</code> 模型 id 或 业务 id（业务 id: IOT 设备 id ，数字空间 id 等）</li></ul></li><li><p>返回值</p><ul><li><code>component&lt;M&gt;:</code> 组件实例</li></ul></li><li><p>示例</p></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token operator">...</span>省略获取meta实例的步骤<span class="token operator">...</span>

<span class="token keyword">const</span> rootComponent <span class="token operator">=</span> meta<span class="token punctuation">.</span>component<span class="token punctuation">;</span>
<span class="token keyword">const</span> component <span class="token operator">=</span> rootComponent<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;ModelId&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>component<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="add" tabindex="-1"><a class="header-anchor" href="#add" aria-hidden="true">#</a> add( )</h3><p>添加子组件</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function-variable function">add</span><span class="token operator">:</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>child<span class="token operator">:</span> Component<span class="token operator">&lt;</span><span class="token constant">M</span><span class="token operator">&gt;</span> <span class="token operator">|</span> <span class="token builtin">string</span> <span class="token operator">|</span> Partial<span class="token operator">&lt;</span>Options<span class="token operator">&gt;</span><span class="token punctuation">,</span> attach<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>Component<span class="token operator">&lt;</span><span class="token constant">M</span><span class="token operator">&gt;&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,9),N=n("p",null,"参数",-1),O=n("p",null,[n("code",null,"child:"),s(" 子组件")],-1),R=n("code",null,"attach:",-1),V=n("li",null,[n("p",null,"返回值"),n("ul",null,[n("li",null,[n("code",null,"Promise<Component<M>>:"),s(" 组件实例")])])],-1),B=n("li",null,[n("p",null,"示例")],-1),F=o(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token operator">...</span>省略获取meta实例的步骤<span class="token operator">...</span>

<span class="token keyword">const</span> rootComponent <span class="token operator">=</span> meta<span class="token punctuation">.</span>component<span class="token punctuation">;</span>
meta<span class="token punctuation">.</span><span class="token function">createComponent</span><span class="token punctuation">(</span><span class="token string">&quot;/model/model_2.glb&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>component<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  rootComponent<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>component<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),L={id:"replace",tabindex:"-1"},U=n("a",{class:"header-anchor",href:"#replace","aria-hidden":"true"},"#",-1),S=o(`<p>替换组件</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function-variable function">replace</span><span class="token operator">:</span> <span class="token punctuation">(</span>target<span class="token operator">:</span> Component<span class="token operator">&lt;</span><span class="token constant">M</span><span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,2),j=n("p",null,"参数",-1),z=n("p",null,[n("code",null,"target:"),s(" 替换后的组件")],-1),H=n("li",null,[n("p",null,"返回值"),n("ul",null,[n("li",null,[n("code",null,"void")])])],-1),J=n("li",null,[n("p",null,"示例")],-1),K=o(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token operator">...</span>省略获取meta实例的步骤<span class="token operator">...</span>

<span class="token keyword">const</span> component <span class="token operator">=</span> meta<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;ModelId&quot;</span><span class="token punctuation">)</span><span class="token operator">!</span><span class="token punctuation">;</span>
meta<span class="token punctuation">.</span><span class="token function">createComponent</span><span class="token punctuation">(</span><span class="token string">&quot;/model/model_2.glb&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  target<span class="token punctuation">.</span>model<span class="token punctuation">.</span>position<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  component<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="remove" tabindex="-1"><a class="header-anchor" href="#remove" aria-hidden="true">#</a> remove( )</h3><p>删除指定的组件</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function-variable function">remove</span><span class="token operator">:</span> <span class="token punctuation">(</span>child<span class="token operator">:</span> Component<span class="token operator">&lt;</span><span class="token constant">M</span><span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token keyword">void</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><p>参数</p><ul><li><code>child:</code> 组件实例</li></ul></li><li><p>返回值</p><ul><li><code>Promise&lt;void&gt;</code></li></ul></li><li><p>示例</p></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token operator">...</span>省略获取meta实例的步骤<span class="token operator">...</span>

<span class="token keyword">const</span> rootComponent <span class="token operator">=</span> meta<span class="token punctuation">.</span>component<span class="token punctuation">;</span>
<span class="token keyword">const</span> component <span class="token operator">=</span> meta<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;ModelId&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
rootComponent<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>component<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="removefromparent" tabindex="-1"><a class="header-anchor" href="#removefromparent" aria-hidden="true">#</a> removeFromParent( )</h3><p>将组件包括三维模型从其父组件中移除，不销毁</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function-variable function">removeFromParent</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token keyword">void</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><p>参数</p><ul><li>无</li></ul></li><li><p>返回值</p><ul><li><code>Promise&lt;void&gt;</code></li></ul></li><li><p>示例</p></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token operator">...</span>省略获取meta实例的步骤<span class="token operator">...</span>

<span class="token keyword">const</span> component <span class="token operator">=</span> meta<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;ModelId&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
component<span class="token punctuation">.</span><span class="token function">removeFromParent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="dispose" tabindex="-1"><a class="header-anchor" href="#dispose" aria-hidden="true">#</a> dispose( )</h3><p>销毁组件</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function-variable function">dispose</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token keyword">void</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><p>参数</p><ul><li>无</li></ul></li><li><p>返回值</p><ul><li><code>Promise&lt;void&gt;</code></li></ul></li><li><p>示例</p></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token operator">...</span>省略获取meta实例的步骤<span class="token operator">...</span>

<span class="token keyword">const</span> component <span class="token operator">=</span> meta<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;ModelId&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
component<span class="token punctuation">.</span><span class="token function">dispose</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="clear" tabindex="-1"><a class="header-anchor" href="#clear" aria-hidden="true">#</a> clear( )</h3><p>清空子组件</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function-variable function">clear</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><p>参数</p><ul><li>无</li></ul></li><li><p>返回值</p><ul><li><code>void</code></li></ul></li><li><p>示例</p></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token operator">...</span>省略获取meta实例的步骤<span class="token operator">...</span>

<span class="token keyword">const</span> rootComponent <span class="token operator">=</span> meta<span class="token punctuation">.</span>component<span class="token punctuation">;</span>
rootComponent<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="emit" tabindex="-1"><a class="header-anchor" href="#emit" aria-hidden="true">#</a> emit( )</h3><p>手动触发事件</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function-variable function">emit</span><span class="token operator">:</span> <span class="token punctuation">(</span>event<span class="token operator">:</span> DTEvent<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,24),Q=n("p",null,"参数",-1),W=n("p",null,[n("code",null,"evnt:"),s(" 事件对象")],-1),X=n("li",null,[n("p",null,"返回值"),n("ul",null,[n("li",null,"无")])],-1),Y=n("li",null,[n("p",null,"示例")],-1),Z=o(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token operator">...</span>省略获取meta实例的步骤<span class="token operator">...</span>

<span class="token keyword">const</span> rootComponent <span class="token operator">=</span> meta<span class="token punctuation">.</span>component<span class="token punctuation">;</span>
rootComponent<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;show&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>e<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
rootComponent<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Event</span><span class="token punctuation">(</span><span class="token string">&quot;show&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;eventTest&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function $(nn,sn){const t=l("RouterLink"),p=l("badge");return i(),u("div",null,[d,n("p",null,[s("继承自 "),a(t,{to:"/three/api/eventemitter.html"},{default:e(()=>[s("EventEmitter")]),_:1}),s(" 对象， "),k,s(" 类包括的操作有对子组件的查询、过滤、添加、删除等。")]),n("div",m,[v,h,n("ul",null,[n("li",null,[s("参考: "),a(t,{to:"/three/help/declare.html#dtmodel"},{default:e(()=>[s("DTModel")]),_:1})])])]),b,n("ul",null,[n("li",null,[g,n("ul",null,[_,n("li",null,[n("p",null,[f,s(),a(p,{type:"danger",text:"v4.1.0"}),s(" 浅层搜索，默认为 true ，只在当前空间下搜索； 若传入 false ，则会在所有空间下搜索")]),y])])]),n("li",null,[x,n("ul",null,[n("li",null,[w,n("ul",null,[n("li",null,[s("参考: "),a(t,{to:"/three/api/componentgroup.html"},{default:e(()=>[s("ComponentGroup")]),_:1})])])])])]),C]),q,n("ul",null,[n("li",null,[M,n("ul",null,[P,n("li",null,[n("p",null,[T,s(),a(p,{type:"danger",text:"v4.1.0"}),s(" 浅层筛选，默认为 true ，只在当前空间下筛选； 若传入 false ，则会在所有空间下筛选")]),I])])]),n("li",null,[E,n("ul",null,[n("li",null,[G,n("ul",null,[n("li",null,[s("参考: "),a(t,{to:"/three/api/componentgroup.html"},{default:e(()=>[s("ComponentGroup")]),_:1})])])])])]),D]),A,n("ul",null,[n("li",null,[N,n("ul",null,[n("li",null,[O,n("ul",null,[n("li",null,[s("参考: "),a(t,{to:"/three/help/declare.html#options"},{default:e(()=>[s("Options")]),_:1})])])]),n("li",null,[n("p",null,[R,s(),a(p,{type:"danger",text:"v4.1.6"}),s(" 是否保持子组件模型的世界变换")])])])]),V,B]),F,n("h3",L,[U,s(" replace( ) "),a(p,{type:"danger",text:"v4.1.6"})]),S,n("ul",null,[n("li",null,[j,n("ul",null,[n("li",null,[z,n("ul",null,[n("li",null,[s("参考: "),a(t,{to:"/three/help/declare.html#options"},{default:e(()=>[s("Options")]),_:1})])])])])]),H,J]),K,n("ul",null,[n("li",null,[Q,n("ul",null,[n("li",null,[W,n("ul",null,[n("li",null,[s("参考: "),a(t,{to:"/three/help/declare.html#dtevent"},{default:e(()=>[s("DTEvent")]),_:1})])])])])]),X,Y]),Z])}const tn=c(r,[["render",$],["__file","component.html.vue"]]);export{tn as default};