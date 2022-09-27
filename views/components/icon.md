# Icon 图标

### 介绍

可支持多种 字体图标平台的图标集，可以通过 Icon 组件使用。

<!--@include: ./tips/introduce.md-->

## 代码演示

### 基本用法

`Icon` 的 `type` 属性支持传入图标名称。

```vue
<template>
    <kui-icons type="heart"></kui-icons>
    <kui-icons type="heart-o"></kui-icons>
</template>
```

### 图标颜色

`Icon` 的 `color` 属性用来设置图标的颜色。

```vue
<template>
    <kui-icons type="heart" color="red"></kui-icons>
    <kui-icons type="heart-o" color="blue"></kui-icons>
</template>
```

### 图标大小

`Icon` 的 `size` 属性用来设置图标的尺寸大小，默认单位为 `rpx`。

```vue
<template>
    <kui-icons type="heart" :size="20"></kui-icons>
    <kui-icons type="heart" :size="30"></kui-icons>
	<kui-icons type="heart" :size="40"></kui-icons>
</template>
```

### 图标粗细

`Icon` 的 `weight` 属性用来设置图标的尺寸大小。

```vue
<template>
    <kui-icons type="heart-o" :weight="100"></kui-icons>
    <kui-icons type="heart-o" :weight="600"></kui-icons>
</template>
```

### 动态图标 | 动效组件方式

可以通过 <a href="animation">Animation 动效组件</a> 实现图标的动画效果

```vue
<template>
    <kui-animation name="rotate-center" :duration="1" runing infinite>
        <kui-icons type="spinner3"></kui-icons>
    </kui-animation>
    <kui-animation name="rotate-center" :duration="1" runing infinite>
        <kui-icons type="spinner8"></kui-icons>
    </kui-animation>
    <kui-animation name="rotate-center" :duration="1" runing infinite>
        <kui-icons type="spinner9"></kui-icons>
    </kui-animation>
    <kui-animation name="rotate-center" :duration="1" runing infinite>
        <kui-icons type="spinner11"></kui-icons>
    </kui-animation>
    <kui-animation name="rotate-center" :duration="1" runing infinite>
        <kui-icons type="spinner6"></kui-icons>
    </kui-animation>
</template>
```

### 动态图标 | class动画方式

可以通过 class 设置组件库内置动画效果，为了多端兼容性考虑建议在图标组件外层加一个 `view` 标签加 class 动画效果

```vue
<template>
    <view class="kui-animate-bounce">
        <kui-icons type="download"></kui-icons>
    </view>
    <view class="kui-animate-ping">
        <kui-icons type="star"></kui-icons>
    </view>
    <view class="kui-animate-pulse">
        <kui-icons type="heart"></kui-icons>
    </view>
</template>
```

### 自定义图标 (不建议使用)

如果需要在现有 Icon 的基础上使用更多图标，可以引入第三方 iconfont 对应的字体文件和 CSS 文件，之后就可以在 Icon 组件中直接使用。

> 方案一 引入 [iconfont](https://www.iconfont.cn/)   推荐此方案

第一步：首先在 [iconfont](https://www.iconfont.cn/) 生成你自定义的Icon文件下载存放至本地项目  [详细使用说明](https://www.iconfont.cn/help/detail?spm=a313x.7781069.1998910419.d8d11a391&helptype=code)

``` bash
/assets/font/demo.css
/assets/font/demo_index.html
/assets/font/iconfont.css
/assets/font/iconfont.js
/assets/font/iconfont.json
/assets/font/iconfont.ttf
/assets/font/iconfont.woff
/assets/font/iconfont.woff2
```

第二步：项目入口文件 main.js 引用 `iconfont.css`


``` javascript
import './assets/font/iconfont.css';
```

第三步：

```html
<!-- 
  指定类名为默认 iconfont
  prefix 指定默认 icon
  name 值根据 iconfont.css 中值对应填写 
-->
<kui-icons prefix="icon" name="close" />
```



> 方案二 第三方自定义字体库

```css
/* 引入第三方或自定义的字体图标样式 */
@font-face {
  font-family: 'my-icon';
  src: url('./my-icon.ttf') format('truetype');
}

.my-icon {
  font-family: 'my-icon';
}

.my-icon-extra::before {
  content: '\e626';
}
```

```html
<!-- 
  font-class-name 指定类名为默认 my-icon
  class-prefix 指定默认 my-icon
-->
<kui-icons font-class-name="my-icon" prefix="my-icon" name="extra" />

```

## API

### Props

| 参数            | 说明                                    | 类型             | 默认值           |
|-----------------|-----------------------------------------|------------------|------------------|
| type            | 图标名称                                | String           | -                |
| color           | 图标颜色                                | String           | -                |
| size            | 图标大小                                | Number            | -                |
| weight          | 图标粗细                                | Number            | 100                |
| mode`通用属性`   | 页面模式                                | String            | `light`         |
| prefix          | 图标平台                                | String            | `ico`           |
| content`svg2base64`有效         | 图标内容                 | String            | -                |
| top            | top相对位置                                | Number            | 0                |
| left            | left相对位置                                | Number            | 0                |
| theme            | 图标主题色，参考 <a href="/guide/theme">主题</a>                                | String            | -                |
| class | 自定义 icon 基础类名                | String           | - |

### Mode 有效值
| 值 | 说明 |
|----|------|
| light | 明亮模式 |
| dark | 暗黑模式 |

### Prefix 有效值
| 值 | 说明 |
|----|------|
| remix | [remixicon](http://www.remixicon.cn) |
| boot | [BootIcon](https://icons.bootcss.com) |
| astic | [fontastic](https://app.fontastic.me) |
| svg2base64 | base64格式的svg图标代码 |

### Events

| 事件名 | 说明           | 回调参数     |
|--------|----------------|--------------|
| click  | 点击图标时触发 | event: Event |
