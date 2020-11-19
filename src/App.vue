<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAllive" />
    </keep-alive>
    <router-view v-if="!$route.meta.keepAllive" />
  </div>
</template>

<style lang="scss"></style>
