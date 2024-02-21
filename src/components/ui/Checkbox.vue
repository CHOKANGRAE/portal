<template>
  <div class="form-check">
    <input type="checkbox" :id="id" :name="name" :required="required" />
    <label :for="id">{{ label }} <span :class="{ on : required == true }">*</span> </label>
  </div>
</template>

<script lang="ts">
import "./Checkbox.scss";

import { defineComponent } from "vue";
export default defineComponent({
  props: {
    id: {
      type: String,
      default: "",
    },

    name: {
      type: String,
      default: "",
    },

    required: {
      type: Boolean,
      default: "false",
    },

    label: {
      type: String,
      default: "",
    },
  },
  data() {
    return {};
  },
});
</script>
