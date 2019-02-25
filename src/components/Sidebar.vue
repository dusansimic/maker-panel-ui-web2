<template>
  <b-list-group class="sidebar">
    <b-list-group-item to="/" variant=light exact>
      <FontAwesomeIcon icon="tachometer-alt"/>
      Dashboard
    </b-list-group-item>
    <b-list-group-item to="/map" variant=light exact>
      <FontAwesomeIcon icon="map-marked-alt"/>
      Map
    </b-list-group-item>
    <b-list-group-item to="/application/sodaq-demo/device/sodaq-maker1" variant=light exact>
      <FontAwesomeIcon icon="cogs"/>
      Test
    </b-list-group-item>
    <b-list-group-item to="/about" variant=light exact>
      <FontAwesomeIcon icon="info-circle"/>
      About
    </b-list-group-item>
  </b-list-group>
</template>

<script>
export default {
  name: 'Sidebar'
}
</script>

<style>
.sidebar {
  padding: 15px;
}
</style>
