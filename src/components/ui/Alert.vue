<template>
  <transition name="alert">
    <div class="alert-bg" v-if="isAlert">
      <div :class="['alert', { 'pc' : isPC }]">
        <div class="alert-body">
          <slot name="body"/>
        </div>
        <div class="alert-footer">
          <slot name="footer"/>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import './Alert.scss';
import { defineComponent } from "vue";

export default defineComponent({
  name: "Alert",
  props: {
    isAlert : Boolean,
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