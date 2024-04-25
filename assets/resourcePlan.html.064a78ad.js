import{_ as c,r as t,o as i,c as u,a as n,b as s,d as a,w as p,e as o}from"./app.f18319b0.js";const r={},d=n("h3",{id:"resourceplan-实例",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#resourceplan-实例","aria-hidden":"true"},"#"),s(" ResourcePlan 实例")],-1),k=n("code",null,"ResourcePlan",-1),m=n("a",{href:"#zhname"},"zhname()",-1),v=n("a",{href:"#time"},"time()",-1),h=n("a",{href:"#enable-1"},"enbale()",-1),b=n("a",{href:"#actions"},"actions()",-1),g=n("a",{href:"#remarks"},"remarks()",-1),f=o(`<h3 id="zhname" tabindex="-1"><a class="header-anchor" href="#zhname" aria-hidden="true">#</a> zhname()</h3><p>配置计划中文名称</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token function-variable function">zhname</span><span class="token operator">:</span> <span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> ResourcePlan<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,3),_=n("p",null,"参数",-1),x=n("code",null,"name",-1),y=n("li",null,[n("p",null,"返回类型"),n("ul",null,[n("li",null,[n("a",{href:"#resourceplan-%E5%AE%9E%E4%BE%8B"},"ResourcePlan 实例对象")])])],-1),E=n("li",null,[n("p",null,"示例")],-1),q=o(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> sources <span class="token operator">=</span> plan<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token string">&quot;xxx&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
sources<span class="token punctuation">.</span><span class="token function">zhname</span><span class="token punctuation">(</span><span class="token string">&quot;中文名称&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="time" tabindex="-1"><a class="header-anchor" href="#time" aria-hidden="true">#</a> time()</h3><p>配置计划执行时间</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token function-variable function">time</span><span class="token operator">:</span> <span class="token punctuation">(</span>cron<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> ResourcePlan<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><p>参数</p><ul><li><code>cron</code>：计划执行时间(cron 表达式)</li></ul></li><li><p>返回类型</p><ul><li><a href="#resourceplan-%E5%AE%9E%E4%BE%8B">ResourcePlan 实例对象</a></li></ul></li><li><p>示例</p></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> sources <span class="token operator">=</span> plan<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token string">&quot;xxx&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
sources<span class="token punctuation">.</span><span class="token function">time</span><span class="token punctuation">(</span><span class="token string">&quot;0 0 12 * * ?&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="enable" tabindex="-1"><a class="header-anchor" href="#enable" aria-hidden="true">#</a> enable()</h3><p>配置计划是否启用</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token function-variable function">enable</span><span class="token operator">:</span> <span class="token punctuation">(</span>isEnable<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> ResourcePlan<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><p>参数</p><ul><li><code>bool</code>：计划是否启用( <code>true</code> 为开启， <code>false</code> 为关闭)</li></ul></li><li><p>返回类型</p><ul><li><a href="#resourceplan-%E5%AE%9E%E4%BE%8B">ResourcePlan 实例对象</a></li></ul></li><li><p>示例</p></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> sources <span class="token operator">=</span> mode<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token string">&quot;xxx&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
sources<span class="token punctuation">.</span><span class="token function">enable</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="actions" tabindex="-1"><a class="header-anchor" href="#actions" aria-hidden="true">#</a> actions()</h3><p>配置计划执行动作</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token function-variable function">actions</span><span class="token operator">:</span> <span class="token punctuation">(</span>commandsWithGroup<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token punctuation">{</span> group<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token punctuation">;</span> command<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> ResourcePlan<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><p>参数</p><ul><li><p><code>commandsWithGroup</code>：计划执行动作</p><ul><li><p>command 为具体指令</p></li><li><p>group为分组，相同的指令会被归为一组，若无分组需求可不</p></li></ul></li></ul></li><li><p>返回类型</p><ul><li><a href="#resourceplan-%E5%AE%9E%E4%BE%8B">ResourcePlan 实例对象</a></li></ul></li><li><p>示例</p></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> sources <span class="token operator">=</span> plan<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token string">&quot;xxx&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
sources<span class="token punctuation">.</span><span class="token function">actions</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">{</span> group<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> command<span class="token operator">:</span> <span class="token string">&quot;(./devices/Window).close()&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="remarks" tabindex="-1"><a class="header-anchor" href="#remarks" aria-hidden="true">#</a> remarks()</h3><p>配置备注</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token function-variable function">remarks</span><span class="token operator">:</span> <span class="token punctuation">(</span>remark<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> ResourcePlan<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><p>参数</p><ul><li><code>remark</code>：备注</li></ul></li><li><p>返回类型</p><ul><li><a href="#resourceplan-%E5%AE%9E%E4%BE%8B">ResourcePlan 实例对象</a></li></ul></li><li><p>示例</p></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> sources <span class="token operator">=</span> plan<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token string">&quot;xxx&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
sources<span class="token punctuation">.</span><span class="token function">remarks</span><span class="token punctuation">(</span><span class="token string">&quot;这是备注&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="apply" tabindex="-1"><a class="header-anchor" href="#apply" aria-hidden="true">#</a> apply()</h3><p>提交修改</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token function-variable function">apply</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><p>参数</p><ul><li>无</li></ul></li><li><p>返回类型</p><ul><li><code>Promise&lt;any&gt;</code></li></ul></li><li><p>示例</p></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> sources <span class="token operator">=</span> plan<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token string">&quot;xxx&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">sources</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,26);function P(B,R){const e=t("RouterLink"),l=t("Badge");return i(),u("div",null,[d,n("p",null,[k,s(" 实例是一个用于配置计划新增和更新数据的实例，通过内置的"),m,s(" , "),v,s(" , "),h,s(" , "),b,s(" , "),g,s(" 方法(支持链式调用)可以快速配置所需的数据，最终调用 "),a(e,{to:"/digital/api/plan.html#apply"},{default:p(()=>[s("apply()")]),_:1}),s("方法实现新增以及更新")]),n("blockquote",null,[n("p",null,[s("类型："),a(e,{to:"/digital/help/declare.html#resourceplan"},{default:p(()=>[s("ResourcePlan")]),_:1})])]),f,n("ul",null,[n("li",null,[_,n("ul",null,[n("li",null,[x,s("：计划中文名称"),a(l,{text:"必传"})])])]),y,E]),q])}const z=c(r,[["render",P],["__file","resourcePlan.html.vue"]]);export{z as default};
