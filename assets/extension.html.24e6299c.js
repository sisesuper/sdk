import{_ as p,r as e,o,c,a as s,b as n,d as i,w as l,e as a}from"./app.f18319b0.js";const u={},k=a(`<h1 id="扩展" tabindex="-1"><a class="header-anchor" href="#扩展" aria-hidden="true">#</a> 扩展</h1><p>数字空间 SDK 中的各个模块，均由内部的扩展机制开发而来</p><h3 id="定义-sdk-模块" tabindex="-1"><a class="header-anchor" href="#定义-sdk-模块" aria-hidden="true">#</a> 定义 SDK 模块</h3><p>tacos-sdk内部默认集成了 <code>space</code> 、 <code>device</code> 、 <code>mode</code> 、 <code>rule</code> 、 <code>plan</code> 、 <code>layout</code> 、 <code>chart</code> 等七个SDK模块，另外你也可以通过 <code>defineSDK</code> 来自定义SDK模块；</p><h4 id="step1-通过definesdk创建自定义模块" tabindex="-1"><a class="header-anchor" href="#step1-通过definesdk创建自定义模块" aria-hidden="true">#</a> step1：通过defineSDK创建自定义模块</h4><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineSDK <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@tslfe/tacos-sdk&quot;</span><span class="token punctuation">;</span>

<span class="token function">defineSDK</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">{</span>context<span class="token punctuation">,</span> props<span class="token punctuation">,</span> emitter<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> onDestroy <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">const</span> api <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">createRequest</span><span class="token punctuation">(</span>driverApi<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> base <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">createInstance</span><span class="token punctuation">(</span>BaseModule<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> list<span class="token operator">:</span> SpaceMetaData<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">toArray</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> spaceTree<span class="token operator">:</span> SpaceTree <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 根据ID查询
     * <span class="token keyword">@param</span> <span class="token parameter">id</span>
     * <span class="token keyword">@returns</span>
     */</span>
    <span class="token keyword">const</span> <span class="token function-variable function">findById</span> <span class="token operator">=</span> <span class="token punctuation">(</span>id<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> space <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> item<span class="token punctuation">.</span>id <span class="token operator">===</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>space<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">createInstance</span><span class="token punctuation">(</span>SpaceSDK<span class="token punctuation">,</span> <span class="token punctuation">{</span> list<span class="token operator">:</span> space <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 根据节点id获取不包含自身节点的所有父级节点name
     * <span class="token keyword">@param</span> <span class="token parameter">id</span> 目标节点id
     * <span class="token keyword">@param</span> <span class="token parameter">list</span> 查询树
     * <span class="token keyword">@param</span> <span class="token parameter">paths</span> 目标路径数组
     */</span>
    <span class="token keyword">const</span> getSpacePathBy <span class="token operator">=</span> <span class="token punctuation">(</span>id<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> list<span class="token operator">:</span> SpaceNode<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> paths<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>list<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> node <span class="token keyword">of</span> list<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>id <span class="token operator">===</span> id<span class="token punctuation">)</span> <span class="token keyword">return</span> paths<span class="token punctuation">;</span>
        paths<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token operator">?.</span>children<span class="token operator">?.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">const</span> subPaths <span class="token operator">=</span> <span class="token function">getSpacePathBy</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span> node<span class="token punctuation">.</span>children<span class="token punctuation">,</span> paths<span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>subPaths<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token keyword">return</span> subPaths<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        paths<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token operator">...</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
        list<span class="token punctuation">,</span>
        findById<span class="token punctuation">,</span>
        getSpacePathBy<span class="token punctuation">,</span>
        <span class="token operator">...</span>
    <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>defineSDK</code>创建的模块内部继承自<code>TacosSDK</code>对象 ，可通过<code>this</code>访问该对象上的方法</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">TacosSDK</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  version<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  interceptor<span class="token operator">:</span> <span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token keyword">keyof</span> Interceptor<span class="token operator">&gt;</span><span class="token punctuation">(</span>type<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> Interceptor<span class="token punctuation">[</span><span class="token constant">T</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  createInstance<span class="token operator">:</span> <span class="token operator">&lt;</span><span class="token constant">M</span> <span class="token keyword">extends</span> <span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">any</span><span class="token punctuation">,</span> <span class="token constant">P</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>
    sdkCreator<span class="token operator">:</span> <span class="token constant">M</span><span class="token punctuation">,</span>
    props<span class="token operator">?</span><span class="token operator">:</span> <span class="token constant">P</span><span class="token punctuation">,</span>
    extension<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">any</span>
  <span class="token punctuation">)</span> <span class="token operator">=&gt;</span> ReturnType<span class="token operator">&lt;</span><span class="token constant">M</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
  createRequest<span class="token operator">:</span> <span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">any</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>
    api<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span>
    config<span class="token operator">?</span><span class="token operator">:</span> AxiosRequestConfig
  <span class="token punctuation">)</span> <span class="token operator">=&gt;</span> ReturnType<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
  createSocket<span class="token operator">:</span> <span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token keyword">keyof</span> CreateSocketReturn<span class="token punctuation">,</span> <span class="token constant">K</span> <span class="token keyword">extends</span> <span class="token keyword">keyof</span> PayloadMap<span class="token operator">&gt;</span><span class="token punctuation">(</span>
    config<span class="token operator">:</span> CreateSocketConfig<span class="token punctuation">[</span><span class="token constant">T</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token function-variable function">callback</span><span class="token operator">:</span> <span class="token punctuation">(</span>res<span class="token operator">:</span> SocketResponseBody<span class="token operator">&lt;</span><span class="token constant">K</span><span class="token punctuation">,</span> PayloadMap<span class="token punctuation">[</span><span class="token constant">K</span><span class="token punctuation">]</span><span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">,</span>
    type<span class="token operator">?</span><span class="token operator">:</span> <span class="token constant">T</span>
  <span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
  <span class="token comment">// 销毁</span>
  <span class="token function-variable function">$destroy</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参数</p><ul><li><p><code>version</code>: <code>sdk</code> 模块版本号；</p></li><li><p><code>intercepter</code>: 创建局部的 <code>ajax</code> / <code>socket</code> 拦截器；</p></li><li><p><code>createInstance</code>: 创建 <code>sdk</code> 子类实例对象；</p></li><li><p><code>createRequest</code>: 创建请求 <code>api</code> 对象;</p></li><li><p><code>createSocket</code>: 创建 <code>socket</code> 对象；</p></li><li><p><code>$destory</code>: 清除 <code>sdk</code> 模块依赖的模块列表以及事件监听列表；</p></li></ul><h4 id="step2-创建sdk模块" tabindex="-1"><a class="header-anchor" href="#step2-创建sdk模块" aria-hidden="true">#</a> step2：创建sdk模块</h4><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>Tacos<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span><span class="token punctuation">(</span>core<span class="token punctuation">)</span><span class="token operator">=&gt;</span> core<span class="token punctuation">.</span><span class="token function">createInstacne</span><span class="token punctuation">(</span>SpaceSDK<span class="token punctuation">,</span> <span class="token punctuation">{</span> list <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>或</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token function">defineSDK</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">createInstacne</span><span class="token punctuation">(</span>SpaceSDK<span class="token punctuation">,</span> <span class="token punctuation">{</span> list <span class="token punctuation">}</span><span class="token punctuation">)</span>  
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="定义-api-模块" tabindex="-1"><a class="header-anchor" href="#定义-api-模块" aria-hidden="true">#</a> 定义 API 模块</h3>`,15),r=s("code",null,"defineApi",-1),d=s("code",null,"api",-1),v=a(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> Api <span class="token operator">=</span> <span class="token function">defineApi</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">getList</span><span class="token punctuation">(</span>xpath<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> spaceId<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token constant">URL</span><span class="token punctuation">.</span>getList<span class="token punctuation">,</span> <span class="token punctuation">{</span> xpath<span class="token punctuation">,</span> spaceId<span class="token operator">:</span> spaceId<span class="token operator">?.</span><span class="token function">jodefineSDKin</span><span class="token punctuation">(</span><span class="token string">&quot;,&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">getDrivers</span><span class="token punctuation">(</span>names<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token constant">URL</span><span class="token punctuation">.</span>getDrivers<span class="token punctuation">,</span> <span class="token punctuation">{</span> drivers<span class="token operator">:</span> names<span class="token operator">?.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&quot;,&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">execCommands</span><span class="token punctuation">(</span>params<span class="token operator">:</span> CommandParams<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token constant">URL</span><span class="token punctuation">.</span>execCommands<span class="token punctuation">,</span> params<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token operator">...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token operator">...</span>
<span class="token function">defineSDK</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">const</span> api <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">createRequest</span><span class="token punctuation">(</span>Api<span class="token punctuation">)</span><span class="token punctuation">;</span>
    api<span class="token punctuation">.</span><span class="token function">getList</span><span class="token punctuation">(</span><span class="token string">&#39;xxxx/xxx&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="扩展其它模块" tabindex="-1"><a class="header-anchor" href="#扩展其它模块" aria-hidden="true">#</a> 扩展其它模块</h3><p>通过 <code>defineExtension</code> 来扩展其他SDK模块</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> ModeSDK <span class="token operator">=</span> <span class="token function">defineExtension</span><span class="token punctuation">(</span>spaceSDK<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">{</span> props <span class="token punctuation">}</span><span class="token operator">:</span> <span class="token punctuation">{</span> props<span class="token operator">:</span> SpaceModuleProps <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> api <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">createRequest</span><span class="token punctuation">(</span>driverApi<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> list <span class="token operator">=</span> <span class="token function">toArray</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// const spaceIds = [...new Set(list.map((mode) =&gt; mode.spaceId))].join(&quot;,&quot;);</span>

    <span class="token comment">// eslint-disable-next-line @typescript-eslint/no-empty-function</span>
    <span class="token keyword">const</span> <span class="token function-variable function">update</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 模型切换
     * <span class="token keyword">@param</span> <span class="token parameter">name</span>
     */</span>
    <span class="token keyword">const</span> <span class="token function-variable function">toggle</span> <span class="token operator">=</span> <span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> spaceId <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span>list<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> item<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>list<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>spaceId<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> item<span class="token punctuation">.</span>type <span class="token operator">===</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          list<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>spaceId<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> list<span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token keyword">return</span> api<span class="token punctuation">.</span><span class="token function">toggleMode</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> spaceId<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      toggle<span class="token punctuation">,</span>
      update
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function m(b,y){const t=e("RouterLink");return o(),c("div",null,[k,s("p",null,[n("通过 "),r,n(" 自定义 "),d,n(" 模块对象, 其内部继承自"),i(t,{to:"/digital/help/declare.html#requestconfig"},{default:l(()=>[n("Request")]),_:1}),n("对象")]),v])}const g=p(u,[["render",m],["__file","extension.html.vue"]]);export{g as default};