(this["webpackJsonpresumecv-react"]=this["webpackJsonpresumecv-react"]||[]).push([[0],{10:function(e,a,t){},22:function(e,a,t){e.exports=t(46)},46:function(e,a,t){"use strict";t.r(a);var n=t(1),c=t.n(n),r=t(19),l=t.n(r),o=(t(10),t(8)),i=t(48),s=t(49),m=t(50),u=t(20),p=t.n(u).a.create({baseURL:"https://www.mocky.io/v2/"});var d=function(){return c.a.createElement("div",{className:"divLoadingScreen"},c.a.createElement("div",{className:"loadingScreen"}))},f=function(e){var a=e.name,t=e.date,n=e.description;return c.a.createElement("div",{key:a},c.a.createElement("p",{className:"eduTitle"},a),c.a.createElement("p",{className:"eduDate"},t),c.a.createElement("p",{className:"eduDescript"},n))},E=function(e){var a=e.name,t=e.date,n=e.description;return c.a.createElement("div",null,c.a.createElement("p",{className:"jobTitle"},a),c.a.createElement("p",{className:"jobDate"},t),c.a.createElement("p",{className:"jobDescript"},n))},v=t(47),h=function(e){var a=e.name,t=e.value;return c.a.createElement("div",null,c.a.createElement("p",{className:"titleSkill"},a),c.a.createElement(v.a,{color:"white",className:"progressBar",value:t.replace(/%/,"")}))},N=t(7),w=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function g(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}l.a.render(c.a.createElement((function(){var e=Object(n.useState)([]),a=Object(o.a)(e,2),t=a[0],r=a[1],l=Object(n.useState)(!0),u=Object(o.a)(l,2),v=u[0],w=u[1];return Object(n.useEffect)((function(){w(!0),p.get("/5a5e38f3330000b0261923a5").then((function(e){console.log(e.data),r(e.data)})).finally((function(){return w(!1)})),N.a.initialize("UA-121994767-1"),N.a.pageview(window.location.pathname+window.location.search)}),[]),c.a.createElement("div",null,v?c.a.createElement(d,null):c.a.createElement(i.a,{key:Math.random()},c.a.createElement(s.a,null,c.a.createElement(m.a,{md:{offset:1,size:4},className:"leftColumn"},c.a.createElement("div",{className:"avatar"},c.a.createElement("img",{className:"avatarImg",src:t.profile.image+"?raw=true",alt:"Avatar"})," "),c.a.createElement("p",{className:"name"},t.profile.name),c.a.createElement("p",{className:"profession"},t.profile.profession),c.a.createElement("div",{className:"lineLeft"}),c.a.createElement("p",{className:"profile"},"Profile"),c.a.createElement("hr",{className:"hrLeft"}),c.a.createElement("p",{className:"descript"},t.profile.description+"."),c.a.createElement("p",{className:"contact"},"Contact"),c.a.createElement("hr",{className:"hrLeft"}),c.a.createElement("p",{className:"tel"},t.profile.contact.tel),c.a.createElement("p",{className:"cel"},t.profile.contact.cel),c.a.createElement("p",{className:"address"},t.profile.contact.address),c.a.createElement("p",{className:"website"},t.profile.contact.website),c.a.createElement("p",{className:"mail"},t.profile.contact.mail),c.a.createElement("p",{className:"skills"},"Skills"),c.a.createElement("hr",{className:"hrLeft"}),t.profile.skills.map((function(e,a){return c.a.createElement(h,{key:a,name:e.name,value:e.value})}))),c.a.createElement(m.a,{md:"6",className:"rightColumn"},c.a.createElement("p",{className:"workExperience"},"Work Experience"),c.a.createElement("hr",{className:"hrRight"}),t.profile.experience.map((function(e,a){return c.a.createElement(E,{key:a,name:e.name,date:e.date,description:e.description})})),c.a.createElement("p",{className:"education"},"EDUCATION"),c.a.createElement("hr",{className:"hrRight"}),t.profile.education.map((function(e,a){return c.a.createElement(f,{key:a,name:e.name,date:e.date,description:e.description})}))))))}),null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/resume-cv-reactjs",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/resume-cv-reactjs","/service-worker.js");w?function(e){fetch(e).then((function(a){404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):g(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):g(e)}))}}()}},[[22,1,2]]]);
//# sourceMappingURL=main.045ab6c6.chunk.js.map