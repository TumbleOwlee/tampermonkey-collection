// ==UserScript==
// @name         Zeit.de consent setting
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Automatically set consent
// @author       You
// @match        https://www.zeit.de/zustimmung*
// @icon         https://www.google.com/s2/favicons?domain=zeit.de
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var id = setInterval(click_consent, 100)

    function click_consent()
    {
        try {
            window.top.Zeit.consentUtils.recordConsent()
        } catch (ex) {}
    }
})();
