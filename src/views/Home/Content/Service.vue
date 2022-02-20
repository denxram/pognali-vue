<template>
  <section class="service">
    <div class="service__inner grid__col">
      <div class="service__grid-text">
        <h2 class="service__title title-section">О сервисе</h2>
        <p class="service__text text-section">Любое путешествие веселее с попутчиками, которые на одной волне с тобой!
          Делитесь своими идеями путешествий и черпайте вдохновение в чужих.</p>
        <p class="service__text text-section--bold">А если найдете кого-то близкого по духу - скорее зовите в совместный
          трип!</p>
        <v-link-btn @click.prevent class="service__link"
                    LinkText="Подробнее"/>
      </div>
    </div>
  </section>
</template>

<script>
import VLinkBtn from '@/components/UI/v-link-btn'

export default {
  name: 'Service',
  components: {
    VLinkBtn
  }
}
</script>

<style scoped>

</style>
