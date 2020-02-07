<template>
  <v-card class="mx-auto" max-width="400">
    <v-img class="white--text align-end" height="200px" :src="img">
      <v-card-title>{{ title_img }}</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">Number {{ cod }}</v-card-subtitle>

    <v-card-text class="text--primary">
      <div>{{ title }}</div>
      <div>{{ description }}</div>
    </v-card-text>

    <v-card-actions>
      <v-btn color="secondary" text>Compartilhe</v-btn>
      <v-btn color="primary" text>Detalhes</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "Card",
  props: {
    img: String,
    title_img: String,
    cod: String,
    title: String,
    description: String,
    share: String,
    link: String
  }
};
</script>
