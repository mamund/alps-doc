#!/usr/bin/env node

/* 
 * alps2doc  utility
 * converts valid ALPS file into basic reference documentation
 * 2018-06
 * mamund
 */

"use strict";

var json2md = require('json2md');
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
    parseOpening(docs);
    writeMD(docs);
  }
}

// write out the markdown
function writeMD(docs) {
  docs.outfile = docs.infile + ".md";
  fs.writeFile(docs.outfile,json2md(docs.doc), function(err) {
    if(err) {
      console.log(err);
    }
    else {
      console.log(docs.outfile + " written.");
    }
  });
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
  var node = docs.alps.alps;
  
  if(node.title && node.title!=="") {
    title = node.title;
  }
  else {
    title = docs.infile;
  }
  docs.doc.push({h1:title});

  return true;  
}

function parseOpening(docs) {
  var opening;
  var node = docs.alps.alps;

  if(node.doc) {
    if(node.doc.value) {
      docs.doc.push({p:node.doc.value});
    }
    else {
      docs.doc.push({p:""});
    }
  }

  return true;
}
