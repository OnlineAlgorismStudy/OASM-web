(this.webpackJsonpoasm=this.webpackJsonpoasm||[]).push([[0],{56:function(e,t,n){e.exports=n.p+"static/media/good.8f4df9ee.png"},64:function(e,t,n){e.exports=n(85)},70:function(e,t,n){},85:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(13),u=n.n(c),o=(n(69),n(70),n(20)),s=n(36),i=n(40),f=n(88),l=n(91),p=n(93),b=n(89),d=n(90),m=n(52),O=n.n(m),j=n(22),v=n.n(j),E=n(16),h=n(17),y=n(26),S={status:"ALREADY",data:[],error:""},k=function(e,t){var n;return n={},Object(h.a)(n,t.request,(function(t){return Object(y.a)(t,(function(t){t[e].status="REQUEST",t[e].data=[],t[e].error=""}))})),Object(h.a)(n,t.success,(function(t,n){return Object(y.a)(t,(function(t){t[e].status="SUCCESS",t[e].data=n.payload.data}))})),Object(h.a)(n,t.failure,(function(t,n){return Object(y.a)(t,(function(t){t[e].status="FAILURE",t[e].error=n.error.response}))})),n},x=function(e){return{request:"".concat(e,"_REQUEST"),success:"".concat(e,"_SUCCESS"),failure:"".concat(e,"_FAILURE")}},g=function(e){return{request:function(){return{type:e.request}},success:function(t){return{type:e.success,payload:t}},failure:function(t){return{type:e.failure,error:t}}}},w=n(33),C=n(94),_=n(92),A={users:S},U=Object(C.a)("user"),D=x(U),I=g(D),R=Object(_.a)(Object(w.a)({},k("users",D)),A),Y={files:S,file:S,origin:S},M=Object(C.a)("file"),T=Object(C.a)("create_file"),q=Object(C.a)("origin_file"),z=x(M),F=x(T),L=x(q),B=g(z),N=(g(F),g(L)),P=Object(_.a)(Object(w.a)({},k("files",z),{},k("file",F),{},k("origin",L),Object(h.a)({},F.success,(function(e,t){return Object(y.a)(e,(function(e){e.file.status="SUCCESS"}))}))),Y),H=n(56),X=n.n(H);function J(){var e=Object(i.a)(["\n  width: 80%;\n  height: 80%;\n  margin-top: 10%;\n  background-size: contain;\n  background-image: url(",");\n"]);return J=function(){return e},e}function Q(){var e=Object(i.a)(["\n  background-color: white;\n  border: 0.25px solid #f8f8f8;\n  text-align: center;\n"]);return Q=function(){return e},e}var V=E.default.div(Q()),W=E.default.img(J(),X.a),G=function(){var e=Object(o.b)(),t=Object(r.useState)(!1),n=Object(s.a)(t,2),c=n[0],u=n[1],i=Object(o.c)((function(e){return e.user.users})),m=Object(o.c)((function(e){return e.file.files})),j=Object(o.c)((function(e){return e.file.origin})),E=Object(r.useState)([]),h=Object(s.a)(E,2),y=h[0],S=h[1],k=Object(r.useState)([]),x=Object(s.a)(k,2),g=x[0],w=x[1];Object(r.useEffect)((function(){e(U()),e(q())}),[e]),Object(r.useEffect)((function(){"SUCCESS"===m.status&&(S(i.data.filter((function(e){return m.data.map((function(e){return e.user})).includes(e.key)})).map((function(e){return e.value}))),w(i.data.filter((function(e){return!m.data.map((function(e){return e.user})).includes(e.key)})).map((function(e){return e.value}))))}),[e,i,m]);return a.a.createElement(f.a,null,a.a.createElement(l.a,{show:c,size:"lg",centered:!0,backdrop:"static",onHide:function(){return u(!1)}},a.a.createElement(l.a.Header,null,a.a.createElement(l.a.Title,null,"\ub2ec\uc131 \ud655\uc778"),a.a.createElement(p.a,{variant:"secondary",onClick:function(){return u(!1)}},"Close")),a.a.createElement(l.a.Body,{style:{textAlign:"center"}},"SUCCESS"!==m.status&&a.a.createElement(b.a,{animation:"grow",variant:"dark"}),"SUCCESS"===m.status&&a.a.createElement(a.a.Fragment,null,a.a.createElement("p",{style:{color:"red"}},"\ubbf8 \ub2ec\uc131\uc790"),a.a.createElement("p",null,g.map((function(e){return e.name})).join(", ")),a.a.createElement("p",{style:{color:"blue"}},"\ub2ec\uc131\uc790"),y.map((function(e){return a.a.createElement("a",{key:e.github,href:"https://github.com/OnlineAlgorismStudy/OnAlSt",target:"_blank",rel:"noopener noreferrer"},a.a.createElement(d.a,{style:{fontSize:18},variant:"primary"},e.name)," ")}))))),"SUCCESS"===j.status&&a.a.createElement(O.a,{dayNameTextStyle:{textAlign:"center"},renderDay:function(t){return a.a.createElement(V,{date:t,onClick:function(){return n=t,u(!0),void e(M({date:v()(n).format("YYYY-MM-DD")}));var n}},j.data.map((function(e){return e.key===v()(t).format("YYYY-MM-DD")&&Object.keys(e.value).length===i.data.length&&a.a.createElement(W,{key:e.key})})))}}))},K=n(15),Z=n(62),$=Object(K.c)({user:R,file:P}),ee=n(7),te=n.n(ee),ne=n(9),re=n(30),ae=function(e,t){return te.a.mark((function n(){var r,a,c,u,o=arguments;return te.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(ne.d)(e.request());case 2:for(n.prev=2,r=o.length,a=new Array(r),c=0;c<r;c++)a[c]=o[c];return n.next=6,ne.b.apply(void 0,[t].concat(a));case 6:return u=n.sent,n.next=9,Object(ne.d)(e.success(u));case 9:n.next=16;break;case 11:return n.prev=11,n.t0=n.catch(2),console.log(n.t0),n.next=16,Object(ne.d)(e.failure(n.t0));case 16:case"end":return n.stop()}}),n,null,[[2,11]])}))},ce=n(43);n(83);ce.initializeApp({apiKey:"AIzaSyDYHjPAufAjSDR7b09_SfZxrFRN3IPIbX8",authDomain:"oasm-889a7.firebaseapp.com",databaseURL:"https://oasm-889a7.firebaseio.com",projectId:"oasm-889a7",storageBucket:"oasm-889a7.appspot.com",messagingSenderId:"187405855435",appId:"1:187405855435:web:318d1ae149f82e8743094e",measurementId:"G-659EFPREVS"});var ue=ce,oe=te.a.mark(fe),se=te.a.mark(le),ie=ae(I,function(){var e=Object(re.a)(te.a.mark((function e(){return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ue.database().ref("users").once("value").then((function(e){var t=[];return Object.keys(e.val()).map((function(n){return t.push({key:n,value:e.val()[n]}),[]})),{data:t}}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}());function fe(){var e,t;return te.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=3,Object(ne.e)("user");case 3:return e=n.sent,t=e.payload,n.next=7,Object(ne.b)(ie,t);case 7:n.next=0;break;case 9:case"end":return n.stop()}}),oe)}function le(){return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ne.a)([Object(ne.c)(fe)]);case 2:case"end":return e.stop()}}),se)}var pe=te.a.mark(Ee),be=te.a.mark(he),de=te.a.mark(ye),me=function(){var e=Object(re.a)(te.a.mark((function e(t){return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ue.database().ref("files/".concat(t.date)).once("value").then((function(e){return{data:Object.values(e.val())}}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Oe=function(){var e=Object(re.a)(te.a.mark((function e(){return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ue.database().ref("files").once("value").then((function(e){var t=[];return Object.keys(e.val()).map((function(n){return t.push({key:n,value:e.val()[n]}),[]})),{data:t}}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),je=ae(B,me),ve=ae(N,Oe);function Ee(){var e,t;return te.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=3,Object(ne.e)("file");case 3:return e=n.sent,t=e.payload,n.next=7,Object(ne.b)(je,t);case 7:n.next=0;break;case 9:case"end":return n.stop()}}),pe)}function he(){var e,t;return te.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=3,Object(ne.e)("origin_file");case 3:return e=n.sent,t=e.payload,n.next=7,Object(ne.b)(ve,t);case 7:n.next=0;break;case 9:case"end":return n.stop()}}),be)}function ye(){return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ne.a)([Object(ne.c)(Ee),Object(ne.c)(he)]);case 2:case"end":return e.stop()}}),de)}var Se=te.a.mark(ke);function ke(){return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ne.a)([le(),ye()]);case 2:case"end":return e.stop()}}),Se)}var xe=Object(Z.a)(),ge=function(){var e=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||K.d,t=Object(K.a)(xe),n=Object(K.e)($,e(t));return xe.run(ke),n}(),we=function(){return a.a.createElement(o.a,{store:ge},a.a.createElement(G,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(we,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[64,1,2]]]);
//# sourceMappingURL=main.23eeca1d.chunk.js.map