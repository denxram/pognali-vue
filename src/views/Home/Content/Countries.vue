<template>
  <section class="countries" ref="startCountries">
    <div class="countries__inner grid__col">
      <div class="countries__grid-text">
        <h2 class="countries__title title-section" ref="startCountries">Направления</h2>
        <p class="countries__text text-section">Мы не продаем туры и ничего не рекламируем. Люди сами пишут о странах,
          куда хотели бы отправиться и чем можно там заняться.</p>
      </div>
      <transition-group
        class="countries__list countries-card"
        name="item-transition"
        tag="div"
        v-if="visibleCountriesCard.length > 0">
        <CountriesCard
          v-for="country in visibleCountriesCard"
          :key="country.name"
          :country_data="country"
        />
      </transition-group>
      <div v-else class="warning__grid">
        <h3 class="warning__title title-section">Ошибка загрузки контента...</h3>
      </div>
      <div class="countries__buttons-grid">
        <v-load-more-btn-hide
          @click="cardHide"
          v-if="cardCountriesVisible > 3"/>
        <v-load-more-btn
          @click="cardCountriesVisible += step"
          v-if="cardCountriesVisible < COUNTRIES.length"/>
      </div>
      <v-button class="countries__button"
                buttonText="Показать все"
                href="#">
      </v-button>
    </div>
  </section>
</template>

<script>

import CountriesCard from '@/components/Countries-card.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Countries',
  components: {
    CountriesCard
  },
  props: {},
  data () {
    return {
      cardCountriesVisible: 3,
      step: 2
    }
  },
  computed: {
    ...mapGetters([
      'COUNTRIES'
    ]),
    visibleCountriesCard () {
      return this.COUNTRIES.slice(0, this.cardCountriesVisible)
    }
  },
  methods: {
    ...mapActions([
      'getCountries'
    ]),
    cardHide () {
      this.cardCountriesVisible = 3
      this.$refs.startCountries.scrollIntoView({ behavior: 'smooth' })
    }
  },
  mounted () {
    this.getCountries()
  }
}
</script>
