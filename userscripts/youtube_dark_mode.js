// ==UserScript==
// @name        YouTube to Dark Theme
// @version     0.2
// @description Makes YouTube default to its Dark Theme by initialising the relevant cookie
// @author      David Loewe
// @match       *://*.youtube.com/*
// @grant       none
// @run-at      document-start
// @icon         https://www.google.com/s2/favicons?domain=youtube.com
// @license     CC0-1.0
// ==/UserScript==

"use strict";

var c = document.cookie

// If there's no PREF cookie, then create one with a value that enables the Dark Theme
if(!c || !c.match("^PREF=|; ?PREF=")) {
  document.cookie = "PREF=f6=400&tz=UTC;"
}
