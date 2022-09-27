# Snackbar 消息条

### 介绍

在页面顶部或者底部展示消息提示。

<!--@include: ./tips/introduce.md-->

## 代码演示

### 基本用法

通过组件提供的 `show` 属性可以设置消息条的显示状态。

```vue
<template>
	<view class="kui-w-full kui-h-full">
		<kui-page :custom-header="false">
			<template v-slot:body>
				<view class="kui-w-full kui-h-full kui-py-5">
					<kui-space :gap="[30,0]" direction="column">
						<kui-cell-group :title="baseState.state.content">
							<kui-cell title="基本用法" :show-right-icon="false" @click="baseState.methods.onClick"></kui-cell>
						</kui-cell-group>
					</kui-space>
				</view>
			</template>
		</kui-page>
		<kui-snackbar 
            v-model:show="baseState.state.show" 
            :content="baseState.state.content" 
            :top="baseState.state.top">
        </kui-snackbar>
	</view>
</template>

<script lang="ts">
	import {
		reactive,
		toRefs
	} from 'vue';
	
	export default {
		setup() {
			const baseState = {
				state: reactive({
					show: false,
					content: '基本用法',
					top: 0
				}),
				methods: {
					onClick() {
						// #ifdef H5
						baseState.state.top = 44;
						// #endif
						baseState.state.show = true;
					}
				}
			};
			
			return {
				baseState
			}
		}
	}
</script>

<style>

</style>

```

### 消息类型

通过组件提供的 `type` 属性可以设置消息条的类型。

```vue
<template>
	<view class="kui-w-full kui-h-full">
		<kui-page :custom-header="false">
			<template v-slot:body>
				<view class="kui-w-full kui-h-full kui-py-5">
					<kui-space :gap="[30,0]" direction="column">
						<kui-cell-group title="消息类型">
							<kui-cell title="主要通知" :show-right-icon="false" @click="typeState.methods.onClick('info', '主要通知')"></kui-cell>
							<kui-cell title="成功通知" :show-right-icon="false" @click="typeState.methods.onClick('success', '成功通知')"></kui-cell>
							<kui-cell title="警告通知" :show-right-icon="false" @click="typeState.methods.onClick('warning', '警告通知')"></kui-cell>
							<kui-cell title="危险通知" :show-right-icon="false" @click="typeState.methods.onClick('danger', '危险通知')"></kui-cell>
						</kui-cell-group>
					</kui-space>
				</view>
			</template>
		</kui-page>
		<kui-snackbar 
            v-model:show="typeState.state.show" 
            :content="typeState.state.content" 
            :type="typeState.state.type" 
            :top="typeState.state.top">
        </kui-snackbar>
	</view>
</template>

<script lang="ts">
	import {
		reactive,
		toRefs
	} from 'vue';
	
	export default {
		setup() {
			const typeState = {
				state: reactive({
					show: false,
					content: '',
					type: 'primary',
					top: 0
				}),
				methods: {
					onClick(type: string, content: string) {
						// #ifdef H5
						typeState.state.top = 44;
						// #endif
						typeState.state.show = true;
						typeState.state.content = content;
						typeState.state.type = type;
					}
				}
			};
			
			return {
				typeState
			}
		}
	}
</script>

<style>

</style>

```

### 朴素类型

通过组件提供的 `plain` 属性可以设置消息条为朴素类型（浅色底色）。

```vue
<template>
	<view class="kui-w-full kui-h-full">
		<kui-page :custom-header="false">
			<template v-slot:body>
				<view class="kui-w-full kui-h-full kui-py-5">
					<kui-space :gap="[30,0]" direction="column">
						<kui-cell-group title="朴素类型">
							<kui-cell title="主要通知" :show-right-icon="false" @click="plainState.methods.onClick('info', '主要通知')"></kui-cell>
							<kui-cell title="成功通知" :show-right-icon="false" @click="plainState.methods.onClick('success', '成功通知')"></kui-cell>
							<kui-cell title="警告通知" :show-right-icon="false" @click="plainState.methods.onClick('warning', '警告通知')"></kui-cell>
							<kui-cell title="危险通知" :show-right-icon="false" @click="plainState.methods.onClick('danger', '危险通知')"></kui-cell>
						</kui-cell-group>
					</kui-space>
				</view>
			</template>
		</kui-page>
		<kui-snackbar 
            v-model:show="plainState.state.show" 
            :content="plainState.state.content" 
            :type="plainState.state.type" 
            :top="plainState.state.top" 
            plain>
        </kui-snackbar>
	</view>
</template>

<script lang="ts">
	import {
		reactive,
		toRefs
	} from 'vue';
	
	export default {
		setup() {
			const plainState = {
				state: reactive({
					show: false,
					content: '',
					type: 'primary',
					top: 0
				}),
				methods: {
					onClick(type: string, content: string) {
						// #ifdef H5
						plainState.state.top = 44;
						// #endif
						plainState.state.show = true;
						plainState.state.content = content;
						plainState.state.type = type;
					}
				}
			}
			
			return {
				plainState
			}
		}
	}
</script>

<style>

</style>

```

### 非通栏类型

通过组件提供的 `full` 属性可以设置消息条为通栏和非通栏类型。

```vue
<template>
	<view class="kui-w-full kui-h-full">
		<kui-page :custom-header="false">
			<template v-slot:body>
				<view class="kui-w-full kui-h-full kui-py-5">
					<kui-space :gap="[30,0]" direction="column">
						<kui-cell-group title="非通栏类型">
							<kui-cell title="非通栏类型" :show-right-icon="false" @click="noFullState.methods.onClick"></kui-cell>
						</kui-cell-group>
					</kui-space>
				</view>
			</template>
		</kui-page>
		<kui-snackbar 
            v-model:show="noFullState.state.show" 
            :content="noFullState.state.content" 
            :top="noFullState.state.top" 
            background-color="#333333" 
            :full="false" 
            :opacity="0.8">
        </kui-snackbar>
	</view>
</template>

<script lang="ts">
	import {
		reactive,
		toRefs
	} from 'vue';
	
	export default {
		setup() {
			const noFullState = {
				state: reactive({
					show: false,
					content: '非通栏类型',
					top: 0
				}),
				methods: {
					onClick() {
						// #ifdef H5
						noFullState.state.top = 44;
						// #endif
						noFullState.state.show = true;
					}
				}
			};
			
			return {
				noFullState
			}
		}
	}
</script>

<style>

</style>

```

### 自定义样式

通过组件提供的 `background-color` 属性可以设置消息条的背景色，`color` 属性可以设置消息条的文本色。

```vue
<template>
	<view class="kui-w-full kui-h-full">
		<kui-page :custom-header="false">
			<template v-slot:body>
				<view class="kui-w-full kui-h-full kui-py-5">
					<kui-space :gap="[30,0]" direction="column">
						<kui-cell-group title="自定义样式">
							<kui-cell title="自定义背景色和字体颜色" :show-right-icon="false" @click="cusState.methods.onClick"></kui-cell>
						</kui-cell-group>
					</kui-space>
				</view>
			</template>
		</kui-page>
		<kui-snackbar 
            v-model:show="cusState.state.show" 
            :content="cusState.state.content" 
            :top="cusState.state.top" 
            :background-color="cusState.state.backgroundColor" 
            :color="cusState.state.color">
        </kui-snackbar>
	</view>
</template>

<script lang="ts">
	import {
		reactive,
		toRefs
	} from 'vue';
	
	export default {
		setup() {
			const cusState = {
				state: reactive({
					show: false,
					content: '自定义背景色和字体颜色',
					top: 0,
					backgroundColor: 'rgba(0,0,0,0.2)',
					color: 'rgba(0,0,0,1)'
				}),
				methods: {
					onClick() {
						// #ifdef H5
						cusState.state.top = 44;
						// #endif
						cusState.state.show = true;
					}
				}
			};
			
			return {
				cusState
			}
		}
	}
</script>

<style>

</style>

```

### 垂直排列

通过组件提供的 `content-center` 属性可以设置消息条内容禁止居中显示，搭配组件提供的 `action` 插槽可以增加动作按钮，实现带动作按钮的消息条效果。

```vue
<template>
	<view class="kui-w-full kui-h-full">
		<kui-page :custom-header="false">
			<template v-slot:body>
				<view class="kui-w-full kui-h-full kui-py-5">
					<kui-space :gap="[30,0]" direction="column">
						<kui-cell-group title="垂直排列">
							<kui-cell title="自定义动作按钮-通栏类型" :show-right-icon="false" @click="verState.methods.onClick"></kui-cell>
							<kui-cell title="自定义动作按钮-非通栏类型" :show-right-icon="false" @click="verState.methods.onClick(false, '自定义动作按钮-非通栏类型')"></kui-cell>
						</kui-cell-group>
					</kui-space>
				</view>
			</template>
		</kui-page>
		<kui-snackbar 
            v-model:show="verState.state.show" 
            :content="verState.state.content" 
            :top="verState.state.top" 
            :background-color="verState.state.backgroundColor" 
            :content-center="false" 
            :full="verState.state.full" 
            action-slot>
			<template v-slot:action>
				<kui-button type="primary" shape="square" size="small">关闭</kui-button>
			</template>
		</kui-snackbar>
	</view>
</template>

<script lang="ts">
	import {
		reactive,
		toRefs
	} from 'vue';
	
	export default {
		setup() {
			const verState = {
				state: reactive({
					show: false,
					content: '自定义动作按钮',
					top: 0,
					backgroundColor: 'rgba(0,0,0,1)',
					contentCenter: false,
					full: true
				}),
				methods: {
					onClick(full: boolean = true, content: string = '自定义动作按钮-通栏类型') {
						// #ifdef H5
						verState.state.top = 44;
						// #endif
						verState.state.show = true;
						verState.state.full = full;
						verState.state.content = content;
					}
				}
			};
			
			return {
				verState
			}
		}
	}
</script>

<style>

</style>

```

### 自定义位置

通过组件提供的 `position` 属性可以设置消息条显示的位置。

```vue
<template>
	<view class="kui-w-full kui-h-full">
		<kui-page :custom-header="false">
			<template v-slot:body>
				<view class="kui-w-full kui-h-full kui-py-5">
					<kui-space :gap="[30,0]" direction="column">
						<kui-cell-group title="自定义位置">
							<kui-cell title="自定义位置-下-通栏" :show-right-icon="false" @click="positionState.methods.onClick('bottom', '自定义位置-下-通栏')"></kui-cell>
							<kui-cell title="自定义位置-下-非通栏" :show-right-icon="false" @click="positionState.methods.onClick('bottom', '自定义位置-下-非通栏', 0, false)"></kui-cell>
							<kui-cell title="自定义位置-上-通栏" :show-right-icon="false" @click="positionState.methods.onClick('top', '自定义位置-上-通栏')"></kui-cell>
							<kui-cell title="自定义位置-上-非通栏" :show-right-icon="false" @click="positionState.methods.onClick('top', '自定义位置-上-非通栏', 0, false)"></kui-cell>
						</kui-cell-group>
					</kui-space>
				</view>
			</template>
		</kui-page>
		<kui-snackbar 
            v-model:show="positionState.state.show" 
            :content="positionState.state.content" 
            :bottom="positionState.state.bottom" 
            :top="positionState.state.top" 
            :position="positionState.state.position" 
            :full="positionState.state.full">
        </kui-snackbar>
	</view>
</template>

<script lang="ts">
	import {
		reactive,
		toRefs
	} from 'vue';
	
	export default {
		setup() {
			const positionState = {
				state: reactive({
					show: false,
					content: '自定义位置',
					bottom: 0,
					top: 0,
					position: 'bottom',
					full: true
				}),
				methods: {
					onClick(positon: string = 'bottom', content: string = '自定义动作按钮-通栏类型', bottom: number = 0, full: boolean = true) {
						// #ifdef H5
						positionState.state.top = 44;
						// #endif
						positionState.state.show = true;
						positionState.state.position = positon;
						positionState.state.bottom = 0;
						positionState.state.content = content;
						positionState.state.full = full;
					}
				}
			};
			
			return {
				positionState
			}
		}
	}
</script>

<style>

</style>

```

### 自定义时长

通过组件提供的 `duration` 属性可以设置消息条显示的时长。

```vue
<template>
	<view class="kui-w-full kui-h-full">
		<kui-page :custom-header="false">
			<template v-slot:body>
				<view class="kui-w-full kui-h-full kui-py-5">
					<kui-space :gap="[30,0]" direction="column">
						<kui-cell-group title="自定义时长">
							<kui-cell title="自定义时长" :show-right-icon="false" @click="durationState.methods.onClick"></kui-cell>
						</kui-cell-group>
					</kui-space>
				</view>
			</template>
		</kui-page>
		<kui-snackbar 
            v-model:show="durationState.state.show" 
            :content="durationState.state.content" 
            :top="durationState.state.top" 
            :duration="durationState.state.duration * 1000" 
            @closed="durationState.methods.closed">
        </kui-snackbar>
	</view>
</template>

<script lang="ts">
	import {
		reactive,
		toRefs
	} from 'vue';
	
	export default {
		setup() {
			const durationState = {
				state: reactive({
					show: false,
					content: '自定义时长 5s',
					duration: 5,
					durationS: 5,
					top: 0,
					timer: null
				}),
				methods: {
					onClick() {
						// #ifdef H5
						durationState.state.top = 44;
						// #endif
						durationState.state.show = true;
						durationState.state.timer = setInterval(() => {
							durationState.state.durationS--;
							durationState.state.content = `自定义时长 ${durationState.state.durationS}s`
						}, 1000);
					},
					closed() {
						clearInterval(durationState.state.timer);
						durationState.state.durationS = 5;
						durationState.state.content = `自定义时长 ${durationState.state.durationS}s`;
					}
				}
			};
			
			return {
				durationState
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
| type`通用属性` | 消息条类型，可选值为 `primary` `info` `warning` `danger` `success` | String  | `primary`
| show | 展示状态 | Boolean | `false`
| position | 显示位置，可选值为 `top` `bottom` | String | `top`
| duration | 显示时长，单位`ms` | Number | `3000`
| content | 消息内容 | String | -
| content-center | 消息内容是否居中 | Boolean | `true`
| class-name | 自定义类名 | String | -
| loading-type`暂不开放` | 加载中图标类型，可参考 <a href="/components/icon">Icon 图标</a> | String | -
| loading-size`暂不开放` | 加载中图标大小 | String | `normal`
| forbid-click`暂不开放` | 是否禁止穿透点击 | Boolean | `false`
| background-color | 背景色 | String | -
| color | 文本色 | String | -
| plain | 是否为朴素类型 | Boolean | `false`
| top | 自定义top位置 | Number | `0`
| bottom | 自定义bottom位置 | Number | `0`
| full | 是否通栏 | Boolean | `true`
| opacity | 透明度 | Number | `1`
| action-slot | 是否使用action插槽 | Boolean | `false`

### Type 有效值
| 值 | 说明
|----|-----
| primary | 主要类型
| info | 信息类型
| warning | 警告类型
| danger | 危险类型
| success | 成功类型

### Position 有效值
| 值 | 说明
|----|-----
| top | 显示在顶部
| bottom | 显示在底部

### Slots

| 名称 | 说明
|----|-----
| default | 自定义消息条内容区
| action | 动作按钮区

### Events

| 事件名 | 说明 | 回调参数
|--------|------| -----
| closed | 消息条关闭时触发 | -