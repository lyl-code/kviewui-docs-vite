# Progress 进度条

### 介绍

用来展示当前操作的进度。

<!--@include: ./tips/introduce.md-->

## 代码演示

### 基本用法

通过组件提供的 `percent` 属性可以设置进度条的百分比。

```vue
<template>
    <kui-cell-group title="基本用法">
        <kui-progress :percent="30" color="primary"></kui-progress>
    </kui-cell-group>
</template>
```

### 设置宽度和颜色

通过组件提供的 `line-width` 属性可以设置进度条的宽度，通过 `color` 属性可以设置进度条的背景色，通过 `label-text-color` 属性可以设置进度条右边 `label` 区域的文本色。

```vue
<template>
    <kui-cell-group title="设置宽度和颜色">
        <kui-progress :percent="30" :line-width="30" color="warning" label-text-color="orange"></kui-progress>
    </kui-cell-group>
</template>
```

### 不显示百分比

组件默认的百分比是在组件右边的 `label` 区域设置，通过 `label` 属性可以关闭百分比的显示。

```vue
<template>
    <kui-cell-group title="不显示百分比">
        <kui-progress :percent="30" color="primary" :label="false"></kui-progress>
    </kui-cell-group>
</template>
```

### 标签內显

通过组件提供的 `label-inside` 属性可以设置标签內显效果，通过 `label-inside-text-bottom` 属性可以设置标签内文本的显示位置。

```vue
<template>
    <kui-cell-group title="标签内显">
        <view class="kui-mb-3">
            <kui-progress :percent="30" :line-width="10" color="primary" label-inside label-inside-text-bottom="1px"></kui-progress>
        </view>
        <view class="kui-mt-5">
            <kui-progress :percent="50" :line-width="20" color="primary" label-inside-text-bottom="1px" label-inside></kui-progress>
        </view>
        <view class="kui-mt-5">
            <kui-progress :percent="70" :line-width="30" color="primary" label-inside label-inside-text-bottom="2px"></kui-progress>
        </view>
    </kui-cell-group>
</template>
```

### 自定义内容內显

通过组件提供的默认插槽可以设置进度条标签自定义内容，通过 `label-inside` 属性可以设置标签內显，通过 `inside-label-style` 属性可以设置內显的 `label` 区样式。

```vue
<template>
    <kui-cell-group title="自定义内容內显">
        <kui-progress :percent="50" label-inside :inside-label-style="{bottom: '0px'}">
            <kui-icons type="heart" theme="danger" :size="50"></kui-icons>
        </kui-progress>
    </kui-cell-group>
</template>
```

### 开启进度条动画

通过组件提供的 `active` 属性可以开启进度条加载动画。

```vue
<template>
    <kui-cell-group title="开启进度条动画">
        <kui-progress :percent="30" color="primary" active></kui-progress>
    </kui-cell-group>
</template>
```

### 自定义图标

通过组件提供的 `icon-name` 属性可以设置`label`的图标。

```vue
<template>
    <kui-cell-group title="自定义图标">
        <kui-progress 
            :percent="30" 
            color="primary" 
            icon-name="check_circle" 
            label-text-color="primary" 
            :label-text-size="36">
        </kui-progress>
    </kui-cell-group>
</template>
```

### 方角进度条

通过组件提供的 `shape` 属性可以设置进度条边框形状，支持方角和圆角。

```vue
<template>
    <kui-cell-group title="方角进度条">
        <kui-progress :percent="30" shape="square" color="primary"></kui-progress>
    </kui-cell-group>
</template>
```

### 动态改变

```vue
<template>
    <kui-cell-group title="动态改变">
        <kui-progress :percent="state.perecnt" color="#00BC79"></kui-progress>
        <view class="kui-flex kui-justify-center kui-mt-3">
            <kui-button @click="decrease">减少</kui-button>
            <view class="kui-mx-1"></view>
            <kui-button type="primary" @click="add">增加</kui-button>
        </view>
    </kui-cell-group>
</template>
<script lang="ts">
	import {
		reactive,
		toRefs,
		nextTick
	} from 'vue';
	
	export default {
		setup() {
			const state = reactive({
				perecnt: 0
			});
			
			const add = (type = '') => {
				nextTick(() => {
                    state.perecnt = state.perecnt + 20;
					state.perecnt = state.perecnt > 100 ? 100 : state.perecnt;
				})
			}
			
			const decrease = (type = '') =>  {
				nextTick(() => {
					state.perecnt = state.perecnt - 20;
					state.perecnt = state.perecnt < 0 ? 0 : state.perecnt;
				})
			}
			
			return {
				// ...toRefs(state),
				state,
				add,
				decrease
			}
		}
	}
</script>

<style>

</style>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值
|----- | ----- | ----- | -----
| percent | 进度条百分比 | Number | `0`
| label | 是否显示标签 | Boolean | `true`
| label-inside | 标签是否內显 | Boolean | `false`
| inside-label-style | 自定义标签样式 | Object | {}
| shape`通用属性` | 进度条形状，可选值为 `square` `round` | String  | `round`
| color | 进度条背景色 | String | `#00BC79`
| track-color | 未选择的背景色 | String | -
| line-width | 进度条宽度 | Number | `20`
| track | 是否显示进度轨迹 | Boolean | `true`
| size | 进度条大小 | Number | `200`
| rotate | 进度条圆点 | String | -
| label-text-size | 进度条标签文本大小 | Number | `14`
| label-text-color | 进度条标签文本色 | String | -
| active | 是否开启进度条动画 | Boolean | `false`
| icon-name | 图标名称 | String | -
| label-inside-text-bottom | 內显文本下边距位置 | String | -
| id | 唯一标识 | String | -

### Shape 有效值
| 值 | 说明
|----|-----
| square | 方角进度条
| round | 圆角进度条

### Slots
| 值 | 说明
|----| -----
| default | 自定义标签内容区