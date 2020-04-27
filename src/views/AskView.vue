<template>
  <div>
    <div v-for="item in fetchedAsk">
        {{item.title}}
        <router-link :to="`item/${item.id}`">{{item.user}}</router-link>
        
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters([
      'fetchedAsk'
    ])
  }, 
  created(){
    this.$store.dispatch('FETCH_ASK');
  }
}
</script>

<style>

</style>