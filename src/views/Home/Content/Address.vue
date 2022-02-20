<template>
  <section class="address">
    <div class="address__inner grid__col">
      <div class="address__grid-text">
        <div class="address__icon-bg">
          <svg class="address__icon" width="14" height="22">
            <use xlink:href="@/assets/img/sprite.svg#contacts-location"></use>
          </svg>
        </div>
        <p class="address__text">ул. Большая Конюшенная, 19/8</p>
      </div>
      <a class="address__link v-button" href="#">
        <span class="v-button__text">Проложить маршрут</span>
        <svg class="v-button__icon" width="10" height="14">
          <use xlink:href="@/assets/img/sprite.svg#triangle-arrow-right"></use>
        </svg>
      </a>
    </div>
  </section>
</template>

<script>

export default {
  name: 'Map',
  data () {
    return {
    }
  },
  methods: {
  }
}

</script>

<style scoped>

</style>
