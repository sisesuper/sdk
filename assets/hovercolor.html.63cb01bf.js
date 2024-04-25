import{_ as i,r as o,o as c,c as r,a as n,b as s,d as a,w as t,e}from"./app.f18319b0.js";const u={},d=n("h1",{id:"hovercolor",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#hovercolor","aria-hidden":"true"},"#"),s(" hoverColor")],-1),v=n("p",null,[s("该插件用于给模型添加颜色效果，该插件会监听 "),n("strong",null,"鼠标悬停"),s(" 事件，并给对应的模型添加颜色效果。")],-1),h=n("li",null,[n("p",null,"插件名称"),n("p",null,[n("strong",null,"hover-color")])],-1),k=n("p",null,"初始参数",-1),_=n("p",null,[n("code",null,"state: HoverColorOptions"),s(" 鼠标悬停颜色配置参数")],-1),b=n("li",null,[n("p",null,"注: 初始参数可以为空")],-1),m=n("li",null,[n("p",null,"示例")],-1),g=e(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> webglPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@tslfe/dt-enging&quot;</span>
<span class="token operator">...</span>省略获取meta实例的步骤<span class="token operator">...</span>

<span class="token keyword">const</span> hoverColorPlugin <span class="token operator">=</span> meta<span class="token punctuation">.</span>plugin<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>webglPlugin<span class="token punctuation">.</span><span class="token function">hoverColor</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    color<span class="token operator">:</span> <span class="token string">&quot;#00FF00&quot;</span><span class="token punctuation">,</span>
    opacity<span class="token operator">:</span> <span class="token number">0.8</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="方法" tabindex="-1"><a class="header-anchor" href="#方法" aria-hidden="true">#</a> 方法</h2><h3 id="hover" tabindex="-1"><a class="header-anchor" href="#hover" aria-hidden="true">#</a> hover( )</h3><p>给模型添加颜色效果，该方法会在监听到鼠标悬停于模型上时 <strong>自动调用</strong></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function-variable function">hover</span><span class="token operator">:</span> <span class="token punctuation">(</span>event<span class="token operator">:</span> DTEvent<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,5),f=n("p",null,"参数",-1),y=n("p",null,[n("code",null,"event:"),s(" 事件对象")],-1),x=n("li",null,[n("p",null,"返回值"),n("ul",null,[n("li",null,"无")])],-1),w=e(`<h3 id="blur" tabindex="-1"><a class="header-anchor" href="#blur" aria-hidden="true">#</a> blur( )</h3><p>移除模型的颜色效果，该方法会在监听到鼠标离开模型时 <strong>自动调用</strong></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function-variable function">blur</span><span class="token operator">:</span> <span class="token punctuation">(</span>event<span class="token operator">:</span> DTEvent<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,3),C=n("p",null,"参数",-1),j=n("p",null,[n("code",null,"event:"),s(" 事件对象")],-1),D=n("li",null,[n("p",null,"返回值"),n("ul",null,[n("li",null,"无")])],-1),E=e(`<h3 id="clear" tabindex="-1"><a class="header-anchor" href="#clear" aria-hidden="true">#</a> clear( )</h3><p>手动移除模型的hover效果</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function-variable function">clear</span><span class="token operator">:</span> <span class="token punctuation">(</span>object<span class="token operator">?</span><span class="token operator">:</span> Object3D <span class="token operator">|</span> Object3D<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,3),O=n("p",null,"参数",-1),q=n("p",null,[n("code",null,"object:"),s(" 目标模型")],-1),P={href:"https://threejs.org/docs/index.html?q=Obje#api/zh/core/Object3D",target:"_blank",rel:"noopener noreferrer"},T=n("li",null,[n("p",null,"注: 当参数为空时，会移除鼠标悬停的模型上的颜色效果")],-1),L=n("li",null,[n("p",null,"返回值"),n("ul",null,[n("li",null,"无")])],-1),N=n("li",null,[n("p",null,"示例")],-1),V=e(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token operator">...</span>省略挂载hoverColor插件的步骤<span class="token operator">...</span>

hoverColorPlugin<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="dispose" tabindex="-1"><a class="header-anchor" href="#dispose" aria-hidden="true">#</a> dispose( )</h3><p>销毁插件</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">dispose</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><p>参数</p><ul><li>无</li></ul></li><li><p>返回值</p><ul><li>无</li></ul></li><li><p>示例</p></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token operator">...</span>省略挂载hoverColor插件的步骤<span class="token operator">...</span>

hoverColorPlugin<span class="token punctuation">.</span><span class="token function">dispose</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function B(F,H){const l=o("RouterLink"),p=o("ExternalLinkIcon");return c(),r("div",null,[d,v,n("ul",null,[h,n("li",null,[k,n("ul",null,[n("li",null,[_,n("ul",null,[n("li",null,[n("p",null,[s("参考: "),a(l,{to:"/three/help/declare.html#hovercoloroptions"},{default:t(()=>[s("HoverColorOptions")]),_:1})])]),b])])])]),m]),g,n("ul",null,[n("li",null,[f,n("ul",null,[n("li",null,[y,n("ul",null,[n("li",null,[s("参考: "),a(l,{to:"/three/help/declare.html#dtevent"},{default:t(()=>[s("DTEvent")]),_:1})])])])])]),x]),w,n("ul",null,[n("li",null,[C,n("ul",null,[n("li",null,[j,n("ul",null,[n("li",null,[s("参考: "),a(l,{to:"/three/help/declare.html#dtevent"},{default:t(()=>[s("DTEvent")]),_:1})])])])])]),D]),E,n("ul",null,[n("li",null,[O,n("ul",null,[n("li",null,[q,n("ul",null,[n("li",null,[n("p",null,[s("参考: "),n("a",P,[s("Object3D"),a(p)])])]),T])])])]),L,N]),V])}const R=i(u,[["render",B],["__file","hovercolor.html.vue"]]);export{R as default};
