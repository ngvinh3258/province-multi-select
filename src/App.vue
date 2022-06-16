<template>
  <div id="app">
    <SelectMultiCheckbox :listData="dataa"></SelectMultiCheckbox>
  </div>
</template>

<script>
import SelectMultiCheckbox from "./components/SelectMultiCheckbox.vue";
import axios from "axios";
export default {
  name: "App",
  components: {
    SelectMultiCheckbox,
  },
  data() {
    return {
      search: "",
      dataa: [],
    };
  },
  created() {
    axios.get("https://provinces.open-api.vn/api/?depth=1").then((response) => {
      let listData = [];
      response.data.forEach((e) => {
        listData.push(e.name.replace(/(Thành phố )|(Tỉnh )/i, ""));
      });
      this.dataa = listData;
      console.log("data", this.dataa);
    });
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.saaaaaa {
  height: 40px;
  width: 40px;
}

.select-container {
  position: relative;
}

.title-province {
  border: 1px solid #999999;
  border-radius: 4px;
  height: 16px;
  width: 460px;
  color: #999999;
  cursor: pointer;
  position: relative;
  padding: 16px 10px;
  text-align: start;
  display: flex;
}

.title-province.active {
  border: 1px solid #007bc3;
  box-shadow: 0px 0px 8px rgba(0, 123, 195, 0.32);
}

.title-province:after {
  content: "";
  display: block;
  width: 0;
  height: 0;
  position: absolute;
  right: 22px;
  top: 50%;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid #666666;
}
</style>
