<template>
  <div class="playground" data-theme="default">
    Hello World
    
    <lcs-button>
      Default
    </lcs-button>
    <lcs-button type="primary">
      Primary
    </lcs-button>
    <lcs-button type="primary" block>
      Primary Block
    </lcs-button>
    <lcs-button type="full">
      Full
    </lcs-button>
    <div>
      <br>
    <lcs-button type="plain">
      Click Me maybe!
    </lcs-button>
    </div>
  </div>
</template>

<script>
import LcsButton from "@lcs-components/button";
export default {
    name: "playground",
    components: {
        LcsButton
    }
}
</script>

<style>

</style>