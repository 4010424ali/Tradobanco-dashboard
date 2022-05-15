<template>
  <div class="navbar-container d-flex content align-items-center">
    <!-- Nav Menu Toggler -->
    <ul class="nav navbar-nav d-xl-none">
      <li class="nav-item">
        <b-link class="nav-link" @click="toggleVerticalMenuActive">
          <feather-icon icon="MenuIcon" size="21" />
        </b-link>
      </li>
    </ul>

    <!-- Left Col -->
    <div
      class="bookmark-wrapper align-items-center flex-grow-1 d-none d-lg-flex"
    >
      <div class="account-type">
        <h5>Account Type</h5>
        <h6>{{ $store.state.app.AppActiveUser.accountType }}</h6>
      </div>
       <div class="account-type">
          <h5>Account ID</h5>
          <h6>{{ $store.state.app.AppActiveUser.AccountId }}</h6>
        </div>
    </div>

    <b-navbar-nav class="nav align-items-center ml-auto">
      <dark-Toggler class="d-none d-lg-block" />
      <b-nav-item-dropdown
        right
        toggle-class="d-flex align-items-center dropdown-user-link"
        class="dropdown-user"
      >
        <template #button-content>
          <div class="d-sm-flex d-none user-nav">
            <span class="user-status">Full Name</span>
            <p class="user-name font-weight-bolder mb-0">
              {{ $store.state.app.AppActiveUser.profile.firstName }}
              <span>
                {{ $store.state.app.AppActiveUser.profile.lastName }}</span
              >
            </p>
          </div>
          <b-avatar
            size="40"
            variant="light-primary"
            badge
            :src="require('@/assets/images/avatars/13-small.png')"
            class="badge-minimal"
            badge-variant="success"
          />
        </template>

        <b-dropdown-item
          link-class="d-flex align-items-center"
          @click="openModal"
        >
          <feather-icon size="16" icon="UserIcon" class="mr-50" />
          <span>Change Password</span>
        </b-dropdown-item>

        <b-dropdown-divider />

        <b-dropdown-item link-class="d-flex align-items-center" @click="handleLogout">
          <feather-icon size="16" icon="LogOutIcon" class="mr-50" />
          <span>Logout</span>
        </b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>
    <div>
      <b-modal hide-footer id="modal-1" title="BootstrapVue">
        <validation-observer ref="registerForm" #default="{ invalid }">
          <b-form class="uth-register-form mt-2" @submit.prevent="register">
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

            <!-- Current password -->
            <b-form-group label-for="old-password" label="Old Password">
              <validation-provider
                #default="{ errors }"
                name="Old Password"
                vid="password"
                rules="required"
              >
                <b-input-group
                  class="input-group-merge"
                  :class="errors.length > 0 ? 'is-invalid' : null"
                >
                  <b-form-input
                    id="old-password"
                    v-model="old_password"
                    class="form-control-merge"
                    :type="passwordFieldType"
                    :state="errors.length > 0 ? false : null"
                    name="old-password"
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

            <!-- New Passwors -->
            <b-form-group label-for="new-password" label="New Password">
              <validation-provider
                #default="{ errors }"
                name="New Password"
                vid="password"
                rules="required"
              >
                <b-input-group
                  class="input-group-merge"
                  :class="errors.length > 0 ? 'is-invalid' : null"
                >
                  <b-form-input
                    id="new-password"
                    v-model="new_password"
                    class="form-control-merge"
                    :type="passwordFieldType"
                    :state="errors.length > 0 ? false : null"
                    name="new-password"
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
            <!-- Confirm New Password -->
            <b-form-group
              label-for="confirm-password"
              label="Confirm New Password"
            >
              <validation-provider
                #default="{ errors }"
                name="confirm New Password"
                vid="new-password"
                rules="required"
              >
                <b-input-group
                  class="input-group-merge"
                  :class="errors.length > 0 ? 'is-invalid' : null"
                >
                  <b-form-input
                    id="confirm-password"
                    v-model="comfirm_password"
                    class="form-control-merge"
                    :type="passwordFieldType"
                    :state="errors.length > 0 ? false : null"
                    name="confirm-password"
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
            <b-button class="mt-3" variant="primary" block :disabled="invalid"
              >Change Password</b-button
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
import {
  BLink,
  BNavbarNav,
  BNavItemDropdown,
  BDropdownItem,
  BDropdownDivider,
  BAvatar,
  BModal,
  BForm,
  BFormCheckbox,
  BFormGroup,
  BFormInput,
  BInputGroup,
  BInputGroupAppend,
  BButton,
} from "bootstrap-vue";
import { mapActions } from 'vuex';
import DarkToggler from "@core/layouts/components/app-navbar/components/DarkToggler.vue";
import { togglePasswordVisibility } from "@core/mixins/ui/forms";

export default {
  components: {
    BLink,
    BNavbarNav,
    BNavItemDropdown,
    BDropdownItem,
    BDropdownDivider,
    BAvatar,
    BButton,
    BModal,
    BForm,
    BFormCheckbox,
    BFormGroup,
    BFormInput,
    BInputGroup,
    BInputGroupAppend,

    // Navbar Components
    DarkToggler,
    ValidationProvider,
    ValidationObserver,
  },
  mixins: [togglePasswordVisibility],
  props: {
    toggleVerticalMenuActive: {
      type: Function,
      default: () => {},
    },
  },
  data() {
    return {
      email:'',
      old_password: "",
      new_password: "",
      confirm_password: "",
    };
  },
  computed: {
    passwordToggleIcon() {
      return this.passwordFieldType === "password" ? "EyeIcon" : "EyeOffIcon";
    },
  },
  methods: {
    ...mapActions(['app/handleLogout']),
    openModal() {
      this.$bvModal.show("modal-1");
    },
    hideModel() {
      this.$bvModal.close("modal-1");
    },
    handleLogout() {
      localStorage.removeItem('token');
      localStorage.removeItem('login');
      this.$store.dispatch("app/handleLogout");
      this.$router.push('/login');
    }
  },
};
</script>

<style>
.account-type {
  text-align: center;
  padding-left: 10px;
  margin: 0 10px;
}
.account-type h5 {
  font-size: 1rem;
  margin-bottom: 4px;
  font-weight: bold;
}

.account-type h6 {
  font-size: 1rem;
}
</style>