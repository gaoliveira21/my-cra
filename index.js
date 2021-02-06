const path = require('path')
const download = require('download-git-repo')

const REPO_URL = 'direct:https://codeload.github.com/gaoliveira21/react-base-config/zip/main'

download(REPO_URL, path.resolve(__dirname, 'my-react-app'), { clone: false }, (err) => {
  if(!err) return console.log('Success')
  console.log(err)
})
