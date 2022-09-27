# Image 图片

### 介绍

增强版的 img 标签，提供多种图片填充模式，支持图片加载中提示、加载失败提示。

<!--@include: ./tips/introduce.md-->

## 代码演示

### 基础用法

基础用法与原生 img 标签一致，可以设置 src、width、height、alt 等原生属性。

```vue
<template>
    <kui-image src="https://www.kviewui.com/images/dog1.png"></kui-image>
</template>
```

### 填充模式

通过 mode 属性可以设置图片填充模式，等同于 uniapp 原生 image 组件的 mode 属性，可选值见下方表格。

```vue
<template>
    <kui-image src="https://www.kviewui.com/images/dog1.png" mode="aspectFill"></kui-image>
</template>
```

### 设置圆角

通过 radius 属性可以设置图片圆角大小，当宽高一致时将为圆形图片

```vue
<template>
    <kui-image 
        width="200rpx" 
        height="200rpx" 
        :radius="30"
        src="https://www.kviewui.com/images/dog1.png" >
    </kui-image>
    <kui-image 
        width="200rpx" 
        height="200rpx" 
        :radius="300"
        src="https://www.kviewui.com/images/dog1.png" >
    </kui-image>
</template>
```

### 加载失败

通过 error 属性可以设置加载失败状态

```vue
<template>
    <kui-image  
        height="200rpx" 
        :radius="30"
        error
        src="https://www.kviewui.com/images/dog1.png" >
    </kui-image>
</template>
```

### 点击事件

```vue
<template>
    <kui-image 
        width="440rpx" 
        height="440rpx" 
        :radius="30"
        @click="onClick"
        src="https://www.kviewui.com/images/dog1.png" >
    </kui-image>
</template>
<script lang="ts">
    export default {
        setup() {
            const onClick = () => {
				uni.showToast({
					title: '图片被点击'
				});
			}

            return {
                onClick
            }
        }
    }
</script>
```

### 图片预览

可以通过 preview 属性开启点击图片预览功能

```vue
<template>
    <kui-image 
        width="440rpx" 
        height="440rpx" 
        :radius="30"
        preview
        @click="onClick"
        src="https://www.kviewui.com/images/dog1.png" >
    </kui-image>
</template>
<script lang="ts">
    export default {
        setup() {
            const onClick = () => {
				uni.showToast({
					title: '图片被点击'
				});
			}

            return {
                onClick
            }
        }
    }
</script>
```

### 懒加载

通过 lazyload 属性可以开启图片懒加载

```vue
<template>
    <view class="kui-mt-3">
        <template v-for="i in 100" :key="i">
            <kui-image  
                height="200rpx" 
                :radius="30"
                lazyload
                src="https://www.kviewui.com/images/dog1.png" >
            </kui-image>
        </template>
    </view>
</template>
```

## API

### Props

| 参数         | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| src         | 图片链接               | String | -                |
| mode         | 图片填充模式，等同于[uniapp image](https://uniapp.dcloud.net.cn/component/image.html)组件的 mode 属性     | ImageFit | 'scaleToFill'                |
| width         | 宽度，默认单位`px`               | String | 100%                |
| height         | 高度，默认单位`px`               | String | -                |
| fade-show      | 是否开启展示动画               | Boolean | true                |
| delay         | 动画展示时间，单位`ms`               | Number | 1000                |
| radius         | 圆角大小               | String | Numer | -                |
| scale         | 缩放比例               | Number | 1                |
| error         | 是否展示图片加载失败| Boolean | false              |
| loading         | 是否展示加载中图片               | Boolean | true              |
| preview         | 是否开启图片点击预览               | Boolean | false                |
| lazyload        | 是否开启图片懒加载               | Boolean | false                |

### ImageMode 图片填充模式

支持uniapp image组件的 mode 属性值，可参考 [uniapp image](https://uniapp.dcloud.net.cn/component/image.html) 组件的 mode 属性

### Events

| 事件名 | 说明           | 回调参数     |
|--------|----------------|--------------|
| click  | 点击图片时触发 | -- |
| preview-image-success  | 图片预览成功后触发 | -- |
| preview-image-fail  | 图片预览失败后触发 | -- |