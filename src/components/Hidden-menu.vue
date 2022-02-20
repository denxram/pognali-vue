<template>
  <div class="header__hidden-menu hidden-menu">
    <div class="hidden-menu__header grid__col">
      <a class="menu-header__logo-link">
        <picture>
          <source media="(min-width: 1200px)" srcset="@/assets/img/logo-desktop-blue@1x.png 1x,
                                                           @/assets/img/logo-desktop-blue@2x.png 2x">
          <source media="(min-width: 768px)" srcset="@/assets/img/logo-tablet-blue@1x.png 1x,
                                                          @/assets/img/logo-tablet-blue@2x.png 2x">
          <img class="hidden-menu__logo" width="100" height="19" src="@/assets/img/logo-mobile-blue@1x.png"
               srcset="@/assets/img/logo-mobile-blue@2x.png" alt="Погнали">
        </picture>
      </a>
      <button
        class="hidden-menu__btn"
        @click="closeMenu">
        <svg class="hidden-menu__icon" width="19" height="19">
          <use xlink:href="@/assets/img/sprite.svg#icon_menu_mobile_close"></use>
        </svg>
      </button>
      <Interaction class="hidden-menu__interaction"/>
    </div>
    <div class="hidden-menu__inner grid__col">
      <Site-list class="hidden-menu__nav"/>
      <a class="hidden-menu__auth">Авторизация</a>
      <div class="hidden-menu__contacts">
        <Contacts/>
      </div>
      <div class="hidden-menu__social">
        <Social/>
      </div>
    </div>
  </div>
</template>

<script>
import Social from '@/components/Social'
import Contacts from '@/components/Contacts'
import Interaction from '@/components/Interaction'
import SiteList from '@/components/Site-list'

export default {
  name: 'Hidden-menu',
  components: {
    SiteList,
    Interaction,
    Social,
    Contacts
  },
  methods: {
    closeMenu () {
      this.$emit('close-menu')
    }
  }
}
</script>
