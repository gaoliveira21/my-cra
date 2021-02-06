#! /usr/bin/env node
const path = require('path')
const cproc = require('child_process')
const download = require('download-git-repo')

const REPO_URL = 'direct:https://codeload.github.com/gaoliveira21/react-base-config/zip/main'
const folderName = process.argv[2] ?? 'react-app'
const fullPath = path.resolve(__dirname, folderName)

console.log('Downloading files...')

download(REPO_URL, fullPath, { clone: false }, (err) => {
  if (!err) {
    console.log('Installing dependencies...')
    const proc = cproc.spawn('npm', ['install', '--prefix', fullPath])

    proc.stdout.on('data', (response) => console.log(response.toString()))

    proc.stdout.on('close', code => console.log(`child process exited with code ${code}`))
  } else {
    console.error(err)
  }
})
