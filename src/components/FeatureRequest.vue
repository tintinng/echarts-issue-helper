<template>
  <div class="feature-request">
    <div class="vue-ui-grid col-1 default-gap">
      <VueFormField
        :title="i18n('rationale-title')"
      >
        <VueInput
          type="textarea"
          rows="4"
          v-model="attrs.rationale"
          required
          @focus="saveInsertPos('rationale', $event)"
        />
        <i18n slot="subtitle" id="rationale-subtitle"/>
      </VueFormField>

      <VueFormField
        :title="i18n('proposal-title')"
      >
        <VueInput
          type="textarea"
          rows="4"
          v-model="attrs.proposal"
          required
          @focus="saveInsertPos('proposal', $event)"
        />
        <i18n slot="subtitle" id="proposal-subtitle"/>
      </VueFormField>
      <ImgUpload @upload="insertImg"/>
    </div>
  </div>
</template>

<script>
import { generate, insertAtCursor } from '../helpers'
import ImgUpload from './ImgUpload.vue'

export default {
  components: {
    ImgUpload
  },
  data () {
    return {
      attrs: {
        rationale: '',
        proposal: ''
      },
      inserted: {
        field: {},
        attr: ''
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
    },
    // update
    insertImg (images) {
      images.forEach(image => {
        // 在textarea元素中插入值
        this.attrs[this.inserted.attr] = insertAtCursor(this.inserted.field, `![](${image})\n`)
      });
    },
    // 保存获取焦点的textarea和监听的attr
    saveInsertPos(attr, event) {
      this.inserted.field = event.target
      this.inserted.attr = attr
    }
  }
}
</script>
