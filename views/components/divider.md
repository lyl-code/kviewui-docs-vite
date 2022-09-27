# Divider 分割线

### 介绍
    
用于将内容分隔为多个区域。

<!--@include: ./tips/introduce.md-->

## 代码演示

### 基本用法

默认渲染一条水平分割线。

```vue
<template>
    <kui-cell-group title="基本用法">
        <kui-divider></kui-divider>
    </kui-cell-group>
</template>
```

### 虚线

通过 `dashed` 属性使分割线渲染为虚线。

```vue
<template>
    <kui-cell-group title="虚线">
        <kui-divider dashed></kui-divider>
    </kui-cell-group>
</template>
```

### 缩进

通过 `inset` 属性可以设置分割线的缩进长度，通过 `margin` 属性可以设置分割线的外间距，通过 `inset-direction` 属性可以设置分割线缩进的方向。

```vue
<template>
    <kui-cell-group title="缩进">
        <kui-divider inset="100rpx"></kui-divider>
        <kui-divider inset="60rpx" margin="64rpx 0"></kui-divider>
        <kui-divider inset="100rpx" inset-direction="end" margin="64rpx 0"></kui-divider>
    </kui-cell-group>
</template>
```

### 垂直分割线

通过 `direction` 属性可以设置分割线为垂直方向。

```vue
<template>
    <kui-cell-group title="垂直分割线">
        <view class="kui-flex kui-justify-center kui-items-center kui-h-full">
            <kui-text>文本</kui-text>
            <kui-divider direction="column"></kui-divider>
            <kui-text>文本</kui-text>
            <kui-divider direction="column"></kui-divider>
            <kui-text>文本</kui-text>
        </view>
    </kui-cell-group>
</template>
```

### 内容描述

通过组件的默认插槽可以插入分割线自定义内容。

```vue
<template>
    <kui-cell-group title="带内容描述的分割线">
        <kui-divider>
            <kui-text>文本描述</kui-text>
        </kui-divider>
    </kui-cell-group>
    <kui-cell-group title="非文本内容">
        <kui-divider>
            <kui-icons type="heart" theme="danger"></kui-icons>
        </kui-divider>
    </kui-cell-group>
</template>
```

### 内容位置

通过 `text-direction` 属性可以设置内容的位置，支持左边、居中和右边三个位置。

```vue
<template>
    <kui-cell-group title="描述文本位置">
        <view class="kui-mb-5">
            <kui-divider text-position="left">
                <kui-text>文本描述</kui-text>
            </kui-divider>
        </view>
        <view class="kui-mb-5">
            <kui-divider text-position="center">
                <kui-text>文本描述</kui-text>
            </kui-divider>
        </view>
        <view class="kui-mb-5">
            <kui-divider text-position="right">
                <kui-text>文本描述</kui-text>
            </kui-divider>
        </view>
    </kui-cell-group>
</template>
```

### 最小像素边框

通过 `min-px` 属性可以设置为最小像素边框。

```vue
<template>
    <kui-cell-group title="最小像素边框">
        <kui-divider min-px margin="32rpx 0"></kui-divider>
    </kui-cell-group>
</template>
```

### 自定义颜色和主题

通过 `color` 属性可以设置分割线颜色，通过 `theme` 属性可以设置分割线主题色。

```vue
<template>
    <kui-cell-group title="自定义颜色和主题">
        <view class="kui-mb-5">
            <kui-divider color="orange">
                <kui-text>自定义颜色</kui-text>
            </kui-divider>
        </view>
        <view class="kui-mb-5">
            <kui-divider theme="lime">
                <kui-text>自定义主题</kui-text>
            </kui-divider>
        </view>
    </kui-cell-group>
</template>
```

## API

### Props

| 参数         | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| dashed         | 是否使用虚线               | Boolean | false                |
| direction         | 分割线方向，可选值为 `row` `column`               | String | `row`                |
| inset         | 缩进长度，如 `100rpx` `60px`               | String | -                |
| inset-direction         | 缩进位置，可选值为 `start` `end`               | String | `start`                |
| margin         | 外间距，如 `60rpx 0`               | String | -                |
| min-px        | 是否使用 最小像素 线                         | Boolean | false                |
| text-position        | 内容位置，可选值为 `left` `center` `right`                         | String | center                |
| color         | 分割线颜色               | String | -                |
| theme         | 分割线主题色               | String | -                |

### Slots

| 名称 | 说明           | 
|--------|----------------|
| default  | 内容 | 
    