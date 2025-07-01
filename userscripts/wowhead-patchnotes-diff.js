// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      2025-07-01
// @description  try to take over the world!
// @author       You
// @match        https://www.wowhead.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=wowhead.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function addGlobalStyle(css) {
        var head, style;
        head = document.getElementsByTagName('head')[0];
        console.log("dsada: " + head)
        if (!head) { return; }
        style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = css;
        head.appendChild(style);
    }

    addGlobalStyle('del { color: rgb(255,0,0) !important; text-decoration:none !important; }');

})();
