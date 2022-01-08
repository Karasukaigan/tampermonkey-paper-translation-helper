// ==UserScript==
// @name         論文翻訳ヘルパー
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  論文の翻訳に便利なツールです。
// @author       Karasukaigan
// @include      file://*
// @include      *.pdf
// @icon         https://www.google.com/s2/favicons?domain=tampermonkey.net
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js
// @require      https://gist.github.com/raw/2625891/waitForKeyElements.js
// @grant        none
// ==/UserScript==
/* globals jQuery, $, waitForKeyElements */

(function () {
    'use strict';
    $("body").css("background-color", "rgb(82,86,89)");
    var ch = ['规范化', '清空', '复制', 'Google翻译', '原文本', '规范化后的文本'];
    var ja = ['正規化', 'クリア', 'コピー', 'Google翻訳', '元の文字列', '正規化後の文字列'];

    // 必要な要素をDOMに追加
    $("body").prepend(
        '<div style="height: 20px; text-align: right; font-size: 14px; -webkit-user-select: none; user-select: none;">'
        + '<a id="google-translate" href="https://translate.google.jp/" style="text-decoration: none; color: #fff; font-size: 14px;" target="_blank">Google翻訳</a> | '
        + '<a id="deepl" href="https://www.deepl.com/ja/translator" style="text-decoration: none; color: #fff; font-size: 14px;" target="_blank">DeepL</a>'
        + '&nbsp;&nbsp;&nbsp;&nbsp;'
        + '<span id="chinese" style="color: #fff; font-size: 14px; cursor:pointer;">中文</span> | '
        + '<span id="japanese" style="color: #fff; font-size: 14px; cursor:pointer;">日本語</span>'
        + '&nbsp;&nbsp;&nbsp;&nbsp;'
        + '</div>'
        + '<div style="height: 100px;">'
        + '<textarea id="old-text" style="height: 90px; width: calc(50% - 10px); border: 1px solid rgb(50,54,57); padding: 4px; resize: none;">元の文字列</textarea>'
        + '<textarea id="new-text" style="height: 90px; width: calc(50% - 10px); border: 1px solid rgb(50,54,57); padding: 4px; resize: none;">正規化後の文字列</textarea>'
        + '</div>'
        + '<div style="position: fixed; top: 0px; left: 0px; height: 20px; width: calc(50% + 60px); font-size: 10px;">'
        + '<button id="normal-button" style="cursor:pointer; margin-left: 10px; padding-top: 0px; padding-bottom: 2px; vertical-align: top; height: 20px; width: 52px; border: 0px; background-color: rgba(0,0,0,0); color: #fff; font-size: 12px;">正規化</button>'
        + '<button id="clear-button" style="cursor:pointer; margin-left: 10px; padding-top: 0px; padding-bottom: 2px; vertical-align: top; height: 20px; width: 52px; border: 0px; background-color: rgba(0,0,0,0); color: #fff; font-size: 12px;">クリア</button>'
        + '<button id="copy-button" style="cursor:pointer; margin-left: calc(100% - 180px); padding-top: 0px; padding-bottom: 2px; vertical-align: top; height: 20px; width: 52px; border: 0px; background-color: rgba(0,0,0,0); color: #fff; font-size: 12px;">コピー</button>'
        + '</div>'
    );

    // デフォルトの文字列を削除
    $("#old-text").focus(function () {
        $("#old-text").text("");
    });

    // 正規化
    var el1 = document.getElementById('normal-button');
    if (el1) {
        el1.addEventListener('click', function () {
            var oldStr = document.getElementById("old-text").value;
            var newStr = "";
            newStr = oldStr.replace(/\n|\r/g, " ");
            newStr = newStr.replace(/\[[0-9]*\]/ig, " ");
            newStr = newStr.replace(/\[ [0-9]* \]/ig, " ");
            newStr = newStr.replace(/\+e/ig, "The");
            $("#new-text").val(newStr);
            var text = document.getElementById("new-text");
            text.focus();
            text.select();
            document.execCommand('copy');
            text.blur();
        });
    }

    // 入力した文字列を削除
    var el2 = document.getElementById('clear-button');
    if (el2) {
        el2.addEventListener('click', function () {
            document.getElementById("old-text").value = "";
        });
    }

    // 正規化した文字列をコピー
    var el3 = document.getElementById('copy-button');
    if (el3) {
        el3.addEventListener('click', function () {
            var text = document.getElementById("new-text");
            text.focus();
            text.select();
            document.execCommand('copy');
            text.blur();
        });
    }

    // 中文
    var el4 = document.getElementById('chinese');
    if (el4) {
        el4.addEventListener('click', function () {
            $("#normal-button").text(ch[0]);
            $("#clear-button").text(ch[1]);
            $("#copy-button").text(ch[2]);
            $("#google-translate").text(ch[3]);
            $("#old-text").text(ch[4]);
            $("#new-text").text(ch[5]);
            $("#google-translate").attr("href", "https://translate.google.cn/");
            $("#deepl").attr("href", "https://www.deepl.com/zh/translator");
        });
    }

    // 日本語
    var el5 = document.getElementById('japanese');
    if (el5) {
        el5.addEventListener('click', function () {
            $("#normal-button").text(ja[0]);
            $("#clear-button").text(ja[1]);
            $("#copy-button").text(ja[2]);
            $("#google-translate").text(ja[3]);
            $("#old-text").text(ja[4]);
            $("#new-text").text(ja[5]);
            $("#google-translate").attr("href", "https://translate.google.jp/");
            $("#deepl").attr("href", "https://www.deepl.com/ja/translator");
        });
    }

    // <embed>の位置を調整
    waitForKeyElements("embed", changeStyle);
    function changeStyle() {
        $("embed").css("position", "relative");
        $("embed").css("height", document.documentElement.clientHeight - 120);
    }

})();