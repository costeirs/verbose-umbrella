<template>
  <div>
    <img :src="umlsrc" >
  </div>
</template>
<script>
const plantumlEncoder = require("plantuml-encoder");

export default {
  props: {
    text: {
      default: "",
      type: String
    }
  },
  computed: {
    umlsrc() {
      const encoded = plantumlEncoder.encode(this.text);

      return "http://www.plantuml.com/plantuml/img/" + encoded;
    }
  }
};
</script>
