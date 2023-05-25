# Digging Into Node

## FrontEnd Masters

#### Teacher: Kyle Simpson

#### Course website:

https://frontendmasters.com/courses/digging-into-node/

#### Course Documentation:

https://frontendmasters.com/courses/node-js-v2/

#### Repos:

- Course repo:
- Course examples repo:

## Section 01: Introduction

## 1. Console Log & Process stdout

**folder 01**

## 2. Console Error & Process stderr

## Section 02: Command Line Scripts

**folder 02 - Command Line Scripts**

## 3. Setting Up a Command Line Script

#### Shebang or Hashbang

The shebang or hashbang comment at the top of a file and that will tell the shell enviroment that when it starts to execute it, it knows what program to hand that execution off to. Instead of trying to interpret it as a bash script

#### ENV

There's another program called **ENV**, that'll be included in all your distributions of Linux or Mac. That you give it the name of an executable and it finds where that is for you.

`#! /user/bin/env node` This is saying go find node wherever it is in my system and use node to interpret the rest of my program.

#### Make a file executable

`ls -la`
`chmod u+x file.js`
`./file.js`

:link: [here](https://nodejs.org/api/globals.html).

## 4. Command Line Arguments

`./ex1.js --hello=world` That's some input, that's a command line parameter that is gonna come into our program. And we wanna be able to access that command line parameter.

#### Access that command line parameter

First off, what we're gonna do is access the arguments that were passed to our program by way of another of the exposures of the POSIX, which is **process.args**

**Process.args** will be an array of all of the arguments that were passed in from the executing shell.

`./04-Command-Arguments.js --hello=world`
`./04-Command-Arguments.js --hello=world -c9`

### minimist

Regular expression parsing rules

## 5. Argument Handling