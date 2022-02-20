<template>
  <ul class="site-list">
    <li
      class="site-list__item"
      v-for="(page, i) in listPages"
      :key="i">
      <a
        class="site-list__link"
        :href="page.pageLink">
        <span :style="{'--textAnimation': page.pageTitleAnimation }" class="site-list__link-text">{{ page.pageTitle }}</span>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Site-list',
  setup () {
    const listPages = [
      {
        pageTitleAnimation: '"О сервисе"',
        pageTitle: 'О сервисе',
        pageLink: '/about'
      },
      {
        pageTitleAnimation: '"Направления"',
        pageTitle: 'Направления',
        pageLink: '#'
      },
      {
        pageTitleAnimation: '"Попутчики"',
        pageTitle: 'Попутчики',
        pageLink: '#'
      }
    ]
    return {
      listPages
    }
  }
}
</script>

<style lang="scss">
</style>
