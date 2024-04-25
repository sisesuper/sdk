import{_ as o,r as i,o as r,c as a,a as e,b as l,d as n,e as s}from"./app.f18319b0.js";const c={},d=s('<h1 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h1><h3 id="关于数字孪生" tabindex="-1"><a class="header-anchor" href="#关于数字孪生" aria-hidden="true">#</a> 关于数字孪生</h3><blockquote><p><em><strong>数字孪生</strong></em> 在城市操作系统体系中，依托于 TacOS <em><strong>数字空间</strong></em> 提供的基础能力，在物理世界与虚拟场景之间搭建了一座互通的桥梁。</p></blockquote><p>本文档以 <em><strong>数字孪生</strong></em> SDK 为主，详细介绍 SDK 的各项能力，以及如何使用 SDK 进行各类应用系统的功能开发。目前孪生 SDK 内部通过与 <em><strong>数字空间</strong></em> 的无缝集成，已实现三维孪生场景与真实空间的双向联动。</p><h3 id="sdk-具备的能力" tabindex="-1"><a class="header-anchor" href="#sdk-具备的能力" aria-hidden="true">#</a> SDK 具备的能力</h3><ul><li>三维操作： <ul><li>对三维模型的状态进行操控：模型颜色、位置、大小、透明度、旋转、显示、隐藏等。</li><li>在三维场景中动态增加新模型，或删除已存在的模型。</li><li>三维相机操控：<code>flyTo</code>、<code>travel</code>、<code>fit</code>等</li><li>三维图层管理：图层显示、隐藏，根据图层类型过滤等</li><li>三维场景模拟真实环境或三维特效：白天模式、夜晚模式、下雨、下雪、热力图等</li></ul></li><li>空间联动： <ul><li>SDK 在与 TacOS 数字空间建立连接后，已自动完成物理空间和三维虚拟场景的双向联动</li><li>通过 SDK 提供的相应方法，直接对数字空间和六要素，包括对设备进行操作。</li><li>对空间的事件，设备状态变化事件等进行订阅</li></ul></li><li>多渲染选择： <ul><li>SDK 可在 <code>WebGL</code> 和 <code>Unity</code> 两种渲染方式之间自由选择</li></ul></li><li>指标数据： <ul><li>SDK 依托于 TacOS 数据分析一体机的能力，可加载当前空间下数据分析一体机输出的看板或指标图表。</li></ul></li></ul><h3 id="如何使用-sdk" tabindex="-1"><a class="header-anchor" href="#如何使用-sdk" aria-hidden="true">#</a> 如何使用 SDK</h3>',7),u=e("strong",null,"step1",-1),h={href:"/digital/start/introduction.html#%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8-sdk",target:"_blank",rel:"noopener noreferrer"},_=e("blockquote",null,[e("p",null,"孪生 SDK 可脱离于数字空间独立使用")],-1),S=e("li",null,[e("strong",null,"step2"),l(": 搭建空间场景 "),e("ul",null,[e("li",null,"三维空间场景的搭建，可使用 TacOS 提供的 Model Studio 模型搭建工具。")])],-1),m=e("strong",null,"step3",-1),f={href:"/three/start/quick-start.html#%E4%BD%BF%E7%94%A8",target:"_blank",rel:"noopener noreferrer"};function p(D,k){const t=i("ExternalLinkIcon");return r(),a("div",null,[d,e("ul",null,[e("li",null,[u,l(": 初始化数字空间 "),e("ul",null,[e("li",null,[l("点击 "),e("a",h,[l("准备工作"),n(t)]),l(" 查看数字空间的初始化流程")])])])]),_,e("ul",null,[S,e("li",null,[m,l(": 使用 SDK "),e("ul",null,[e("li",null,[l("点击 "),e("a",f,[l("快速上手"),n(t)]),l(" 查看 SDK 使用的详细步骤。")])])])])])}const K=o(c,[["render",p],["__file","introduction.html.vue"]]);export{K as default};