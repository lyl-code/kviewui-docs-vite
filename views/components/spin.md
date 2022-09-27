# Spin 加载动画

### 介绍

Spin 组件提供了 `15` 种常见的CSS3加载场景动画，基本满足各种常见的等待加载场景需求。

<!--@include: ./tips/introduce.md-->

## 代码演示

### 基本用法

通过 `type` 属性可以设置加载动画类型，目前支持 `15` 种加载动画类型。

```vue
<template>
    <kui-cell-group title="基础用法">
        <view class="kui-mt-3 kui-flex kui-w-full kui-flex-wrap kui-box-border">
            <template v-for="item in data">
                <view class="kui-w-1-3 kui-h-28">
                    <view
                        class="kui-bg-white kui-mr-1 kui-pb-1 kui-flex kui-flex-col kui-justify-center kui-items-center kui-h-24 kui-rounded-md">
                        <kui-spin :type="item"></kui-spin>
                        <view class="kui-pt-3">
                            <kui-text selectable>{{ item }}</kui-text>
                        </view>
                    </view>
                </view>
            </template>
        </view>
    </kui-cell-group>
</template>
<script lang="ts">
    export default {
		setup() {
			const data = [
				'square-turn',
				'chase-dot',
				'double-bounce',
				'rect',
				'cube1',
				'spinner',
				'dot',
				'bounce',
				'circle-dot',
				'cube2',
				'circle-dot2',
				'cube3',
				'circle-dot3',
				'square-dot',
				'square-dot2'
			];

			return {
				data
			}
		}
	}
</script>
```

### 自定义主题色

组件提供了 `theme` 属性方便设置自定义主题色，可参考<a href="/guide/theme">主题</a>。

```vue
<template>
    <kui-cell-group title="自定义主题色">
        <kui-space :gap="[0, 30]">
            <view class="kui-w-1-3 kui-h-28">
                <view
                    class="kui-bg-white kui-mr-1 kui-pb-1 kui-flex kui-flex-col kui-justify-center kui-items-center kui-h-24 kui-rounded-md">
                    <kui-spin type="chase-dot" theme="magenta">
                        <view class="kui-pt-3">
                            <kui-text selectable>chase-dot</kui-text>
                        </view>
                    </kui-spin>
                </view>
            </view>
            <view class="kui-w-1-3 kui-h-28">
                <view
                    class="kui-bg-white kui-mr-1 kui-pb-1 kui-flex kui-flex-col kui-justify-center kui-items-center kui-h-24 kui-rounded-md">
                    <kui-spin type="bounce" theme="blue">
                        <view class="kui-pt-3">
                            <kui-text selectable>chase-dot</kui-text>
                        </view>
                    </kui-spin>
                </view>
            </view>
        </kui-space>
    </kui-cell-group>
</template>
```

### 自定义背景色

组件提供了 `background-color` 属性可以设置系统内置主题色之外的自定义背景色。

```vue
<template>
    <kui-cell-group title="自定义背景色">
        <kui-space :gap="[0, 30]">
            <view class="kui-w-1-3 kui-h-28">
                <view
                    class="kui-bg-white kui-mr-1 kui-pb-1 kui-flex kui-flex-col kui-justify-center kui-items-center kui-h-24 kui-rounded-md">
                    <kui-spin type="chase-dot" background-color="hsl(100, 100%, 10%)">
                        <view class="kui-pt-3">
                            <kui-text selectable>chase-dot</kui-text>
                        </view>
                    </kui-spin>
                </view>
            </view>
            <view class="kui-w-1-3 kui-h-28">
                <view
                    class="kui-bg-white kui-mr-1 kui-pb-1 kui-flex kui-flex-col kui-justify-center kui-items-center kui-h-24 kui-rounded-md">
                    <kui-spin type="bounce" background-color="hsl(10, 10%, 50%)">
                        <view class="kui-pt-3">
                            <kui-text selectable>chase-dot</kui-text>
                        </view>
                    </kui-spin>
                </view>
            </view>
        </kui-space>
    </kui-cell-group>
</template>
```

### 自定义大小

组件提供了 `size` 属性可以设置不同的大小。

```vue
<template>
    <kui-cell-group title="自定义大小">
        <kui-space :gap="[0, 0]">
            <view class="kui-w-1-3 kui-h-28">
                <view
                    class="kui-bg-white kui-mr-1 kui-pb-1 kui-flex kui-flex-col kui-justify-center kui-items-center kui-h-24 kui-rounded-md">
                    <kui-spin type="square-dot" size="sm">
                        <view class="kui-pt-3">
                            <kui-text selectable>chase-dot</kui-text>
                        </view>
                    </kui-spin>
                </view>
            </view>
            <view class="kui-w-1-3 kui-h-28">
                <view
                    class="kui-bg-white kui-mr-1 kui-pb-1 kui-flex kui-flex-col kui-justify-center kui-items-center kui-h-24 kui-rounded-md">
                    <kui-spin type="square-dot">
                        <view class="kui-pt-3">
                            <kui-text selectable>chase-dot</kui-text>
                        </view>
                    </kui-spin>
                </view>
            </view>
            <view class="kui-w-1-3 kui-h-28">
                <view
                    class="kui-bg-white kui-mr-1 kui-pb-1 kui-flex kui-flex-col kui-justify-center kui-items-center kui-h-24 kui-rounded-md">
                    <kui-spin type="square-dot" size="lg">
                        <view class="kui-pt-3">
                            <kui-text selectable>chase-dot</kui-text>
                        </view>
                    </kui-spin>
                </view>
            </view>
        </kui-space>
    </kui-cell-group>
</template>
```

## API

### Props

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | ----- 
| type | 动画类型，目前支持 `15` 种动画类型 | String | `circle-dot`
| size | 动画大小，可选值为 `sm` `base` `lg` `xl` | String | `base`
| background-color | 动画背景色 | String | -
| speed`暂不支持` | 动画速度，可选值为 `sm` `base` `lg` `xl` | String | `base`
| scale | 动画缩放系数，设置该属性时`size`属性失效 | Number | `0`
| width | 宽度，默认单位`rpx` | Number | `80`
| height | 高度，默认单位`rpx` | Number | `80`
| theme | 主题色，可参考 <a href="/guide/theme">主题</a>| String | -