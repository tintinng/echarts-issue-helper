<template>
  <div class="vue-simplemde">
    <textarea
      class="vue-simplemde-textarea"
      :name="name"
      ref="textarea_mde"
      :value="modelValue"
      @input="handleInput($event.target.value)"
      @focus="handleFocus($event.target.value)"
    />
    <div class="simplemde-imgupload">
        <img-upload @putEnd="insertImg">
            click to attach image
        </img-upload>
    </div>
  </div>
</template>

<script>
import SimpleMDE from 'simplemde';
import marked from 'marked';
import ImgUpload from './ImgUpload.vue'

export default {
  name: 'md-editor',
  model: {
    prop: 'modelValue',
    event: 'update:modelValue',
  },
  components: {
      ImgUpload
  },
  props: {
    value: String,
    modelValue: String,
    name: String,
    previewClass: String,
    autoinit: {
      type: Boolean,
      default() {
        return true;
      },
    },
    highlight: {
      type: Boolean,
      default() {
        return false;
      },
    },
    sanitize: {
      type: Boolean,
      default() {
        return false;
      },
    },
    configs: {
      type: Object,
      default() {
        return {};
      },
    },
    previewRender: {
      type: Function,
    },
  },
  data() {
    return {
      isValueUpdateFromInner: false
    };
  },
  mounted() {
    if (this.autoinit) this.initialize();
  },
  deactivated() {
    const editor = this.simplemde;
    if (!editor) return;
    const isFullScreen = editor.codemirror.getOption('fullScreen');
    if (isFullScreen) editor.toggleFullScreen();
  },
  methods: {
    initialize() {
      const configs = Object.assign({
        element: this.$el.firstElementChild,
        initialValue: this.modelValue || this.value,
        previewRender: this.previewRender,
        renderingConfig: {},
        tabSize: 1,
        toolbar: ["bold", "italic", "heading", "|", "quote"],
        // toolbarTips: false
        status: false
      }, this.configs)

      // 同步 modelValue 和 initialValue 的值
      if (configs.initialValue) {
        this.$emit('update:modelValue', configs.initialValue);
      }

      // 判断是否开启代码高亮
      if (this.highlight) {
        configs.renderingConfig.codeSyntaxHighlighting = true;
      }

      // 设置是否渲染输入的html
      marked.setOptions({ sanitize: this.sanitize });

      // 实例化编辑器
      this.simplemde = new SimpleMDE(configs);

      // 添加自定义 previewClass
      const className = this.previewClass || '';
      this.addPreviewClass(className);

      // 绑定事件
      this.bindingEvents();

      // 初始化完成
      this.$nextTick(() => {
        this.$emit('initialized', this.simplemde);
      });
    },
    bindingEvents() {
      this.simplemde.codemirror.on('change', (instance, changeObj) => {
        if (changeObj.origin === 'setValue') {
          return;
        }
        const val = this.simplemde.value();
        this.handleInput(val);
      });

      this.simplemde.codemirror.on('focus', () => {
        const val = this.simplemde.value();
        this.handleFocus(val);
      })
      this.simplemde.codemirror.on('blur', () => {
        const val = this.simplemde.value();
        this.handleBlur(val);
      })
    },
    addPreviewClass(className) {
      const wrapper = this.simplemde.codemirror.getWrapperElement();
      const preview = document.createElement('div');
      wrapper.nextSibling.className += ` ${className}`;
      preview.className = `editor-preview ${className}`;
      wrapper.appendChild(preview);
    },
    handleInput(val) {
      this.isValueUpdateFromInner = true;
      this.$emit('update:modelValue', val);
    },
    handleBlur(val) {
      this.isValueUpdateFromInner = true;
      this.$emit('blur', val);
    },
    handleFocus(val) {
      this.isValueUpdateFromInner = true;
      this.$emit('focus', val);
    },
    insertImg(images) {
      // 获取选择的起始和结束坐标
      const from = {
        line: this.simplemde.codemirror.getCursor('from').line,
        ch: this.simplemde.codemirror.getCursor('from').ch
      }
      const to = {
        line: this.simplemde.codemirror.getCursor('to').line,
        ch: this.simplemde.codemirror.getCursor('to').ch
      }
      images.forEach(image => {
        // 替代选中的内容
        this.simplemde.codemirror.replaceRange(`![](${image})\n`, from, to)
        // 修改editor绑定的textarea的value
        this.$refs.textarea_mde.value = this.simplemde.codemirror.getValue()
      })
      this.$emit('insert', this.$refs.textarea_mde.value)
      this.simplemde.value(this.$refs.textarea_mde.value)
    }
  },
  destroyed() {
    this.simplemde = null;
  },
  watch: {
    modelValue(val) {
      if (this.isValueUpdateFromInner) {
        this.isValueUpdateFromInner = false;
      } else {
        this.simplemde.value(val);
      }
    },
  },
};
</script>

<style scoped>

.vue-simplemde .markdown-body {
  padding: 0.5em;
  background: #F7F9FB;
}

.vue-simplemde .editor-preview-active, .vue-simplemde .editor-preview-active-side {
  display: block;
}

.vue-simplemde:hover {
    cursor: text;
}

.simplemde-imgupload {
    position: relative;
    user-select: none;
    padding: 5px 10px;
    border-left: 1px solid #bbb;
    border-right: 1px solid #bbb;
    border-bottom: 1px solid #bbb;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
}

/deep/.CodeMirror {
    background: #F7F9FB;
    height: 260px;
    max-height: 260px;
}

/deep/.CodeMirror-wrap pre {
  word-break: break-all;
}
</style>
