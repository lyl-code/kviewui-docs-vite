# Layout 布局

### 介绍

Layout 提供了 `kui-row` 和 `kui-col` 两个辅助布局的组件，帮助您高效率的进行页面布局。

<!--@include: ./tips/introduce.md-->

## 代码演示

### 基本用法

`kui-row` 组件把一行平均分为 `24` 份 栅格，`kui-col` 组件提供 `span` 属性可以设置这一列所占的栅格数，`offset` 属性设置这一列偏移的栅格数。

```vue
<template>
    <kui-cell-group title="基本用法">
        <kui-space :gap="[30,0]" direction="column">
            <kui-row>
                <kui-col class="a">
                    <view class="kui-h-8 kui-rounded-md kui-bg-green-500 kui-flex kui-justify-center kui-items-center kui-text-white">
                        <text>span:24</text>
                    </view>
                </kui-col>
            </kui-row>
            <kui-row>
                <template v-for="(item,index) in span12" :key="index">
                    <kui-col :span="item">
                        <view class="kui-w-full">
                            <view class="kui-h-8 kui-rounded-md kui-flex kui-justify-center kui-items-center kui-text-white" :class="index %2 == 0 ? 'kui-bg-green-500' : 'kui-bg-green-200'">
                                <text>span:{{item}}</text>
                            </view>
                        </view>
                    </kui-col>
                </template>
            </kui-row>
            <kui-row>
                <template v-for="(item,index) in span8" :key="index">
                    <kui-col :span="item">
                        <view class="kui-h-8 kui-rounded-md kui-flex kui-justify-center kui-items-center kui-text-white" :class="index %2 == 0 ? 'kui-bg-green-500' : 'kui-bg-green-200'">
                            <text>span:{{item}}</text>
                        </view>
                    </kui-col>
                </template>
            </kui-row>
            <kui-row>
                <template v-for="(item,index) in span6" :key="index">
                    <kui-col :span="item">
                        <view class="kui-h-8 kui-rounded-md kui-flex kui-justify-center kui-items-center kui-text-white" :class="index %2 == 0 ? 'kui-bg-green-500' : 'kui-bg-green-200'">
                            <text>span:{{item}}</text>
                        </view>
                    </kui-col>
                </template>
            </kui-row>
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
				span12: [12,12],
				span8: [8,8,8],
				span6: [6,6,6,6]
			});
			
			return {
				...toRefs(state)
			}
		}
	}
</script>
```

### 分栏间隔

通过 `kui-row` 组件的 `gutter` 属性可以设置列之间的间距，默认为 0。

```vue
<template>
    <kui-cell-group title="分栏间隔">
        <kui-row :gutter="20">
            <template v-for="(item,index) in span8" :key="index">
                <kui-col :span="item">
                    <view class="kui-h-8 kui-rounded-md kui-flex kui-justify-center kui-items-center kui-text-white" :class="index %2 == 0 ? 'kui-bg-green-500' : 'kui-bg-green-200'">
                        <text>span:{{item}}</text>
                    </view>
                </kui-col>
            </template>
        </kui-row>
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
				span8: [8,8,8]
			});
			
			return {
				...toRefs(state)
			}
		}
	}
</script>
```

### Flex对齐方式

布局组件默认使用 `flex` 布局，通过 `kui-row` 组件的 `justify` 属性可以设置主轴对齐方式，`align` 属性可以设置交叉轴对齐方式。

```vue
<template>
    <kui-cell-group title="Flex 对齐方式">
        <kui-space :gap="[30,0]" direction="column">
            <view class="kui-w-full">
                <kui-row>
                    <template v-for="(item,index) in span6a" :key="index">
                        <kui-col :span="item">
                            <view class="kui-h-8 kui-rounded-md kui-flex kui-justify-center kui-items-center kui-text-white" :class="index %2 == 0 ? 'kui-bg-green-500' : 'kui-bg-green-200'">
                                <text>span:{{item}}</text>
                            </view>
                        </kui-col>
                    </template>
                </kui-row>
            </view>
            <kui-row justify="end">
                <template v-for="(item,index) in span6a" :key="index">
                    <kui-col :span="item">
                        <view class="kui-h-8 kui-rounded-md kui-flex kui-justify-center kui-items-center kui-text-white" :class="index %2 == 0 ? 'kui-bg-green-500' : 'kui-bg-green-200'">
                            <text>span:{{item}}</text>
                        </view>
                    </kui-col>
                </template>
            </kui-row>
            <kui-row justify="center">
                <template v-for="(item,index) in span6a" :key="index">
                    <kui-col :span="item">
                        <view class="kui-h-8 kui-rounded-md kui-flex kui-justify-center kui-items-center kui-text-white" :class="index %2 == 0 ? 'kui-bg-green-500' : 'kui-bg-green-200'">
                            <text>span:{{item}}</text>
                        </view>
                    </kui-col>
                </template>
            </kui-row>
            <kui-row justify="space-between">
                <template v-for="(item,index) in span6a" :key="index">
                    <kui-col :span="item">
                        <view class="kui-h-8 kui-rounded-md kui-flex kui-justify-center kui-items-center kui-text-white" :class="index %2 == 0 ? 'kui-bg-green-500' : 'kui-bg-green-200'">
                            <text>span:{{item}}</text>
                        </view>
                    </kui-col>
                </template>
            </kui-row>
            <kui-row justify="space-around">
                <template v-for="(item,index) in span6a" :key="index">
                    <kui-col :span="item">
                        <view class="kui-h-8 kui-rounded-md kui-flex kui-justify-center kui-items-center kui-text-white" :class="index %2 == 0 ? 'kui-bg-green-500' : 'kui-bg-green-200'">
                            <text>span:{{item}}</text>
                        </view>
                    </kui-col>
                </template>
            </kui-row>
            <kui-row justify="space-evenly">
                <template v-for="(item,index) in span6a" :key="index">
                    <kui-col :span="item">
                        <view class="kui-h-8 kui-rounded-md kui-flex kui-justify-center kui-items-center kui-text-white" :class="index %2 == 0 ? 'kui-bg-green-500' : 'kui-bg-green-200'">
                            <text>span:{{item}}</text>
                        </view>
                    </kui-col>
                </template>
            </kui-row>
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
				span6a: [6,6,6]
			});
			
			return {
				...toRefs(state)
			}
		}
	}
</script>
```

## API

### Row Props

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | ----- 
| type | 布局方式，可选值为flex | String | -
| gutter | 列元素之间的间距（单位为rpx） | Number | -
| justify | Flex 主轴对齐方式，可选值为 `start` `end` `center` `space-around` `space-between` `space-evenly` | String | `start`
| align | Flex 交叉轴对齐方式，可选值为 `start` `center` `end` `baseline` `stretch` | String | `flex-start`
| wrap | Flex是否换行，可选值为 `nowrap` `wrap` `reverse` | String | `wrap`

### Col Props

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | ----- 
| span | 列元素宽度（共分为24份，例如设置一行3个，那么span值为8） | Number | 24
| offset | 列元素偏移距离 | Number | 0

### Col Slots

| 字段 | 说明
|----- | -----
| default | 列显示内容
