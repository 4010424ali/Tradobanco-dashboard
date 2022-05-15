import { $themeBreakpoints } from '@themeConfig'
import router from '@/router/index';

export default {
  namespaced: true,
  state: {
    AppActiveUser: {},
    AccountStatus: {},
    OpenedTransection: {},
    CloseTransaction: {},
    Transection: {},
    isAuthenticated: false,
    UpdatedDetailsNoti: false,
    windowWidth: 0,
    shallShowOverlay: false,
    errors: { showError: false },
  },
  getters: {
    currentBreakPoint: state => {
      const { windowWidth } = state
      if (windowWidth >= $themeBreakpoints.xl) return 'xl'
      if (windowWidth >= $themeBreakpoints.lg) return 'lg'
      if (windowWidth >= $themeBreakpoints.md) return 'md'
      if (windowWidth >= $themeBreakpoints.sm) return 'sm'
      return 'xs'
    },
  },
  mutations: {
    UPDATE_WINDOW_WIDTH(state, val) {
      state.windowWidth = val
    },
    TOGGLE_OVERLAY(state, val) {
      state.shallShowOverlay = val !== undefined ? val : !state.shallShowOverlay
    },
    LOGIG_ACTIVE_USSER(state, user) {
      state.isAuthenticated = true;
      return (state.AppActiveUser = user);
    },
    ACCOUNT_STATUS(state, accountState) {
      state.isAuthenticated = true;
      return (state.AccountStatus = accountState);
    },  
    OPENED_TRANSECTION(state, openTransection) {
      state.isAuthenticated = true;
      return (state.OpenedTransection = openTransection);
    },
    CLOSED_TRANSECTION(state, closeTransection) {
      state.isAuthenticated = true;
      return (state.CloseTransaction = closeTransection);
    },
    MONETERY_TRANSECTION(state, data) {
      state.isAuthenticated = true;
      return (state.Transection = data);
    },
    UPDATE_DETAILS(state, details) {
      state.isAuthenticated = true;
      state.AppActiveUser.profile.countryIso2 = details.profile.mobCountryCode;
  
      state.AppActiveUser.profile.telArea = details.profile.telArea;
      state.AppActiveUser.profile.telNumber = details.profile.telNumber;
      state.AppActiveUser.profile.mobNumber = details.profile.mobNumber;
      state.AppActiveUser.profile.address = details.profile.address;
      state.AppActiveUser.profile.city = details.profile.city;
      state.AppActiveUser.profile.zipCode = details.profile.zipCode;
      state.UpdatedDetailsNoti = true;
  
      return state.AppActiveUser;
    },
    LOGOUT(state) {
      return  state.isAuthenticated= false
    },
    ERRORS(state, error) {
      const errors = (state.errors = error);
      const showError = (state.errors.showError = true);
      state.isAuthenticated = false;
      return { showError, errors };
    },
  
  },
  actions: {
    async loginTheUser({ commit }, loginCredentials) {
      try {
        const response = await fetch("https://tradobanco.com/api/?action=login", {
          method: "POST",
          headers: {
            'Accept': "applocation/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(loginCredentials),
        });
  
        const data = await response.json();
  
        if (data.status === "success") {
          commit("LOGIG_ACTIVE_USSER", data);
          // Set the local storage for later user
          localStorage.setItem("token", data.token);
          localStorage.setItem("login", data.login);
          router.push("/");
        } else {
          commit("ERRORS", data);
        }
      } catch (error) {
        commit("ERRORS", error);
      }
    },

    async registerTheUser({ commit }, registerCredentials) {
      try {
        const response = await fetch(
          "https://tradobanco.com/api/?action=createaccount",
          {
            method: "POST",
            headers: {
              'Accept': "applocation/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify(registerCredentials),
          }
        );
  
        const data = await response.json();
  
        if (data.status === "success") {
          commit("LOGIG_ACTIVE_USSER", data);
          // Set the local storage for later user
          localStorage.setItem("token", data.token);
          localStorage.setItem("login", data.login);
          router.push("/");
        } else {
          commit("ERRORS", data);
        }
      } catch (error) {
        commit("ERRORS", error);
      }
    },

    async getUserDetails({ commit }) {
      try {
        const response = await fetch(
          "https://tradobanco.com/api/?action=checkConnection",
          {
            method: "POST",
            headers: {
              'Accept': "applocation/json",
              "Content-Type": "application/json",
              'Authorization': `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify({
              login: parseInt(localStorage.getItem("login")),
            }),
          }
        );
  
        const data = await response.json();
  
        if (data.status === "success") {
          commit("LOGIG_ACTIVE_USSER", data);
        } else {
          commit("ERRORS", data);
        }
      } catch (error) {
        console.log(error);
      }
    },

    async getUserDetails({ commit }) {
      try {
        const response = await fetch(
          "https://tradobanco.com/api/?action=checkConnection",
          {
            method: "POST",
            headers: {
              'Accept': "applocation/json",
              "Content-Type": "application/json",
              'Authorization': `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify({
              login: parseInt(localStorage.getItem("login")),
            }),
          }
        );
  
        const data = await response.json();
  
        if (data.status === "success") {
          commit("LOGIG_ACTIVE_USSER", data);
        } else {
          commit("ERRORS", data);
        }
      } catch (error) {
        console.log(error);
      }
    },
  
    async accountStatus({ commit }) {
      try {
        const response = await fetch(
          "https://tradobanco.com/api/?action=accountstatus",
          {
            method: "POST",
            headers: {
              'Accept': "applocation/json",
              "Content-Type": "application/json",
              'Authorization': `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify({
              login: parseInt(localStorage.getItem("login")),
            }),
          }
        );
  
        const data = await response.json();
  
        if (data.status === "success") {
          commit("ACCOUNT_STATUS", data);
        } else {
          commit("ERRORS", data);
        }
      } catch (error) {
        commit("ERRORS", error);
      }
    },
    async openTransection({ commit }) {
      try {
        const response = await fetch(
          "https://tradobanco.com/api/?action=openedtransactions",
          {
            method: "POST",
            headers: {
              'Accept': "applocation/json",
              "Content-Type": "application/json",
              'Authorization': `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify({
              login: parseInt(localStorage.getItem("login")),
            }),
          }
        );
  
        const data = await response.json();
  
        if (data.status === "ok") {
          commit("OPENED_TRANSECTION", data);
        } else {
          commit("ERRORS", data);
        }
      } catch (error) {
        commit("ERRORS", data);
      }
    },
    async closeTransection({ commit }) {
      try {
        const response = await fetch(
          "https://tradobanco.com/api/?action=closedTransaction",
          {
            method: "POST",
            headers: {
              'Accept': "applocation/json",
              "Content-Type": "application/json",
              'Authorization': `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify({
              login: parseInt(localStorage.getItem("login")),
            }),
          }
        );
  
        const data = await response.json();
  
        if (data.status === "ok") {
          commit("CLOSED_TRANSECTION", data);
        } else {
          commit("ERRORS", data);
        }
      } catch (error) {
        commit("ERRORS", data);
      }
    },
    async monetaryTransetion({ commit }) {
      try {
        const response = await fetch(
          "https://tradobanco.com/api/?action=monetarytransactions",
          {
            method: "POST",
            headers: {
              'Accept': "applocation/json",
              "Content-Type": "application/json",
              'Authorization': `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify({
              login: parseInt(localStorage.getItem("login")),
            }),
          }
        );
  
        const data = await response.json();
  
        if (data.status === "ok") {
          commit("MONETERY_TRANSECTION", data);
        } else {
          commit("ERRORS", data);
        }
      } catch (error) {
        commit("ERRORS", error);
      }
    },
    async updatedDetails({ commit }, updatedData) {
      try {
        const response = await fetch(
          "https://tradobanco.com/api/?action=updatedetails",
          {
            method: "POST",
            headers: {
              'Accept': "applocation/json",
              "Content-Type": "application/json",
              'Authorization': `Bearer ${localStorage.getItem("token")}`,
            },
            body: JSON.stringify(updatedData),
          }
        );
  
        const data = await response.json();
  
        commit("UPDATE_DETAILS", data);
      } catch (error) {
        commit("ERRORS", error);
      }
    },

    handleLogout({ commit }) {
      commit('LOGOUT');
    }
  },
}
