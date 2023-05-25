#!/usr/bin/env node

// ####################
// Command Line Arguments
// ####################

'use strict'

// Example 1
// console.log(process.argv);
// This will be console.logged
// '/home/elfgod/.nvm/versions/node/v16.13.0/bin/node',
// '/home/elfgod/Documents/fm-kyle-nodejs/02-Command-Line-Scripts/04-Command-Arguments.js'

// Example 2
// Run this in terminal: ./04-Command-Arguments.js --hello=world
// console.log(process.argv.slice(2))

// Example 3
// Minimist function, we're going to tell it what array we want it to parse
// And then what comes back from that function call is our actual object that has all our args in it
// Run this in terminal: ./04-Command-Arguments.js --hello=world -c9

// let args = require('minimist')(process.argv.slice(2))

// { _: [], hello: 'world', c: 9 }
// The underscore _, is sort of the overflow if there's stuff on the line that it haven't been able to parse according to its conventions

// console.log(args)

// Example 4
// We can also pass in a configuration to minimist
// This configuration is gonna allow us to control some of the guesses that minimist makes
// Run this in terminal: ./04-Command-Arguments.js --help=foobar --file
let args = require('minimist')(process.argv.slice(2), {
  // Any parameter that's called help, i want you to assume that's always a boolean
  boolean: ["help"],
  // If we specified a file parameter, we want that one to always be treated as a string
  string: ["file"]

})
console.log(args)
// printHelp()

// ********************
function printHelp() {
  console.log('ex1 usage:')
  console.log(' ex1.js --help')
  console.log('')
  console.log('--help                     print this help')
  console.log('')
}
