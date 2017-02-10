'use strict';

// var script = document.createElement('script');
// script.setAttribute('src', 'mark.js');
// script.setAttribute('type', 'text/javascript');
// document.getElementsByTagName('head')[0].appendChild(script);

chrome.tabs.executeScript(null, {file: "mark.js"});
var mark = window.Mark;
console.log(mark);
// alert(window.location);
function selectClick(info, tab) {
  window.localStorage.setItem('selection', info.selectionText);
  alert(info.selectionText);
  console.log(info);
  console.log(info.selectionText);
}
if (!selection) {
  var selection = chrome.contextMenus.create({ "title": "highlighter", "contexts": ["selection"], "onclick": selectClick });
}

