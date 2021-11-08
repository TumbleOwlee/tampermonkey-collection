// ==UserScript==
// @name         Youtube Auto Privacy Settings
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Sets the privacy settings automatically (everything OFF)
// @author       David Loewe
// @match        *://consent.youtube.com/*
// @icon         https://www.google.com/s2/favicons?domain=youtube.com
// @run-at       document-end
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.querySelector("[aria-label='Turn off Search customization']").click()
    document.querySelector("[aria-label='Turn off YouTube History']").click()
    document.querySelector("[aria-label='Turn off Ad personalization']").click()
    Array.from(document.querySelectorAll('span')).find(el => el.innerHTML === 'Confirm').parentElement.parentElement.parentElement.submit()

    var p = window.location.href.substring(window.location.href.indexOf("continue")+9);
    p = p.substring(p.indexOf("&"), 0)
    p = p.replaceAll("%3A", ":").replaceAll("%2F", "/").replaceAll("%3D", "=").replaceAll("%2B", "+").replaceAll("%3F", "?")

    setTimeout(function(){window.location = p}, 250)
})();
