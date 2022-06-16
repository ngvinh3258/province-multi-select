<template>
  <div>
    <div class="select-container" v-click-outside="closeDropDown">
      <input
        class="title-province"
        :class="{ active: true }"
        placeholder="Chọn tỉnh thành"
        type="text"
        v-model="search"
        ref="input"
        @click="dropDownHandle"
      />
      <ProvinceList
        v-if="isShowDropdown"
        :listOption="filterProvinces"
        :isCheckData="isCheckData"
        :toggleCheckList="toggleCheckList"
        :emptyCheckList="emptyCheckList"
        @confirm-check="closeDropDown"
        @remove-check="removeAllCheck"
      ></ProvinceList>
    </div>
    <ProvinceResult
      :getCheck="listChecked"
      :removeChecked="removeChecked"
      v-if="!emptyCheckList && !isShowDropdown"
    />
  </div>
</template>
<script>
import ProvinceList from "./MultiCheckBox/ProvinceList.vue";
import ProvinceResult from "./MultiCheckBox/ProvinceResult.vue";
import { convert_vi_to_en } from "../utils/vitoen";
export default {
  components: {
    ProvinceList,
    ProvinceResult,
  },
  props: {
    listData: Array,
    onCheck: Function,
  },
  data() {
    return {
      search: "",
      isShowDropdown: false,
      listChecked: [],
    };
  },
  computed: {
    filterProvinces() {
      if (this.search) {
        const value = convert_vi_to_en(this.search).toLowerCase();
        return this.listData.filter((data) =>
          convert_vi_to_en(data).toLowerCase().includes(value),
        );
      } else {
        return this.listData;
      }
    },
    emptyCheckList() {
      return this.listChecked.length === 0;
    },
  },
  methods: {
    dropDownHandle() {
      if (this.isShowDropdown) {
        this.$ref.input.blur();
      }
      this.isShowDropdown = !this.isShowDropdown;
    },
    closeDropDown() {
      this.isShowDropdown = false;
    },
    openDropDown() {
      this.isShowDropdown = true;
    },
    toggleCheckList(e) {
      if (this.listChecked.indexOf(e) > -1) {
        this.listChecked = this.listChecked.filter((data) => data !== e);
      } else {
        this.listChecked.push(e);
      }
    },
    isCheckData(e) {
      return this.listChecked.indexOf(e) > -1;
    },
    removeChecked(e) {
      return (this.listChecked = this.listChecked.filter((i) => i != e));
    },
    removeAllCheck() {
      this.listChecked = [];
    },
  },
  // watch: {
  //   listChecked: function (e) {
  //     this.onCheck(e);
  //   },
  // },
};
</script>
<style scoped></style>
