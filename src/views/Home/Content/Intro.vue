<template>
  <section class="intro">
    <div class="intro__inner">
      <span class="intro__slogan grid__col">В путешествие с крутыми попутчиками!</span>
      <Interaction class="intro__interaction grid__col"/>
      <div class="intro__review">
        <div class="intro__review-inner grid__col">
          <p class="intro__review-text">«Лучшее приложение, что я видел в жизни!»</p>
          <p class="intro__review-author">Мурат Эльтазин главный редактор газеты «гаджетлайф»</p>
        </div>
      </div>
      <Manual class="intro__manual"/>
    </div>
  </section>
</template>

<script>
import Manual from '@/views/Home/Content/Manual.vue'
import Interaction from '@/components/Interaction'

export default {
  name: 'Intro',
  components: {
    Interaction,
    Manual
  }
}
</script>
