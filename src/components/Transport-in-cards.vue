<template>
  <ul class="transport">
    <li class="transport__item"
        v-for="transport in mergedTransport"
        :key="transport.id"
        :class="{'transport__item--active': transport.isActive }">
      <span class="transport__indicator">
        <svg class="transport__icon" width="24" height="21">
          <use :xlink:href="require('@/assets/img/sprite.svg') + `#${transport.icon}`"></use>
        </svg>
      </span>
      <span class="transport__tooltip">{{transport.name}}</span>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Transport-in-cards',
  data () {
    return {
      transportList: [
        {
          name: 'Авиаперелет',
          icon: 'plane'
        },
        {
          name: 'Автобус',
          icon: 'bus'
        },
        {
          name: 'Велосипед',
          icon: 'bike'
        },
        {
          name: 'Пешком',
          icon: 'run'
        }
      ]
    }
  },
  props: {
    transport_data: {
      type: Array
    }
  },
  computed: {
    mergedTransport () {
      return this.transport_data.map((item, index) => ({ ...item, ...this.transportList[index] }))
    }
  }
}

</script>

<style scoped>

</style>
