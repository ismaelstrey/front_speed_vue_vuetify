<template>
  <v-container mt-5 pt-5>
    <v-layout row wrap mt-5>
      <v-flex xs12 sm6 md4 lg3 v-for="anuncio in anuncios" :key="anuncio.id">
        <Card
          :img="anuncio.img"
          :title_img="anuncio.title_img"
          :cod="anuncio.cod"
          :title="anuncio.title"
          :description="anuncio.description"
          :share="anuncio.share"
          :link="anuncio.link"
        />
      </v-flex>
      <v-flex xs12 sm6 md4 lg3 v-for="anuncio in anuncios" :key="anuncio.id">
        <CardDesc
          :img="anuncio.img"
          :title_img="anuncio.title_img"
          :cod="anuncio.cod"
          :title="anuncio.title"
          :description="anuncio.description"
          :share="anuncio.share"
          :link="anuncio.link"
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import Card from "../components/Card";
import CardDesc from "../components/CardDesc";
import AnunciosService from "../services/anuncios-service";

export default {
  name: "Home",
  props: {
    prod: []
  },
  data: () => ({
    anuncios: []
  }),
  components: {
    Card,
    CardDesc
  },
  created() {
    this.getAnuncios();
  },
  methods: {
    log(msg) {
      console.log(msg);
    },
    async getAnuncios() {
      await AnunciosService.dados
        .then(response => (this.anuncios = response))
        .catch(error => console.log(error));
    }
  }
};
</script>
