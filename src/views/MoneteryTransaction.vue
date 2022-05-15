<template>
  <div>
      <b-table small hover responsive :items="$store.state.app.Transection.transactions"></b-table>
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
    ...mapActions(['app/monetaryTransetion'])
  },
  mounted() {
    this.$store.dispatch('app/monetaryTransetion')
  }
}
</script>

<style>

</style>