// ==UserScript==
// @name         Twitch Dark Theme without login
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Automatically activate dark theme without login
// @author       David Loewe
// @match        *://*.twitch.tv/*
// @icon         https://www.google.com/s2/favicons?domain=twitch.tv
// @run-at       document-end
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var id = setInterval(callback, 250)
    var cid = setInterval(manage_settings, 250)
    var hid = setInterval(hide_chat, 250)
    var hid_nav = setInterval(hide_nav, 250)
    var sid;

    function hide_chat()
    {
        if(document.querySelectorAll('[aria-label="Collapse Chat"]')[0])
        {
            document.querySelectorAll('[aria-label="Collapse Chat"]')[0].click()
            clearInterval(hid)
        }
    }

    function hide_nav()
    {
        if(document.querySelectorAll('[aria-label="Collapse Side Nav"]')[0])
        {
            document.querySelectorAll('[aria-label="Collapse Side Nav"]')[0].click()
            clearInterval(hid_nav)
        }
    }

    function callback()
    {
        if (!document.querySelector(':root').classList.contains('tw-root--theme-dark'))
        {
            console.log('true')
            document.querySelector(':root').classList.replace('tw-root--theme-light', 'tw-root--theme-dark')
            document.querySelector('#twilight-sticky-footer-root').style.display = 'none'
        }
        else
        {
            console.log('false')
            clearInterval(id)
        }
    }

    function manage_settings()
    {
        var e = Array.from(document.querySelectorAll('div')).find(el => el.innerHTML === 'Manage Cookies');
        if (e)
        {
            e.click()
            clearInterval(cid)
            sid = setInterval(confirm_settings, 250)
        }
    }

    function confirm_settings()
    {
        var e = Array.from(document.querySelectorAll('div')).find(el => el.innerHTML === 'Save Changes');
        if (e)
        {
            e.click();
            clearInterval(sid)
        }
    }
})();
