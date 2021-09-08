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
    <label for="img-upload">
        <slot>Attach image</slot>
    </label>
    <VueLoadingIndicator
        v-if="loading"
        class="loadingRight"
    />
  </div>
</template>

<script>
import axios from 'axios'
import { fileNameHandler } from '../helpers/index'

export default {
    prop: ['title'],
    data() {
        return {
            loading: false,
            fileAsserts: [],
            owner: 'ding_zhi_chao',
            selectedRepos: 'imgs_bed',
            path: 'Echart-issue-helper/',
            imgData: {
                owner: 'ding_zhi_chao',
                repo: 'imgs_bed',
                message: 'image put from echarts-issue-helper',
                branch: 'master',
                content: '',
                commiter: {
                    name: 'ding_zhi_chao',
                    email: '906183742@qq.com'
                }
            },
            token: '3be676d570cfe9715eb364d807ad4966'
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
                    const imgUploadUrl = `https://gitee.com/api/v5/repos/${this.owner}/${this.selectedRepos}/contents/${this.path}${filename}`
                    const imgData = Object.assign(this.imgData)
                    reader.onload = (e) => {
                        imgData.content = `${e.target.result.split(',')[1]}`
                        this.$emit('putStart', true)
                        this.loading = true
                        axios.post(imgUploadUrl, imgData, {
                            headers: {
                                'Content-Type': 'application/json',
                                Authorization: `token ${this.token}`
                            }
                        }).then(res => {
                            const uploadFile = res.data.content.download_url
                            this.fileAsserts.push(uploadFile)
                            // console.log('上传并获取完成: ', this.fileAsserts.length)
                            this.loading = false
                            if (this.fileAsserts.length === n) {
                                this.$emit('putEnd', this.fileAsserts)
                            }
                        }).catch(e => {
                            this.loading = false
                            this.$emit('error', e)
                        })
                    }
                    reader.readAsDataURL(files[i])
              }
          }
        },
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

.loadingRight {
    float: right;
    margin-left: 18px;
}
</style>
