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
                    name: 'tintinng',
                    email: '906183742@qq.com'
                }
            },
            token: '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'
        }
    },
    methods: {
        // onchange: read file from fs
        attachImg (event) {
          this.fileAsserts.length = 0
          let files = event.target.files
          // 多图像上传
          for (let i = 0, n = files.length; i < n; i++) {
              let reader = new FileReader()
              if (/image/.test(files[i].type)) {
                  // upload image
                    const { name, hash, suffix } = fileNameHandler(files[i].name)
                    const filename = `${name}.${hash}.${suffix}`
                    const imgUploadUrl = `https://api.github.com/repos/${this.owner}/${this.selectedRepos}/contents/${this.path}${filename}`
                    const imgData = Object.assign(this.imgData)
                    reader.onload = (e) => {
                        imgData.content = `${e.target.result.split(',')[1]}`
                        this.$emit('putStart', true)
                        axios.put(imgUploadUrl, imgData, {
                            headers: {
                                'Content-Type': 'application/json',
                                Authorization: `token ${this.token}`
                            }
                        }).then(res => {
                            const uploadFile = res.data.content.download_url
                            this.fileAsserts.push(uploadFile)
                            // console.log('上传并获取完成: ', this.fileAsserts.length)
                            this.$emit('putEnd', [uploadFile])
                        }).catch(e => {
                            this.$emit('error', e)
                        })
                    }
                    reader.readAsDataURL(files[i])
              }
          }
        // reader.onload = this.uploadImage(files)
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
                this.$emit('putEnd', this.fileAsserts)
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
