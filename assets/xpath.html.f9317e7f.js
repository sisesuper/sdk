import{_ as t,r as a,o as c,c as r,a as e,b as i,d,w as o,e as n}from"./app.f18319b0.js";const u={},v=n('<h1 id="资源定位符" tabindex="-1"><a class="header-anchor" href="#资源定位符" aria-hidden="true">#</a> 资源定位符</h1><p>资源定位符又称 <code>tacos path</code> ，它是一种在 TacOS 中定位相关资源的 <code>uri</code> 路径。<code>tacos path</code> 描述了各类资源在 TacOS 中的位置，包括空间本身以及空间中的六要素信息。 开发者可以通过 <code>tacos path</code> 进行资源查询，或者直接通过 <code>tacos path</code> 对目标资源进行操控。</p><h3 id="路径" tabindex="-1"><a class="header-anchor" href="#路径" aria-hidden="true">#</a> 路径</h3><p>在<code>tacos path</code>中路径分为：绝对路径（<code>/</code>）和相对路径（<code>./</code>）两种</p><ul><li>绝对路径：指从空间目录的最顶层开始匹配</li><li>相对路径：指从当前所在的空间路径开始匹配</li></ul><h3 id="格式" tabindex="-1"><a class="header-anchor" href="#格式" aria-hidden="true">#</a> 格式</h3><p>按照<code>tacos path</code>的资源类型可分为空间和六要素两类，空间的 <code>path</code> 由 <em><strong>路径规则</strong></em> + <em><strong>空间名称</strong></em> 组成，六要素的 <code>path</code> 由 <em><strong>路径规则</strong></em> + <em><strong>空间名称</strong></em> + <em><strong>关键字</strong></em> + <em><strong>匹配规则</strong></em> 组成</p>',7),m=e("li",null,[e("p",null,[i("空间: "),e("code",null,"[.]/spacename[/spacename][/query]")])],-1),p=e("p",null,"六要素:",-1),g=e("ul",null,[e("li",null,[e("p",null,[e("code",null,"/spacename[/spacename]/keywords/query")])]),e("li",null,[e("p",null,[e("code",null,".[/spacename]/keywords/query")])])],-1),h={href:"/digital/essentials/xpath.html#%E5%85%B3%E9%94%AE%E5%AD%97",target:"_blank",rel:"noopener noreferrer"},b={href:"/digital/essentials/xpath.html#%E5%8C%B9%E9%85%8D",target:"_blank",rel:"noopener noreferrer"},x=n(`<h3 id="关键字" tabindex="-1"><a class="header-anchor" href="#关键字" aria-hidden="true">#</a> 关键字</h3><p>在<code>tacos path</code>中用 <em><strong>关键字</strong></em> 来区分对应的资源类型</p><ul><li><p>布局：<code>layouts</code></p></li><li><p>设备：<code>devices</code></p></li><li><p>规则：<code>rules</code></p></li><li><p>计划：<code>plans</code></p></li><li><p>模式：<code>modes</code></p></li></ul><h3 id="匹配" tabindex="-1"><a class="header-anchor" href="#匹配" aria-hidden="true">#</a> 匹配</h3><ul><li><p>通配符：<code>*</code></p></li><li><p>类型： <em><strong>设备驱动名称</strong></em> 或 <em><strong>场景类型</strong></em> ，eg: <code>light</code>、<code>window</code>、<code>office</code>等</p></li><li><p>筛选器：<code>tacos path</code>的筛选器与<code>xpath</code>的属性匹配规则一致</p></li></ul><h3 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h3><p>假设目前存在如下这样的空间名称结构</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>重庆市大融城英利大楼
    1楼
    2楼
    3楼
    ...
    46楼
        1号会议室(类型：会议室)
            灯
            电动窗
            电动窗帘
            门
        2号会议室(类型：会议室)
    47楼
    48楼
    49楼
    50楼
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 TacOS 数字空间中对应的结构名称为</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yingli
    1
    2
    3
    ...
    46
        meetingroom01（type: meetingroom）
            light
            window
            curtain
            door
        meetingroom02（type: meetingroom）
    47
    48
    49
    50
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),_=n(`<li><p>eg1: 查询空间</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>大融城英利46楼: /yingli/46
大融城英利46楼的所有空间: /yingli/46/*
大融城英利46楼的所有会议室: /yingli/46/*[@type=meetingroom]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>`,1),y=n(`<p>eg2: 查询设备</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>大融城英利46楼所有设备: /yingli/46/devices/*
大融城英利46楼所有灯：/yingli/46/device/light 或 /yingli/46/devices/*[@driver=light]
大融城英利46楼所有电动门：/yingli/46/devices/door
大融城英利46楼1号会议室靠西边的电动窗帘：/yingli/46/meetromm01/devices/curtain[@direction=west]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),f=n(`<li><p>eg3: 查询规则</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>大融城英利46楼上班规则: /yingli/46/rules/onWork
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>eg4: 查询计划</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>大融城英利46楼上班计划: /yingli/46/plans/onWork
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>eg5: 查询模式</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>大融城英利46楼上班模式: /yingli/46/modes/onWork
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>eg6: 查询布局</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>大融城英利46楼 glb 类型的布局: /yingli/46/layouts/*[@type=glb]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>`,4);function k(w,E){const l=a("ExternalLinkIcon"),s=a("RouterLink");return c(),r("div",null,[v,e("ul",null,[m,e("li",null,[p,g,e("blockquote",null,[e("p",null,[i("注：带方括号 [ ] 表示为可选项; spacename 表示空间名称; "),e("a",h,[i("keywords"),d(l)]),i(" 表示关键字; "),e("a",b,[i("query"),d(l)]),i(" 表示匹配规则")])])])]),x,e("ul",null,[_,e("li",null,[y,e("blockquote",null,[e("p",null,[i("设备的类型和更多可匹配属性可点击"),d(s,{to:"/digital/driver/"},{default:o(()=>[i("Driver")]),_:1}),i("查看")])])]),f])])}const B=t(u,[["render",k],["__file","xpath.html.vue"]]);export{B as default};
