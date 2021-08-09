### github仓库
项目地址：https://github.com/tintinng/echarts-issue-helper

图片上传接口服务：https://github.com/tintinng/echarts-issue-helper-server
### 已完成功能
#### Markdown语法高亮
 - 表单preview后通用语法高亮、以及代码的高亮和github上类似
#### 支持图片上传
 - 启动server上传图片接口
   - server部署到linux下时需要修改一下路径分隔符的解析：
```javascript
//输出静态资源地址 注意windows下和linux下的文件分隔符有区别
// windows
res.fileAsserts.push(`${uploadHost}${nextPath.slice(nextPath.lastIndexOf('\\')+1)}`)
// linux
res.fileAsserts.push(`${uploadHost}${nextPath.slice(nextPath.lastIndexOf('/')+1)}`)
```
 - focus以下文本框表单，点击下方Attach image可获取返回的资源路径并转成markdown格式
   - BugReport\Steps to reproduce
   - BugReport\What is expected?
   - BugReport\What is actually happening?
   - BugReport\Any additional comments? (optional)
   - FeatureRequest\What problem does this feature solve?
   - FeatureRequest\What does the proposed API look like?