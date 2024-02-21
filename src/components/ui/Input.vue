<!-- 컴포넌트화 추후 수정 필요 // handle event 제어 불가... -->
<template>
  <transition name="input">
    <input 
      type="number"
      :id="id"
      :ref="ref"
      :placeholder="placeholder" 
      :maxlength="maxlength"
      @input="handleInput"
      required
    />
  </transition>
</template>

<script lang="ts">
import './Input.scss';
import {defineComponent, PropType } from "vue";

export default defineComponent({
  name: "Input",
  props: {
    id: {
      type: String,
    },
    ref : {
      type : String,
    },
    placeholder: {
      type: String,
    },
    maxlength: {
      type: Number,
    },
  },  

  methods: {
    handleInput(event: InputEvent) {
      const inputModel = (event.target as HTMLInputElement).value;
      const maxLen = Number(this.maxlength);

      if (inputModel.length > maxLen) {
        const truncatedInput  = parseInt(inputModel.slice(0, maxLen));
        this.$emit('update:model', truncatedInput);
      }
    },
  },
})
</script>