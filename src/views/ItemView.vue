<template>
  <div>
    <div v-for="ask in asks">
        {{ask.title}}
    </div>
  </div>
</template>

<script>
import { fetchNewsList } from '../api/index.js';
export default {
  data(){
    return {
      asks: []
    }
  },
  created(){
    fetchNewsList()
      .then((response) => {
        console.log(response);
        this.asks = response.data;
      }) 
      .catch((err) => console.log(err))
  }
}
</script>

<style>

</style>