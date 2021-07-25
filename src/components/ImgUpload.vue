<!--  -->
<template>
  <div>
    <input
        type="file" 
        accept="imgae/*" 
        id="img-upload" 
        multiple
        style="display: none;"
        @change="attachImg"/>
    <label for="img-upload">Attach image</label>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    prop: ['title'],
    data() {
        return {
            uploadUrl: 'http://121.40.96.103:8100/upload',
            fileAsserts: []
        }
    },
    methods: {
        // onchange: read file from fs
        attachImg (event) {
          let reader = new FileReader(), files = event.target.files
          if (/image/.test(files[0].type)) {
              reader.readAsDataURL(files[0])
          }
        // upload image
          reader.onload = this.uploadImage(files)
        },
        uploadImage(files) {
            const formDatas = new FormData()
            const config = {
                headers: { "Content-Type": "multipart/form-data" }
            }
            Array.prototype.forEach.call(files, (file, idx) => {
                formDatas.append(`files${idx}`, file)
            })
            axios.post(this.uploadUrl, formDatas, config).then(res => {
                console.log(res)
                this.fileAsserts = res.data.fileAsserts
                this.$emit('upload', this.fileAsserts)
            })
        }
    }
}

</script>

<style scoped>

</style>
