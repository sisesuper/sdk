import{_ as p,r as o,o as i,c as l,a as n,b as a,d as t,e as s}from"./app.f18319b0.js";const c={},u=s(`<h1 id="animation-动画" tabindex="-1"><a class="header-anchor" href="#animation-动画" aria-hidden="true">#</a> Animation 动画</h1><p>创建组件实例时 <code>new</code></p><ul><li>示例</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> instance <span class="token operator">=</span> app<span class="token punctuation">.</span><span class="token function">getComponent</span><span class="token punctuation">(</span><span class="token string">&quot;radar1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> animation <span class="token operator">=</span> instance<span class="token punctuation">.</span>animation<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="方法" tabindex="-1"><a class="header-anchor" href="#方法" aria-hidden="true">#</a> 方法</h2><h3 id="add" tabindex="-1"><a class="header-anchor" href="#add" aria-hidden="true">#</a> add()</h3><p>添加动画</p>`,7),d=n("p",null,"参数",-1),r=n("li",null,[n("p",null,[n("code",null,"options"),a(": "),n("code",null,"AnimationOptions[] | AnimationOptions")])],-1),k={href:"/miniapp/help/type.html#animationoptions",target:"_blank",rel:"noopener noreferrer"},v=n("li",null,[n("p",null,"示例")],-1),m=s(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> animationKeys <span class="token operator">=</span> <span class="token punctuation">{</span>
  enter<span class="token operator">:</span> <span class="token string">&quot;enter&quot;</span><span class="token punctuation">,</span>
  leave<span class="token operator">:</span> <span class="token string">&quot;out&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> animationDefaultOptions <span class="token operator">=</span> <span class="token punctuation">{</span>
  delay<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  duration<span class="token operator">:</span> <span class="token string">&quot;0.5s&quot;</span><span class="token punctuation">,</span>
  status<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  toward<span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

animation<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    driver<span class="token operator">:</span> <span class="token string">&quot;css&quot;</span><span class="token punctuation">,</span>
    key<span class="token operator">:</span> animationKeys<span class="token punctuation">.</span>enter<span class="token punctuation">,</span>
    value<span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    options<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token operator">...</span>animationDefaultOptions <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    driver<span class="token operator">:</span> <span class="token string">&quot;css&quot;</span><span class="token punctuation">,</span>
    key<span class="token operator">:</span> animationKeys<span class="token punctuation">.</span>leave<span class="token punctuation">,</span>
    value<span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    options<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token operator">...</span>animationDefaultOptions <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="remove" tabindex="-1"><a class="header-anchor" href="#remove" aria-hidden="true">#</a> remove()</h3><p>删除动画</p><ul><li><p>参数</p><ul><li><code>key</code>: <code>string</code></li></ul></li><li><p>示例</p></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>animation<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token string">&quot;enter&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="get" tabindex="-1"><a class="header-anchor" href="#get" aria-hidden="true">#</a> get()</h3><p>获取动画</p><ul><li><p>参数</p><ul><li><code>key</code>: <code>string</code></li></ul></li><li><p>返回值</p><ul><li><code>AnimationOptions | undefined</code></li></ul></li><li><p>示例</p></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> animationEnter <span class="token operator">=</span> animation<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;enter&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="update" tabindex="-1"><a class="header-anchor" href="#update" aria-hidden="true">#</a> update()</h3><p>更新动画</p>`,11),h=n("p",null,"参数",-1),b=s("<li><p><code>key</code>: <code>string</code></p></li><li><p><code>value?</code>: <code>string | string[]</code></p><ul><li>动画值，如：<code>animate.css</code> 的 <code>bounceInLeft</code></li></ul></li><li><p><code>options?</code>: <code>Record&lt;string, any&gt;</code></p></li>",3),g={href:"/miniapp/help/type.html#animationoptions",target:"_blank",rel:"noopener noreferrer"},y=n("li",null,[n("p",null,"示例")],-1),_=s(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>animation<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token string">&quot;enter&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="clear" tabindex="-1"><a class="header-anchor" href="#clear" aria-hidden="true">#</a> clear()</h3><p>清空动画</p><ul><li>示例</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>animation<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="play" tabindex="-1"><a class="header-anchor" href="#play" aria-hidden="true">#</a> play()</h3><p>运行动画</p><ul><li><p>参数</p><ul><li><p><code>key</code>: <code>string</code></p></li><li><p><code>force</code>: <code>boolean</code> 是否启用</p></li></ul></li><li><p>返回值</p><ul><li><code>cssAnimation</code></li></ul></li><li><p>示例</p></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>animation<span class="token punctuation">.</span><span class="token function">play</span><span class="token punctuation">(</span><span class="token string">&quot;enter&quot;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="exports" tabindex="-1"><a class="header-anchor" href="#exports" aria-hidden="true">#</a> exports()</h3><p>导出动画</p><ul><li><p>返回值</p><ul><li><code>AnimationOptions[]</code></li></ul></li><li><p>示例</p></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> animations <span class="token operator">=</span> animation<span class="token punctuation">.</span><span class="token function">exports</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,13);function f(x,q){const e=o("ExternalLinkIcon");return i(),l("div",null,[u,n("ul",null,[n("li",null,[d,n("ul",null,[r,n("li",null,[n("p",null,[a("参考："),n("a",k,[a("AnimationOptions"),t(e)])])])])]),v]),m,n("ul",null,[n("li",null,[h,n("ul",null,[b,n("li",null,[n("p",null,[a("参考："),n("a",g,[a("AnimationOptions"),t(e)])])])])]),y]),_])}const O=p(c,[["render",f],["__file","animation.html.vue"]]);export{O as default};
