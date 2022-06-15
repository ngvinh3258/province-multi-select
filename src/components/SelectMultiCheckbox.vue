<template>
  <div>
    <div class="select-container">
      <input
        class="title-province"
        :class="{ active: true }"
        placeholder="Chọn tỉnh thành"
        type="text"
        v-model="search"
      />
      <button @click="handleSearch">Search</button>
      <ProvinceList :listOption="filterProvinces"></ProvinceList>
    </div>
    <ProvinceResult />
  </div>
</template>
<script>
import ProvinceList from "./MultiCheckBox/ProvinceList.vue";
import ProvinceResult from "./MultiCheckBox/ProvinceResult.vue";
export default {
  components: {
    ProvinceList,
    ProvinceResult,
  },
  prop: {
    listData: Object,
  },
  data() {
    return {
      search: "",
    };
  },
  computed: {
    filterProvinces() {
      if (this.search) {
        return Object.fromEntries(
          Object.entries(this.listData).filter(([key]) =>
            key.toLowerCase().includes(this.search.toLowerCase()),
          ),
        );
      } else {
        console.log("this.listOption", this.listData);
        return this.listData;
      }
    },
  },
  methods: {
    handleSearch() {
      console.log("list", this.listData);
    },
  },
};
</script>
<style scoped></style>
