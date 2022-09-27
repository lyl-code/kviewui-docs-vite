# Popup 弹出层

### 介绍

弹出层容器，用来展示弹窗，提示信息等内容，支持多个弹出层叠加展示。

<!--@include: ./tips/introduce.md-->

## 代码演示

### 基本用法

```vue
<template>
	<kui-page :custom-header="false">
		<template v-slot:body>
			<view class="kui-mt-3">
				<kui-cell-group title="基本用法">
					<kui-cell title="打开弹出层" @click="openPopup('center')"></kui-cell>
				</kui-cell-group>
			</view>
		</template>
	</kui-page>
	<kui-popup ref="popup" radius-size="sm">
		<kui-container width="300px" background-color="#FFFFFF">
			<view class="kui-h-full kui-box-border kui-flex kui-justify-center kui-items-center kui-leading-5 kui-py-0">
				<kui-text size="18px" decode>金尊清酒斗十千，<br />玉盘珍羞直万钱。<br />停杯投箸不能食，<br />拔剑四顾心茫然。</kui-text>
			</view>
		</kui-container>
	</kui-popup>
</template>

<script lang="ts">
	import {
		reactive,
		SetupContext,
		getCurrentInstance,
		toRefs,
		nextTick
	} from 'vue';

	export default {
		setup(props, context: SetupContext) {
			const {
				proxy
			} = getCurrentInstance();

			const openPopup = (p: string = '', r: string = '') => {
				nextTick(() => {
					proxy.$refs['popup'].open();
				});
			};

			return {
				openPopup
			}
		}
	}
</script>

<style>

</style>

```

### 弹出位置

通过组件提供的 `position` 属性可以设置弹出层的弹出位置。

```vue
<template>
	<kui-page :custom-header="false">
		<template v-slot:body>
			<view class="kui-mt-3">
				<kui-cell-group title="弹出位置">
					<kui-cell title="顶部弹出" @click="openPopup('top')"></kui-cell>
					<kui-cell title="底部弹出" @click="openPopup('bottom')"></kui-cell>
					<kui-cell title="左侧弹出" @click="openPopup('left')"></kui-cell>
					<kui-cell title="右侧弹出" @click="openPopup('right')"></kui-cell>
				</kui-cell-group>
			</view>
		</template>
	</kui-page>
	<kui-popup ref="popupTop" :id="id" height="200rpx" position="top">
		<kui-container :marginY="0" height="auto" background-color="white">
			<view class="kui-mx-3 kui-my-10 kui-flex kui-justify-center">
				<kui-button type="primary">点击关闭</kui-button>
			</view>
		</kui-container>
	</kui-popup>
	<kui-popup ref="popupLeft" width="200px" position="left">
		<kui-container :marginY="0" height="100%" background-color="transparent">
			<view class="kui-mx-3 kui-my-10 kui-flex kui-justify-center">
				<kui-button type="primary">点击关闭</kui-button>
			</view>
		</kui-container>
	</kui-popup>
	<kui-popup ref="popupRight" width="200px" position="right">
		<kui-container :marginY="0" height="auto" background-color="transparent">
			<view class="kui-mx-3 kui-my-10 kui-flex kui-justify-center">
				<kui-button type="primary">点击关闭</kui-button>
			</view>
		</kui-container>
	</kui-popup>
	<kui-popup ref="popupBottom" height="200rpx" position="bottom">
		<kui-container :marginY="0" height="100%" background-color="transparent">
			<view class="kui-mx-3 kui-my-10 kui-flex kui-justify-center">
				<kui-button type="primary">点击关闭</kui-button>
			</view>
		</kui-container>
	</kui-popup>
</template>

<script lang="ts">
	import {
		reactive,
		SetupContext,
		getCurrentInstance,
		toRefs,
		nextTick
	} from 'vue';

	export default {
		setup(props, context: SetupContext) {
			const {
				proxy
			} = getCurrentInstance();

			const data = reactive({
				position: '',
				id: 0
			});

			const openPopup = (p: string = '', r: string = '') => {
				nextTick(() => {
					data.position = p ? p : '';
					if (p === 'top') {
						console.log(p);
						proxy.$refs['popupTop'].open();
					} else if (p === 'bottom') {
						proxy.$refs['popupBottom'].open();
					} else if (p === 'left') {
						proxy.$refs['popupLeft'].open();
					} else if (p === 'right') {
						proxy.$refs['popupRight'].open();
					}
				});
			};

			return {
				openPopup,
				...toRefs(data)
			}
		}
	}
</script>

<style>

</style>

```

### 圆角弹窗

通过组件提供的 `radius-size` 属性可以设置圆角弹窗。

```vue
<template>
	<kui-page :custom-header="false">
		<template v-slot:body>
			<view class="kui-mt-3">
				<kui-cell-group title="圆角弹窗">
					<kui-cell title="顶部弹出" @click="openPopup('top', 'lg')"></kui-cell>
					<kui-cell title="底部弹出" @click="openPopup('bottom', 'lg')"></kui-cell>
				</kui-cell-group>
			</view>
		</template>
	</kui-page>
	<kui-popup ref="popupTop" :id="id" height="200rpx" position="top">
		<kui-container :marginY="0" height="auto" background-color="white">
			<view class="kui-mx-3 kui-my-10 kui-flex kui-justify-center">
				<kui-button type="primary">点击关闭</kui-button>
			</view>
		</kui-container>
	</kui-popup>
	<kui-popup ref="popupBottom" height="200rpx" position="bottom">
		<kui-container :marginY="0" height="100%" background-color="transparent">
			<view class="kui-mx-3 kui-my-10 kui-flex kui-justify-center">
				<kui-button type="primary">点击关闭</kui-button>
			</view>
		</kui-container>
	</kui-popup>
</template>

<script lang="ts">
	import {
		reactive,
		SetupContext,
		getCurrentInstance,
		toRefs,
		nextTick
	} from 'vue';

	export default {
		setup(props, context: SetupContext) {
			const {
				proxy
			} = getCurrentInstance();

			const data = reactive({
				position: '',
				radiusSize: '',
				id: 0
			});

			const openPopup = (p: string = '', r: string = '') => {
				nextTick(() => {
					data.position = p ? p : '';
					data.radiusSize = r ? r : 'none';
					if (p === 'top') {
						console.log(p);
						proxy.$refs['popupTop'].changeRadiusSize(data.radiusSize);
						proxy.$refs['popupTop'].open();
					} else if (p === 'bottom') {
						proxy.$refs['popupBottom'].changeRadiusSize(data.radiusSize);
						proxy.$refs['popupBottom'].open();
					}
				});
			};

			return {
				openPopup,
				...toRefs(data)
			}
		}
	}
</script>

<style>

</style>

```

### 图标用法

通过组件提供的 `show-icon` 属性可以显示弹出层的图标，`close-icon-position` 属性可以设置图标的位置，`close-icon-type` 属性可以设置图标的类型。

```vue
<template>
	<kui-page :custom-header="false">
		<template v-slot:body>
			<view class="kui-mt-3">
				<kui-cell-group title="图标用法">
					<kui-cell title="关闭图标" @click="openPopupIcon('bottom')"></kui-cell>
					<kui-cell title="图标位置" @click="openPopupIconPosition('bottom')"></kui-cell>
					<kui-cell title="自定义图标" @click="openPopupIconType('bottom')"></kui-cell>
				</kui-cell-group>
			</view>
		</template>
	</kui-page>
	<kui-popup ref="popupIcon" show-icon height="200px" position="bottom">
		<kui-container :marginY="0" height="auto" background-color="transparent">
			<view>
				<kui-text>测试内容icon</kui-text>
			</view>
		</kui-container>
	</kui-popup>
	<kui-popup ref="popupIconPosition" show-icon close-icon-position="left" height="200px" position="bottom">
		<kui-container :marginY="0" height="auto" background-color="transparent">
			<view class="kui-mt-3">
				<kui-text>测试内容icon_position</kui-text>
			</view>
		</kui-container>
	</kui-popup>
	<kui-popup ref="popupIconType" show-icon close-icon-type="clear" height="200px" position="bottom">
		<kui-container :marginY="0" height="auto" background-color="transparent">
			<view class="kui-mt-3">
				<kui-text>测试内容icon_type</kui-text>
			</view>
		</kui-container>
	</kui-popup>
</template>

<script lang="ts">
	import {
		SetupContext,
		getCurrentInstance,
		nextTick
	} from 'vue';

	export default {
		setup(props, context: SetupContext) {
			const {
				proxy
			} = getCurrentInstance();
			
			const openPopupIcon = () => {
				nextTick(() => {
					proxy.$refs['popupIcon'].open();
				})
			}
			
			const openPopupIconPosition = () => {
				nextTick(() => {
					proxy.$refs['popupIconPosition'].open();
				})
			}
			
			const openPopupIconType = () => {
				nextTick(() => {
					proxy.$refs['popupIconType'].open();
				})
			}

			return {
				openPopupIcon,
				openPopupIconPosition,
				openPopupIconType,
			}
		}
	}
</script>

<style>

</style>

```

### 自定义关闭事件

通过组件提供的 `close-on-click-mask` 属性禁用默认关闭事件，通过组件提供的 `click-close-icon` 事件可以自定义关闭。

```vue
<template>
	<kui-page :custom-header="false">
		<template v-slot:body>
			<view class="kui-mt-3">
				<kui-cell-group title="自定义关闭事件">
					<kui-cell title="手动关闭" @click="openPopupClose"></kui-cell>
				</kui-cell-group>
			</view>
		</template>
	</kui-page>
	<kui-popup ref="popupClose" :close-on-click-mask="false" show-icon height="200px" position="bottom" @click-close-icon="onClickCloseIcon">
		<kui-container :marginY="0" height="auto" background-color="transparent">
			<view class="kui-mt-3">
				<kui-text>测试内容close</kui-text>
			</view>
		</kui-container>
	</kui-popup>
</template>

<script lang="ts">
	import {
		SetupContext,
		getCurrentInstance,
		nextTick
	} from 'vue';

	export default {
		setup(props, context: SetupContext) {
			const {
				proxy
			} = getCurrentInstance();
			
			const onClickCloseIcon = () => {
				nextTick(() => {
					proxy.$refs['popupClose'].forceClose();
				})
			}

			return {
				onClickCloseIcon
			}
		}
	}
</script>

<style>

</style>

```

### 回调事件

通过组件提供的 `close` 和 `open` 事件可以接收弹出层关闭和打开时的回调。

```vue
<template>
	<kui-page :custom-header="false">
		<template v-slot:body>
			<view class="kui-mt-3">
				<kui-cell-group title="回调事件">
					<kui-cell title="打开弹出层" @click="openPopupEvent('center')"></kui-cell>
				</kui-cell-group>
			</view>
		</template>
	</kui-page>
	<kui-popup ref="popupEvent" radius-size="sm" @open="onOpen" @close="onClose">
		<kui-container width="300px" background-color="#FFFFFF">
			<view
				class="kui-h-full kui-box-border kui-flex kui-justify-center kui-items-center kui-leading-5 kui-py-0">
				<kui-text size="18px" decode>金尊清酒斗十千，<br />玉盘珍羞直万钱。<br />停杯投箸不能食，<br />拔剑四顾心茫然。</kui-text>
			</view>
		</kui-container>
	</kui-popup>
</template>

<script lang="ts">
	import {
		SetupContext,
		getCurrentInstance,
		nextTick
	} from 'vue';

	export default {
		setup(props, context: SetupContext) {
			const {
				proxy
			} = getCurrentInstance();
			
			const openPopupEvent = () => {
				nextTick(() => {
					proxy.$refs['popupEvent'].open();
				});
			}
			
			const onOpen = () => {
				uni.showToast({
					title: '已打开'
				});
			}
			
			const onClose = () => {
				uni.showToast({
					title: '已关闭'
				});
			}

			return {
				openPopupEvent,
				onOpen,
				onClose
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
| width | 宽度 | string | -
| height | 高度 | string | -
| position | 弹出层弹出位置，可选值为 `center` `top` `right` `bottom` `left` | string | `center`
| close-on-click-mask | 点击遮罩是否关闭 | Boolean | `true`
| radius-size`通用属性` | 弹出层圆角大小 | String | `base`
| show | 是否显示 | Boolean | `false`
| show-icon | 是否显示图标 | Boolean | `false`
| close-icon-position | 图标位置，可选值为 `left` `right` | String | `right`
| close-icon-type | 图标类型，参考 <a href="/components/icon">Icon 图标</a> | String | -
| close-icon-color | 关闭图标颜色 | String | `rgba(0,0,0,0.5)`
| close-icon-size | 关闭图标大小 | Number | `40`
| overlay-ness | 遮罩透明度 | Number | `0.6`
| mode`通用属性` | 页面模式，可选值为 `light` `dark` | String  | `light`

### Position 有效值
| 值 | 说明
|----|-----
| center | 居中弹出
| top | 顶部弹出
| right | 右边弹出
| bottom | 底部弹出
| left | 左边弹出

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

### CloseIconPosition 有效值
| 值 | 说明
|----|-----
| left | 左边
| right | 右边

### Mode 有效值
| 值 | 说明
|----|-----
| light | 明亮模式
| dark | 暗黑模式

### Slots

| 名称 | 说明
|------|-----
| content | 弹出层自定义内容

### Events

| 名称 | 说明 | 回调参数
|------|-----| -------
| open | 弹出层打开时触发 | -
| close | 弹出层关闭时触发 | -
| click-close-icon | 自定义关闭事件 | -