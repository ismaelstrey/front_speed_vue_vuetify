<template>
  <v-app id="keep">
    <v-app-bar app clipped-left color="primary">
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <span class="title ml-3 mr-5">
        Speed&nbsp;
        <span class="font-weight-light">Sul</span>
      </span>
      <v-text-field
        color="primary"
        solo-inverted
        flat
        hide-details
        label="O que vc procura?"
        prepend-inner-icon="search"
      />
      <v-spacer />
    </v-app-bar>
    <Navigation teste="Testando" :items="items" v-if="drawer" />

    <v-container grid-list-md>
      <v-layout>
        <v-flex xs12>
          <slot />
        </v-flex>
      </v-layout>
    </v-container>
    <Footer />
  </v-app>
</template>
<script>
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
export default {
  name: "Layout",
  components: {
    Navigation,
    Footer
  },
  props: {
    source: String
  },
  data: () => ({
    drawer: null,
    items: [
      { icon: "mdi-lightbulb", text: "Notes" },
      { icon: "mdi-hand-pointing-up", text: "Reminders" },
      { divider: true },
      { icon: "mdi-plus", text: "Create new label" },
      { divider: true }
    ]
  })
};
</script>
