<template>
  <div class="s" @blur="open = false">
    <div class="s-select" @click="open=!open" :class="{open:open}">
      <span class="input" :id="id">{{ selected }}</span>
    </div>

    <ul class="s-option" :class="{open : open}">
      <li 
        v-for="(option, index) in options" 
        key="index" 
        @click="selected=option; open=false; $emit('input', option)"
        :class="{active : selected == option}"
      >
        {{ option }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import './Select.scss';
import {defineComponent} from "vue";

export default defineComponent({
  name: "Select",
  props: {
    id: {
      type: String,
      default : ""
    },
    options: {
      type: Array,
      required: true
    },
  },
  data() {
    return {
      selected: this.options.length > 0 ? this.options[0] : null,
      open: false
    };
  },
  mounted() {
    this.$emit('input', this.selected);
  }
})
</script>