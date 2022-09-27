# Badge 徽标

### 介绍

展示图标或文字右上角的红色圆点、数字或者文字，表示有新内容或新消息待处理。

<!--@include: ./tips/introduce.md-->

## 代码演示

以下代码演示中的 `kui-space` 为组件库的 <a href="/components/space">Space 间隔</a> 组件。

### 徽标类型

徽标支持 `primary`、`info`、`warning`、`danger`、`success` 五种主题类型，默认为 ''。

```vue
<template>
    <kui-cell-group title="徽标类型">
        <kui-space :gap="[30,20]">
            <kui-badge></kui-badge>
            <kui-badge type="primary"></kui-badge>
            <kui-badge type="info"></kui-badge>
            <kui-badge type="danger"></kui-badge>
            <kui-badge type="warning"></kui-badge>
        </kui-space>
    </kui-cell-group>
</template>

```

### 圆点徽标

通过 `dot` 属性可以设置圆点徽标样式（`value` 属性建议设置为 `0`）。

```vue
<template>
    <kui-cell-group title="圆点徽标">
        <kui-badge type="danger" value="0" dot></kui-badge>
    </kui-cell-group>
</template>
```

### 徽标内容

通过 `value` 属性可以自定义徽标显示内容。

```vue
<template>
    <kui-cell-group title="自定义内容徽标">
        <kui-space :gap="[30,20]">
            <kui-badge type="primary" value="徽标"></kui-badge>
            <kui-badge type="danger" value="热门"></kui-badge>
            <kui-badge type="info" value="kviewui"></kui-badge>
            <kui-badge type="danger" value="hot"></kui-badge>
            <kui-badge type="warning" value="66"></kui-badge>
        </kui-space>
    </kui-cell-group>
</template>
```

### 渐变主题徽标

通过 `gradient` 属性可以设置徽标的渐变主题。

```vue
<template>
    <kui-cell-group title="渐变主题徽标">
        <kui-space :gap="[30,20]">
            <kui-badge type="primary" value="666" gradient></kui-badge>
            <kui-badge type="warning" value="badge" gradient></kui-badge>
            <kui-badge type="danger" value="hot" gradient></kui-badge>
            <kui-badge type="info" value="message" gradient></kui-badge>
        </kui-space>
    </kui-cell-group>
</template>
```

### 最大值

通过 `max` 属性可以开启徽标最大值显示，`value` 超过 `max` 的值将在 `max` 值后显示一个 `+`。

```vue
<template>
    <kui-cell-group title="最大值徽标">
        <kui-space :gap="[30,20]">
            <kui-badge type="danger" value="66"></kui-badge>
            <kui-badge type="danger" value="166" :max="99"></kui-badge>
        </kui-space>
    </kui-cell-group>
</template>

```

### 定位徽标

通过 `position` 属性可以设置徽标的定位位置，支持右上、右下、左上和左下。

```vue
<template>
    <kui-cell-group title="定位徽标">
        <kui-space :gap="[30,40]">
            <kui-badge type="danger" position="right-top" value="0">
                <kui-tag shape="square">右上</kui-tag>
            </kui-badge>
            <kui-badge type="danger" position="right-bottom" value="0">
                <kui-tag shape="square">右下</kui-tag>
            </kui-badge>
            <kui-badge type="danger" position="left-top" value="0">
                <kui-tag shape="square">左上</kui-tag>
            </kui-badge>
            <kui-badge type="danger" position="left-bottom" value="0">
                <kui-tag shape="square">左下</kui-tag>
            </kui-badge>
        </kui-space>
    </kui-cell-group>
</template>
```

### 显示状态

通过 `show` 属性可以设置徽标的显示状态。

```vue
<template>
    <kui-cell-group title="显示状态">
        <kui-space :gap="[30,40]">
            <kui-badge type="danger" :show="show" position="right-top" value="0">
                <kui-tag shape="square">动态显示</kui-tag>
            </kui-badge>
            <kui-button type="primary" @click="onChange">点击切换徽标状态</kui-button>
        </kui-space>
    </kui-cell-group>
</template>
<script lang="ts">
	import {
		reactive,
		toRefs
	} from 'vue';
	
	export default {
		setup() {
			const state = reactive({
				show: true,
				modeChecked: false
			});
			
			const onChange = () => {
				state.show = !state.show;
			}
			
			return {
				...toRefs(state),
				onChange
			}
		}
	}
</script>
```

### 自定义颜色

通过 `color` 属性可以自由设置徽标的颜色。

```vue
<template>
    <kui-cell-group title="自定义颜色徽标">
        <kui-space :gap="[30,40]">
            <kui-badge color="hsla(120,120%,20%,1)" position="right-top" value="0">
                <kui-tag shape="square">自定义颜色</kui-tag>
            </kui-badge>
        </kui-space>
    </kui-cell-group>
</template>

```

### 自定义图标

通过 `icon` 属性可以设置徽标内容为图标。

```vue
<template>
    <kui-cell-group title="自定义图标徽标">
        <kui-space :gap="[30,40]">
            <kui-badge type="danger" icon="heart" position="right-top">
                <kui-tag shape="square">自定义图标</kui-tag>
            </kui-badge>
        </kui-space>
    </kui-cell-group>
</template>
```

## API

### Props  

| 字段    | 说明                                       | 类型    | 默认值    |
|---------|--------------------------------------------|---------|-----------|
| type   | 徽标类型，可选值为 `primary` `info` `danger` `warning` `success`    | String  | -         |
| dot     | 是否为圆点                                 | Boolean | `false`   |
| value   | 显示的内容                                 | String  | `0`         |
| max     | value 为数值时，最大值                     | Number  | `0`   |
| color   | 徽标背景颜色                               | String  | - |
| show   | 徽标显示状态                               | Boolean  | `true` |
| icon   | 徽标图标内容                               | String  | - |
| position   | 徽标位置，可选值为 `right-top` `right-bottom` `left-top` `left-bottom`    | String  | - |
| gradient   | 徽标主题渐变                               | Boolean  | `false` |
| mode`通用属性`      | 页面模式，可选值为 `light` `dark`                   | String  | `light`         |

### Type 有效值
| 值 | 说明 |
|----|------|
| primary | 主要徽标 |
| info | 信息徽标 |
| danger | 危险徽标 |
| warning | 警告徽标 |
| success | 成功徽标 |

### Position 有效值
| 值 | 说明 |
|----|------|
| right-top | 右上角 |
| right-bottom | 右下角 |
| left-top | 左上角 |
| left-bottom | 左下角 |

### Mode 有效值
| 值 | 说明 |
|----|------|
| light | 明亮模式 |
| dark | 暗黑模式 |

### Slots

| 名称    | 说明         |
|---------|--------------|
| default | 	徽标包裹的子元素 |
