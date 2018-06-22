#!/usr/bin/env node

/* 
 * alps2doc  utility
 * converts valid ALPS file into basic reference documentation
 *
 * relies on the following:
 * - https://www.npmjs.com/package/json2md
 * - https://www.npmjs.com/package/jsonpath-plus
 *
 * 2018-06
 * mamund
 */

"use strict";
var json2md = require('json2md');
var program = require('commander');
var JSONPath = require('jsonpath-plus');
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
    parseProperties(docs);
    parseActions(docs);
    parseStates(docs); 
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

function parseProperties(docs) {
  var props = [];
  var p = [];
  var node = docs.doc;
  var i,x;
  var text;

  props = JSONPath({json:docs.alps,path:"$..descriptors[?(@.type==='semantic')]"});
  if(props.length!==0) {
    node.push({h2:"Properties"});
    node.push({p:"The following data properties are defined for this API."});
    for(i=0,x=props.length;i<x;i++) {
      text = "**" + props[i].id + "**";
      if(props[i].text && props[i].text !== "") {
        text = text + " : " + props[i].text;
      }
      p.push(text);
    }
    node.push({ul:p});
  }
  return true;
}

/* emit action table
  { 
    table : {
      headers: [],
      rows : [
        []
      ]
    }
  }
 
*/
function parseActions(docs) {
  var actions = [];
  var a = [];
  var node = docs.doc;
  var i,x,text;
  var line;
  var headers = ["id","type","rt","args","notes"];
  var rows = [];
  var table = {}

  actions = JSONPath({json:docs.alps,path:"$..descriptors[?(@.type==='safe' || @.type==='unsafe' || @.type==='idempotent')]"});

  if(actions.length!==0) {
    node.push({h2:"Actions"});
    node.push({p:"The following actions, or state transitions, are defined for this API."});
    for(i=0,x=actions.length;i<x;i++) {
      text = "**" + actions[i].id + "**";
      a.push(text);
      rows.push([text,actions[i].type,"(rt)","(args)","notes)"]);
    }
    node.push({ul:a});
  }
  node.push({table:{headers:headers,rows:[rows]}});

  return true;
}

function parseStates(docs) {
  docs.doc.push({h2:"States"});
  docs.doc.push({p:"The following states (e.g. REST Resources) are defined for this API."});
  docs.doc.push({p:"TK"});

  return true;

}
