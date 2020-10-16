// ==UserScript==
// @name Custom_Scrollbars
// @match *
// @run-at document-start
// ==/UserScript==

var style = document.createElement('style')

style.textContent = `
/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #888; 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555; 
}
  `

document.head.appendChild(style)