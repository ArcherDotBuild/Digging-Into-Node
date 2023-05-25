#!/usr/bin/env node

// ####################
// Asynchronous readFile
// ####################

'use strict'

let path = require('path')
let fs = require('fs')
let args = require('minimist')(process.argv.slice(2), {
  boolean: ['help'],
  string: ['file'],
})

if (args.help) {
  printHelp()
} else if (args.file) {
  processFile(path.resolve(args.file))
} else {
  error('Incorrect usage.', true)
}

// Run this in terminal: ./07-Asynchronous-readFile.js --file=../files/hello.txt
// Hello World

// Run this in terminal: ./07-Asynchronous-readFile.js --file=../files/hello.txt2
// no such file or directory, open '/home/elfgod/Documents/fm-kyle-nodejs/files/hello.txt2'

function processFile(filepath) {
  // The asynchronous form of readFile expects a callback
  fs.readFile(filepath, function onContents(err, contents) {
    // Node for the  most part uses a standard for its callback signatures that the
    // first parameter is always the error parameter typically named err
    if (err) {
      // Error here is gonna be another buffer, it's gonna be an object
      error(err.toString())
    } else {
      process.stdout.write(contents)
    }
  })
}

function error(msg, includeHelp = false) {
  console.error(msg)
  if (includeHelp) {
    console.log('')
    printHelp()
  }
}

function printHelp() {
  console.log('ex1 usage:')
  console.log('  ex1.js --file={FILENAME}')
  console.log('')
  console.log('--help                     print this help')
  console.log('--file={FILENAME}          process the file')
  console.log('')
}

// console.log(args)
