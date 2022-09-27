# Tag 标签

### 介绍

用于标记关键词和主要内容。

<!--@include: ./tips/introduce.md-->

## 代码演示

以下代码演示中的 `kui-space` 为组件库的 <a href="/components/space">Space 间隔</a> 组件。

### 标签类型

标签支持 `primary`、`info`、`warning`、`danger`、`success` 五种主题类型，默认为 ''。

```vue
<template>
    <kui-cell-group title="标签类型">
        <view class="kui-w-full">
            <kui-space :gap="[30, 20]">
                <kui-tag>默认标签</kui-tag>
                <kui-tag type="primary">主要标签</kui-tag>
                <kui-tag type="info">信息标签</kui-tag>
                <kui-tag type="danger">危险标签</kui-tag>
                <kui-tag type="warning">警告标签</kui-tag>
                <kui-tag type="success">成功标签</kui-tag>
            </kui-space>
        </view>
    </kui-cell-group>
</template>

```

### 空心标签

通过 `plain` 属性可以设置空心标签样式。

```vue
<template>
    <kui-cell-group title="空心标签">
        <kui-tag type="primary" plain>空心标签</kui-tag>
    </kui-cell-group>
</template>
```

### 标签形状

通过 `shape` 属性可以设置标签形状，支持 方形和圆形，默认为圆形。

```vue
<template>
    <kui-cell-group title="方形标签">
        <kui-tag shape="square" type="primary">方形标签</kui-tag>
    </kui-cell-group>
    <kui-cell-group title="圆形标签">
        <kui-tag shape="round" type="primary">圆形标签</kui-tag>
    </kui-cell-group>
</template>
```

### 标签尺寸

通过 `size` 属性可以设置标签尺寸，支持大号、普通、小型和迷你不同的尺寸。

```vue
<template>
    <kui-cell-group title="标签尺寸">
        <view class="kui-mb-3">
            <kui-tag size="large" type="primary">大号标签</kui-tag>
        </view>
        <kui-space :gap="[30,20]" align="center">
            <kui-tag size="normal" type="primary">普通标签</kui-tag>
            <kui-tag size="small" type="primary">小型标签</kui-tag>
            <kui-tag size="mini" type="primary">迷你标签</kui-tag>
        </kui-space>
    </kui-cell-group>
</template>
```

### 块级标签

通过 `block` 属性可以设置独立行的块级标签。

```vue
<template>
    <kui-cell-group title="块级标签">
        <view class="kui-w-full">
            <kui-tag type="primary" block>块级标签</kui-tag>
        </view>
    </kui-cell-group>
</template>
```

### 半圆角标签

通过 `half-round` 属性可以设置半圆角标签，支持左半圆和右半圆。

```vue
<template>
    <kui-cell-group title="半圆角标签">
        <view class="kui-w-full">
            <view class="kui-mb-3">
                <kui-tag size="large" half-round="right" type="primary">大号标签</kui-tag>
            </view>
            <kui-space :gap="[30,20]" align="center">
                <kui-tag size="normal" half-round="right" type="primary">普通标签</kui-tag>
                <kui-tag size="small" half-round="right" type="primary">小型标签</kui-tag>
                <kui-tag size="mini" half-round="right" type="primary">迷你标签</kui-tag>
            </kui-space>
        </view>
        <view class="kui-w-full">
            <view class="kui-my-3">
                <kui-tag size="large" half-round="left" type="primary">大号标签</kui-tag>
            </view>
            <kui-space :gap="[30,20]" align="center">
                <kui-tag size="normal" half-round="left" type="primary">普通标签</kui-tag>
                <kui-tag size="small" half-round="left" type="primary">小型标签</kui-tag>
                <kui-tag size="mini" half-round="left" type="primary">迷你标签</kui-tag>
            </kui-space>
        </view>
    </kui-cell-group>
</template>
```

### 可关闭标签

通过 `closable` 属性可以设置为可关闭标签，使用 `close-icon` 属性可设置标签的关闭图标样式（必须在 `closable` 为 `true` 下才能生效）。

```vue
<template>
    <kui-cell-group title="可关闭标签">
        <kui-space :gap="[30,20]">
            <kui-tag closable>可关闭标签</kui-tag>
            <kui-tag closable close-icon="trash">自定义关闭图标</kui-tag>
        </kui-space>
    </kui-cell-group>
</template>
```

### 加载中标签

通过 `loading` 属性可以设置加载中状态的标签，使用 `loading-icon` 属性可以设置标签的加载中图标样式（必须在 `loading` 为 `true` 下才能生效）。

```vue
<template>
    <kui-cell-group title="加载中标签">
        <kui-space :gap="[30,20]">
            <kui-tag loading>加载中标签</kui-tag>
            <kui-tag loading loading-icon="spinner6">自定义关闭图标</kui-tag>
        </kui-space>
    </kui-cell-group>
</template>
```

### 可选中标签

通过 `checkable` 属性可以设置标签为可选中，使用 `default-checked` 属性可以设置标签默认选中状态。

```vue
<template>
    <kui-cell-group title="可选中标签" desc="(控制台可查看组件选中结果)">
        <kui-space :gap="[30,20]">
            <kui-tag type="primary" checkable>默认未选中</kui-tag>
            <kui-tag type="primary" checkable :default-checked="true">默认选中</kui-tag>
            <kui-tag type="info" ref="checkableTag1" checkable :default-checked="checked1" @click="onCheck1">点击选中</kui-tag>
            <kui-tag type="info" ref="checkableTag2" checkable :default-checked="checked2" :auto-checked="autoChecked" @click="onCheck2">点击手动选中</kui-tag>
        </kui-space>
    </kui-cell-group>
</template>
<script lang="ts">
    import {
        getCurrentInstance,
		reactive,
		nextTick,
		toRefs
    } from 'vue';

    const modal = (title: string = '', content: string = '', showCancel: boolean = false, cancelText: string = '取消',          confirmText: string = '确定', success: any = () => { }, fail: any = () => { }, complete: any = () => { }) => {
        uni.showModal({
            title: title,
            content: content,
            showCancel: showCancel,
            cancelText: cancelText,
            confirmText: confirmText,
            success: success,
            fail: fail,
            complete: complete
        });
    }

    export default {
        setup() {
            const {
				proxy
			}: any = getCurrentInstance();
			const theme = proxy.$theme;

            const state = reactive({
				checked1: false,
				checked2: false,
				autoChecked: false,
				mode: 'light',
				modeChecked: false
			});

            const onCheck1 = (e) => {
				nextTick(() => {
					state.checked1 = !state.checked1;
					setTimeout(() => {
						console.log(proxy.$refs['checkableTag1'].getState());
					}, 0);
				})
			}
			
			const onCheck2 = (e) => {
				nextTick(() => {
					state.autoChecked = false;
					if (!state.checked2) {
						modal('提示', '是否选中', true, '否', '是', (res) => {
							if (res.confirm) {
								state.autoChecked = true;
								state.checked2 = true;
								setTimeout(() => {
									console.log(proxy.$refs['checkableTag2'].getState());
								}, 0);
							}
						})
					} else {
						modal('提示', '是否取消选中', true, '否', '是', (res) => {
							if (res.confirm) {
								state.autoChecked = true;
								state.checked2 = false;
								setTimeout(() => {
									console.log(proxy.$refs['checkableTag2'].getState());
								}, 0);
							}
						})
					}
					console.log(proxy.$refs['checkableTag2'].getState());
				})
			}

            return {
				...toRefs(state),
				onCheck1,
				onCheck2
			}
        }
    }
</script>
```

### 自定义颜色

通过 `background-color` 属性可以设置标签背景色，`text-color` 属性可以设置标签文本色。

```vue
<template>
    <kui-cell-group title="自定义颜色">
        <kui-space :gap="[30,20]">
            <kui-tag background-color="pink" text-color="#fff">标签</kui-tag>
            <kui-tag background-color="pink" plain>标签</kui-tag>
            <kui-tag background-color="rgba(0,0,0,1)" border-color="rgba(0,0,0,0.1)" plain>标签</kui-tag>
            <kui-tag background-color="#FFE4BA" text-color="#FF7D00">标签</kui-tag>
        </kui-space>
    </kui-cell-group>
</template>
```

### 自定义插槽

通过 `left-icon` 插槽可以设置标签左图标区域内容，`right-icon` 插槽可以设置标签右图标区域内容，也可以同时设置左右两个插槽内容。

```vue
<template>
    <kui-cell-group title="自定义插槽">
        <kui-space :gap="[30,20]">
            <kui-tag>
                <template v-slot:left-icon>
                    <kui-icons type="star"></kui-icons>
                </template>
                左侧插槽
            </kui-tag>
            <kui-tag>
                右侧插槽
                <template v-slot:right-icon>
                    <kui-icons type="heart"></kui-icons>
                </template>
            </kui-tag>
            <kui-tag>
                <template v-slot:left-icon>
                    <kui-icons type="star"></kui-icons>
                </template>
                左右两侧插槽
                <template v-slot:right-icon>
                    <kui-icons type="heart"></kui-icons>
                </template>
            </kui-tag>
        </kui-space>
    </kui-cell-group>
</template>
```

## API

### Props 

| 字段       | 说明                                             | 类型    | 默认值    |
|------------|--------------------------------------------------|---------|-----------|
| type       | 标签类型，可选值为 `primary` `info` `danger` `warning` `success` | String  |  |
| block      | 是否为块级标签                                         | Boolean  | `false`         |
| size      | 标签尺寸，可选值为 `large` `normal` `small` `size`      | String  | `normal`         |
| shape      | 标签形状，可选值为 `square` `round`                    | String  | `round`         |
| plain      | 是否为空心标签                                         | Boolean  | `false`         |
| background-color      | 标签背景颜色                                | String  | -         |
| border-color      | 标签边框颜色                                         | String  | -         |
| text-color | 标签文本颜色                                     | String  | -   |
| half-round      | 半圆角标签，可选值为 `left` `right`          | String  | -         |
| theme      | 标签主题色                                       | String  | -         |
| closable  | 是否为可关闭标签                                 | Boolean | `false`   |
| close-icon      | 可关闭标签的关闭图标                         | String  | `cancel`         |
| left-icon      | 标签左图标                                         | String  | -         |
| right-icon      | 标签右图标                                         | String  | -         |
| name      | 标签唯一标识                                         | String  | -         |
| loading      | 是否为加载中标签                                | Boolean  | `false`         |
| loading-icon      | 加载中图标                                         | String  | `spinner8`         |
| checkable      | 是否为可选中标签                                         | Boolean  | `false`         |
| default-checked      | 可选中标签的默认选中状态                   | Boolean  | `false`         |
| auto-checked      | 是否自动选中                                         | Boolean  | `true`         |
| mode`通用属性`      | 页面模式，可选值为 `light` `dark`                   | String  | `light`         |

### Type 有效值
| 值 | 说明 |
|----|------|
| primary | 主要标签 |
| info | 信息标签 |
| danger | 危险标签 |
| warning | 警告标签 |
| success | 成功标签 |

### Size 有效值
| 值 | 说明 |
|----|------|
| large | 大号标签 |
| normal | 普通标签 |
| small | 小号标签 |
| size | 迷你标签 |

### Shape 有效值
| 值 | 说明 |
|----|------|
| square | 方角标签 |
| round | 圆角标签 |

### HalfRound 有效值
| 值 | 说明 |
|----|------|
| left | 左半圆角标签 |
| right | 右半圆角标签 |

### Mode 有效值
| 值 | 说明 |
|----|------|
| light | 明亮模式 |
| dark | 暗黑模式 |


### Slots

| 名称    | 说明         |
|---------|--------------|
| left-icon | 标签左图标区域 |
| default | 标签内容 |
| right-icon | 标签右图标区域 |

### Events

| 事件名称 | 说明     | 回调参数 |
|----------|----------|----------|
| click    | 点击事件 | event    |
| click-left-icon | 左图标点击事件 | name |
| click-right-icon | 右图标点击事件 | name |
| close    | 关闭事件 | name    |
