<template>
  <ul class="social">
    <li
       class="social__item"
       v-for="social in socials"
       :key="social.id">
      <a
         class="social__link"
         :href="social.socialLink">
        <span class="visually-hidden">{{ social.nameSocial }}</span>
        <svg
             class="social__icon" width="23" height="21">
          <use
               :xlink:href="require('@/assets/img/sprite.svg') + `#${social.nameSocial}`">
          </use>
        </svg>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Social',
  setup () {
    const socials = [
      {
        id: 1,
        nameSocial: 'facebook',
        socialLink: '#'
      },
      {
        id: 2,
        nameSocial: 'vk',
        socialLink: '#'
      },
      {
        id: 3,
        nameSocial: 'instagram',
        socialLink: '#'
      }
    ]
    return {
      socials
    }
  }
}
</script>
