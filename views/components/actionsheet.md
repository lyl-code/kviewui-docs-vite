# ActionSheet 动作面板

### 介绍
从底部弹出一个动作面板供用户选择选项。

<!--@include: ./tips/introduce.md-->

## 基本用法

### 基本用法

组件提供 `v-model:show` 属性实现动作面板的显示隐藏实时状态监听，提供 `actions` 属性供用户设置动作面板显示的内容项。
``` vue
<template>
    <view>
        <kui-page :custom-header="false">
            <template #body>
                <kui-cell-group title="基本用法">
                    <kui-cell title="基本用法" @click="baseState.methods.onClick">
                        <template #right-icon>
                            <kui-text>{{ baseState.state.val }}</kui-text>
                        </template>
                    </kui-cell>
                </kui-cell-group>
            </template>
        </kui-page>
        <kui-actionsheet 
            v-model:show="baseState.state.show" 
            :actions="baseState.state.actions" 
            @choose="baseState.methods.onChoose">
        </kui-actionsheet>
    </view>
</template>
<script lang="ts">
    import {
		reactive
	} from 'vue';

    export default {
		setup() {
			const baseState = {
				state: reactive({
					show: false,
					actions: [{
						name: '选项一'
					}, {
						name: '选项二'
					}, {
						name: '选项三'
					}],
					val: ''
				}),
				methods: {
					onClick() {
						baseState.state.show = true;
					},
					onChoose(item) {
						baseState.state.val = item.name;
					}
				}
			};
			
			return {
				baseState
			}
		}
	}
 </script>
```

### 展示取消按钮

组件提供 `cancel-text` 属性可以让用户自定义取消按钮内容。

``` vue
<template>
    <view>
        <kui-page :custom-header="false">
            <template #body>
                <kui-cell-group title="基本用法">
                    <kui-cell title="展示取消按钮" @click="cancelState.methods.onClick">
                        <template #right-icon>
                            <kui-text>{{ cancelState.state.val }}</kui-text>
                        </template>
                    </kui-cell>
                </kui-cell-group>
            </template>
        </kui-page>
        <kui-actionsheet 
            v-model:show="cancelState.state.show" 
            :actions="cancelState.state.actions" 
            :cancel-text="cancelState.state.cancelText"
            @choose="cancelState.methods.onChoose">
        </kui-actionsheet>
    </view>
</template>
<script lang="ts">
    import {
		reactive
	} from 'vue';

    export default {
		setup() {
			const baseState = {
				state: reactive({
					show: false,
					actions: [{
						name: '选项一'
					}, {
						name: '选项二'
					}, {
						name: '选项三'
					}],
					val: ''
				}),
				methods: {
					onClick() {
						baseState.state.show = true;
					},
					onChoose(item) {
						baseState.state.val = item.name;
					}
				}
			};

            const cancelState = {
				state: reactive({
					...baseState.state,
					cancelText: '取消'
				}),
				methods: {
					onClick() {
						cancelState.state.show = true;
					},
					onChoose(item) {
						cancelState.state.val = item.name;
					}
				}
			};
			
			return {
				baseState,
                cancelState
			}
		}
	}
 </script>
```

### 展示标题和描述

组件提供了 `description` 属性可以让用户自定义描述内容，`title` 属性可以让用户自定义标题内容。

``` vue
<template>
    <view>
        <kui-page :custom-header="false">
            <template #body>
                <kui-cell-group title="基本用法">
                    <kui-cell title="展示标题和描述" @click="descState.methods.onClick">
                        <template #right-icon>
                            <kui-text>{{ descState.state.val }}</kui-text>
                        </template>
                    </kui-cell>
                </kui-cell-group>
            </template>
        </kui-page>
        <kui-actionsheet 
            v-model:show="descState.state.show" 
            :actions="descState.state.actions" 
            :description="descState.state.description"
            :title="descState.state.title"
            @choose="descState.methods.onChoose">
        </kui-actionsheet>
    </view>
</template>
<script lang="ts">
    import {
		reactive
	} from 'vue';

    export default {
		setup() {
			const descState = {
				state: reactive({
					show: false,
					actions: [{
						name: '选项一',
					}, {
						name: '选项二',
						description: '这是描述信息',
						color: '#00BC79'
					}, {
						name: '选项三'
					}],
					title: '这是标题',
					description: '这是描述信息',
					val: ''
				}),
				methods: {
					onClick() {
						descState.state.show = true;
					},
					onChoose(item) {
						descState.state.val = item.name;
					}
				}
			};
			
			return {
				descState
			}
		}
	}
 </script>
```

## 选项状态

### 不同选项状态

可以通过 `actions` 属性数组的 `loading` `disable` 属性设置面板选项的状态为 `加载中` `禁用`，通过 `choose-item-value` 属性可以设置默认选中内容。

``` vue
<template>
    <view>
        <kui-page :custom-header="false">
            <template #body>
                <kui-cell-group title="选项状态">
                    <kui-cell title="不同选项状态" @click="statusState.methods.onClick">
                        <template #right-icon>
                            <kui-text>{{ statusState.state.val }}</kui-text>
                        </template>
                    </kui-cell>
                </kui-cell-group>
            </template>
        </kui-page>
        <kui-actionsheet 
            v-model:show="statusState.state.show" 
            :choose-item-value="statusState.state.chooseItemValue"
            :actions="statusState.state.actions" 
            @choose="statusState.methods.onChoose">
        </kui-actionsheet>
    </view>
</template>
<script lang="ts">
    import {
		reactive
	} from 'vue';

    export default {
		setup() {
			const statusState = {
				state: reactive({
					show: false,
					actions: [{
						name: '选中选项'
					}, {
						name: '加载选项',
						loading: true
					}, {
						name: '禁用选项',
						disable: true
					}],
					chooseItemValue: '选中选项',
					val: ''
				}),
				methods: {
					onClick() {
						statusState.state.show = true;
					},
					onChoose(item) {
						statusState.state.val = item.name;
					}
				}
			};
			
			return {
				statusState
			}
		}
	}
 </script>
```


## Props

| 字段             | 说明                                   | 类型    | 默认值    |
|------------------|----------------------------------------|---------|-----------|
| v-model:show       | 是否展示动作面板                             | Boolean | false|
| actions       | 列表项                                 | Array   | [ ]       |
| title | 标题 | String | -
| description | 描述信息 | String | -
| cancel-text | 取消按钮文案 | String | -
| close-on-click-overlay | 点击遮罩是否关闭 | Boolean | `true`
| choose-item-color | 选中项的颜色，支持<a href="/guide/theme">主题</a> | String | `primary`
| choose-item-value | 选中项的文本内容 | String | -
| mode `通用属性`      | 页面模式，可选值为 `light` `dark`                   | String  | `light`

## actions数据结构

| 字段   | 说明               | 类型                          |
|--------|--------------------|-----------------------------------|
| name | 标题      | String    |
| description | 描述信息 | String          |
| color | 选项字体颜色（选中项颜色层级>选项字体颜色） | String          |
| loading | 是否为loading状态 | Boolean          |
| disable | 是否为禁用状态 | Boolean       |

## Events

| 字段   | 说明               | 回调参数                          |
|--------|--------------------|-----------------------------------|
| choose | 选择之后触发       | 选中列表项item, 选中的索引值index |
| cancel | 点击取消按钮时触发 | 无                                |
| close | 点击遮罩层时触发 | event: Event                              |