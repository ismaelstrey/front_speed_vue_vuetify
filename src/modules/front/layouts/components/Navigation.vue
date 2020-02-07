<template>
  <v-navigation-drawer v-model="drawer" app clipped color="grey lighten-4">
    <v-list dense class="grey lighten-4">
      <template v-for="(item, i) in items">
        <v-divider v-if="item.divider" :key="i" dark class="my-4" />
        <v-list-item v-else :key="i" link>
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="grey--text">{{
              item.text
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
export default {
  name: "Navigation",
  props: {
    showMenu: Boolean,
    items: Array
  },
  model: {
    prop: "showMenu",
    event: "hide"
  },
  data: () => ({
    drawer: null
  }),
  methods: {
    show() {
      return (this.drawer = !this.drawer);
    }
  }
};
</script>

<style>
#keep .v-navigation-drawer__border {
  display: none;
}
</style>
