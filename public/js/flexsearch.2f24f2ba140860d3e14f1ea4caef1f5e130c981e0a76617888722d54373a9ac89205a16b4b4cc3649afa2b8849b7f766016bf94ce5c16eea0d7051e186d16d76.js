(()=>{var ne=Object.create;var te=Object.defineProperty;var oe=Object.getOwnPropertyDescriptor;var re=Object.getOwnPropertyNames;var ae=Object.getPrototypeOf,le=Object.prototype.hasOwnProperty;var ue=(e,i)=>()=>(i||e((i={exports:{}}).exports,i),i.exports);var he=(e,i,s,n)=>{if(i&&typeof i=="object"||typeof i=="function")for(let o of re(i))!le.call(e,o)&&o!==s&&te(e,o,{get:()=>i[o],enumerable:!(n=oe(i,o))||n.enumerable});return e};var ce=(e,i,s)=>(s=e!=null?ne(ae(e)):{},he(i||!e||!e.__esModule?te(s,"default",{value:e,enumerable:!0}):s,e));var ie=ue((exports,module)=>{(function _f(self){"use strict";try{module&&(self=module)}catch(e){}self._factory=_f;var t;function u(e){return typeof e!="undefined"?e:!0}function aa(e){let i=Array(e);for(let s=0;s<e;s++)i[s]=v();return i}function v(){return Object.create(null)}function ba(e,i){return i.length-e.length}function x(e){return typeof e=="string"}function C(e){return typeof e=="object"}function D(e){return typeof e=="function"}function ca(e,i){var s=da;if(e&&(i&&(e=E(e,i)),this.H&&(e=E(e,this.H)),this.J&&1<e.length&&(e=E(e,this.J)),s||s==="")){if(e=e.split(s),this.filter){i=this.filter,s=e.length;let n=[];for(let o=0,r=0;o<s;o++){let l=e[o];l&&!i[l]&&(n[r++]=l)}e=n}return e}return e}let da=/[\p{Z}\p{S}\p{P}\p{C}]+/u,ea=/[\u0300-\u036f]/g;function fa(e,i){let s=Object.keys(e),n=s.length,o=[],r="",l=0;for(let h=0,f,g;h<n;h++)f=s[h],(g=e[f])?(o[l++]=F(i?"(?!\\b)"+f+"(\\b|_)":f),o[l++]=g):r+=(r?"|":"")+f;return r&&(o[l++]=F(i?"(?!\\b)("+r+")(\\b|_)":"("+r+")"),o[l]=""),o}function E(e,i){for(let s=0,n=i.length;s<n&&(e=e.replace(i[s],i[s+1]),e);s+=2);return e}function F(e){return new RegExp(e,"g")}function ha(e){let i="",s="";for(let n=0,o=e.length,r;n<o;n++)(r=e[n])!==s&&(i+=s=r);return i}var ja={encode:ia,F:!1,G:""};function ia(e){return ca.call(this,(""+e).toLowerCase(),!1)}let ka={},G={};function la(e){I(e,"add"),I(e,"append"),I(e,"search"),I(e,"update"),I(e,"remove")}function I(e,i){e[i+"Async"]=function(){let s=this,n=arguments;var o=n[n.length-1];let r;return D(o)&&(r=o,delete n[n.length-1]),o=new Promise(function(l){setTimeout(function(){s.async=!0;let h=s[i].apply(s,n);s.async=!1,l(h)})}),r?(o.then(r),this):o}}function ma(e,i,s,n){let o=e.length,r=[],l,h,f=0;n&&(n=[]);for(let g=o-1;0<=g;g--){let p=e[g],q=p.length,w=v(),k=!l;for(let m=0;m<q;m++){let y=p[m],H=y.length;if(H)for(let _=0,z,j;_<H;_++)if(j=y[_],l){if(l[j]){if(!g){if(s)s--;else if(r[f++]=j,f===i)return r}(g||n)&&(w[j]=1),k=!0}if(n&&(z=(h[j]||0)+1,h[j]=z,z<o)){let B=n[z-2]||(n[z-2]=[]);B[B.length]=j}}else w[j]=1}if(n)l||(h=w);else if(!k)return[];l=w}if(n)for(let g=n.length-1,p,q;0<=g;g--){p=n[g],q=p.length;for(let w=0,k;w<q;w++)if(k=p[w],!l[k]){if(s)s--;else if(r[f++]=k,f===i)return r;l[k]=1}}return r}function na(e,i){let s=v(),n=v(),o=[];for(let r=0;r<e.length;r++)s[e[r]]=1;for(let r=0,l;r<i.length;r++){l=i[r];for(let h=0,f;h<l.length;h++)f=l[h],s[f]&&!n[f]&&(n[f]=1,o[o.length]=f)}return o}function J(e){this.l=e!==!0&&e,this.cache=v(),this.h=[]}function oa(e,i,s){C(e)&&(e=e.query);let n=this.cache.get(e);return n||(n=this.search(e,i,s),this.cache.set(e,n)),n}J.prototype.set=function(e,i){if(!this.cache[e]){var s=this.h.length;for(s===this.l?delete this.cache[this.h[s-1]]:s++,--s;0<s;s--)this.h[s]=this.h[s-1];this.h[0]=e}this.cache[e]=i},J.prototype.get=function(e){let i=this.cache[e];if(this.l&&i&&(e=this.h.indexOf(e))){let s=this.h[e-1];this.h[e-1]=this.h[e],this.h[e]=s}return i};let qa={memory:{charset:"latin:extra",D:3,B:4,m:!1},performance:{D:3,B:3,s:!1,context:{depth:2,D:1}},match:{charset:"latin:extra",G:"reverse"},score:{charset:"latin:advanced",D:20,B:3,context:{depth:3,D:9}},default:{}};function ra(e,i,s,n,o,r,l){setTimeout(function(){let h=e(s?s+"."+n:n,JSON.stringify(l));h&&h.then?h.then(function(){i.export(e,i,s,o,r+1)}):i.export(e,i,s,o,r+1)})}function K(e,i){if(!(this instanceof K))return new K(e);var s;if(e){x(e)?e=qa[e]:(s=e.preset)&&(e=Object.assign({},s[s],e)),s=e.charset;var n=e.lang;x(s)&&(s.indexOf(":")===-1&&(s+=":default"),s=G[s]),x(n)&&(n=ka[n])}else e={};let o,r,l=e.context||{};if(this.encode=e.encode||s&&s.encode||ia,this.register=i||v(),this.D=o=e.resolution||9,this.G=i=s&&s.G||e.tokenize||"strict",this.depth=i==="strict"&&l.depth,this.l=u(l.bidirectional),this.s=r=u(e.optimize),this.m=u(e.fastupdate),this.B=e.minlength||1,this.C=e.boost,this.map=r?aa(o):v(),this.A=o=l.resolution||1,this.h=r?aa(o):v(),this.F=s&&s.F||e.rtl,this.H=(i=e.matcher||n&&n.H)&&fa(i,!1),this.J=(i=e.stemmer||n&&n.J)&&fa(i,!0),s=i=e.filter||n&&n.filter){s=i,n=v();for(let h=0,f=s.length;h<f;h++)n[s[h]]=1;s=n}this.filter=s,this.cache=(i=e.cache)&&new J(i)}t=K.prototype,t.append=function(e,i){return this.add(e,i,!0)},t.add=function(e,i,s,n){if(i&&(e||e===0)){if(!n&&!s&&this.register[e])return this.update(e,i);if(i=this.encode(i),n=i.length){let g=v(),p=v(),q=this.depth,w=this.D;for(let k=0;k<n;k++){let m=i[this.F?n-1-k:k];var o=m.length;if(m&&o>=this.B&&(q||!p[m])){var r=L(w,n,k),l="";switch(this.G){case"full":if(2<o){for(r=0;r<o;r++)for(var h=o;h>r;h--)if(h-r>=this.B){var f=L(w,n,k,o,r);l=m.substring(r,h),M(this,p,l,f,e,s)}break}case"reverse":if(1<o){for(h=o-1;0<h;h--)l=m[h]+l,l.length>=this.B&&M(this,p,l,L(w,n,k,o,h),e,s);l=""}case"forward":if(1<o){for(h=0;h<o;h++)l+=m[h],l.length>=this.B&&M(this,p,l,r,e,s);break}default:if(this.C&&(r=Math.min(r/this.C(i,m,k)|0,w-1)),M(this,p,m,r,e,s),q&&1<n&&k<n-1){for(o=v(),l=this.A,r=m,h=Math.min(q+1,n-k),o[r]=1,f=1;f<h;f++)if((m=i[this.F?n-1-k-f:k+f])&&m.length>=this.B&&!o[m]){o[m]=1;let y=this.l&&m>r;M(this,g,y?r:m,L(l+(n/2>l?0:1),n,k,h-1,f-1),e,s,y?m:r)}}}}}this.m||(this.register[e]=1)}}return this};function L(e,i,s,n,o){return s&&1<e?i+(n||0)<=e?s+(o||0):(e-1)/(i+(n||0))*(s+(o||0))+1|0:0}function M(e,i,s,n,o,r,l){let h=l?e.h:e.map;(!i[s]||l&&!i[s][l])&&(e.s&&(h=h[n]),l?(i=i[s]||(i[s]=v()),i[l]=1,h=h[l]||(h[l]=v())):i[s]=1,h=h[s]||(h[s]=[]),e.s||(h=h[n]||(h[n]=[])),r&&h.includes(o)||(h[h.length]=o,e.m&&(e=e.register[o]||(e.register[o]=[]),e[e.length]=h)))}t.search=function(e,i,s){s||(!i&&C(e)?(s=e,e=s.query):C(i)&&(s=i));let n=[],o,r,l=0;if(s){e=s.query||e,i=s.limit,l=s.offset||0;var h=s.context;r=s.suggest}if(e&&(e=this.encode(""+e),o=e.length,1<o)){s=v();var f=[];for(let p=0,q=0,w;p<o;p++)if((w=e[p])&&w.length>=this.B&&!s[w])if(this.s||r||this.map[w])f[q++]=w,s[w]=1;else return n;e=f,o=e.length}if(!o)return n;i||(i=100),h=this.depth&&1<o&&h!==!1,s=0;let g;h?(g=e[0],s=1):1<o&&e.sort(ba);for(let p,q;s<o;s++){if(q=e[s],h?(p=sa(this,n,r,i,l,o===2,q,g),r&&p===!1&&n.length||(g=q)):p=sa(this,n,r,i,l,o===1,q),p)return p;if(r&&s===o-1){if(f=n.length,!f){if(h){h=0,s=-1;continue}return n}if(f===1)return ta(n[0],i,l)}}return ma(n,i,l,r)};function sa(e,i,s,n,o,r,l,h){let f=[],g=h?e.h:e.map;if(e.s||(g=ua(g,l,h,e.l)),g){let p=0,q=Math.min(g.length,h?e.A:e.D);for(let w=0,k=0,m,y;w<q&&!((m=g[w])&&(e.s&&(m=ua(m,l,h,e.l)),o&&m&&r&&(y=m.length,y<=o?(o-=y,m=null):(m=m.slice(o),o=0)),m&&(f[p++]=m,r&&(k+=m.length,k>=n))));w++);if(p){if(r)return ta(f,n,0);i[i.length]=f;return}}return!s&&f}function ta(e,i,s){return e=e.length===1?e[0]:[].concat.apply([],e),s||e.length>i?e.slice(s,s+i):e}function ua(e,i,s,n){return s?(n=n&&i>s,e=(e=e[n?i:s])&&e[n?s:i]):e=e[i],e}t.contain=function(e){return!!this.register[e]},t.update=function(e,i){return this.remove(e).add(e,i)},t.remove=function(e,i){let s=this.register[e];if(s){if(this.m)for(let n=0,o;n<s.length;n++)o=s[n],o.splice(o.indexOf(e),1);else N(this.map,e,this.D,this.s),this.depth&&N(this.h,e,this.A,this.s);if(i||delete this.register[e],this.cache){i=this.cache;for(let n=0,o,r;n<i.h.length;n++)r=i.h[n],o=i.cache[r],o.includes(e)&&(i.h.splice(n--,1),delete i.cache[r])}}return this};function N(e,i,s,n,o){let r=0;if(e.constructor===Array)if(o)i=e.indexOf(i),i!==-1?1<e.length&&(e.splice(i,1),r++):r++;else{o=Math.min(e.length,s);for(let l=0,h;l<o;l++)(h=e[l])&&(r=N(h,i,s,n,o),n||r||delete e[l])}else for(let l in e)(r=N(e[l],i,s,n,o))||delete e[l];return r}t.searchCache=oa,t.export=function(e,i,s,n,o){let r,l;switch(o||(o=0)){case 0:if(r="reg",this.m){l=v();for(let h in this.register)l[h]=1}else l=this.register;break;case 1:r="cfg",l={doc:0,opt:this.s?1:0};break;case 2:r="map",l=this.map;break;case 3:r="ctx",l=this.h;break;default:return}return ra(e,i||this,s,r,n,o,l),!0},t.import=function(e,i){if(i)switch(x(i)&&(i=JSON.parse(i)),e){case"cfg":this.s=!!i.opt;break;case"reg":this.m=!1,this.register=i;break;case"map":this.map=i;break;case"ctx":this.h=i}},la(K.prototype);function va(e){e=e.data;var i=self._index;let s=e.args;var n=e.task;switch(n){case"init":n=e.options||{},e=e.factory,i=n.encode,n.cache=!1,i&&i.indexOf("function")===0&&(n.encode=Function("return "+i)()),e?(Function("return "+e)()(self),self._index=new self.FlexSearch.Index(n),delete self.FlexSearch):self._index=new K(n);break;default:e=e.id,i=i[n].apply(i,s),postMessage(n==="search"?{id:e,msg:i}:{id:e})}}let wa=0;function O(e){if(!(this instanceof O))return new O(e);var i;e?D(i=e.encode)&&(e.encode=i.toString()):e={},(i=(self||window)._factory)&&(i=i.toString());let s=typeof window=="undefined"&&self.exports,n=this;this.o=xa(i,s,e.worker),this.h=v(),this.o&&(s?this.o.on("message",function(o){n.h[o.id](o.msg),delete n.h[o.id]}):this.o.onmessage=function(o){o=o.data,n.h[o.id](o.msg),delete n.h[o.id]},this.o.postMessage({task:"init",factory:i,options:e}))}P("add"),P("append"),P("search"),P("update"),P("remove");function P(e){O.prototype[e]=O.prototype[e+"Async"]=function(){let i=this,s=[].slice.call(arguments);var n=s[s.length-1];let o;return D(n)&&(o=n,s.splice(s.length-1,1)),n=new Promise(function(r){setTimeout(function(){i.h[++wa]=r,i.o.postMessage({task:e,id:wa,args:s})})}),o?(n.then(o),this):n}}function xa(a,b,c){let d;try{d=b?eval('new (require("worker_threads")["Worker"])("../dist/node/node.js")'):a?new Worker(URL.createObjectURL(new Blob(["onmessage="+va.toString()],{type:"text/javascript"}))):new Worker(x(c)?c:"worker/worker.js",{type:"module"})}catch(e){}return d}function Q(e){if(!(this instanceof Q))return new Q(e);var i=e.document||e.doc||e,s;this.K=[],this.h=[],this.A=[],this.register=v(),this.key=(s=i.key||i.id)&&S(s,this.A)||"id",this.m=u(e.fastupdate),this.C=(s=i.store)&&s!==!0&&[],this.store=s&&v(),this.I=(s=i.tag)&&S(s,this.A),this.l=s&&v(),this.cache=(s=e.cache)&&new J(s),e.cache=!1,this.o=e.worker,this.async=!1,s=v();let n=i.index||i.field||i;x(n)&&(n=[n]);for(let o=0,r,l;o<n.length;o++)r=n[o],x(r)||(l=r,r=r.field),l=C(l)?Object.assign({},e,l):e,this.o&&(s[r]=new O(l),s[r].o||(this.o=!1)),this.o||(s[r]=new K(l,this.register)),this.K[o]=S(r,this.A),this.h[o]=r;if(this.C)for(e=i.store,x(e)&&(e=[e]),i=0;i<e.length;i++)this.C[i]=S(e[i],this.A);this.index=s}function S(e,i){let s=e.split(":"),n=0;for(let o=0;o<s.length;o++)e=s[o],0<=e.indexOf("[]")&&(e=e.substring(0,e.length-2))&&(i[n]=!0),e&&(s[n++]=e);return n<s.length&&(s.length=n),1<n?s:s[0]}function T(e,i){if(x(i))e=e[i];else for(let s=0;e&&s<i.length;s++)e=e[i[s]];return e}function U(e,i,s,n,o){if(e=e[o],n===s.length-1)i[o]=e;else if(e)if(e.constructor===Array)for(i=i[o]=Array(e.length),o=0;o<e.length;o++)U(e,i,s,n,o);else i=i[o]||(i[o]=v()),o=s[++n],U(e,i,s,n,o)}function V(e,i,s,n,o,r,l,h){if(e=e[l])if(n===i.length-1){if(e.constructor===Array){if(s[n]){for(i=0;i<e.length;i++)o.add(r,e[i],!0,!0);return}e=e.join(" ")}o.add(r,e,h,!0)}else if(e.constructor===Array)for(l=0;l<e.length;l++)V(e,i,s,n,o,r,l,h);else l=i[++n],V(e,i,s,n,o,r,l,h)}t=Q.prototype,t.add=function(e,i,s){if(C(e)&&(i=e,e=T(i,this.key)),i&&(e||e===0)){if(!s&&this.register[e])return this.update(e,i);for(let n=0,o,r;n<this.h.length;n++)r=this.h[n],o=this.K[n],x(o)&&(o=[o]),V(i,o,this.A,0,this.index[r],e,o[0],s);if(this.I){let n=T(i,this.I),o=v();x(n)&&(n=[n]);for(let r=0,l,h;r<n.length;r++)if(l=n[r],!o[l]&&(o[l]=1,h=this.l[l]||(this.l[l]=[]),!s||!h.includes(e))&&(h[h.length]=e,this.m)){let f=this.register[e]||(this.register[e]=[]);f[f.length]=h}}if(this.store&&(!s||!this.store[e])){let n;if(this.C){n=v();for(let o=0,r;o<this.C.length;o++)r=this.C[o],x(r)?n[r]=i[r]:U(i,n,r,0,r[0])}this.store[e]=n||i}}return this},t.append=function(e,i){return this.add(e,i,!0)},t.update=function(e,i){return this.remove(e).add(e,i)},t.remove=function(e){if(C(e)&&(e=T(e,this.key)),this.register[e]){for(var i=0;i<this.h.length&&(this.index[this.h[i]].remove(e,!this.o),!this.m);i++);if(this.I&&!this.m)for(let s in this.l){i=this.l[s];let n=i.indexOf(e);n!==-1&&(1<i.length?i.splice(n,1):delete this.l[s])}this.store&&delete this.store[e],delete this.register[e]}return this},t.search=function(e,i,s,n){s||(!i&&C(e)?(s=e,e=""):C(i)&&(s=i,i=0));let o=[],r=[],l,h,f,g,p,q,w=0;if(s)if(s.constructor===Array)f=s,s=null;else{if(e=s.query||e,f=(l=s.pluck)||s.index||s.field,g=s.tag,h=this.store&&s.enrich,p=s.bool==="and",i=s.limit||i||100,q=s.offset||0,g&&(x(g)&&(g=[g]),!e)){for(let m=0,y;m<g.length;m++)(y=ya.call(this,g[m],i,q,h))&&(o[o.length]=y,w++);return w?o:[]}x(f)&&(f=[f])}f||(f=this.h),p=p&&(1<f.length||g&&1<g.length);let k=!n&&(this.o||this.async)&&[];for(let m=0,y,H,_;m<f.length;m++){let z;if(H=f[m],x(H)||(z=H,H=z.field,e=z.query||e,i=z.limit||i),k)k[m]=this.index[H].searchAsync(e,i,z||s);else{if(n?y=n[m]:y=this.index[H].search(e,i,z||s),_=y&&y.length,g&&_){let j=[],B=0;p&&(j[0]=[y]);for(let X=0,ee,R;X<g.length;X++)ee=g[X],(_=(R=this.l[ee])&&R.length)&&(B++,j[j.length]=p?[R]:R);B&&(y=p?ma(j,i||100,q||0):na(y,j),_=y.length)}if(_)r[w]=H,o[w++]=y;else if(p)return[]}}if(k){let m=this;return new Promise(function(y){Promise.all(k).then(function(H){y(m.search(e,i,s,H))})})}if(!w)return[];if(l&&(!h||!this.store))return o[0];for(let m=0,y;m<r.length;m++){if(y=o[m],y.length&&h&&(y=za.call(this,y)),l)return y;o[m]={field:r[m],result:y}}return o};function ya(e,i,s,n){let o=this.l[e],r=o&&o.length-s;if(r&&0<r)return(r>i||s)&&(o=o.slice(s,s+i)),n&&(o=za.call(this,o)),{tag:e,result:o}}function za(e){let i=Array(e.length);for(let s=0,n;s<e.length;s++)n=e[s],i[s]={id:n,doc:this.store[n]};return i}t.contain=function(e){return!!this.register[e]},t.get=function(e){return this.store[e]},t.set=function(e,i){return this.store[e]=i,this},t.searchCache=oa,t.export=function(e,i,s,n,o){if(o||(o=0),n||(n=0),n<this.h.length){let r=this.h[n],l=this.index[r];i=this,setTimeout(function(){l.export(e,i,o?r:"",n,o++)||(n++,o=1,i.export(e,i,r,n,o))})}else{let r,l;switch(o){case 1:r="tag",l=this.l;break;case 2:r="store",l=this.store;break;default:return}ra(e,this,s,r,n,o,l)}},t.import=function(e,i){if(i)switch(x(i)&&(i=JSON.parse(i)),e){case"tag":this.l=i;break;case"reg":this.m=!1,this.register=i;for(let n=0,o;n<this.h.length;n++)o=this.index[this.h[n]],o.register=i,o.m=!1;break;case"store":this.store=i;break;default:e=e.split(".");let s=e[0];e=e[1],s&&e&&this.index[s].import(e,i)}},la(Q.prototype);var Ba={encode:Aa,F:!1,G:""};let Ca=[F("[\xE0\xE1\xE2\xE3\xE4\xE5]"),"a",F("[\xE8\xE9\xEA\xEB]"),"e",F("[\xEC\xED\xEE\xEF]"),"i",F("[\xF2\xF3\xF4\xF5\xF6\u0151]"),"o",F("[\xF9\xFA\xFB\xFC\u0171]"),"u",F("[\xFD\u0177\xFF]"),"y",F("\xF1"),"n",F("[\xE7c]"),"k",F("\xDF"),"s",F(" & ")," and "];function Aa(e){var i=e=""+e;return i.normalize&&(i=i.normalize("NFD").replace(ea,"")),ca.call(this,i.toLowerCase(),!e.normalize&&Ca)}var Ea={encode:Da,F:!1,G:"strict"};let Fa=/[^a-z0-9]+/,Ga={b:"p",v:"f",w:"f",z:"s",x:"s",\u00DF:"s",d:"t",n:"m",c:"k",g:"k",j:"k",q:"k",i:"e",y:"e",u:"o"};function Da(e){e=Aa.call(this,e).join(" ");let i=[];if(e){let s=e.split(Fa),n=s.length;for(let o=0,r,l=0;o<n;o++)if((e=s[o])&&(!this.filter||!this.filter[e])){r=e[0];let h=Ga[r]||r,f=h;for(let g=1;g<e.length;g++){r=e[g];let p=Ga[r]||r;p&&p!==f&&(h+=p,f=p)}i[l++]=h}}return i}var Ia={encode:Ha,F:!1,G:""};let Ja=[F("ae"),"a",F("oe"),"o",F("sh"),"s",F("th"),"t",F("ph"),"f",F("pf"),"f",F("(?![aeo])h(?![aeo])"),"",F("(?!^[aeo])h(?!^[aeo])"),""];function Ha(e,i){return e&&(e=Da.call(this,e).join(" "),2<e.length&&(e=E(e,Ja)),i||(1<e.length&&(e=ha(e)),e&&(e=e.split(" ")))),e||[]}var La={encode:Ka,F:!1,G:""};let Ma=F("(?!\\b)[aeo]");function Ka(e){return e&&(e=Ha.call(this,e,!0),1<e.length&&(e=e.replace(Ma,"")),1<e.length&&(e=ha(e)),e&&(e=e.split(" "))),e||[]}G["latin:default"]=ja,G["latin:simple"]=Ba,G["latin:balance"]=Ea,G["latin:advanced"]=Ia,G["latin:extra"]=La;let W=self,Y,Z={Index:K,Document:Q,Worker:O,registerCharset:function(e,i){G[e]=i},registerLanguage:function(e,i){ka[e]=i}};(Y=W.define)&&Y.amd?Y([],function(){return Z}):W.exports?W.exports=Z:W.FlexSearch=Z})(exports)});var se=ce(ie());var $=document.getElementById("search__text"),A=document.getElementById("search__suggestions");$!==null&&document.addEventListener("keydown",e=>{e.ctrlKey&&e.key==="/"?(e.preventDefault(),$.focus()):e.key==="Escape"&&($.blur(),A.classList.add("search__suggestions--hidden"))});document.addEventListener("click",e=>{A.contains(e.target)||A.classList.add("search__suggestions--hidden")});document.addEventListener("keydown",e=>{if(A.classList.contains("search__suggestions--hidden"))return;let s=[...A.querySelectorAll("a")];if(s.length===0)return;let n=s.indexOf(document.activeElement);if(e.key==="ArrowDown"){e.preventDefault();let o=n+1<s.length?n+1:n;s[o].focus()}else e.key==="ArrowUp"&&(e.preventDefault(),nextIndex=n>0?n-1:0,s[nextIndex].focus())});(function(){let e=new se.Document({tokenize:"forward",cache:100,document:{id:"id",store:["href","title","description"],index:["title","description","content"]}});e.add({id:0,href:"/blog/oh-my-zsh/",title:"Oh my Zsh Install",description:`Install# Installing Oh My Zsh on a Linux system is a straightforward process that enhances the default shell with additional features and themes. Here\u2019s a step-by-step guide to install Oh My Zsh:
Prerequisites: Make sure you have zsh installed on your system. You can install it using your package manager. For example, on Ubuntu, you can install it with:
sudo apt update sudo apt install zsh Install Oh My Zsh: You can install Oh My Zsh via the curl or wget command.`,content:`Install# Installing Oh My Zsh on a Linux system is a straightforward process that enhances the default shell with additional features and themes. Here\u2019s a step-by-step guide to install Oh My Zsh:
Prerequisites: Make sure you have zsh installed on your system. You can install it using your package manager. For example, on Ubuntu, you can install it with:
sudo apt update sudo apt install zsh Install Oh My Zsh: You can install Oh My Zsh via the curl or wget command. Here are the commands for both methods:
Using curl:
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)" Change your default shell: After installing Oh My Zsh, you might want to change your default shell to zsh if it isn&rsquo;t already. You can do this by running:
chsh -s $(which zsh) You will need to log out and log back in to see this change.
Customize your environment: Oh My Zsh comes with lots of themes and plugins. You can change themes by modifying the ZSH_THEME variable in the ~/.zshrc file. Plugins can be added by editing the plugins array in the same file.
This will set up a robust, feature-rich shell environment using Oh My Zsh, making your terminal more user-friendly and visually appealing.
Oh my Zsh web: https://ohmyz.sh/
`}).add({id:1,href:"/blog/embed-video-files/",title:"Embed Video Files x",description:`Use the video shortcode to embed your video files from Hugo Page Resources.
`,content:`Use the video shortcode to embed your video files from Hugo Page Resources.
With a page bundle looking like the following:
embed-videos/ |-- index.md |-- my-video.jpg |-- my-video.mp4 |-- my-video.webm You can embed my-video like this:
{{&lt; video src=&#34;my-video&#34; autoplay=&#34;true&#34; controls=&#34;false&#34; loop=&#34;true&#34; &gt;}} The shortcode looks for media files matching the filename my-video*. For each video MIME type file, a &lt;source&gt; element is added. The first image MIME type file is used as poster (thumbnail). It will render the following HTML:
&lt;video autoplay loop poster=&#34;/blog/embed-videos/my-video.jpg&#34; width=&#34;100%&#34; playsinline &gt; &lt;source src=&#34;/blog/embed-videos/my-video.mp4&#34; type=&#34;video/mp4&#34; /&gt; &lt;source src=&#34;/blog/embed-videos/my-video.webm&#34; type=&#34;video/webm&#34; /&gt; &lt;/video&gt; You can set a Markdown caption, wrapping the &lt;video&gt; inside a &lt;figure&gt;.
Additionally, the shortcode allows you to set the following attributes:
Attribute Default autoplay false controls true height loop false muted true preload width 100% playsinline true Learn more about the &lt;video&gt; attributes here.
`}).add({id:2,href:"/blog/image-optimization/",title:"Image Optimization",description:`The theme optimizes images by default with a custom Hugo&rsquo;s markdown render hook:
The theme creates resized versions for each image, ranging from 100 to 700 pixels wide. It generates WebP versions for each size if the original image format isn&rsquo;t WebP. The theme keeps the original file format as a fallback for browsers that don&rsquo;t support the WebP format. Images in SVG format are embedded as-is. Blog Post Cover Images# Use the front matter of your posts to add cover images:`,content:`The theme optimizes images by default with a custom Hugo&rsquo;s markdown render hook:
The theme creates resized versions for each image, ranging from 100 to 700 pixels wide. It generates WebP versions for each size if the original image format isn&rsquo;t WebP. The theme keeps the original file format as a fallback for browsers that don&rsquo;t support the WebP format. Images in SVG format are embedded as-is. Blog Post Cover Images# Use the front matter of your posts to add cover images:
--- cover: src: alexandre-van-thuan-mr9FouttLGY-unsplash.jpg alt: The interior of Stadsbiblioteket in Stockholm - Gunnar Asplunds library from 1928. The architecture is a transition between neoclassicism and functionalism. caption: By [Alexandre Van Thuan](https://unsplash.com/photos/mr9FouttLGY) --- Captions# Add captions to your inline images like this:
--- ![Alt text](image-url.jpg &#34;Caption with **markdown support**&#34;) --- The main library in Vancouver is architecturally significant. The angles and levels contour together to produce a trippy scene. It&rsquo;s pretty from the outside but stunning from the inside. By Aaron Thomas JPEG and WebP Quality# The default quality is 75%. See the official Image Processing Config Hugo docs. Change it by adding the following to the config.toml file:
[imaging] quality = 75 Resizing# By default, the theme creates resized versions of images ranging from 300 to 700 pixels wide in increments of 100 pixels. Override the resize behavior by adding the following to the config.toml file:
[params] [params.imageResize] min = 300 max = 700 increment = 100 Lazy Loading# Images are lazily loaded by default using the loading=&quot;lazy&quot; attribute on HTML img tags.
`}).add({id:3,href:"/blog/prism-code-highlighting-showcase/",title:"Prism Code Highlighting Showcase",description:`This theme uses Prism for code highlighting. Other Hugo themes usually include a pre-configured version of Prism, which complicates updates and clutters the source code base with third-party JavaScript.
Only the Prism features you select in the Hugo site configuration are bundled by the build process. This way, Prism can be easily updated with npm and the size of the JavaScript and CSS bundles are minimized by only including what you need.
`,content:`This theme uses Prism for code highlighting. Other Hugo themes usually include a pre-configured version of Prism, which complicates updates and clutters the source code base with third-party JavaScript.
Only the Prism features you select in the Hugo site configuration are bundled by the build process. This way, Prism can be easily updated with npm and the size of the JavaScript and CSS bundles are minimized by only including what you need.
Here is a an example configuration demonstrating how to configure languages and plugins in the config.toml file of your Hugo site:
[params] [params.prism] languages = [ &#34;markup&#34;, &#34;css&#34;, &#34;clike&#34;, &#34;javascript&#34; ] plugins = [ &#34;normalize-whitespace&#34;, &#34;toolbar&#34;, &#34;copy-to-clipboard&#34; ] Languages# The following languages are available:
abap abnf actionscript ada agda al antlr4 apacheconf apex apl applescript aql arduino arff armasm arturo asciidoc asm6502 asmatmel aspnet autohotkey autoit avisynth avro-idl awk bash basic batch bbcode bbj bicep birb bison bnf bqn brainfuck brightscript bro bsl c cfscript chaiscript cil cilkc cilkcpp clike clojure cmake cobol coffeescript concurnas cooklang coq core cpp crystal csharp cshtml csp css-extras css csv cue cypher d dart dataweave dax dhall diff django dns-zone-file docker dot ebnf editorconfig eiffel ejs elixir elm erb erlang etlua excel-formula factor false firestore-security-rules flow fortran fsharp ftl gap gcode gdscript gedcom gettext gherkin git glsl gml gn go-module go gradle graphql groovy haml handlebars haskell haxe hcl hlsl hoon hpkp hsts http ichigojam icon icu-message-format idris iecst ignore inform7 ini io j java javadoc javadoclike javascript javastacktrace jexl jolie jq js-extras js-templates jsdoc json json5 jsonp jsstacktrace jsx julia keepalived keyman kotlin kumir kusto latex latte less lilypond linker-script liquid lisp livescript llvm log lolcode lua magma makefile markdown markup-templating markup mata matlab maxscript mel mermaid metafont mizar mongodb monkey moonscript n1ql n4js nand2tetris-hdl naniscript nasm neon nevod nginx nim nix nsis objectivec ocaml odin opencl openqasm oz parigp parser pascal pascaligo pcaxis peoplecode perl php-extras php phpdoc plant-uml plsql powerquery powershell processing prolog promql properties protobuf psl pug puppet pure purebasic purescript python q qml qore qsharp r racket reason regex rego renpy rescript rest rip roboconf robotframework ruby rust sas sass scala scheme scss shell-session smali smalltalk smarty sml solidity solution-file soy sparql splunk-spl sqf sql squirrel stan stata stylus supercollider swift systemd t4-cs t4-templating t4-vb tap tcl textile toml tremor tsx tt2 turtle twig typescript typoscript unrealscript uorazor uri v vala vbnet velocity verilog vhdl vim visual-basic warpscript wasm web-idl wgsl wiki wolfram wren xeora xml-doc xojo xquery yaml yang zig Plugins# Before using a plugin in production, read its documentation and test it thoroughly. E.g., the remove-initial-line-feed plugin is still available despite being deprecated in favor of normalize-whitespace.
Many Prism plugins require using &lt;pre&gt; tags with custom attributes. Hugo uses Goldmark as Markdown handler, which by default doesn&rsquo;t render raw inline HTML, so make sure to enable unsafe rendering if required:
[markup] [markup.goldmark] [markup.goldmark.renderer] unsafe = true The following plugins are available:
autolinker autoloader command-line copy-to-clipboard custom-class data-uri-highlight diff-highlight download-button file-highlight filter-highlight-all highlight-keywords inline-color jsonp-highlight keep-markup line-highlight line-numbers match-braces normalize-whitespace previewers remove-initial-line-feed show-invisibles show-language toolbar treeview unescaped-markup wpd Examples# Copy to Clipboard# copy-to-clipboard requires the toolbar plugin, so make sure to add it after adding toolbar in the config.toml file:
Config:
[params.prism] # ... plugins = [ &#34;toolbar&#34;, &#34;copy-to-clipboard&#34; ] Line Numbers# Config:
[params.prism] plugins = [ &#34;line-numbers&#34; ] Input:
&lt;pre class=&#34;line-numbers&#34;&gt; &lt;code&gt; Example &lt;/code&gt; &lt;/pre&gt; Output:
Hello, World! Foo Bar Command Line# Config:
[params.prism] languages = [ &#34;bash&#34; ] plugins = [ &#34;command-line&#34; ] Input:
&lt;pre class=&#34;command-line language-bash&#34; data-user=&#34;root&#34; data-host=&#34;localhost&#34;&gt; &lt;code&gt; cd /usr/local/etc cp php.ini php.ini.bak vi php.ini &lt;/code&gt; &lt;/pre&gt; &lt;pre class=&#34;command-line language-bash&#34; data-user=&#34;chris&#34; data-host=&#34;remotehost&#34; data-output=&#34;2, 4-8&#34; &gt; &lt;code&gt; pwd /usr/home/chris/bin ls -la total 2 drwxr-xr-x 2 chris chris 11 Jan 10 16:48 . drwxr--r-x 45 chris chris 92 Feb 14 11:10 .. -rwxr-xr-x 1 chris chris 444 Aug 25 2013 backup -rwxr-xr-x 1 chris chris 642 Jan 17 14:42 deploy &lt;/code&gt; &lt;/pre&gt; Output:
cd /usr/local/etc cp php.ini php.ini.bak vi php.ini pwd /usr/home/chris/bin ls -la total 2 drwxr-xr-x 2 chris chris 11 Jan 10 16:48 . drwxr--r-x 45 chris chris 92 Feb 14 11:10 .. -rwxr-xr-x 1 chris chris 444 Aug 25 2013 backup -rwxr-xr-x 1 chris chris 642 Jan 17 14:42 deploy Diff Highlight# Config:
[params.prism] languages = [ &#34;javascript&#34;, &#34;diff&#34; ] plugins = [ &#34;diff-highlight&#34; ] Input:
&lt;pre class=&#34;language-diff-javascript diff-highlight&#34;&gt; &lt;code&gt; @@ -4,6 +4,5 @@ - let foo = bar.baz([1, 2, 3]); - foo = foo + 1; + const foo = bar.baz([1, 2, 3]) + 1; console.log(\`foo: \${foo}\`); &lt;/code&gt; &lt;/pre&gt; Output:
@@ -4,6 +4,5 @@ - let foo = bar.baz([1, 2, 3]); - foo = foo + 1; + const foo = bar.baz([1, 2, 3]) + 1; console.log(\`foo: \${foo}\`); `}).add({id:4,href:"/blog/markdown-syntax/",title:"Markdown Syntax Guide",description:"Sample article showcasing basic Markdown syntax and formatting for HTML elements.",content:`This article offers a sample of basic Markdown syntax that can be used in Hugo content files, also it shows whether basic HTML elements are decorated with CSS in a Hugo theme.
Headings# The following HTML &lt;h1&gt;\u2014&lt;h6&gt; elements represent six levels of section headings. &lt;h1&gt; is the highest section level while &lt;h6&gt; is the lowest.
H1# H2# H3# H4# H5# H6# Paragraph# Xerum, quo qui aut unt expliquam qui dolut labo. Aque venitatiusda cum, voluptionse latur sitiae dolessi aut parist aut dollo enim qui voluptate ma dolestendit peritin re plis aut quas inctum laceat est volestemque commosa as cus endigna tectur, offic to cor sequas etum rerum idem sintibus eiur? Quianimin porecus evelectur, cum que nis nust voloribus ratem aut omnimi, sitatur? Quiatem. Nam, omnis sum am facea corem alique molestrunt et eos evelece arcillit ut aut eos eos nus, sin conecerem erum fuga. Ri oditatquam, ad quibus unda veliamenimin cusam et facea ipsamus es exerum sitate dolores editium rerore eost, temped molorro ratiae volorro te reribus dolorer sperchicium faceata tiustia prat.
Itatur? Quiatae cullecum rem ent aut odis in re eossequodi nonsequ idebis ne sapicia is sinveli squiatum, core et que aut hariosam ex eat.
Blockquotes# The blockquote element represents content that is quoted from another source, optionally with a citation which must be within a footer or cite element, and optionally with in-line changes such as annotations and abbreviations.
Blockquote without attribution# Tiam, ad mint andaepu dandae nostion secatur sequo quae. Note that you can use Markdown syntax within a blockquote.
Blockquote with attribution# Don&rsquo;t communicate by sharing memory, share memory by communicating.
\u2014 Rob Pike1
Tables# Tables aren&rsquo;t part of the core Markdown spec, but Hugo supports supports them out-of-the-box.
Name Age Bob 27 Alice 23 Inline Markdown within tables# Italics Bold Code italics bold code Code Blocks# Code block with backticks# &lt;!doctype html&gt; &lt;html lang=&#34;en&#34;&gt; &lt;head&gt; &lt;meta charset=&#34;utf-8&#34;&gt; &lt;title&gt;Example HTML5 Document&lt;/title&gt; &lt;/head&gt; &lt;body&gt; &lt;p&gt;Test&lt;/p&gt; &lt;/body&gt; &lt;/html&gt; Code block indented with four spaces# &lt;!doctype html&gt; &lt;html lang=&quot;en&quot;&gt; &lt;head&gt; &lt;meta charset=&quot;utf-8&quot;&gt; &lt;title&gt;Example HTML5 Document&lt;/title&gt; &lt;/head&gt; &lt;body&gt; &lt;p&gt;Test&lt;/p&gt; &lt;/body&gt; &lt;/html&gt; Code block with Hugo&rsquo;s internal highlight shortcode# &lt;!doctype html&gt; &lt;html lang=&#34;en&#34;&gt; &lt;head&gt; &lt;meta charset=&#34;utf-8&#34;&gt; &lt;title&gt;Example HTML5 Document&lt;/title&gt; &lt;/head&gt; &lt;body&gt; &lt;p&gt;Test&lt;/p&gt; &lt;/body&gt; &lt;/html&gt; List Types# Ordered List# First item Second item Third item Unordered List# List item Another item And another item Nested list# Fruit Apple Orange Banana Dairy Milk Cheese Other Elements \u2014 abbr, sub, sup, kbd, mark# GIF is a bitmap image format.
H2O
Xn + Yn = Zn
Press CTRL+ALT+Delete to end the session.
Most salamanders are nocturnal, and hunt for insects, worms, and other small creatures.
The above quote is excerpted from Rob Pike&rsquo;s talk during Gopherfest, November 18, 2015.&#160;&#x21a9;&#xfe0e;
`}).add({id:5,href:"/blog/rich-content/",title:"Rich Content",description:"A brief description of Hugo Shortcodes",content:`Hugo ships with several Built-in Shortcodes for rich content, along with a Privacy Config and a set of Simple Shortcodes that enable static and no-JS versions of various social media embeds.
YouTube Privacy Enhanced Shortcode# Twitter Simple Shortcode# \u201CIn addition to being more logical, asymmetry has the advantage that its complete appearance is far more optically effective than symmetry.\u201D
\u2014 Jan Tschichold pic.twitter.com/gcv7SrhvJb
&mdash; Design Reviewed | Graphic Design History (@DesignReviewed) January 17, 2019 Vimeo Simple Shortcode# `}).add({id:6,href:"/blog/placeholder-text/",title:"Placeholder Text",description:"Lorem Ipsum Dolor Si Amet",content:`Lorem est tota propiore conpellat pectoribus de pectora summo.
Redit teque digerit hominumque toris verebor lumina non cervice subde tollit usus habet Arctonque, furores quas nec ferunt. Quoque montibus nunc caluere tempus inhospita parcite confusaque translucet patri vestro qui optatis lumine cognoscere flos nubis! Fronde ipsamque patulos Dryopen deorum.
Exierant elisi ambit vivere dedere Duce pollice Eris modo Spargitque ferrea quos palude Rursus nulli murmur; hastile inridet ut ab gravi sententia! Nomine potitus silentia flumen, sustinet placuit petis in dilapsa erat sunt. Atria tractus malis.
Comas hunc haec pietate fetum procerum dixit Post torum vates letum Tiresia Flumen querellas Arcanaque montibus omnes Quidem et Vagus elidunt# The Van de Graaf Canon
Mane refeci capiebant unda mulcebat# Victa caducifer, malo vulnere contra dicere aurato, ludit regale, voca! Retorsit colit est profanae esse virescere furit nec; iaculi matertera et visa est, viribus. Divesque creatis, tecta novat collumque vulnus est, parvas. Faces illo pepulere tempus adest. Tendit flamma, ab opes virum sustinet, sidus sequendo urbis.
Iubar proles corpore raptos vero auctor imperium; sed et huic: manus caeli Lelegas tu lux. Verbis obstitit intus oblectamina fixis linguisque ausus sperare Echionides cornuaque tenent clausit possit. Omnia putatur. Praeteritae refert ausus; ferebant e primus lora nutat, vici quae mea ipse. Et iter nil spectatae vulnus haerentia iuste et exercebat, sui et.
Eurytus Hector, materna ipsumque ut Politen, nec, nate, ignari, vernum cohaesit sequitur. Vel mitis temploque vocatus, inque alis, oculos nomen non silvis corpore coniunx ne displicet illa. Crescunt non unus, vidit visa quantum inmiti flumina mortis facto sic: undique a alios vincula sunt iactata abdita! Suspenderat ego fuit tendit: luna, ante urbem Propoetides parte.
`}).add({id:7,href:"/blog/math-typesetting/",title:"Math Typesetting",description:"A brief guide to setup KaTeX",content:`Mathematical notation in a Hugo project can be enabled by using third party JavaScript libraries.
In this example we will be using KaTeX
Create a partial under /layouts/partials/math.html Within this partial reference the Auto-render Extension or host these scripts locally. Include the partial in your templates like so: {{ if or .Params.math .Site.Params.math }} {{ partial &#34;math.html&#34; . }} {{ end }} To enable KaTex globally set the parameter math to true in a project&rsquo;s configuration To enable KaTex on a per page basis include the parameter math: true in content files Note: Use the online reference of Supported TeX Functions
Examples# Block math: $$ \\varphi = 1+\\frac{1} {1+\\frac{1} {1+\\frac{1} {1+\\cdots} } } $$
`}).add({id:8,href:"/blog/emoji-support/",title:"Emoji Support",description:"Guide to emoji usage in Hugo",content:`Emoji can be enabled in a Hugo project in a number of ways.
The emojify function can be called directly in templates or Inline Shortcodes.
To enable emoji globally, set enableEmoji to true in your site&rsquo;s configuration and then you can type emoji shorthand codes directly in content files; e.g.
\u{1F648} :see_no_evil: \u{1F649} :hear_no_evil: \u{1F64A} :speak_no_evil:
The Emoji cheat sheet is a useful reference for emoji shorthand codes.
N.B. The above steps enable Unicode Standard emoji characters and sequences in Hugo, however the rendering of these glyphs depends on the browser and the platform. To style the emoji you can either use a third party emoji font or a font stack; e.g.
.emoji { font-family: Apple Color Emoji, Segoe UI Emoji, NotoColorEmoji, Segoe UI Symbol, Android Emoji, EmojiSymbols; }`}),$.addEventListener("input",function(){let s=this.value,n=e.search(s,5,{enrich:!0}),o=new Map;for(let r of n.flatMap(l=>l.result))o.has(r.href)||o.set(r.doc.href,r.doc);if(A.innerHTML="",A.classList.remove("search__suggestions--hidden"),o.size===0&&s){let r=document.createElement("div");r.innerHTML=`No results for "<strong>${s}</strong>"`,r.classList.add("search__no-results"),A.appendChild(r);return}for(let[r,l]of o){let h=document.createElement("a");h.href=r,h.classList.add("search__suggestion-item"),A.appendChild(h);let f=document.createElement("div");f.textContent=l.title,f.classList.add("search__suggestion-title"),h.appendChild(f);let g=document.createElement("div");if(g.textContent=l.description,g.classList.add("search__suggestion-description"),h.appendChild(g),A.childElementCount===5)break}})})();})();
//! Source: https://github.com/h-enk/doks/blob/master/assets/js/index.js
/*! Source: https://dev.to/shubhamprakash/trap-focus-using-javascript-6a3 */
//! Source: https://discourse.gohugo.io/t/range-length-or-last-element/3803/2
