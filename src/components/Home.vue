<template>
  <v-container> {{ msg }} </v-container>
</template>

<script>
export default {
  name: "Home",
  data: () => ({}),
  props: {
    msg: String
  }
};
</script>
