<template>
  <section class="cta">
    <div class="cta__inner grid__col">
      <h2 class="cta__title title-section">Заинтересовались?</h2>
      <p class="cta__text text-section">Зарегистрируйтесь,<br class="cta__text-br">
        это быстро и бесплатно!</p>
      <p class="cta__text text-section">Уже зарегистрированы? Тогда скорее <a href="#" class="cta__text-link">авторизуйтесь</a>.</p>
      <form class="cta__form">
        <input class="cta__input" type="email" placeholder="E-mail">
        <button @click.prevent class="cta__submit-btn v-button" type="submit">
          <span class="cta__submit-btn-text">Регистрация</span>
          <svg class="v-button__icon" width="10" height="14">
            <use xlink:href="@/assets/img/sprite.svg#triangle-arrow-right"></use>
          </svg>
        </button>
      </form>
      <p class="cta__text text-section">Остались вопросы?<br class="cta__text-br">
        Мы с радостью на них ответим!</p>
        <Contacts class="cta__contacts"/>
    </div>
  </section>
</template>

<script>

import Contacts from '@/components/Contacts'
export default {
  name: 'cta',
  components: { Contacts }
}
</script>

<style scoped>

</style>
