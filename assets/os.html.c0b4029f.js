import{_ as i,r as p,o as c,c as u,a as n,b as s,d as a,w as e,e as l}from"./app.f18319b0.js";const r={},d=n("h1",{id:"os",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#os","aria-hidden":"true"},"#"),s(" os")],-1),k=l(`<ul><li><p>插件名称</p><p><strong>os-animation</strong></p></li><li><p>初始参数</p><ul><li>无</li></ul></li><li><p>示例</p></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> webglPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@tslfe/dt-enging&quot;</span>
<span class="token operator">...</span>省略获取meta实例的步骤<span class="token operator">...</span>

<span class="token keyword">const</span> osPlugin <span class="token operator">=</span> meta<span class="token punctuation">.</span>plugin<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>webglPlugin<span class="token punctuation">.</span><span class="token function">os</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h2><h3 id="event" tabindex="-1"><a class="header-anchor" href="#event" aria-hidden="true">#</a> event</h3>`,4),h={class:"custom-container tip"},v=n("p",{class:"custom-container-title"},"事件发射器",-1),m=n("li",null,[n("p",null,[s("说明: 用于监听到 数字空间 的消息后，在 "),n("code",null,"DT-Engine"),s(" 中发布消息")])],-1),g=l(`<h2 id="方法" tabindex="-1"><a class="header-anchor" href="#方法" aria-hidden="true">#</a> 方法</h2><h3 id="connect" tabindex="-1"><a class="header-anchor" href="#connect" aria-hidden="true">#</a> connect( )</h3><p>与数字空间建立连接，建立连接后才能使用其提供的各种功能</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function-variable function">connect</span><span class="token operator">:</span> <span class="token punctuation">(</span>options<span class="token operator">:</span> OSOptions<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>Core<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,4),_=n("p",null,"参数",-1),b=n("p",null,[n("code",null,"options:"),s(" 连接配置参数")],-1),f=n("p",null,"返回值",-1),x=n("p",null,[n("code",null,"Promise<Core>")],-1),y=n("li",null,[n("p",null,"示例")],-1),P=l(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token operator">...</span>省略挂载os插件的步骤<span class="token operator">...</span>

osPlugin<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    appCode<span class="token operator">:</span> <span class="token string">&quot;xxx&quot;</span><span class="token punctuation">,</span>
    socket<span class="token operator">:</span> <span class="token punctuation">{</span>
        url<span class="token operator">:</span> <span class="token string">&quot;xxx&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>core<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),w={id:"loadmodelurl",tabindex:"-1"},q=n("a",{class:"header-anchor",href:"#loadmodelurl","aria-hidden":"true"},"#",-1),C=l(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function-variable function">loadModelUrl</span><span class="token operator">:</span> <span class="token punctuation">(</span>path<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,1),M=n("p",null,"参数",-1),O=n("p",null,[n("code",null,"path:"),s(" 数字空间资源定位符")],-1),E=n("li",null,[n("p",null,"返回值"),n("ul",null,[n("li",null,[n("code",null,"Promise<string>")])])],-1),N=n("li",null,[n("p",null,"示例")],-1),S=l(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token operator">...</span>省略挂载os插件的步骤<span class="token operator">...</span>

osPlugin<span class="token punctuation">.</span><span class="token function">loadModelUrl</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>url<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="enter" tabindex="-1"><a class="header-anchor" href="#enter" aria-hidden="true">#</a> enter( )</h3>`,2),V=l(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function-variable function">enter</span><span class="token operator">:</span> <span class="token punctuation">(</span>path<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> hook<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>path<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,1),B=n("p",null,"参数",-1),T=n("p",null,[n("code",null,"path:"),s(" 数字空间中的空间路径")],-1),U=n("code",null,"hook:",-1),L=n("p",null,"返回值",-1),R=n("p",null,[n("code",null,"Promise<Component<WebglModel>>")],-1),W=n("li",null,[n("p",null,"示例")],-1),D=l(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token operator">...</span>省略挂载os插件的步骤<span class="token operator">...</span>

osPlugin<span class="token punctuation">.</span><span class="token function">enter</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span><span class="token punctuation">(</span>url<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> url<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),j={id:"compile",tabindex:"-1"},z=n("a",{class:"header-anchor",href:"#compile","aria-hidden":"true"},"#",-1),A=l(`<p>预编译</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function-variable function">compile</span><span class="token operator">:</span> <span class="token punctuation">(</span>path<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> hook<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>path<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,2),F=n("p",null,"参数",-1),G=n("p",null,[n("code",null,"path:"),s(" 数字空间资源定位符")],-1),H=n("li",null,[n("p",null,[n("code",null,"hook:")])],-1),I=n("p",null,"返回值",-1),J=n("p",null,[n("code",null,"Promise<Component<WebglModel>>")],-1),K=n("li",null,[n("p",null,"示例")],-1),Q=l(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token operator">...</span>省略挂载os插件的步骤<span class="token operator">...</span>

osPlugin<span class="token punctuation">.</span><span class="token function">compile</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span><span class="token punctuation">(</span>url<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> url<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="dispose" tabindex="-1"><a class="header-anchor" href="#dispose" aria-hidden="true">#</a> dispose( )</h3><p>销毁连接</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function-variable function">dispose</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><p>参数</p><ul><li>无</li></ul></li><li><p>返回值</p><ul><li>无</li></ul></li><li><p>示例</p></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token operator">...</span>省略挂载os插件的步骤<span class="token operator">...</span>

osPlugin<span class="token punctuation">.</span><span class="token function">dispose</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function X(Y,Z){const t=p("RouterLink"),o=p("badge");return c(),u("div",null,[d,n("p",null,[s("该插件用于和 "),a(t,{to:"/digital/start/introduction.html"},{default:e(()=>[s("TacOS数字空间")]),_:1}),s(" 进行连接，连接后可以使用其提供的各种功能")]),k,n("div",h,[v,n("ul",null,[n("li",null,[n("p",null,[s("类型: "),a(t,{to:"/three/api/eventemitter.html"},{default:e(()=>[s("EventEmitter")]),_:1})])]),m])]),g,n("ul",null,[n("li",null,[_,n("ul",null,[n("li",null,[b,n("ul",null,[n("li",null,[s("参考: "),a(t,{to:"/three/help/declare.html#osoptions"},{default:e(()=>[s("OSOptions")]),_:1})])])])])]),n("li",null,[f,n("ul",null,[n("li",null,[x,n("ul",null,[n("li",null,[s("参考: "),a(t,{to:"/digital/help/declare.html#core"},{default:e(()=>[s("数字空间.Core")]),_:1})])])])])]),y]),P,n("h3",w,[q,s(" loadModelUrl( ) "),a(o,{type:"danger",text:"v4.1.6"})]),C,n("ul",null,[n("li",null,[M,n("ul",null,[n("li",null,[O,n("ul",null,[n("li",null,[s("参考: "),a(t,{to:"/digital/essentials/xpath.html"},{default:e(()=>[s("数字空间.path")]),_:1})])])])])]),E,N]),S,n("p",null,[s("通过 "),a(t,{to:"/digital/essentials/xpath.html"},{default:e(()=>[s("数字空间.path")]),_:1}),s(" 进入某一个空间")]),V,n("ul",null,[n("li",null,[B,n("ul",null,[n("li",null,[T,n("ul",null,[n("li",null,[s("参考: "),a(t,{to:"/digital/essentials/xpath.html"},{default:e(()=>[s("数字空间.path")]),_:1})])])]),n("li",null,[n("p",null,[U,s(),a(o,{type:"danger",text:"v4.1.4"}),s(" 钩子函数，在进入空间前触发，可用于自定义处理数字空间对应的模型文件地址")])])])]),n("li",null,[L,n("ul",null,[n("li",null,[R,n("ul",null,[n("li",null,[s("参考: "),a(t,{to:"/three/api/component.html"},{default:e(()=>[s("Component")]),_:1})])])])])]),W]),D,n("h3",j,[z,s(" compile( ) "),a(o,{type:"danger",text:"v4.1.6"})]),A,n("ul",null,[n("li",null,[F,n("ul",null,[n("li",null,[G,n("ul",null,[n("li",null,[s("参考: "),a(t,{to:"/digital/essentials/xpath.html"},{default:e(()=>[s("数字空间.path")]),_:1})])])]),H])]),n("li",null,[I,n("ul",null,[n("li",null,[J,n("ul",null,[n("li",null,[s("参考: "),a(t,{to:"/three/api/component.html"},{default:e(()=>[s("Component")]),_:1})])])])])]),K]),Q])}const nn=i(r,[["render",X],["__file","os.html.vue"]]);export{nn as default};
