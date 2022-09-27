<template>
  <router-view />
</template>
<style lang="scss">
  ::selection {
    background: #00BC79;
    color: #fff;
  }
  #doc {
    background: #fff;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    // padding-top: $doc-header-height;
  }
  .copy-btn {
    position: absolute;
    top: 2px;
    right: 4px;
    z-index: 10;
    color: #333;
    cursor: pointer;
    background-color: #fff;
    border: 0;
    border-radius: 2px;
  }
  </style>