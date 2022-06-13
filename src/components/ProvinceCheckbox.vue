<template>
  <div class="checkbox-group">
    <span class="checkbox-province">
      <input type="checkbox" v-model="checkedProvince.data" :value="idProvince" />
      <span class="checkmark"></span>
    </span>
    <span class="label">{{ province }}</span>
  </div>

</template>

<script>
import { mapState } from "vuex";
export default {
  props: {
    province: {
      type: String,
      required: true,
    },
    idProvince: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapState(["checkedProvince"]),
  },
};
</script>

<style scoped>
.checkbox-group {
  display: flex;
  align-items: center;
  padding: 4px 16px;
}

span.label {
  color: #333333;
  margin-left: 20px;
  margin-bottom: -5px;
}

.checkbox-province {
  display: block;
  position: relative;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  margin-top: 5px;
}

.checkbox-province input {
  position: relative;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
  margin-top: 5px;
}

.checkbox-province .checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 16px;
  width: 16px;
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid #333333;
}

.checkbox-province input:checked+.checkmark {
  background-color: #45d1c9;
  border-color: transparent;
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.checkbox-province input:checked+.checkmark:after {
  display: block;
}

.checkbox-province .checkmark:after {
  left: 6px;
  top: 2px;
  width: 2px;
  height: 8px;
  border: solid white;
  border-width: 0 1px 1px 0;
  transform: rotate(45deg);
}
</style>
