<template>
  <div>
    <Mapbox
      :access-token="accessToken"
      :map-options="{
        style: 'mapbox://styles/mapbox/light-v9',
        center: [19.838952, 45.248160],
        zoom: 13
      }"
      :geolocate-control="{
        show: true,
        position: 'top-left'
      }"
      :scale-control="{
        show: true,
        position: 'top-left'
      }"
      :fullscreen-control="{
        show: true,
        position: 'top-left'
      }"
    />
  </div>
</template>

<script>
import config from '@/config'
import Mapbox from 'vue2-mapbox'

export default {
  name: 'Map',
  components: {
    Mapbox
  },
  computed: {
    accessToken: () => config.mapboxAccessToken
  }
}
</script>

<style>
.map {
  height: 500px;
}
</style>
