<template>
  <section class="rates">
    <div class="rates__inner grid__col">
      <h2 class="rates__title title-section">Добавьте свой профиль</h2>
      <ul class="rates__price-list">
        <li class="rates__price-item"
            v-for="service in services"
             :key="service.id">
          <div class="rates__grid-price-text">
            <p class="rates__price-service">{{ service.serviceName }}</p>
            <p class="rates__price-cost">{{ service.serviceCost }}</p>
          </div>
          <p class="rates__service-number"
             :style="{ backgroundColor: service.backgroundNumber }">
            {{ service.id }}</p>
        </li>
      </ul>
      <button class="rates__modal-btn"
      @click="openPopup">
        <span class="rates__icon-btn-bg">
          <img class="rates__icon-btn" src="@/assets/img/business.svg" width="17" height="21">
        </span>
        <span class="rates__text-btn">Показать тарифы для бизнеса</span></button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Rates',
  setup () {
    const services = [
      {
        id: 1,
        serviceName: 'Базовое размещение',
        serviceCost: 'Бесплатно',
        backgroundNumber: '#ffa530'
      },
      {
        id: 2,
        serviceName: 'Вывод на первых позициях',
        serviceCost: '99 руб./мес',
        backgroundNumber: '#ffbd30'
      },
      {
        id: 3,
        serviceName: 'Кастомный цвет карточки',
        serviceCost: '59 руб./мес',
        backgroundNumber: '#ffd74b'
      }
    ]
    return {
      services
    }
  },
  methods: {
    openPopup () {
      this.$emit('open-rates-popup')
    }

  }
}

</script>

<style scoped>

</style>
