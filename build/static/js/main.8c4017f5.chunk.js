(this["webpackJsonppomodoro-timer"]=this["webpackJsonppomodoro-timer"]||[]).push([[0],{10:function(e,a,t){},11:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(4),c=t.n(i),s=(t(10),t(1)),o=t(2);function l(e){var a=Math.floor(e).toString().padStart(2,"0");return"".concat(a,":00")}function u(e){var a=e.focusIncrease,t=e.focusDecrease,n=e.focusDuration,i=e.isTimerRunning;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"input-group input-group-lg mb-2"},r.a.createElement("span",{className:"input-group-text","data-testid":"duration-focus"},"Focus Duration: ",l(n)),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("button",{type:"button",className:"btn btn-secondary","data-testid":"decrease-focus",onClick:t,disabled:i},r.a.createElement("span",{className:"oi oi-minus"})),r.a.createElement("button",{type:"button",className:"btn btn-secondary","data-testid":"increase-focus",onClick:a,disabled:i},r.a.createElement("span",{className:"oi oi-plus"}))))))}function m(e){var a=e.breakDuration,t=e.breakDecrease,n=e.breakIncrease,i=e.isTimerRunning;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"float-right"},r.a.createElement("div",{className:"input-group input-group-lg mb-2"},r.a.createElement("span",{className:"input-group-text","data-testid":"duration-break"},"Break Duration: ",l(a)),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("button",{type:"button",className:"btn btn-secondary","data-testid":"decrease-break",onClick:t,disabled:i},r.a.createElement("span",{className:"oi oi-minus"})),r.a.createElement("button",{type:"button",className:"btn btn-secondary","data-testid":"increase-break",onClick:n,disabled:i},r.a.createElement("span",{className:"oi oi-plus"})))))))}function d(e){var a=e.session,t=e.focusDuration,n=e.breakDuration,i=e.isTimerRunning,c=e.currentProgress;return r.a.createElement(r.a.Fragment,null,a&&r.a.createElement("div",null,r.a.createElement("div",{className:"row mb-2"},r.a.createElement("div",{className:"col"},r.a.createElement("h2",{"data-testid":"session-title"},"".concat(a.label," for ").concat("Focusing"===a.label?l(t):l(n)," minutes")),r.a.createElement("p",{className:"lead","data-testid":"session-sub-title"},"".concat(function(e){var a=Math.floor(e%3600/60).toString().padStart(2,"0"),t=Math.round(e%60).toString().padStart(2,"0");return"".concat(a,":").concat(t)}(a.timeRemaining)," remaining")),!i&&r.a.createElement("h3",null,"PAUSED"))),r.a.createElement("div",{className:"row mb-2"},r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"progress",style:{height:"20px"}},r.a.createElement("div",{className:"progress-bar",role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":c,style:{width:"".concat(c,"%")}}))))))}function b(e){var a,t=e.playPause,n=e.isTimerRunning;return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{type:"button",className:"btn btn-primary","data-testid":"play-pause",title:"Start or pause timer",onClick:t},r.a.createElement("span",{className:(a={oi:!0,"oi-media-play":!n,"oi-media-pause":n},Object.entries(a).reduce((function(e,a){var t=Object(s.a)(a,2),n=t[0],r=t[1];return e.concat(r?n:void 0)}),[]).filter((function(e){return void 0!==e})).join(" "))})))}function p(e){var a=e.isTimerRunning,t=e.stopButtonHandler;return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{type:"button",className:"btn btn-secondary","data-testid":"stop",title:"Stop the session",disabled:!a,onClick:t},r.a.createElement("span",{className:"oi oi-media-stop"})))}function E(e){var a=Math.max(0,e.timeRemaining-1);return Object(o.a)(Object(o.a)({},e),{},{timeRemaining:a})}var g=function(){var e=Object(n.useState)(!1),a=Object(s.a)(e,2),t=a[0],i=a[1],c=Object(n.useState)(null),o=Object(s.a)(c,2),l=o[0],g=o[1],f=Object(n.useState)(25),v=Object(s.a)(f,2),N=v[0],h=v[1],k=Object(n.useState)(5),y=Object(s.a)(k,2),O=y[0],R=y[1],j=Object(n.useState)(0),D=Object(s.a)(j,2),S=D[0],T=D[1];return function(e,a){var t=Object(n.useRef)();Object(n.useEffect)((function(){t.current=e}),[e]),Object(n.useEffect)((function(){if(null!==a){var e=setInterval((function(){t.current()}),a);return function(){return clearInterval(e)}}}),[a])}((function(){return 0===l.timeRemaining?(new Audio("https://bigsoundbank.com/UPLOAD/mp3/1482.mp3").play(),g(function(e,a){return function(t){return"Focusing"===t.label?{label:"On Break",timeRemaining:60*a}:{label:"Focusing",timeRemaining:60*e}}}(N,O))):(T(100-100*l.timeRemaining/("Focusing"===l.label?60*N:60*O)),g(E))}),t?1e3:null),r.a.createElement("div",{className:"pomodoro"},r.a.createElement("div",{className:"row"},r.a.createElement(u,{focusIncrease:function(){h(Math.min(60,N+5))},focusDecrease:function(){h(Math.max(5,N-5))},focusDuration:N,isTimerRunning:t}),r.a.createElement(m,{breakIncrease:function(){R(Math.min(15,O+1))},breakDecrease:function(){R(Math.max(1,O-1))},breakDuration:O,isTimerRunning:t})),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"btn-group btn-group-lg mb-2",role:"group","aria-label":"Timer controls"},r.a.createElement(b,{playPause:function(){i((function(e){var a=!e;return a&&g((function(e){return null===e?{label:"Focusing",timeRemaining:60*N}:e})),a}))},isTimerRunning:t}),r.a.createElement(p,{isTimerRunning:t,stopButtonHandler:function(){g(null),i(!1)}})))),r.a.createElement(d,{session:l,focusDuration:N,breakDuration:O,isTimerRunning:t,currentProgress:S}))};var f=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header container"},r.a.createElement("h1",null,"Pomodoro Timer")),r.a.createElement("div",{className:"container"},r.a.createElement(g,null)))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root"))},5:function(e,a,t){e.exports=t(11)}},[[5,1,2]]]);
//# sourceMappingURL=main.8c4017f5.chunk.js.map