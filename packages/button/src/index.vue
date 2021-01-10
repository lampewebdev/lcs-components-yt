<template>
  <button class="lcs-Button">
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "LcsButton",
  props: {},
  setup() {
    // your code
  },
});
</script>

