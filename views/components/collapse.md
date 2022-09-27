# Collapse 折叠面板


### 介绍

将内容放置在多个折叠面板中，点击面板标题可展开或收缩内容。

<!--@include: ./tips/introduce.md-->

## 代码演示

### 基本用法

```vue
<template>
    <kui-cell-group title="基本用法">
        <kui-collapse>
            <kui-collapse-panel>
                <view>
                    <kui-text>自定义内容自定义内容自定义内容自定义内容自定义内容自定义内容自定义内容自定义内容</kui-text>
                </view>
            </kui-collapse-panel>
        </kui-collapse>
    </kui-cell-group>
</template>
```

### 禁用

通过 `kui-collapse-panel` 组件的 `disabled` 属性可以禁用单个折叠面板。

```vue
<template>
    <kui-cell-group title="禁用">
        <kui-collapse>
            <kui-collapse-panel disabled>
                <view>
                    <kui-text>自定义内容自定义内容自定义内容自定义内容自定义内容自定义内容自定义内容自定义内容</kui-text>
                </view>
            </kui-collapse-panel>
        </kui-collapse>
    </kui-cell-group>
</template>
```

### 手风琴效果

通过 `kui-collapse` 组件的 `accordion` 属性可以设置手风琴效果（每次只有一个折叠面板被打开）。

```vue
<template>
    <kui-cell-group title="手风琴效果">
        <kui-collapse accordion>
            <kui-collapse-panel>
                <view>
                    <kui-text>自定义内容自定义内容自定义内容自定义内容自定义内容自定义内容自定义内容自定义内容</kui-text>
                </view>
            </kui-collapse-panel>
            <kui-collapse-panel>
                <view>
                    <kui-text>自定义内容自定义内容自定义内容自定义内容自定义内容自定义内容自定义内容自定义内容</kui-text>
                </view>
            </kui-collapse-panel>
        </kui-collapse>
    </kui-cell-group>
</template>
```

### 关闭标题点击态

折叠面板默认是有点击反馈效果（点击后标题变暗）的，通过 `kui-collapse-panel` 组件的 `active-title-taped-state` 属性可以关闭点击反馈效果。

```vue
<template>
    <kui-cell-group title="关闭标题点击态">
        <kui-collapse accordion>
            <kui-collapse-panel :active-title-taped-state="false">
                <view>
                    <kui-text>自定义内容自定义内容自定义内容自定义内容自定义内容自定义内容自定义内容自定义内容</kui-text>
                </view>
            </kui-collapse-panel>
        </kui-collapse>
    </kui-cell-group>
</template>
```

### 关闭展开动画

折叠面板默认是有展开动画效果（点击后标题变暗）的，通过 `kui-collapse-panel` 组件的 `animation` 属性可以关闭展开动画效果，用来减少小程序或者部分APP上面动画卡顿。

```vue
<template>
    <kui-cell-group title="关闭展开动画">
        <kui-collapse accordion>
            <kui-collapse-panel :animation="false">
                <view>
                    <kui-text>自定义内容自定义内容自定义内容自定义内容自定义内容自定义内容自定义内容自定义内容</kui-text>
                </view>
            </kui-collapse-panel>
        </kui-collapse>
    </kui-cell-group>
</template>
```

### 自定义文本颜色和背景颜色

通过 `kui-collapse-panel` 组件的 `text-color` 属性可以设置折叠面板的内容文本色，通过 `wrap-background-color` 属性可以设置折叠面板内容的背景色。

```vue
<template>
    <kui-cell-group title="自定义文本颜色和背景颜色">
        <kui-collapse accordion>
            <kui-collapse-panel  text-color="red" wrap-background-color="blue">
                <view>
                    <kui-text>自定义内容自定义内容自定义内容自定义内容自定义内容自定义内容自定义内容自定义内容</kui-text>
                </view>
            </kui-collapse-panel>
        </kui-collapse>
    </kui-cell-group>
</template>
```

### 自定义内容

通过 `kui-collapse-panel` 组件的 `title` 插槽可以设置折叠面板的自定义标题内容，通过 `arrow-icon` 插槽可以设置折叠面板标题区的箭头内容或者隐藏箭头。

```vue
<template>
    <kui-cell-group title="自定义内容">
        <kui-collapse>
            <kui-collapse-panel>
                <template v-slot:title>
                    <view class="kui-flex">
                        <kui-text>插槽标题</kui-text>
                    </view>
                </template>
                <template v-slot:arrow-icon>
                    <view class="kui-flex">
                        <kui-text>插槽图标</kui-text>
                    </view>
                </template>
                <view>
                    <kui-text>自定义内容自定义内容自定义内容自定义内容自定义内容自定义内容自定义内容自定义内容</kui-text>
                </view>
            </kui-collapse-panel>
        </kui-collapse>
    </kui-cell-group>
</template>
```

## Props

### Collapse Prop

| 参数 | 说明 | 类型 | 默认值
|----- | ----- | ----- | ----- 
| value | 绑定的值 | Array | []
| accordion | 是否开启手风琴效果 | Boolean | `false`
| default-expand-all | 是否展开全部 | Boolean | `false`


### CollapsePanel Prop
| 参数 | 说明 | 类型 | 默认值 | 
|------|------|------|------|
| open | 是否展开 | Boolean | `false`
| animation | 是否开启展开动画 | Boolean | `true`
| disabled | 是否禁用 | Boolean | `false`
| name | 唯一标识符 | String | -
| background-color | 背景色 | String | -
| color | 标题文本色 | String | -
| text-color | 内容文本色 | String | -
| border-color | 底框色 | String | -
| wrap-background-color | 内容背景色 | String | -
| active-title-taped-state | 是否开启点击态 | Boolean  | `true`
| mode`通用属性` | 页面模式，可选值为 `light` `dark` | String  | `light`

### Mode 有效值
| 值 | 说明 |
|----|------|
| light | 明亮模式 |
| dark | 暗黑模式 |

## Slots

### CollapsePanel Slot
| 名称 | 说明
|------|------
| title | 折叠面板标题区
| arrow-icon | 折叠面板右边箭头区
| default | 折叠面板内容区