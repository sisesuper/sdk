import{_ as e,r as o,o as p,c as l,a,b as s,d as c,w as i,e as n}from"./app.f18319b0.js";const u={},r=n(`<h1 id="layout" tabindex="-1"><a class="header-anchor" href="#layout" aria-hidden="true">#</a> Layout</h1><p>布局SDK类，可以提供读取布局的相关操作能力</p><h2 id="方法" tabindex="-1"><a class="header-anchor" href="#方法" aria-hidden="true">#</a> 方法</h2><h3 id="get" tabindex="-1"><a class="header-anchor" href="#get" aria-hidden="true">#</a> get()</h3><p>获取指定的布局类型</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token function-variable function">get</span><span class="token operator">:</span> <span class="token punctuation">(</span>type<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span>LayoutMetaData <span class="token operator">&amp;</span> <span class="token punctuation">{</span> spaceId<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">}</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,6),d=n(`<ul><li><p>参数</p><ul><li><p><code>type</code>: 布局类型</p><ul><li><code>type</code>默认为<code>&quot;glb&quot;</code></li></ul></li></ul></li><li><p>返回类型</p><ul><li><code>Array&lt;LayoutMetaData &amp; { spaceId: string }&gt;</code></li></ul></li><li><p>示例</p></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> Tacos<span class="token punctuation">,</span> <span class="token punctuation">{</span> Root <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@tslfe/tacos-sdk&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Layout <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@tslfe/tacos-sdk&quot;</span><span class="token punctuation">;</span>
<span class="token operator">...</span>
<span class="token keyword">const</span> layout <span class="token operator">=</span> <span class="token keyword">await</span> root<span class="token punctuation">.</span><span class="token generic-function"><span class="token function">search</span><span class="token generic class-name"><span class="token operator">&lt;</span>Layout<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token string">&quot;/Office/layouts/*&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token keyword">await</span> layout<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;shp&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="update" tabindex="-1"><a class="header-anchor" href="#update" aria-hidden="true">#</a> update()</h3><p>更新布局文件</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token function-variable function">update</span><span class="token operator">:</span> <span class="token punctuation">(</span>type<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> url<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token builtin">boolean</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><p>参数</p><ul><li><p><code>type</code>: 布局类型</p><ul><li><code>type</code>默认为<code>&quot;glb&quot;</code></li></ul></li><li><p><code>url</code>: 布局资源 <code>url</code></p></li></ul></li><li><p>返回类型</p><ul><li><code>Promise&lt;boolean&gt;</code></li></ul></li><li><p>示例</p></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 更新某个布局的url</span>
<span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">await</span> layout<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token string">&quot;shp&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;&lt;url&gt;&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function k(g,y){const t=o("RouterLink");return p(),l("div",null,[r,a("blockquote",null,[a("p",null,[s("参考: "),c(t,{to:"/digital/help/declare.html#layoutmetadata"},{default:i(()=>[s("LayoutMetaData")]),_:1})])]),d])}const v=e(u,[["render",k],["__file","layout.html.vue"]]);export{v as default};