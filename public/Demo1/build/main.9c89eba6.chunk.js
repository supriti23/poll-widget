(this["webpackJsonppoll-widget"]=this["webpackJsonppoll-widget"]||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var s=n(1),i=n.n(s),c=n(4),a=n.n(c),o=n(5),r=n(2),l=n(0),u=function(e){var t=e.question;return Object(l.jsx)("label",{style:{color:"blue",font:"Lucida Sans",textAlign:"center",fontWeight:"bold",fontSize:"x-large",margin:"1%"},children:t})},d=function(e){var t=e.selectedOption,n=e.options,s=e.handleOption;return Object(l.jsx)("select",{value:t,onChange:s,style:{color:"black",padding:"0.5rem 0.5rem",fontWeight:"bold",borderRadius:"6px",maxWidth:"70%",outline:"none",font:"Lucida Sans",margin:"1%"},children:n.map((function(e){return Object(l.jsxs)("option",{value:e.id,children:[e.id," : ",e.ans]},e.id)}))})},j=(n(11),function(e){var t,n=e.options,s=e.pollResult,i=Object.values(s);i.length>0&&(t=i.reduce((function(e,t){return e+t})));var c={};return n.map((function(e){c["".concat(e.id,": ").concat(e.ans)]=Math.round(s[e.id]/t*100)})),Object(l.jsx)("div",{className:"col-md-12 col-xs-12 col-sm-12",children:Object.keys(c).map((function(e,t){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{children:e}),Object(l.jsx)("div",{className:"progress",children:Object(l.jsxs)("div",{className:"progress-bar progress-bar-striped progress-bar-animated",role:"progressbar",style:{width:"".concat(c[e],"%")},"aria-valuenow":c[e],"aria-valuemin":"20","aria-valuemax":"100",children:[c[e],"%"]})},t)]})}))})}),b=[{id:"q1",ques:"How you feel today?",options:[{id:"a",ans:"Brilliant! I have so much energy"},{id:"b",ans:"Always can be worse"},{id:"c",ans:"Please, end my misery"}]},{id:"q2",ques:"How you like the Opinary test?",options:[{id:"a",ans:"It was great and so challenging"},{id:"b",ans:"Not bad, but you can improve"},{id:"c",ans:"It was a nightmare, never again"}]},{id:"q3",ques:"If you could travel in time, what would you want to see?",options:[{id:"a",ans:"The past"},{id:"b",ans:"The future"},{id:"c",ans:"There is enough in the present"}]}],p=(n(12),function(){var e=Object(s.useState)(0),t=Object(r.a)(e,2),n=t[0],i=t[1],c=Object(s.useState)(b[n].ques),a=Object(r.a)(c,2),p=a[0],O=a[1],h=Object(s.useState)(b[n].options),m=Object(r.a)(h,2),f=m[0],g=m[1],x=Object(s.useState)(b[n].options[0].id),v=Object(r.a)(x,2),N=v[0],y=v[1],w=Object(s.useState)(null),S=Object(r.a)(w,2),k=S[0],q=S[1];function I(){i((function(e){return e-1}))}function C(){i((function(e){return e+1}))}return Object(s.useEffect)((function(){O(b[n].ques),g(b[n].options),y(b[n].options[0].id),q(JSON.parse(localStorage.getItem(b[n].id)))}),[n]),Object(l.jsxs)("div",{className:"pollContainer col-lg-6 col-md-8 col-11 col-xs-10 col-sm-10",children:[Object(l.jsx)(u,{question:p}),Object(l.jsx)(d,{options:f,handleOption:function(e){return y(e.target.value)},selectedOption:N}),Object(l.jsx)("button",{className:"vote",onClick:function(){return function(){var e={},t=JSON.parse(localStorage.getItem(b[n].id));if(t)for(var s in e=Object(o.a)({},t),t)s===N&&(e[s]+=1);else f.map((function(e){return e.id})).map((function(t){e[t]=t===N?1:0}));localStorage.setItem(b[n].id,JSON.stringify(e)),q(e)}()},children:"Vote"}),k?Object(l.jsx)(j,{options:f,pollResult:k}):null,function(){switch(n){case 0:return Object(l.jsx)("div",{className:"step middle",children:Object(l.jsx)("button",{className:"stepButton",onClick:function(){return C()},children:"Next"})});case b.length-1:return Object(l.jsx)("div",{className:"step middle",children:Object(l.jsx)("button",{className:"stepButton",onClick:function(){return I()},children:"Prev"})});default:return Object(l.jsxs)("div",{className:"step side",children:[Object(l.jsx)("button",{className:"stepButton",onClick:function(){return I()},children:"Prev"}),Object(l.jsx)("button",{className:"stepButton",onClick:function(){return C()},children:"Next"})]})}}()]})});var O=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(p,{})})};a.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(O,{})}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.9c89eba6.chunk.js.map