# Grid 宫格

### 介绍

将页面区域分隔成等宽区块。

<!--@include: ./tips/introduce.md-->

## 代码演示

### 基本用法

通过 `kui-grid` 组件将宫格包裹，`kui-grid-item` 组件设置每个区块的内容，通过 `icon` 属性可以设置每个区块的图标，`text` 属性可以设置每个区块的底部文字。

```vue
<template>
    <kui-cell-group title="基本用法">
        <kui-grid :columns="4">
            <template v-for="i in 8" :key="i">
                <kui-grid-item icon="slideshare" text="文本"></kui-grid-item>
            </template>
        </kui-grid>
    </kui-cell-group>
</template>
```

### 自定义列数

通过 `kui-grid` 组件的 `columns` 属性可以设置宫格的列数。

```vue
<template>
    <kui-cell-group title="自定义列数">
        <kui-grid :columns="3">
            <template v-for="i in 3" :key="i">
                <kui-grid-item icon="slideshare" text="文本"></kui-grid-item>
            </template>
        </kui-grid>
    </kui-cell-group>
</template>
```

### 列间距

通过 `kui-grid` 组件的 `gutter` 属性可以设置每列的间距。

```vue
<template>
    <kui-cell-group title="列间距">
        <kui-grid :columns="4" :gutter="30">
            <template v-for="i in 4" :key="i">
                <kui-grid-item icon="slideshare" text="文本"></kui-grid-item>
            </template>
        </kui-grid>
    </kui-cell-group>
</template>
```

### 内容反向

通过 `kui-grid` 组件的 `reverse` 属性可以设置宫格图标和文字的显示顺序。

```vue
<template>
    <kui-cell-group title="内容反向">
        <kui-grid :columns="4" reverse>
            <template v-for="i in 4" :key="i">
                <kui-grid-item icon="slideshare" text="文本"></kui-grid-item>
            </template>
        </kui-grid>
    </kui-cell-group>
</template>
```

### 内容横向

通过 `kui-grid` 组件的 `direction` 属性可以设置宫格内容的显示方式。

```vue
<template>
    <kui-cell-group title="内容横向">
        <kui-grid :columns="4" direction="horizontal">
            <template v-for="i in 4" :key="i">
                <kui-grid-item icon="slideshare" text="文本"></kui-grid-item>
            </template>
        </kui-grid>
    </kui-cell-group>
</template>
```

### 图标颜色/大小

通过 `kui-grid-item` 组件的 `icon` 属性可以设置宫格的图标，`icon-color` 属性可以设置图标的颜色，`icon-size` 属性设置图标的大小，`text` 属性设置宫格的文字。

```vue
<template>
    <kui-cell-group title="图标颜色大小">
        <kui-grid :columns="3" iconColor="#00BC79">
            <template v-for="i in 3" :key="i">
                <kui-grid-item icon="slideshare" :iconColor="i == 2 ? '#3491FA' : ''" :iconSize="i == 2 ? 70 : 56" text="文本"></kui-grid-item>
            </template>
        </kui-grid>
    </kui-cell-group>
</template>
```

### 自定义内容

通过 `kui-grid-item` 组件的默认插槽可以自定义宫格内容。

```vue
<template>
    <kui-cell-group title="自定义内容">
        <kui-grid :columns="3" iconColor="#00BC79">
            <template v-for="i in 3" :key="i">
                <kui-grid-item>
                    <kui-icons type="heart" color="#F53F3F" :size="70"></kui-icons>
                </kui-grid-item>
            </template>
        </kui-grid>
    </kui-cell-group>
</template>
```

### Grid Props

| 参数          | 说明                                      | 类型                    | 默认值      |
|---------------|------------------------------------------|------------------------|------------|
| columns    | 列数                                     | number         | `4`        |
| icon-size     | 图标大小，参考 <a href="/components/icon">Icon 图标</a> 组件          | number        | `56`     |
| icon-color    | 图标颜色                                  | string                 | -          |
| gutter        | 格子之间的间距，默认单位为`rpx`               | number        | `0`        |
| reverse        | 内容反向                               | boolean                | `false`     |
| direction        | 宫格内容排列的方向，可选值为 `vertical` `horizontal`               | string                | `vertical`     |
| border        | 是否显示边框                               | boolean                | `true`     |
| clickable        | 是否需要点击反馈                               | boolean                | `false`     |

### Direction 有效值
| 值 | 说明 |
|----|------|
| vertical | 垂直排列 |
| horizontal | 水平排列 |

### GridItem Props

| 参数                  | 说明                                                                                     | 类型               | 默认值      |
|----------------------|-----------------------------------------------------------------------------------------|--------------------|------------|
| text                 | 文字                                                                                     | string             | -          |
| icon                 | [图标名称](/components/icon)                                                             | string             | -          |
| icon-size            | 图标大小                                                | number   | `56`     |
| icon-color           | 图标颜色                                                                                  | string            | -           |
| id           | 唯一标识                                                                                  | string            | -           |
| content-margin           | 内容外间距                                                                                  | string            | -           |
| radius-size           | 圆角大小，可选值为 `none` `xs` `sm` `base` `lg` `xl` `max`                        | string            | `none`           |
| background-color           | 背景颜色                                                                                  | string            | -           |
| background-color-level           | 背景颜色色阶，可参考 <a href="/guide/theme">主题</a>                                 | string            | -           |
| mode`通用属性`      | 页面模式，可选值为 `light` `dark`                   | String  | `light`         |

### RadiusSize 有效值
| 值 | 说明 |
|----|------|
| none | `0rpx` |
| xs | `10rpx` |
| sm | `20rpx` |
| base | `30rpx` |
| lg | `40rpx` |
| xl | `50rpx` |
| max | `9999rpx` |

### Mode 有效值
| 值 | 说明 |
|----|------|
| light | 明亮模式 |
| dark | 暗黑模式 |

### GridItem Slots

| 名称                   | 说明                 |
|-----------------------|----------------------|
| default               | 自定义所有内容         |
| icon                  | 自定义图标            |
| text                  | 自定义文字            |

### GridItem Events

| 事件名                 | 说明                   | 回调参数               |
|-----------------------|-----------------------|-----------------------|
| click                 | 点击格子时触发          | event: Event          |
| touchstart                 | 触摸格子时触发          | event: Event          |
| touchend                 | 触摸格子结束时触发          | event: Event          |
| touchmove                 | 手指在格子上移动时触发          | event: Event          |

