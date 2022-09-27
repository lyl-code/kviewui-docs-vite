# Skeleton 骨架屏

### 介绍

在页面上待加载区域填充灰色的占位图，用来展示界面加载过程的过渡效果。组件提供了`标题`，`段落`，`头像`，`卡片`等场景骨架，具体可参考下面代码演示部分。

<!--@include: ./tips/introduce.md-->

## 代码演示

### 基本用法

```vue
<template>
    <kui-cell-group title="基本用法">
        <kui-skeleton></kui-skeleton>
    </kui-cell-group>
</template>
```

### 显示标题

通过组件提供的 `title` 属性可以展示骨架中的标题部分。

```vue
<template>
    <kui-cell-group title="显示标题">
        <kui-skeleton title></kui-skeleton>
    </kui-cell-group>
</template>
```

### 自定义段落

通过组件的 `rows` 属性可以设置骨架的段落行数，`rows-width` 属性可以设置每一行的宽度。

```vue
<template>
    <kui-cell-group title="自定义段落">
        <kui-skeleton title :rows="3" :rows-width="['100px', '150px', '50px']"></kui-skeleton>
    </kui-cell-group>
</template>
```

### 段落圆角

通过组件的 `rows-round` 属性可以设置段落边框圆角。

```vue
<template>
    <kui-cell-group title="段落圆角">
        <kui-skeleton title rows-round></kui-skeleton>
    </kui-cell-group>
</template>
```

### 显示头像

通过组件的 `avatar` 属性可以展示骨架屏内置的头像区域。

```vue
<template>
    <kui-cell-group title="显示头像">
        <kui-skeleton title avatar></kui-skeleton>
    </kui-cell-group>
</template>
```

### 显示卡片

通过组件的 `card` 属性可以展示骨架屏内置的卡片区域。

```vue
<template>
    <kui-cell-group title="显示卡片">
        <kui-skeleton card title avatar></kui-skeleton>
    </kui-cell-group>
</template>
```

### 自定义布局

通过组件的 `card` `title` `avatar` 属性可以自由组合显示自定义布局骨架。

```vue
<template>
    <kui-cell-group title="自定义布局">
        <view class="kui-flex kui-justify-between kui-w-full">
            <kui-skeleton card title avatar></kui-skeleton>
            <view class="kui-mx-2"></view>
            <kui-skeleton card title avatar></kui-skeleton>
        </view>
    </kui-cell-group>
</template>
```

### 关闭动画

通过组件的 `animate` 属性可以控制是否显示骨架加载动画。

```vue
<template>
    <kui-cell-group title="关闭动画">
        <kui-skeleton title avatar :animate="false"></kui-skeleton>
    </kui-cell-group>
</template>
```

### 动画类型

组件开启动画时通过组件的 `animate-type` 属性可以设置动画类型，支持水波动画和闪烁动画，默认为水波动画。

```vue
<template>
    <kui-cell-group title="闪烁动画">
        <kui-skeleton title avatar animate-type="flash"></kui-skeleton>
    </kui-cell-group>
    <kui-cell-group title="水波动画">
        <kui-skeleton title avatar animate-type="backops"></kui-skeleton>
    </kui-cell-group>
</template>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值
|----- | ----- | ----- | -----
| loading | 是否开启骨架加载 | Boolean | `true`
| width | 宽度 | String | -
| height | 高度 | String | -
| title | 是否展示标题区 | Boolean | `false`
| avatar | 是否展示头像区 | Boolean | `false`
| card | 是否展示卡片区 | Boolean | `false`
| title-width | 标题宽度 | String | -
| avatar-size | 头像大小 | String | -
| avatar-shape`通用属性` | 头像形状，可选值为 `square` `round` | String | `round`
| rows | 段落行数 | Number | `3`
| rows-width | 每行宽度 | String/Array | ''
| rows-round | 每行是否为圆角 | Boolean | `false`
| card-height | 卡片高度 | String | -
| animate | 是否开启加载动画 | Boolean | `true`
| animate-type | 动画方式，可选值为 `backops` `flash` | String | `backops`
| background-color | 骨架背景色 | String | -

### Slots
| 值 | 说明
|----|------
| default | 骨架结束后的内容