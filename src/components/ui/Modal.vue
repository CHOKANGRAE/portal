<template>
  <transition name="modal">
    <div class="modal-bg" v-if="isModal">
      <div :class="['modal', { 'pc' : isPC }]">
        <div class="modal-header">
          <slot name="header"/>
        </div>
        <div class="modal-body">
          <slot name="body"/>
        </div>
        <div class="modal-footer">
          <slot name="footer"/>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import './Modal.scss';
import {defineComponent, ref, onMounted, onBeforeUnmount} from "vue";

export default defineComponent({
  name: "Modal",
  props: {
    isModal : Boolean,
  },

  data() {
    return {
      isPC: window.innerWidth > 751,
    };
  },
  methods: {
    updateWindowSize() {
      this.isPC = window.innerWidth > 751;
    },
  },
  mounted() {
    window.addEventListener('resize', this.updateWindowSize);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.updateWindowSize);
  },
  
})
</script>