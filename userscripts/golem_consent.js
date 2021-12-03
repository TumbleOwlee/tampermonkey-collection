// ==UserScript==
// @name         Golem auto consent
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Automatically click consent
// @author       You
// @match        https://www.golem.de/*
// @icon         https://www.google.com/s2/favicons?domain=golem.de
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var id = setInterval(click_settings, 250)

    function click_settings()
    {
        try {
            window.top.GolemConsent.hasConsentCookies = function() { return true }
            window.top.GolemConsent.storeConsent()
            clearInterval(id)
        } catch (ex) {}
    }
})();
