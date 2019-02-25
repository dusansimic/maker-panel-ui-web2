<template>
  <b-modal title="New element" id=newElementModal @ok="onOk(db_)">
    <b-form-group
      id=labelInputGroup
      label="Label:"
      label-for="labelInput"
    >
      <b-form-input
        id=labelInput
        type=text
        v-model="modalData.label"
        required
        placeholder="Data"/>
    </b-form-group>

    <b-form-group
      id=sourceInputGroup
      label="Source:"
      label-for="sourceInput"
    >
      <b-form-select
        id=sourceInput
        :options="sources"
        required
        v-model="modalData.source"/>
    </b-form-group>

    <b-form-group
      id=unitInputGroup
      label="Unit:"
      label-for="unitInput"
    >
      <b-form-input
        id=unitInput
        type=text
        v-model="modalData.unit"
        required
        placeholder="Unit"/>
    </b-form-group>

    <!-- <b-form-group
      id=colorInputGroup
      label="Color:"
      label-for="colorInput"
    >
      <CompactColorPicker id=colorInput v-model="modalData.color"/>
    </b-form-group> -->
  </b-modal>
</template>

<script>
// import { Compact } from 'vue-color'
import PouchDB from 'pouchdb-browser'

export default {
  name: 'NewElementModal',
  components: {
    // 'CompactColorPicker': Compact
  },
  props: {
    applicationId: {
      type: String,
      required: true
    },
    deviceId: {
      type: String,
      required: true
    },
    sources: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      modalData: {
        label: '',
        source: '',
        unit: '',
        color: ''
      },
      db_: null
    }
  },
  methods: {
    async onOk (db) {
      try {
        await db.post({
          appid: this.applicationId,
          devid: this.deviceId,
          ...this.modalData
          // color: this.modalData.color.hex
        })

        this.modalData = {
          label: '',
          source: '',
          unit: ''
          // color: ''
        }
      } catch (error) {
        console.error(error)
      }
    }
  },
  async mounted () {
    try {
      const db = new PouchDB('elements')

      this.db_ = db
    } catch (error) {
      console.error(error)
    }
  }
}
</script>
