<template>
  <header class="header">
    <div class="header__inner menu-header grid__col">
      <a class="menu-header__logo-link">
        <picture class="menu-header__logo">
          <source media="(min-width: 1440px)" srcset="@/assets/img/logo-desktop-white@1x.png 1x,
                                                      @/assets/img/logo-desktop-white@2x.png 2x">
          <source media="(min-width: 768px)" srcset="@/assets/img/logo-tablet-white@1x.png 1x,
                                                     @/assets/img/logo-tablet-white@2x.png 2x">
          <img class="menu-header__logo" width="100" height="19"
               src="@/assets/img/logo-mobile-white@1x.png"
               srcset="@/assets/img/logo-mobile-white@2x.png 2x" alt="Погнали">
        </picture>
        <picture>
          <source media="(min-width: 1440px)" srcset="@/assets/img/logo-desktop-blue@1x.png 1x,
                                                      @/assets/img/logo-desktop-blue@2x.png 2x">
          <source media="(min-width: 768px)" srcset="@/assets/img/logo-tablet-blue@1x.png 1x,
                                                     @/assets/img/logo-tablet-blue@2x.png 2x">
          <img class="menu-header__logo-scroll" width="100" height="19"
               src="@/assets/img/logo-mobile-blue@1x.png"
               srcset="@/assets/img/logo-mobile-blue@2x.png 2x" alt="Погнали">
        </picture>
      </a>
      <Site-list class="menu-header__site-list"/>
      <button
        class="menu-header__btn"
        @click="openMenu">
        <svg class="menu-header__icon" width="25" height="11">
          <use xlink:href="@/assets/img/sprite.svg#icon_menu_mobile"></use>
        </svg>
      </button>
      <Interaction class="menu-header__interaction"/>
    </div>
    <transition name="custom-transition"
                enter-active-class="animate__animated animate__fadeInDownBig"
                leave-active-class="animate__animated animate__fadeOutUpBig">
      <Hidden-menu v-show="isOpen"
                   @close-menu="closeMenu"/>
    </transition>
  </header>
</template>

<script>
import Interaction from '@/components/Interaction'
import HiddenMenu from '@/components/Hidden-menu'
import SiteList from '@/components/Site-list'

export default {
  name: 'Header',
  data () {
    return {
      isOpen: false
    }
  },
  components: {
    SiteList,
    HiddenMenu,
    Interaction
  },
  methods: {
    openMenu () {
      this.isOpen = true
      document.body.classList.add('lock-scroll')
    },
    closeMenu () {
      this.isOpen = false
      document.body.classList.remove('lock-scroll')
    }
  }
}
</script>
