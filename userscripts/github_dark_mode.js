// ==UserScript==
// @name         Github Dark Theme without login
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Automatically activate dark theme without login
// @author       David Loewe
// @match        *://*github.com/*
// @icon         https://www.google.com/s2/favicons?domain=github.com
// @run-at       document-idle
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var id = setInterval(callback, 250)

    function callback()
    {
        var attr = document.querySelector(':root').getAttribute('data-color-mode', 'dark')
        if (attr != 'dark')
        {
            document.querySelector(':root').setAttribute('data-color-mode', 'dark')
        }
        else
        {
            clearInterval(id)
        }
    }
})();
