<template>
  <div>
    <b-navbar type=light variant=white>
      <b-navbar-nav class="ml-auto">
        <b-button variant=outline-success v-b-modal.newElementModal>
          <FontAwesomeIcon icon="plus"/>
          Add element
        </b-button>
      </b-navbar-nav>
    </b-navbar>
    <b-card v-for="element in elements_" :key="`${element.appid}${element.devid}${element.label}`">
      <div class="card-text">
        <b-button variant=outline-danger size=sm @click="removeElement(element._id)">
          <FontAwesomeIcon icon="trash"/>
        </b-button>
        <div v-if="element.display === 'Area chart'">
          <ApexAreaChart :options="chartOptions" :series="series[element.source]" v-if="hasData" />
        </div>
        <div v-else-if="element.display === 'Gauge'">
          <ApexGauge :series="series[element.source]" v-if="hasData" />
        </div>
      </div>
    </b-card>

    <NewElementModal
      :applicationId="ids.applicationId"
      :deviceId="ids.deviceId"
      :sources="sources"/>
  </div>
</template>

<script>
import ky from 'ky'
import PouchDB from 'pouchdb-browser'
import pouchdbFind from 'pouchdb-find'
import config from '@/config'
import ApexAreaChart from '@/components/AreaChart'
import ApexGauge from '@/components/Gauge'
import NewElementModal from '@/components/NewElementModal'
import moment from 'moment'
PouchDB.plugin(pouchdbFind)

export default {
  name: 'Device',
  components: {
    ApexAreaChart,
    ApexGauge,
    NewElementModal
  },
  data () {
    return {
      ids: {
        applicationId: this.$route.params.applicationId,
        deviceId: this.$route.params.deviceId
      },
      chartOptions: {
        title: {
          text: 'Test Chart',
          align: 'center',
          style: {
            fontSize: '18px',
            fontWeight: 'bold'
          }
        },
        xaxis: {
          type: 'datetime',
          categories: []
        },
        stroke: {
          curve: 'smooth'
        },
        dataLabels: {
          enabled: false
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
          }
        }
      },
      series: {},
      hasData: false,
      sources: [],
      db_: null,
      elements_: []
    }
  },
  methods: {
    async removeElement (id) {
      const db = this.db_
      console.log(id)
      console.log(await db.remove(id))
    },
    displayTypes () {
      return {
        'Area chart': 'area',
        'Gauge': 'gauge'
      }
    }
  },
  async mounted () {
    try {
      const db = new PouchDB('elements')

      await db.createIndex({
        index: {
          fields: ['appid', 'devid']
        }
      })

      const elements = await db.find({
        selector: {
          appid: this.ids.applicationId,
          devid: this.ids.deviceId
        }
      })
      this.elements_ = elements.docs
      console.log(elements)

      this.db_ = db

      const data = await ky.get(`${config.apiUrl}/application/${this.ids.applicationId}/device/${this.ids.deviceId}/whole`).json()

      const timestamps = data.map(obj => moment(obj.timestamp).toISOString())
      this.chartOptions.xaxis.categories = timestamps

      const sources = Object.keys(data[0].payload)
      this.sources = sources

      for (const source of sources) {
        const sourceData = data.map(obj => obj.payload[source])
        this.series[source] = [{
          name: source,
          data: sourceData
        }]
      }

      this.hasData = true
    } catch (error) {
      console.error(error)
    }
  }
}
</script>

<style>
.apexcharts-title-text {
  font-weight: bold;
}
</style>
