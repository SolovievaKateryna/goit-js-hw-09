import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{i as s}from"./assets/vendor-0fc460d7.js";const a=document.querySelector(".feedback-form");a.addEventListener("input",i);a.addEventListener("submit",l);const t=JSON.parse(localStorage.getItem("feedback-form-state"))||{email:"",message:""},{email:o,message:r}=a.elements;o.value=t.email;r.value=t.message;function i(e){t[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(t))}function l(e){e.preventDefault();const{email:m,message:n}=e.currentTarget.elements;if(m.value.trim()===""||trimmedMessage===""){s.error({position:"topRight",message:"Fill please all fields",timeout:5e3});return}console.log(t),localStorage.removeItem("feedback-form-state"),e.currentTarget.reset(),s.success({position:"topRight",message:"Data sent!",timeout:2500})}
//# sourceMappingURL=commonHelpers2.js.map
