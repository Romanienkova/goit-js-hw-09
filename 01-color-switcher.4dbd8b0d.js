const t={start:document.querySelector("[data-start]"),stop:document.querySelector("[data-stop]"),bgBody:document.body};let e=null;t.start.addEventListener("click",(()=>{e=setInterval((()=>{t.bgBody.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`,t.start.disabled=!0,t.stop.disabled=!1}),1e3)})),t.stop.addEventListener("click",(()=>{clearInterval(e),t.stop.disabled=!0,t.start.disabled=!1}));
//# sourceMappingURL=01-color-switcher.4dbd8b0d.js.map
