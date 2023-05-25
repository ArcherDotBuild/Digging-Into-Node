#!/usr/bin/env node

// ####################
// Processing File Contents
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

// Uppercase the characters
function processFile(filepath) {
  fs.readFile(filepath, function onContents(err, contents) {
    if (err) {
    } else {
      // Contents here is a buffer, and we can't really uppercase a binary buffer
      // we're gonna have to turn it into a string, so that we can do that uppercasing on it.
      contents = contents.toString().toUpperCase();
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
