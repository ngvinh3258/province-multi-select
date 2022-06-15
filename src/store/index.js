import axios from "axios";
import Vue from "vue";
import VueX from "vuex";

Vue.use(VueX);

export default new VueX.Store({
  state: {
    provinces: {},
    checkedProvince: { data: [] },
    isShowDropdown: false,
  },
  getters: {
    provinces: (state) => state.provinces,
    checkedProvince: (state) => state.checkedProvince,
    getCheck(state) {
      let temp = [];
      state.checkedProvince.data.map((e) => {
        temp.push({ [e]: state.provinces[e] });
      });
      return temp;
    },
    isShowDropdown: (state) => state.isShowDropdown,
  },
  mutations: {
    setProvinces(state, provinces) {
      state.provinces = provinces;
    },
    unCheckProvince(state, checked) {
      state.checkedProvince.data = state.checkedProvince.data.filter(
        (e) => e !== checked
      );
    },
    removeAllProvinces(state) {
      state.checkedProvince.data = [];
    },
    setShowDropdown(state, isShowDropdown) {
      state.isShowDropdown = isShowDropdown;
    },
  },
  actions: {
    getProvinceGG({ commit }) {
      axios
        .get("https://provinces.open-api.vn/api/?depth=1")
        .then((response) => {
          let data = {};
          response.data.forEach((e) => {
            data[e.codename] = e.name.replace(/(Thành phố )|(Tỉnh )/i, "");
          });
          commit("setProvinces", data);
        });
    },
  },
});
