// ==UserScript==
// @name         Youtube Auto Click Customize
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Automatically selection of Customize for privacy settings.
// @author       David Loewe
// @match        *://consent.youtube.com/*
// @icon         https://www.google.com/s2/favicons?domain=youtube.com
// @run-at       document-end
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    try {
        Array.from(document.querySelectorAll('span')).find(el => el.innerHTML === 'Customize').nextSibling.click();
    } catch (ex) {}
    try {
        Array.from(document.querySelectorAll('span')).find(el => el.innerHTML === 'Customize').previousSibling.click();
    } catch (ex) {}
})();
