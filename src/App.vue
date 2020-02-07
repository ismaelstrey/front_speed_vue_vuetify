<template>
  <div id="app">
    <Layout>
      <router-view />
    </Layout>
  </div>
</template>

<script>
import Layout from "./modules/front/layouts/Layout";

export default {
  name: "App",

  components: {
    Layout
  },

  data: () => ({
    //
  })
};
</script>
