// ==UserScript==
// @name         Manabase Tool Auto-Analyzer
// @namespace    http://tampermonkey.net/
// @version      3.3.1
// @description  Auto-triggers analyzers, maintains history, and optimizes basic land distribution
// @author       pakoito
// @match        https://ianrh125.github.io/snail-analyzer/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=github.io
// @require      https://gist.githubusercontent.com/pakoito/5c7f9b8c35efee0126b2b874beb365db/raw/manabase-optimizer-bundle.js?v=1769692141657
// @grant        none
// @run-at       document-start
// ==/UserScript==
(function () {
    'use strict';

    $(document).on('keydown', function (e) {
        // Ctrl + Enter
        if (e.ctrlKey && e.key === 'Enter') {
            e.preventDefault();

            const $btn = $('.fp-upload-btn.btn-primary.btn');
            const $btnInput = $('#id_submitbutton');
            if ($btn.length) {
                $btn.click();
            }else if ($btnInput.length) {
                $btnInput.click();
            }
        }
    });
})();
