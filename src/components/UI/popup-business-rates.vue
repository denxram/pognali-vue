<template>
  <div class="popup-business-rates">
    <div class="popup-business-rates__container">
      <div class="popup-business-rates__inner">
        <h2 class="popup-business-rates__title title-section">Бизнес-тарифы</h2>
        <ul class="popup-business-rates__price-list">
          <li class="popup-business-rates__price-item"
              v-for="serviceBusiness in servicesBusiness"
              :key="serviceBusiness.id">
            <p class="popup-business-rates__price-service">{{ serviceBusiness.serviceBusinessName }}</p>
            <p class="popup-business-rates__price-cost">{{ serviceBusiness.serviceBusinessCost }}</p>
          </li>
        </ul>
      </div>
      <button class="popup-business-rates__popup-close" @click="closePopup">Закрыть окно</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'popup-business-rates',
  setup () {
    const servicesBusiness = [
      {
        id: 1,
        serviceBusinessName: 'Реклама у блоггера',
        serviceBusinessCost: '300 000 руб./пост'
      },
      {
        id: 2,
        serviceBusinessName: 'Накрутка подписчиков',
        serviceBusinessCost: 'от 1 руб./шт.'
      },
      {
        id: 3,
        serviceBusinessName: 'Лайки от ботов',
        serviceBusinessCost: 'от 20 коп./лайк'
      },
      {
        id: 4,
        serviceBusinessName: 'Ваш продакт-плейсмент',
        serviceBusinessCost: 'Индивидуально'
      }
    ]
    return {
      servicesBusiness
    }
  },
  props: {
  },
  methods: {
    closePopup () {
      this.$emit('close-popup')
    }
  }
}
</script>

<style scoped>

</style>
