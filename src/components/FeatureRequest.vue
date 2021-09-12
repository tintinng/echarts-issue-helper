<template>
  <div class="feature-request">
    <div class="vue-ui-grid col-1 default-gap">
      <VueFormField
        :title="i18n('rationale-title')"
      >
        <MDEditor
          v-model="attrs.rationale" 
          refProp="mde_rationale"
        />
        <i18n slot="subtitle" id="rationale-subtitle"/>
      </VueFormField>

      <VueFormField
        :title="i18n('proposal-title')"
      >
        <MDEditor
          v-model="attrs.proposal" 
          refProp="mde_proposal"
        />
        <i18n slot="subtitle" id="proposal-subtitle"/>
      </VueFormField>
    </div>
  </div>
</template>

<script>
import { generate } from '../helpers'
import MDEditor from './MDEditor.vue'

export default {
  components: {
    MDEditor
  },
  data () {
    return {
      attrs: {
        rationale: '',
        proposal: ''
      }
    }
  },

  methods: {
    generate () {
      const { rationale, proposal } = this.attrs

      return generate(`
### What problem does this feature solve?
${rationale}

### What does the proposed API look like?
${proposal}
  `.trim())
    }
  }
}
</script>
<style scoped>
@import '~simplemde/dist/simplemde.min.css';
</style>