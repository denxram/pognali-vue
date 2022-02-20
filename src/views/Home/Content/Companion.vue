<template>
  <section class="companion" ref="startCompanion">
    <div class="companion__inner grid__col">
      <div class="companion__grid-text">
        <h2 class="companion__title title-section">Попутчики</h2>
        <p class="companion__text text-section">Все мы индивидуальны и у каждого свой взгляд на идеальный отдых.
          Одному нужен пляж и коктейль, а другому маршрут для хайкинга.</p>
        <p class="companion__text text-section--bold">Теперь можно легко найти
          единомышленников!</p>
      </div>
      <transition-group
        name="item-transition"
        tag="div"
        v-if="CompanionCardVisible.length > 0"
        class="companion__list companion-card">
        <CompanionCard class="companion__item"
                       v-for="companion in CompanionCardVisible"
                       :key="companion.companionName"
                       :companionCard_data="companion"
        />
      </transition-group>
      <div v-else class="warning__grid">
        <h3 class="warning__title title-section">Ошибка загрузки контента...</h3>
      </div>
      <div class="companion__buttons-grid">
        <v-load-more-btn-hide
          v-if="visibleCompanionCard > 2"
          @click="hideCard"/>
        <v-load-more-btn
          @click="visibleCompanionCard += step"
          v-if="visibleCompanionCard < COMPANIONS.length"/>
      </div>
      <router-link to="/about" class="companion__link v-button">
        <span class="v-button__text">Показать всех</span>
        <svg class="v-button__icon" width="10" height="14">
          <use xlink:href="@/assets/img/sprite.svg#triangle-arrow-right"></use>
        </svg>
      </router-link>
    </div>
  </section>
</template>

<script>

import CompanionCard from '@/components/Companion-card.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Companion',
  components: {
    CompanionCard
  },
  data () {
    return {
      visibleCompanionCard: 2,
      step: 2
    }
  },
  computed: {
    ...mapGetters([
      'COMPANIONS'
    ]),
    CompanionCardVisible () {
      return this.COMPANIONS.slice(0, this.visibleCompanionCard)
    }
  },
  methods: {
    ...mapActions([
      'getCompanions'
    ]),
    hideCard () {
      this.visibleCompanionCard = 2
      this.$refs.startCompanion.scrollIntoView({ behavior: 'smooth' })
    }
  },
  mounted () {
    this.getCompanions()
  }
}
</script>

<style scoped>

</style>
