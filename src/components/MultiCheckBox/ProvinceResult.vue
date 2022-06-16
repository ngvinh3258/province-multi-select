<template>
  <div class="province-result">
    <div class="item-result" v-for="(data, index) in getCheck" :key="index">
      <span class="province-name">{{ data }}</span>
      <img
        src="../../assets/close.png"
        class="close-button"
        @click="removeChecked(data)"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    getCheck: Array,
    removeChecked: Function,
  },
};
</script>

<style scoped>
.province-result {
  border: 1px solid #999999;
  border-radius: 4px;
  position: relative;
  margin-top: 8px;
  padding: 8px;
  display: flex;
  flex-wrap: wrap;
  width: 464px;
  min-height: 16px;
}

.item-result {
  display: inline-block;
  height: 32px;
  line-height: 32px;
  background: #f8f8f8;
  border-radius: 32px;
  margin-bottom: 5px;
  margin-right: 4px;
}

.province-name {
  color: #333333;
  padding: 0 20px;
}

.close-button {
  margin-right: 10px;
  cursor: pointer;
  height: 12px;
  width: 12px;
}
</style>
