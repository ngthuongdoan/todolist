<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
#app {
  text-align: center;
  color: #393e46;
  width: 100%;
  min-width: 100vw;
  min-height: 100vh;
  background-color: white;
}
.clear-fix {
  clear: both;
}
.custom-scrollbar {
  &::-webkit-scrollbar {
    width: 6px;
    background-color: #f3d37c;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #f8b500;
  }
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #f3d37c;
  }
}
</style>
