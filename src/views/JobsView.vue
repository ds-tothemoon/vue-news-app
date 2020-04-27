<template>
  <div>
    <div>
      <div v-for="job in this.$store.state.jobs">
        <a :href="job.url">
          {{job.title}}
        </a>
        <small>{{job.time_ago}} by  {{job.user}}</small>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      jobs: []
    }
  },
  created(){
    this.$store.dispatch('FETCH_JOBS');
  }
}
</script>

<style>

</style>