// ==UserScript==
// @name         Add User Specific Channels to Videos
// @namespace    http://tampermonkey.net/
// @version      2024-07-07
// @description  try to take over the world!
// @author       You
// @match        https://www.youtube.com/@*/videos
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        none
// @run-at       document-body
// ==/UserScript==

(function() {
    'use strict';

    const CHANNELS = ["RocketBeansTV", "RocketBeansGaming", "RocketBeansLetsPlay", "BeforeYouPlay"];

    function createElementFromHTML(htmlString) {
        var div = document.createElement('div');
        div.innerHTML = htmlString.trim();

        // Change this to div.childNodes to support multiple top-level nodes.
        return div.firstChild;
    }


    const interval = setInterval(function() {
        var nodes = document.querySelectorAll("#contentContainer");
        if (nodes.length > 2) {
            nodes[2].style.paddingTop = "440px"

            var add_button = function(value) {
                var tab = '<yt-tab-shape class="yt-tab-shape-wiz" role="tab" aria-selected="false" tabindex="0" tab-title="Home"><a href="https://www.youtube.com/@' + value + '/videos" class="yt-tab-shape-wiz__tab" style="text-decoration:none;">' + value + '</a><div class="yt-tab-shape-wiz__tab-bar"></div></yt-tab-shape>'
                var elem = createElementFromHTML(tab)
                var tablist = document.querySelector(".yt-tab-group-shape-wiz__tabs")
                tablist.insertBefore(elem, tablist.children[0])
            }

            CHANNELS.reverse().forEach(add_button);


            clearInterval(interval);
        }
    }, 1000);
})();
