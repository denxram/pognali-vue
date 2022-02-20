<template>
  <a class="v-button">
    <span class="v-button__text">{{ buttonText }}</span>
    <svg class="v-button__icon" width="10" height="14">
      <use xlink:href="@/assets/img/sprite.svg#triangle-arrow-right"></use>
    </svg>
  </a>
</template>

<script>
export default {
  name: 'v-button',
  props: {
    buttonText: {
      type: String,
      default: 'Button name...'
    },
    linkButton: {
      type: String,
      default: '#'
    }
  }
}

</script>

<style scoped>

</style>
