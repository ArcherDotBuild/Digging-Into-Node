#!/usr/bin/env node

// ####################
// Environment Variables
// ####################

'use strict'

let util = require('util')
let path = require('path')
let fs = require('fs')

// var getStdin = require('get-stdin')

let args = require('minimist')(process.argv.slice(2), {
  boolean: ['help', 'in'],
  string: ['file'],
})

// Default base path to __dirname unless this process environment has been set in which
// case we'll use it
var BASE_PATH = path.resolve(
  process.env.BASE_PATH || __dirname
)

if(process.env.HELLO) {
  console.log(process.env.HELLO);
}

if (args.help) {
  printHelp()
}
// else if (args.in || args._.includes('-')) {
//   getStdin().then(processFile).catch(error)
// }
else if (args.file) {
  // path.join will take any number of inputs, and use the appropriate directory separator
  // for your platform. So on Linux or Mac, it will use the forward slash, on Windows, it'll
  // use the backslash. It'll do any other kind of escaping it needs to do.
  fs.readFile(path.join(BASE_PATH, args.file), function onContents(err, contents) {
    if (err) {
      error(err.toString())
    } else {
      processFile(contents.toString())
    }
  })
} else {
  error('Incorrect usage.', true)
}

// Run this in terminal: HELLO=WORLD ./10-Environment-Variables.js
// Run this in terminal: BASE_PATH=../files/ ./10-Environment-Variables.js --file=hello.txt

function processFile(contents) {
  contents = contents.toUpperCase()
  process.stdout.write(contents)
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
  console.log('--in, -                    process stdin')
  console.log('')
}

// console.log(args)
