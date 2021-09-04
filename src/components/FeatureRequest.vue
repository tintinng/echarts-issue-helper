<template>
  <div class="feature-request">
    <div class="vue-ui-grid col-1 default-gap">
      <VueFormField
        :title="i18n('rationale-title')"
      >
        <!-- <VueInput
          type="textarea"
          rows="4"
          v-model="attrs.rationale"
          required
          @focus="saveInsertPos('rationale', $event)"
          :loadingRight="loading.rationale"
        /> -->
        <MDEditor
          v-model="attrs.rationale" 
          ref="mde"
          @focus="saveInsertPos('rationale', $event)"
          @insert="insertmdImages('rationale', $event)"
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
          :loadingRight="loading.proposal"
        />
        <i18n slot="subtitle" id="proposal-subtitle"/>
      </VueFormField>
      <ImgUpload 
          @putEnd="insertImg" 
          @putStart="uploadStart"
          @error="() => {
            const { attr, field } = insertedAttrs.shift()
            loading[attr] = false
          }"
      />
    </div>
  </div>
</template>

<script>
import { generate, insertAtCursor } from '../helpers'
import ImgUpload from './ImgUpload.vue'
import MDEditor from './MDEditor.vue'

export default {
  components: {
    ImgUpload,
    MDEditor
  },
  data () {
    return {
      attrs: {
        rationale: '',
        proposal: ''
      },
      loading: {
        rationale: false,
        proposal: false
      },
      focused: {
        field: {},
        attr: ''
      },
      insertedAttrs: []
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
    // 开始上传图片,保存上传时的attr和filed
    uploadStart() {
      this.insertedAttrs.push({
        attr: this.focused.attr,
        field: this.focused.field
      })
      this.loading[this.focused.attr] = true
    },
    insertImg (images) {
      const { attr, field } = this.insertedAttrs.shift()
      images.forEach(image => {
        // 在textarea元素中插入值
        this.attrs[attr] = insertAtCursor(field, `![](${image})\n`)
        this.loading[attr] = false
      })
    },
    // 保存获取焦点的textarea和监听的attr
    saveInsertPos(attr, event) {
      this.focused.attr = attr
      this.focused.field = event.target
    },
    // 收到MDEditor的insert内容并修改对应的值
    insertmdImages(attr, val) {
      this.attrs[attr] = val
    }
  }
}
</script>
<style scoped>
@import '~simplemde/dist/simplemde.min.css';
</style>