function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=o.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,o){n[e]=o},o.parcelRequired7c6=r);var i=r("eWCmQ");const l=document.querySelector('[name="delay"]'),u=document.querySelector('[name="step"]'),d=document.querySelector('[name="amount"]');function a(o,t){const n=Math.random()>.3;new Promise(((e,r)=>{setTimeout((()=>{n?e({position:o,delay:t}):r({position:o,delay:t})}),t)})).then((({position:o,delay:t})=>{e(i).Notify.success(`✅ Fulfilled promise ${o} in ${t}ms`)})).catch((({position:o,delay:t})=>{e(i).Notify.failure(`❌ Rejected promise ${o} in ${t}ms`)}))}document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();let o=l.valueAsNumber,t=d.valueAsNumber,n=u.valueAsNumber;for(let e=1;e<=t;e+=1)a(e,o),o+=n}));
//# sourceMappingURL=03-promises.d662649d.js.map
