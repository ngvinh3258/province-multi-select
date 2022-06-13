<template>
  <div id="app">
    <div class="select-container" ref="dropdown">
      <div class="title-province" @click="$store.commit('setShowDropdown', !isShowDropdown)"
        :class="{ active: isShowDropdown === true }">Chọn tỉnh thành</div>
      <ProvinceList></ProvinceList>
    </div>
    <ProvinceResult v-if="!isShowDropdown" />
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import ProvinceList from './components/ProvinceList.vue'
import ProvinceResult from './components/ProvinceResult.vue';
import store from '@/store';
export default {
  name: 'App',
  components: {
    ProvinceList,
    ProvinceResult
  },
  computed: {

    ...mapGetters(["isShowDropdown"]),
  }
  , created() {
    this.$store.dispatch("getProvinceGG");
  }, methods: {
    ...mapMutations(['setShowDropdown']),
  }
  ,
  mounted() {
    window.addEventListener("click", (e) => {
      if (e.target.contains(this.$refs.dropdown))
        store.commit('setShowDropdown', false)
    });
  },

}
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
