(this.webpackJsonpsons_budistas=this.webpackJsonpsons_budistas||[]).push([[0],{14:function(n,e,t){n.exports=t(21)},21:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),c=t(9),i=t.n(c),o=t(3),u=t(4),s=t(6),l=t(1),d=t(2);function m(){var n=Object(l.a)(["\n  text-align: center;\n  font-size: 3rem;\n  padding: 1rem;\n  background-color: #730202;\n"]);return m=function(){return n},n}var f=function(n){var e=n.children;return a.a.createElement(p,null,e)},p=d.c.h1(m()),g=function(n,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=Object(o.a)({},n),a=t?+t.id:null,c=r.soundPlayerRef.current;a&&n.activeItem.id!==a?(r.activeItem=t,c.src="./assets/audios/".concat(t.src),c.load(),c.play()):(r.activeItem=t||r.activeItem,!c.ended&&c.paused?c.play():c.ended||c.paused?c.ended&&c.paused&&(c.src="./assets/audios/".concat(t.src),c.load()):c.pause()),e(Object(o.a)({},r))},v=function(n,e,t){return t!==n||e},b=function(n){return n>=10?String(n):"0".concat(n)},h=function(n,e){var t,r=(t=e,Math.floor(+t)),a=function(n){return Math.floor(n/3600)}(r),c=function(n){return Math.floor(n/60)}(r-=3600*a),i=r-=60*c,o="".concat(b(a),":").concat(b(c),":").concat(b(i));return n<3600&&(o="".concat(b(c),":").concat(b(i))),o};function E(){var n=Object(l.a)(["\n  ","\n  display: inline-block;\n  background-size: cover;\n  ","\n  ","\n"]);return E=function(){return n},n}function O(){var n=Object(l.a)(["\n","\n"]);return O=function(){return n},n}function j(){var n=Object(l.a)(["\n","\n"]);return j=function(){return n},n}function w(){var n=Object(l.a)(["\n  width: ",";\n  height: ",";\n"]);return w=function(){return n},n}var y=Object(d.b)(w(),(function(n){return n.medium?"6rem":"4.5rem"}),(function(n){return n.medium?"6rem":"4.5rem"})),x=Object(d.b)(j(),(function(n){var e=n.name;return"background-image: url(./assets/".concat(e,".svg);")})),P=Object(d.b)(O(),(function(n){return n.close?"\n    position: absolute;\n    top: 12px;\n    right: 10px;\n  ":""})),I=d.c.span(E(),y,x,P);function k(){var n=Object(l.a)(["\n  display: flex;\n  flex-flow: row no-wrap;\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n\n  background-color: #690101;\n  color: #F2F2F2;\n  justify-content: space-between;\n  padding: 3% 5%;\n  font-size: 2.4rem;\n"]);return k=function(){return n},n}var A=function(){var n=Object(r.useContext)(z),e=n.currentTrackMetadata,t=n.setCurrentTrackMetadata,c=Object(r.useState)(e.soundPlayerRef.current.currentTime),i=Object(u.a)(c,2),o=i[0],s=i[1];return Object(r.useEffect)((function(){var n=setInterval((function(){s(h(e.soundPlayerRef.current.duration,e.soundPlayerRef.current.currentTime))}),1e3);return function(){return clearInterval(n)}}),[e.soundPlayerRef]),a.a.createElement(R,null,a.a.createElement(I,{onClick:function(){return g(e,t)},name:e.soundPlayerRef.current.paused?"playIcon--white":"iconPause--white"}),a.a.createElement("span",null,e.activeItem.title),a.a.createElement("span",null,o))},R=d.c.div(k());function S(){var n=Object(l.a)(["\n  background-color: #4D0202;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  display: flex;\n  flex-flow: column wrap;\n  left: 0;\n  top: 0;\n  z-index: 10;\n  transition: transform .4s;\n  transform: translateX(",");\n  .paragraph {\n    max-width: 500px;\n    width: 100%;\n    font-size: 1.2rem;\n    align-self: center;\n    justify-self: center;\n    font-family: fantasy;\n    line-height: 3rem;\n    padding: 10px;\n    letter-spacing: 1px;\n  }\n"]);return S=function(){return n},n}function D(n){var e=n.songPage,t=n.setSongPage;return a.a.createElement(C,{isActive:e.isActive},a.a.createElement(f,null," ",e.item.title," "),a.a.createElement(I,{close:!0,className:"topRight",onClick:function(){return t((function(n){return Object(o.a)({},n,{isActive:!n.isActive})}))},name:"iconClose--white"}),a.a.createElement("pre",{className:"paragraph"},e.item.description),a.a.createElement(A,null))}var C=d.c.div(S(),(function(n){return n.isActive?"0":"200vw"}));function N(){var n=Object(l.a)(['\n*,\n*::after,\n*::before {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n}\n\nhtml {\n  font-size: 62.5%;\n}\nbody {\n  font-family: "Lato", sans-serif;\n  font-weight: 400;\n  /* font-size: 16px; */\n  line-height: 1.7;\n  color: #F2F2F2;\n  box-sizing: border-box;\n  background-color: #4D0202;\n}\n\n#root {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  width: 100vw;\n  height: 100vh;\n  overflow: hidden;\n}\n']);return N=function(){return n},n}var T=Object(d.a)(N());function U(){var n=Object(l.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #F2B731;\n  font-size: 2rem;\n  text-align: center;\n  margin: 3rem 2rem;\n  margin-bottom: 0;\n  padding: 1.5rem 0;\n  border: .1rem solid;\n\n  span {\n    margin-right: 1rem;\n  }\n"]);return U=function(){return n},n}function M(n){var e=n.setSongPage,t=n.item,c=n.children,i=Object(r.useContext)(z),o=i.currentTrackMetadata,u=i.setCurrentTrackMetadata,s=o.activeItem,l=o.soundPlayerRef;return a.a.createElement(G,{onClick:function(){return e((function(n){return{item:t,isActive:!n.isActive}}))}},a.a.createElement(I,{onClick:function(){return g(o,u,t)},name:v(s.id,l.current.paused,t.id)?"playIcon":"iconPause"}),c)}var G=d.c.div(U());function J(n){var e=n.setSongPage,t=n.songs;return a.a.createElement(a.a.Fragment,null,a.a.createElement(f,null,"Sons Budistas"),a.a.createElement("div",null,t.data.map((function(n){return a.a.createElement(M,{setSongPage:e,key:n.id,item:n},n.title)}))),a.a.createElement(A,null))}var z=Object(r.createContext)(null);function F(n){var e=Object(r.useRef)(new Audio("./assets/audios/prece7linhas20min.mp3")),t=Object(r.useState)({activeItem:{id:1,src:"prece7linhas20min.mp3",title:"Prece das 7 linhas"},ended:!1,paused:!0,soundPlayerRef:e}),c=Object(u.a)(t,2),i=c[0],o=c[1];return a.a.createElement(z.Provider,Object.assign({value:{currentTrackMetadata:i,setCurrentTrackMetadata:o}},n))}function B(){var n=Object(r.useState)({isActive:!1,item:Object(o.a)({},s.data[0])}),e=Object(u.a)(n,2),t=e[0],c=e[1];return a.a.createElement(F,null,a.a.createElement(T,null),a.a.createElement(J,{setSongPage:c,songs:s}),a.a.createElement(D,{songPage:t,setSongPage:c}))}var H=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(T,null),a.a.createElement(B,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(H,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))},6:function(n){n.exports=JSON.parse('{"data":[{"id":1,"src":"prece7linhas20min.mp3","title":"Prece das 7 linhas","description":"HUNG OR DJEN IUL DJI NUB DJANG TSAM\\nPE MA GUE SAR DONG PO LA\\n\\nIA TSEN TCHOG GUI NG\xd6 DRUB NIE\\nPE MA DJUNG NE JE SU DRAG\\nKOR DU KA DRO MANG P\xd6 KOR\\nTCHED TCHI DJE SU DAG DRUB TCHI\\nDJIN DJI LOB TCHIR JE SU SOL\\nGURU PE MA SI DI HUNG"},{"id":2,"src":"bensound-summer.mp3","title":"song 1"},{"id":3,"src":"bensound-summer.mp3","title":"song 2"},{"id":4,"src":"bensound-summer.mp3","title":"song 3"}]}')}},[[14,1,2]]]);
//# sourceMappingURL=main.04777fdf.chunk.js.map