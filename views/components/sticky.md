# Sticky 粘性布局

### 介绍

Sticky组件基于CSS中的 `position: sticky` 属性实现的效果，当组件在屏幕或者指定容器范围内时，按照正常的布局排列，当组件超出屏幕或者指定容器范围时，始终固定在屏幕或者指定容器顶部。

<!--@include: ./tips/introduce.md-->

### 基本用法

```vue
<template>
    <kui-cell-group title="基本用法">
        <view class="kui-h-full">
            <view class="kui-bg-white kui-h-8 kui-p-3 kui-rounded-md">
                <kui-sticky>
                    <kui-button type="primary">基本用法</kui-button>
                </kui-sticky>
            </view>
        </view>
    </kui-cell-group>
</template>
```

### 吸顶距离

通过 `top` 属性可以设置吸顶距离。

```vue
<template>
    <kui-cell-group title="吸顶距离">
        <view class="kui-h-full">
            <view class="kui-bg-white kui-h-8 kui-p-3 kui-rounded-md">
                <kui-sticky :top="100">
                    <kui-button type="danger">吸顶距离100px</kui-button>
                </kui-sticky>
            </view>
        </view>
    </kui-cell-group>
</template>
```

### 指定容器

指定容器需要在组件外层提供 `ref` 用来获取容器dom，多端兼容时需要提供和 `ref` 等值的 `id` 属性。获取的外层 `ref` 信息需要赋值给组件的 `container` 属性，组件的 `container-id` 属性需要和外层的 `id` 属性等值。具体实现思路可以参考如下演示代码。

```vue
<template>
	<view id="page-app">
		<kui-page :custom-header="false" :paddingY="0">
			<view class="body kui-w-full kui-h-full kui-box-border kui-absolute kui-inset-t-0 kui-inset-l-0 kui-p-3">
				<kui-cell-group title="指定容器">
                    <view class="kui-h-full">
                        <view class="kui-bg-white kui-h-96 kui-p-3 kui-rounded-md" ref="container" id="container">
                            <kui-sticky :top="100" :container="container" :proxy="proxy" container-id="container" ref="sticky">
                                <kui-button type="warning">指定容器</kui-button>
                            </kui-sticky>
                        </view>
                    </view>
                </kui-cell-group>
			</view>
		</kui-page>
	</view>
</template>
<script lang="ts">
    import {
		onReady,
		onUnload
	} from '@dcloudio/uni-app';

    import { ref, getCurrentInstance, SetupContext } from 'vue';
	import { useKviewuiRect } from '@/common/utils/element';

    export default {
		setup(context: SetupContext) {
			const container = ref(null);
			const {
				proxy
			}: any = getCurrentInstance();
			
			const observerStart = uni.createIntersectionObserver(proxy);
			const observerEnd = uni.createIntersectionObserver(proxy);
			
			onReady(() => {
				// 获取节点信息
				useKviewuiRect(container, 'container').then(res => {
					observerStart.relativeToViewport({top: -res.height}).observe(`#container`, (res) => {
						proxy.$refs['sticky'].observerStart(res);
					})
					observerEnd.relativeToViewport({top: -120}).observe('#container', (res) => {
						proxy.$refs['sticky'].observerEnd(res);
					});
				})
				// observer.disconnect();
			})
			
			onUnload(() => {
				// 停止节点监听
				observerStart.disconnect();
				observerEnd.disconnect();
			})
			
			return {
				container,
				proxy
			}
		}
	}
</script>
<style lang="less">
	page {
		background-color: #F8F8F8;
	}
	.body {
		min-height: 200vh;
	}
</style>
```

### 吸底距离

暂不支持。

## API

### Props

| 参数         | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| position         | 吸附位置（`top`、`bottom`）               | String | `top`                |
| top         | 吸顶距离               | Number | `0`                |
| bottom `暂不支持`         | 吸底距离               | Number | `0`                |
| container         | 容器的 `HTML` 节点, 在小程序环境下需要同时指定 `id`               | Element | -                |
| container-id         | 容器的 `id` 值, 在非H5环境下需要指定               | Element | -                |
| z-index         | 吸附时的层级               | Number | `2000`               |
| proxy         | 父组件实例               | Object | -                |
