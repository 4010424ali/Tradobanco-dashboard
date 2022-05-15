<template>
  <div class="auth-wrapper auth-v2">
    <b-row class="auth-inner m-0">
      <!-- Brand logo-->
      <b-link class="brand-logo">
        <vuexy-logo />
        <h2 class="brand-text text-primary ml-1">Vuexy</h2>
      </b-link>
      <!-- /Brand logo-->

      <!-- Left Text-->
      <b-col lg="8" class="d-none d-lg-flex align-items-center p-5">
        <div
          class="w-100 d-lg-flex align-items-center justify-content-center px-5"
        >
          <b-img fluid :src="imgUrl" alt="Login V2" />
        </div>
      </b-col>
      <!-- /Left Text-->

      <!-- Login-->
      <b-col lg="4" class="d-flex align-items-center auth-bg px-2 p-lg-5">
        <b-col sm="8" md="6" lg="12" class="px-xl-2 mx-auto">
          <b-card-title title-tag="h2" class="font-weight-bold mb-1">
            Welcome to Vuexy! 👋
          </b-card-title>
          <b-card-text class="mb-2">
            Please sign-in to your account and start the adventure
          </b-card-text>
          <b-alert
            class="p-1"
            show
            v-show="$store.state.app.errors.showError"
            dismissible
            variant="danger"
            ><span>{{ $store.state.app.errors.message }}</span></b-alert
          >
          <!-- form -->
          <validation-observer ref="loginValidation">
            <b-form class="auth-login-form mt-2" @submit.prevent>
              <!-- email -->
              <b-form-group label="Loging Id" label-for="login-email">
                <validation-provider
                  #default="{ errors }"
                  name="Email"
                  rules="required"
                >
                  <b-form-input
                    id="login-email"
                    v-model="userEmail"
                    :state="errors.length > 0 ? false : null"
                    name="login-email"
                    placeholder="Login id"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>

              <!-- forgot password -->
              <b-form-group>
                <div class="d-flex justify-content-between">
                  <label for="login-password">Password</label>
                  <b-link @click="openModal">
                    <small>Forgot Password?</small>
                  </b-link>
                </div>
                <validation-provider
                  #default="{ errors }"
                  name="Password"
                  rules="required"
                >
                  <b-input-group
                    class="input-group-merge"
                    :class="errors.length > 0 ? 'is-invalid' : null"
                  >
                    <b-form-input
                      id="login-password"
                      v-model="password"
                      :state="errors.length > 0 ? false : null"
                      class="form-control-merge"
                      :type="passwordFieldType"
                      name="login-password"
                      placeholder="············"
                    />
                    <b-input-group-append is-text>
                      <feather-icon
                        class="cursor-pointer"
                        :icon="passwordToggleIcon"
                        @click="togglePasswordVisibility"
                      />
                    </b-input-group-append>
                  </b-input-group>
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>

              <!-- checkbox -->
              <b-form-group>
                <b-form-checkbox
                  id="remember-me"
                  v-model="status"
                  name="checkbox-1"
                >
                  Remember Me
                </b-form-checkbox>
              </b-form-group>

              <!-- submit buttons -->
              <b-button
                type="submit"
                variant="primary"
                block
                @click="validationForm"
              >
                Sign in
              </b-button>
            </b-form>
          </validation-observer>

          <b-card-text class="text-center mt-2">
            <span>New on our platform? </span>
            <b-link :to="{ name: 'page-auth-register-v2' }">
              <span>&nbsp;Create an account</span>
            </b-link>
          </b-card-text>
        </b-col>
      </b-col>
      <!-- /Login-->
    </b-row>
    <div>
      <b-modal hide-footer centered id="modal-1" title="Forget Password">
        <validation-observer ref="forget_form" #default="{ invalid }">
          <b-form
            class="uth-register-form mt-2"
            @submit.prevent="forget_password"
          >
            <!-- Login id -->
            <b-form-group label="login ID" label-for="login">
              <validation-provider
                #default="{ errors }"
                name="Login ID"
                vid="login"
                rules="required"
              >
                <b-form-input
                  id="login"
                  v-model="login"
                  name="login"
                  :state="errors.length > 0 ? false : null"
                  placeholder="login ID"
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
                  v-model="for_email"
                  name="email"
                  :state="errors.length > 0 ? false : null"
                  placeholder="Email"
                />
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>

            <b-button
              type="submit"
              class="mt-3"
              variant="primary"
              block
              :disabled="invalid"
              >Forget Password</b-button
            >
          </b-form>
        </validation-observer>
      </b-modal>
    </div>
  </div>
</template>

<script>
/* eslint-disable global-require */
import { ValidationProvider, ValidationObserver } from "vee-validate";
import VuexyLogo from "@core/layouts/components/Logo.vue";
import { mapActions } from "vuex";
import {
  BRow,
  BCol,
  BLink,
  BFormGroup,
  BFormInput,
  BInputGroupAppend,
  BInputGroup,
  BFormCheckbox,
  BCardText,
  BCardTitle,
  BImg,
  BForm,
  BButton,
  BAlert,
  BModal,
} from "bootstrap-vue";
import { required, email } from "@validations";
import { togglePasswordVisibility } from "@core/mixins/ui/forms";
import store from "@/store/index";
import ToastificationContent from "@core/components/toastification/ToastificationContent.vue";

export default {
  components: {
    BRow,
    BCol,
    BLink,
    BFormGroup,
    BFormInput,
    BInputGroupAppend,
    BInputGroup,
    BFormCheckbox,
    BCardText,
    BCardTitle,
    BImg,
    BForm,
    BButton,
    BAlert,
    BModal,
    VuexyLogo,
    ValidationProvider,
    ValidationObserver,
  },
  mixins: [togglePasswordVisibility],
  data() {
    return {
      status: "",
      for_email: "",
      login: 0,
      password: "",
      userEmail: "",
      show_error: {},
      sideImg: require("@/assets/images/pages/login-v2.svg"),
      // validation rulesimport store from '@/store/index'
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
        this.sideImg = require("@/assets/images/pages/login-v2-dark.svg");
        return this.sideImg;
      }
      return this.sideImg;
    },
  },
  methods: {
    ...mapActions(["app/loginTheUser"]),
    openModal() {
      this.$bvModal.show("modal-1");
    },
    hideModel() {
      this.$bvModal.close("modal-1");
      // forget_password
    },
    async forget_password() {
      const suc = await this.$refs.forget_form.validate();
      if (suc) {
        const response = await fetch(
          "https://tradobanco.com/api/?action=forgotpassword",
          {
            method: "POST",
            headers: {
              Accept: "applocation/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              login: parseInt(this.login),
              email: this.for_email,
            }),
          }
        );

        const data = await response.json();

        if (data.type === "AUTH_ERROR") {
          this.show_error = data;
        } else {
           this.$toast({
            component: ToastificationContent,
            props: {
              title: "Please Check your email",
              icon: "EditIcon",
              variant: "success",
            },
          });
          //  this.$bvModal.close("modal-1");
          // this.$vs.notify({
          //   title: "Forget Password Alert",
          //   text: "Kindly check your email,",
          //   color: "success",
          //   position: "top-center",
          // });
        }
      }
    },
    validationForm() {
      this.$refs.loginValidation.validate().then((success) => {
        if (success) {
          const credentails = {
            login: parseInt(this.userEmail),
            password: this.password,
          };
          this.$store.dispatch("app/loginTheUser", credentails);
          this.$toast({
            component: ToastificationContent,
            props: {
              title: "Form Submitted",
              icon: "EditIcon",
              variant: "success",
            },
          });
        }
      });
    },
  },
};
</script>

<style lang="scss">
@import "@core/scss/vue/pages/page-auth.scss";
</style>
