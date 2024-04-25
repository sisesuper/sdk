import{_ as i,r as p,o as l,c as u,a as n,b as s,d as a,w as r,f as o,e}from"./app.f18319b0.js";const d={},k=e(`<h1 id="自定义动画" tabindex="-1"><a class="header-anchor" href="#自定义动画" aria-hidden="true">#</a> 自定义动画</h1><h4 id="step1-获取自定义动画的方法" tabindex="-1"><a class="header-anchor" href="#step1-获取自定义动画的方法" aria-hidden="true">#</a> step1 - 获取自定义动画的方法</h4><ul><li><code>defineAnimation</code> 和一些常用动画的类或方法的集合 <code>animation</code></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> animation<span class="token punctuation">,</span> defineAnimation <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@tslfe/dt-engine&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="step2-定义动画" tabindex="-1"><a class="header-anchor" href="#step2-定义动画" aria-hidden="true">#</a> step2 - 定义动画</h4>`,5),m=n("code",null,"defineAnimation",-1),v={href:"/three/help/declare.html#animationoptions",target:"_blank",rel:"noopener noreferrer"},b=e(`<blockquote><p>以下为自定义一个灯的开关动画示例。</p></blockquote><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> customAnimation <span class="token operator">=</span> <span class="token function">defineAnimation</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  match<span class="token operator">:</span> <span class="token string">&quot;p_switch&quot;</span><span class="token punctuation">,</span>
  name<span class="token operator">:</span> <span class="token string">&quot;light&quot;</span><span class="token punctuation">,</span>
  version<span class="token operator">:</span> <span class="token string">&quot;1.0.0&quot;</span><span class="token punctuation">,</span>
  animations<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">switch_status_value</span><span class="token punctuation">(</span>val<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> model<span class="token operator">:</span> Model<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> shine<span class="token operator">:</span> Object3D<span class="token punctuation">;</span>
      <span class="token keyword">let</span> light<span class="token operator">:</span> Object3D<span class="token punctuation">;</span>
      model<span class="token punctuation">.</span>model<span class="token punctuation">.</span><span class="token function">traverse</span><span class="token punctuation">(</span><span class="token punctuation">(</span>node<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>name <span class="token operator">===</span> <span class="token string">&quot;light&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          light <span class="token operator">=</span> node<span class="token punctuation">;</span>
          <span class="token punctuation">(</span>light<span class="token punctuation">.</span>children<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token keyword">as</span> PointLight<span class="token punctuation">)</span><span class="token punctuation">.</span>color <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Color</span><span class="token punctuation">(</span><span class="token string">&quot;#fff&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>material<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>material<span class="token punctuation">.</span>name <span class="token operator">===</span> <span class="token string">&quot;shine&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            shine <span class="token operator">=</span> node<span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">let</span> <span class="token function-variable function">start</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">switch</span> <span class="token punctuation">(</span><span class="token function">Number</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">case</span> <span class="token number">0</span><span class="token operator">:</span>
            <span class="token punctuation">(</span>shine <span class="token keyword">as</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token punctuation">.</span>material<span class="token punctuation">.</span>emissiveIntensity <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
            light<span class="token punctuation">.</span>visible <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
          <span class="token keyword">case</span> <span class="token number">1</span><span class="token operator">:</span>
            <span class="token punctuation">(</span>shine <span class="token keyword">as</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token punctuation">.</span>material<span class="token punctuation">.</span>emissiveIntensity <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
            light<span class="token punctuation">.</span>visible <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> coreAnimation<span class="token punctuation">.</span><span class="token function">fromSimilarAnimation</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="step3-挂载动画" tabindex="-1"><a class="header-anchor" href="#step3-挂载动画" aria-hidden="true">#</a> step3 - 挂载动画</h4><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>meta<span class="token punctuation">.</span><span class="token function">useExtension</span><span class="token punctuation">(</span>customAnimation<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,4),h=n("h4",{id:"step4-触发动画",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#step4-触发动画","aria-hidden":"true"},"#"),s(" step4 - 触发动画")],-1),f={href:"/three/api/component.html",target:"_blank",rel:"noopener noreferrer"},_={href:"/three/api/component.html#playanimation",target:"_blank",rel:"noopener noreferrer"},g=e(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 开灯， 只是操作模型动画， 并不修改数据</span>
lightComponent<span class="token punctuation">.</span><span class="token function">playAnimation</span><span class="token punctuation">(</span><span class="token string">&quot;switch_status_value&quot;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function y(w,q){const t=p("ExternalLinkIcon"),c=p("RouterLink");return l(),u("div",null,[k,n("ul",null,[n("li",null,[s("使用 "),m,s(" 方法，传入 "),n("a",v,[s("AnimationOptions"),a(t)])])]),b,n("blockquote",null,[n("p",null,[s("参考: "),a(c,{to:"/three/api/meta.html#useextension"},{default:r(()=>[s("meta.useExtension( )")]),_:1})])]),h,o(' - 通常情况下我们操作动画是直接调用动画对应的方法， 然后会下发指令，改变设备状态， 后端把设备状态变更相应的信息推送给我们，我们在 TacOS 中通过监听 os 消息推送, 会根据 step2 中的 `animations` 传入参数的对象，变更了的属性状态，执行相应的动画。\n\n```ts\n// 将46楼的灯打开, 修改了后端的数据\nmeta.serch("/yingli/46/devices/LightSwitch_BAC").onOff(1);\n``` '),n("ul",null,[n("li",null,[s("手动触发动画，可以在 "),n("a",f,[s("Component"),a(t)]),s(" 上调用 "),n("a",_,[s("playAnimation"),a(t)]),s(" 方法")])]),g,o(` ### dt-animation 动画包中的语义化 api

::: tip 灯
- open()  开灯

- close() 关灯
:::

::: tip 门
- open()  开门

- close() 关门
:::

::: tip 窗
- open()  开窗

- close() 关窗

- paused()  暂停
:::

::: tip 窗帘
- open()  开窗帘

- close() 关窗帘

- paused()  暂停
:::

::: tip 空调
- open()  开

- close() 关

- setMode() 设置模式

\`\`\`typescript
// 设置冷、暖、除湿、送风 模式
setMode: (type: "cold" | "hot" | "dehumid" | "blow") => void
\`\`\`

  - 参数:
    - \`type\`: 模式
::: `)])}const A=i(d,[["render",y],["__file","animation.html.vue"]]);export{A as default};
