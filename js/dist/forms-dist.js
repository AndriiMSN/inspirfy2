!function(){const e=document.querySelector("#start-earning-email"),t=document.querySelector("#start-earning-phone"),r=document.querySelectorAll(".start__earning__form__input input[type=text]"),n=document.querySelector("#start-earning-message"),a=document.querySelector("#start__earning__submit"),s=/\S+@\S+\.\S+/,l=document.querySelector("#lets__talk__email"),u=document.querySelectorAll(".lets__talk__form__input input[type=text]"),d=document.querySelector("#lets__talk__message");function i(e,t,r,n){let a=0;r.forEach((e=>{o(e)&&a++})),o(n)&&a++,c(e)&&a++,t&&_(t)&&a++,a>0?alert("INVALID "):alert("VALID")}function o(e){return""===e.value||0===e.value.length?(e.parentNode.classList.add("error"),!0):(e.parentNode.classList.remove("error"),!1)}function c(e){return s.test(e.value)?(e.parentNode.classList.remove("error"),!1):(e.parentNode.classList.add("error"),!0)}function _(e){return 0===e.value.length||e.value.toString().match(/[0-9]/g).length<8?(e.parentNode.classList.add("error"),!0):(e.parentNode.classList.remove("error"),!1)}document.querySelector("#lets__talk__form__submit").addEventListener("click",(e=>{e.preventDefault(),i(l,null,u,d)})),l.addEventListener("blur",(()=>{c(l)})),l.addEventListener("input",(()=>{c(l)})),u.forEach((e=>{e.addEventListener("blur",(()=>{o(e)})),e.addEventListener("input",(()=>{o(e)}))})),d.addEventListener("blur",(()=>{o(d)})),d.addEventListener("input",(()=>{o(d)})),Inputmask({mask:"+999 999 999 999 999",showMaskOnHover:!0,placeholder:" "}).mask(t),a.addEventListener("click",(a=>{a.preventDefault(),i(e,t,r,n)})),e.addEventListener("blur",(()=>{c(e)})),e.addEventListener("input",(()=>{c(e)})),t.addEventListener("blur",(()=>{_(t)})),t.addEventListener("input",(()=>{_(t)})),r.forEach((e=>{e.addEventListener("blur",(()=>{o(e)})),e.addEventListener("input",(()=>{o(e)}))})),n.addEventListener("blur",(()=>{o(n)})),n.addEventListener("input",(()=>{o(n)}))}();
//# sourceMappingURL=forms-dist.js.map