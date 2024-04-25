import{_ as i,r as o,o as l,c as u,a as s,b as n,d as a,w as c,e}from"./app.f18319b0.js";const r={},d=e(`<h1 id="快速上手" tabindex="-1"><a class="header-anchor" href="#快速上手" aria-hidden="true">#</a> 快速上手</h1><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><p>在用 SDK 构建大型应用时，推荐使用 <code>npm</code> 或 <code>yarn</code>。它们能很好的和现代化的模块打包工具配合使用。</p><h3 id="npm" tabindex="-1"><a class="header-anchor" href="#npm" aria-hidden="true">#</a> npm</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> @tslfe/dt-engine <span class="token parameter variable">--save</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="yarn" tabindex="-1"><a class="header-anchor" href="#yarn" aria-hidden="true">#</a> yarn</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> @tslfe/dt-engine <span class="token parameter variable">-S</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="导入" tabindex="-1"><a class="header-anchor" href="#导入" aria-hidden="true">#</a> 导入</h2><p>SDK 支持多种模块系统，如果项目中使用了 <code>webpack</code> 或 <code>vite</code> 现代化的打包工具，推荐使用 <code>import</code> 的方式进行包的导入。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> Engine <span class="token keyword">from</span> <span class="token string">&#39;@tslfe/dt-engine&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><p>可选择使用 <code>WebGL</code> 或者 <code>Unity</code> 进行渲染</p><h3 id="webgl" tabindex="-1"><a class="header-anchor" href="#webgl" aria-hidden="true">#</a> WebGL</h3><p>使用 <code>WebGL</code> 渲染，有两种方式：</p><ul><li><p>方式一：与 TacOS 数字空间建立连接</p></li><li><p>方式二：独立使用 SDK</p></li></ul><h4 id="方式一-与数字空间建立连接" tabindex="-1"><a class="header-anchor" href="#方式一-与数字空间建立连接" aria-hidden="true">#</a> 方式一：与数字空间建立连接</h4><ul><li><strong>step1: 连接</strong></li></ul>`,17),k=s("code",null,"dt-engine",-1),m=s("code",null,"connect",-1),v=s("code",null,"connect",-1),b={href:"/three/api/global.html#connect",target:"_blank",rel:"noopener noreferrer"},h=e(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> Engine <span class="token keyword">from</span> <span class="token string">&#39;@tslfe/dt-engine&#39;</span><span class="token punctuation">;</span>

Engine<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span>
  <span class="token string">&#39;&lt;HTMLElement元素&gt;&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token comment">// 连接参数</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>meta<span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token comment">// 三维场景实例化对象</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>在下列的示例代码中，默认你已经与 TacOS 建立了连接，并拿到了 <code>meta</code> 实例对象。</p></blockquote><ul><li><strong>step2: 渲染</strong></li></ul><p>指定三维空间场景渲染的容器后，通过 <code>meta</code> 实例提供的 <code>enter</code> 方法，可直接进入到 TacOS 数字空间已经搭建好的三维空间场景中。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>meta<span class="token punctuation">.</span><span class="token function">enter</span><span class="token punctuation">(</span><span class="token string">&#39;/yingli/46&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="方式二-独立使用sdk" tabindex="-1"><a class="header-anchor" href="#方式二-独立使用sdk" aria-hidden="true">#</a> 方式二：独立使用SDK</h4>`,6),g={href:"/three/api/global.html#webgl",target:"_blank",rel:"noopener noreferrer"},f=e(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> Engine <span class="token keyword">from</span> <span class="token string">&#39;@tslfe/dt-engine&#39;</span><span class="token punctuation">;</span>

Engine<span class="token punctuation">.</span><span class="token function">webgl</span><span class="token punctuation">(</span>
  <span class="token string">&quot;&lt;htmlelement id&gt;&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 三维渲染的HTMLElement容器 </span>
  <span class="token string">&quot;&lt;module url&gt;&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 模型url地址 </span>
  <span class="token boolean">false</span> <span class="token comment">// 是否存在映射文件（默认存在）</span>
<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>meta<span class="token operator">=&gt;</span><span class="token punctuation">{</span>
  <span class="token comment">// 三维场景实例化对象</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="unity" tabindex="-1"><a class="header-anchor" href="#unity" aria-hidden="true">#</a> Unity</h3><p><code>Unity</code> 是独立于TacOS数字空间的，无需建立连接。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> merge <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;lodash-es&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Meta <span class="token keyword">from</span> <span class="token string">&quot;@tslfe/dt-engine/src/core/meta&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> DTEngine <span class="token keyword">from</span> <span class="token string">&quot;@tslfe/dt-engine&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> app<span class="token operator">:</span> Meta <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

<span class="token comment">// 首先将引擎设置为 &quot;unity&quot;</span>
DTEngine<span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span><span class="token punctuation">(</span>conf<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">merge</span><span class="token punctuation">(</span>conf<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    engine<span class="token operator">:</span> <span class="token string">&quot;unity&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 然后通过 DTEngine 拿到应用实例</span>
<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">initUnityDtEngine</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  app <span class="token operator">=</span> <span class="token keyword">await</span> DTEngine<span class="token punctuation">.</span><span class="token function">unity</span><span class="token punctuation">(</span><span class="token string">&quot;device-container&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    url<span class="token operator">:</span> <span class="token string">&quot;ws://YOUR_UNITY_ENGINE_WS_PATH&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">initUnityDtEngine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="控制" tabindex="-1"><a class="header-anchor" href="#控制" aria-hidden="true">#</a> 控制</h2><p>完成三维空间场景渲染后，可通过<code>meta</code>实例提供的相关API，完成对三维场景的自主操作，或开发各类业务系统的自定义逻辑。</p><h3 id="模型" tabindex="-1"><a class="header-anchor" href="#模型" aria-hidden="true">#</a> 模型</h3><p>对三维模型可进行各种常规操作，包括：旋转、位置设置、隐藏、显示等</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// eg: 通过灯的设备ID获取三维场景中对应的灯的模型</span>
<span class="token keyword">let</span> light <span class="token operator">=</span> meta<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;lightId&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>model<span class="token punctuation">;</span>

<span class="token comment">// 旋转</span>
light<span class="token punctuation">.</span>rotation<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
<span class="token comment">// 位置</span>
light<span class="token punctuation">.</span>position<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
<span class="token comment">// 缩放</span>
light<span class="token punctuation">.</span>scale<span class="token punctuation">.</span><span class="token function">setScalar</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
<span class="token comment">// 隐藏</span>
light<span class="token punctuation">.</span>visible <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token comment">// 显示</span>
light<span class="token punctuation">.</span>visible <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token comment">// 线框模式</span>
light<span class="token punctuation">.</span>outline <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token comment">// 取消线框模式</span>
light<span class="token punctuation">.</span>outline <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token comment">// ...其它更多等你发现</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="相机" tabindex="-1"><a class="header-anchor" href="#相机" aria-hidden="true">#</a> 相机</h3><p>表示当前场景查看的视野范围</p><blockquote><p>可以通过以下方式改变坐标、缩放和朝向，使过渡动画沿着曲线飞行。动画无缝地结合了缩放和平移，以帮助用户即使在飞跃很远的距离后也能保持他们的坐标。</p></blockquote><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 跳转到一个三维坐标</span>
meta<span class="token punctuation">.</span>camera<span class="token punctuation">.</span><span class="token function">flyToPosition</span><span class="token punctuation">(</span>
  <span class="token keyword">new</span> <span class="token class-name"><span class="token constant">THREE</span></span><span class="token punctuation">.</span><span class="token function">Vector3</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// 相机看向位置</span>
  <span class="token keyword">new</span> <span class="token class-name"><span class="token constant">THREE</span></span><span class="token punctuation">.</span><span class="token function">Vector3</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span><span class="token number">100</span><span class="token punctuation">,</span><span class="token number">100</span><span class="token punctuation">)</span> <span class="token comment">// 相机移动终点</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 跳转到一个模型</span>
<span class="token keyword">let</span> component1 <span class="token operator">=</span> meta<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;modelId&quot;</span><span class="token punctuation">)</span>
meta<span class="token punctuation">.</span>camera<span class="token punctuation">.</span><span class="token function">flyTo</span><span class="token punctuation">(</span>component1<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),y={href:"/three/api/camera.html#flyto",target:"_blank",rel:"noopener noreferrer"},_={href:"https://threejs.org/docs/index.html#api/zh/math/Vector3",target:"_blank",rel:"noopener noreferrer"},w=e(`<h3 id="图层" tabindex="-1"><a class="header-anchor" href="#图层" aria-hidden="true">#</a> 图层</h3><p>通过图层可以对模型的标签进行批量 <strong>显示</strong> / <strong>隐藏</strong></p><ul><li>示例:</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 创建图层</span>
<span class="token keyword">const</span> layer <span class="token operator">=</span> meta<span class="token punctuation">.</span><span class="token function">createLayer</span><span class="token punctuation">(</span><span class="token punctuation">{</span>type<span class="token operator">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 显示标签</span>
layer<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span>component<span class="token punctuation">)</span>

<span class="token comment">// 隐藏标签</span>
layer<span class="token punctuation">.</span><span class="token function">hide</span><span class="token punctuation">(</span>component<span class="token punctuation">)</span>

<span class="token comment">// 清空所有标签</span>
layer<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),x={href:"/three/api/layer.html",target:"_blank",rel:"noopener noreferrer"},q=e(`<h3 id="插件" tabindex="-1"><a class="header-anchor" href="#插件" aria-hidden="true">#</a> 插件</h3><p>可以为场景添加一些特效或是天气动画,如常见的：热力图、流光线、天空、雨、雪</p><ul><li>示例: 热力图</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 挂载HeatMap插件</span>
<span class="token keyword">const</span> heatMapPlugin <span class="token operator">=</span> meta<span class="token punctuation">.</span><span class="token function">useExtension</span><span class="token punctuation">(</span><span class="token function">HeatMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// 创建热力图</span>
<span class="token keyword">const</span> heatMap <span class="token operator">=</span> heatMapPlugin<span class="token punctuation">.</span><span class="token function">createHeatMap</span><span class="token punctuation">(</span>
    <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            position<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            value<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            position<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            value<span class="token operator">:</span> <span class="token number">15</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> maxValue<span class="token operator">:</span> <span class="token number">20</span> <span class="token punctuation">}</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),E=e(`<ul><li>示例: 雪</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 挂载Snowing插件</span>
<span class="token keyword">const</span> snowPlugin <span class="token operator">=</span> meta<span class="token punctuation">.</span><span class="token function">useExtension</span><span class="token punctuation">(</span><span class="token function">Snowing</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// 执行下雪</span>
snowPlugin<span class="token punctuation">.</span><span class="token function">snow</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function T(S,D){const t=o("ExternalLinkIcon"),p=o("RouterLink");return l(),u("div",null,[d,s("p",null,[n("在使用 SDK 进行三维场景开发时，可以先与 TacOS 数字空间建立连接，使用 "),k,n(" 全局对象上的"),m,n("方法可以很容易完成这件事情，"),v,n(" 的更多详情请点击 "),s("a",b,[n("connect"),a(t)]),n(" 查看。")]),h,s("blockquote",null,[s("p",null,[n("独立使用 SDK 的功能会有所减弱，点击"),s("a",g,[n("WebGL"),a(t)]),n("查看")])]),f,s("blockquote",null,[s("p",null,[n("参考: "),s("a",y,[n("camera.flyTo"),a(t)]),n("; "),s("a",_,[n("Vector3"),a(t)])])]),w,s("blockquote",null,[s("p",null,[n("参考: "),s("a",x,[n("layer"),a(t)])])]),q,s("blockquote",null,[s("p",null,[n("参考: "),a(p,{to:"/three/plugin/webgl/heatmap.html"},{default:c(()=>[n("插件-热力图")]),_:1})])]),E,s("blockquote",null,[s("p",null,[n("参考: "),a(p,{to:"/three/plugin/webgl/snowing.html"},{default:c(()=>[n("插件-雪")]),_:1})])])])}const M=i(r,[["render",T],["__file","quick-start.html.vue"]]);export{M as default};