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
import { fileNameHandler } from '../helpers/index'

export default {
    prop: ['title'],
    data() {
        return {
            uploadUrl: 'http://121.40.96.103:8100/upload',
            // uploadUrl: 'http://localhost:8100/upload',
            fileAsserts: [],
            owner: 'tintinng',
            selectedRepos: 'Imgs-bed',
            path: 'echarts-helper-images/',
            imgUploadUrl: '',
            imgData: {
                message: 'image put from echarts-issue-helper',
                branch: 'main',
                content: '',
                commiter: {
                    name: `${this.owner}`,
                    email: '906183742@qq.com'
                }
            },
            token: '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'
        }
    },
    methods: {
        // onchange: read file from fs
        attachImg (event) {
          let reader = new FileReader(), files = event.target.files
          if (/image/.test(files[0].type)) {
              reader.readAsDataURL(files[0])
          }
          // 处理上传的图像文件名
          const { name, hash, suffix } = fileNameHandler(files[0].name)
          const filename = `${name}.${hash}.${suffix}`
          this.imgUploadUrl = `https://api.github.com/repos/${this.owner}/${this.selectedRepos}/contents/${this.path}${filename}`
        // upload image
        //   reader.onload = this.uploadImage(files)
          reader.onload = () => {
            // 读取图像的base64值
            this.imgData.content = `${reader.result.split(',')[1]}`
            axios.put(this.imgUploadUrl, this.imgData, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `token ${this.token}`
                }
            }).then(res => {
                const uploadFile = res.data.content.download_url
                this.fileAsserts.push(uploadFile)
                this.$emit('upload', this.fileAsserts)
            })
          }
        },
        uploadImage(files) {
            const formDatas = new FormData()
            const config = {
                headers: { "Content-Type": "multipart/form-data" }
            }
            Array.prototype.forEach.call(files, file => {
                // append同一个key会追加为一个数组
                formDatas.append(`images`, file)
            })
            axios.post(this.uploadUrl, formDatas, config).then(res => {
                this.fileAsserts = res.data.fileAsserts
                this.$emit('upload', this.fileAsserts)
            })
        }
    }
}

</script>

<style scoped>
label {
    color: #CA8090;
}
label:hover {
    cursor: pointer;
}
</style>
