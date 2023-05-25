#!/usr/bin/env node

// ####################
// Reading Files with Path & FS Modules
// ####################

'use strict'

let path = require('path')
let fs = require('fs')
let args = require('minimist')(process.argv.slice(2), {
  boolean: ['help'],
  string: ['file'],
})

// Example 1
// if (args.help) {
//   printHelp()
// } else if (args.file) {
//   let filepath = path.resolve(args.file)
//   console.log(filepath)
// } else {
//   error('Incorrect usage.', true)
// }

// Run this in terminal: ./06-Reading-Files.js --file=hello
// Run this in terminal: ./06-Reading-Files.js --file=../hello

// Example 2
// if (args.help) {
//   printHelp()
// } else if (args.file) {
//   let filepath = path.resolve(args.file)
//   console.log(__dirname);
//   console.log(filepath)
// } else {
//   error('Incorrect usage.', true)
// }

// Run this in terminal: ./06-Reading-Files.js --file=hello

// Example 3
if (args.help) {
  printHelp()
} else if (args.file) {
  processFile(path.resolve(args.file))
  
} else {
  error('Incorrect usage.', true)
}

// Run this in terminal: ./06-Reading-Files.js --file=../files/hello.txt

// ********************

// v1
// function processFile(filepath) {
//   // Get the contents of the file
//   // 1.
//   var contents = fs.readFileSync(filepath)
//   // console.log(contents);
//   // Passing not a string, but a buffer directly to process.stdout.write
//   process.stdout.write(contents)
// }

// v2
function processFile(filepath) {
  var contents = fs.readFileSync(filepath, 'utf8')
  console.log(contents);
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
