!function(){var t={start:document.querySelector("[data-start]"),stop:document.querySelector("[data-stop]")};t.stop.disabled=!0;var a=null;t.start.addEventListener("click",(function(){a=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16)),t.start.disabled=!0,t.stop.disabled=!1}),1e3)})),t.stop.addEventListener("click",(function(){clearInterval(a),t.start.disabled=!1,t.stop.disabled=!0}))}();
//# sourceMappingURL=01-color-switcher.df430d3d.js.map
