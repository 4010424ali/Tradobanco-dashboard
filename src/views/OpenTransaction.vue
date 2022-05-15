<template>
  <div>
      <b-table small hover responsive="lg" :items="$store.state.app.OpenedTransection.items"></b-table>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { BTable } from 'bootstrap-vue'; 
export default {
  components: {
    BTable
  },
  methods: {
    ...mapActions(['app/openTransection'])
  },
  mounted() {
    this.$store.dispatch('app/openTransection')
  }
}
</script>

<style>

</style>