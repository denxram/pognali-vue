<template>
  <footer class="footer">
    <div class="footer__inner grid__col">
      <picture>
        <source media="(min-width: 1200px)" srcset="@/assets/img/logo-desktop-blue@1x.png 1x,
                                                    @/assets/img/logo-desktop-blue@2x.png 2x">
        <source media="(min-width: 768px)" srcset="@/assets/img/logo-tablet-blue@1x.png 1x,
                                                   @/assets/img/logo-tablet-blue@2x.png 2x">
        <img class="footer__logo" src="@/assets/img/logo-mobile-blue@1x.png" alt="pognali"
             srcset="@/assets/img/logo-mobile-blue@2x.png 2x">
      </picture>
      <Social class="footer__social"/>
      <a class="footer__copyright" href="#">
        <p class="footer__copyright-text">Разработано</p>
        <svg class="footer__copyright-logo" width="27" height="34">
          <use xlink:href="@/assets/img/sprite.svg#htmlacademy"></use>
        </svg>
      </a>
    </div>
  </footer>
</template>

<script>
import Social from '@/components/Social'

export default {
  name: 'Footer',
  components: { Social }
}
</script>

<style scoped>

</style>
