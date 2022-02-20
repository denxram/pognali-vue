<template>
  <div class="companion-card__item">
    <div class="companion-card__image-grid">
      <picture>
        <img class="companion-card__image" width="270" height="270" alt="firsova"
             :src=" require('../assets/img/' + companionCard_data.companionImage1x) "
             :srcset=" require('../assets/img/' + companionCard_data.companionImage2x) " >
      </picture>
      <TravelerStatusBar  class="companion-card__status-bar"
      :levelValue="companionCard_data.companionLevel"/>
    </div>
    <div class="companion-card__companion-info">
      <ul class="companion-card__flag-list">
        <li class="companion-card__flag-item"
        v-for="flag in companionCard_data.flags"
        :key="flag.countryName">
          <img class="companion-card__flag-image" width="35" height="25"
                 :src="require('../assets/img/flag-' + flag.flagImg)"
                 :alt=" flag.flagImg + ' флаг' ">
          <span class="companion-card__country-name">{{flag.countryName}}</span>
        </li>
      </ul>
      <a class="companion-card__companion-link">
        <span class="companion-card__offline"
              :class="{'companion-card__online': companionCard_data.isOnline}"></span>
        <p class="companion-card__companion-name">{{ companionCard_data.companionName }}</p>
      </a>
      <p class="companion-card__companion-hashtags">{{ companionCard_data.companionHashtags }}</p>
      <TransportInCards class="companion-card__transport-list"
                        :transport_data="companionCard_data.transport"/>
    </div>
  </div>
</template>

<script>
import TravelerStatusBar from '@/components/Traveler-status-bar.vue'
import TransportInCards from '@/components/Transport-in-cards.vue'
export default {
  name: 'Companion-card',
  components: {
    TravelerStatusBar,
    TransportInCards
  },
  data () {
    return {
    }
  },
  props: {
    companionCard_data: {
      type: Object,
      required: true
    }
  }

}
</script>

<style scoped>

</style>
