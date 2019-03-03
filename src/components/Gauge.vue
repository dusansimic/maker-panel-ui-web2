<template>
  <div class="apex-gauge">
    <ApexChart type=radialBar height=350 :options="options" :series="computedSeries"/>
  </div>
</template>

<script>
export default {
  name: 'ApexGauge',
  props: {
    options: {
      type: Object,
      required: false,
      default: () => {
        return {
          chart: {
            toolbar: {
              show: true
            }
          },
          plotOptions: {
            radialBar: {
              startAngle: -135,
              endAngle: 225,
              hollow: {
                margin: 0,
                size: '70%',
                background: '#fff',
                position: 'front',
                dropShadow: {
                  enabled: true,
                  top: 3,
                  left: 0,
                  blur: 4,
                  opacity: 0.24
                }
              },
              track: {
                background: '#fff',
                strokeWidth: '67%',
                margin: 0,
                dropShadow: {
                  enabled: true,
                  top: -3,
                  left: 0,
                  blur: 4,
                  opacity: 0.35
                }
              },
              dataLabels: {
                name: {
                  offsetY: -10,
                  show: true,
                  color: '#888',
                  fontSize: '17px'
                },
                value: {
                  formatter (val) {
                    return parseInt(val, 10)
                  },
                  color: '#111',
                  fontSize: '36px',
                  show: true
                }
              }
            }
          },
          fill: {
            type: 'gradient',
            gradient: {
              shade: 'dark',
              type: 'horizontal',
              shadeIntensity: 0.5,
              gradientToColors: ['#abe5a1'],
              inverseColors: true,
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 100]
            }
          },
          stroke: {
            lineCap: 'round'
          }
        }
      }
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
    },
    computedSeries () {
      const series = this.series[0].data

      if (series.length > 1) {
        return [series[0]]
      }

      return series
    }
  }
}
</script>
