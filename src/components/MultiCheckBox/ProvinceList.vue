<template>
  <div class="list-container">
    <div class="province-list">
      <label
        class="province-item"
        v-for="(province, index) in listOption"
        :key="index"
      >
        <ProvinceCheckbox
          :province="province"
          :isChecked="isCheckData"
          :toggleCheckList="toggleCheckList"
        >
        </ProvinceCheckbox>
      </label>
    </div>
    <div class="button-group">
      <button
        :disabled="false"
        class="button-ok"
        :class="{ active: !emptyCheckList }"
        @click="$emit('confirm-check')"
      >
        Đồng ý
      </button>
      <button class="button-cancel" @click="$emit('remove-check')">Hủy</button>
    </div>
  </div>
</template>

<script>
import ProvinceCheckbox from "./ProvinceCheckbox.vue";
export default {
  components: {
    ProvinceCheckbox,
  },
  props: {
    listOption: Array,
    isCheckData: Function,
    toggleCheckList: Function,
    emptyCheckList: Boolean,
  },
  methods: {
    confirmHandle() {
      console.log(this.listOption);
    },
  },
};
</script>
<style scoped>
.list-container {
  position: absolute;
  background-color: #fff;
  box-shadow: 0 1px 8px hsl(0deg 0% 40% / 20%);
}

.province-list {
  height: 304px;
  width: 480px;
  overflow-y: scroll;
}

button {
  border: 0;
  outline: 0;
  background: transparent;
  padding: 4px 20px;
  font-size: 16px;
  line-height: 24px;
  cursor: pointer;
}

.button-ok.active {
  background-color: #007bc3;
  cursor: pointer;
}

.button-ok {
  font-weight: 700;
  background-color: #dcdcdc;
  color: #fff;
  border-radius: 4px;
  cursor: unset;
}

.button-cancel {
  color: #007bc3;
  margin-left: 10px;
}

.button-group {
  margin: 10px 0 20px 15px;
  display: flex;
  justify-content: start;
}

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px #fff;
}

::-webkit-scrollbar-thumb {
  background: #dcdcdc;
  border-radius: 4px;
}
</style>
