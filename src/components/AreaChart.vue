<template>
  <div class="apex-area-chart">
    <ApexChart type=area :options="options" :series="series"/>
  </div>
</template>

<script>
export default {
  name: 'ApexAreaChart',
  props: {
    options: {
      type: Object,
      required: true
    },
    series: {
      type: Array,
      required: true
    }
    // color: {
    //   type: String,
    //   required: false,
    //   default: () => '#000000'
    // }
  },
  computed: {
    computedOptions () {
      const options = this.options

      // options.colors = [this.color]

      return options
    }
  }
}
</script>
