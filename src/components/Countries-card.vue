<template>
  <div class="countries-card__item">
    <a href="#" class="countries-card__link">
      <div class="countries-card__img-grid">
        <picture class="countries-card__img-picture">
          <source media="(min-width: 768px)" :srcset=" require('../assets/img/' + country_data.countriesImageDesktop1x) + ' 1x, ' +
                                                     require('../assets/img/' + country_data.countriesImageDesktop2x) + ' 2x' ">
          <img class="countries-card__image"
          :src=" require('../assets/img/' + country_data.countriesImage1x) "
          :srcset=" require('../assets/img/' + country_data.countriesImage2x) "
               :alt=" country_data.name ">
        </picture>
      </div>
      <div class="countries-card__info">
        <picture>
          <img class="countries-card__flag" width="35" height="24"
            :src=" require('../assets/img/flag-' + country_data.flag) "
            :alt=" country_data.name + ' флаг' ">
        </picture>
        <div class="countries-card__grid">
          <div class="countries-card__grid-text">
            <h3 class="countries-card__title">{{ country_data.name }}</h3>
            <p class="countries-card__text"> {{ country_data.text }}</p>
          </div>
          <div class="countries-card__grid-views">
            <img class="countries-card__icon" src="@/assets/img/user.svg" width="11" height="11">
            <span class="countries-card__views">{{country_data.views}}</span>
          </div>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'Countries-card',
  props: {
    country_data: {
      type: Object,
      required: true
    }
  }
}
</script>
