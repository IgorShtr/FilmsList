(this.webpackJsonpfilmslist=this.webpackJsonpfilmslist||[]).push([[0],{48:function(n,e,t){n.exports=t(79)},53:function(n,e,t){},79:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),i=t(19),c=t.n(i),o=(t(53),t(17)),l=t(11),u=t(10),p=t(16),s=t(40),f=t(41),m=t(21),g=t(13),d=t.n(g),b={ganresList:[],paginationPage:1,api_key:"c215f1cdd43fb62b0e5a94539084aae9"};var h=Object(p.combineReducers)({ganres:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,e=arguments.length>1?arguments[1]:void 0,t=e.type,a=e.payload;switch(t){case"AVILIBLE_GENRES":return Object(m.a)({},n,{ganresList:a});case"INCREASE_PAGINATION_PAGE":return Object(m.a)({},n,{paginationPage:n.paginationPage+1});case"REDUCE_PAGINATION_PAGE":return Object(m.a)({},n,{paginationPage:n.paginationPage-1});default:return n}}}),v=Object(p.createStore)(h,Object(f.composeWithDevTools)(Object(p.applyMiddleware)(s.a))),x=t(1),E=t(8),y=t(20),j=t.n(y),O=t(2),w=t(42),k=t(43),P=t(80);function _(){var n=Object(x.a)(["\n display: flex;\n justify-content: space-between;\n &:hover {\n   border: 0.5px solid lightgrey\n }\n & p{\n   color: black;\n   font-size: 12px;\n   padding-bottom: 3px;\n }\n & p:first-child{\n  max-width: 80%;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n & p:last-child{\n   font-weight: bold;\n }\n "]);return _=function(){return n},n}function S(){var n=Object(x.a)(["\ntext-decoration:none;\n"]);return S=function(){return n},n}function A(){var n=Object(x.a)(["\n position: absolute;\n background-color: white;\n max-width: 100%;\n min-height: 0;\n & ul {\n   padding: 5px;\n   margin: 2px 0;\n }\n "]);return A=function(){return n},n}function I(){var n=Object(x.a)(["\n margin-left: 5px;\n "]);return I=function(){return n},n}function G(){var n=Object(x.a)(["\n  margin: 10px 5px;\n position: relative;\n & p{\n   margin: 0;\n }\n"]);return G=function(){return n},n}function L(){var n=Object(x.a)(["\ntext-decoration:none;\ncolor: lightgrey;\nheight: fit-content;\n margin: 10px 5px;\np{\n  margin: 0;\n}\n"]);return L=function(){return n},n}function N(){var n=Object(x.a)(["\ndisplay: flex;\njustify-content: space-between;\nalign-items: flex-end;\n"]);return N=function(){return n},n}function D(){var n=Object(x.a)(["\ndisplay: flex;\njustify-content: center;\n& p {\n  margin 0;\n  text-transform: uppercase;\n  font-weight: bold;  \n  padding: 10px 5px;\n  font-size: 36px;\n}\n"]);return D=function(){return n},n}function R(){var n=Object(x.a)(["\ndisplay: flex;\nflex-direction: column;\nbackground-color: DarkSlateGray;\nmargin-bottom: 20px;\ncolor: lightgrey;\n"]);return R=function(){return n},n}var T=Object(u.b)((function(n){return{api_key:n.ganres.api_key}}))((function(n){var e=n.api_key,t=Object(a.useState)(""),i=Object(E.a)(t,2),c=i[0],o=i[1],l=Object(a.useState)([]),u=Object(E.a)(l,2),p=u[0],s=u[1],f=Object(a.useState)(!1),m=Object(E.a)(f,2),g=m[0],b=m[1],h=Object(a.useState)(0),v=Object(E.a)(h,2),x=v[0],y=v[1];Object(a.useEffect)((function(){if(0===c.length)clearTimeout(x),s([]),b(!1);else if(c.length>3){var n="https://api.themoviedb.org/3/search/movie?api_key=".concat(e,"&language=en-US&page=1&query=").concat(c),t=setTimeout((function(){d.a.get(n).then((function(n){s(n.data.results),n.data.total_results?b(!0):b(!1)})).catch((function(n){console.log(n)}))}),1500);y(t)}}),[c]);var j=p&&p.map((function(n){var e=n.id,t=n.title,a=n.vote_average;return r.a.createElement(W,{to:"/movieDetales/".concat(e),key:Object(P.a)()},r.a.createElement(J,{onClick:function(){return b(!1)}},r.a.createElement("p",null,t),r.a.createElement("p",null,a)))}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(z,null,r.a.createElement(C,null,r.a.createElement("p",null,"Best movies")),r.a.createElement(B,null,r.a.createElement(U,{to:"/FilmsList"},r.a.createElement("p",null,"\u21a9 Back to main")),r.a.createElement(F,null,r.a.createElement("p",null,"Movie search"),r.a.createElement(w.a,{icon:k.a,style:{color:"white"}}),r.a.createElement(K,{onChange:function(n){return o(n.target.value)},type:"text"}),g?r.a.createElement(M,null,r.a.createElement("ul",null,j)):null))))})),z=O.b.div(R()),C=O.b.div(D()),B=O.b.div(N()),U=Object(O.b)(o.b)(L()),F=O.b.div(G()),K=O.b.input(I()),M=O.b.div(A()),W=Object(O.b)(o.b)(S()),J=O.b.li(_());function Q(){var n=Object(x.a)(["\ndisplay: flex;\njustify-content: center;\n background-color: DarkSlateGray; \n margin-top: 20px;\n color: lightgrey;\n"]);return Q=function(){return n},n}var V=function(){return r.a.createElement(q,null,r.a.createElement("p",null," Designed by Igor Shakhter. All rights reserved \xa9"))},q=O.b.div(Q());function $(){var n=Object(x.a)(["\ndisplay:flex;\nflex-direction: column;\nmin-height: 100%\nwidth: 100vw;\nheight: 100%;\nbackground-color: black;\n& .content {\n  flex-grow:1;\n}\n"]);return $=function(){return n},n}var H=function(n){return r.a.createElement(X,null,r.a.createElement(T,null),r.a.createElement("main",{className:"content"},n.children),r.a.createElement(V,null))},X=O.b.div($());function Y(){var n=Object(x.a)(["\ndisplay: flex;\njustify-content: space-between;\nalign-items: center;\n"]);return Y=function(){return n},n}function Z(){var n=Object(x.a)(["\ndisplay: flex;\nwidth: 100px;\nflex-wrap: wrap;\n>p{\n  font-size: 12px; \n  margin: 0 2px;\n  color:black;\n}\n"]);return Z=function(){return n},n}function nn(){var n=Object(x.a)(["\n>p{\n  font-size: 14px;\n  font-weight: bold;\n  margin: 5px;\n  color:black;\n}\n"]);return nn=function(){return n},n}function en(){var n=Object(x.a)(["\ncolor: black;\nfont-weight: bold;\npadding-left: 5px;\nwidth: ",";\n font-size: ",";  \n p{ \n  width:inherit;\n  text-overflow: ellipsis;\n  height: 21px;\n overflow:hidden;\n white-space: nowrap; \n color: DarkSlateGray;\n}"]);return en=function(){return n},n}function tn(){var n=Object(x.a)(["\n background: lightgrey;\n margin-left: 10px;\n margin-bottom: 20px; \n width: ",";\n & img{\n  display: block;\n  margin: 0 auto; \n  width:95%;\n  height:"," ;\n }\n & :hover .movieTille{\n  text-decoration: underline;\n}\n"]);return tn=function(){return n},n}function an(){var n=Object(x.a)(["\ntext-decoration:none;\n"]);return an=function(){return n},n}function rn(){var n=Object(x.a)(["\ndisplay: flex;\nflex-wrap:wrap;\njustify-content: center;\n\n"]);return rn=function(){return n},n}var cn=Object(u.b)((function(n){return{ganresList:n.ganres.ganresList,paginationPage:n.ganres.paginationPage,api_key:n.ganres.api_key}}))((function(n){var e=Object(a.useState)([]),t=Object(E.a)(e,2),i=t[0],c=t[1],o=Object(a.useState)(!0),l=Object(E.a)(o,2),u=l[0],p=l[1],s=n.api_key,f=n.setPagesQuantity,m=n.paginationPage,g=n.dataKey,b=n.id,h=n.ganresList,v=b?"".concat(b,"/"):"";Object(a.useEffect)((function(){var n="https://api.themoviedb.org/3/movie/".concat(v).concat(g,"?api_key=").concat(s,"&language=en-US&page=").concat(m);d.a.get(n).then((function(n){n.data.total_results&&p(!1),c(n.data.results),f&&f(n.data.total_pages)}))}),[m]);var x=(b?i.slice(0,6):i).map((function(e){var t=e.title,a=e.id,i=e.poster_path,c=e.vote_average,o=e.genre_ids.map((function(n){return h.filter((function(e){return e.id===n})).map((function(n){return n.name}))[0]})).map((function(n){return r.a.createElement("p",{key:Object(P.a)()},n)}));return r.a.createElement(un,{key:a,height:n.height,width:n.width},r.a.createElement(ln,{to:"/movieDetales/".concat(a)},r.a.createElement(pn,{width:n.width},r.a.createElement("p",{className:"movieTille"},t)),r.a.createElement("img",{src:"https://image.tmdb.org/t/p/w500/".concat(i),alt:"not found"}),r.a.createElement(mn,{width:n.width},r.a.createElement(sn,null,r.a.createElement("p",null,"Reting  ".concat(c))),r.a.createElement(fn,null,o))))}));return r.a.createElement(on,null,u?r.a.createElement("p",null,"No related movies for recommendations"):x)})),on=O.b.div(rn()),ln=Object(O.b)(o.b)(an()),un=O.b.div(tn(),(function(n){return n.width?n.width:"210px"}),(function(n){return n.height?n.height:"290px"})),pn=O.b.div(en(),(function(n){return n.width?.9*n.width:"200px"}),(function(n){return n.width?"12px":"16px"})),sn=O.b.div(nn()),fn=O.b.div(Z()),mn=O.b.div(Y());function gn(){var n=Object(x.a)(["\nwidth: 40px;\nmargin: 0;\nfont-size: 36px;\ntext-align: center;\n"]);return gn=function(){return n},n}function dn(){var n=Object(x.a)(["\nwidth: 40px;\nmargin: 0;\nfont-size: 36px;\ntext-align: center;\n"]);return dn=function(){return n},n}function bn(){var n=Object(x.a)(["\ndisplay: flex;\njustify-content: center;\np{\n  padding: 0 5px;\n  color: white\n}\n"]);return bn=function(){return n},n}function hn(){var n=Object(x.a)(["\ndisplay: flex;\nalign-items: center;\n"]);return hn=function(){return n},n}var vn=Object(u.b)((function(n){return{ganresList:n.ganres,paginationPage:n.ganres.paginationPage}}),{setAvalibleGenres:function(){return function(n){d.a.get("https://api.themoviedb.org/3/genre/movie/list?api_key=c215f1cdd43fb62b0e5a94539084aae9&language=en-US").then((function(e){var t=e.data.genres;n({type:"AVILIBLE_GENRES",payload:t})})).catch((function(n){console.log(n)}))}},setIncreasePaginationPage:function(){return function(n){n({type:"INCREASE_PAGINATION_PAGE"})}},setReducePaginationPage:function(){return function(n){n({type:"REDUCE_PAGINATION_PAGE"})}}})((function(n){var e=Object(a.useState)(),t=Object(E.a)(e,2),i=t[0],c=t[1],o=n.paginationPage;return Object(a.useLayoutEffect)((function(){n.setAvalibleGenres()}),[]),r.a.createElement(H,null,r.a.createElement(xn,null,r.a.createElement(cn,{setPagesQuantity:c,dataKey:"popular"})),r.a.createElement(En,null,1===o?r.a.createElement(jn,null):r.a.createElement(yn,{onClick:function(){return n.setReducePaginationPage()}},"\xab"),r.a.createElement("p",null,"page ",o," of ",i),r.a.createElement(yn,{onClick:function(){return n.setIncreasePaginationPage()}},"\xbb")),r.a.createElement(j.a,{StopPosition:0,ShowAtPosition:900,EasingType:"easeOutCubic",AnimationDuration:500,style:{bottom:"55px"}}))})),xn=O.b.div(hn()),En=O.b.div(bn()),yn=O.b.button(dn()),jn=O.b.button(gn());function On(){var n=Object(x.a)(["\n    @media (max-width: 767px) {\n      ","\n    }\n  "]);return On=function(){return n},n}function wn(n){return Object(O.a)(On(),n)}function kn(){var n=Object(x.a)(["\n margit-top: 30px;\n >div{\n   margin: 20px auto;\n   width: fit-content;\n  font-weight: 500;\n  font-size: 18px;\n }\n"]);return kn=function(){return n},n}function Pn(){var n=Object(x.a)(["\nwidth: 100%;\ndisplay: flex;\njustify-content: flex-start;\n & p{ \n  margin: 0;\n  padding: 3px 5px;\n  font-size: 12px;\n }\n & p:first-child{\n  text-align:left;\n  vertical-align:middle;\n font-weight: bold;\n width: 55px;\n }\n & div{\ndisplay:flex;\n& p{\n  font-weight: 400 !important; \n}\n }\n & p:last-child{\n  text-align:left;\n  }\n"]);return Pn=function(){return n},n}function _n(){var n=Object(x.a)(["\ndisplay: flex;\nflex-direction: column;\nalign-items:center;\n>p{\n  font-size: 26px;\n  font-weight: bold;\n}\n"]);return _n=function(){return n},n}function Sn(){var n=Object(x.a)(["\nmargin: 0 40px;\ndisplay:flex;\n","\n& img {  \n  margin: 0 10px;\n  width: 220px; \n  border: 1px solid grey;\n}\n"]);return Sn=function(){return n},n}function An(){var n=Object(x.a)(["\npadding-top: 10px;\npadding-bottom: 10px;\nwidth: 100%;\nheight: 100%;\nbackground-color:black;\ncolor: white;\ndisplay:flex;\nflex-direction:column;\n","\n"]);return An=function(){return n},n}var In=Object(u.b)((function(n){return{api_key:n.ganres.api_key}}))((function(n){var e=n.api_key,t=Object(l.g)().id,i=Object(a.useState)({}),c=Object(E.a)(i,2),o=c[0],u=c[1];Object(a.useLayoutEffect)((function(){var n="https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(e,"&language=en-US ");d.a.get(n).then((function(n){u(n.data)}))}),[t]);var p=o&&o,s=p.original_title,f=p.overview,m=p.runtime,g=p.poster_path,b=p.genres,h=b&&b.map((function(n){return n.name})),v=b&&h.map((function(n){return r.a.createElement("p",{key:Object(P.a)()},n)}));return r.a.createElement(H,null,r.a.createElement(Gn,null,r.a.createElement(Ln,null,r.a.createElement("img",{src:"https://image.tmdb.org/t/p/w500/".concat(g),alt:"not found"}),r.a.createElement(Nn,null,r.a.createElement("p",null,s),r.a.createElement(Dn,null,r.a.createElement("p",null,"Owerviev"),r.a.createElement("p",null,f)),r.a.createElement(Dn,null,r.a.createElement("p",null,"Genre"),r.a.createElement("div",null,v)),r.a.createElement(Dn,null,r.a.createElement("p",null,"Runtime"),r.a.createElement("p",null,m,"min")))),r.a.createElement(Rn,null,r.a.createElement("div",null,"Also may interest"),r.a.createElement(cn,{dataKey:"recommendations",id:t,height:"250px",width:"180px"})),r.a.createElement(j.a,{StopPosition:0,ShowAtPosition:800,EasingType:"easeOutCubic",AnimationDuration:500,style:{bottom:"55px"}})))})),Gn=O.b.div(An(),wn("\nflex-direction:column;\nalign-items: center;\n")),Ln=O.b.div(Sn(),wn("\nflex-direction:column;\nalign-items: center;\n")),Nn=O.b.div(_n()),Dn=O.b.div(Pn()),Rn=O.b.div(kn());var Tn=function(){return r.a.createElement(u.a,{store:v},r.a.createElement(o.a,{basename:"/filmsList"},r.a.createElement(l.d,null,r.a.createElement(l.b,{exect:!0,path:"/FilmsList",component:vn}),r.a.createElement(l.b,{path:"/movieDetales/:id",component:In}),r.a.createElement(l.a,{to:"/FilmsList"}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Tn,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[48,1,2]]]);
//# sourceMappingURL=main.fd5a7630.chunk.js.map