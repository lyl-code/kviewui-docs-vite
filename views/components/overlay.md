# Overlay 遮罩

### 介绍

创建一个遮罩层，用来强调特定的元素，防止用户进行其他操作。

<!--@include: ./tips/introduce.md-->

### Tips

+ 全屏遮罩组件建议放到所有组件最外层。

## 代码演示

### 基本用法

> 下面所有演示代码中的 `kui-config-provider` 组件为全局配置组件，可参考 <a href="/components/config-provider">ConfigProvider 全局配置</a>

```vue
<template>
	<view class="kui-w-full kui-h-full">
		<kui-page :custom-header="false">
			<template v-slot:body>
				<kui-config-provider font-size="16px" color="#666">
					<view class="kui-mt-3">
						<kui-text>基本用法</kui-text>
						<kui-container radius="10px" background-color="#FFFFFF">
							<kui-button type="primary" block @click="showOverlay()">显示遮罩层</kui-button>
						</kui-container>
					</view>
				</kui-config-provider>
			</template>
		</kui-page>
		<kui-overlay ref="overlay"></kui-overlay>
	</view>
</template>

<script lang="ts">
	import {
		SetupContext,
		nextTick,
		getCurrentInstance
	} from 'vue';
	
	export default {
		setup(props, context: SetupContext) {
			const {proxy} = getCurrentInstance();
			
			const showOverlay = () => {
				nextTick(() =>  {
					proxy.$refs['overlay'].open();
				})
			}
			
			return {
				showOverlay
			}
		}
	}
</script>

<style>

</style>
```

### 自定义透明度

通过 `overlay-ness` 属性可以设置遮罩透明度。

```vue
<template>
	<view class="kui-w-full kui-h-full">
		<kui-page :custom-header="false">
			<template v-slot:body>
				<kui-config-provider font-size="16px" color="#666">
					<view class="kui-mt-5">
						<kui-text>自定义遮罩透明度</kui-text>
						<kui-container radius="10px" background-color="#FFFFFF">
							<kui-button type="primary" block @click="showOverlay(0.4)">显示遮罩层</kui-button>
						</kui-container>
					</view>
				</kui-config-provider>
			</template>
		</kui-page>
		<kui-overlay ref="overlay" :overlay-ness="0.4"></kui-overlay>
	</view>
</template>

<script lang="ts">
	import {
		SetupContext,
		nextTick,
		getCurrentInstance
	} from 'vue';
	
	export default {
		setup(props, context: SetupContext) {
			const {proxy} = getCurrentInstance();
			
			const showOverlay = () => {
				nextTick(() =>  {
					proxy.$refs['overlay'].open();
				})
			}
			
			return {
				showOverlay
			}
		}
	}
</script>

<style>

</style>
```

### 自定义插槽内容

通过组件提供的 `content` 插槽可以设置遮罩内的自定义内容。

```vue
<template>
	<view class="kui-w-full kui-h-full">
		<kui-page :custom-header="false">
			<template v-slot:body>
				<kui-config-provider font-size="16px" color="#666">
					<view class="kui-mt-5">
						<kui-text>自定义插槽内容</kui-text>
						<kui-container radius="10px" background-color="#FFFFFF">
							<kui-button type="primary" block @click="showOverlay()">显示遮罩层</kui-button>
						</kui-container>
					</view>
				</kui-config-provider>
			</template>
		</kui-page>
		<kui-overlay :z-index="9999" ref="overlay-content">
			<template v-slot:content>
				<view class="kui-w-full kui-h-full kui-flex kui-justify-center kui-items-center">
					<kui-container height="100px" width="300px" radius="10px" background-color="#FFFFFF">
						<view class="kui-text-center kui-h-full kui-flex kui-flex-col kui-justify-center">
							<kui-text>自定义插槽内容</kui-text>
						</view>
					</kui-container>
				</view>
			</template>
		</kui-overlay>
	</view>
</template>

<script lang="ts">
	import {
		SetupContext,
		nextTick,
		getCurrentInstance
	} from 'vue';
	
	export default {
		setup(props, context: SetupContext) {
			const {proxy} = getCurrentInstance();
			
			const showOverlay = () => {
				nextTick(() =>  {
					proxy.$refs['overlay-content'].open();
				})
			}
			
			return {
				showOverlay
			}
		}
	}
</script>

<style>

</style>
```

### 自定义富文本内容

通过组件提供的 `vnode` 属性可以设置遮罩内的富文本HTML内容。

```vue
<template>
	<view class="kui-w-full kui-h-full">
		<kui-page :custom-header="false">
			<template v-slot:body>
				<kui-config-provider font-size="16px" color="#666">
					<view class="kui-mt-5">
						<kui-text>自定义富文本内容</kui-text>
						<kui-container radius="10px" background-color="#FFFFFF">
							<kui-button type="primary" block @click="showOverlay()">显示遮罩层</kui-button>
						</kui-container>
					</view>
				</kui-config-provider>
			</template>
		</kui-page>
		<kui-overlay ref="overlay-richtext" :vnode="vnode" vnode-center></kui-overlay>
	</view>
</template>

<script lang="ts">
	import {
		SetupContext,
		nextTick,
		getCurrentInstance,
        toRefs,
		reactive
	} from 'vue';
	
	export default {
		setup(props, context: SetupContext) {
			const {proxy} = getCurrentInstance();

            const data = reactive({
				vnode: `
					<div class="kui-h-20 kui-w-60 kui-bg-white kui-rounded kui-flex kui-justify-center kui-items-center">
						<span class="kui-text-red-600">红色富文本内容</span>
						<span class="kui-text-blue-600">蓝色富文本内容</span>
					</div>
				`
			});
			
			const showOverlay = () => {
				nextTick(() =>  {
					proxy.$refs['overlay-richtext'].open();
				})
			}
			
			return {
				showOverlay,
                ...toRefs(data)
			}
		}
	}
</script>

<style>

</style>
```

### 区间遮罩

在组件提供的 `default` 插槽（默认插槽）内可以实现区间遮罩样式，`close-on-click-mask` 属性设置为`false`可以禁用点击关闭遮罩，具体可参考下面演示代码。

```vue
<template>
    <view class="kui-mt-5">
        <kui-text>区间遮罩用法</kui-text>
        <kui-overlay radius-size="sm" :close-on-click-mask="false" :show="true">
            <view class="kui-mt-0">
                <view class="kui-mt-3 kui-p-3 kui-box-border">
                    <kui-space :gap="[40,20]">
                        <kui-button type="primary">主要按钮</kui-button>
                        <kui-button type="info">信息按钮</kui-button>
                        <kui-button>默认按钮</kui-button>
                        <kui-button type="success">成功按钮</kui-button>
                        <kui-button type="warning">警告按钮</kui-button>
                        <kui-button type="danger">危险按钮</kui-button>
                        <kui-button type="danger" background-color="orange" text-color="black">自定义按钮</kui-button>
                    </kui-space>
                </view>
            </view>
        </kui-overlay>
    </view>
</template>
```

### 磨砂玻璃遮罩

通过组件提供的 `blur` 属性可以设置磨砂玻璃效果。

```vue
<template>
    <view class="kui-mt-5">
        <kui-text>磨砂玻璃遮罩用法</kui-text>
        <kui-overlay 
            radius-size="sm" 
            :close-on-click-mask="false" 
            blur 
            :overlay-ness="0.4"
            :show="true">
            <view class="kui-mt-0">
                <view class="kui-mt-3 kui-p-3 kui-box-border">
                    <kui-space :gap="[40,20]">
                        <kui-button type="primary">主要按钮</kui-button>
                        <kui-button type="info">信息按钮</kui-button>
                        <kui-button>默认按钮</kui-button>
                        <kui-button type="success">成功按钮</kui-button>
                        <kui-button type="warning">警告按钮</kui-button>
                        <kui-button type="danger">危险按钮</kui-button>
                        <kui-button type="danger" background-color="orange" text-color="black">自定义按钮</kui-button>
                    </kui-space>
                </view>
            </view>
        </kui-overlay>
    </view>
</template>
```

## API

### Props

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | -----
| z-index | 层级 | Number | `99`
| vnode | 富文本内容 | HTMLElement | -
| vnode-center | 富文本内容是否居中显示 | Boolean | `false`
| radius-size`通用属性` | 圆角大小，可选值为 `none` `xs` `sm` `base` `lg` `xl` `max` | String | `none`
| blur | 是否设置磨砂玻璃效果 | Boolean | `false`
| show | 是否显示遮罩 | Boolean | `false`
| close-on-click-mask | 单击遮罩是否关闭 | Boolean | `true`
| overlay-ness | 遮罩透明度 | Number | `0.6`


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

### Slots
| 名称                   | 说明                 |
|-----------------------|----------------------|
| default               | 自定义插入元素         |
| content                  | 自定义内容            |


