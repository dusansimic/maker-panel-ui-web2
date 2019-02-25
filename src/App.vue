<template>
  <div id="app">
    <b-row class="navbar-wrapper">
      <b-col/>
      <b-col xl=8 lg=8 md=8>
        <Navbar/>
      </b-col>
      <b-col/>
    </b-row>
    <b-row>
      <b-col/>
      <b-col xl=8 lg=8 md=8>
        <b-row>
          <b-col xl=3 lg=3 md=3>
            <Sidebar/>
          </b-col>
          <b-col xl=9 lg=9 md=9>
            <MainPanel/>
          </b-col>
        </b-row>
      </b-col>
      <b-col/>
    </b-row>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import MainPanel from '@/components/MainPanel'

export default {
  name: 'App',
  components: {
    Navbar,
    Sidebar,
    MainPanel
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Nunito+Sans:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i&subset=latin-ext');

#app {
  font-family: 'Nunito Sans', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.navbar-wrapper {
  background: var(--dark);
}
</style>
