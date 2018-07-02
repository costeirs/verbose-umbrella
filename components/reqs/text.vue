<template>
  <div>
    <p>{{ text }}</p>
  </div>
</template>
<script>
export default {
  props: {
      text: {
        default: '',
        type: String
      }
  }
}
</script>
