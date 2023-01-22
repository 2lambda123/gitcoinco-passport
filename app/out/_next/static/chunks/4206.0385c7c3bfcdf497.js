"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4206],{36431:function(e,t,n){n.d(t,{b:function(){return o}});var r=n(18804),i=n(65348),a=n(27554),s=n(14512);function o(e,t,n){var o=(0,r.m)(e)||t||n?{next:e,error:t,complete:n}:e;return o?(0,i.e)((function(e,t){var n;null===(n=o.subscribe)||void 0===n||n.call(o);var r=!0;e.subscribe((0,a.x)(t,(function(e){var n;null===(n=o.next)||void 0===n||n.call(o,e),t.next(e)}),(function(){var e;r=!1,null===(e=o.complete)||void 0===e||e.call(o),t.complete()}),(function(e){var n;r=!1,null===(n=o.error)||void 0===n||n.call(o,e),t.error(e)}),(function(){var e,t;r&&(null===(e=o.unsubscribe)||void 0===e||e.call(o)),null===(t=o.finalize)||void 0===t||t.call(o)})))})):s.y}},84206:function(e,t,n){n.r(t),n.d(t,{EthereumAuthProvider:function(){return r.KS},SelfID:function(){return le},WebClient:function(){return O},WebClientSession:function(){return se}});var r=n(42045),i=n(61252),a=n(68772),s=n(52079),o=n(80598),c=n(16621);class u extends i.x{next(e){this._sink.next?.(e)}error(e){this._sink.error?.(e)}complete(){this._sink.complete?.()}_subscribe(e){return this._source.subscribe(e)??a.w0.EMPTY}constructor(e,t){super(),this._source=e,this._sink=t}}function d(e){return function(t){return{__tw:!0,ns:e,msg:t}}}function h(e){return function(t){if(!0!==t.__tw)throw new Error("Input is not a wrapped message");if("string"!==typeof t.ns)throw new Error("Invalid namespace type for wrapped message: expected a string, got "+typeof t.ns);if(t.ns!==e)throw new Error(`Invalid namespace for wrapped message: expected ${e}, got ${t.ns}`);return t.msg}}function l(e){return{wrap:d(e),unwrap:h(e)}}function p(e,t={}){if(t.throwWhenInvalid)return(0,s.z)((0,o.U)(e));const n="function"===typeof t.onInvalidInput?t.onInvalidInput:function(e,t){console.warn("Invalid transport input",e,t)};return(0,s.z)((0,o.U)((t=>{try{return e(t)}catch(r){return n(t,r),null}})),(0,c.h)((e=>null!==e)))}function w(e,t){return{...e,next:n=>{null!=n&&e.next(t(n))}}}var f=n(47156);function m(e,t){const n=(0,f.R)(e,"message");if(null==t)return n;const r="function"===typeof t?t:(i=t,Array.isArray(i)||(i=[i]),e=>i.includes(e.origin));var i;return n.pipe((0,c.h)(r))}var v=n(91461),g=n(72116),y=n(5986),b=n(36431),x=n(43410);function I({filter:e,methods:t,namespace:n,target:r,...i}){const a=d(n);return m(r,e).pipe(function(e,t,n={}){const r=(0,v.on)(e,n),i=h(t);return(0,s.z)((0,o.U)((e=>{try{const t=i(e.data);return t.method?{type:"request",message:e,request:t}:null}catch(t){return null}})),(0,c.h)((e=>null!==e)),(0,y.z)((async e=>({type:"handled",message:e.message,request:e.request,response:await r(e.message,e.request)}))))}(t,n,i),(0,b.b)((e=>{if(null!=e.response){(e.message.source??window).postMessage(a(e.response),e.message.origin||"*")}})))}function S(e,t,n){const r=function(e,t,n){const r=l(t),i=w(e,r.wrap),a=p(r.unwrap,n);return async function(t){return new Promise(((n,r)=>{const s=e.pipe((0,o.U)((e=>e.data)),a,(0,x.P)((e=>null!=e&&e.id===t.id&&("error"in e||"result"in e)))).subscribe({next:e=>{n(e),s.unsubscribe()},error:r});i.next(t)}))}}(e,t,n);return new g.O({send:r})}const E={onInvalidInput:(e,t)=>{},postMessageArguments:["*"]};function _(e,t=window,n=E){const r=function(e,t=e,n={}){const r=n.postMessageArguments??[],i=m(e,n.filter),a=function(e,...t){return{next:n=>{null!=n&&e.postMessage(n,...t)}}}(t,...r);return new u(i,a)}(window,t,n);return S(r,e,n)}function P(e,t,n=window){return I({methods:t,namespace:e,target:n})}const D="3id-connect-iframedisplay",k="3id-connect-managedisplay",z="position: fixed; width:0; height:0; border:0; border:none !important";function C(e){const t=(e=>(t=!1,n="245px",r="440px")=>{e.style=`border:none; border:0; z-index: 99997; position: fixed; max-width: 100%; width: ${r}; height: ${n}; ${t?"bottom: 0px; left: 0px;":"top: 0px; right: 0px"}`})(e),n=(e=>()=>e.style=z)(e);return P(D,{hide:()=>{n()},display:(e,{mobile:n,height:r,width:i})=>{t(n,r,i)}})}const T=e=>{const t=document.createElement("iframe");return t.name="threeid-connect-manage",t.className="threeid-connect-manage",t.src=e,t.allowtransparency=!1,t.style="border:none; border:0; z-index: 99998; position: fixed; width: 100%; height: 100%; top: 0; left: 0;",t};n(80310);var A=n(14284);let M="3id-connect-authprovider";"undefined"!==typeof A&&(M=A.env.NAMESPACE||"3id-connect-authprovider");const W=["dev-unstable","testnet-clay","mainnet","local"],B={"dev-unstable":"https://app-dev.3idconnect.org/v2","testnet-clay":"https://app-clay.3idconnect.org/v2",mainnet:"https://app.3idconnect.org/v2",local:"http://localhost:30001/v2"},$=e=>B[e];class q{get isDidProvider(){return!0}async send(e){return this._client.connection.send(e)}constructor(e,t="3id-connect-did-provider"){this._client=_(t,e)}}class N{async connect(e){this._authProviderSubscription&&this._authProviderSubscription.unsubscribe(),e&&await this.setAuthProvider(e),await this.iframeLoadedPromise,this._authProviderSubscription=function(e,t=M){return P(t,{accountId:async()=>(await e.accountId()).toString(),authenticate:async(t,{message:n})=>await e.authenticate(n),createLink:async(t,{did:n})=>await e.createLink(n)})}(e).subscribe(),C(this.iframe).subscribe(),function(e){let t;return P(k,{display:async(n,{accountId:r})=>{t=T(`${e}?accountId=${r}`),document.body.appendChild(t),await new Promise((e=>{t.onload=e}));const i=m(window);await i.pipe((0,x.P)((e=>"3id-connect-management"===e.data.ns))).toPromise(),t.remove()}})}(this.manageUrl).subscribe(),this._connected=!0}async setAuthProvider(e){this.authProvider=e,this.accountId=(await this.authProvider.accountId()).toString()}get connected(){return this._connected}getDidProvider(){if(!this.authProvider)throw new Error("setAuthProvider required");if(!this.iframe.contentWindow)throw new Error("3id connect iframe service not found");return new q(this.iframe.contentWindow)}constructor(e){this._authProviderSubscription=null,this._connected=!1,(()=>{if("undefined"===typeof window||"undefined"===typeof document)throw new Error("ThreeIdConnect not supported in this enviroment")})();const t=(e=>W.includes(e))(e||"")?$(e):e||$("testnet-clay");this.iframe=(e=>{const t=document.createElement("iframe");return t.name="threeid-connect",t.className="threeid-connect",t.src=e,t.style=z,t.allowTransparency=!0,t.frameBorder=0,t})(`${t}/index.html`),this.manageUrl=(e=>`${e}/management.html`)(t),this.iframeLoadedPromise=new Promise((e=>{this.iframe.onload=()=>{e()}})),document.body.appendChild(this.iframe)}}var L=n(39021),U=n(96388);class O extends L.Q{get threeId(){return this._threeId}async authenticate(e,t=!0){const n=await this.connect(e);return await n.authenticate(),t&&(this.ceramic.did=n),n}async connect(e){return await this._threeId.connect(e),new U.y({provider:this._threeId.getDidProvider(),resolver:this.resolver})}constructor(e){super(e),this._threeId=new N(e.connectNetwork??e.ceramic)}}var j=n(51500),K=n(79338),R=n(35530),J=n(27417);function Q(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}function Y(e,t){return function(e,t){return t.get?t.get.call(e):t.value}(e,Q(e,t,"get"))}function Z(e,t,n){!function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(e,t),t.set(e,n)}function F(e,t,n){return function(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=n}}(e,Q(e,t,"set"),n),n}async function G(e){const t=new j.o(e||(0,R.randomBytes)(32)),n=new U.y({provider:t,resolver:K.Z.getResolver()});return await n.authenticate(),n}var H=new WeakMap,V=new WeakMap,X=new WeakMap;class ee{static async authorize(e,t={}){if(!t.resources||0===t.resources.length)throw new Error("Required: resource argument option when authorizing");const n=(0,R.randomBytes)(32),r=await G(n);if(t.expiresInSecs){const e=new Date(Date.now()+1e3*t.expiresInSecs);t.expirationTime=e.toISOString()}const i=await e.requestCapability(r.id,[],t),a=await async function(e,t){const n=e.withCapability(t);return await n.authenticate(),n}(r,i);return new ee({cacao:i,keySeed:n,did:a})}static async initDID(e,t){const n=e.withCapability(t);return await n.authenticate(),n}get did(){return Y(this,H)}serialize(){const e={sessionKeySeed:(t=Y(this,V),J.BB(t,"base64pad")),cacao:Y(this,X)};var t,n;return n=e,J.BB(J.mL(JSON.stringify(n)),"base64url")}static async fromSession(e){const{sessionKeySeed:t,cacao:n}=(r=e,JSON.parse(J.BB(J.mL(r,"base64url"))));var r;const i=function(e){return J.mL(e,"base64pad")}(t),a=await G(i),s=await ee.initDID(a,n);return new ee({cacao:n,keySeed:i,did:s})}get hasSession(){return!!Y(this,X)&&!!Y(this,H)}get isExpired(){const e=Y(this,X).p.exp;return!!e&&Date.parse(e)<Date.now()}get expireInSecs(){const e=Y(this,X).p.exp;if(!e)throw new Error("Session does not expire");const t=Date.parse(e)-Date.now();return t<0?0:t/1e3}get authorizations(){return Y(this,X)?.p.resources??[]}get cacao(){return Y(this,X)}isAuthorized(e){return!(!this.hasSession||this.isExpired)&&(!e||e.every((e=>this.authorizations.includes(e))))}get id(){return Y(this,H).parent}constructor(e){Z(this,H,{writable:!0,value:void 0}),Z(this,V,{writable:!0,value:void 0}),Z(this,X,{writable:!0,value:void 0}),F(this,V,e.keySeed),F(this,X,e.cacao),F(this,H,e.did)}}function te(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}function ne(e,t){return function(e,t){return t.get?t.get.call(e):t.value}(e,te(e,t,"get"))}function re(e,t,n){!function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(e,t),t.set(e,n)}function ie(e,t,n){return function(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=n}}(e,te(e,t,"set"),n),n}var ae=new WeakMap;class se extends L.Q{async authenticate(e,t=!0,n){ie(this,ae,n?await ee.fromSession(n):await ee.authorize(e,{resources:["ceramic://*"]}));const r=ne(this,ae).did;return t&&(this.ceramic.did=r),r}get session(){return ne(this,ae)}constructor(...e){super(...e),re(this,ae,{writable:!0,value:void 0})}}function oe(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}function ce(e,t){return function(e,t){return t.get?t.get.call(e):t.value}(e,oe(e,t,"get"))}function ue(e,t,n){!function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(e,t),t.set(e,n)}function de(e,t,n){return function(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=n}}(e,oe(e,t,"set"),n),n}var he=new WeakMap;class le{static async authenticate(e){const{authProvider:t,session:n,...r}=e,i=n?new se(r):new O(r);return await i.authenticate(t,!0,r.sessionStr),new le({client:i})}get client(){return ce(this,he)}get did(){const e=ce(this,he).ceramic.did;if(null==e||!e.authenticated)throw new Error("Expected authenticated DID instance to be attached to Ceramic");return e}get id(){return this.did.hasParent?this.did.parent:this.did.id}async get(e){return await ce(this,he).dataStore.get(e,this.id)}async set(e,t){return await ce(this,he).dataStore.set(e,t)}async merge(e,t){return await ce(this,he).dataStore.merge(e,t)}constructor(e){if(ue(this,he,{writable:!0,value:void 0}),!e.client.ceramic.did?.authenticated)throw new Error("Input DID must be authenticated, use SelfID.authenticate() instead of new SelfID()");de(this,he,e.client)}}}}]);