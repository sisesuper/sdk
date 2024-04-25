import{_ as n,o as a,c as s,e}from"./app.f18319b0.js";const t={},o=e(`<h1 id="自定义组件" tabindex="-1"><a class="header-anchor" href="#自定义组件" aria-hidden="true">#</a> 自定义组件</h1><p>SDK 渲染页面时除了需要依赖于默认的组件外，还需要一些复杂组件，可以单独创建自定义组件并引入项目中使用</p><h2 id="创建渲染组件" tabindex="-1"><a class="header-anchor" href="#创建渲染组件" aria-hidden="true">#</a> 创建渲染组件</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent<span class="token punctuation">,</span> defineApi <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@tslfe/miniapp-engine&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  extension<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>  <span class="token comment">// 设置为true才可以加载自定义属性</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="创建自定义属性" tabindex="-1"><a class="header-anchor" href="#创建自定义属性" aria-hidden="true">#</a> 创建自定义属性</h2>`,5),p=[o];function i(c,l){return a(),s("div",null,p)}const d=n(t,[["render",i],["__file","template.html.vue"]]);export{d as default};