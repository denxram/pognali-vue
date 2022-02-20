<template>
  <div class="interaction">
    <div class="interaction__contacts">
      <a class="interaction__link" href="tel:88005558628">
        <div class="interaction__icon-bg">
          <svg class="interaction__icon" width="18" height="18">
            <use xlink:href="@/assets/img/sprite.svg#topmenu-phone"></use>
          </svg>
        </div>
      </a>
      <a class="interaction__link" href="mailto:mail@htmlacademy.ru">
        <div class="interaction__icon-bg interaction__icon-bg--mail">
          <svg class="interaction__icon" width="18" height="18">
            <use xlink:href="@/assets/img/sprite.svg#topmenu-mail"></use>
          </svg>
        </div>
      </a>
    </div>
    <a href="#" class="interaction__auth-btn btn">Авторизация</a>
  </div>
</template>

<script>
export default {
  name: 'Interaction'
}
</script>

<style scoped>

</style>
