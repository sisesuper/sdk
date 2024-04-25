import{_ as c,r as l,o as i,c as u,a as n,b as s,d as a,w as t,f as r,e as p}from"./app.f18319b0.js";const d={},k=p('<h1 id="space" tabindex="-1"><a class="header-anchor" href="#space" aria-hidden="true">#</a> Space</h1><p>空间SDK模块类，通过创建该类的实例对象，可以提供读取空间相关操作能力</p><h2 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h2><h3 id="list" tabindex="-1"><a class="header-anchor" href="#list" aria-hidden="true">#</a> list</h3><p>获取当前空间下的所有子空间元数据列表</p>',5),h=n("li",null,[n("p",null,[s("类型："),n("code",null,"SpaceMetaData[]")])],-1),m=n("li",null,[n("p",null,"示例")],-1),v=p(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> Tacos<span class="token punctuation">,</span> <span class="token punctuation">{</span> Root <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@tslfe/tacos-sdk&quot;</span><span class="token punctuation">;</span>
<span class="token operator">...</span>
<span class="token keyword">const</span> space <span class="token operator">=</span> <span class="token keyword">await</span> root<span class="token punctuation">.</span><span class="token generic-function"><span class="token function">search</span><span class="token generic class-name"><span class="token operator">&lt;</span>Space<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token string">&quot;/Office&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 读取当前office空间下的所有资源信息</span>
<span class="token keyword">const</span> curSpaceList <span class="token operator">=</span> space<span class="token punctuation">.</span>list<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="device" tabindex="-1"><a class="header-anchor" href="#device" aria-hidden="true">#</a> device</h3>`,2),g={class:"custom-container tip"},b=n("p",{class:"custom-container-title"},"返回当前空间下的设备sdk实例对象",-1),f=n("li",null,[n("p",null,[s("类型："),n("code",null,"Device")])],-1),y=n("h3",{id:"mode",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#mode","aria-hidden":"true"},"#"),s(" mode")],-1),_={class:"custom-container tip"},x=n("p",{class:"custom-container-title"},"返回当前空间下的模式sdk实例对象",-1),w=n("li",null,[n("p",null,[s("类型："),n("code",null,"Mode")])],-1),S=n("h3",{id:"plan",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#plan","aria-hidden":"true"},"#"),s(" plan")],-1),q={class:"custom-container tip"},P=n("p",{class:"custom-container-title"},"返回当前空间下的计划sdk实例对象",-1),D=n("li",null,[n("p",null,[s("类型："),n("code",null,"Plan")])],-1),T=n("h3",{id:"rule",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#rule","aria-hidden":"true"},"#"),s(" rule")],-1),B={class:"custom-container tip"},L=n("p",{class:"custom-container-title"},"返回当前空间下的规则sdk实例对象",-1),K=n("li",null,[n("p",null,[s("类型："),n("code",null,"Rule")])],-1),O=n("h3",{id:"layout",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#layout","aria-hidden":"true"},"#"),s(" layout")],-1),M={class:"custom-container tip"},C=n("p",{class:"custom-container-title"},"返回当前空间下的布局sdk实例对象",-1),N=n("li",null,[n("p",null,[s("类型："),n("code",null,"Layout")])],-1),R=p(`<h2 id="方法" tabindex="-1"><a class="header-anchor" href="#方法" aria-hidden="true">#</a> 方法</h2><h3 id="fullpath" tabindex="-1"><a class="header-anchor" href="#fullpath" aria-hidden="true">#</a> fullPath()</h3><p>获取当前空间的所在全路径空间目录树</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token function-variable function">fullPath</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>SpaceTree<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,4),I=p(`<ul><li><p>参数</p><ul><li>无</li></ul></li><li><p>返回类型</p><ul><li><code>Promise&lt;SpaceTree&gt;</code></li></ul></li><li><p>返回值</p><ul><li><code>SpaceTree</code>: 空间资源目录树</li></ul></li><li><p>示例</p></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> space <span class="token operator">=</span> <span class="token keyword">await</span> root<span class="token punctuation">.</span><span class="token generic-function"><span class="token function">search</span><span class="token generic class-name"><span class="token operator">&lt;</span>Space<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token string">&quot;/Office&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 返回当前空间所在的office全路径目录</span>
<span class="token keyword">const</span> spaceTree <span class="token operator">=</span> <span class="token keyword">await</span> space<span class="token punctuation">.</span><span class="token function">fullPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="path" tabindex="-1"><a class="header-anchor" href="#path" aria-hidden="true">#</a> path()</h3><p>获取当前空间下全部子空间路径信息列表（包括空间 <code>id</code> 和空间 <code>path</code> 路径）</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token function-variable function">path</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> path<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">}</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><p>参数</p><ul><li>无</li></ul></li><li><p>返回类型</p><ul><li><code>Promise&lt;{ id: string; path: string}[]&gt;</code></li></ul></li><li><p>返回值</p><ul><li><p><code>id</code>: 空间 <code>id</code></p></li><li><p><code>path</code>: 空间 <code>path</code> 路径</p></li></ul></li><li><p>示例</p></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> space <span class="token operator">=</span> <span class="token keyword">await</span> root<span class="token punctuation">.</span><span class="token generic-function"><span class="token function">search</span><span class="token generic class-name"><span class="token operator">&lt;</span>Space<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token string">&quot;/Office&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 获取当前Office空间下所有子空间路径</span>
<span class="token keyword">const</span> pathList <span class="token operator">=</span> <span class="token keyword">await</span> space<span class="token punctuation">.</span><span class="token function">path</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// return [</span>
<span class="token comment">//  { id: 100001, path: &quot;/Office/childSpace1&quot;},</span>
<span class="token comment">//  { id: 100002, path: &quot;/Office/childSpace2&quot;} </span>
<span class="token comment">//]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="parent" tabindex="-1"><a class="header-anchor" href="#parent" aria-hidden="true">#</a> parent()</h3><p>获取当前空间所在父级空间SDK实例对象</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>parent<span class="token operator">:</span> <span class="token operator">&lt;</span><span class="token constant">S</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>TacosSDK <span class="token operator">&amp;</span> <span class="token constant">S</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,10),V=p(`<ul><li><p>参数</p><ul><li>无</li></ul></li><li><p>返回类型</p><ul><li><code>Promise&lt;TacosSDK &amp; S&gt;</code></li></ul></li><li><p>示例</p></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> space <span class="token operator">=</span> <span class="token keyword">await</span> root<span class="token punctuation">.</span><span class="token generic-function"><span class="token function">search</span><span class="token generic class-name"><span class="token operator">&lt;</span>Space<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token string">&quot;/Office/space1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 返回当前space1空间的父空间Office sdk对象</span>
<span class="token keyword">const</span> parent <span class="token operator">=</span> <span class="token keyword">await</span> space<span class="token punctuation">.</span><span class="token function">parent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="root" tabindex="-1"><a class="header-anchor" href="#root" aria-hidden="true">#</a> root()</h3><p>获取根节点空间SDK对象</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>root<span class="token operator">:</span> <span class="token operator">&lt;</span><span class="token constant">S</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>TacosSDK <span class="token operator">&amp;</span> <span class="token constant">S</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><p>参数</p><ul><li>无</li></ul></li><li><p>返回类型</p><ul><li><code>Promise&lt;TacosSDK &amp; S&gt;</code></li></ul></li><li><p>示例</p></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> space <span class="token operator">=</span> <span class="token keyword">await</span> root<span class="token punctuation">.</span><span class="token generic-function"><span class="token function">search</span><span class="token generic class-name"><span class="token operator">&lt;</span>Space<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token string">&quot;/Office/space1/space2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 返回当前space2空间链路上根空间root sdk对象</span>
<span class="token keyword">const</span> parent <span class="token operator">=</span> <span class="token keyword">await</span> space<span class="token punctuation">.</span><span class="token function">root</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="search" tabindex="-1"><a class="header-anchor" href="#search" aria-hidden="true">#</a> search()</h3><p>查询当前空间的某个子要素SDK实例对象</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>search<span class="token operator">:</span> <span class="token operator">&lt;</span><span class="token constant">S</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>tacosPath<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>TacosSDK <span class="token operator">&amp;</span> <span class="token constant">S</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><p>参数</p><ul><li><code>tacosPath</code>: 相对路径资源定位符 <code>xpath</code> （相对于当前空间层级）</li></ul></li><li><p>返回类型</p><ul><li><code>Promise&lt;TacosSDK &amp; S&gt;</code></li></ul></li><li><p>示例</p></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Space<span class="token punctuation">,</span> Device <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@tslfe/tacos-sdk&quot;</span>
<span class="token comment">// 根空间查询传入绝对路径</span>
<span class="token keyword">const</span> space <span class="token operator">=</span> <span class="token keyword">await</span> root<span class="token punctuation">.</span><span class="token generic-function"><span class="token function">search</span><span class="token generic class-name"><span class="token operator">&lt;</span>Space<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token string">&quot;/Office/space1/space2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 相对于space2空间层级，查询其空间下的设备id=12345的设备sdk对象（相对路径）</span>
<span class="token keyword">const</span> device <span class="token operator">=</span> space<span class="token punctuation">.</span><span class="token generic-function"><span class="token function">search</span><span class="token generic class-name"><span class="token operator">&lt;</span>Device<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token string">&quot;./devices/*[@id=&#39;123456&#39;]&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="findbyid" tabindex="-1"><a class="header-anchor" href="#findbyid" aria-hidden="true">#</a> findById()</h3><p>根据空间 <code>id</code> 查找子空间SDK实例对象</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token function-variable function">findById</span><span class="token operator">:</span> <span class="token punctuation">(</span>id<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> Space
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,15),z=p(`<ul><li><p>参数</p><ul><li><code>id</code>: 空间 <code>id</code></li></ul></li><li><p>返回值</p><ul><li><code>Space</code></li></ul></li><li><p>示例</p></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> subSpace <span class="token operator">=</span> space<span class="token punctuation">.</span><span class="token function">findById</span><span class="token punctuation">(</span><span class="token string">&quot;100010&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="getspacemode" tabindex="-1"><a class="header-anchor" href="#getspacemode" aria-hidden="true">#</a> getSpaceMode()</h3><p>根据空间 <code>id</code> 查找对应空间所启用的模式</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token function-variable function">getSpaceMode</span><span class="token operator">:</span> <span class="token punctuation">(</span>spaceId<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><p>参数</p><ul><li><code>spaceId</code>: 空间 <code>id</code></li></ul></li><li><p>返回值</p><ul><li>模式编码</li></ul></li><li><p>示例</p></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> curMode <span class="token operator">=</span> <span class="token keyword">await</span> space<span class="token punctuation">.</span><span class="token function">getSpaceMode</span><span class="token punctuation">(</span><span class="token string">&quot;100010&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="getspacepathby" tabindex="-1"><a class="header-anchor" href="#getspacepathby" aria-hidden="true">#</a> getSpacePathBy()</h3><p>根据目标空间 <code>id</code> 获取不包含自身空间的所有父级空间 <code>name</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token function-variable function">getSpacePathBy</span><span class="token operator">:</span> <span class="token punctuation">(</span>id<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> list<span class="token operator">:</span> SpaceNode<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> paths<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,10),E=p(`<ul><li><p>参数</p><ul><li><p><code>id</code>: 目标空间 <code>id</code></p></li><li><p><code>list</code>: 空间目录树</p></li><li><p><code>paths</code>: 保存的所有父级空间 <code>name</code> 数组</p></li></ul></li><li><p>示例</p></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>  <span class="token keyword">const</span> parentPaths <span class="token operator">=</span> space<span class="token punctuation">.</span><span class="token function">getSpacePathBy</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span> pathTree<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// return parentPaths : [&quot;yingli&quot;,&quot;46&quot;, &quot;office&quot;]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="xml" tabindex="-1"><a class="header-anchor" href="#xml" aria-hidden="true">#</a> xml()</h3><p>基于当前空间 <code>xpath</code> 路径生成 <code>xml</code> 字符串列表</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token function-variable function">xml</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><p>参数</p><ul><li>无</li></ul></li><li><p>返回值</p><ul><li><code>xml</code> 字符串列表</li></ul></li><li><p>示例</p></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// xpath: yingli/46</span>
<span class="token keyword">const</span> xmls <span class="token operator">=</span> space<span class="token punctuation">.</span><span class="token function">xml</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// return: [&quot;&lt;space name=&#39;46&#39; driver=&#39;office&#39; id=&#39;01014601&#39; zhname=&#39;46&#39;&gt;&lt;/space&gt;&quot;]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="事件" tabindex="-1"><a class="header-anchor" href="#事件" aria-hidden="true">#</a> 事件</h2><h3 id="addlistener" tabindex="-1"><a class="header-anchor" href="#addlistener" aria-hidden="true">#</a> addListener</h3><p>注册监听空间内所有指令下发的消息推送</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">addListener</span><span class="token punctuation">(</span>
  <span class="token function-variable function">callback</span><span class="token operator">:</span> <span class="token punctuation">(</span>body<span class="token operator">:</span> SocketResponseBody<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">,</span> 
  options<span class="token operator">?</span><span class="token operator">:</span> Partial<span class="token operator">&lt;</span>SocketConfig<span class="token operator">&gt;</span>
<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),j=n("p",null,"参数",-1),A=n("code",null,"callback",-1),F=n("ul",null,[n("li",null,[n("code",null,"body"),s(": "),n("code",null,"socket"),s(" 消息日志主体")])],-1),G=n("code",null,"options",-1),H=n("code",null,"socket",-1),J=n("li",null,[n("p",null,"返回值"),n("ul",null,[n("li",null,"无")])],-1),Q=n("li",null,[n("p",null,"示例")],-1),U=p(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> yingli46 <span class="token operator">=</span> <span class="token keyword">await</span> root<span class="token punctuation">.</span><span class="token function">search</span><span class="token punctuation">(</span><span class="token string">&quot;/yingli/46&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 监听yingli46楼所有的设备下发指令成功的消息</span>
yingli46<span class="token punctuation">.</span><span class="token function">addListener</span><span class="token punctuation">(</span><span class="token punctuation">(</span>body<span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>body<span class="token punctuation">.</span>messageType <span class="token operator">===</span> <span class="token string">&quot;device_property_notice&quot;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
       <span class="token comment">// 判定设备指令成功上报</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="removelistener" tabindex="-1"><a class="header-anchor" href="#removelistener" aria-hidden="true">#</a> removeListener</h3><p>移除空间日志消息监听</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">removeListener</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>示例</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> yingli46 <span class="token operator">=</span> <span class="token keyword">await</span> root<span class="token punctuation">.</span><span class="token function">search</span><span class="token punctuation">(</span><span class="token string">&quot;/yingli/46&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 监听yingli46楼所有的设备下发指令成功的消息</span>
yingli46<span class="token punctuation">.</span><span class="token function">addListener</span><span class="token punctuation">(</span><span class="token punctuation">(</span>body<span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token operator">...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 移除yingli46空间模块对象的设备指令消息监听</span>
yingli46<span class="token punctuation">.</span><span class="token function">removeListener</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function W(X,Y){const e=l("RouterLink"),o=l("Badge");return i(),u("div",null,[k,n("ul",null,[h,n("li",null,[n("p",null,[s("参考："),a(e,{to:"/digital/help/declare.html#spacemetadata"},{default:t(()=>[s("SpaceMetaData")]),_:1})])]),m]),v,n("div",g,[b,n("ul",null,[f,n("li",null,[n("p",null,[s("参考： "),a(e,{to:"/digital/help/declare.html#device"},{default:t(()=>[s("Device")]),_:1})])])])]),y,n("div",_,[x,n("ul",null,[w,n("li",null,[n("p",null,[s("参考： "),a(e,{to:"/digital/help/declare.html#mode"},{default:t(()=>[s("Mode")]),_:1})])])])]),S,n("div",q,[P,n("ul",null,[D,n("li",null,[n("p",null,[s("参考： "),a(e,{to:"/digital/help/declare.html#plan"},{default:t(()=>[s("Plan")]),_:1})])])])]),T,n("div",B,[L,n("ul",null,[K,n("li",null,[n("p",null,[s("参考： "),a(e,{to:"/digital/help/declare.html#rule"},{default:t(()=>[s("Rule")]),_:1})])])])]),O,n("div",M,[C,n("ul",null,[N,n("li",null,[n("p",null,[s("参考： "),a(e,{to:"/digital/help/declare.html#layout"},{default:t(()=>[s("Layout")]),_:1})])])])]),r(` ### chart

:::tip 返回当前空间下的指标sdk实例对象

- 类型：\`Chart\`

- 参考： [Chart](/digital/help/declare.md#chart)

::: `),R,n("blockquote",null,[n("p",null,[s("参考："),a(e,{to:"/digital/help/declare.html#spacetree"},{default:t(()=>[s("SpaceTree")]),_:1})])]),I,n("blockquote",null,[n("p",null,[s("参考："),a(e,{to:"/digital/help/declare.html#tacossdk"},{default:t(()=>[s("TacosSDK")]),_:1})])]),V,n("blockquote",null,[n("p",null,[s("参考："),a(e,{to:"/digital/help/declare.html#space"},{default:t(()=>[s("Space")]),_:1})])]),z,n("blockquote",null,[n("p",null,[s("参考："),a(e,{to:"/digital/help/declare.html#spacenode"},{default:t(()=>[s("SpaceNode")]),_:1})])]),E,n("blockquote",null,[n("p",null,[s("参考："),a(e,{to:"/digital/help/declare.html#socketresponsebody"},{default:t(()=>[s("SocketResponseBody")]),_:1}),s("; "),a(e,{to:"/digital/help/declare.html#socketconfig"},{default:t(()=>[s("SocketConfig")]),_:1})])]),n("ul",null,[n("li",null,[j,n("ul",null,[n("li",null,[n("p",null,[A,s(": 消息回调函数"),a(o,{text:"必传"})]),F]),n("li",null,[n("p",null,[G,s(": "),H,s(" 连接配置信息"),a(o,{text:"选传"})])])])]),J,Q]),U])}const $=c(d,[["render",W],["__file","space.html.vue"]]);export{$ as default};