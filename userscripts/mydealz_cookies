// ==UserScript==
// @name         Confirm only basic cookies on Mydealz.de
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Automatically select just basic cookies
// @author       You
// @match        https://www.mydealz.de/*
// @icon         https://www.google.com/s2/favicons?domain=mydealz.de
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var id = setInterval(click_settings, 100)

    function click_settings()
    {
        try {
            Array.from(document.querySelectorAll('span')).find(el => el.innerHTML === ' Cookie-Einstellungen ').click();
            clearInterval(id)
            id = setInterval(click_save, 100)
        } catch (ex) {}
    }

    function click_save()
    {
        try {
            Array.from(document.querySelectorAll('span')).find(el => el.innerHTML === ' Einstellungen speichern ').click();
            clearInterval(id)
        } catch (ex) {}
    }
})();
