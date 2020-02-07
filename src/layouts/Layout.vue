<template>
  <v-app id="keep">
    <v-app-bar app clipped-left color="primary">
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <span class="title ml-3 mr-5">
        Speed&nbsp;
        <span class="font-weight-light">Sul</span>
      </span>
      <v-text-field
        solo-inverted
        flat
        hide-details
        label="O que vc procura?"
        prepend-inner-icon="search"
      />

      <v-spacer />
    </v-app-bar>

    <Navigation teste="Testando" :items="items" v-if="drawer" />
    <v-content>
      <v-container fluid class="grey lighten-4 fill-height">
        <v-row justify="center" align="center">
          <v-col class="shrink">
            <v-tooltip right>
              <template v-slot:activator="{ on }">
                <v-btn :href="source" icon large target="_blank" v-on="on">
                  <v-icon large>mdi-code-tags</v-icon>
                </v-btn>
              </template>
              <span>Source</span>
            </v-tooltip>
            <v-tooltip right>
              <template v-slot:activator="{ on }">
                <v-btn
                  icon
                  large
                  href="https://codepen.io/johnjleider/pen/zgxbYO"
                  target="_blank"
                  v-on="on"
                >
                  <v-icon large>mdi-codepen</v-icon>
                </v-btn>
              </template>
              <span>Codepen</span>
            </v-tooltip>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Navigation from "./components/Navigation";
export default {
  name: "Layout",
  components: {
    Navigation
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
