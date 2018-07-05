<template>
  <div>
    <p v-if="text.length > 0">
      {{ text }}
    </p>
    <p>
      <img :src="umlsrc" >
    </p>
  </div>
</template>
<script>
const plantumlEncoder = require("plantuml-encoder");

export default {
  props: {
    text: {
      default: "",
      type: String
    },
    uml: {
      type: String,
      required: true,
      default: ""
    }
  },
  computed: {
    umlsrc() {
      const encoded = plantumlEncoder.encode(this.uml);

      return "http://www.plantuml.com/plantuml/img/" + encoded;
    }
  }
};
</script>
