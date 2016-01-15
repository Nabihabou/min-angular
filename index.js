// index.js
/* globals cp */

/*
 * Script to run after npm install
 *
 * Currently: copying selected files to user's directory
 */

// import shell tools for global access
// https://github.com/shelljs/shelljs#javascript
require('shelljs/global')

// TODO: Find a more robust solution
// Current user directory
var userPath = '../../'

// Moving files to the local directory
var filesToCopy = ['src']

filesToCopy.forEach(function (file) {
  console.log('Copying file or directory: ', file)

  // cp is defined through shelljs
  cp('-R', file, userPath)
})
