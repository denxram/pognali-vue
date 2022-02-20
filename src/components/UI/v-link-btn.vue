<template>
  <a :href="Link" class="v-link-btn v-button">
    <span class="v-link-btn__text">{{ LinkText }}</span>
    <svg class="v-button__icon" width="10" height="14">
      <use xlink:href="@/assets/img/sprite.svg#triangle-arrow-right"></use>
    </svg>
  </a>
</template>

<script>
export default {
  name: 'v-link-btn',
  props: {
    LinkText: {
      type: String,
      default: 'Link...'
    },
    Link: {
      type: String,
      default: '#'
    }
  }
}
</script>
