<template>
  <div>
    <b-row>
      <b-col lg="3">
         <b-card title="Balance">
 <h2> {{ $store.state.app.AppActiveUser.profile.ACCOUNTSTATUS_BALANCE ? $store.state.app.AppActiveUser.profile.ACCOUNTSTATUS_BALANCE : '0.0' }} <span>{{ $store.state.app.AppActiveUser.profile.currency }}</span></h2>
     
    </b-card>
      </b-col>
        <b-col lg="3">
      <b-card title="Margin Free">
         <h2> {{ $store.state.app.AccountStatus.marginFree ? parseFloat( $store.state.app.AccountStatus.marginFree).toFixed(1) : '0.0' }} <span>{{ $store.state.app.AppActiveUser.profile.currency }}</span></h2>
      </b-card>
      </b-col>
        <b-col lg="3">
             <b-card title="Credit">
                <h2> {{$store.state.app.AccountStatus.equity? parseFloat($store.state.app.AccountStatus.equity).toFixed(1) : 0.0 }} <span>{{ $store.state.app.AppActiveUser.profile.currency }}</span></h2>
             </b-card>
      </b-col>
         <b-col lg="3">
             <b-card title="Equite">
               <h2>   {{$store.state.app.AccountStatus.equity? parseFloat($store.state.app.AccountStatus.equity).toFixed(1) : 0.0 }} <span>{{ $store.state.app.AppActiveUser.profile.currency }}</span></h2>
             </b-card>
      </b-col>
    </b-row>
   
    <h1 class="display-5 bold">Accounts</h1>
    <p class="lead">All the Details about Accounts</p>

    <div>
      <b-table striped hover :items="$store.state.app.AppActiveUser.profile.accounts"></b-table>
    </div>
  </div>
</template>

<script>
import { BCard, BCardText, BLink, BCol, BRow, BTable} from 'bootstrap-vue'
import { mapActions } from 'vuex';

export default {
  components: {
    BCard,
    BCardText,
    BLink,
    BCol,
    BRow,
    BTable
  },
  methods: {
    ...mapActions(['app/getUserDetails', 'app/accountStatus'])
  },
  mounted() {
    this.$store.dispatch('app/accountStatus')
    this.$store.dispatch('app/getUserDetails')
  }
}
</script>

<style>
  h2 {
    text-align: right;
    font-size: 2.5rem;
    font-weight: 500;
  }
  .bold {
    font-weight: bold;
  }
</style>
