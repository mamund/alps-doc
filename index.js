#!/usr/bin/env node

/* 
 * alps2doc  utility
 * converts valid ALPS file into basic reference documentation
 * 2018-06
 * mamund
 */

"use strict";

var program = require('commander');
var fs = require('fs');
var docs = {infile:"",outfile:"",alps:{},doc:[]};

// top-level routine
program
  .arguments('<file>')
  .action(function(file){alps2doc(file)})
  .parse(process.argv);

// do the work
function alps2doc(file) {
  docs.infile = file;
  if(readALPS(docs)===true) {
    console.log("parsing ALPS into Markdown...");
    parseTitle(docs);
  }
  console.log(JSON.stringify(docs.doc,null,2));
}

// read the alps 
function readALPS(docs) {
  var rtn = "";

  if(fs.existsSync(docs.infile)) {
    docs.alps = JSON.parse(fs.readFileSync(docs.infile,'utf8'));
    rtn = true;
  } 
  else {
    console.log("File not found or invalid: "+docs.infile);
    rtn = false;
  }  

  return rtn;
}

function parseTitle(docs) {
  var title;
  
  if(docs.alps.alps.title && docs.alps.alps.title!=="") {
    title = docs.alps.alps.title;
  }
  else {
    title = docs.infile;
  }
  docs.doc.push({h1:title});

  return true;  
}
