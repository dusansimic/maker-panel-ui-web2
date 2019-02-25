<template>
  <div class="dashboard">
    <b-card-group columns>
      <b-card>
        <div class="card-text">
          <p>Packages in last 24h</p>
          <h3>{{ packagesCount }}</h3>
        </div>
      </b-card>

      <b-card>
        <div class="card-text">
          <p>No. Applications</p>
          <h3>{{ applicationsCount }}</h3>
        </div>
      </b-card>

      <b-card>
        <div class="card-text">
          <p>No. Devices</p>
          <h3>{{ devicesCount }}</h3>
        </div>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
import ky from 'ky'
import config from '@/config'

export default {
  name: 'Dashboard',
  data () {
    return {
      packagesCount: 0,
      applicationsCount: 0,
      devicesCount: 0
    }
  },
  async mounted () {
    const { count: packagesCount } = await ky.get(`${config.apiUrl}/count/packages`).json()
    this.packagesCount = packagesCount

    const { count: applicationsCount } = await ky.get(`${config.apiUrl}/count/applications`).json()
    this.applicationsCount = applicationsCount

    const { count: devicesCount } = await ky.get(`${config.apiUrl}/count/devices`).json()
    this.devicesCount = devicesCount
  }
}
</script>
