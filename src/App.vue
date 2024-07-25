<template>
  <div class="app">
    <Layout>
      <template #left>
        <div class="aside"><SiteAside /></div>
      </template>
      <template #default>
        <router-view></router-view>
      </template>
    </Layout>
    <ToTop />
  </div>
</template>

<script>
import Layout from "./components/Layout.vue";
import SiteAside from "./components/SiteAside.vue";
import ToTop from "./components/ToTop.vue";
export default {
  components: {
    Layout,
    SiteAside,
    ToTop,
  },
  methods: {},
};
</script>

<style scoped lang="less">
@import "./styles/mixin.less";
.app {
  .self-fill(fixed);
}
.aside {
  width: 250px;
  height: 100%;
}
</style>
