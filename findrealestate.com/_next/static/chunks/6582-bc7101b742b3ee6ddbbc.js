"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6582],{30926:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var i in t)Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}(t,{callServer:function(){return r.callServer},createServerReference:function(){return s.createServerReference},findSourceMapURL:function(){return n.findSourceMapURL}});let r=i(41209),n=i(85153),s=i(77197)},39957:(e,t,i)=>{i.d(t,{L:()=>c});var r=i(12115),n=i(47605);let s="undefined"!=typeof document?r.useLayoutEffect:r.useEffect,o=e=>e&&!Array.isArray(e)&&"object"==typeof e,a=[],l={},d=n.Ay,c=(e,t=a)=>{let i=l;o(e)?(i=e,e=null,t="dependencies"in i?i.dependencies:a):o(t)&&(t="dependencies"in(i=t)?i.dependencies:a),e&&"function"!=typeof e&&console.warn("First parameter must be a function or config object");let{scope:n,revertOnUpdate:c}=i,u=(0,r.useRef)(!1),p=(0,r.useRef)(d.context(()=>{},n)),f=(0,r.useRef)(e=>p.current.add(null,e)),h=t&&t.length&&!c;return h&&s(()=>(u.current=!0,()=>p.current.revert()),a),s(()=>{if(e&&p.current.add(e,n),!h||!u.current)return()=>p.current.revert()},t),{context:p.current,contextSafe:f.current}};c.register=e=>{d=e},c.headless=!0},44151:(e,t,i)=>{i.d(t,{A:()=>x});let r,n,s,o="undefined"!=typeof Intl?new Intl.Segmenter:0,a=e=>"string"==typeof e?a(document.querySelectorAll(e)):"length"in e?Array.from(e):[e],l=e=>a(e).filter(e=>e instanceof HTMLElement),d=[],c=function(){},u=/\s+/g,p=RegExp("\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)*|.","gu"),f={left:0,top:0,width:0,height:0},h=(e,t)=>{if(t){let i=new Set(e.join("").match(t)||d),r=e.length,n,s,o,a;if(i.size){for(;--r>-1;)for(o of(s=e[r],i))if(o.startsWith(s)&&o.length>s.length){for(n=0,a=s;o.startsWith(a+=e[r+ ++n])&&a.length<o.length;);if(n&&a.length===o.length){e[r]=o,e.splice(r+1,n);break}}}}return e},m=e=>"inline"===window.getComputedStyle(e).display&&(e.style.display="inline-block"),g=(e,t,i)=>t.insertBefore("string"==typeof e?document.createTextNode(e):e,i),y=(e,t,i)=>{let r=t[e+"sClass"]||"",{tag:n="div",aria:s="auto",propIndex:o=!1}=t,a="line"===e?"block":"inline-block",l=r.indexOf("++")>-1,d=t=>{let d=document.createElement(n),c=i.length+1;return r&&(d.className=r+(l?" "+r+c:"")),o&&d.style.setProperty("--"+e,c+""),"none"!==s&&d.setAttribute("aria-hidden","true"),"span"!==n&&(d.style.position="relative",d.style.display=a),d.textContent=t,i.push(d),d};return l&&(r=r.replace("++","")),d.collection=i,d},b=(e,t,i,r,n,s,a,l,c,p)=>{var f;let y=Array.from(e.childNodes),v=0,{wordDelimiter:x,reduceWhiteSpace:w=!0,prepareText:E}=t,C=e.getBoundingClientRect(),A=C,S=!w&&"pre"===window.getComputedStyle(e).whiteSpace.substring(0,3),N=0,k=i.collection,T,O,R,j,$,_,z,D,L,M,F,I,P,B,H,W,U,q;for("object"==typeof x?(R=x.delimiter||x,O=x.replaceWith||""):O=""===x?"":x||" ",T=" "!==O;v<y.length;v++)if(3===(j=y[v]).nodeType){for(H=j.textContent||"",w?H=H.replace(u," "):S&&(H=H.replace(/\n/g,O+"\n")),E&&(H=E(H,e)),j.textContent=H,U=($=O||R?H.split(R||O):H.match(l)||d)[$.length-1],D=T?" "===U.slice(-1):!U,U||$.pop(),A=C,(z=T?" "===$[0].charAt(0):!$[0])&&g(" ",e,j),$[0]||$.shift(),h($,c),s&&p||(j.textContent=""),L=1;L<=$.length;L++)if(W=$[L-1],!w&&S&&"\n"===W.charAt(0)&&(null==(f=j.previousSibling)||f.remove(),g(document.createElement("br"),e,j),W=W.slice(1)),w||""!==W)if(" "===W)e.insertBefore(document.createTextNode(" "),j);else{if(T&&" "===W.charAt(0)&&g(" ",e,j),N&&1===L&&!z&&k.indexOf(N.parentNode)>-1?(_=k[k.length-1]).appendChild(document.createTextNode(r?"":W)):(g(_=i(r?"":W),e,j),N&&1===L&&!z&&_.insertBefore(N,_.firstChild)),r)for(q=0,F=o?h([...o.segment(W)].map(e=>e.segment),c):W.match(l)||d;q<F.length;q++)_.appendChild(" "===F[q]?document.createTextNode(" "):r(F[q]));if(s&&p){if(H=j.textContent=H.substring(W.length+1,H.length),(M=_.getBoundingClientRect()).top>A.top&&M.left<=A.left){for(I=e.cloneNode(),P=e.childNodes[0];P&&P!==_;)B=P,P=P.nextSibling,I.appendChild(B);e.parentNode.insertBefore(I,e),n&&m(I)}A=M}(L<$.length||D)&&g(L>=$.length?" ":T&&" "===W.slice(-1)?" "+O:O,e,j)}else g(O,e,j);e.removeChild(j),N=0}else 1===j.nodeType&&(a&&a.indexOf(j)>-1?(k.indexOf(j.previousSibling)>-1&&k[k.length-1].appendChild(j),N=j):(b(j,t,i,r,n,s,a,l,c,!0),N=0),n&&m(j))},v=class e{constructor(e,t){this.isSplit=!1,s||x.register(window.gsap),this.elements=l(e),this.chars=[],this.words=[],this.lines=[],this.masks=[],this.vars=t,this._split=()=>this.isSplit&&this.split(this.vars);let i=[],r,n=()=>{let e=i.length,t;for(;e--;){let r=(t=i[e]).element.offsetWidth;if(r!==t.width){t.width=r,this._split();return}}};this._data={orig:i,obs:"undefined"!=typeof ResizeObserver&&new ResizeObserver(()=>{clearTimeout(r),r=setTimeout(n,200)})},c(this),this.split(t)}split(e){this.isSplit&&this.revert(),this.vars=e=e||this.vars||{};let{type:t="chars,words,lines",aria:i="auto",deepSlice:r=!0,smartWrap:s,onSplit:o,autoSplit:d=!1,specialChars:c,mask:u}=this.vars,h=t.indexOf("lines")>-1,m=t.indexOf("chars")>-1,g=t.indexOf("words")>-1,v=m&&!g&&!h,x=c&&("push"in c?RegExp("(?:"+c.join("|")+")","gu"):c),w=x?RegExp(x.source+"|"+p.source,"gu"):p,E=!!e.ignore&&l(e.ignore),{orig:C,animTime:A,obs:S}=this._data,N;return(m||g||h)&&(this.elements.forEach((t,n)=>{C[n]={element:t,html:t.innerHTML,ariaL:t.getAttribute("aria-label"),ariaH:t.getAttribute("aria-hidden")},"auto"===i?t.setAttribute("aria-label",(t.textContent||"").trim()):"hidden"===i&&t.setAttribute("aria-hidden","true");let o=[],l=[],d=[],c=m?y("char",e,o):null,u=y("word",e,l),p,A,S,N;if(b(t,e,u,c,v,r&&(h||v),E,w,x,!1),h){let i,r,n=a(t.childNodes),s=(i=y("line",e,d),r=window.getComputedStyle(t).textAlign||"left",(e,s)=>{let o=i("");for(o.style.textAlign=r,t.insertBefore(o,n[e]);e<s;e++)o.appendChild(n[e]);o.normalize()}),o,l=[],c=0,u=n.map(e=>1===e.nodeType?e.getBoundingClientRect():f),h=f;for(p=0;p<n.length;p++)1===(o=n[p]).nodeType&&("BR"===o.nodeName?(l.push(o),s(c,p+1),h=u[c=p+1]):(p&&u[p].top>h.top&&u[p].left<=h.left&&(s(c,p),c=p),h=u[p]));c<p&&s(c,p),l.forEach(e=>{var t;return null==(t=e.parentNode)?void 0:t.removeChild(e)})}if(!g){for(p=0;p<l.length;p++)if(A=l[p],m||!A.nextSibling||3!==A.nextSibling.nodeType)if(s&&!h){for((S=document.createElement("span")).style.whiteSpace="nowrap";A.firstChild;)S.appendChild(A.firstChild);A.replaceWith(S)}else A.replaceWith(...A.childNodes);else(N=A.nextSibling)&&3===N.nodeType&&(N.textContent=(A.textContent||"")+(N.textContent||""),A.remove());l.length=0,t.normalize()}this.lines.push(...d),this.words.push(...l),this.chars.push(...o)}),u&&this[u]&&this.masks.push(...this[u].map(e=>{let t=e.cloneNode();return e.replaceWith(t),t.appendChild(e),e.className&&(t.className=e.className.replace(/(\b\w+\b)/g,"$1-mask")),t.style.overflow="clip",t}))),this.isSplit=!0,n&&(d?n.addEventListener("loadingdone",this._split):"loading"===n.status&&console.warn("SplitText called before fonts loaded")),(N=o&&o(this))&&N.totalTime&&(this._data.anim=A?N.totalTime(A):N),h&&d&&this.elements.forEach((e,t)=>{C[t].width=e.offsetWidth,S&&S.observe(e)}),this}revert(){var e,t;let{orig:i,anim:r,obs:s}=this._data;return s&&s.disconnect(),i.forEach(({element:e,html:t,ariaL:i,ariaH:r})=>{e.innerHTML=t,i?e.setAttribute("aria-label",i):e.removeAttribute("aria-label"),r?e.setAttribute("aria-hidden",r):e.removeAttribute("aria-hidden")}),this.chars.length=this.words.length=this.lines.length=i.length=this.masks.length=0,this.isSplit=!1,null==n||n.removeEventListener("loadingdone",this._split),r&&(this._data.animTime=r.totalTime(),r.revert()),null==(t=(e=this.vars).onRevert)||t.call(e,this),this}static create(t,i){return new e(t,i)}static register(e){(r=r||e||window.gsap)&&(a=r.utils.toArray,c=r.core.context||c),!s&&window.innerWidth>0&&(n=document.fonts,s=!0)}};v.version="3.13.0";let x=v},44517:(e,t,i)=>{i.d(t,{l$:()=>X,Ay:()=>ee,oR:()=>O});var r,n=i(12115);let s={data:""},o=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,a=/\/\*[^]*?\*\/|  +/g,l=/\n+/g,d=(e,t)=>{let i="",r="",n="";for(let s in e){let o=e[s];"@"==s[0]?"i"==s[1]?i=s+" "+o+";":r+="f"==s[1]?d(o,s):s+"{"+d(o,"k"==s[1]?"":t)+"}":"object"==typeof o?r+=d(o,t?t.replace(/([^,])+/g,e=>s.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):s):null!=o&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),n+=d.p?d.p(s,o):s+":"+o+";")}return i+(t&&n?t+"{"+n+"}":n)+r},c={},u=e=>{if("object"==typeof e){let t="";for(let i in e)t+=i+u(e[i]);return t}return e};function p(e){let t,i,r,n=this||{},p=e.call?e(n.p):e;return((e,t,i,r,n)=>{var s,p,f,h;let m=u(e),g=c[m]||(c[m]=(e=>{let t=0,i=11;for(;t<e.length;)i=101*i+e.charCodeAt(t++)>>>0;return"go"+i})(m));if(!c[g]){let t=m!==e?e:(e=>{let t,i,r=[{}];for(;t=o.exec(e.replace(a,""));)t[4]?r.shift():t[3]?(i=t[3].replace(l," ").trim(),r.unshift(r[0][i]=r[0][i]||{})):r[0][t[1]]=t[2].replace(l," ").trim();return r[0]})(e);c[g]=d(n?{["@keyframes "+g]:t}:t,i?"":"."+g)}let y=i&&c.g?c.g:null;return i&&(c.g=c[g]),s=c[g],p=t,f=r,(h=y)?p.data=p.data.replace(h,s):-1===p.data.indexOf(s)&&(p.data=f?s+p.data:p.data+s),g})(p.unshift?p.raw?(t=[].slice.call(arguments,1),i=n.p,p.reduce((e,r,n)=>{let s=t[n];if(s&&s.call){let e=s(i),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;s=t?"."+t:e&&"object"==typeof e?e.props?"":d(e,""):!1===e?"":e}return e+r+(null==s?"":s)},"")):p.reduce((e,t)=>Object.assign(e,t&&t.call?t(n.p):t),{}):p,(r=n.target,"object"==typeof window?((r?r.querySelector("#_goober"):window._goober)||Object.assign((r||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:r||s),n.g,n.o,n.k)}p.bind({g:1});let f,h,m,g=p.bind({k:1});function y(e,t){let i=this||{};return function(){let r=arguments;function n(s,o){let a=Object.assign({},s),l=a.className||n.className;i.p=Object.assign({theme:h&&h()},a),i.o=/ *go\d+/.test(l),a.className=p.apply(i,r)+(l?" "+l:""),t&&(a.ref=o);let d=e;return e[0]&&(d=a.as||e,delete a.as),m&&d[0]&&m(a),f(d,a)}return t?t(n):n}}var b=(e,t)=>"function"==typeof e?e(t):e,v=(()=>{let e=0;return()=>(++e).toString()})(),x=(()=>{let e;return()=>{if(void 0===e&&"u">typeof window){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),w=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:i}=t;return w(e,{type:+!!e.toasts.find(e=>e.id===i.id),toast:i});case 3:let{toastId:r}=t;return{...e,toasts:e.toasts.map(e=>e.id===r||void 0===r?{...e,dismissed:!0,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let n=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+n}))}}},E=[],C={toasts:[],pausedAt:void 0},A=e=>{C=w(C,e),E.forEach(e=>{e(C)})},S={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},N=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},[t,i]=(0,n.useState)(C),r=(0,n.useRef)(C);(0,n.useEffect)(()=>(r.current!==C&&i(C),E.push(i),()=>{let e=E.indexOf(i);e>-1&&E.splice(e,1)}),[]);let s=t.toasts.map(t=>{var i,r,n;return{...e,...e[t.type],...t,removeDelay:t.removeDelay||(null==(i=e[t.type])?void 0:i.removeDelay)||(null==e?void 0:e.removeDelay),duration:t.duration||(null==(r=e[t.type])?void 0:r.duration)||(null==e?void 0:e.duration)||S[t.type],style:{...e.style,...null==(n=e[t.type])?void 0:n.style,...t.style}}});return{...t,toasts:s}},k=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"blank",i=arguments.length>2?arguments[2]:void 0;return{createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...i,id:(null==i?void 0:i.id)||v()}},T=e=>(t,i)=>{let r=k(t,e,i);return A({type:2,toast:r}),r.id},O=(e,t)=>T("blank")(e,t);O.error=T("error"),O.success=T("success"),O.loading=T("loading"),O.custom=T("custom"),O.dismiss=e=>{A({type:3,toastId:e})},O.remove=e=>A({type:4,toastId:e}),O.promise=(e,t,i)=>{let r=O.loading(t.loading,{...i,...null==i?void 0:i.loading});return"function"==typeof e&&(e=e()),e.then(e=>{let n=t.success?b(t.success,e):void 0;return n?O.success(n,{id:r,...i,...null==i?void 0:i.success}):O.dismiss(r),e}).catch(e=>{let n=t.error?b(t.error,e):void 0;n?O.error(n,{id:r,...i,...null==i?void 0:i.error}):O.dismiss(r)}),e};var R=(e,t)=>{A({type:1,toast:{id:e,height:t}})},j=()=>{A({type:5,time:Date.now()})},$=new Map,_=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3;if($.has(e))return;let i=setTimeout(()=>{$.delete(e),A({type:4,toastId:e})},t);$.set(e,i)},z=g`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,D=g`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,L=g`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,M=y("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${z} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${D} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${L} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,F=g`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,I=y("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${F} 1s linear infinite;
`,P=g`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,B=g`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,H=y("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${P} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${B} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,W=y("div")`
  position: absolute;
`,U=y("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,q=g`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Y=y("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${q} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Z=e=>{let{toast:t}=e,{icon:i,type:r,iconTheme:s}=t;return void 0!==i?"string"==typeof i?n.createElement(Y,null,i):i:"blank"===r?null:n.createElement(U,null,n.createElement(I,{...s}),"loading"!==r&&n.createElement(W,null,"error"===r?n.createElement(M,{...s}):n.createElement(H,{...s})))},G=y("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,J=y("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,K=n.memo(e=>{let{toast:t,position:i,style:r,children:s}=e,o=t.height?((e,t)=>{let i=e.includes("top")?1:-1,[r,n]=x()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[`
0% {transform: translate3d(0,${-200*i}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*i}%,-1px) scale(.6); opacity:0;}
`];return{animation:t?`${g(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${g(n)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(t.position||i||"top-center",t.visible):{opacity:0},a=n.createElement(Z,{toast:t}),l=n.createElement(J,{...t.ariaProps},b(t.message,t));return n.createElement(G,{className:t.className,style:{...o,...r,...t.style}},"function"==typeof s?s({icon:a,message:l}):n.createElement(n.Fragment,null,a,l))});r=n.createElement,d.p=void 0,f=r,h=void 0,m=void 0;var Q=e=>{let{id:t,className:i,style:r,onHeightUpdate:s,children:o}=e,a=n.useCallback(e=>{if(e){let i=()=>{s(t,e.getBoundingClientRect().height)};i(),new MutationObserver(i).observe(e,{subtree:!0,childList:!0,characterData:!0})}},[t,s]);return n.createElement("div",{ref:a,className:i,style:r},o)},V=p`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,X=e=>{let{reverseOrder:t,position:i="top-center",toastOptions:r,gutter:s,children:o,containerStyle:a,containerClassName:l}=e,{toasts:d,handlers:c}=(e=>{let{toasts:t,pausedAt:i}=N(e);(0,n.useEffect)(()=>{if(i)return;let e=Date.now(),r=t.map(t=>{if(t.duration===1/0)return;let i=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(i<0){t.visible&&O.dismiss(t.id);return}return setTimeout(()=>O.dismiss(t.id),i)});return()=>{r.forEach(e=>e&&clearTimeout(e))}},[t,i]);let r=(0,n.useCallback)(()=>{i&&A({type:6,time:Date.now()})},[i]),s=(0,n.useCallback)((e,i)=>{let{reverseOrder:r=!1,gutter:n=8,defaultPosition:s}=i||{},o=t.filter(t=>(t.position||s)===(e.position||s)&&t.height),a=o.findIndex(t=>t.id===e.id),l=o.filter((e,t)=>t<a&&e.visible).length;return o.filter(e=>e.visible).slice(...r?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+n,0)},[t]);return(0,n.useEffect)(()=>{t.forEach(e=>{if(e.dismissed)_(e.id,e.removeDelay);else{let t=$.get(e.id);t&&(clearTimeout(t),$.delete(e.id))}})},[t]),{toasts:t,handlers:{updateHeight:R,startPause:j,endPause:r,calculateOffset:s}}})(r);return n.createElement("div",{id:"_rht_toaster",style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...a},className:l,onMouseEnter:c.startPause,onMouseLeave:c.endPause},d.map(e=>{let r=e.position||i,a=((e,t)=>{let i=e.includes("top"),r=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:x()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(i?1:-1)}px)`,...i?{top:0}:{bottom:0},...r}})(r,c.calculateOffset(e,{reverseOrder:t,gutter:s,defaultPosition:i}));return n.createElement(Q,{id:e.id,key:e.id,onHeightUpdate:c.updateHeight,className:e.visible?V:"",style:a},"custom"===e.type?b(e.message,e):o?o(e):n.createElement(K,{toast:e,position:r}))}))},ee=O}}]);