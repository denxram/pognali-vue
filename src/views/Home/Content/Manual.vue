<template>
     <div class="manual">
            <ul class="manual__list grid__col">
                <li class="manual__item"
                v-for="manualItem in manualList"
                :key="manualItem.id"
                :style="{ backgroundColor: manualItem.itemBackground }">
                    <span class="manual__text"> {{ manualItem.manualText }}</span>
                    <span class="manual__number">{{ manualItem.id }}</span>
                </li>
            </ul>
        </div>
</template>

<script>

export default {
  name: 'Manual',
  setup () {
    const manualList = [
      {
        id: 1,
        manualText: 'Выберите направление',
        itemBackground: '#ff8d30'
      },
      {
        id: 2,
        manualText: 'Изучите идеи путешественников',
        itemBackground: '#ffa530'
      },
      {
        id: 3,
        manualText: 'Находите тех, кто похож на вас',
        itemBackground: '#ffbd30'
      },
      {
        id: 4,
        manualText: 'Путешествуйте вместе!',
        itemBackground: '#ffd74b'
      }
    ]
    return {
      manualList
    }
  }
}
</script>
