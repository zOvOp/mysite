<template>
  <layout>
    <BlogList />
    <template #right>
      <BlogCategory />
    </template>
  </layout>
</template>

<script>
import BlogList from "./components/BlogList.vue";
import BlogCategory from "./components/BlogCategory.vue";
import Layout from "@/components/Layout.vue";
export default {
  components: {
    BlogList,
    BlogCategory,
    Layout,
  },
};
</script>

<style>
</style>