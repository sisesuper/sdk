import{_ as n,o as s,c as a,e as t}from"./app.f18319b0.js";const e={},p=t(`<h1 id="添加交互" tabindex="-1"><a class="header-anchor" href="#添加交互" aria-hidden="true">#</a> 添加交互</h1><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> <span class="token function-variable function">redevelopment</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> interaction <span class="token operator">=</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">&quot;右键修改样式&quot;</span><span class="token punctuation">,</span>
    eventKey<span class="token operator">:</span> <span class="token string">&quot;contextmenu&quot;</span><span class="token punctuation">,</span>
    type<span class="token operator">:</span> <span class="token string">&quot;action&quot;</span><span class="token punctuation">,</span>
    actions<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        key<span class="token operator">:</span> <span class="token string">&quot;updateStyle&quot;</span><span class="token punctuation">,</span>
        targets<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;a58ddd69-3611-4a3e-8e91-25af773756c9&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 目标组件uid</span>
        params<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  component2<span class="token punctuation">.</span>action<span class="token punctuation">.</span><span class="token function">addInteraction</span><span class="token punctuation">(</span>interaction<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[p];function c(i,l){return s(),a("div",null,o)}const r=n(e,[["render",c],["__file","addInteraction.html.vue"]]);export{r as default};
