<template>
  <div class="home">
    <Header :scroll="handleScroll"
            :class=" { header__scroll: isActiveScroll } "/>
    <main class="page-main">
      <Intro  />
      <Service />
      <Countries />
      <Companion />
      <Rates @open-rates-popup="popupRatesVisible"/>
      <Cta />
      <Address />
      <yandex-map ymap-class="map-box"
                  :coords="coords"
                  :zoom="16"
                  :controls="controls"
                  :scroll-zoom="scrollZoom">
        <ymapMarker  marker-type="placemark"
                     :coords="[59.938635, 30.323118]"
                     marker-id="1"
                     :icon="{color: 'yellow', glyph: 'dot'}" />
      </yandex-map >
    </main>
    <Footer />
    <transition name="custom-transition"
                enter-active-class="animate__animated animate__fadeInDownBig"
                leave-active-class="animate__animated animate__fadeOutUpBig">
    <popup-business-rates
      v-if="isPopupRatesVisible"
      @close-popup="popupRatesHide"
    />
    </transition>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Intro from '@/views/Home/Content/Intro.vue'
import Countries from '@/views/Home/Content/Countries.vue'
import Companion from '@/views/Home/Content/Companion.vue'
import Rates from '@/views/Home/Content/Rates.vue'
import Cta from '@/views/Home/Content/Cta'
import Address from '@/views/Home/Content/Address'
import { yandexMap, ymapMarker } from 'vue-yandex-maps'
import Footer from '@/components/Footer'
import Service from '@/views/Home/Content/Service'

export default {
  name: 'Home',
  components: {
    Service,
    Footer,
    Address,
    Header,
    Intro,
    Countries,
    Companion,
    Rates,
    Cta,
    yandexMap,
    ymapMarker
  },
  data () {
    return {
      isPopupRatesVisible: false,
      coords: [59.938635, 30.323118],
      controls: ['zoomControl'],
      scrollZoom: false,
      isActiveScroll: false
    }
  },
  methods: {
    popupRatesVisible () {
      this.isPopupRatesVisible = true
      this.isActiveScroll = false
      document.body.classList.add('lock-scroll')
    },
    popupRatesHide () {
      this.isPopupRatesVisible = false
      this.isActiveScroll = true
      document.body.classList.remove('lock-scroll')
    },
    handleScroll () {
      this.isActiveScroll = window.scrollY > 1
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll)
  },
  unmounted () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>
