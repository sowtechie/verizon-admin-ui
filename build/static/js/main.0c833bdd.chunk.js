(this["webpackJsonpak-app"]=this["webpackJsonpak-app"]||[]).push([[0],{48:function(e,a,t){e.exports=t(67)},53:function(e,a,t){},54:function(e,a,t){},59:function(e,a,t){},60:function(e,a,t){},62:function(e,a,t){},63:function(e,a,t){},67:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),l=t(17),c=t.n(l),o=(t(53),t(5)),i=t(6),u=t(8),m=t(7),s=(t(54),t(4)),p=t(21),v=(t(59),t(11)),d=t(27),E=t(28),b=t(39),h=t(40),f=(t(60),function(e){Object(u.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"app-wrapper"},r.a.createElement("div",{className:"header-wrapper"},r.a.createElement("nav",null,r.a.createElement("div",{className:"header-links navbar navbar-expand-lg navbar-light bg-light fixed-top"},r.a.createElement("div",{className:"nav-item"},r.a.createElement(v.a,{to:"/"}," ",r.a.createElement(d.a,null)," ")," "),r.a.createElement("div",null,r.a.createElement(v.a,{to:"/latest"}," Latest ")," "),r.a.createElement("div",null,r.a.createElement(v.a,{to:"/popular"}," Popular ")," "),r.a.createElement("div",null,r.a.createElement(v.a,{to:"/reading/speed"}," Speed ")," "),r.a.createElement("div",{className:"mobile-only"},r.a.createElement(v.a,{to:"/settings/age"}," ",r.a.createElement(b.a,null))," "),r.a.createElement("div",{className:"desktop-only"},r.a.createElement(v.a,{to:"/settings/age"}," Age")," "),r.a.createElement("div",null,r.a.createElement(v.a,{to:"/settings/lang"}," ",r.a.createElement(E.b,null)," ")," "),r.a.createElement("div",null,r.a.createElement(v.a,{to:"/signin"}," ",r.a.createElement(h.a,null)," ")," "))),r.a.createElement("main",null,this.props.children)))}}]),t}(r.a.Component)),j=function(e){Object(u.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"header-layout-wrapper"},r.a.createElement("div",{className:"side-nav"}),r.a.createElement("div",{className:"header-wrapper"},r.a.createElement(f,null)),r.a.createElement("div",{className:"right-side-nav"}))}}]),t}(r.a.Component),O=t(18),g=t.n(O),y=(t(62),function(e){Object(u.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).state={},n}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"item-card"},r.a.createElement("div",null,"title"),r.a.createElement("div",null,"desc")))}}]),t}(r.a.Component)),k=t(80),w=function(e){Object(u.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"componentDidMount",value:function(){console.log("component mounted ")}},{key:"componentWillReceiveProps",value:function(e){console.log("props are ",e)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Popular Collection"),r.a.createElement(k.a,{variant:"contained",color:"primary"},"Hello World"),r.a.createElement(k.a,{variant:"contained",color:"secondary"},"Secondary"))}}]),t}(r.a.PureComponent),N=function(e){Object(u.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).state={},n}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,"home page"))}}]),t}(r.a.Component),C=function(e){Object(u.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"componentDidMount",value:function(){console.log("component mounted ")}},{key:"componentWillReceiveProps",value:function(e){console.log("props are ",e)}},{key:"getUrlParams",value:function(){return this.props.location.search?new URLSearchParams(this.props.location.search):new URLSearchParams}},{key:"render",value:function(){var e=this.getUrlParams().get("id")||"";return console.log(e,"is id"),r.a.createElement("div",null,"Katha : ",e)}}]),t}(r.a.Component),P=(Object(s.f)(C),function(e){Object(u.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).state={},n}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,"Google login"))}}]),t}(r.a.Component)),x=function(e){Object(u.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"content-wrapper"},r.a.createElement("div",{className:"app-wrapper"},r.a.createElement("div",{className:"side-nav"},"left",r.a.createElement("button",{type:"button",className:"btn btn-primary"},"Primary")),r.a.createElement("div",{className:"header-wrapper"},r.a.createElement(s.a,{exact:!0,from:"/",to:"/home"}),r.a.createElement(s.b,{exact:!0,path:"/home"},r.a.createElement(N,null)),r.a.createElement(s.b,{path:"/latest"},r.a.createElement(y,null)),r.a.createElement(s.b,{path:"/popular"},r.a.createElement(w,null)),r.a.createElement(s.b,{path:"/katha",render:function(e){return r.a.createElement(C,e)}}),r.a.createElement(s.b,{path:"/login"},r.a.createElement(P,null))),r.a.createElement("div",{className:"right-side-nav"},"side")))}}]),t}(r.a.Component),F=(t(63),t(44)),W=t(45),R=function(e){Object(u.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"app-footer-wrapper"},r.a.createElement("div",{className:"flex-container"},r.a.createElement("div",null,r.a.createElement(v.a,{to:"/"}," ",r.a.createElement(d.a,null)," ")," "),r.a.createElement("div",null,r.a.createElement(v.a,{to:"/latest"}," ",r.a.createElement(F.a,null)," ")," "),r.a.createElement("div",null,r.a.createElement(v.a,{to:"/popular"}," ",r.a.createElement(W.a,null)," ")," "),r.a.createElement("div",null,r.a.createElement(v.a,{to:"/reading/speed"}," ",r.a.createElement(E.a,null)," ")," ")))}}]),t}(r.a.Component),S=function(e){Object(u.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).goTo=function(e){},e}return Object(i.a)(t,[{key:"render",value:function(){var e=g()();return r.a.createElement(s.c,{history:e},r.a.createElement(r.a.Fragment,null,r.a.createElement(j,null)),r.a.createElement(r.a.Fragment,null,r.a.createElement(x,null)),r.a.createElement(r.a.Fragment,null,r.a.createElement(R,null)))}}]),t}(n.Component);var U=Object(p.c)((function(e){return{location:e.router.location}}))(S);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var L=t(22),A=t(19),B=t(37),D=g()(),J=Object(A.c)({router:Object(L.b)(D)}),M=g()();var G=g()(),H=function(){var e=[Object(B.a)(M)];return Object(A.e)(Object(L.b)(M)(J),Object(A.d)(A.a.apply(void 0,e)))}();c.a.render(r.a.createElement(p.a,{store:H},r.a.createElement(L.a,{history:G},r.a.createElement(U,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[48,1,2]]]);
//# sourceMappingURL=main.0c833bdd.chunk.js.map