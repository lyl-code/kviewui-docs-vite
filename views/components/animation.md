# Animation 动效

### 介绍

给元素添加常用的动画效果，Animation 基于 [animista](https://animista.net) 总结而来，目前支持 `10+` 种主轴动画形式。

<!--@include: ./tips/introduce.md-->

## 代码演示

### 基本用法

通过组件提供的 `name` 属性可以设置 [animista](https://animista.net) 的 `10+` 动画形式。

```vue
<template>
    <kui-animation name="scale-up-center" runing ref="KuiAnimation">
        <view class="kui-h-24 kui-w-24 kui-rounded-md color-primary"></view>
    </kui-animation>
</template>

<style>
    .color-primary {
        background-color: #00BC79
    }
</style>
```

### 动画时间

通过组件提供的 `duration` 属性可以设置动画时间。

```vue
<template>
    <kui-animation name="scale-up-center" :duration="0.5" runing ref="KuiAnimation">
        <view class="kui-h-24 kui-w-24 kui-rounded-md color-primary"></view>
    </kui-animation>
</template>

<style>
    .color-primary {
        background-color: #00BC79
    }
</style>
```

### 动画时间单位

通过组件提供的 `duration-unit` 属性可以设置动画时间单位，支持 `ms` `s`。

```vue
<template>
    <kui-animation name="scale-up-center" :duration="500" duration-unit="ms" runing ref="KuiAnimation">
        <view class="kui-h-24 kui-w-24 kui-rounded-md color-primary"></view>
    </kui-animation>
</template>

<style>
    .color-primary {
        background-color: #00BC79
    }
</style>
```

### 动画缓动曲线函数

通过组件提供的 `timing-function` 属性可以设置 `29`种 动画时间缓动曲线函数。

```vue
<template>
    <kui-animation 
        name="scale-up-center" 
        :duration="0.5" 
        runing 
        timing-function="scale-up-center" 
        ref="KuiAnimation">
        <view class="kui-h-24 kui-w-24 kui-rounded-md color-primary"></view>
    </kui-animation>
</template>

<style>
    .color-primary {
        background-color: #00BC79
    }
</style>
```

### 动画延迟时间

通过组件提供的 `delay` 属性可以设置动画延迟时间。

```vue
<template>
    <kui-animation 
        name="scale-up-center" 
        :duration="0.5"
        :delay="2" 
        runing 
        timing-function="scale-up-center" 
        ref="KuiAnimation">
        <view class="kui-h-24 kui-w-24 kui-rounded-md color-primary"></view>
    </kui-animation>
</template>

<style>
    .color-primary {
        background-color: #00BC79
    }
</style>
```

### 动画延迟时间单位

通过组件提供的 `delay-unit` 属性可以设置动画延迟时间单位。

```vue
<template>
    <kui-animation 
        name="scale-up-center" 
        :duration="0.5"
        :delay="2000"
        delay-unit="ms" 
        runing 
        timing-function="scale-up-center" 
        ref="KuiAnimation">
        <view class="kui-h-24 kui-w-24 kui-rounded-md color-primary"></view>
    </kui-animation>
</template>

<style>
    .color-primary {
        background-color: #00BC79
    }
</style>
```

### 动画重复次数

通过组件提供的 `interation-count` 属性可以设置动画重复次数。

```vue
<template>
    <kui-animation 
        name="scale-up-center" 
        runing 
        timing-function="scale-up-center" 
        :interation-count="2"
        ref="KuiAnimation">
        <view class="kui-h-24 kui-w-24 kui-rounded-md color-primary"></view>
    </kui-animation>
</template>

<style>
    .color-primary {
        background-color: #00BC79
    }
</style>
```

### 循环播放动画

通过组件提供的 `infinite` 属性可以设置动画循环播放。

```vue
<template>
    <kui-animation 
        name="scale-up-center"
        runing 
        timing-function="scale-up-center"
        :infinite="true"
        ref="KuiAnimation">
        <view class="kui-h-24 kui-w-24 kui-rounded-md color-primary"></view>
    </kui-animation>
</template>

<style>
    .color-primary {
        background-color: #00BC79
    }
</style>
```

### 动画开始方向

通过组件提供的 `direction` 属性可以设置动画开始方向。

```vue
<template>
    <kui-animation 
        name="scale-up-center" 
        :duration="0.5"
        :delay="2" 
        runing 
        direction="reverse" 
        ref="KuiAnimation">
        <view class="kui-h-24 kui-w-24 kui-rounded-md color-primary"></view>
    </kui-animation>
</template>

<style>
    .color-primary {
        background-color: #00BC79
    }
</style>
```

### 动画填充模式

通过组件提供的 `fill-mode` 属性可以设置动画填充模式。

```vue
<template>
    <kui-animation 
        name="scale-up-center"
        runing 
        fill-mode="both" 
        ref="KuiAnimation">
        <view class="kui-h-24 kui-w-24 kui-rounded-md color-primary"></view>
    </kui-animation>
</template>

<style>
    .color-primary {
        background-color: #00BC79
    }
</style>
```

### 动画播放状态

通过组件提供的 `runing` 属性可以设置动画播放与暂停状态。

```vue
<template>
    <kui-animation 
        name="scale-up-center"
        runing 
        timing-function="scale-up-center" 
        ref="KuiAnimation">
        <view class="kui-h-24 kui-w-24 kui-rounded-md color-primary"></view>
    </kui-animation>
</template>

<style>
    .color-primary {
        background-color: #00BC79
    }
</style>
```

### 完整动画演示

可以通过组件暴露的 `changeState` 方法统一调整以上文档中所有的动画属性，方便动态设置动画效果。

```vue
<template>
	<kui-page :custom-header="false">
		<template v-slot:body>
			<view class="kui-mt-3">
				<view class="kui-flex kui-justify-center">
					<kui-animation name="scale-up-center" runing ref="KuiAnimation">
						<view class="kui-h-24 kui-w-24 kui-rounded-md" :style="{
							backgroundColor: backgroundColor
						}"></view>
					</kui-animation>
				</view>
				<view class="kui-mt-10 kui-w-full">
					<view class="kui-mb-3">
						<kui-space justify="center" :gap="[0, 30]">
							<kui-button type="primary" :marginY="10" @click="play">
								<kui-text size="13px">开始播放</kui-text>
							</kui-button>
							<kui-button type="danger" :marginY="10" @click = "pause">
								<kui-text size="13px">暂停播放</kui-text>
							</kui-button>
							<kui-button type="warning" :marginY="10" @click="restart">
								<kui-text size="13px">重复播放</kui-text>
							</kui-button>
						</kui-space>
					</view>
					<kui-space direction="column" :gap="[30,0]">
						<kui-cell-group title="Name 动画形式" class="kui-w-full">
							<kui-cell title="scale-up-center" center>
								<template v-slot:content>
									<picker class="kui-w-full" mode="selector" :range="name" :value="nameIndex" @change="bindPickerChange('name', $event)">
										<view>{{name[nameIndex]}}</view>
									</picker>
								</template>
							</kui-cell>
						</kui-cell-group>
						<kui-cell-group title="Duration 动画时间" class="kui-w-full">
							<kui-cell title="0.4" center>
								<template v-slot:content>
									<picker class="kui-w-full" mode="selector" :range="duration" :value="durationIndex" @change="bindPickerChange('duration', $event)">
										<view>{{duration[durationIndex]}}</view>
									</picker>
								</template>
							</kui-cell>
						</kui-cell-group>
						<kui-cell-group title="DurationUnit 动画时间单位" class="kui-w-full">
							<kui-cell title="0.4" center>
								<template v-slot:content>
									<picker class="kui-w-full" mode="selector" :range="durationUnit" :value="durationUnitIndex" @change="bindPickerChange('durationUnit', $event)">
										<view>{{durationUnit[durationUnitIndex]}}</view>
									</picker>
								</template>
							</kui-cell>
						</kui-cell-group>
						<kui-cell-group title="TimingFunction 动画缓动函数" class="kui-w-full">
							<kui-cell title="linear" center>
								<template v-slot:content>
									<picker class="kui-w-full" mode="selector" :range="timingFunction" :value="timingFunctionIndex" @change="bindPickerChange('timingFunction', $event)">
										<view>{{timingFunction[timingFunctionIndex]}}</view>
									</picker>
								</template>
							</kui-cell>
						</kui-cell-group>
						<kui-cell-group title="Delay 动画延迟时间" class="kui-w-full">
							<kui-cell title="1" center>
								<template v-slot:content>
									<picker class="kui-w-full" mode="selector" :range="delay" :value="delayIndex" @change="bindPickerChange('delay', $event)">
										<view>{{delay[delayIndex]}}</view>
									</picker>
								</template>
							</kui-cell>
						</kui-cell-group>
						<kui-cell-group title="DelayUnit 动画延迟时间单位" class="kui-w-full">
							<kui-cell title="1" center>
								<template v-slot:content>
									<picker class="kui-w-full" mode="selector" :range="delayUnit" :value="delayUnitIndex" @change="bindPickerChange('delayUnit', $event)">
										<view>{{delayUnit[delayUnitIndex]}}</view>
									</picker>
								</template>
							</kui-cell>
						</kui-cell-group>
						<kui-cell-group title="IterationCount 动画循环次数" class="kui-w-full">
							<kui-cell title="1" center>
								<template v-slot:content>
									<picker class="kui-w-full" mode="selector" :range="interationCount" :value="interationCountIndex" @change="bindPickerChange('interationCount', $event)">
										<view>{{interationCount[interationCountIndex]}}</view>
									</picker>
								</template>
							</kui-cell>
						</kui-cell-group>
						<kui-cell-group title="Infinite 动画无限循环" class="kui-w-full">
							<kui-cell title="否" center>
								<template v-slot:content>
									<picker class="kui-w-full" mode="selector" :range="infinite" :value="infiniteIndex" @change="bindPickerChange('infinite', $event)">
										<view>{{infinite[infiniteIndex]}}</view>
									</picker>
								</template>
							</kui-cell>
						</kui-cell-group>
						<kui-cell-group title="Direction 动画开始方向" class="kui-w-full">
							<kui-cell title="normal" center>
								<template v-slot:content>
									<picker class="kui-w-full" mode="selector" :range="direction" :value="directionIndex" @change="bindPickerChange('direction', $event)">
										<view>{{direction[directionIndex]}}</view>
									</picker>
								</template>
							</kui-cell>
						</kui-cell-group>
						<kui-cell-group title="FillMode 动画填充模式" class="kui-w-full">
							<kui-cell title="both" center>
								<template v-slot:content>
									<picker class="kui-w-full" mode="selector" :range="fillMode" :value="fillModeIndex" @change="bindPickerChange('fillMode', $event)">
										<view>{{fillMode[fillModeIndex]}}</view>
									</picker>
								</template>
							</kui-cell>
						</kui-cell-group>
						<kui-cell-group title="">
							<kui-text color="hsl(213,10.00%, 56.86%)">示例数据为组件支持的部分数据，详细支持数据请参考组件源码和https://animista.net/</kui-text>
						</kui-cell-group>
					</kui-space>
				</view>
			</view>
		</template>
	</kui-page>
</template>

<script>
	import {
		reactive,
		toRefs,
		getCurrentInstance,
		nextTick
	} from 'vue';
	
	import { timingFunctionMap } from '@/common/theme/animation';
	import { useExpose } from '@/common/utils/expose';
	
	export default {
		setup() {
			const { proxy } = getCurrentInstance();
			const theme = proxy.$theme;
			
			const state = reactive({
				backgroundColor: theme.colors.light['primary'][5],
				timingFunction: Object.keys(timingFunctionMap),
				timingFunctionIndex: 0,
				name: ['scale-up-center','scale-up-hor-center','rotate-center','rotate-scale-up','flip-horizontal-bottom'],
				nameIndex: 0,
				duration: [0.4, 0.8, 1, 1.2, 1.8, 2, 2.4],
				durationIndex: 0,
				durationUnit: ['s', 'ms'],
				durationUnitIndex: 0,
				delay: [0, 1, 2, 3, 4, 100, 200, 300, 400],
				delayIndex: 0,
				delayUnit: ['s', 'ms'],
				delayUnitIndex: 0,
				interationCount: [1, 2, 3, 4, 5, 10, 20, 30, 40, 50],
				interationCountIndex: 0,
				infinite: ['是', '否'],
				infiniteIndex: 1,
				direction: ['normal', 'reverse', 'alternate', 'alternate-reverse'],
				directionIndex: 0,
				fillMode: ['none', 'forwards', 'backwards', 'both'],
				fillModeIndex: 3,
				options: {
					timingFunction: '',
					name: ''
				}
			});
			
			const bindPickerChange = (key, e) => {
				console.log(key);
				uni.pageScrollTo({
					scrollTop: 0
				})
				state[`${key}Index`] = e.detail.value;
				// state.timingFunctionIndex = e.detail.value;
				// state.options.timingFunction = timingFunctionMap[e.detail.value];
				nextTick(() => {
					let value = state[key][e.detail.value];
					if (key == 'infinite') {
						value = value == '是' ? true : false;
					}
					console.log(value);
					proxy.$refs['KuiAnimation'].changeState(key, value);
					// state.backgroundColor = theme.colors.light['blue'][5]
					setTimeout(() => {
						const name = key == 'name' ? '' : state.name[state.nameIndex]; // 防止重复触发动画
						console.log(name);
						proxy.$refs['KuiAnimation'].restart(name);
						// state.backgroundColor = theme.colors.light['primary'][5];
					}, 600);
				});
			}
			
			const play = () => {
				uni.pageScrollTo({
					scrollTop: 0
				})
				nextTick(() => {
					setTimeout(() => {
						proxy.$refs['KuiAnimation'].restart();
					}, 600);
				});
			}
			
			const restart = () => {
				uni.pageScrollTo({
					scrollTop: 0
				})
				nextTick(() => {
					setTimeout(() => {
						proxy.$refs['KuiAnimation'].restart();
					}, 600);
				});
			}
			
			const pause = () => {
				uni.pageScrollTo({
					scrollTop: 0
				})
				nextTick(() => {
					proxy.$refs['KuiAnimation'].changeState('runingState', 'paused');
				})
			}
			
			// 暴露方法给外部使用
			useExpose({
				restart
			});
			
			return {
				theme,
				...toRefs(state),
				bindPickerChange,
				play,
				restart,
				pause
			}
		}
	}
</script>

<style>

</style>
```

## API

### Props

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | -----
| duration | 动画时间 | Number | `0.4`
| duration-unit | 动画时间单位，可选值为 `ms` `s` | String | `s`
| timing-function | 动画时间缓动曲线函数 | String | `linear`
| delay | 动画延迟时间 | Number | `0`
| delay-unit | 动画延迟时间单位 | String | `s`
| interation-count | 动画重复次数 | Number | `1`
| infinite | 是否循环播放动画，设置为 `true` 时 `interation-count`属性将失效  | Boolean | `false`
| direction | 动画开始方向 | String | `normal`
| fill-mode | 动画填充模式 | String | `both`
| name | 动画名称 | String | `scale-up-center`
| runing | 是否正在播放动画 | Boolean | `false`

### TimingFunction 有效值
| 值 | 说明
| ----- | -----
| linear | 参考 [animista](https://animista.net)
| ease | 参考 [animista](https://animista.net)
| ease-out | 参考 [animista](https://animista.net)
| ease-in | 参考 [animista](https://animista.net)
| ease-in-out | 参考 [animista](https://animista.net)
| ease-in-quad | 参考 [animista](https://animista.net)
| ease-in-cubic | 参考 [animista](https://animista.net)
| ease-in-quart | 参考 [animista](https://animista.net)
| ease-in-quint | 参考 [animista](https://animista.net)
| ease-in-sine | 参考 [animista](https://animista.net)
| ease-in-expo | 参考 [animista](https://animista.net)
| ease-in-circ | 参考 [animista](https://animista.net)
| ease-in-back | 参考 [animista](https://animista.net)
| ease-out-quad | 参考 [animista](https://animista.net)
| ease-out-cubic | 参考 [animista](https://animista.net)
| ease-out-quart | 参考 [animista](https://animista.net)
| ease-out-quint | 参考 [animista](https://animista.net)
| ease-out-sine | 参考 [animista](https://animista.net)
| ease-out-expo | 参考 [animista](https://animista.net)
| ease-out-circ | 参考 [animista](https://animista.net)
| ease-out-back | 参考 [animista](https://animista.net)
| ease-in-out-quad | 参考 [animista](https://animista.net)
| ease-in-out-cubic | 参考 [animista](https://animista.net)
| ease-in-out-quart | 参考 [animista](https://animista.net)
| ease-in-out-quint | 参考 [animista](https://animista.net)
| ease-in-out-sine | 参考 [animista](https://animista.net)
| ease-in-out-expo | 参考 [animista](https://animista.net)
| ease-in-out-circ | 参考 [animista](https://animista.net)
| ease-in-out-back | 参考 [animista](https://animista.net)

### Direction 有效值
| 值 | 说明 |
|----|------
| normal | 参考 [animista](https://animista.net)
| reverse | 参考 [animista](https://animista.net)
| alternate | 参考 [animista](https://animista.net)
| alternate-reverse | 参考 [animista](https://animista.net)

### FillMode 有效值
| 值 | 说明
|----|------
| none | 参考 [animista](https://animista.net)
| forwards | 参考 [animista](https://animista.net)
| backwards | 参考 [animista](https://animista.net)
| both | 参考 [animista](https://animista.net)

### Slots
| 名称                   | 说明                 |
|-----------------------|----------------------|
| default               | 动画元素         |

### Events
| 事件名 | 说明           | 参数          | 回调参数          |
| ------ | -------------- | ----------------- | ----------------- 
| changeRuningState  | 改变当前动画播放状态 | - | - |
| changeState | 修改动画参数 | 参数名称，参数值 | - |
| restart | 重复播放 | `name` 动画形式 | - |