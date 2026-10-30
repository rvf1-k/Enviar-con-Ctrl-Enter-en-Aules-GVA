// ==UserScript==
// @name         Enviar con Ctrl+Enter en Aules GVA
// @namespace    http://tampermonkey.net/
// @version      3.0
// @description  Enviar tareas usando con Ctrl + Enter en Aules de la Generalitat Valenciana
// @author       rvf1-k
// @match        https://aules.edu.gva.es/*/mod/assign/view.php*
// @icon         https://portal.edu.gva.es/aules/wp-content/uploads/sites/644/2024/07/cropped-Imagotipo_Aules-32x32.png
// @source       https://github.com/rvf1-k/Enviar-con-Ctrl-Enter-en-Aules-GVA
// @updateURL    https://github.com/rvf1-k/Enviar-con-Ctrl-Enter-en-Aules-GVA/raw/refs/heads/main/shortcut_aules.user.js
// @downloadURL  https://github.com/rvf1-k/Enviar-con-Ctrl-Enter-en-Aules-GVA/raw/refs/heads/main/shortcut_aules.user.js
// @grant        none
// @run-at       document-end
// @license      MIT
// ==/UserScript==

(() => {
    'use strict';

    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.key === 'Enter') {
            const btn = document.querySelector('.fp-upload-btn.btn-primary.btn')
                || document.querySelector('#id_submitbutton');

            if (btn) {
                e.preventDefault();
                btn.click();
            }
        }
    });
})();
