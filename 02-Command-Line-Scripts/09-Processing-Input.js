#!/usr/bin/env node

// ####################
// Processing Input from stdin
// ####################

'use strict'

let util = require('util')
let path = require('path')
let fs = require('fs')

var getStdin = require('get-stdin')
// import getStdin from 'get-stdin'

let args = require('minimist')(process.argv.slice(2), {
  boolean: ['help', 'in'],
  string: ['file'],
})

if (args.help) {
  printHelp()
}
// One of the conventions that is somewhat common within parameters is that if you have
// a hyphen, a single hyphen at the end of the line that's another way of saying, hey
// guess what? Standard in is gonna provide all the rest of the inputs. So we want to handle
// that and we know that minimist doesn't know how to process a single hyphen.
else if (args.in || args._.includes('-')) {
  // TODO: handle stdin
  // We want to be able to support receiving that stuff from stdin

  // This is a promise returning mechanism, and it's going to resolve a promise
  // with all the contents that it got from the standard in. it'll capture all of them
  // and resolve to all of those.

  // So that's our first sense of using asynchrony without a callback
  getStdin().then(processFile).catch(error)
} else if (args.file) {
  fs.readFile(path.resolve(args.file), function onContents(err, contents) {
    if (err) {
      error(err.toString())
    } else {
      processFile(contents.toString())
    }
  })
} else {
  error('Incorrect usage.', true)
}

// Run this in terminal: ./09-Processing-Input.js --file=files/hello.txt
// Run this in terminal: cat files/hello/txt | ./09-Processing-Input.js --in
// Run this in terminal: cat files/hello/txt | ./09-Processing-Input.js -

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
