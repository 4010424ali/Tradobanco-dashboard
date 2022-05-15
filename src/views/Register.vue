<template>
  <div class="auth-wrapper auth-v2">
    <b-row class="auth-inner m-0">
      <!-- Brand logo-->
      <b-link class="brand-logo">
        <vuexy-logo />

        <h2 class="brand-text text-primary ml-1">Vuexy</h2>
      </b-link>
      <!-- /Brand logo-->

      <!-- Register-->
      <b-col
        lg="6"
        class="
          d-flex
          align-items-center
          justify-content-center
          flex-column
          auth-bg
          px-2
          p-lg-5
        "
      >
        <div>
          <b-card-title class="mb-1"> Adventure starts here 🚀 </b-card-title>
        </div>
        <div>
             <b-alert
            class="p-1"
            show
            v-show="$store.state.app.errors.showError"
            dismissible
            variant="danger"
            ><span>{{ $store.state.app.errors.message }}</span></b-alert
          >
          <validation-observer ref="registerForm" #default="{ invalid }">
            <b-form class="uth-register-form mt-2" @submit.prevent="register">

              <b-row>
                <b-col lg="6">
                  <!-- First Name -->
                  <b-form-group label="First Name" label-for="first-name">
                    <validation-provider
                      #default="{ errors }"
                      name="First Name"
                      vid="first_name"
                      rules="required"
                    >
                      <b-form-input
                        id="first-name"
                        v-model="first_name"
                        name="register-username"
                        :state="errors.length > 0 ? false : null"
                        placeholder="First NAme"
                      />
                      <small class="text-danger">{{ errors[0] }}</small>
                    </validation-provider>
                  </b-form-group>

                  <!-- last Name -->
                  <b-form-group label="last Name" label-for="last-name">
                    <validation-provider
                      #default="{ errors }"
                      name="Last Name"
                      vid="last-name"
                      rules="required"
                    >
                      <b-form-input
                        id="last-name"
                        v-model="last_name"
                        name="last-name"
                        :state="errors.length > 0 ? false : null"
                        placeholder="Last Name"
                      />
                      <small class="text-danger">{{ errors[0] }}</small>
                    </validation-provider>
                  </b-form-group>

                  <!-- Email -->
                  <b-form-group label="Email" label-for="email">
                    <validation-provider
                      #default="{ errors }"
                      name="Email"
                      vid="email"
                      rules="required|email"
                    >
                      <b-form-input
                        id="email"
                        v-model="email"
                        name="email"
                        :state="errors.length > 0 ? false : null"
                        placeholder="Email"
                      />
                      <small class="text-danger">{{ errors[0] }}</small>
                    </validation-provider>
                  </b-form-group>

                  <!-- Phone Number -->
                  <b-form-group label="Phone Number" label-for="phone-number">
                    <validation-provider
                      #default="{ errors }"
                      name="phone-number"
                      vid="phone-number"
                      rules="required"
                    >
                      <b-form-input
                        id="phone-number"
                        type="number"
                        v-model="phone_number"
                        name="phone-number"
                        :state="errors.length > 0 ? false : null"
                        placeholder="Phone"
                      />
                      <small class="text-danger">{{ errors[0] }}</small>
                    </validation-provider>
                  </b-form-group>

                  <!-- Currency -->
                  <b-form-group label="Currency" label-for="currency">
                    <validation-provider
                      #default="{ errors }"
                      name="currency"
                      vid="currency"
                      rules="required"
                    >
                      <b-form-input
                        id="currency"
                        v-model="currency"
                        name="currency"
                        :state="errors.length > 0 ? false : null"
                        placeholder="Currency"
                      />
                      <small class="text-danger">{{ errors[0] }}</small>
                    </validation-provider>
                  </b-form-group>

                  <!-- Address -->
                  <b-form-group label="Address" label-for="address">
                    <validation-provider
                      #default="{ errors }"
                      name="address"
                      vid="address"
                      rules="required"
                    >
                      <b-form-input
                        id="address"
                        v-model="address"
                        name="address"
                        :state="errors.length > 0 ? false : null"
                        placeholder="Address"
                      />
                      <small class="text-danger">{{ errors[0] }}</small>
                    </validation-provider>
                  </b-form-group>
                </b-col>
                <b-col lg="6">
                  <!-- Zipcode -->
                  <b-form-group label="Zipcode" label-for="zipcode">
                    <validation-provider
                      #default="{ errors }"
                      name="zipcode"
                      vid="zipcode"
                      rules="required"
                    >
                      <b-form-input
                        id="zipcode"
                        v-model="zipcode"
                        name="zipcode"
                        :state="errors.length > 0 ? false : null"
                        placeholder="Zipcode"
                      />
                      <small class="text-danger">{{ errors[0] }}</small>
                    </validation-provider>
                  </b-form-group>
                  <!-- Lanaguage -->
                  <b-form-group label="language" label-for="langauage">
                    <validation-provider
                      #default="{ errors }"
                      name="langauage"
                      vid="lanaguage"
                      rules="required"
                    >
                      <b-form-input
                        id="langauage"
                        v-model="lan"
                        name="langauage"
                        :state="errors.length > 0 ? false : null"
                        placeholder="Langauage"
                      />
                      <small class="text-danger">{{ errors[0] }}</small>
                    </validation-provider>
                  </b-form-group>

                  <!-- city -->
                  <b-form-group label="City" label-for="city">
                    <validation-provider
                      #default="{ errors }"
                      name="city"
                      vid="city"
                      rules="required"
                    >
                      <b-form-input
                        id="city"
                        v-model="city"
                        name="city"
                        :state="errors.length > 0 ? false : null"
                        placeholder="City"
                      />
                      <small class="text-danger">{{ errors[0] }}</small>
                    </validation-provider>
                  </b-form-group>

                  <!-- Birthday -->
                  <b-form-group label="Birthday" label-for="birthday">
                    <validation-provider
                      #default="{ errors }"
                      name="birthday"
                      vid="birthday"
                      rules="required"
                    >
                      <b-form-input
                        id="birthday"
                        v-model="birthday"
                        name="birthday"
                        :state="errors.length > 0 ? false : null"
                        placeholder="City"
                      />
                      <small class="text-danger">{{ errors[0] }}</small>
                    </validation-provider>
                  </b-form-group>

                  <!-- Country code -->
                  <b-form-group label="Country code " label-for="Country">
                    <vue-country-code
                      @onSelect="onSelect"
                      class="w-100"
                      :preferredCountries="['vn', 'us', 'gb']"
                    >
                    </vue-country-code>
                  </b-form-group>
                  <!-- Password -->

                  <b-form-group label-for="register-password" label="Password">
                    <validation-provider
                      #default="{ errors }"
                      name="Password"
                      vid="password"
                      rules="required"
                    >
                      <b-input-group
                        class="input-group-merge"
                        :class="errors.length > 0 ? 'is-invalid' : null"
                      >
                        <b-form-input
                          id="register-password"
                          v-model="password"
                          class="form-control-merge"
                          :type="passwordFieldType"
                          :state="errors.length > 0 ? false : null"
                          name="register-password"
                          placeholder="············"
                        />
                        <b-input-group-append is-text>
                          <feather-icon
                            :icon="passwordToggleIcon"
                            class="cursor-pointer"
                            @click="togglePasswordVisibility"
                          />
                        </b-input-group-append>
                      </b-input-group>
                      <small class="text-danger">{{ errors[0] }}</small>
                    </validation-provider>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-button
                variant="primary"
                block
                type="submit"
                :disabled="invalid"
              >
                Sign up
              </b-button>
            </b-form>
          </validation-observer>
        </div>
      </b-col>
      <!-- /Register-->

      <!-- Right Text-->
      <b-col lg="6" class="d-none d-lg-flex align-items-center p-5">
        <div
          class="w-100 d-lg-flex align-items-center justify-content-center px-5"
        >
          <b-img fluid :src="imgUrl" alt="Register V2" />
        </div>
      </b-col>
      <!-- /Left Text-->
    </b-row>
  </div>
</template>

<script>
/* eslint-disable global-require */
import { ValidationProvider, ValidationObserver } from "vee-validate";
import VuexyLogo from "@core/layouts/components/Logo.vue";
import {
  BRow,
  BCol,
  BLink,
  BButton,
  BForm,
  BFormCheckbox,
  BFormGroup,
  BFormInput,
  BInputGroup,
  BInputGroupAppend,
  BImg,
  BCardTitle,
  BCardText,
  BAlert
} from "bootstrap-vue";
import { mapActions } from 'vuex';
import { required, email } from "@validations";
import { togglePasswordVisibility } from "@core/mixins/ui/forms";
import store from "@/store/index";


export default {
  components: {
    VuexyLogo,
    BRow,
    BImg,
    BCol,
    BLink,
    BButton,
    BForm,
    BCardText,
    BCardTitle,
    BFormCheckbox,
    BFormGroup,
    BFormInput,
    BInputGroup,
    BInputGroupAppend,
    BAlert,
    // validations
    ValidationProvider,
    ValidationObserver,
  },
  mixins: [togglePasswordVisibility],
  data() {
    return {
      first_name: "",
      last_name: "",
      email: "",
      country_code: "",
      phone_number: "",
      currency: "",
      address: "",
      zipcode: "",
      lan: "",
      city: "",
      birthday: "",
      password: "",
      confirm_password: "",
      sideImg: require("@/assets/images/pages/register-v2.svg"),
      // validation
      required,
      email,
    };
  },
  computed: {
    passwordToggleIcon() {
      return this.passwordFieldType === "password" ? "EyeIcon" : "EyeOffIcon";
    },
    imgUrl() {
      if (store.state.appConfig.layout.skin === "dark") {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.sideImg = require("@/assets/images/pages/register-v2-dark.svg");
        return this.sideImg;
      }
      return this.sideImg;
    },
  },
  methods: {
    ...mapActions(['app/registerTheUser']),
    onSelect({ name, iso2, dialCode }) {
      this.country_code = iso2;
      console.log(this.country_code);
    },
    register() {
      this.$refs.registerForm.validate().then((success) => {
        if (success) {
           const organizeDataForRegisterRoute = {
          AccountType: "REAL",
          firstname: this.first_name,
          lastname: this.last_name,
          email: this.email,
          countrycode: this.country_code,
          phonenumber: this.phone_number,
          currency: this.currency,
          address: this.address,
          zipcode: this.zipcode,
          lang: this.lan,
          city: this.city,
          birthday: this.birthday,
          password: this.password,
        };
          this.$store.dispatch('app/registerTheUser', organizeDataForRegisterRoute)
        } 
      }).catch((err) => {
        console.log(err)
      });
    },
  },
};
/* eslint-disable global-require */
</script>

<style lang="scss">
@import "@core/scss/vue/pages/page-auth.scss";
</style>
