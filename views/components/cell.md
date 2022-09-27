# Cell 单元格

### 介绍

列表项，可组成列表。

<!--@include: ./tips/introduce.md-->

## 代码演示

### 基本用法

可以通过 `title` 属性设置单元格标题，`sub-title` 属性设置副标题，`desc` 属性设置描述内容，`show-right-icon` 设置是否显示单元格右边箭头，`radius` 属性设置圆角大小

```vue
<template>
  <kui-cell title="测试标题" desc="测试描述内容" :show-right-icon="false"></kui-cell>
  <kui-cell title="测试标题" sub-title="测试副标题" desc="测试描述内容" :show-right-icon="false"></kui-cell>
  <kui-cell title="圆角大小 0" :radius="0" :show-right-icon="false"></kui-cell>
</template>
```

### 使用插槽

通过 `content` 插槽可以设置自定义单元格内容，`right-icon` 插槽可以设置自定义右边图标内容，也可以自定义右边显示非图标内容

```vue
<template>
    <kui-cell title="测试标题" :show-right-icon="false">
        <template v-slot:content>
            <kui-text>自定义插槽内容</kui-text>
        </template>
    </kui-cell>
    <kui-cell title="测试标题">
        <template v-slot:right-icon>
            <kui-icons type="heart" color="red"></kui-icons>
        </template>
    </kui-cell>
</template>
```

### 链接 | 分组用法 | 常规布局

可以通过 `title` 属性设置分组标题，`desc` 属性设置分组描述内容

```vue
<template>
    <kui-cell-group title="链接 | 分组 | 常规布局" desc="分组描述内容">
        <kui-cell title="路由跳转" url="/pages/index/index"></kui-cell>
        <kui-cell title="链接 官网" url="http://www.kviewui.com"></kui-cell>
    </kui-cell-group>
</template>
```

### 链接 | 分组用法 | 间隔布局

可以通过 `type` 属性设置分组间隔

```vue
<template>
    <kui-cell-group title="链接 | 分组 | 间隔布局" desc="分组描述内容" type="space">
        <kui-cell title="路由跳转" url="/pages/index/index"></kui-cell>
        <kui-cell title="链接 官网" url="http://www.kviewui.com"></kui-cell>
    </kui-cell-group>
</template>
```

### 自定义左侧图标区域

可以通过 `left-icon` 插槽设置左侧自定义图标

```vue
<template>
    <kui-cell title="自定义图标" :show-right-icon="false">
        <template v-slot:left-icon>
            <kui-icons type="image"></kui-icons>
        </template>
    </kui-cell>
</template>
```

### 展示图标

可以通过 `icon` 属性设置单元格图标

```vue
<template>
    <kui-cell title="标题" desc="描述内容" icon="image"></kui-cell>
</template>
```

### 垂直居中

通过 `center` 属性可以让 Cell 的左右内容都垂直居中。

```vue
<template>
    <kui-cell title="标题" sub-title="副标题" desc="描述内容" center></kui-cell>
</template>
```

## API

### CellGroup Prop

| 字段  | 说明     | 类型   | 默认值 |
|-------|----------|--------|--------|
| title | 分组标题 | String | -      |
| cell-title-weight | 单元格标题粗细 | Number | -      |
| cell-radius | 单元格圆角大小 | Number | -      |
| desc  | 分组描述 | String | -      |
| type  | 单元格类型，可选值为 `normal` `space` | String | `normal`      |

### Type 有效值
| 值 | 说明   |
|----|--------|
| normal | 常规布局 |
| space | 间隔布局 |

### Cell Prop

| 字段                    | 说明                                                                                           | 类型             | 默认值           |
|-------------------------|------------------------------------------------------------------------------------------------|------------------|------------------|
| title                   | 标题名称                                                                                       | String           | -                |
| title-size              | 标题大小                                                                                       | Number           | -                |
| title-weight            | 标题粗细                                                                                       | Number           | 400              |
| color                   | 标题颜色                                                                                       | String           | -                |
| sub-title               | 左侧副标题                                                                                     | String           | -                |
| sub-title-color         | 副标题颜色                                                                                     | String           | -                |
| desc                    | 右侧描述                                                                                       | String           | -                |
| desc-color              | 描述内容颜色                                                                                   | String           | -                |
| radius                  | 圆角大小                                                                                       | Number           | 10               |
| click-status            | 点击态                                                                                       | Boolean          | true             |
| show-right-icon         | 是否展示右侧箭头                                                                               | Boolean          | true             |
| mode `通用属性`          | 页面模式，可选值为 `light` `dark`                                                              | String           | light            |
| url `非H5环境为复制链接`  | 点击后跳转的链接地址                                                                           | String           | -                |
| icon                    | 左边图标                                                                                       | String           | -                |
| center         | 是否使内容垂直居中                                                                             | Boolean          | false            |

### Mode 有效值
| 值 | 说明 |
|----|------|
| light | 明亮模式 |
| dark | 暗黑模式 |


### Cell Event

| 名称  | 说明     | 回调参数    |
|-------|----------|-------------|
| click | 点击事件 | event:Event |

## Cell Slots

| 名称            | 说明                  |
|-----------------|-----------------------|
| left-icon       | 自定义左侧`icon`区域  |
| content         | 自定义内容            |
| right-icon      | 自定义右侧`icon`区域  |

## CellGroup Slots

| 名称            | 说明                  |
|-----------------|-----------------------|
| title           | 自定义`title`标题区域 |
| desc            | 自定义`desc`描述区域  |