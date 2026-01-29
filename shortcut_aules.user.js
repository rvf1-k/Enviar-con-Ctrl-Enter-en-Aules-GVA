// ==UserScript==
// @name         Enviar con Ctrl+Enter en Aules GVA
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Enviar tareas usando con Ctrl + Enter en Aules de la Generalitat Valenciana
// @author       rvf1-k
// @match        https://aules.edu.gva.es/fp/mod/assign/view.php*
// @require      https://code.jquery.com/jquery-3.7.1.min.js
// @icon         https://portal.edu.gva.es/aules/wp-content/uploads/sites/644/2024/07/cropped-Imagotipo_Aules-32x32.png
// @source       https://github.com/rvf1-k/Enviar-con-Ctrl-Enter-en-Aules-GVA
// @updateURL    https://github.com/rvf1-k/Enviar-con-Ctrl-Enter-en-Aules-GVA/blob/main/shortcut_aules.user.js
// @downloadURL  https://github.com/rvf1-k/Enviar-con-Ctrl-Enter-en-Aules-GVA/blob/main/shortcut_aules.user.js
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
