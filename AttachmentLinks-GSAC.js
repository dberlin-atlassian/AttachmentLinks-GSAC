// ==UserScript==
// @name        AttachmentLinks-GSAC
// @namespace   https://github.com/dberlin-atlassian/AttachmentLinks-GSAC/
// @grant       none
// @version     1.01
// @run-at document-end
// @match       https://getsupport.atlassian.com/*
// @downloadURL https://github.com/dberlin-atlassian/AttachmentLinks-GSAC/blob/main/AttachmentLinks-GSAC.js
// @updateURL   https://github.com/dberlin-atlassian/AttachmentLinks-GSAC/blob/main/AttachmentLinks-GSAC.js
// @author      DBerlin
// @description AttachmentLinks returns normal link functionality to GSAC attachments, instead of using preview mode by default, which overrides things like cmd-click > new tab.
// ToDo         Include the files from trac at the top.  Right now, this only works on links in comments. 
// ==/UserScript==


//the attachment-macro class determines the click handler as well as the css.
var el = document.getElementsByClassName("attachment-macro"); 

// by changing the links' classes to external_link, we get back normal jira/html link functionality, including cmd-click for new tab 

//now iterate for multiple attachments in one Issue
for (var i=0; i < el.length; i++){
  el[i].setAttribute("class", "external_link");
}

