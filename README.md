# Digging Into Node

## FrontEnd Masters

#### Teacher: Kyle Simpson

#### Course website:

https://frontendmasters.com/courses/digging-into-node/

#### Course Documentation:

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

The shebang or hashbang comment at the top of a file and that will tell the shell enviroment that when it starts to execute it, it knows what program to hand that execution off to. Instead of trying to interpret it as a bash script.

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

First off, what we're gonna do is access the arguments that were passed to our program by way of another of the exposures of the POSIX, which is **process.args**.

**Process.args** will be an array of all of the arguments that were passed in from the executing shell.

`./04-Command-Arguments.js --hello=world`
`./04-Command-Arguments.js --hello=world -c9`

### minimist

`npm install minimist` Regular expression parsing rules

## 5. Argument Handling

## 6. Reading Files with Path & FS Modules

**Example 1**
So now that we know we can specify something like a string, but since it's a file, we wanna actually treat it as a file. And we know that we need a full path name if we're gonna do something with this file.

`path` So let's pull in another built in package from NodeJS called **path**. **path** would show up in the **node_modules** folder but path is just built into Node.

Path has a number of different methods that are helpful for us, but in particular, the one that we wanna look at is **path.resolve()**

`./06-Reading-Files.js --file=hello` you'll notice that it is implying that there should be a file at this absolute location in the directory that we're at called hello. So it's default behavior is if we give it a relative path, it figures it out according to that.

If we do something like `./06-Reading-Files.js --file=../hello` and we do like a relative path that way, you notice that it automatically figures out where that is. So it handles all of the relative path thing logic, all that other stuff that you should not actually go invent yourself.

**Example 2**
**\_\_dirname** Magic variable that's available in all of our Node programs. And it tells us the current directory of the current file that we're accessing it in. So if you access a file that's deep, it'll give you the directory of that.

So basically **path.resolve**, defaulting to saying, if you don't give me something that's absolute, then i'm gonna go ahead and make it relative to **\_\_dirname**.

If we were to give it an absolute path like, `./06-Reading-Files.js --file=/tmp/hello`, then it doesn't use **\_\_dirname**. So if only uses **\_\_dirname** if we've given it a relative path.

Let's make our command line script that we're building here, let's make it access that file and just print the contents onto the screen

**Example 3**
To access the file system, we're gonna need another built in module from Node called **fs** for file system

When i run this program, we don't see the contents of the file, we actually see the stringification of a binary buffer. That's because, by default, the file system commands, in fact, most I/O commands, they're assuming these low-level binary buffer. They're not assuming that you wanna represent things as strings.

What other thing you could have done if you really needed it as a string and not as a buffer, you could've told the readfile to use a particular encoding. `var contents = fs.readFileSync(filepath, "utf8")`
