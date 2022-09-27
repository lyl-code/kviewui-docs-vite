# Button 按钮

### 介绍

按钮用于触发一个操作，如提交表单。

<!--@include: ./tips/introduce.md-->

## 代码演示

### 主题色按钮

按钮支持 `primary`、`info`、`warning`、`danger`、`success` 五种主题类型，默认为 ''。通过 `background-color` 属性可以设置按钮背景色，通过 `text-color` 属性可以设置按钮文字颜色。

```vue
<template>
    <kui-button type="primary">主要按钮</kui-button>
    <kui-button type="info">信息按钮</kui-button>
    <kui-button>默认按钮</kui-button>
    <kui-button type="success">成功按钮</kui-button>
    <kui-button type="warning">警告按钮</kui-button>
    <kui-button type="danger">危险按钮</kui-button>
    <kui-button type="danger" background-color="orange" text-color="black">自定义按钮</kui-button>
</template>
```

### 文本按钮

文本按钮分为外边框按钮和纯文字按钮两种类型，
通过 `text` 属性将按钮设置为外边框按钮，按钮的文字为按钮颜色，背景为白色。
通过 `outline` 属性可以去掉按钮边框，此时按钮即可为纯文字按钮。

```vue
<template>
    <kui-button type="primary" outline text>外边框按钮</kui-button>
    <kui-button type="primary" text>纯文字按钮</kui-button>
</template>
```

### 禁用状态

通过 `disabled` 属性来禁用按钮，禁用状态下按钮不可点击。

```vue
<template>
    <kui-button type="info" disabled>禁用状态</kui-button>
    <kui-button type="primary" outline text disabled>禁用状态</kui-button>
    <kui-button type="danger" outline text disabled>禁用状态</kui-button>
</template>
```

### 按钮形状

通过 `shape` 属性设置按钮形状，支持方形按钮，胶囊按钮和圆形按钮，默认为胶囊按钮。可通过 `radius` 属性自定义按钮圆角大小

```vue
<template>
    <kui-button type="primary" shape="square">方形按钮</kui-button>
    <kui-button type="warning" shape="capsule">胶囊按钮</kui-button>
    <kui-button type="primary" shape="round">圆形按钮</kui-button>
    <kui-button type="danger" shape="square" :radius="30">自定义圆角大小</kui-button>
</template>
```
### 加载状态

通过 `loading` 属性设置按钮状态为加载中

```vue
<template>
    <kui-button type="primary" loading></kui-button>
    <kui-button type="info" loading>加载中...</kui-button>
</template>
```

### 图标按钮

通过 `icon` 属性可设置图标按钮图标类型，图标类型可以参考图标组件的 `type` 属性值

```vue
<template>
    <kui-button type="warning" outline text icon="thumbs-up"></kui-button>
    <kui-button type="primary" icon="thumbs-o-up">点赞</kui-button>
</template>
```

### 按钮大小

支持 `large`、`normal`、`small`、`mini` 四种大小，默认为 `normal`。

```vue
<template>
    <kui-button type="primary" size="large">大号按钮</kui-button>
    <kui-button type="primary">普通按钮</kui-button>
    <kui-button type="primary" size="small">小型按钮</kui-button>
    <kui-button type="primary" size="mini">迷你按钮</kui-button>
</template>
```

### 块级元素

按钮在默认情况下为行内块级元素，通过 `block` 属性可以将按钮的元素类型设置为块级元素，常用来实现通栏按钮。

```vue
<template>
  <kui-button type="primary" size="normal" block>块级按钮</kui-button>
</template>
```

### 按钮阴影

通过 `shadow` 可以显示按钮阴影，通过 `shadow-size` 属性可以设置阴影大小，支持 `sm` `md` `lg` `xl` `2xl` 五种大小。

```vue
<template>
    <kui-button type="primary" shadow shadow-size="lg">主要按钮</kui-button>
    <kui-button type="info" shadow shadow-size="lg">信息按钮</kui-button>
    <kui-button shadow shadow-size="lg">默认按钮</kui-button>
    <kui-button type="success" shadow shadow-size="xl">成功按钮</kui-button>
    <kui-button type="warning" shadow shadow-size="xl">警告按钮</kui-button>
    <kui-button type="danger" shadow shadow-size="xl">危险按钮</kui-button>
</template>
```

### 自定义颜色

通过 background-color 属性可以自定义按钮的背景色。通过 text-color 属性可以自定义按钮的文本颜色。通过 gradient 属性可以设置按钮主题色渐变，具体可参考主题色生成原理。

```vue
<template>
    <kui-button background-color="#7232dd">单色按钮</kui-button>
    <kui-button background-color="#7232dd" text>单色按钮</kui-button>
    <kui-button background-color="warning" gradient>渐变色按钮</kui-button>
</template>
```

## API

### Props

| 参数     | 说明                                                         | 类型    | 默认值    |
| -------- | ------------------------------------------------------------ | ------- | --------- |
| type     | 按钮类型，可选值为 `primary` `info` `warning` `danger` `success` | String  |  |
| text     | 是否设置为文本按钮                                            | Boolean | `false`  |
| outline  | 是否设置外边框（文本按钮有效）                                 | Boolean | `false`  |
| size     | 按钮尺寸，可选值为 `large` `small` `mini`                        | String  | `normal`  |
| shape    | 按钮形状，可选值为 `square` `capsule` `round`                    | String  | `capsule` |
| background-color | 按钮背景颜色                  | String  |          |
| text-color | 按钮文本颜色                    | String  |  |
| disabled | 是否禁用按钮                                                 | Boolean | `false`   |
| block    | 是否为块级元素                                               | Boolean | `false`   |
| icon     | 按钮图标，同 <a href="icons">Icon 图标</a> 组件 type 属性                             | String  | -         |
| loading  | 按钮 loading 状态                                            | Boolean | `false`   |
| loading-type  | 按钮 loading 类型，可参考 <a href="spin">Spin 加载动画</a>组件 |String | `false`   |
| shadow  | 是否开启按钮阴影                                            | Boolean | `false`   |
| shadow-size | 按钮阴影大小，可选值为 `sm` `md` `lg` `xl` `2xl`        | String |    |
| throttle | 防抖节流，可选值为 `0` `1` `2`        | Number |  `0`  |
| mode`通用属性`      | 页面模式，可选值为 `light` `dark`                   | String  | `light`         |

### Throttle 有效值
| 值 | 说明 |
| ----- | ----- |
| 0 | 关闭防抖节流 |
| 1 | 开启节流 |
| 2 | 开启防抖 |

### Mode 有效值
| 值 | 说明 |
|----|------|
| light | 明亮模式 |
| dark | 暗黑模式 |

### Props 特殊说明

该组件支持uniapp按钮组件所有属性，具体组件属性支持可以参考 <a href="https://uniapp.dcloud.net.cn/component/button.html">uniapp 按钮组件</a>


### Events

| 事件名 | 说明           | 回调参数          |
| ------ | -------------- | ----------------- |
| click  | 点击按钮时触发 | event: MouseEvent |

### Events 特殊说明

该组件支持uniapp按钮组件的 `getphonenumber` `getuserinfo` `error` `opensetting` `launchapp` 五种事件，具体组件事件支持可以参考 <a href="https://uniapp.dcloud.net.cn/component/button.html#open-type-%E6%9C%89%E6%95%88%E5%80%BC">uniapp 按钮组件</a>
