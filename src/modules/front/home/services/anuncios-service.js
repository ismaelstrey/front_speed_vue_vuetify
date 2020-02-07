import axios from "axios";
const url = "http://localhost:3000/anuncios";

const dados = axios
  .get(url)
  .then(response => response.data)
  .catch(erro => console.log(erro));

export default {
  dados
};
