import{_ as n,r as i,o,c as r,f as s,a as e,b as l,d as a,e as c}from"./app.f18319b0.js";const d={},h=c('<h1 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h1><h3 id="关于-数字空间-digital-space" tabindex="-1"><a class="header-anchor" href="#关于-数字空间-digital-space" aria-hidden="true">#</a> 关于 数字空间(Digital Space)</h3><p>Digital Space 是一项平台即服务（PaaS）产品/服务，它能够创建基于整个环境的数字模型，这些模型可能是建筑、桥梁、能源环控的网络、农场、燃气站场等。这些数字模型通过物联传感设备、获得洞察力、以及反向控制能力，以改善模型空间的合理化运行，推动产品改进、运营优化、成本降低和客户体验的改善。</p><p>利用基于 Digital Space 的领域专业知识，可以快速构建自定义数字空间的解决方案，支持：</p><ul><li>为任何环境建模，基于 Certified by TacOS 的 IoT 产品库，选配设备，形成自定义数字空间的硬件集成方案</li><li>在选定硬件方案的基础上，通过数字空间模板，选配空间 4 要素（指标、规则、计划、模式），形成空间运行方案</li><li>连接 IoT 设备，基于 Digital Space 内置的设备与空间指标，获得空间洞见</li><li>通过指标驱动，对空间的运行规则、计划进行调节、以改善空间运行</li><li>该方案可保存为自定义数字空间模板，在实际项目中可开箱即用，同类数字空间可创建为该模板的一个实例</li><li>空间实例，可选择接入 TacOS Cloud，以实现设备驱动的远程 OTA、通过 Cloud 端数据分析及 AI 能力帮助边缘端改善数字空间运行</li></ul><hr>',6),u=e("p",null,"本文档以数字空间 SDK 为主，详细介绍了 SDK 的各项能力，以及如何使用 SDK 进行数字空间的联动。",-1),_=e("h3",{id:"sdk-具备的能力",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#sdk-具备的能力","aria-hidden":"true"},"#"),l(" SDK 具备的能力")],-1),p={href:"/digital/essentials/xpath.html#%E8%B5%84%E6%BA%90%E5%AE%9A%E4%BD%8D%E7%AC%A6",target:"_blank",rel:"noopener noreferrer"},S=e("li",null,"六要素联动：在获取到目标资源后，通过 SDK 提供的相应 API 可直接对资源进行操作，eg: 模式切换、设备操作等。",-1),D=e("li",null,"事件监听：通过 SDK 可对空间产生的事件，设备发生的状态变更等进行精准订阅。",-1),f=e("li",null,"自定义扩展：目前 SDK 设计为横向扩展的插件系统，按照插件扩展的方式，可以对 SDK 模型进行任意组装和扩展。",-1),g=e("h3",{id:"如何使用-sdk",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#如何使用-sdk","aria-hidden":"true"},"#"),l(" 如何使用 SDK")],-1),k=e("li",null,[e("p",null,[e("strong",null,"step1"),l(": 准备工作")]),e("ul",null,[e("li",null,[e("p",null,"通过 TacOS 提供的 Space Stuido、空间管理产品对空间进行初始化。"),e("blockquote",null,[e("p",null,"详细操作手册咨询 TacOS 对应的产品和实施人员")])])])],-1),m=e("p",null,[e("strong",null,"step2"),l(": 使用 SDK")],-1),K={href:"/digital/start/quick-start.html#%E4%BD%BF%E7%94%A8",target:"_blank",rel:"noopener noreferrer"};function x(E,b){const t=i("ExternalLinkIcon");return o(),r("div",null,[h,s(" > 数字空间一种创新型的定义物理空间的方式（数字空间的六要素包括：布局、设备、规则、计划、模式、指标） "),u,_,e("ul",null,[e("li",null,[l("资源查找：依托于 TacOS 数字空间的强大能力，SDK 可通过 "),e("a",p,[l("tacos path"),a(t)]),l(" 对资源进行快速检索和定位。")]),S,D,f]),g,e("ul",null,[k,e("li",null,[m,e("ul",null,[e("li",null,[l("点击 "),e("a",K,[l("快速上手"),a(t)]),l(" 查看 SDK 使用的详细流程。")])])])])])}const T=n(d,[["render",x],["__file","introduction.html.vue"]]);export{T as default};
