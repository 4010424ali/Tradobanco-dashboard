<template>
  <div>
    <b-table
      small
      hover
      responsive="lg"
      :items="$store.state.app.CloseTransaction.operations"
    >
      <template #cell(openTime)="data">
        <b>{{ new Date(parseInt(data.value)).toLocaleString() }}</b>
      </template>

      <template #cell(closeTime)="data">
        <b>{{ new Date(parseInt(data.value)).toLocaleString() }}</b>
      </template>
      <!-- new Date(parseInt(data.value.openTime)).toLocaleTimeString() -->
    </b-table>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { BTable } from "bootstrap-vue";
export default {
  components: {
    BTable,
  },
  methods: {
    ...mapActions(["app/closeTransection"]),
  },
  mounted() {
    this.$store.dispatch("app/closeTransection");
  },
  data() {
    return {
      fields: [
        { key: "openTime", lable: "open time" },
        { key: "clTime", lable: "close time" },
      ],
    };
  },
};
</script>

<style>
</style>