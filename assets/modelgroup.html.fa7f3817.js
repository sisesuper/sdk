import{_ as t,r as a,o as r,c as i,a as o,b as e,d as c,w as s,f as d,e as l}from"./app.f18319b0.js";const m={},p=o("h1",{id:"modelgroup",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#modelgroup","aria-hidden":"true"},"#"),e(" ModelGroup")],-1),u=o("code",null,"ModelGroup",-1),h=l('<h2 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h2><h3 id="visible" tabindex="-1"><a class="header-anchor" href="#visible" aria-hidden="true">#</a> visible</h3><div class="custom-container tip"><p class="custom-container-title">模型 显示 / 隐藏</p><ul><li>类型: <code>boolean</code></li></ul></div><h3 id="color" tabindex="-1"><a class="header-anchor" href="#color" aria-hidden="true">#</a> color</h3><div class="custom-container tip"><p class="custom-container-title">模型颜色</p><ul><li>类型: <code>string</code></li></ul></div><h3 id="opacity" tabindex="-1"><a class="header-anchor" href="#opacity" aria-hidden="true">#</a> opacity</h3><div class="custom-container tip"><p class="custom-container-title">模型透明度</p><ul><li>类型: <code>number</code></li></ul></div><h3 id="disabled" tabindex="-1"><a class="header-anchor" href="#disabled" aria-hidden="true">#</a> disabled</h3><div class="custom-container tip"><p class="custom-container-title">模型是否禁用</p><ul><li>类型: <code>boolean</code></li></ul></div>',9);function v(_,f){const n=a("RouterLink");return r(),i("div",null,[p,o("p",null,[u,e(" 继承自 "),c(n,{to:"/three/help/declare.html#dtmodelgroup"},{default:s(()=>[e("DTModelGroup")]),_:1}),e(" ，模型组对象，用于表示多个模型，并包含对所有模型的操作。")]),h,d(` ## 方法

### dispose( )

销毁模型

\`\`\`ts
function dispose: async () => Promise<void>
\`\`\`

- 参数

  - 无

- 返回值

  - \`Promise<void>\`

- 示例

\`\`\`ts
...省略获取meta实例的步骤...

const rootComponent = meta.component;
const componentGroup = rootComponent.search("Type");
const modelGroup = componentGroup.model;
modelGroup.dispose();
\`\`\`

### removeFromParent( )

从父模型中移除

\`\`\`ts
function removeFromParent: async () => Promise<void>
\`\`\`

- 参数

  - 无

- 返回值

  - \`Promise<void>\`

- 示例

\`\`\`ts
...省略获取meta实例的步骤...

const rootComponent = meta.component;
const componentGroup = rootComponent.search("Type");
componentGroup.removeFromParent();
\`\`\` `)])}const x=t(m,[["render",v],["__file","modelgroup.html.vue"]]);export{x as default};
