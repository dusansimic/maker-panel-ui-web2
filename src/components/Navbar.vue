<template>
  <b-navbar type=dark variant=dark>
    <b-navbar-brand to="/"><strong>Brand</strong></b-navbar-brand>

    <b-navbar-nav>
      <b-nav-item>
        <FontAwesomeIcon icon="filter"/>
        Filter devices
      </b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>
