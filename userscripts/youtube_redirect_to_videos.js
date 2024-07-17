// ==UserScript==
// @name         Redirect from User Startpage to Videos
// @namespace    http://tampermonkey.net/
// @version      2024-07-07
// @description  try to take over the world!
// @author       You
// @match        https://*.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';


    function check_url()
    {
        console.log("Check URL: " + location.href)
        if(!location.href.endsWith("/videos")) {
            var regex = new RegExp("\(https?:\/\/(www\.)?youtube.com\/@[a-zA-Z0-9]+\)\(\/.*\)?")
            var result = location.href.match(regex)

            if (result) {
                location.href = result[1] + "/videos"
            }
        }
    }
        var id = setInterval(check_url, 500)


})();
