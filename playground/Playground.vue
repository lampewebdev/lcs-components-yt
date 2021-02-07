<template>
  <div class="playground" data-theme="default">
    <h1>Theme Default</h1>
    <div>
      <lcs-button>
        Default
      </lcs-button>
      <lcs-button type="primary">
        Primary
      </lcs-button>
    </div>
    <div>
      <lcs-button type="primary" block>
        Primary Block
      </lcs-button>
    </div>
    <div>
      <lcs-button type="full">
        Full
      </lcs-button>
    </div>
    <div>
      <lcs-button type="plain">
        Click Me maybe!
      </lcs-button>
    </div>
  </div>
  <div class="playground" data-theme="dark">
    <h1>Theme dark</h1>
    <div>
      <lcs-button>
        Default
      </lcs-button>
      <lcs-button type="primary">
        Primary
      </lcs-button>
    </div>
    <div>
      <lcs-button type="primary" block>
        Primary Block
      </lcs-button>
    </div>
    <div>
      <lcs-button type="full">
        Full
      </lcs-button>
    </div>
    <div>
      <lcs-button type="plain">
        Click Me maybe!
      </lcs-button>
    </div>
  </div>
    <div class="playground" data-theme="oled">
    <h1>Theme oled</h1>
    <div>
      <lcs-button>
        Default
      </lcs-button>
      <lcs-button type="primary">
        Primary
      </lcs-button>
    </div>
    <div>
      <lcs-button type="primary" block>
        Primary Block
      </lcs-button>
    </div>
    <div>
      <lcs-button type="full">
        Full
      </lcs-button>
    </div>
    <div>
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
    LcsButton,
  },
};
</script>

<style></style>
