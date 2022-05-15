<template>
  <div>
    <b-form @submit="onUpdateDetails">

      <b-row>
        <b-col lg="6">
          <b-form-group
            id="Country_code"
            label="Country code"
            label-for="input-1"
            description="We'll never share your email with anyone else."
          >
            <b-form-input
              id=""
              v-model="country_code"
              type="text"
              placeholder="Enter Country code"
            ></b-form-input>
          </b-form-group>
          <b-form-group
            id="area_code"
            label="Area code"
            label-for="area_code"
            description="Please enter the area code "
          >
            <b-form-input
              id="area_code"
              v-model="area_code"
              type="text"
              placeholder="Enter area code"
            ></b-form-input>
          </b-form-group>
          <!-- Phone Number -->
          <b-form-group
            id="phone_number"
            label="Phone Number "
            label-for="phone_number"
            description="Please enter the phone number "
          >
            <b-form-input
              id="phone_number"
              v-model="phone_number"
              type="number"
              placeholder="Enter phone Number"
            ></b-form-input>
          </b-form-group>
          <!-- Mobile Number -->
          <b-form-group
            id="mobile_number"
            label="Mobile Number"
            label-for="mobile_number"
            description="Please enter the Mobile Number"
          >
            <b-form-input
              id="mobile_number"
              v-model="mobile_number"
              type="number"
              placeholder="Enter Mobile Number"
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col lg="6">
          <!-- Address -->
          <b-form-group
            id="address"
            label="Address"
            label-for="address"
            description="Please enter the Address"
          >
            <b-form-input
              id="address"
              v-model="address"
              type="text"
              placeholder="Enter the address"
            ></b-form-input>
          </b-form-group>
          <!-- City -->
          <b-form-group
            id="city"
            label="City"
            label-for="city"
            description="Please enter the City"
          >
            <b-form-input
              id="city"
              v-model="city"
              type="text"
              placeholder="Enter the city"
            ></b-form-input>
          </b-form-group>
          <!-- zipcode -->
          <b-form-group
            id="zipcode"
            label="Zipcode"
            label-for="zipcode"
            description="Please enter the zipcode"
          >
            <b-form-input
              id="zipcode"
              v-model="zipcode"
              type="number"
              placeholder="Enter the zipcode"
            ></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
      <b-button type="submit" block variant="primary">Save</b-button>
    </b-form>
  </div>
</template>

<script>
import {
  BRow,
  BCol,
  BForm,
  BFormGroup,
  BFormInput,
  BButton,
  BAlert
} from "bootstrap-vue";
import { mapActions } from "vuex";

export default {
  components: {
    BCol,
    BRow,
    BForm,
    BFormGroup,
    BFormInput,
    BButton,
    BAlert
  },
  mounted() {
    this.$store.dispatch("app/getUserDetails");
    this.country_code = this.$store.state.app.AppActiveUser.profile.countryIso2
      this.area_code = this.$store.state.app.AppActiveUser.profile.telArea
      this.phone_number = this.$store.state.app.AppActiveUser.profile.telNumber
      this.mobile_number = this.$store.state.app.AppActiveUser.profile.mobNumber
      this.address = this.$store.state.app.AppActiveUser.profile.address
      this.city = this.$store.state.app.AppActiveUser.profile.city
      this.zipcode = this.$store.state.app.AppActiveUser.profile.zipCode
  },
  data() {
    return {
      country_code: this.$store.state.app.AppActiveUser.profile.countryIso2,
      area_code: this.$store.state.app.AppActiveUser.profile.telArea,
      phone_number: this.$store.state.app.AppActiveUser.profile.telNumber,
      mobile_number: this.$store.state.app.AppActiveUser.profile.mobNumber,
      address: this.$store.state.app.AppActiveUser.profile.address,
      city: this.$store.state.app.AppActiveUser.profile.city,
      zipcode: this.$store.state.app.AppActiveUser.profile.zipCode,
    };
  },
  methods: {
    ...mapActions(["app/updatedDetails", "app/getUserDetails"]),
    onUpdateDetails(e) {
      e.preventDefault();
      const updatedData = {
        login: localStorage.getItem("login"),
        countrycode: this.country_code,
        areacode: this.area_code,
        phonenumber: this.phone_number,
        mobnumber: this.mobile_number,
        address: this.address,
        city: this.city,
        zipcode: this.zipcode,
      };

      this.$store.dispatch("app/updatedDetails", updatedData);
    },
  },
};
</script>

<style></style>
