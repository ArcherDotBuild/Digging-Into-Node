#!/usr/bin/env node

// ####################
// Setting Up a Command Line Script
// ####################

'use strict'

console.log('Hello')
console.error('Oops');

printHelp()

// ********************
function printHelp() {
  console.log('ex1 usage:');
  console.log(' ex1.js --help');
  console.log('');
  console.log('--help                     print this help')
  console.log('')
}
