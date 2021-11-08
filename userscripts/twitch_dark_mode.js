// ==UserScript==
// @name         Twitch Dark Theme without login
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Automatically activate dark theme without login
// @author       David Loewe
// @match        *.tv*
// @icon         https://www.google.com/s2/favicons?domain=twitch.tv
// @run-at       document-idle
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    if (document.URL.includes('twitch.tv'))
    {
        var id = setInterval(callback, 250)

        function callback()
        {
            if (!document.querySelector(':root').classList.contains('tw-root--theme-dark'))
            {
                console.log('true')
                document.querySelector(':root').classList.replace('tw-root--theme-light', 'tw-root--theme-dark')
            }
            else
            {
                console.log('false')
                clearInterval(id)
            }
        }
    }
})();
