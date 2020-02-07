<template>
  <v-card class="mx-auto" max-width="400">
    <v-img :src="img" height="200px"></v-img>

    <v-card-title>{{ title_img }}</v-card-title>

    <v-card-subtitle>{{ title }}</v-card-subtitle>

    <v-card-actions>
      <v-btn text>Compartilhe</v-btn>

      <v-btn color="purple" text>Detelhes</v-btn>

      <v-spacer></v-spacer>

      <v-btn icon @click="show = !show">
        <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>{{ description }}</v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  name: "CardDesc",
  props: {
    img: String,
    title_img: String,
    cod: String,
    title: String,
    description: String,
    share: String,
    link: String
  },
  data: () => ({
    show: false
  })
};
</script>
