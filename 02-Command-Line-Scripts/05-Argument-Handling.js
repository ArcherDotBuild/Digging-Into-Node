#!/usr/bin/env node

// ####################
// Argument Handling
// ####################

'use strict'

let args = require('minimist')(process.argv.slice(2), {
  boolean: ['help'],
  string: ['file'],
})

if (args.help) {
  printHelp()
} else if (args.file) {
  console.log(args.file)
} else {
  error('Incorrect usage.', true)
}

function error(msg, includeHelp = false) {
  console.error(msg)
  if (includeHelp) {
    console.log('')
    printHelp()
  }
}

// ********************
function printHelp() {
  console.log('ex1 usage:')
  console.log('  ex1.js --file={FILENAME}')
  console.log('')
  console.log('--help                     print this help')
  console.log('--file={FILENAME}          process the file')
  console.log('')
}

console.log(args)

// Run this in terminal: ./05-Argument-Handling.js
// Run this in terminal: ./05-Argument-Handling.js --help
// Run this in terminal: ./05-Argument-Handling.js --file
// Run this in terminal: ./05-Argument-Handling.js --file=hello
