<template>
  <div class="map-view">
    <Map v-if="hasMarkers"/>
  </div>
</template>

<script>
import ky from 'ky'
import config from '@/config'
import Map from '@/components/Map'
import 'mapbox-gl/dist/mapbox-gl.css'

export default {
  name: 'MapView',
  components: {
    Map
  },
  data () {
    return {
      hasMarkers: false,
      markers: []
    }
  },
  async mounted () {
    const location = [await ky.get(`${config.apiUrl}/application/sodaq-demo/device/sodaq-maker2/location`).json()]

    const markers = location.map(location => {
      const markerLocation = [location.longitude, location.latitude]

      return { location: markerLocation }
    })

    this.markers = markers
    this.hasMarkers = true
  }
}
</script>

<style>
.map-view {
  height: 500px;
}
</style>
