// ==UserScript==
// @name         Zeit.de Paywall Clean Link White
// @namespace    http://tampermonkey.net/
// @version      2025-07-01
// @description  try to take over the world!
// @author       You
// @match        https://www.zeit.de/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
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

    addGlobalStyle('a { color: rgb(255,255,255) !important; }');

})();
