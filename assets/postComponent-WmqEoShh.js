import{h as et,i as JI,x as ZI,r as Ke,j as eC,_ as Dp,o as tc,l as Lp,a as Te,c as Se,b as H,q as rt,w as ui,A as ao,p as _o,t as lo,k as Mp,v as Up,m as co,F as Pr,B as Fp,C as Bp,D as lf,d as tC,y as nC,e as iC,f as Nl}from"./index-JD8BTwNI.js";var cf={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wp={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M=function(n,e){if(!n)throw nr(e)},nr=function(n){return new Error("Firebase Database ("+Wp.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hp=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let o=n.charCodeAt(r);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(o=65536+((o&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},rC=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const o=n[t++];if(o<128)e[r++]=String.fromCharCode(o);else if(o>191&&o<224){const a=n[t++];e[r++]=String.fromCharCode((o&31)<<6|a&63)}else if(o>239&&o<365){const a=n[t++],c=n[t++],h=n[t++],d=((o&7)<<18|(a&63)<<12|(c&63)<<6|h&63)-65536;e[r++]=String.fromCharCode(55296+(d>>10)),e[r++]=String.fromCharCode(56320+(d&1023))}else{const a=n[t++],c=n[t++];e[r++]=String.fromCharCode((o&15)<<12|(a&63)<<6|c&63)}}return e.join("")},Ac={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let o=0;o<n.length;o+=3){const a=n[o],c=o+1<n.length,h=c?n[o+1]:0,d=o+2<n.length,p=d?n[o+2]:0,y=a>>2,v=(a&3)<<4|h>>4;let E=(h&15)<<2|p>>6,T=p&63;d||(T=64,c||(E=64)),r.push(t[y],t[v],t[E],t[T])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Hp(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):rC(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let o=0;o<n.length;){const a=t[n.charAt(o++)],h=o<n.length?t[n.charAt(o)]:0;++o;const p=o<n.length?t[n.charAt(o)]:64;++o;const v=o<n.length?t[n.charAt(o)]:64;if(++o,a==null||h==null||p==null||v==null)throw new sC;const E=a<<2|h>>4;if(r.push(E),p!==64){const T=h<<4&240|p>>2;if(r.push(T),v!==64){const A=p<<6&192|v;r.push(A)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class sC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const $p=function(n){const e=Hp(n);return Ac.encodeByteArray(e,!0)},go=function(n){return $p(n).replace(/\./g,"")},mo=function(n){try{return Ac.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oC(n){return Vp(void 0,n)}function Vp(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!aC(t)||(n[t]=Vp(n[t],e[t]));return n}function aC(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cC=()=>lC().__FIREBASE_DEFAULTS__,uC=()=>{if(typeof process>"u"||typeof cf>"u")return;const n=cf.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},hC=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&mo(n[1]);return e&&JSON.parse(e)},Rc=()=>{try{return cC()||uC()||hC()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},qp=n=>{var e,t;return(t=(e=Rc())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Gp=n=>{const e=qp(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},zp=()=>{var n;return(n=Rc())===null||n===void 0?void 0:n.config},Kp=n=>{var e;return(e=Rc())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yp(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",o=n.iat||0,a=n.sub||n.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:o,exp:o+3600,auth_time:o,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}}},n);return[go(JSON.stringify(t)),go(JSON.stringify(c)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Nc(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(st())}function dC(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function jp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function fC(){const n=st();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Qp(){return Wp.NODE_ADMIN===!0}function pC(){try{return typeof indexedDB=="object"}catch{return!1}}function _C(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(r);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var a;e(((a=o.error)===null||a===void 0?void 0:a.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gC="FirebaseError";class In extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=gC,Object.setPrototypeOf(this,In.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Zr.prototype.create)}}class Zr{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},o=`${this.service}/${e}`,a=this.errors[e],c=a?mC(a,r):"Error",h=`${this.serviceName}: ${c} (${o}).`;return new In(o,h,r)}}function mC(n,e){return n.replace(vC,(t,r)=>{const o=e[r];return o!=null?String(o):`<${r}?>`})}const vC=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wr(n){return JSON.parse(n)}function Qe(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xp=function(n){let e={},t={},r={},o="";try{const a=n.split(".");e=Wr(mo(a[0])||""),t=Wr(mo(a[1])||""),o=a[2],r=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:r,signature:o}},yC=function(n){const e=Xp(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},wC=function(n){const e=Xp(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tn(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function ji(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function nc(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function vo(n,e,t){const r={};for(const o in n)Object.prototype.hasOwnProperty.call(n,o)&&(r[o]=e.call(t,n[o],o,n));return r}function yo(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const o of t){if(!r.includes(o))return!1;const a=n[o],c=e[o];if(uf(a)&&uf(c)){if(!yo(a,c))return!1}else if(a!==c)return!1}for(const o of r)if(!t.includes(o))return!1;return!0}function uf(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ir(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EC{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const r=this.W_;if(typeof e=="string")for(let v=0;v<16;v++)r[v]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let v=0;v<16;v++)r[v]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let v=16;v<80;v++){const E=r[v-3]^r[v-8]^r[v-14]^r[v-16];r[v]=(E<<1|E>>>31)&4294967295}let o=this.chain_[0],a=this.chain_[1],c=this.chain_[2],h=this.chain_[3],d=this.chain_[4],p,y;for(let v=0;v<80;v++){v<40?v<20?(p=h^a&(c^h),y=1518500249):(p=a^c^h,y=1859775393):v<60?(p=a&c|h&(a|c),y=2400959708):(p=a^c^h,y=3395469782);const E=(o<<5|o>>>27)+p+d+y+r[v]&4294967295;d=h,h=c,c=(a<<30|a>>>2)&4294967295,a=o,o=E}this.chain_[0]=this.chain_[0]+o&4294967295,this.chain_[1]=this.chain_[1]+a&4294967295,this.chain_[2]=this.chain_[2]+c&4294967295,this.chain_[3]=this.chain_[3]+h&4294967295,this.chain_[4]=this.chain_[4]+d&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const r=t-this.blockSize;let o=0;const a=this.buf_;let c=this.inbuf_;for(;o<t;){if(c===0)for(;o<=r;)this.compress_(e,o),o+=this.blockSize;if(typeof e=="string"){for(;o<t;)if(a[c]=e.charCodeAt(o),++c,++o,c===this.blockSize){this.compress_(a),c=0;break}}else for(;o<t;)if(a[c]=e[o],++c,++o,c===this.blockSize){this.compress_(a),c=0;break}}this.inbuf_=c,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let o=this.blockSize-1;o>=56;o--)this.buf_[o]=t&255,t/=256;this.compress_(this.buf_);let r=0;for(let o=0;o<5;o++)for(let a=24;a>=0;a-=8)e[r]=this.chain_[o]>>a&255,++r;return e}}function bC(n,e){const t=new IC(n,e);return t.subscribe.bind(t)}class IC{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let o;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");CC(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:r},o.next===void 0&&(o.next=kl),o.error===void 0&&(o.error=kl),o.complete===void 0&&(o.complete=kl);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),a}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function CC(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function kl(){}function Bo(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TC=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let o=n.charCodeAt(r);if(o>=55296&&o<=56319){const a=o-55296;r++,M(r<n.length,"Surrogate pair missing trail surrogate.");const c=n.charCodeAt(r)-56320;o=65536+(a<<10)+c}o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):o<65536?(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},Wo=function(n){let e=0;for(let t=0;t<n.length;t++){const r=n.charCodeAt(t);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,t++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ot(n){return n&&n._delegate?n._delegate:n}class Kn{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ai="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SC{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Jr;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&r.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(a){if(o)return null;throw a}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(RC(e))try{this.getOrInitializeService({instanceIdentifier:ai})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const a=this.getOrInitializeService({instanceIdentifier:o});r.resolve(a)}catch{}}}}clearInstance(e=ai){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ai){return this.instances.has(e)}getOptions(e=ai){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[a,c]of this.instancesDeferred.entries()){const h=this.normalizeInstanceIdentifier(a);r===h&&c.resolve(o)}return o}onInit(e,t){var r;const o=this.normalizeInstanceIdentifier(t),a=(r=this.onInitCallbacks.get(o))!==null&&r!==void 0?r:new Set;a.add(e),this.onInitCallbacks.set(o,a);const c=this.instances.get(o);return c&&e(c,o),()=>{a.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const o of r)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:AC(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ai){return this.component?this.component.multipleInstances?e:ai:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function AC(n){return n===ai?void 0:n}function RC(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new SC(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ye;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ye||(ye={}));const kC={debug:ye.DEBUG,verbose:ye.VERBOSE,info:ye.INFO,warn:ye.WARN,error:ye.ERROR,silent:ye.SILENT},OC=ye.INFO,xC={[ye.DEBUG]:"log",[ye.VERBOSE]:"log",[ye.INFO]:"info",[ye.WARN]:"warn",[ye.ERROR]:"error"},PC=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),o=xC[e];if(o)console[o](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class kc{constructor(e){this.name=e,this._logLevel=OC,this._logHandler=PC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ye))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?kC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ye.DEBUG,...e),this._logHandler(this,ye.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ye.VERBOSE,...e),this._logHandler(this,ye.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ye.INFO,...e),this._logHandler(this,ye.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ye.WARN,...e),this._logHandler(this,ye.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ye.ERROR,...e),this._logHandler(this,ye.ERROR,...e)}}const DC=(n,e)=>e.some(t=>n instanceof t);let hf,df;function LC(){return hf||(hf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function MC(){return df||(df=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Jp=new WeakMap,ic=new WeakMap,Zp=new WeakMap,Ol=new WeakMap,Oc=new WeakMap;function UC(n){const e=new Promise((t,r)=>{const o=()=>{n.removeEventListener("success",a),n.removeEventListener("error",c)},a=()=>{t(Vn(n.result)),o()},c=()=>{r(n.error),o()};n.addEventListener("success",a),n.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&Jp.set(t,n)}).catch(()=>{}),Oc.set(e,n),e}function FC(n){if(ic.has(n))return;const e=new Promise((t,r)=>{const o=()=>{n.removeEventListener("complete",a),n.removeEventListener("error",c),n.removeEventListener("abort",c)},a=()=>{t(),o()},c=()=>{r(n.error||new DOMException("AbortError","AbortError")),o()};n.addEventListener("complete",a),n.addEventListener("error",c),n.addEventListener("abort",c)});ic.set(n,e)}let rc={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return ic.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Zp.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Vn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function BC(n){rc=n(rc)}function WC(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(xl(this),e,...t);return Zp.set(r,e.sort?e.sort():[e]),Vn(r)}:MC().includes(n)?function(...e){return n.apply(xl(this),e),Vn(Jp.get(this))}:function(...e){return Vn(n.apply(xl(this),e))}}function HC(n){return typeof n=="function"?WC(n):(n instanceof IDBTransaction&&FC(n),DC(n,LC())?new Proxy(n,rc):n)}function Vn(n){if(n instanceof IDBRequest)return UC(n);if(Ol.has(n))return Ol.get(n);const e=HC(n);return e!==n&&(Ol.set(n,e),Oc.set(e,n)),e}const xl=n=>Oc.get(n);function $C(n,e,{blocked:t,upgrade:r,blocking:o,terminated:a}={}){const c=indexedDB.open(n,e),h=Vn(c);return r&&c.addEventListener("upgradeneeded",d=>{r(Vn(c.result),d.oldVersion,d.newVersion,Vn(c.transaction),d)}),t&&c.addEventListener("blocked",d=>t(d.oldVersion,d.newVersion,d)),h.then(d=>{a&&d.addEventListener("close",()=>a()),o&&d.addEventListener("versionchange",p=>o(p.oldVersion,p.newVersion,p))}).catch(()=>{}),h}const VC=["get","getKey","getAll","getAllKeys","count"],qC=["put","add","delete","clear"],Pl=new Map;function ff(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Pl.get(e))return Pl.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,o=qC.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(o||VC.includes(t)))return;const a=async function(c,...h){const d=this.transaction(c,o?"readwrite":"readonly");let p=d.store;return r&&(p=p.index(h.shift())),(await Promise.all([p[t](...h),o&&d.done]))[0]};return Pl.set(e,a),a}BC(n=>({...n,get:(e,t,r)=>ff(e,t)||n.get(e,t,r),has:(e,t)=>!!ff(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(zC(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function zC(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const sc="@firebase/app",pf="0.10.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fi=new kc("@firebase/app"),KC="@firebase/app-compat",YC="@firebase/analytics-compat",jC="@firebase/analytics",QC="@firebase/app-check-compat",XC="@firebase/app-check",JC="@firebase/auth",ZC="@firebase/auth-compat",eT="@firebase/database",tT="@firebase/database-compat",nT="@firebase/functions",iT="@firebase/functions-compat",rT="@firebase/installations",sT="@firebase/installations-compat",oT="@firebase/messaging",aT="@firebase/messaging-compat",lT="@firebase/performance",cT="@firebase/performance-compat",uT="@firebase/remote-config",hT="@firebase/remote-config-compat",dT="@firebase/storage",fT="@firebase/storage-compat",pT="@firebase/firestore",_T="@firebase/firestore-compat",gT="firebase",mT="10.11.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oc="[DEFAULT]",vT={[sc]:"fire-core",[KC]:"fire-core-compat",[jC]:"fire-analytics",[YC]:"fire-analytics-compat",[XC]:"fire-app-check",[QC]:"fire-app-check-compat",[JC]:"fire-auth",[ZC]:"fire-auth-compat",[eT]:"fire-rtdb",[tT]:"fire-rtdb-compat",[nT]:"fire-fn",[iT]:"fire-fn-compat",[rT]:"fire-iid",[sT]:"fire-iid-compat",[oT]:"fire-fcm",[aT]:"fire-fcm-compat",[lT]:"fire-perf",[cT]:"fire-perf-compat",[uT]:"fire-rc",[hT]:"fire-rc-compat",[dT]:"fire-gcs",[fT]:"fire-gcs-compat",[pT]:"fire-fst",[_T]:"fire-fst-compat","fire-js":"fire-js",[gT]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wo=new Map,yT=new Map,ac=new Map;function _f(n,e){try{n.container.addComponent(e)}catch(t){fi.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function pi(n){const e=n.name;if(ac.has(e))return fi.debug(`There were multiple attempts to register component ${e}.`),!1;ac.set(e,n);for(const t of wo.values())_f(t,n);for(const t of yT.values())_f(t,n);return!0}function Ho(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function pn(n){return n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},qn=new Zr("app","Firebase",wT);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ET{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Kn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw qn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ei=mT;function e_(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:oc,automaticDataCollectionEnabled:!1},e),o=r.name;if(typeof o!="string"||!o)throw qn.create("bad-app-name",{appName:String(o)});if(t||(t=zp()),!t)throw qn.create("no-options");const a=wo.get(o);if(a){if(yo(t,a.options)&&yo(r,a.config))return a;throw qn.create("duplicate-app",{appName:o})}const c=new NC(o);for(const d of ac.values())c.addComponent(d);const h=new ET(t,r,c);return wo.set(o,h),h}function xc(n=oc){const e=wo.get(n);if(!e&&n===oc&&zp())return e_();if(!e)throw qn.create("no-app",{appName:n});return e}function Jt(n,e,t){var r;let o=(r=vT[n])!==null&&r!==void 0?r:n;t&&(o+=`-${t}`);const a=o.match(/\s|\//),c=e.match(/\s|\//);if(a||c){const h=[`Unable to register library "${o}" with version "${e}":`];a&&h.push(`library name "${o}" contains illegal characters (whitespace or "/")`),a&&c&&h.push("and"),c&&h.push(`version name "${e}" contains illegal characters (whitespace or "/")`),fi.warn(h.join(" "));return}pi(new Kn(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bT="firebase-heartbeat-database",IT=1,Hr="firebase-heartbeat-store";let Dl=null;function t_(){return Dl||(Dl=$C(bT,IT,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Hr)}catch(t){console.warn(t)}}}}).catch(n=>{throw qn.create("idb-open",{originalErrorMessage:n.message})})),Dl}async function CT(n){try{const t=(await t_()).transaction(Hr),r=await t.objectStore(Hr).get(n_(n));return await t.done,r}catch(e){if(e instanceof In)fi.warn(e.message);else{const t=qn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});fi.warn(t.message)}}}async function gf(n,e){try{const r=(await t_()).transaction(Hr,"readwrite");await r.objectStore(Hr).put(e,n_(n)),await r.done}catch(t){if(t instanceof In)fi.warn(t.message);else{const r=qn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});fi.warn(r.message)}}}function n_(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TT=1024,ST=30*24*60*60*1e3;class AT{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new NT(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=mf();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(c=>c.date===a)))return this._heartbeatsCache.heartbeats.push({date:a,agent:o}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(c=>{const h=new Date(c.date).valueOf();return Date.now()-h<=ST}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=mf(),{heartbeatsToSend:r,unsentEntries:o}=RT(this._heartbeatsCache.heartbeats),a=go(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}}function mf(){return new Date().toISOString().substring(0,10)}function RT(n,e=TT){const t=[];let r=n.slice();for(const o of n){const a=t.find(c=>c.agent===o.agent);if(a){if(a.dates.push(o.date),vf(t)>e){a.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),vf(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class NT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return pC()?_C().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await CT(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return gf(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return gf(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function vf(n){return go(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kT(n){pi(new Kn("platform-logger",e=>new GC(e),"PRIVATE")),pi(new Kn("heartbeat",e=>new AT(e),"PRIVATE")),Jt(sc,pf,n),Jt(sc,pf,"esm2017"),Jt("fire-js","")}kT("");var OT="firebase",xT="10.11.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Jt(OT,xT,"app");var yf={};const wf="@firebase/database",Ef="1.0.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let i_="";function PT(n){i_=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DT{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Qe(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Wr(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LT{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return tn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r_=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new DT(e)}}catch{}return new LT},ci=r_("localStorage"),lc=r_("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $i=new kc("@firebase/database"),MT=function(){let n=1;return function(){return n++}}(),s_=function(n){const e=TC(n),t=new EC;t.update(e);const r=t.digest();return Ac.encodeByteArray(r)},es=function(...n){let e="";for(let t=0;t<n.length;t++){const r=n[t];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=es.apply(null,r):typeof r=="object"?e+=Qe(r):e+=r,e+=" "}return e};let hi=null,bf=!0;const UT=function(n,e){M(!e||n===!0||n===!1,"Can't turn on custom loggers persistently."),n===!0?($i.logLevel=ye.VERBOSE,hi=$i.log.bind($i),e&&lc.set("logging_enabled",!0)):typeof n=="function"?hi=n:(hi=null,lc.remove("logging_enabled"))},Ze=function(...n){if(bf===!0&&(bf=!1,hi===null&&lc.get("logging_enabled")===!0&&UT(!0)),hi){const e=es.apply(null,n);hi(e)}},ts=function(n){return function(...e){Ze(n,...e)}},cc=function(...n){const e="FIREBASE INTERNAL ERROR: "+es(...n);$i.error(e)},wn=function(...n){const e=`FIREBASE FATAL ERROR: ${es(...n)}`;throw $i.error(e),new Error(e)},ht=function(...n){const e="FIREBASE WARNING: "+es(...n);$i.warn(e)},FT=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ht("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Pc=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},BT=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Qi="[MIN_NAME]",_i="[MAX_NAME]",bi=function(n,e){if(n===e)return 0;if(n===Qi||e===_i)return-1;if(e===Qi||n===_i)return 1;{const t=If(n),r=If(e);return t!==null?r!==null?t-r===0?n.length-e.length:t-r:-1:r!==null?1:n<e?-1:1}},WT=function(n,e){return n===e?0:n<e?-1:1},Rr=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+Qe(e))},Dc=function(n){if(typeof n!="object"||n===null)return Qe(n);const e=[];for(const r in n)e.push(r);e.sort();let t="{";for(let r=0;r<e.length;r++)r!==0&&(t+=","),t+=Qe(e[r]),t+=":",t+=Dc(n[e[r]]);return t+="}",t},o_=function(n,e){const t=n.length;if(t<=e)return[n];const r=[];for(let o=0;o<t;o+=e)o+e>t?r.push(n.substring(o,t)):r.push(n.substring(o,o+e));return r};function tt(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const a_=function(n){M(!Pc(n),"Invalid JSON number");const e=11,t=52,r=(1<<e-1)-1;let o,a,c,h,d;n===0?(a=0,c=0,o=1/n===-1/0?1:0):(o=n<0,n=Math.abs(n),n>=Math.pow(2,1-r)?(h=Math.min(Math.floor(Math.log(n)/Math.LN2),r),a=h+r,c=Math.round(n*Math.pow(2,t-h)-Math.pow(2,t))):(a=0,c=Math.round(n/Math.pow(2,1-r-t))));const p=[];for(d=t;d;d-=1)p.push(c%2?1:0),c=Math.floor(c/2);for(d=e;d;d-=1)p.push(a%2?1:0),a=Math.floor(a/2);p.push(o?1:0),p.reverse();const y=p.join("");let v="";for(d=0;d<64;d+=8){let E=parseInt(y.substr(d,8),2).toString(16);E.length===1&&(E="0"+E),v=v+E}return v.toLowerCase()},HT=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},$T=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function VT(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const r=new Error(n+" at "+e._path.toString()+": "+t);return r.code=n.toUpperCase(),r}const qT=new RegExp("^-?(0*)\\d{1,10}$"),GT=-2147483648,zT=2147483647,If=function(n){if(qT.test(n)){const e=Number(n);if(e>=GT&&e<=zT)return e}return null},rr=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw ht("Exception was thrown by user callback.",t),e},Math.floor(0))}},KT=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Dr=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YT{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,r):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){ht(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jT{constructor(e,t,r){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(o=>this.auth_=o)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(Ze("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,r):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ht(e)}}class Vi{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Vi.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lc="5",l_="v",c_="s",u_="r",h_="f",d_=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,f_="ls",p_="p",uc="ac",__="websocket",g_="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m_{constructor(e,t,r,o,a=!1,c="",h=!1,d=!1){this.secure=t,this.namespace=r,this.webSocketOnly=o,this.nodeAdmin=a,this.persistenceKey=c,this.includeNamespaceInQueryParams=h,this.isUsingEmulator=d,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ci.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ci.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function QT(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function v_(n,e,t){M(typeof e=="string","typeof type must == string"),M(typeof t=="object","typeof params must == object");let r;if(e===__)r=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===g_)r=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);QT(n)&&(t.ns=n.namespace);const o=[];return tt(t,(a,c)=>{o.push(a+"="+c)}),r+o.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XT{constructor(){this.counters_={}}incrementCounter(e,t=1){tn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return oC(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ll={},Ml={};function Mc(n){const e=n.toString();return Ll[e]||(Ll[e]=new XT),Ll[e]}function JT(n,e){const t=n.toString();return Ml[t]||(Ml[t]=e()),Ml[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZT{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let o=0;o<r.length;++o)r[o]&&rr(()=>{this.onMessage_(r[o])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cf="start",eS="close",tS="pLPCommand",nS="pRTLPCB",y_="id",w_="pw",E_="ser",iS="cb",rS="seg",sS="ts",oS="d",aS="dframe",b_=1870,I_=30,lS=b_-I_,cS=25e3,uS=3e4;class Wi{constructor(e,t,r,o,a,c,h){this.connId=e,this.repoInfo=t,this.applicationId=r,this.appCheckToken=o,this.authToken=a,this.transportSessionId=c,this.lastSessionId=h,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ts(e),this.stats_=Mc(t),this.urlFn=d=>(this.appCheckToken&&(d[uc]=this.appCheckToken),v_(t,g_,d))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new ZT(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(uS)),BT(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Uc((...a)=>{const[c,h,d,p,y]=a;if(this.incrementIncomingBytes_(a),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,c===Cf)this.id=h,this.password=d;else if(c===eS)h?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(h,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+c)},(...a)=>{const[c,h]=a;this.incrementIncomingBytes_(a),this.myPacketOrderer.handleResponse(c,h)},()=>{this.onClosed_()},this.urlFn);const r={};r[Cf]="t",r[E_]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[iS]=this.scriptTagHolder.uniqueCallbackIdentifier),r[l_]=Lc,this.transportSessionId&&(r[c_]=this.transportSessionId),this.lastSessionId&&(r[f_]=this.lastSessionId),this.applicationId&&(r[p_]=this.applicationId),this.appCheckToken&&(r[uc]=this.appCheckToken),typeof location<"u"&&location.hostname&&d_.test(location.hostname)&&(r[u_]=h_);const o=this.urlFn(r);this.log_("Connecting via long-poll to "+o),this.scriptTagHolder.addTag(o,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Wi.forceAllow_=!0}static forceDisallow(){Wi.forceDisallow_=!0}static isAvailable(){return Wi.forceAllow_?!0:!Wi.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!HT()&&!$T()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Qe(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const r=$p(t),o=o_(r,lS);for(let a=0;a<o.length;a++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,o.length,o[a]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const r={};r[aS]="t",r[y_]=e,r[w_]=t,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Qe(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Uc{constructor(e,t,r,o){this.onDisconnect=r,this.urlFn=o,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=MT(),window[tS+this.uniqueCallbackIdentifier]=e,window[nS+this.uniqueCallbackIdentifier]=t,this.myIFrame=Uc.createIFrame_();let a="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(a='<script>document.domain="'+document.domain+'";<\/script>');const c="<html><body>"+a+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(c),this.myIFrame.doc.close()}catch(h){Ze("frame writing exception"),h.stack&&Ze(h.stack),Ze(h)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ze("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[y_]=this.myID,e[w_]=this.myPW,e[E_]=this.currentSerial;let t=this.urlFn(e),r="",o=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+I_+r.length<=b_;){const c=this.pendingSegs.shift();r=r+"&"+rS+o+"="+c.seg+"&"+sS+o+"="+c.ts+"&"+oS+o+"="+c.d,o++}return t=t+r,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,r){this.pendingSegs.push({seg:e,ts:t,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const r=()=>{this.outstandingRequests.delete(t),this.newRequest_()},o=setTimeout(r,Math.floor(cS)),a=()=>{clearTimeout(o),r()};this.addTag(e,a)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const o=r.readyState;(!o||o==="loaded"||o==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),t())},r.onerror=()=>{Ze("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hS=16384,dS=45e3;let Eo=null;typeof MozWebSocket<"u"?Eo=MozWebSocket:typeof WebSocket<"u"&&(Eo=WebSocket);class Vt{constructor(e,t,r,o,a,c,h){this.connId=e,this.applicationId=r,this.appCheckToken=o,this.authToken=a,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ts(this.connId),this.stats_=Mc(t),this.connURL=Vt.connectionURL_(t,c,h,o,r),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,r,o,a){const c={};return c[l_]=Lc,typeof location<"u"&&location.hostname&&d_.test(location.hostname)&&(c[u_]=h_),t&&(c[c_]=t),r&&(c[f_]=r),o&&(c[uc]=o),a&&(c[p_]=a),v_(e,__,c)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ci.set("previous_websocket_failure",!0);try{let r;Qp(),this.mySock=new Eo(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const o=r.message||r.data;o&&this.log_(o),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const o=r.message||r.data;o&&this.log_(o),this.onClosed_()}}start(){}static forceDisallow(){Vt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(t);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Eo!==null&&!Vt.forceDisallow_}static previouslyFailed(){return ci.isInMemoryStorage||ci.get("previous_websocket_failure")===!0}markConnectionHealthy(){ci.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const r=Wr(t);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(M(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const r=this.extractFrameCount_(t);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const t=Qe(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const r=o_(t,hS);r.length>1&&this.sendString_(String(r.length));for(let o=0;o<r.length;o++)this.sendString_(r[o])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(dS))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Vt.responsesRequiredToBeHealthy=2;Vt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Wi,Vt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=Vt&&Vt.isAvailable();let r=t&&!Vt.previouslyFailed();if(e.webSocketOnly&&(t||ht("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Vt];else{const o=this.transports_=[];for(const a of $r.ALL_TRANSPORTS)a&&a.isAvailable()&&o.push(a);$r.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}$r.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fS=6e4,pS=5e3,_S=10*1024,gS=100*1024,Ul="t",Tf="d",mS="s",Sf="r",vS="e",Af="o",Rf="a",Nf="n",kf="p",yS="h";class wS{constructor(e,t,r,o,a,c,h,d,p,y){this.id=e,this.repoInfo_=t,this.applicationId_=r,this.appCheckToken_=o,this.authToken_=a,this.onMessage_=c,this.onReady_=h,this.onDisconnect_=d,this.onKill_=p,this.lastSessionId=y,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ts("c:"+this.id+":"),this.transportManager_=new $r(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,r)},Math.floor(0));const o=e.healthyTimeout||0;o>0&&(this.healthyTimeout_=Dr(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>gS?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>_S?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(o)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ul in e){const t=e[Ul];t===Rf?this.upgradeIfSecondaryHealthy_():t===Sf?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Af&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Rr("t",e),r=Rr("d",e);if(t==="c")this.onSecondaryControl_(r);else if(t==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:kf,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Rf,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Nf,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Rr("t",e),r=Rr("d",e);t==="c"?this.onControl_(r):t==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Rr(Ul,e);if(Tf in e){const r=e[Tf];if(t===yS){const o=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(o.h=this.repoInfo_.host),this.onHandshake_(o)}else if(t===Nf){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let o=0;o<this.pendingDataMessages.length;++o)this.onDataMessage_(this.pendingDataMessages[o]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===mS?this.onConnectionShutdown_(r):t===Sf?this.onReset_(r):t===vS?cc("Server Error: "+r):t===Af?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):cc("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,r=e.v,o=e.h;this.sessionId=e.s,this.repoInfo_.host=o,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Lc!==r&&ht("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,r),Dr(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(fS))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Dr(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(pS))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:kf,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ci.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C_{put(e,t,r,o){}merge(e,t,r,o){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,r){}onDisconnectMerge(e,t,r){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T_{constructor(e){this.allowedEvents_=e,this.listeners_={},M(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let o=0;o<r.length;o++)r[o].callback.apply(r[o].context,t)}}on(e,t,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:r});const o=this.getInitialEvent(e);o&&t.apply(r,o)}off(e,t,r){this.validateEventType_(e);const o=this.listeners_[e]||[];for(let a=0;a<o.length;a++)if(o[a].callback===t&&(!r||r===o[a].context)){o.splice(a,1);return}}validateEventType_(e){M(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo extends T_{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Nc()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new bo}getInitialEvent(e){return M(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Of=32,xf=768;class we{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let r=0;for(let o=0;o<this.pieces_.length;o++)this.pieces_[o].length>0&&(this.pieces_[r]=this.pieces_[o],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function pe(){return new we("")}function oe(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Yn(n){return n.pieces_.length-n.pieceNum_}function Re(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new we(n.pieces_,e)}function Fc(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function ES(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Vr(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function S_(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new we(e,0)}function Me(n,e){const t=[];for(let r=n.pieceNum_;r<n.pieces_.length;r++)t.push(n.pieces_[r]);if(e instanceof we)for(let r=e.pieceNum_;r<e.pieces_.length;r++)t.push(e.pieces_[r]);else{const r=e.split("/");for(let o=0;o<r.length;o++)r[o].length>0&&t.push(r[o])}return new we(t,0)}function ce(n){return n.pieceNum_>=n.pieces_.length}function gt(n,e){const t=oe(n),r=oe(e);if(t===null)return e;if(t===r)return gt(Re(n),Re(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function bS(n,e){const t=Vr(n,0),r=Vr(e,0);for(let o=0;o<t.length&&o<r.length;o++){const a=bi(t[o],r[o]);if(a!==0)return a}return t.length===r.length?0:t.length<r.length?-1:1}function Bc(n,e){if(Yn(n)!==Yn(e))return!1;for(let t=n.pieceNum_,r=e.pieceNum_;t<=n.pieces_.length;t++,r++)if(n.pieces_[t]!==e.pieces_[r])return!1;return!0}function Lt(n,e){let t=n.pieceNum_,r=e.pieceNum_;if(Yn(n)>Yn(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[r])return!1;++t,++r}return!0}class IS{constructor(e,t){this.errorPrefix_=t,this.parts_=Vr(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Wo(this.parts_[r]);A_(this)}}function CS(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Wo(e),A_(n)}function TS(n){const e=n.parts_.pop();n.byteLength_-=Wo(e),n.parts_.length>0&&(n.byteLength_-=1)}function A_(n){if(n.byteLength_>xf)throw new Error(n.errorPrefix_+"has a key path longer than "+xf+" bytes ("+n.byteLength_+").");if(n.parts_.length>Of)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Of+") or object contains a cycle "+li(n))}function li(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc extends T_{constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Wc}getInitialEvent(e){return M(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nr=1e3,SS=60*5*1e3,Pf=30*1e3,AS=1.3,RS=3e4,NS="server_kill",Df=3;class yn extends C_{constructor(e,t,r,o,a,c,h,d){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=r,this.onConnectStatus_=o,this.onServerInfoUpdate_=a,this.authTokenProvider_=c,this.appCheckTokenProvider_=h,this.authOverride_=d,this.id=yn.nextPersistentConnectionId_++,this.log_=ts("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Nr,this.maxReconnectDelay_=SS,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,d&&!Qp())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Wc.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&bo.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,r){const o=++this.requestNumber_,a={r:o,a:e,b:t};this.log_(Qe(a)),M(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(a),r&&(this.requestCBHash_[o]=r)}get(e){this.initConnection_();const t=new Jr,o={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:c=>{const h=c.d;c.s==="ok"?t.resolve(h):t.reject(h)}};this.outstandingGets_.push(o),this.outstandingGetCount_++;const a=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(a),t.promise}listen(e,t,r,o){this.initConnection_();const a=e._queryIdentifier,c=e._path.toString();this.log_("Listen called for "+c+" "+a),this.listens.has(c)||this.listens.set(c,new Map),M(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),M(!this.listens.get(c).has(a),"listen() called twice for same path/queryId.");const h={onComplete:o,hashFn:t,query:e,tag:r};this.listens.get(c).set(a,h),this.connected_&&this.sendListen_(h)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(r)})}sendListen_(e){const t=e.query,r=t._path.toString(),o=t._queryIdentifier;this.log_("Listen on "+r+" for "+o);const a={p:r},c="q";e.tag&&(a.q=t._queryObject,a.t=e.tag),a.h=e.hashFn(),this.sendRequest(c,a,h=>{const d=h.d,p=h.s;yn.warnOnListenWarnings_(d,t),(this.listens.get(r)&&this.listens.get(r).get(o))===e&&(this.log_("listen response",h),p!=="ok"&&this.removeListen_(r,o),e.onComplete&&e.onComplete(p,d))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&tn(e,"w")){const r=ji(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const o='".indexOn": "'+t._queryParams.getIndex().toString()+'"',a=t._path.toString();ht(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${o} at ${a} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||wC(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Pf)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=yC(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(t,r,o=>{const a=o.s,c=o.d||"error";this.authToken_===e&&(a==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(a,c))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,r=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,r)})}unlisten(e,t){const r=e._path.toString(),o=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+o),M(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,o)&&this.connected_&&this.sendUnlisten_(r,o,e._queryObject,t)}sendUnlisten_(e,t,r,o){this.log_("Unlisten on "+e+" for "+t);const a={p:e},c="n";o&&(a.q=r,a.t=o),this.sendRequest(c,a)}onDisconnectPut(e,t,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:r})}onDisconnectMerge(e,t,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:r})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,r,o){const a={p:t,d:r};this.log_("onDisconnect "+e,a),this.sendRequest(e,a,c=>{o&&setTimeout(()=>{o(c.s,c.d)},Math.floor(0))})}put(e,t,r,o){this.putInternal("p",e,t,r,o)}merge(e,t,r,o){this.putInternal("m",e,t,r,o)}putInternal(e,t,r,o,a){this.initConnection_();const c={p:t,d:r};a!==void 0&&(c.h=a),this.outstandingPuts_.push({action:e,request:c,onComplete:o}),this.outstandingPutCount_++;const h=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(h):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,o=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,r,a=>{this.log_(t+" response",a),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),o&&o(a.s,a.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,r=>{if(r.s!=="ok"){const a=r.d;this.log_("reportStats","Error sending stats: "+a)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Qe(e));const t=e.r,r=this.requestCBHash_[t];r&&(delete this.requestCBHash_[t],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):cc("Unrecognized action received from server: "+Qe(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){M(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Nr,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Nr,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>RS&&(this.reconnectDelay_=Nr),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*AS)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),o=this.id+":"+yn.nextConnectionId_++,a=this.lastSessionId;let c=!1,h=null;const d=function(){h?h.close():(c=!0,r())},p=function(v){M(h,"sendRequest call when we're not connected not allowed."),h.sendRequest(v)};this.realtime_={close:d,sendRequest:p};const y=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[v,E]=await Promise.all([this.authTokenProvider_.getToken(y),this.appCheckTokenProvider_.getToken(y)]);c?Ze("getToken() completed but was canceled"):(Ze("getToken() completed. Creating connection."),this.authToken_=v&&v.accessToken,this.appCheckToken_=E&&E.token,h=new wS(o,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,r,T=>{ht(T+" ("+this.repoInfo_.toString()+")"),this.interrupt(NS)},a))}catch(v){this.log_("Failed to get token: "+v),c||(this.repoInfo_.nodeAdmin&&ht(v),d())}}}interrupt(e){Ze("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ze("Resuming connection for reason: "+e),delete this.interruptReasons_[e],nc(this.interruptReasons_)&&(this.reconnectDelay_=Nr,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let r;t?r=t.map(a=>Dc(a)).join("$"):r="default";const o=this.removeListen_(e,r);o&&o.onComplete&&o.onComplete("permission_denied")}removeListen_(e,t){const r=new we(e).toString();let o;if(this.listens.has(r)){const a=this.listens.get(r);o=a.get(t),a.delete(t),a.size===0&&this.listens.delete(r)}else o=void 0;return o}onAuthRevoked_(e,t){Ze("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Df&&(this.reconnectDelay_=Pf,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){Ze("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Df&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+i_.replace(/\./g,"-")]=1,Nc()?e["framework.cordova"]=1:jp()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=bo.getInstance().currentlyOnline();return nc(this.interruptReasons_)&&e}}yn.nextPersistentConnectionId_=0;yn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new ae(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const r=new ae(Qi,e),o=new ae(Qi,t);return this.compare(r,o)!==0}minPost(){return ae.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eo;class R_ extends $o{static get __EMPTY_NODE(){return eo}static set __EMPTY_NODE(e){eo=e}compare(e,t){return bi(e.name,t.name)}isDefinedOn(e){throw nr("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return ae.MIN}maxPost(){return new ae(_i,eo)}makePost(e,t){return M(typeof e=="string","KeyIndex indexValue must always be a string."),new ae(e,eo)}toString(){return".key"}}const qi=new R_;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(e,t,r,o,a=null){this.isReverse_=o,this.resultGenerator_=a,this.nodeStack_=[];let c=1;for(;!e.isEmpty();)if(e=e,c=t?r(e.key,t):1,o&&(c*=-1),c<0)this.isReverse_?e=e.left:e=e.right;else if(c===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ye{constructor(e,t,r,o,a){this.key=e,this.value=t,this.color=r??Ye.RED,this.left=o??mt.EMPTY_NODE,this.right=a??mt.EMPTY_NODE}copy(e,t,r,o,a){return new Ye(e??this.key,t??this.value,r??this.color,o??this.left,a??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let o=this;const a=r(e,o.key);return a<0?o=o.copy(null,null,null,o.left.insert(e,t,r),null):a===0?o=o.copy(null,t,null,null,null):o=o.copy(null,null,null,null,o.right.insert(e,t,r)),o.fixUp_()}removeMin_(){if(this.left.isEmpty())return mt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let r,o;if(r=this,t(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),t(e,r.key)===0){if(r.right.isEmpty())return mt.EMPTY_NODE;o=r.right.min_(),r=r.copy(o.key,o.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ye.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ye.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ye.RED=!0;Ye.BLACK=!1;class kS{copy(e,t,r,o,a){return this}insert(e,t,r){return new Ye(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class mt{constructor(e,t=mt.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new mt(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Ye.BLACK,null,null))}remove(e){return new mt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ye.BLACK,null,null))}get(e){let t,r=this.root_;for(;!r.isEmpty();){if(t=this.comparator_(e,r.key),t===0)return r.value;t<0?r=r.left:t>0&&(r=r.right)}return null}getPredecessorKey(e){let t,r=this.root_,o=null;for(;!r.isEmpty();)if(t=this.comparator_(e,r.key),t===0){if(r.left.isEmpty())return o?o.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else t<0?r=r.left:t>0&&(o=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new to(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new to(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new to(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new to(this.root_,null,this.comparator_,!0,e)}}mt.EMPTY_NODE=new kS;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OS(n,e){return bi(n.name,e.name)}function Hc(n,e){return bi(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hc;function xS(n){hc=n}const N_=function(n){return typeof n=="number"?"number:"+a_(n):"string:"+n},k_=function(n){if(n.isLeafNode()){const e=n.val();M(typeof e=="string"||typeof e=="number"||typeof e=="object"&&tn(e,".sv"),"Priority must be a string or number.")}else M(n===hc||n.isEmpty(),"priority of unexpected type.");M(n===hc||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lf;class ze{constructor(e,t=ze.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,M(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),k_(this.priorityNode_)}static set __childrenNodeConstructor(e){Lf=e}static get __childrenNodeConstructor(){return Lf}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ze(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ze.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ce(e)?this:oe(e)===".priority"?this.priorityNode_:ze.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:ze.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const r=oe(e);return r===null?t:t.isEmpty()&&r!==".priority"?this:(M(r!==".priority"||Yn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,ze.__childrenNodeConstructor.EMPTY_NODE.updateChild(Re(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+N_(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=a_(this.value_):e+=this.value_,this.lazyHash_=s_(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ze.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ze.__childrenNodeConstructor?-1:(M(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,r=typeof this.value_,o=ze.VALUE_TYPE_ORDER.indexOf(t),a=ze.VALUE_TYPE_ORDER.indexOf(r);return M(o>=0,"Unknown leaf type: "+t),M(a>=0,"Unknown leaf type: "+r),o===a?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:a-o}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}ze.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let O_,x_;function PS(n){O_=n}function DS(n){x_=n}class LS extends $o{compare(e,t){const r=e.node.getPriority(),o=t.node.getPriority(),a=r.compareTo(o);return a===0?bi(e.name,t.name):a}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return ae.MIN}maxPost(){return new ae(_i,new ze("[PRIORITY-POST]",x_))}makePost(e,t){const r=O_(e);return new ae(t,new ze("[PRIORITY-POST]",r))}toString(){return".priority"}}const Ue=new LS;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MS=Math.log(2);class US{constructor(e){const t=a=>parseInt(Math.log(a)/MS,10),r=a=>parseInt(Array(a+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const o=r(this.count);this.bits_=e+1&o}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Io=function(n,e,t,r){n.sort(e);const o=function(d,p){const y=p-d;let v,E;if(y===0)return null;if(y===1)return v=n[d],E=t?t(v):v,new Ye(E,v.node,Ye.BLACK,null,null);{const T=parseInt(y/2,10)+d,A=o(d,T),L=o(T+1,p);return v=n[T],E=t?t(v):v,new Ye(E,v.node,Ye.BLACK,A,L)}},a=function(d){let p=null,y=null,v=n.length;const E=function(A,L){const D=v-A,F=v;v-=A;const ee=o(D+1,F),O=n[D],G=t?t(O):O;T(new Ye(G,O.node,L,null,ee))},T=function(A){p?(p.left=A,p=A):(y=A,p=A)};for(let A=0;A<d.count;++A){const L=d.nextBitIsOne(),D=Math.pow(2,d.count-(A+1));L?E(D,Ye.BLACK):(E(D,Ye.BLACK),E(D,Ye.RED))}return y},c=new US(n.length),h=a(c);return new mt(r||e,h)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fl;const Bi={};class _n{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return M(Bi&&Ue,"ChildrenNode.ts has not been loaded"),Fl=Fl||new _n({".priority":Bi},{".priority":Ue}),Fl}get(e){const t=ji(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof mt?t:null}hasIndex(e){return tn(this.indexSet_,e.toString())}addIndex(e,t){M(e!==qi,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let o=!1;const a=t.getIterator(ae.Wrap);let c=a.getNext();for(;c;)o=o||e.isDefinedOn(c.node),r.push(c),c=a.getNext();let h;o?h=Io(r,e.getCompare()):h=Bi;const d=e.toString(),p=Object.assign({},this.indexSet_);p[d]=e;const y=Object.assign({},this.indexes_);return y[d]=h,new _n(y,p)}addToIndexes(e,t){const r=vo(this.indexes_,(o,a)=>{const c=ji(this.indexSet_,a);if(M(c,"Missing index implementation for "+a),o===Bi)if(c.isDefinedOn(e.node)){const h=[],d=t.getIterator(ae.Wrap);let p=d.getNext();for(;p;)p.name!==e.name&&h.push(p),p=d.getNext();return h.push(e),Io(h,c.getCompare())}else return Bi;else{const h=t.get(e.name);let d=o;return h&&(d=d.remove(new ae(e.name,h))),d.insert(e,e.node)}});return new _n(r,this.indexSet_)}removeFromIndexes(e,t){const r=vo(this.indexes_,o=>{if(o===Bi)return o;{const a=t.get(e.name);return a?o.remove(new ae(e.name,a)):o}});return new _n(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let kr;class X{constructor(e,t,r){this.children_=e,this.priorityNode_=t,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&k_(this.priorityNode_),this.children_.isEmpty()&&M(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return kr||(kr=new X(new mt(Hc),null,_n.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||kr}updatePriority(e){return this.children_.isEmpty()?this:new X(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?kr:t}}getChild(e){const t=oe(e);return t===null?this:this.getImmediateChild(t).getChild(Re(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(M(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const r=new ae(e,t);let o,a;t.isEmpty()?(o=this.children_.remove(e),a=this.indexMap_.removeFromIndexes(r,this.children_)):(o=this.children_.insert(e,t),a=this.indexMap_.addToIndexes(r,this.children_));const c=o.isEmpty()?kr:this.priorityNode_;return new X(o,c,a)}}updateChild(e,t){const r=oe(e);if(r===null)return t;{M(oe(e)!==".priority"||Yn(e)===1,".priority must be the last token in a path");const o=this.getImmediateChild(r).updateChild(Re(e),t);return this.updateImmediateChild(r,o)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let r=0,o=0,a=!0;if(this.forEachChild(Ue,(c,h)=>{t[c]=h.val(e),r++,a&&X.INTEGER_REGEXP_.test(c)?o=Math.max(o,Number(c)):a=!1}),!e&&a&&o<2*r){const c=[];for(const h in t)c[h]=t[h];return c}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+N_(this.getPriority().val())+":"),this.forEachChild(Ue,(t,r)=>{const o=r.hash();o!==""&&(e+=":"+t+":"+o)}),this.lazyHash_=e===""?"":s_(e)}return this.lazyHash_}getPredecessorChildName(e,t,r){const o=this.resolveIndex_(r);if(o){const a=o.getPredecessorKey(new ae(e,t));return a?a.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const r=t.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new ae(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const r=t.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new ae(t,this.children_.get(t)):null}forEachChild(e,t){const r=this.resolveIndex_(e);return r?r.inorderTraversal(o=>t(o.name,o.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const r=this.resolveIndex_(t);if(r)return r.getIteratorFrom(e,o=>o);{const o=this.children_.getIteratorFrom(e.name,ae.Wrap);let a=o.peek();for(;a!=null&&t.compare(a,e)<0;)o.getNext(),a=o.peek();return o}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const r=this.resolveIndex_(t);if(r)return r.getReverseIteratorFrom(e,o=>o);{const o=this.children_.getReverseIteratorFrom(e.name,ae.Wrap);let a=o.peek();for(;a!=null&&t.compare(a,e)>0;)o.getNext(),a=o.peek();return o}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ns?-1:0}withIndex(e){if(e===qi||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new X(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===qi||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const r=this.getIterator(Ue),o=t.getIterator(Ue);let a=r.getNext(),c=o.getNext();for(;a&&c;){if(a.name!==c.name||!a.node.equals(c.node))return!1;a=r.getNext(),c=o.getNext()}return a===null&&c===null}else return!1;else return!1}}resolveIndex_(e){return e===qi?null:this.indexMap_.get(e.toString())}}X.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class FS extends X{constructor(){super(new mt(Hc),X.EMPTY_NODE,_n.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return X.EMPTY_NODE}isEmpty(){return!1}}const ns=new FS;Object.defineProperties(ae,{MIN:{value:new ae(Qi,X.EMPTY_NODE)},MAX:{value:new ae(_i,ns)}});R_.__EMPTY_NODE=X.EMPTY_NODE;ze.__childrenNodeConstructor=X;xS(ns);DS(ns);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BS=!0;function je(n,e=null){if(n===null)return X.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),M(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new ze(t,je(e))}if(!(n instanceof Array)&&BS){const t=[];let r=!1;if(tt(n,(c,h)=>{if(c.substring(0,1)!=="."){const d=je(h);d.isEmpty()||(r=r||!d.getPriority().isEmpty(),t.push(new ae(c,d)))}}),t.length===0)return X.EMPTY_NODE;const a=Io(t,OS,c=>c.name,Hc);if(r){const c=Io(t,Ue.getCompare());return new X(a,je(e),new _n({".priority":c},{".priority":Ue}))}else return new X(a,je(e),_n.Default)}else{let t=X.EMPTY_NODE;return tt(n,(r,o)=>{if(tn(n,r)&&r.substring(0,1)!=="."){const a=je(o);(a.isLeafNode()||!a.isEmpty())&&(t=t.updateImmediateChild(r,a))}}),t.updatePriority(je(e))}}PS(je);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WS extends $o{constructor(e){super(),this.indexPath_=e,M(!ce(e)&&oe(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const r=this.extractChild(e.node),o=this.extractChild(t.node),a=r.compareTo(o);return a===0?bi(e.name,t.name):a}makePost(e,t){const r=je(e),o=X.EMPTY_NODE.updateChild(this.indexPath_,r);return new ae(t,o)}maxPost(){const e=X.EMPTY_NODE.updateChild(this.indexPath_,ns);return new ae(_i,e)}toString(){return Vr(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HS extends $o{compare(e,t){const r=e.node.compareTo(t.node);return r===0?bi(e.name,t.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return ae.MIN}maxPost(){return ae.MAX}makePost(e,t){const r=je(e);return new ae(t,r)}toString(){return".value"}}const $S=new HS;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P_(n){return{type:"value",snapshotNode:n}}function Xi(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function qr(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Gr(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function VS(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{constructor(e){this.index_=e}updateChild(e,t,r,o,a,c){M(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const h=e.getImmediateChild(t);return h.getChild(o).equals(r.getChild(o))&&h.isEmpty()===r.isEmpty()||(c!=null&&(r.isEmpty()?e.hasChild(t)?c.trackChildChange(qr(t,h)):M(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):h.isEmpty()?c.trackChildChange(Xi(t,r)):c.trackChildChange(Gr(t,r,h))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(t,r).withIndex(this.index_)}updateFullNode(e,t,r){return r!=null&&(e.isLeafNode()||e.forEachChild(Ue,(o,a)=>{t.hasChild(o)||r.trackChildChange(qr(o,a))}),t.isLeafNode()||t.forEachChild(Ue,(o,a)=>{if(e.hasChild(o)){const c=e.getImmediateChild(o);c.equals(a)||r.trackChildChange(Gr(o,a,c))}else r.trackChildChange(Xi(o,a))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?X.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(e){this.indexedFilter_=new $c(e.getIndex()),this.index_=e.getIndex(),this.startPost_=zr.getStartPost_(e),this.endPost_=zr.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&r}updateChild(e,t,r,o,a,c){return this.matches(new ae(t,r))||(r=X.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,r,o,a,c)}updateFullNode(e,t,r){t.isLeafNode()&&(t=X.EMPTY_NODE);let o=t.withIndex(this.index_);o=o.updatePriority(X.EMPTY_NODE);const a=this;return t.forEachChild(Ue,(c,h)=>{a.matches(new ae(c,h))||(o=o.updateImmediateChild(c,X.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,o,r)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qS{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=t=>{const r=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new zr(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,r,o,a,c){return this.rangedFilter_.matches(new ae(t,r))||(r=X.EMPTY_NODE),e.getImmediateChild(t).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,r,o,a,c):this.fullLimitUpdateChild_(e,t,r,a,c)}updateFullNode(e,t,r){let o;if(t.isLeafNode()||t.isEmpty())o=X.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){o=X.EMPTY_NODE.withIndex(this.index_);let a;this.reverse_?a=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):a=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let c=0;for(;a.hasNext()&&c<this.limit_;){const h=a.getNext();if(this.withinDirectionalStart(h))if(this.withinDirectionalEnd(h))o=o.updateImmediateChild(h.name,h.node),c++;else break;else continue}}else{o=t.withIndex(this.index_),o=o.updatePriority(X.EMPTY_NODE);let a;this.reverse_?a=o.getReverseIterator(this.index_):a=o.getIterator(this.index_);let c=0;for(;a.hasNext();){const h=a.getNext();c<this.limit_&&this.withinDirectionalStart(h)&&this.withinDirectionalEnd(h)?c++:o=o.updateImmediateChild(h.name,X.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,o,r)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,r,o,a){let c;if(this.reverse_){const v=this.index_.getCompare();c=(E,T)=>v(T,E)}else c=this.index_.getCompare();const h=e;M(h.numChildren()===this.limit_,"");const d=new ae(t,r),p=this.reverse_?h.getFirstChild(this.index_):h.getLastChild(this.index_),y=this.rangedFilter_.matches(d);if(h.hasChild(t)){const v=h.getImmediateChild(t);let E=o.getChildAfterChild(this.index_,p,this.reverse_);for(;E!=null&&(E.name===t||h.hasChild(E.name));)E=o.getChildAfterChild(this.index_,E,this.reverse_);const T=E==null?1:c(E,d);if(y&&!r.isEmpty()&&T>=0)return a!=null&&a.trackChildChange(Gr(t,r,v)),h.updateImmediateChild(t,r);{a!=null&&a.trackChildChange(qr(t,v));const L=h.updateImmediateChild(t,X.EMPTY_NODE);return E!=null&&this.rangedFilter_.matches(E)?(a!=null&&a.trackChildChange(Xi(E.name,E.node)),L.updateImmediateChild(E.name,E.node)):L}}else return r.isEmpty()?e:y&&c(p,d)>=0?(a!=null&&(a.trackChildChange(qr(p.name,p.node)),a.trackChildChange(Xi(t,r))),h.updateImmediateChild(t,r).updateImmediateChild(p.name,X.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ue}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return M(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return M(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Qi}hasEnd(){return this.endSet_}getIndexEndValue(){return M(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return M(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:_i}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return M(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ue}copy(){const e=new Vc;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function GS(n){return n.loadsAllData()?new $c(n.getIndex()):n.hasLimit()?new qS(n):new zr(n)}function Mf(n){const e={};if(n.isDefault())return e;let t;if(n.index_===Ue?t="$priority":n.index_===$S?t="$value":n.index_===qi?t="$key":(M(n.index_ instanceof WS,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=Qe(t),n.startSet_){const r=n.startAfterSet_?"startAfter":"startAt";e[r]=Qe(n.indexStartValue_),n.startNameSet_&&(e[r]+=","+Qe(n.indexStartName_))}if(n.endSet_){const r=n.endBeforeSet_?"endBefore":"endAt";e[r]=Qe(n.indexEndValue_),n.endNameSet_&&(e[r]+=","+Qe(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function Uf(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==Ue&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co extends C_{constructor(e,t,r,o){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=r,this.appCheckTokenProvider_=o,this.log_=ts("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(M(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,r,o){const a=e._path.toString();this.log_("Listen called for "+a+" "+e._queryIdentifier);const c=Co.getListenId_(e,r),h={};this.listens_[c]=h;const d=Mf(e._queryParams);this.restRequest_(a+".json",d,(p,y)=>{let v=y;if(p===404&&(v=null,p=null),p===null&&this.onDataUpdate_(a,v,!1,r),ji(this.listens_,c)===h){let E;p?p===401?E="permission_denied":E="rest_error:"+p:E="ok",o(E,null)}})}unlisten(e,t){const r=Co.getListenId_(e,t);delete this.listens_[r]}get(e){const t=Mf(e._queryParams),r=e._path.toString(),o=new Jr;return this.restRequest_(r+".json",t,(a,c)=>{let h=c;a===404&&(h=null,a=null),a===null?(this.onDataUpdate_(r,h,!1,null),o.resolve(h)):o.reject(new Error(h))}),o.promise}refreshAuthToken(e){}restRequest_(e,t={},r){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([o,a])=>{o&&o.accessToken&&(t.auth=o.accessToken),a&&a.token&&(t.ac=a.token);const c=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ir(t);this.log_("Sending REST request for "+c);const h=new XMLHttpRequest;h.onreadystatechange=()=>{if(r&&h.readyState===4){this.log_("REST Response for "+c+" received. status:",h.status,"response:",h.responseText);let d=null;if(h.status>=200&&h.status<300){try{d=Wr(h.responseText)}catch{ht("Failed to parse JSON response for "+c+": "+h.responseText)}r(null,d)}else h.status!==401&&h.status!==404&&ht("Got unsuccessful REST response for "+c+" Status: "+h.status),r(h.status);r=null}},h.open("GET",c,!0),h.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zS{constructor(){this.rootNode_=X.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function To(){return{value:null,children:new Map}}function D_(n,e,t){if(ce(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const r=oe(e);n.children.has(r)||n.children.set(r,To());const o=n.children.get(r);e=Re(e),D_(o,e,t)}}function dc(n,e,t){n.value!==null?t(e,n.value):KS(n,(r,o)=>{const a=new we(e.toString()+"/"+r);dc(o,a,t)})}function KS(n,e){n.children.forEach((t,r)=>{e(r,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YS{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&tt(this.last_,(r,o)=>{t[r]=t[r]-o}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ff=10*1e3,jS=30*1e3,QS=5*60*1e3;class XS{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new YS(e);const r=Ff+(jS-Ff)*Math.random();Dr(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),t={};let r=!1;tt(e,(o,a)=>{a>0&&tn(this.statsToReport_,o)&&(t[o]=a,r=!0)}),r&&this.server_.reportStats(t),Dr(this.reportStats_.bind(this),Math.floor(Math.random()*2*QS))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var qt;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(qt||(qt={}));function qc(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Gc(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function zc(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(e,t,r){this.path=e,this.affectedTree=t,this.revert=r,this.type=qt.ACK_USER_WRITE,this.source=qc()}operationForChild(e){if(ce(this.path)){if(this.affectedTree.value!=null)return M(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new we(e));return new So(pe(),t,this.revert)}}else return M(oe(this.path)===e,"operationForChild called for unrelated child."),new So(Re(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(e,t){this.source=e,this.path=t,this.type=qt.LISTEN_COMPLETE}operationForChild(e){return ce(this.path)?new Kr(this.source,pe()):new Kr(this.source,Re(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(e,t,r){this.source=e,this.path=t,this.snap=r,this.type=qt.OVERWRITE}operationForChild(e){return ce(this.path)?new gi(this.source,pe(),this.snap.getImmediateChild(e)):new gi(this.source,Re(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(e,t,r){this.source=e,this.path=t,this.children=r,this.type=qt.MERGE}operationForChild(e){if(ce(this.path)){const t=this.children.subtree(new we(e));return t.isEmpty()?null:t.value?new gi(this.source,pe(),t.value):new Ji(this.source,pe(),t)}else return M(oe(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ji(this.source,Re(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(e,t,r){this.node_=e,this.fullyInitialized_=t,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ce(e))return this.isFullyInitialized()&&!this.filtered_;const t=oe(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JS{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function ZS(n,e,t,r){const o=[],a=[];return e.forEach(c=>{c.type==="child_changed"&&n.index_.indexedValueChanged(c.oldSnap,c.snapshotNode)&&a.push(VS(c.childName,c.snapshotNode))}),Or(n,o,"child_removed",e,r,t),Or(n,o,"child_added",e,r,t),Or(n,o,"child_moved",a,r,t),Or(n,o,"child_changed",e,r,t),Or(n,o,"value",e,r,t),o}function Or(n,e,t,r,o,a){const c=r.filter(h=>h.type===t);c.sort((h,d)=>tA(n,h,d)),c.forEach(h=>{const d=eA(n,h,a);o.forEach(p=>{p.respondsTo(h.type)&&e.push(p.createEvent(d,n.query_))})})}function eA(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function tA(n,e,t){if(e.childName==null||t.childName==null)throw nr("Should only compare child_ events.");const r=new ae(e.childName,e.snapshotNode),o=new ae(t.childName,t.snapshotNode);return n.index_.compare(r,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vo(n,e){return{eventCache:n,serverCache:e}}function Lr(n,e,t,r){return Vo(new mi(e,t,r),n.serverCache)}function L_(n,e,t,r){return Vo(n.eventCache,new mi(e,t,r))}function fc(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function vi(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bl;const nA=()=>(Bl||(Bl=new mt(WT)),Bl);class Ae{constructor(e,t=nA()){this.value=e,this.children=t}static fromObject(e){let t=new Ae(null);return tt(e,(r,o)=>{t=t.set(new we(r),o)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:pe(),value:this.value};if(ce(e))return null;{const r=oe(e),o=this.children.get(r);if(o!==null){const a=o.findRootMostMatchingPathAndValue(Re(e),t);return a!=null?{path:Me(new we(r),a.path),value:a.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ce(e))return this;{const t=oe(e),r=this.children.get(t);return r!==null?r.subtree(Re(e)):new Ae(null)}}set(e,t){if(ce(e))return new Ae(t,this.children);{const r=oe(e),a=(this.children.get(r)||new Ae(null)).set(Re(e),t),c=this.children.insert(r,a);return new Ae(this.value,c)}}remove(e){if(ce(e))return this.children.isEmpty()?new Ae(null):new Ae(null,this.children);{const t=oe(e),r=this.children.get(t);if(r){const o=r.remove(Re(e));let a;return o.isEmpty()?a=this.children.remove(t):a=this.children.insert(t,o),this.value===null&&a.isEmpty()?new Ae(null):new Ae(this.value,a)}else return this}}get(e){if(ce(e))return this.value;{const t=oe(e),r=this.children.get(t);return r?r.get(Re(e)):null}}setTree(e,t){if(ce(e))return t;{const r=oe(e),a=(this.children.get(r)||new Ae(null)).setTree(Re(e),t);let c;return a.isEmpty()?c=this.children.remove(r):c=this.children.insert(r,a),new Ae(this.value,c)}}fold(e){return this.fold_(pe(),e)}fold_(e,t){const r={};return this.children.inorderTraversal((o,a)=>{r[o]=a.fold_(Me(e,o),t)}),t(e,this.value,r)}findOnPath(e,t){return this.findOnPath_(e,pe(),t)}findOnPath_(e,t,r){const o=this.value?r(t,this.value):!1;if(o)return o;if(ce(e))return null;{const a=oe(e),c=this.children.get(a);return c?c.findOnPath_(Re(e),Me(t,a),r):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,pe(),t)}foreachOnPath_(e,t,r){if(ce(e))return this;{this.value&&r(t,this.value);const o=oe(e),a=this.children.get(o);return a?a.foreachOnPath_(Re(e),Me(t,o),r):new Ae(null)}}foreach(e){this.foreach_(pe(),e)}foreach_(e,t){this.children.inorderTraversal((r,o)=>{o.foreach_(Me(e,r),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,r)=>{r.value&&e(t,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e){this.writeTree_=e}static empty(){return new Gt(new Ae(null))}}function Mr(n,e,t){if(ce(e))return new Gt(new Ae(t));{const r=n.writeTree_.findRootMostValueAndPath(e);if(r!=null){const o=r.path;let a=r.value;const c=gt(o,e);return a=a.updateChild(c,t),new Gt(n.writeTree_.set(o,a))}else{const o=new Ae(t),a=n.writeTree_.setTree(e,o);return new Gt(a)}}}function pc(n,e,t){let r=n;return tt(t,(o,a)=>{r=Mr(r,Me(e,o),a)}),r}function Bf(n,e){if(ce(e))return Gt.empty();{const t=n.writeTree_.setTree(e,new Ae(null));return new Gt(t)}}function _c(n,e){return Ii(n,e)!=null}function Ii(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(gt(t.path,e)):null}function Wf(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(Ue,(r,o)=>{e.push(new ae(r,o))}):n.writeTree_.children.inorderTraversal((r,o)=>{o.value!=null&&e.push(new ae(r,o.value))}),e}function Gn(n,e){if(ce(e))return n;{const t=Ii(n,e);return t!=null?new Gt(new Ae(t)):new Gt(n.writeTree_.subtree(e))}}function gc(n){return n.writeTree_.isEmpty()}function Zi(n,e){return M_(pe(),n.writeTree_,e)}function M_(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let r=null;return e.children.inorderTraversal((o,a)=>{o===".priority"?(M(a.value!==null,"Priority writes must always be leaf nodes"),r=a.value):t=M_(Me(n,o),a,t)}),!t.getChild(n).isEmpty()&&r!==null&&(t=t.updateChild(Me(n,".priority"),r)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kc(n,e){return W_(e,n)}function iA(n,e,t,r,o){M(r>n.lastWriteId,"Stacking an older write on top of newer ones"),o===void 0&&(o=!0),n.allWrites.push({path:e,snap:t,writeId:r,visible:o}),o&&(n.visibleWrites=Mr(n.visibleWrites,e,t)),n.lastWriteId=r}function rA(n,e,t,r){M(r>n.lastWriteId,"Stacking an older merge on top of newer ones"),n.allWrites.push({path:e,children:t,writeId:r,visible:!0}),n.visibleWrites=pc(n.visibleWrites,e,t),n.lastWriteId=r}function sA(n,e){for(let t=0;t<n.allWrites.length;t++){const r=n.allWrites[t];if(r.writeId===e)return r}return null}function oA(n,e){const t=n.allWrites.findIndex(h=>h.writeId===e);M(t>=0,"removeWrite called with nonexistent writeId.");const r=n.allWrites[t];n.allWrites.splice(t,1);let o=r.visible,a=!1,c=n.allWrites.length-1;for(;o&&c>=0;){const h=n.allWrites[c];h.visible&&(c>=t&&aA(h,r.path)?o=!1:Lt(r.path,h.path)&&(a=!0)),c--}if(o){if(a)return lA(n),!0;if(r.snap)n.visibleWrites=Bf(n.visibleWrites,r.path);else{const h=r.children;tt(h,d=>{n.visibleWrites=Bf(n.visibleWrites,Me(r.path,d))})}return!0}else return!1}function aA(n,e){if(n.snap)return Lt(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&Lt(Me(n.path,t),e))return!0;return!1}function lA(n){n.visibleWrites=U_(n.allWrites,cA,pe()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function cA(n){return n.visible}function U_(n,e,t){let r=Gt.empty();for(let o=0;o<n.length;++o){const a=n[o];if(e(a)){const c=a.path;let h;if(a.snap)Lt(t,c)?(h=gt(t,c),r=Mr(r,h,a.snap)):Lt(c,t)&&(h=gt(c,t),r=Mr(r,pe(),a.snap.getChild(h)));else if(a.children){if(Lt(t,c))h=gt(t,c),r=pc(r,h,a.children);else if(Lt(c,t))if(h=gt(c,t),ce(h))r=pc(r,pe(),a.children);else{const d=ji(a.children,oe(h));if(d){const p=d.getChild(Re(h));r=Mr(r,pe(),p)}}}else throw nr("WriteRecord should have .snap or .children")}}return r}function F_(n,e,t,r,o){if(!r&&!o){const a=Ii(n.visibleWrites,e);if(a!=null)return a;{const c=Gn(n.visibleWrites,e);if(gc(c))return t;if(t==null&&!_c(c,pe()))return null;{const h=t||X.EMPTY_NODE;return Zi(c,h)}}}else{const a=Gn(n.visibleWrites,e);if(!o&&gc(a))return t;if(!o&&t==null&&!_c(a,pe()))return null;{const c=function(p){return(p.visible||o)&&(!r||!~r.indexOf(p.writeId))&&(Lt(p.path,e)||Lt(e,p.path))},h=U_(n.allWrites,c,e),d=t||X.EMPTY_NODE;return Zi(h,d)}}}function uA(n,e,t){let r=X.EMPTY_NODE;const o=Ii(n.visibleWrites,e);if(o)return o.isLeafNode()||o.forEachChild(Ue,(a,c)=>{r=r.updateImmediateChild(a,c)}),r;if(t){const a=Gn(n.visibleWrites,e);return t.forEachChild(Ue,(c,h)=>{const d=Zi(Gn(a,new we(c)),h);r=r.updateImmediateChild(c,d)}),Wf(a).forEach(c=>{r=r.updateImmediateChild(c.name,c.node)}),r}else{const a=Gn(n.visibleWrites,e);return Wf(a).forEach(c=>{r=r.updateImmediateChild(c.name,c.node)}),r}}function hA(n,e,t,r,o){M(r||o,"Either existingEventSnap or existingServerSnap must exist");const a=Me(e,t);if(_c(n.visibleWrites,a))return null;{const c=Gn(n.visibleWrites,a);return gc(c)?o.getChild(t):Zi(c,o.getChild(t))}}function dA(n,e,t,r){const o=Me(e,t),a=Ii(n.visibleWrites,o);if(a!=null)return a;if(r.isCompleteForChild(t)){const c=Gn(n.visibleWrites,o);return Zi(c,r.getNode().getImmediateChild(t))}else return null}function fA(n,e){return Ii(n.visibleWrites,e)}function pA(n,e,t,r,o,a,c){let h;const d=Gn(n.visibleWrites,e),p=Ii(d,pe());if(p!=null)h=p;else if(t!=null)h=Zi(d,t);else return[];if(h=h.withIndex(c),!h.isEmpty()&&!h.isLeafNode()){const y=[],v=c.getCompare(),E=a?h.getReverseIteratorFrom(r,c):h.getIteratorFrom(r,c);let T=E.getNext();for(;T&&y.length<o;)v(T,r)!==0&&y.push(T),T=E.getNext();return y}else return[]}function _A(){return{visibleWrites:Gt.empty(),allWrites:[],lastWriteId:-1}}function Ao(n,e,t,r){return F_(n.writeTree,n.treePath,e,t,r)}function Yc(n,e){return uA(n.writeTree,n.treePath,e)}function Hf(n,e,t,r){return hA(n.writeTree,n.treePath,e,t,r)}function Ro(n,e){return fA(n.writeTree,Me(n.treePath,e))}function gA(n,e,t,r,o,a){return pA(n.writeTree,n.treePath,e,t,r,o,a)}function jc(n,e,t){return dA(n.writeTree,n.treePath,e,t)}function B_(n,e){return W_(Me(n.treePath,e),n.writeTree)}function W_(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mA{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,r=e.childName;M(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),M(r!==".priority","Only non-priority child changes can be tracked.");const o=this.changeMap.get(r);if(o){const a=o.type;if(t==="child_added"&&a==="child_removed")this.changeMap.set(r,Gr(r,e.snapshotNode,o.snapshotNode));else if(t==="child_removed"&&a==="child_added")this.changeMap.delete(r);else if(t==="child_removed"&&a==="child_changed")this.changeMap.set(r,qr(r,o.oldSnap));else if(t==="child_changed"&&a==="child_added")this.changeMap.set(r,Xi(r,e.snapshotNode));else if(t==="child_changed"&&a==="child_changed")this.changeMap.set(r,Gr(r,e.snapshotNode,o.oldSnap));else throw nr("Illegal combination of changes: "+e+" occurred after "+o)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vA{getCompleteChild(e){return null}getChildAfterChild(e,t,r){return null}}const H_=new vA;class Qc{constructor(e,t,r=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=r}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new mi(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return jc(this.writes_,e,r)}}getChildAfterChild(e,t,r){const o=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:vi(this.viewCache_),a=gA(this.writes_,o,t,1,r,e);return a.length===0?null:a[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yA(n){return{filter:n}}function wA(n,e){M(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),M(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function EA(n,e,t,r,o){const a=new mA;let c,h;if(t.type===qt.OVERWRITE){const p=t;p.source.fromUser?c=mc(n,e,p.path,p.snap,r,o,a):(M(p.source.fromServer,"Unknown source."),h=p.source.tagged||e.serverCache.isFiltered()&&!ce(p.path),c=No(n,e,p.path,p.snap,r,o,h,a))}else if(t.type===qt.MERGE){const p=t;p.source.fromUser?c=IA(n,e,p.path,p.children,r,o,a):(M(p.source.fromServer,"Unknown source."),h=p.source.tagged||e.serverCache.isFiltered(),c=vc(n,e,p.path,p.children,r,o,h,a))}else if(t.type===qt.ACK_USER_WRITE){const p=t;p.revert?c=SA(n,e,p.path,r,o,a):c=CA(n,e,p.path,p.affectedTree,r,o,a)}else if(t.type===qt.LISTEN_COMPLETE)c=TA(n,e,t.path,r,a);else throw nr("Unknown operation type: "+t.type);const d=a.getChanges();return bA(e,c,d),{viewCache:c,changes:d}}function bA(n,e,t){const r=e.eventCache;if(r.isFullyInitialized()){const o=r.getNode().isLeafNode()||r.getNode().isEmpty(),a=fc(n);(t.length>0||!n.eventCache.isFullyInitialized()||o&&!r.getNode().equals(a)||!r.getNode().getPriority().equals(a.getPriority()))&&t.push(P_(fc(e)))}}function $_(n,e,t,r,o,a){const c=e.eventCache;if(Ro(r,t)!=null)return e;{let h,d;if(ce(t))if(M(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const p=vi(e),y=p instanceof X?p:X.EMPTY_NODE,v=Yc(r,y);h=n.filter.updateFullNode(e.eventCache.getNode(),v,a)}else{const p=Ao(r,vi(e));h=n.filter.updateFullNode(e.eventCache.getNode(),p,a)}else{const p=oe(t);if(p===".priority"){M(Yn(t)===1,"Can't have a priority with additional path components");const y=c.getNode();d=e.serverCache.getNode();const v=Hf(r,t,y,d);v!=null?h=n.filter.updatePriority(y,v):h=c.getNode()}else{const y=Re(t);let v;if(c.isCompleteForChild(p)){d=e.serverCache.getNode();const E=Hf(r,t,c.getNode(),d);E!=null?v=c.getNode().getImmediateChild(p).updateChild(y,E):v=c.getNode().getImmediateChild(p)}else v=jc(r,p,e.serverCache);v!=null?h=n.filter.updateChild(c.getNode(),p,v,y,o,a):h=c.getNode()}}return Lr(e,h,c.isFullyInitialized()||ce(t),n.filter.filtersNodes())}}function No(n,e,t,r,o,a,c,h){const d=e.serverCache;let p;const y=c?n.filter:n.filter.getIndexedFilter();if(ce(t))p=y.updateFullNode(d.getNode(),r,null);else if(y.filtersNodes()&&!d.isFiltered()){const T=d.getNode().updateChild(t,r);p=y.updateFullNode(d.getNode(),T,null)}else{const T=oe(t);if(!d.isCompleteForPath(t)&&Yn(t)>1)return e;const A=Re(t),D=d.getNode().getImmediateChild(T).updateChild(A,r);T===".priority"?p=y.updatePriority(d.getNode(),D):p=y.updateChild(d.getNode(),T,D,A,H_,null)}const v=L_(e,p,d.isFullyInitialized()||ce(t),y.filtersNodes()),E=new Qc(o,v,a);return $_(n,v,t,o,E,h)}function mc(n,e,t,r,o,a,c){const h=e.eventCache;let d,p;const y=new Qc(o,e,a);if(ce(t))p=n.filter.updateFullNode(e.eventCache.getNode(),r,c),d=Lr(e,p,!0,n.filter.filtersNodes());else{const v=oe(t);if(v===".priority")p=n.filter.updatePriority(e.eventCache.getNode(),r),d=Lr(e,p,h.isFullyInitialized(),h.isFiltered());else{const E=Re(t),T=h.getNode().getImmediateChild(v);let A;if(ce(E))A=r;else{const L=y.getCompleteChild(v);L!=null?Fc(E)===".priority"&&L.getChild(S_(E)).isEmpty()?A=L:A=L.updateChild(E,r):A=X.EMPTY_NODE}if(T.equals(A))d=e;else{const L=n.filter.updateChild(h.getNode(),v,A,E,y,c);d=Lr(e,L,h.isFullyInitialized(),n.filter.filtersNodes())}}}return d}function $f(n,e){return n.eventCache.isCompleteForChild(e)}function IA(n,e,t,r,o,a,c){let h=e;return r.foreach((d,p)=>{const y=Me(t,d);$f(e,oe(y))&&(h=mc(n,h,y,p,o,a,c))}),r.foreach((d,p)=>{const y=Me(t,d);$f(e,oe(y))||(h=mc(n,h,y,p,o,a,c))}),h}function Vf(n,e,t){return t.foreach((r,o)=>{e=e.updateChild(r,o)}),e}function vc(n,e,t,r,o,a,c,h){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let d=e,p;ce(t)?p=r:p=new Ae(null).setTree(t,r);const y=e.serverCache.getNode();return p.children.inorderTraversal((v,E)=>{if(y.hasChild(v)){const T=e.serverCache.getNode().getImmediateChild(v),A=Vf(n,T,E);d=No(n,d,new we(v),A,o,a,c,h)}}),p.children.inorderTraversal((v,E)=>{const T=!e.serverCache.isCompleteForChild(v)&&E.value===null;if(!y.hasChild(v)&&!T){const A=e.serverCache.getNode().getImmediateChild(v),L=Vf(n,A,E);d=No(n,d,new we(v),L,o,a,c,h)}}),d}function CA(n,e,t,r,o,a,c){if(Ro(o,t)!=null)return e;const h=e.serverCache.isFiltered(),d=e.serverCache;if(r.value!=null){if(ce(t)&&d.isFullyInitialized()||d.isCompleteForPath(t))return No(n,e,t,d.getNode().getChild(t),o,a,h,c);if(ce(t)){let p=new Ae(null);return d.getNode().forEachChild(qi,(y,v)=>{p=p.set(new we(y),v)}),vc(n,e,t,p,o,a,h,c)}else return e}else{let p=new Ae(null);return r.foreach((y,v)=>{const E=Me(t,y);d.isCompleteForPath(E)&&(p=p.set(y,d.getNode().getChild(E)))}),vc(n,e,t,p,o,a,h,c)}}function TA(n,e,t,r,o){const a=e.serverCache,c=L_(e,a.getNode(),a.isFullyInitialized()||ce(t),a.isFiltered());return $_(n,c,t,r,H_,o)}function SA(n,e,t,r,o,a){let c;if(Ro(r,t)!=null)return e;{const h=new Qc(r,e,o),d=e.eventCache.getNode();let p;if(ce(t)||oe(t)===".priority"){let y;if(e.serverCache.isFullyInitialized())y=Ao(r,vi(e));else{const v=e.serverCache.getNode();M(v instanceof X,"serverChildren would be complete if leaf node"),y=Yc(r,v)}y=y,p=n.filter.updateFullNode(d,y,a)}else{const y=oe(t);let v=jc(r,y,e.serverCache);v==null&&e.serverCache.isCompleteForChild(y)&&(v=d.getImmediateChild(y)),v!=null?p=n.filter.updateChild(d,y,v,Re(t),h,a):e.eventCache.getNode().hasChild(y)?p=n.filter.updateChild(d,y,X.EMPTY_NODE,Re(t),h,a):p=d,p.isEmpty()&&e.serverCache.isFullyInitialized()&&(c=Ao(r,vi(e)),c.isLeafNode()&&(p=n.filter.updateFullNode(p,c,a)))}return c=e.serverCache.isFullyInitialized()||Ro(r,pe())!=null,Lr(e,p,c,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AA{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,o=new $c(r.getIndex()),a=GS(r);this.processor_=yA(a);const c=t.serverCache,h=t.eventCache,d=o.updateFullNode(X.EMPTY_NODE,c.getNode(),null),p=a.updateFullNode(X.EMPTY_NODE,h.getNode(),null),y=new mi(d,c.isFullyInitialized(),o.filtersNodes()),v=new mi(p,h.isFullyInitialized(),a.filtersNodes());this.viewCache_=Vo(v,y),this.eventGenerator_=new JS(this.query_)}get query(){return this.query_}}function RA(n){return n.viewCache_.serverCache.getNode()}function NA(n,e){const t=vi(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!ce(e)&&!t.getImmediateChild(oe(e)).isEmpty())?t.getChild(e):null}function qf(n){return n.eventRegistrations_.length===0}function kA(n,e){n.eventRegistrations_.push(e)}function Gf(n,e,t){const r=[];if(t){M(e==null,"A cancel should cancel all event registrations.");const o=n.query._path;n.eventRegistrations_.forEach(a=>{const c=a.createCancelEvent(t,o);c&&r.push(c)})}if(e){let o=[];for(let a=0;a<n.eventRegistrations_.length;++a){const c=n.eventRegistrations_[a];if(!c.matches(e))o.push(c);else if(e.hasAnyCallback()){o=o.concat(n.eventRegistrations_.slice(a+1));break}}n.eventRegistrations_=o}else n.eventRegistrations_=[];return r}function zf(n,e,t,r){e.type===qt.MERGE&&e.source.queryId!==null&&(M(vi(n.viewCache_),"We should always have a full cache before handling merges"),M(fc(n.viewCache_),"Missing event cache, even though we have a server cache"));const o=n.viewCache_,a=EA(n.processor_,o,e,t,r);return wA(n.processor_,a.viewCache),M(a.viewCache.serverCache.isFullyInitialized()||!o.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=a.viewCache,V_(n,a.changes,a.viewCache.eventCache.getNode(),null)}function OA(n,e){const t=n.viewCache_.eventCache,r=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(Ue,(a,c)=>{r.push(Xi(a,c))}),t.isFullyInitialized()&&r.push(P_(t.getNode())),V_(n,r,t.getNode(),e)}function V_(n,e,t,r){const o=r?[r]:n.eventRegistrations_;return ZS(n.eventGenerator_,e,t,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ko;class xA{constructor(){this.views=new Map}}function PA(n){M(!ko,"__referenceConstructor has already been defined"),ko=n}function DA(){return M(ko,"Reference.ts has not been loaded"),ko}function LA(n){return n.views.size===0}function Xc(n,e,t,r){const o=e.source.queryId;if(o!==null){const a=n.views.get(o);return M(a!=null,"SyncTree gave us an op for an invalid query."),zf(a,e,t,r)}else{let a=[];for(const c of n.views.values())a=a.concat(zf(c,e,t,r));return a}}function MA(n,e,t,r,o){const a=e._queryIdentifier,c=n.views.get(a);if(!c){let h=Ao(t,o?r:null),d=!1;h?d=!0:r instanceof X?(h=Yc(t,r),d=!1):(h=X.EMPTY_NODE,d=!1);const p=Vo(new mi(h,d,!1),new mi(r,o,!1));return new AA(e,p)}return c}function UA(n,e,t,r,o,a){const c=MA(n,e,r,o,a);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,c),kA(c,t),OA(c,t)}function FA(n,e,t,r){const o=e._queryIdentifier,a=[];let c=[];const h=jn(n);if(o==="default")for(const[d,p]of n.views.entries())c=c.concat(Gf(p,t,r)),qf(p)&&(n.views.delete(d),p.query._queryParams.loadsAllData()||a.push(p.query));else{const d=n.views.get(o);d&&(c=c.concat(Gf(d,t,r)),qf(d)&&(n.views.delete(o),d.query._queryParams.loadsAllData()||a.push(d.query)))}return h&&!jn(n)&&a.push(new(DA())(e._repo,e._path)),{removed:a,events:c}}function q_(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function Gi(n,e){let t=null;for(const r of n.views.values())t=t||NA(r,e);return t}function G_(n,e){if(e._queryParams.loadsAllData())return qo(n);{const r=e._queryIdentifier;return n.views.get(r)}}function z_(n,e){return G_(n,e)!=null}function jn(n){return qo(n)!=null}function qo(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Oo;function BA(n){M(!Oo,"__referenceConstructor has already been defined"),Oo=n}function WA(){return M(Oo,"Reference.ts has not been loaded"),Oo}let HA=1;class Kf{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ae(null),this.pendingWriteTree_=_A(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function K_(n,e,t,r,o){return iA(n.pendingWriteTree_,e,t,r,o),o?sr(n,new gi(qc(),e,t)):[]}function $A(n,e,t,r){rA(n.pendingWriteTree_,e,t,r);const o=Ae.fromObject(t);return sr(n,new Ji(qc(),e,o))}function $n(n,e,t=!1){const r=sA(n.pendingWriteTree_,e);if(oA(n.pendingWriteTree_,e)){let a=new Ae(null);return r.snap!=null?a=a.set(pe(),!0):tt(r.children,c=>{a=a.set(new we(c),!0)}),sr(n,new So(r.path,a,t))}else return[]}function Go(n,e,t){return sr(n,new gi(Gc(),e,t))}function VA(n,e,t){const r=Ae.fromObject(t);return sr(n,new Ji(Gc(),e,r))}function qA(n,e){return sr(n,new Kr(Gc(),e))}function GA(n,e,t){const r=Zc(n,t);if(r){const o=eu(r),a=o.path,c=o.queryId,h=gt(a,e),d=new Kr(zc(c),h);return tu(n,a,d)}else return[]}function yc(n,e,t,r,o=!1){const a=e._path,c=n.syncPointTree_.get(a);let h=[];if(c&&(e._queryIdentifier==="default"||z_(c,e))){const d=FA(c,e,t,r);LA(c)&&(n.syncPointTree_=n.syncPointTree_.remove(a));const p=d.removed;if(h=d.events,!o){const y=p.findIndex(E=>E._queryParams.loadsAllData())!==-1,v=n.syncPointTree_.findOnPath(a,(E,T)=>jn(T));if(y&&!v){const E=n.syncPointTree_.subtree(a);if(!E.isEmpty()){const T=YA(E);for(let A=0;A<T.length;++A){const L=T[A],D=L.query,F=Q_(n,L);n.listenProvider_.startListening(Ur(D),xo(n,D),F.hashFn,F.onComplete)}}}!v&&p.length>0&&!r&&(y?n.listenProvider_.stopListening(Ur(e),null):p.forEach(E=>{const T=n.queryToTagMap.get(zo(E));n.listenProvider_.stopListening(Ur(E),T)}))}jA(n,p)}return h}function zA(n,e,t,r){const o=Zc(n,r);if(o!=null){const a=eu(o),c=a.path,h=a.queryId,d=gt(c,e),p=new gi(zc(h),d,t);return tu(n,c,p)}else return[]}function KA(n,e,t,r){const o=Zc(n,r);if(o){const a=eu(o),c=a.path,h=a.queryId,d=gt(c,e),p=Ae.fromObject(t),y=new Ji(zc(h),d,p);return tu(n,c,y)}else return[]}function Yf(n,e,t,r=!1){const o=e._path;let a=null,c=!1;n.syncPointTree_.foreachOnPath(o,(E,T)=>{const A=gt(E,o);a=a||Gi(T,A),c=c||jn(T)});let h=n.syncPointTree_.get(o);h?(c=c||jn(h),a=a||Gi(h,pe())):(h=new xA,n.syncPointTree_=n.syncPointTree_.set(o,h));let d;a!=null?d=!0:(d=!1,a=X.EMPTY_NODE,n.syncPointTree_.subtree(o).foreachChild((T,A)=>{const L=Gi(A,pe());L&&(a=a.updateImmediateChild(T,L))}));const p=z_(h,e);if(!p&&!e._queryParams.loadsAllData()){const E=zo(e);M(!n.queryToTagMap.has(E),"View does not exist, but we have a tag");const T=QA();n.queryToTagMap.set(E,T),n.tagToQueryMap.set(T,E)}const y=Kc(n.pendingWriteTree_,o);let v=UA(h,e,t,y,a,d);if(!p&&!c&&!r){const E=G_(h,e);v=v.concat(XA(n,e,E))}return v}function Jc(n,e,t){const o=n.pendingWriteTree_,a=n.syncPointTree_.findOnPath(e,(c,h)=>{const d=gt(c,e),p=Gi(h,d);if(p)return p});return F_(o,e,a,t,!0)}function sr(n,e){return Y_(e,n.syncPointTree_,null,Kc(n.pendingWriteTree_,pe()))}function Y_(n,e,t,r){if(ce(n.path))return j_(n,e,t,r);{const o=e.get(pe());t==null&&o!=null&&(t=Gi(o,pe()));let a=[];const c=oe(n.path),h=n.operationForChild(c),d=e.children.get(c);if(d&&h){const p=t?t.getImmediateChild(c):null,y=B_(r,c);a=a.concat(Y_(h,d,p,y))}return o&&(a=a.concat(Xc(o,n,r,t))),a}}function j_(n,e,t,r){const o=e.get(pe());t==null&&o!=null&&(t=Gi(o,pe()));let a=[];return e.children.inorderTraversal((c,h)=>{const d=t?t.getImmediateChild(c):null,p=B_(r,c),y=n.operationForChild(c);y&&(a=a.concat(j_(y,h,d,p)))}),o&&(a=a.concat(Xc(o,n,r,t))),a}function Q_(n,e){const t=e.query,r=xo(n,t);return{hashFn:()=>(RA(e)||X.EMPTY_NODE).hash(),onComplete:o=>{if(o==="ok")return r?GA(n,t._path,r):qA(n,t._path);{const a=VT(o,t);return yc(n,t,null,a)}}}}function xo(n,e){const t=zo(e);return n.queryToTagMap.get(t)}function zo(n){return n._path.toString()+"$"+n._queryIdentifier}function Zc(n,e){return n.tagToQueryMap.get(e)}function eu(n){const e=n.indexOf("$");return M(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new we(n.substr(0,e))}}function tu(n,e,t){const r=n.syncPointTree_.get(e);M(r,"Missing sync point for query tag that we're tracking");const o=Kc(n.pendingWriteTree_,e);return Xc(r,t,o,null)}function YA(n){return n.fold((e,t,r)=>{if(t&&jn(t))return[qo(t)];{let o=[];return t&&(o=q_(t)),tt(r,(a,c)=>{o=o.concat(c)}),o}})}function Ur(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(WA())(n._repo,n._path):n}function jA(n,e){for(let t=0;t<e.length;++t){const r=e[t];if(!r._queryParams.loadsAllData()){const o=zo(r),a=n.queryToTagMap.get(o);n.queryToTagMap.delete(o),n.tagToQueryMap.delete(a)}}}function QA(){return HA++}function XA(n,e,t){const r=e._path,o=xo(n,e),a=Q_(n,t),c=n.listenProvider_.startListening(Ur(e),o,a.hashFn,a.onComplete),h=n.syncPointTree_.subtree(r);if(o)M(!jn(h.value),"If we're adding a query, it shouldn't be shadowed");else{const d=h.fold((p,y,v)=>{if(!ce(p)&&y&&jn(y))return[qo(y).query];{let E=[];return y&&(E=E.concat(q_(y).map(T=>T.query))),tt(v,(T,A)=>{E=E.concat(A)}),E}});for(let p=0;p<d.length;++p){const y=d[p];n.listenProvider_.stopListening(Ur(y),xo(n,y))}}return c}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new nu(t)}node(){return this.node_}}class iu{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Me(this.path_,e);return new iu(this.syncTree_,t)}node(){return Jc(this.syncTree_,this.path_)}}const JA=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},jf=function(n,e,t){if(!n||typeof n!="object")return n;if(M(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return ZA(n[".sv"],e,t);if(typeof n[".sv"]=="object")return eR(n[".sv"],e);M(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},ZA=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:M(!1,"Unexpected server value: "+n)}},eR=function(n,e,t){n.hasOwnProperty("increment")||M(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const r=n.increment;typeof r!="number"&&M(!1,"Unexpected increment value: "+r);const o=e.node();if(M(o!==null&&typeof o<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!o.isLeafNode())return r;const c=o.getValue();return typeof c!="number"?r:c+r},X_=function(n,e,t,r){return ru(e,new iu(t,n),r)},J_=function(n,e,t){return ru(n,new nu(e),t)};function ru(n,e,t){const r=n.getPriority().val(),o=jf(r,e.getImmediateChild(".priority"),t);let a;if(n.isLeafNode()){const c=n,h=jf(c.getValue(),e,t);return h!==c.getValue()||o!==c.getPriority().val()?new ze(h,je(o)):n}else{const c=n;return a=c,o!==c.getPriority().val()&&(a=a.updatePriority(new ze(o))),c.forEachChild(Ue,(h,d)=>{const p=ru(d,e.getImmediateChild(h),t);p!==d&&(a=a.updateImmediateChild(h,p))}),a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(e="",t=null,r={children:{},childCount:0}){this.name=e,this.parent=t,this.node=r}}function ou(n,e){let t=e instanceof we?e:new we(e),r=n,o=oe(t);for(;o!==null;){const a=ji(r.node.children,o)||{children:{},childCount:0};r=new su(o,r,a),t=Re(t),o=oe(t)}return r}function or(n){return n.node.value}function Z_(n,e){n.node.value=e,wc(n)}function eg(n){return n.node.childCount>0}function tR(n){return or(n)===void 0&&!eg(n)}function Ko(n,e){tt(n.node.children,(t,r)=>{e(new su(t,n,r))})}function tg(n,e,t,r){t&&!r&&e(n),Ko(n,o=>{tg(o,e,!0,r)}),t&&r&&e(n)}function nR(n,e,t){let r=t?n:n.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function is(n){return new we(n.parent===null?n.name:is(n.parent)+"/"+n.name)}function wc(n){n.parent!==null&&iR(n.parent,n.name,n)}function iR(n,e,t){const r=tR(t),o=tn(n.node.children,e);r&&o?(delete n.node.children[e],n.node.childCount--,wc(n)):!r&&!o&&(n.node.children[e]=t.node,n.node.childCount++,wc(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rR=/[\[\].#$\/\u0000-\u001F\u007F]/,sR=/[\[\].#$\u0000-\u001F\u007F]/,Wl=10*1024*1024,au=function(n){return typeof n=="string"&&n.length!==0&&!rR.test(n)},ng=function(n){return typeof n=="string"&&n.length!==0&&!sR.test(n)},oR=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),ng(n)},aR=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!Pc(n)||n&&typeof n=="object"&&tn(n,".sv")},ig=function(n,e,t,r){r&&e===void 0||Yo(Bo(n,"value"),e,t)},Yo=function(n,e,t){const r=t instanceof we?new IS(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+li(r));if(typeof e=="function")throw new Error(n+"contains a function "+li(r)+" with contents = "+e.toString());if(Pc(e))throw new Error(n+"contains "+e.toString()+" "+li(r));if(typeof e=="string"&&e.length>Wl/3&&Wo(e)>Wl)throw new Error(n+"contains a string greater than "+Wl+" utf8 bytes "+li(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let o=!1,a=!1;if(tt(e,(c,h)=>{if(c===".value")o=!0;else if(c!==".priority"&&c!==".sv"&&(a=!0,!au(c)))throw new Error(n+" contains an invalid key ("+c+") "+li(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);CS(r,c),Yo(n,h,r),TS(r)}),o&&a)throw new Error(n+' contains ".value" child '+li(r)+" in addition to actual children.")}},lR=function(n,e){let t,r;for(t=0;t<e.length;t++){r=e[t];const a=Vr(r);for(let c=0;c<a.length;c++)if(!(a[c]===".priority"&&c===a.length-1)){if(!au(a[c]))throw new Error(n+"contains an invalid key ("+a[c]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(bS);let o=null;for(t=0;t<e.length;t++){if(r=e[t],o!==null&&Lt(o,r))throw new Error(n+"contains a path "+o.toString()+" that is ancestor of another path "+r.toString());o=r}},cR=function(n,e,t,r){if(r&&e===void 0)return;const o=Bo(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(o+" must be an object containing the children to replace.");const a=[];tt(e,(c,h)=>{const d=new we(c);if(Yo(o,h,Me(t,d)),Fc(d)===".priority"&&!aR(h))throw new Error(o+"contains an invalid value for '"+d.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");a.push(d)}),lR(o,a)},rg=function(n,e,t,r){if(!(r&&t===void 0)&&!ng(t))throw new Error(Bo(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},uR=function(n,e,t,r){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),rg(n,e,t,r)},sg=function(n,e){if(oe(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},hR=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!au(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!oR(t))throw new Error(Bo(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dR{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function jo(n,e){let t=null;for(let r=0;r<e.length;r++){const o=e[r],a=o.getPath();t!==null&&!Bc(a,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:a}),t.events.push(o)}t&&n.eventLists_.push(t)}function og(n,e,t){jo(n,t),ag(n,r=>Bc(r,e))}function zt(n,e,t){jo(n,t),ag(n,r=>Lt(r,e)||Lt(e,r))}function ag(n,e){n.recursionDepth_++;let t=!0;for(let r=0;r<n.eventLists_.length;r++){const o=n.eventLists_[r];if(o){const a=o.path;e(a)?(fR(n.eventLists_[r]),n.eventLists_[r]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function fR(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const r=t.getEventRunner();hi&&Ze("event: "+t.toString()),rr(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pR="repo_interrupt",_R=25;class gR{constructor(e,t,r,o){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=r,this.appCheckProvider_=o,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new dR,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=To(),this.transactionQueueTree_=new su,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function mR(n,e,t){if(n.stats_=Mc(n.repoInfo_),n.forceRestClient_||KT())n.server_=new Co(n.repoInfo_,(r,o,a,c)=>{Qf(n,r,o,a,c)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>Xf(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Qe(t)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}n.persistentConnection_=new yn(n.repoInfo_,e,(r,o,a,c)=>{Qf(n,r,o,a,c)},r=>{Xf(n,r)},r=>{vR(n,r)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(r=>{n.server_.refreshAuthToken(r)}),n.appCheckProvider_.addTokenChangeListener(r=>{n.server_.refreshAppCheckToken(r.token)}),n.statsReporter_=JT(n.repoInfo_,()=>new XS(n.stats_,n.server_)),n.infoData_=new zS,n.infoSyncTree_=new Kf({startListening:(r,o,a,c)=>{let h=[];const d=n.infoData_.getNode(r._path);return d.isEmpty()||(h=Go(n.infoSyncTree_,r._path,d),setTimeout(()=>{c("ok")},0)),h},stopListening:()=>{}}),lu(n,"connected",!1),n.serverSyncTree_=new Kf({startListening:(r,o,a,c)=>(n.server_.listen(r,a,o,(h,d)=>{const p=c(h,d);zt(n.eventQueue_,r._path,p)}),[]),stopListening:(r,o)=>{n.server_.unlisten(r,o)}})}function lg(n){const t=n.infoData_.getNode(new we(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Qo(n){return JA({timestamp:lg(n)})}function Qf(n,e,t,r,o){n.dataUpdateCount++;const a=new we(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let c=[];if(o)if(r){const d=vo(t,p=>je(p));c=KA(n.serverSyncTree_,a,d,o)}else{const d=je(t);c=zA(n.serverSyncTree_,a,d,o)}else if(r){const d=vo(t,p=>je(p));c=VA(n.serverSyncTree_,a,d)}else{const d=je(t);c=Go(n.serverSyncTree_,a,d)}let h=a;c.length>0&&(h=er(n,a)),zt(n.eventQueue_,h,c)}function Xf(n,e){lu(n,"connected",e),e===!1&&ER(n)}function vR(n,e){tt(e,(t,r)=>{lu(n,t,r)})}function lu(n,e,t){const r=new we("/.info/"+e),o=je(t);n.infoData_.updateSnapshot(r,o);const a=Go(n.infoSyncTree_,r,o);zt(n.eventQueue_,r,a)}function cu(n){return n.nextWriteId_++}function yR(n,e,t,r,o){Xo(n,"set",{path:e.toString(),value:t,priority:r});const a=Qo(n),c=je(t,r),h=Jc(n.serverSyncTree_,e),d=J_(c,h,a),p=cu(n),y=K_(n.serverSyncTree_,e,d,p,!0);jo(n.eventQueue_,y),n.server_.put(e.toString(),c.val(!0),(E,T)=>{const A=E==="ok";A||ht("set at "+e+" failed: "+E);const L=$n(n.serverSyncTree_,p,!A);zt(n.eventQueue_,e,L),Ec(n,o,E,T)});const v=hu(n,e);er(n,v),zt(n.eventQueue_,v,[])}function wR(n,e,t,r){Xo(n,"update",{path:e.toString(),value:t});let o=!0;const a=Qo(n),c={};if(tt(t,(h,d)=>{o=!1,c[h]=X_(Me(e,h),je(d),n.serverSyncTree_,a)}),o)Ze("update() called with empty data.  Don't do anything."),Ec(n,r,"ok",void 0);else{const h=cu(n),d=$A(n.serverSyncTree_,e,c,h);jo(n.eventQueue_,d),n.server_.merge(e.toString(),t,(p,y)=>{const v=p==="ok";v||ht("update at "+e+" failed: "+p);const E=$n(n.serverSyncTree_,h,!v),T=E.length>0?er(n,e):e;zt(n.eventQueue_,T,E),Ec(n,r,p,y)}),tt(t,p=>{const y=hu(n,Me(e,p));er(n,y)}),zt(n.eventQueue_,e,[])}}function ER(n){Xo(n,"onDisconnectEvents");const e=Qo(n),t=To();dc(n.onDisconnect_,pe(),(o,a)=>{const c=X_(o,a,n.serverSyncTree_,e);D_(t,o,c)});let r=[];dc(t,pe(),(o,a)=>{r=r.concat(Go(n.serverSyncTree_,o,a));const c=hu(n,o);er(n,c)}),n.onDisconnect_=To(),zt(n.eventQueue_,pe(),r)}function bR(n,e,t){let r;oe(e._path)===".info"?r=Yf(n.infoSyncTree_,e,t):r=Yf(n.serverSyncTree_,e,t),og(n.eventQueue_,e._path,r)}function Jf(n,e,t){let r;oe(e._path)===".info"?r=yc(n.infoSyncTree_,e,t):r=yc(n.serverSyncTree_,e,t),og(n.eventQueue_,e._path,r)}function IR(n){n.persistentConnection_&&n.persistentConnection_.interrupt(pR)}function Xo(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),Ze(t,...e)}function Ec(n,e,t,r){e&&rr(()=>{if(t==="ok")e(null);else{const o=(t||"error").toUpperCase();let a=o;r&&(a+=": "+r);const c=new Error(a);c.code=o,e(c)}})}function cg(n,e,t){return Jc(n.serverSyncTree_,e,t)||X.EMPTY_NODE}function uu(n,e=n.transactionQueueTree_){if(e||Jo(n,e),or(e)){const t=hg(n,e);M(t.length>0,"Sending zero length transaction queue"),t.every(o=>o.status===0)&&CR(n,is(e),t)}else eg(e)&&Ko(e,t=>{uu(n,t)})}function CR(n,e,t){const r=t.map(p=>p.currentWriteId),o=cg(n,e,r);let a=o;const c=o.hash();for(let p=0;p<t.length;p++){const y=t[p];M(y.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),y.status=1,y.retryCount++;const v=gt(e,y.path);a=a.updateChild(v,y.currentOutputSnapshotRaw)}const h=a.val(!0),d=e;n.server_.put(d.toString(),h,p=>{Xo(n,"transaction put response",{path:d.toString(),status:p});let y=[];if(p==="ok"){const v=[];for(let E=0;E<t.length;E++)t[E].status=2,y=y.concat($n(n.serverSyncTree_,t[E].currentWriteId)),t[E].onComplete&&v.push(()=>t[E].onComplete(null,!0,t[E].currentOutputSnapshotResolved)),t[E].unwatcher();Jo(n,ou(n.transactionQueueTree_,e)),uu(n,n.transactionQueueTree_),zt(n.eventQueue_,e,y);for(let E=0;E<v.length;E++)rr(v[E])}else{if(p==="datastale")for(let v=0;v<t.length;v++)t[v].status===3?t[v].status=4:t[v].status=0;else{ht("transaction at "+d.toString()+" failed: "+p);for(let v=0;v<t.length;v++)t[v].status=4,t[v].abortReason=p}er(n,e)}},c)}function er(n,e){const t=ug(n,e),r=is(t),o=hg(n,t);return TR(n,o,r),r}function TR(n,e,t){if(e.length===0)return;const r=[];let o=[];const c=e.filter(h=>h.status===0).map(h=>h.currentWriteId);for(let h=0;h<e.length;h++){const d=e[h],p=gt(t,d.path);let y=!1,v;if(M(p!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),d.status===4)y=!0,v=d.abortReason,o=o.concat($n(n.serverSyncTree_,d.currentWriteId,!0));else if(d.status===0)if(d.retryCount>=_R)y=!0,v="maxretry",o=o.concat($n(n.serverSyncTree_,d.currentWriteId,!0));else{const E=cg(n,d.path,c);d.currentInputSnapshot=E;const T=e[h].update(E.val());if(T!==void 0){Yo("transaction failed: Data returned ",T,d.path);let A=je(T);typeof T=="object"&&T!=null&&tn(T,".priority")||(A=A.updatePriority(E.getPriority()));const D=d.currentWriteId,F=Qo(n),ee=J_(A,E,F);d.currentOutputSnapshotRaw=A,d.currentOutputSnapshotResolved=ee,d.currentWriteId=cu(n),c.splice(c.indexOf(D),1),o=o.concat(K_(n.serverSyncTree_,d.path,ee,d.currentWriteId,d.applyLocally)),o=o.concat($n(n.serverSyncTree_,D,!0))}else y=!0,v="nodata",o=o.concat($n(n.serverSyncTree_,d.currentWriteId,!0))}zt(n.eventQueue_,t,o),o=[],y&&(e[h].status=2,function(E){setTimeout(E,Math.floor(0))}(e[h].unwatcher),e[h].onComplete&&(v==="nodata"?r.push(()=>e[h].onComplete(null,!1,e[h].currentInputSnapshot)):r.push(()=>e[h].onComplete(new Error(v),!1,null))))}Jo(n,n.transactionQueueTree_);for(let h=0;h<r.length;h++)rr(r[h]);uu(n,n.transactionQueueTree_)}function ug(n,e){let t,r=n.transactionQueueTree_;for(t=oe(e);t!==null&&or(r)===void 0;)r=ou(r,t),e=Re(e),t=oe(e);return r}function hg(n,e){const t=[];return dg(n,e,t),t.sort((r,o)=>r.order-o.order),t}function dg(n,e,t){const r=or(e);if(r)for(let o=0;o<r.length;o++)t.push(r[o]);Ko(e,o=>{dg(n,o,t)})}function Jo(n,e){const t=or(e);if(t){let r=0;for(let o=0;o<t.length;o++)t[o].status!==2&&(t[r]=t[o],r++);t.length=r,Z_(e,t.length>0?t:void 0)}Ko(e,r=>{Jo(n,r)})}function hu(n,e){const t=is(ug(n,e)),r=ou(n.transactionQueueTree_,e);return nR(r,o=>{Hl(n,o)}),Hl(n,r),tg(r,o=>{Hl(n,o)}),t}function Hl(n,e){const t=or(e);if(t){const r=[];let o=[],a=-1;for(let c=0;c<t.length;c++)t[c].status===3||(t[c].status===1?(M(a===c-1,"All SENT items should be at beginning of queue."),a=c,t[c].status=3,t[c].abortReason="set"):(M(t[c].status===0,"Unexpected transaction status in abort"),t[c].unwatcher(),o=o.concat($n(n.serverSyncTree_,t[c].currentWriteId,!0)),t[c].onComplete&&r.push(t[c].onComplete.bind(null,new Error("set"),!1,null))));a===-1?Z_(e,void 0):t.length=a+1,zt(n.eventQueue_,is(e),o);for(let c=0;c<r.length;c++)rr(r[c])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SR(n){let e="";const t=n.split("/");for(let r=0;r<t.length;r++)if(t[r].length>0){let o=t[r];try{o=decodeURIComponent(o.replace(/\+/g," "))}catch{}e+="/"+o}return e}function AR(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const r=t.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):ht(`Invalid query segment '${t}' in query '${n}'`)}return e}const Zf=function(n,e){const t=RR(n),r=t.namespace;t.domain==="firebase.com"&&wn(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&t.domain!=="localhost"&&wn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||FT();const o=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new m_(t.host,t.secure,r,o,e,"",r!==t.subdomain),path:new we(t.pathString)}},RR=function(n){let e="",t="",r="",o="",a="",c=!0,h="https",d=443;if(typeof n=="string"){let p=n.indexOf("//");p>=0&&(h=n.substring(0,p-1),n=n.substring(p+2));let y=n.indexOf("/");y===-1&&(y=n.length);let v=n.indexOf("?");v===-1&&(v=n.length),e=n.substring(0,Math.min(y,v)),y<v&&(o=SR(n.substring(y,v)));const E=AR(n.substring(Math.min(n.length,v)));p=e.indexOf(":"),p>=0?(c=h==="https"||h==="wss",d=parseInt(e.substring(p+1),10)):p=e.length;const T=e.slice(0,p);if(T.toLowerCase()==="localhost")t="localhost";else if(T.split(".").length<=2)t=T;else{const A=e.indexOf(".");r=e.substring(0,A).toLowerCase(),t=e.substring(A+1),a=r}"ns"in E&&(a=E.ns)}return{host:e,port:d,domain:t,subdomain:r,secure:c,scheme:h,pathString:o,namespace:a}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ep="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",NR=function(){let n=0;const e=[];return function(t){const r=t===n;n=t;let o;const a=new Array(8);for(o=7;o>=0;o--)a[o]=ep.charAt(t%64),t=Math.floor(t/64);M(t===0,"Cannot push at time == 0");let c=a.join("");if(r){for(o=11;o>=0&&e[o]===63;o--)e[o]=0;e[o]++}else for(o=0;o<12;o++)e[o]=Math.floor(Math.random()*64);for(o=0;o<12;o++)c+=ep.charAt(e[o]);return M(c.length===20,"nextPushId: Length should be 20."),c}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fg{constructor(e,t,r,o){this.eventType=e,this.eventRegistration=t,this.snapshot=r,this.prevName=o}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Qe(this.snapshot.exportVal())}}class pg{constructor(e,t,r){this.eventRegistration=e,this.error=t,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kR{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return M(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class du{constructor(e,t,r,o){this._repo=e,this._path=t,this._queryParams=r,this._orderByCalled=o}get key(){return ce(this._path)?null:Fc(this._path)}get ref(){return new Cn(this._repo,this._path)}get _queryIdentifier(){const e=Uf(this._queryParams),t=Dc(e);return t==="{}"?"default":t}get _queryObject(){return Uf(this._queryParams)}isEqual(e){if(e=ot(e),!(e instanceof du))return!1;const t=this._repo===e._repo,r=Bc(this._path,e._path),o=this._queryIdentifier===e._queryIdentifier;return t&&r&&o}toJSON(){return this.toString()}toString(){return this._repo.toString()+ES(this._path)}}class Cn extends du{constructor(e,t){super(e,t,new Vc,!1)}get parent(){const e=S_(this._path);return e===null?null:new Cn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Yr{constructor(e,t,r){this._node=e,this.ref=t,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new we(e),r=tr(this.ref,e);return new Yr(this._node.getChild(t),r,Ue)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,o)=>e(new Yr(o,tr(this.ref,r),Ue)))}hasChild(e){const t=new we(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function jr(n,e){return n=ot(n),n._checkNotDeleted("ref"),e!==void 0?tr(n._root,e):n._root}function tr(n,e){return n=ot(n),oe(n._path)===null?uR("child","path",e,!1):rg("child","path",e,!1),new Cn(n._repo,Me(n._path,e))}function _g(n,e){n=ot(n),sg("push",n._path),ig("push",e,n._path,!0);const t=lg(n._repo),r=NR(t),o=tr(n,r),a=tr(n,r);let c;return e!=null?c=OR(a,e).then(()=>a):c=Promise.resolve(a),o.then=c.then.bind(c),o.catch=c.then.bind(c,void 0),o}function OR(n,e){n=ot(n),sg("set",n._path),ig("set",e,n._path,!1);const t=new Jr;return yR(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function xR(n,e){cR("update",e,n._path,!1);const t=new Jr;return wR(n._repo,n._path,e,t.wrapCallback(()=>{})),t.promise}class fu{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const r=t._queryParams.getIndex();return new fg("value",this,new Yr(e.snapshotNode,new Cn(t._repo,t._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new pg(this,e,t):null}matches(e){return e instanceof fu?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class pu{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t=e==="children_added"?"child_added":e;return t=t==="children_removed"?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new pg(this,e,t):null}createEvent(e,t){M(e.childName!=null,"Child events should have a childName.");const r=tr(new Cn(t._repo,t._path),e.childName),o=t._queryParams.getIndex();return new fg(e.type,this,new Yr(e.snapshotNode,r,o),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof pu?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function PR(n,e,t,r,o){let a;if(typeof r=="object"&&(a=void 0,o=r),typeof r=="function"&&(a=r),o&&o.onlyOnce){const d=t,p=(y,v)=>{Jf(n._repo,n,h),d(y,v)};p.userCallback=t.userCallback,p.context=t.context,t=p}const c=new kR(t,a||void 0),h=e==="value"?new fu(c):new pu(e,c);return bR(n._repo,n,h),()=>Jf(n._repo,n,h)}function gg(n,e,t,r){return PR(n,"value",e,t,r)}PA(Cn);BA(Cn);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DR="FIREBASE_DATABASE_EMULATOR_HOST",bc={};let LR=!1;function MR(n,e,t,r){n.repoInfo_=new m_(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),r&&(n.authTokenProvider_=r)}function UR(n,e,t,r,o){let a=r||n.options.databaseURL;a===void 0&&(n.options.projectId||wn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ze("Using default host for project ",n.options.projectId),a=`${n.options.projectId}-default-rtdb.firebaseio.com`);let c=Zf(a,o),h=c.repoInfo,d,p;typeof process<"u"&&yf&&(p=yf[DR]),p?(d=!0,a=`http://${p}?ns=${h.namespace}`,c=Zf(a,o),h=c.repoInfo):d=!c.repoInfo.secure;const y=o&&d?new Vi(Vi.OWNER):new jT(n.name,n.options,e);hR("Invalid Firebase Database URL",c),ce(c.path)||wn("Database URL must point to the root of a Firebase Database (not including a child path).");const v=BR(h,n,y,new YT(n.name,t));return new WR(v,n)}function FR(n,e){const t=bc[e];(!t||t[n.key]!==n)&&wn(`Database ${e}(${n.repoInfo_}) has already been deleted.`),IR(n),delete t[n.key]}function BR(n,e,t,r){let o=bc[e.name];o||(o={},bc[e.name]=o);let a=o[n.toURLString()];return a&&wn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),a=new gR(n,LR,t,r),o[n.toURLString()]=a,a}class WR{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(mR(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Cn(this._repo,pe())),this._rootInternal}_delete(){return this._rootInternal!==null&&(FR(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&wn("Cannot call "+e+" on a deleted database.")}}function HR(n=xc(),e){const t=Ho(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const r=Gp("database");r&&$R(t,...r)}return t}function $R(n,e,t,r={}){n=ot(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&wn("Cannot call useEmulator() after instance has already been initialized.");const o=n._repoInternal;let a;if(o.repoInfo_.nodeAdmin)r.mockUserToken&&wn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),a=new Vi(Vi.OWNER);else if(r.mockUserToken){const c=typeof r.mockUserToken=="string"?r.mockUserToken:Yp(r.mockUserToken,n.app.options.projectId);a=new Vi(c)}MR(o,e,t,a)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VR(n){PT(Ei),pi(new Kn("database",(e,{instanceIdentifier:t})=>{const r=e.getProvider("app").getImmediate(),o=e.getProvider("auth-internal"),a=e.getProvider("app-check-internal");return UR(r,o,a,t)},"PUBLIC").setMultipleInstances(!0)),Jt(wf,Ef,n),Jt(wf,Ef,"esm2017")}yn.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};yn.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};VR();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mg="firebasestorage.googleapis.com",vg="storageBucket",qR=2*60*1e3,GR=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be extends In{constructor(e,t,r=0){super($l(e),`Firebase Storage: ${t} (${$l(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Be.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return $l(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Fe;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Fe||(Fe={}));function $l(n){return"storage/"+n}function _u(){const n="An unknown error occurred, please check the error payload for server response.";return new Be(Fe.UNKNOWN,n)}function zR(n){return new Be(Fe.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function KR(n){return new Be(Fe.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function YR(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Be(Fe.UNAUTHENTICATED,n)}function jR(){return new Be(Fe.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function QR(n){return new Be(Fe.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function XR(){return new Be(Fe.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function JR(){return new Be(Fe.CANCELED,"User canceled the upload/download.")}function ZR(n){return new Be(Fe.INVALID_URL,"Invalid URL '"+n+"'.")}function eN(n){return new Be(Fe.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function tN(){return new Be(Fe.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+vg+"' property when initializing the app?")}function nN(){return new Be(Fe.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function iN(){return new Be(Fe.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function rN(n){return new Be(Fe.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Ic(n){return new Be(Fe.INVALID_ARGUMENT,n)}function yg(){return new Be(Fe.APP_DELETED,"The Firebase app was deleted.")}function sN(n){return new Be(Fe.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Fr(n,e){return new Be(Fe.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function xr(n){throw new Be(Fe.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=Tt.makeFromUrl(e,t)}catch{return new Tt(e,"")}if(r.path==="")return r;throw eN(e)}static makeFromUrl(e,t){let r=null;const o="([A-Za-z0-9.\\-_]+)";function a(G){G.path.charAt(G.path.length-1)==="/"&&(G.path_=G.path_.slice(0,-1))}const c="(/(.*))?$",h=new RegExp("^gs://"+o+c,"i"),d={bucket:1,path:3};function p(G){G.path_=decodeURIComponent(G.path)}const y="v[A-Za-z0-9_]+",v=t.replace(/[.]/g,"\\."),E="(/([^?#]*).*)?$",T=new RegExp(`^https?://${v}/${y}/b/${o}/o${E}`,"i"),A={bucket:1,path:3},L=t===mg?"(?:storage.googleapis.com|storage.cloud.google.com)":t,D="([^?#]*)",F=new RegExp(`^https?://${L}/${o}/${D}`,"i"),O=[{regex:h,indices:d,postModify:a},{regex:T,indices:A,postModify:p},{regex:F,indices:{bucket:1,path:2},postModify:p}];for(let G=0;G<O.length;G++){const z=O[G],x=z.regex.exec(e);if(x){const U=x[z.indices.bucket];let $=x[z.indices.path];$||($=""),r=new Tt(U,$),z.postModify(r);break}}if(r==null)throw ZR(e);return r}}class oN{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aN(n,e,t){let r=1,o=null,a=null,c=!1,h=0;function d(){return h===2}let p=!1;function y(...D){p||(p=!0,e.apply(null,D))}function v(D){o=setTimeout(()=>{o=null,n(T,d())},D)}function E(){a&&clearTimeout(a)}function T(D,...F){if(p){E();return}if(D){E(),y.call(null,D,...F);return}if(d()||c){E(),y.call(null,D,...F);return}r<64&&(r*=2);let O;h===1?(h=2,O=0):O=(r+Math.random())*1e3,v(O)}let A=!1;function L(D){A||(A=!0,E(),!p&&(o!==null?(D||(h=2),clearTimeout(o),v(0)):D||(h=1)))}return v(0),a=setTimeout(()=>{c=!0,L(!0)},t),L}function lN(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cN(n){return n!==void 0}function uN(n){return typeof n=="object"&&!Array.isArray(n)}function gu(n){return typeof n=="string"||n instanceof String}function tp(n){return mu()&&n instanceof Blob}function mu(){return typeof Blob<"u"}function np(n,e,t,r){if(r<e)throw Ic(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw Ic(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vu(n,e,t){let r=e;return t==null&&(r=`https://${e}`),`${t}://${r}/v0${n}`}function wg(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const o=e(r)+"="+e(n[r]);t=t+o+"&"}return t=t.slice(0,-1),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var di;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(di||(di={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hN(n,e){const t=n>=500&&n<600,o=[408,429].indexOf(n)!==-1,a=e.indexOf(n)!==-1;return t||o||a}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dN{constructor(e,t,r,o,a,c,h,d,p,y,v,E=!0){this.url_=e,this.method_=t,this.headers_=r,this.body_=o,this.successCodes_=a,this.additionalRetryCodes_=c,this.callback_=h,this.errorCallback_=d,this.timeout_=p,this.progressCallback_=y,this.connectionFactory_=v,this.retry=E,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((T,A)=>{this.resolve_=T,this.reject_=A,this.start_()})}start_(){const e=(r,o)=>{if(o){r(!1,new no(!1,null,!0));return}const a=this.connectionFactory_();this.pendingConnection_=a;const c=h=>{const d=h.loaded,p=h.lengthComputable?h.total:-1;this.progressCallback_!==null&&this.progressCallback_(d,p)};this.progressCallback_!==null&&a.addUploadProgressListener(c),a.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&a.removeUploadProgressListener(c),this.pendingConnection_=null;const h=a.getErrorCode()===di.NO_ERROR,d=a.getStatus();if(!h||hN(d,this.additionalRetryCodes_)&&this.retry){const y=a.getErrorCode()===di.ABORT;r(!1,new no(!1,null,y));return}const p=this.successCodes_.indexOf(d)!==-1;r(!0,new no(p,a))})},t=(r,o)=>{const a=this.resolve_,c=this.reject_,h=o.connection;if(o.wasSuccessCode)try{const d=this.callback_(h,h.getResponse());cN(d)?a(d):a()}catch(d){c(d)}else if(h!==null){const d=_u();d.serverResponse=h.getErrorText(),this.errorCallback_?c(this.errorCallback_(h,d)):c(d)}else if(o.canceled){const d=this.appDelete_?yg():JR();c(d)}else{const d=XR();c(d)}};this.canceled_?t(!1,new no(!1,null,!0)):this.backoffId_=aN(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&lN(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class no{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function fN(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function pN(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function _N(n,e){e&&(n["X-Firebase-GMPID"]=e)}function gN(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function mN(n,e,t,r,o,a,c=!0){const h=wg(n.urlParams),d=n.url+h,p=Object.assign({},n.headers);return _N(p,e),fN(p,t),pN(p,a),gN(p,r),new dN(d,n.method,p,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,o,c)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vN(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function yN(...n){const e=vN();if(e!==void 0){const t=new e;for(let r=0;r<n.length;r++)t.append(n[r]);return t.getBlob()}else{if(mu())return new Blob(n);throw new Be(Fe.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function wN(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EN(n){if(typeof atob>"u")throw rN("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Vl{constructor(e,t){this.data=e,this.contentType=t||null}}function bN(n,e){switch(n){case Xt.RAW:return new Vl(Eg(e));case Xt.BASE64:case Xt.BASE64URL:return new Vl(bg(n,e));case Xt.DATA_URL:return new Vl(CN(e),TN(e))}throw _u()}function Eg(n){const e=[];for(let t=0;t<n.length;t++){let r=n.charCodeAt(t);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const a=r,c=n.charCodeAt(++t);r=65536|(a&1023)<<10|c&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function IN(n){let e;try{e=decodeURIComponent(n)}catch{throw Fr(Xt.DATA_URL,"Malformed data URL.")}return Eg(e)}function bg(n,e){switch(n){case Xt.BASE64:{const o=e.indexOf("-")!==-1,a=e.indexOf("_")!==-1;if(o||a)throw Fr(n,"Invalid character '"+(o?"-":"_")+"' found: is it base64url encoded?");break}case Xt.BASE64URL:{const o=e.indexOf("+")!==-1,a=e.indexOf("/")!==-1;if(o||a)throw Fr(n,"Invalid character '"+(o?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=EN(e)}catch(o){throw o.message.includes("polyfill")?o:Fr(n,"Invalid character found")}const r=new Uint8Array(t.length);for(let o=0;o<t.length;o++)r[o]=t.charCodeAt(o);return r}class Ig{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw Fr(Xt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=t[1]||null;r!=null&&(this.base64=SN(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function CN(n){const e=new Ig(n);return e.base64?bg(Xt.BASE64,e.rest):IN(e.rest)}function TN(n){return new Ig(n).contentType}function SN(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(e,t){let r=0,o="";tp(e)?(this.data_=e,r=e.size,o=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=o}size(){return this.size_}type(){return this.type_}slice(e,t){if(tp(this.data_)){const r=this.data_,o=wN(r,e,t);return o===null?null:new Un(o)}else{const r=new Uint8Array(this.data_.buffer,e,t-e);return new Un(r,!0)}}static getBlob(...e){if(mu()){const t=e.map(r=>r instanceof Un?r.data_:r);return new Un(yN.apply(null,t))}else{const t=e.map(c=>gu(c)?bN(Xt.RAW,c).data:c.data_);let r=0;t.forEach(c=>{r+=c.byteLength});const o=new Uint8Array(r);let a=0;return t.forEach(c=>{for(let h=0;h<c.length;h++)o[a++]=c[h]}),new Un(o,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cg(n){let e;try{e=JSON.parse(n)}catch{return null}return uN(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AN(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function RN(n,e){const t=e.split("/").filter(r=>r.length>0).join("/");return n.length===0?t:n+"/"+t}function Tg(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NN(n,e){return e}class ut{constructor(e,t,r,o){this.server=e,this.local=t||e,this.writable=!!r,this.xform=o||NN}}let io=null;function kN(n){return!gu(n)||n.length<2?n:Tg(n)}function Sg(){if(io)return io;const n=[];n.push(new ut("bucket")),n.push(new ut("generation")),n.push(new ut("metageneration")),n.push(new ut("name","fullPath",!0));function e(a,c){return kN(c)}const t=new ut("name");t.xform=e,n.push(t);function r(a,c){return c!==void 0?Number(c):c}const o=new ut("size");return o.xform=r,n.push(o),n.push(new ut("timeCreated")),n.push(new ut("updated")),n.push(new ut("md5Hash",null,!0)),n.push(new ut("cacheControl",null,!0)),n.push(new ut("contentDisposition",null,!0)),n.push(new ut("contentEncoding",null,!0)),n.push(new ut("contentLanguage",null,!0)),n.push(new ut("contentType",null,!0)),n.push(new ut("metadata","customMetadata",!0)),io=n,io}function ON(n,e){function t(){const r=n.bucket,o=n.fullPath,a=new Tt(r,o);return e._makeStorageReference(a)}Object.defineProperty(n,"ref",{get:t})}function xN(n,e,t){const r={};r.type="file";const o=t.length;for(let a=0;a<o;a++){const c=t[a];r[c.local]=c.xform(r,e[c.server])}return ON(r,n),r}function Ag(n,e,t){const r=Cg(e);return r===null?null:xN(n,r,t)}function PN(n,e,t,r){const o=Cg(e);if(o===null||!gu(o.downloadTokens))return null;const a=o.downloadTokens;if(a.length===0)return null;const c=encodeURIComponent;return a.split(",").map(p=>{const y=n.bucket,v=n.fullPath,E="/b/"+c(y)+"/o/"+c(v),T=vu(E,t,r),A=wg({alt:"media",token:p});return T+A})[0]}function DN(n,e){const t={},r=e.length;for(let o=0;o<r;o++){const a=e[o];a.writable&&(t[a.server]=n[a.local])}return JSON.stringify(t)}class Rg{constructor(e,t,r,o){this.url=e,this.method=t,this.handler=r,this.timeout=o,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ng(n){if(!n)throw _u()}function LN(n,e){function t(r,o){const a=Ag(n,o,e);return Ng(a!==null),a}return t}function MN(n,e){function t(r,o){const a=Ag(n,o,e);return Ng(a!==null),PN(a,o,n.host,n._protocol)}return t}function kg(n){function e(t,r){let o;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?o=jR():o=YR():t.getStatus()===402?o=KR(n.bucket):t.getStatus()===403?o=QR(n.path):o=r,o.status=t.getStatus(),o.serverResponse=r.serverResponse,o}return e}function UN(n){const e=kg(n);function t(r,o){let a=e(r,o);return r.getStatus()===404&&(a=zR(n.path)),a.serverResponse=o.serverResponse,a}return t}function FN(n,e,t){const r=e.fullServerUrl(),o=vu(r,n.host,n._protocol),a="GET",c=n.maxOperationRetryTime,h=new Rg(o,a,MN(n,t),c);return h.errorHandler=UN(e),h}function BN(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function WN(n,e,t){const r=Object.assign({},t);return r.fullPath=n.path,r.size=e.size(),r.contentType||(r.contentType=BN(null,e)),r}function HN(n,e,t,r,o){const a=e.bucketOnlyServerUrl(),c={"X-Goog-Upload-Protocol":"multipart"};function h(){let O="";for(let G=0;G<2;G++)O=O+Math.random().toString().slice(2);return O}const d=h();c["Content-Type"]="multipart/related; boundary="+d;const p=WN(e,r,o),y=DN(p,t),v="--"+d+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+y+`\r
--`+d+`\r
Content-Type: `+p.contentType+`\r
\r
`,E=`\r
--`+d+"--",T=Un.getBlob(v,r,E);if(T===null)throw nN();const A={name:p.fullPath},L=vu(a,n.host,n._protocol),D="POST",F=n.maxUploadRetryTime,ee=new Rg(L,D,LN(n,t),F);return ee.urlParams=A,ee.headers=c,ee.body=T.uploadData(),ee.errorHandler=kg(e),ee}class $N{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=di.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=di.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=di.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,r,o){if(this.sent_)throw xr("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),o!==void 0)for(const a in o)o.hasOwnProperty(a)&&this.xhr_.setRequestHeader(a,o[a].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw xr("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw xr("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw xr("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw xr("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class VN extends $N{initXhr(){this.xhr_.responseType="text"}}function Og(){return new VN}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e,t){this._service=e,t instanceof Tt?this._location=t:this._location=Tt.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new yi(e,t)}get root(){const e=new Tt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Tg(this._location.path)}get storage(){return this._service}get parent(){const e=AN(this._location.path);if(e===null)return null;const t=new Tt(this._location.bucket,e);return new yi(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw sN(e)}}function qN(n,e,t){n._throwIfRoot("uploadBytes");const r=HN(n.storage,n._location,Sg(),new Un(e,!0),t);return n.storage.makeRequestWithTokens(r,Og).then(o=>({metadata:o,ref:n}))}function GN(n){n._throwIfRoot("getDownloadURL");const e=FN(n.storage,n._location,Sg());return n.storage.makeRequestWithTokens(e,Og).then(t=>{if(t===null)throw iN();return t})}function zN(n,e){const t=RN(n._location.path,e),r=new Tt(n._location.bucket,t);return new yi(n.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KN(n){return/^[A-Za-z]+:\/\//.test(n)}function YN(n,e){return new yi(n,e)}function xg(n,e){if(n instanceof yu){const t=n;if(t._bucket==null)throw tN();const r=new yi(t,t._bucket);return e!=null?xg(r,e):r}else return e!==void 0?zN(n,e):n}function jN(n,e){if(e&&KN(e)){if(n instanceof yu)return YN(n,e);throw Ic("To use ref(service, url), the first argument must be a Storage instance.")}else return xg(n,e)}function ip(n,e){const t=e==null?void 0:e[vg];return t==null?null:Tt.makeFromBucketSpec(t,n)}function QN(n,e,t,r={}){n.host=`${e}:${t}`,n._protocol="http";const{mockUserToken:o}=r;o&&(n._overrideAuthToken=typeof o=="string"?o:Yp(o,n.app.options.projectId))}class yu{constructor(e,t,r,o,a){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=o,this._firebaseVersion=a,this._bucket=null,this._host=mg,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=qR,this._maxUploadRetryTime=GR,this._requests=new Set,o!=null?this._bucket=Tt.makeFromBucketSpec(o,this._host):this._bucket=ip(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Tt.makeFromBucketSpec(this._url,e):this._bucket=ip(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){np("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){np("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new yi(this,e)}_makeRequest(e,t,r,o,a=!0){if(this._deleted)return new oN(yg());{const c=mN(e,this._appId,r,o,t,this._firebaseVersion,a);return this._requests.add(c),c.getPromise().then(()=>this._requests.delete(c),()=>this._requests.delete(c)),c}}async makeRequestWithTokens(e,t){const[r,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,o).getPromise()}}const rp="@firebase/storage",sp="0.12.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pg="storage";function XN(n,e,t){return n=ot(n),qN(n,e,t)}function JN(n){return n=ot(n),GN(n)}function ZN(n,e){return n=ot(n),jN(n,e)}function Dg(n=xc(),e){n=ot(n);const r=Ho(n,Pg).getImmediate({identifier:e}),o=Gp("storage");return o&&e1(r,...o),r}function e1(n,e,t,r={}){QN(n,e,t,r)}function t1(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),o=n.getProvider("app-check-internal");return new yu(t,r,o,e,Ei)}function n1(){pi(new Kn(Pg,t1,"PUBLIC").setMultipleInstances(!0)),Jt(rp,sp,""),Jt(rp,sp,"esm2017")}n1();function wu(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(n);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(n,r[o])&&(t[r[o]]=n[r[o]]);return t}function Lg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const i1=Lg,Mg=new Zr("auth","Firebase",Lg());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Po=new kc("@firebase/auth");function r1(n,...e){Po.logLevel<=ye.WARN&&Po.warn(`Auth (${Ei}): ${n}`,...e)}function uo(n,...e){Po.logLevel<=ye.ERROR&&Po.error(`Auth (${Ei}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function En(n,...e){throw Eu(n,...e)}function Zt(n,...e){return Eu(n,...e)}function Ug(n,e,t){const r=Object.assign(Object.assign({},i1()),{[e]:t});return new Zr("auth","Firebase",r).create(e,{appName:n.name})}function zn(n){return Ug(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Eu(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Mg.create(n,...e)}function Z(n,e,...t){if(!n)throw Eu(e,...t)}function gn(n){const e="INTERNAL ASSERTION FAILED: "+n;throw uo(e),new Error(e)}function bn(n,e){n||gn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cc(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function s1(){return op()==="http:"||op()==="https:"}function op(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(s1()||dC()||"connection"in navigator)?navigator.onLine:!0}function a1(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(e,t){this.shortDelay=e,this.longDelay=t,bn(t>e,"Short delay should be less than long delay!"),this.isMobile=Nc()||jp()}get(){return o1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bu(n,e){bn(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fg{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;gn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;gn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;gn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c1=new rs(3e4,6e4);function Zo(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function ar(n,e,t,r,o={}){return Bg(n,o,async()=>{let a={},c={};r&&(e==="GET"?c=r:a={body:JSON.stringify(r)});const h=ir(Object.assign({key:n.config.apiKey},c)).slice(1),d=await n._getAdditionalHeaders();return d["Content-Type"]="application/json",n.languageCode&&(d["X-Firebase-Locale"]=n.languageCode),Fg.fetch()(Hg(n,n.config.apiHost,t,h),Object.assign({method:e,headers:d,referrerPolicy:"no-referrer"},a))})}async function Bg(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},l1),e);try{const o=new u1(n),a=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const c=await a.json();if("needConfirmation"in c)throw ro(n,"account-exists-with-different-credential",c);if(a.ok&&!("errorMessage"in c))return c;{const h=a.ok?c.errorMessage:c.error.message,[d,p]=h.split(" : ");if(d==="FEDERATED_USER_ID_ALREADY_LINKED")throw ro(n,"credential-already-in-use",c);if(d==="EMAIL_EXISTS")throw ro(n,"email-already-in-use",c);if(d==="USER_DISABLED")throw ro(n,"user-disabled",c);const y=r[d]||d.toLowerCase().replace(/[_\s]+/g,"-");if(p)throw Ug(n,y,p);En(n,y)}}catch(o){if(o instanceof In)throw o;En(n,"network-request-failed",{message:String(o)})}}async function Wg(n,e,t,r,o={}){const a=await ar(n,e,t,r,o);return"mfaPendingCredential"in a&&En(n,"multi-factor-auth-required",{_serverResponse:a}),a}function Hg(n,e,t,r){const o=`${e}${t}?${r}`;return n.config.emulator?bu(n.config,o):`${n.config.apiScheme}://${o}`}class u1{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Zt(this.auth,"network-request-failed")),c1.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ro(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const o=Zt(n,e,r);return o.customData._tokenResponse=t,o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function h1(n,e){return ar(n,"POST","/v1/accounts:delete",e)}async function $g(n,e){return ar(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Br(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function d1(n,e=!1){const t=ot(n),r=await t.getIdToken(e),o=Iu(r);Z(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const a=typeof o.firebase=="object"?o.firebase:void 0,c=a==null?void 0:a.sign_in_provider;return{claims:o,token:r,authTime:Br(ql(o.auth_time)),issuedAtTime:Br(ql(o.iat)),expirationTime:Br(ql(o.exp)),signInProvider:c||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function ql(n){return Number(n)*1e3}function Iu(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return uo("JWT malformed, contained fewer than 3 sections"),null;try{const o=mo(t);return o?JSON.parse(o):(uo("Failed to decode base64 JWT payload"),null)}catch(o){return uo("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function ap(n){const e=Iu(n);return Z(e,"internal-error"),Z(typeof e.exp<"u","internal-error"),Z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qr(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof In&&f1(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function f1({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Br(this.lastLoginAt),this.creationTime=Br(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Do(n){var e;const t=n.auth,r=await n.getIdToken(),o=await Qr(n,$g(t,{idToken:r}));Z(o==null?void 0:o.users.length,t,"internal-error");const a=o.users[0];n._notifyReloadListener(a);const c=!((e=a.providerUserInfo)===null||e===void 0)&&e.length?Vg(a.providerUserInfo):[],h=g1(n.providerData,c),d=n.isAnonymous,p=!(n.email&&a.passwordHash)&&!(h!=null&&h.length),y=d?p:!1,v={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:h,metadata:new Tc(a.createdAt,a.lastLoginAt),isAnonymous:y};Object.assign(n,v)}async function _1(n){const e=ot(n);await Do(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function g1(n,e){return[...n.filter(r=>!e.some(o=>o.providerId===r.providerId)),...e]}function Vg(n){return n.map(e=>{var{providerId:t}=e,r=wu(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function m1(n,e){const t=await Bg(n,{},async()=>{const r=ir({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:a}=n.config,c=Hg(n,o,"/v1/token",`key=${a}`),h=await n._getAdditionalHeaders();return h["Content-Type"]="application/x-www-form-urlencoded",Fg.fetch()(c,{method:"POST",headers:h,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function v1(n,e){return ar(n,"POST","/v2/accounts:revokeToken",Zo(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Z(e.idToken,"internal-error"),Z(typeof e.idToken<"u","internal-error"),Z(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ap(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Z(e.length!==0,"internal-error");const t=ap(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Z(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:o,expiresIn:a}=await m1(e,t);this.updateTokensAndExpiration(r,o,Number(a))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:o,expirationTime:a}=t,c=new zi;return r&&(Z(typeof r=="string","internal-error",{appName:e}),c.refreshToken=r),o&&(Z(typeof o=="string","internal-error",{appName:e}),c.accessToken=o),a&&(Z(typeof a=="number","internal-error",{appName:e}),c.expirationTime=a),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new zi,this.toJSON())}_performRefresh(){return gn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mn(n,e){Z(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class mn{constructor(e){var{uid:t,auth:r,stsTokenManager:o}=e,a=wu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new p1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new Tc(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const t=await Qr(this,this.stsTokenManager.getToken(this.auth,e));return Z(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return d1(this,e)}reload(){return _1(this)}_assign(e){this!==e&&(Z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new mn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Do(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(pn(this.auth.app))return Promise.reject(zn(this.auth));const e=await this.getIdToken();return await Qr(this,h1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,o,a,c,h,d,p,y;const v=(r=t.displayName)!==null&&r!==void 0?r:void 0,E=(o=t.email)!==null&&o!==void 0?o:void 0,T=(a=t.phoneNumber)!==null&&a!==void 0?a:void 0,A=(c=t.photoURL)!==null&&c!==void 0?c:void 0,L=(h=t.tenantId)!==null&&h!==void 0?h:void 0,D=(d=t._redirectEventId)!==null&&d!==void 0?d:void 0,F=(p=t.createdAt)!==null&&p!==void 0?p:void 0,ee=(y=t.lastLoginAt)!==null&&y!==void 0?y:void 0,{uid:O,emailVerified:G,isAnonymous:z,providerData:x,stsTokenManager:U}=t;Z(O&&U,e,"internal-error");const $=zi.fromJSON(this.name,U);Z(typeof O=="string",e,"internal-error"),Mn(v,e.name),Mn(E,e.name),Z(typeof G=="boolean",e,"internal-error"),Z(typeof z=="boolean",e,"internal-error"),Mn(T,e.name),Mn(A,e.name),Mn(L,e.name),Mn(D,e.name),Mn(F,e.name),Mn(ee,e.name);const q=new mn({uid:O,auth:e,email:E,emailVerified:G,displayName:v,isAnonymous:z,photoURL:A,phoneNumber:T,tenantId:L,stsTokenManager:$,createdAt:F,lastLoginAt:ee});return x&&Array.isArray(x)&&(q.providerData=x.map(_e=>Object.assign({},_e))),D&&(q._redirectEventId=D),q}static async _fromIdTokenResponse(e,t,r=!1){const o=new zi;o.updateFromServerResponse(t);const a=new mn({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:r});return await Do(a),a}static async _fromGetAccountInfoResponse(e,t,r){const o=t.users[0];Z(o.localId!==void 0,"internal-error");const a=o.providerUserInfo!==void 0?Vg(o.providerUserInfo):[],c=!(o.email&&o.passwordHash)&&!(a!=null&&a.length),h=new zi;h.updateFromIdToken(r);const d=new mn({uid:o.localId,auth:e,stsTokenManager:h,isAnonymous:c}),p={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new Tc(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(a!=null&&a.length)};return Object.assign(d,p),d}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lp=new Map;function vn(n){bn(n instanceof Function,"Expected a class definition");let e=lp.get(n);return e?(bn(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,lp.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}qg.type="NONE";const cp=qg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ho(n,e,t){return`firebase:${n}:${e}:${t}`}class Ki{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:o,name:a}=this.auth;this.fullUserKey=ho(this.userKey,o.apiKey,a),this.fullPersistenceKey=ho("persistence",o.apiKey,a),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?mn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Ki(vn(cp),e,r);const o=(await Promise.all(t.map(async p=>{if(await p._isAvailable())return p}))).filter(p=>p);let a=o[0]||vn(cp);const c=ho(r,e.config.apiKey,e.name);let h=null;for(const p of t)try{const y=await p._get(c);if(y){const v=mn._fromJSON(e,y);p!==a&&(h=v),a=p;break}}catch{}const d=o.filter(p=>p._shouldAllowMigration);return!a._shouldAllowMigration||!d.length?new Ki(a,e,r):(a=d[0],h&&await a._set(c,h.toJSON()),await Promise.all(t.map(async p=>{if(p!==a)try{await p._remove(c)}catch{}})),new Ki(a,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function up(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Kg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Gg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(jg(e))return"Blackberry";if(Qg(e))return"Webos";if(Cu(e))return"Safari";if((e.includes("chrome/")||zg(e))&&!e.includes("edge/"))return"Chrome";if(Yg(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Gg(n=st()){return/firefox\//i.test(n)}function Cu(n=st()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function zg(n=st()){return/crios\//i.test(n)}function Kg(n=st()){return/iemobile/i.test(n)}function Yg(n=st()){return/android/i.test(n)}function jg(n=st()){return/blackberry/i.test(n)}function Qg(n=st()){return/webos/i.test(n)}function ea(n=st()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function y1(n=st()){var e;return ea(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function w1(){return fC()&&document.documentMode===10}function Xg(n=st()){return ea(n)||Yg(n)||Qg(n)||jg(n)||/windows phone/i.test(n)||Kg(n)}function E1(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jg(n,e=[]){let t;switch(n){case"Browser":t=up(st());break;case"Worker":t=`${up(st())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Ei}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=a=>new Promise((c,h)=>{try{const d=e(a);c(d)}catch(d){h(d)}});r.onAbort=t,this.queue.push(r);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function I1(n,e={}){return ar(n,"GET","/v2/passwordPolicy",Zo(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C1=6;class T1{constructor(e){var t,r,o,a;const c=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=c.minPasswordLength)!==null&&t!==void 0?t:C1,c.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=c.maxPasswordLength),c.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=c.containsLowercaseCharacter),c.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=c.containsUppercaseCharacter),c.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=c.containsNumericCharacter),c.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=c.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(a=e.forceUpgradeOnSignin)!==null&&a!==void 0?a:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,o,a,c,h;const d={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,d),this.validatePasswordCharacterOptions(e,d),d.isValid&&(d.isValid=(t=d.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),d.isValid&&(d.isValid=(r=d.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),d.isValid&&(d.isValid=(o=d.containsLowercaseLetter)!==null&&o!==void 0?o:!0),d.isValid&&(d.isValid=(a=d.containsUppercaseLetter)!==null&&a!==void 0?a:!0),d.isValid&&(d.isValid=(c=d.containsNumericCharacter)!==null&&c!==void 0?c:!0),d.isValid&&(d.isValid=(h=d.containsNonAlphanumericCharacter)!==null&&h!==void 0?h:!0),d}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let o=0;o<e.length;o++)r=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,o,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S1{constructor(e,t,r,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new hp(this),this.idTokenSubscription=new hp(this),this.beforeStateQueue=new b1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Mg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=vn(t)),this._initializationPromise=this.queue(async()=>{var r,o;if(!this._deleted&&(this.persistenceManager=await Ki.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await $g(this,{idToken:e}),r=await mn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(pn(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(h=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(h,h))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let o=r,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,h=o==null?void 0:o._redirectEventId,d=await this.tryRedirectSignIn(e);(!c||c===h)&&(d!=null&&d.user)&&(o=d.user,a=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(o)}catch(c){o=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return Z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Do(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=a1()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(pn(this.app))return Promise.reject(zn(this));const t=e?ot(e):null;return t&&Z(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return pn(this.app)?Promise.reject(zn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return pn(this.app)?Promise.reject(zn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(vn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await I1(this),t=new T1(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Zr("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await v1(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&vn(e)||this._popupRedirectResolver;Z(t,this,"argument-error"),this.redirectPersistenceManager=await Ki.create(this,[vn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,o){if(this._deleted)return()=>{};const a=typeof t=="function"?t:t.next.bind(t);let c=!1;const h=this._isInitialized?Promise.resolve():this._initializationPromise;if(Z(h,this,"internal-error"),h.then(()=>{c||a(this.currentUser)}),typeof t=="function"){const d=e.addObserver(t,r,o);return()=>{c=!0,d()}}else{const d=e.addObserver(t);return()=>{c=!0,d()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Jg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&r1(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function ta(n){return ot(n)}class hp{constructor(e){this.auth=e,this.observer=null,this.addObserver=bC(t=>this.observer=t)}get next(){return Z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function A1(n){Tu=n}function R1(n){return Tu.loadJS(n)}function N1(){return Tu.gapiScript}function k1(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O1(n,e){const t=Ho(n,"auth");if(t.isInitialized()){const o=t.getImmediate(),a=t.getOptions();if(yo(a,e??{}))return o;En(o,"already-initialized")}return t.initialize({options:e})}function x1(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(vn);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function P1(n,e,t){const r=ta(n);Z(r._canInitEmulator,r,"emulator-config-failed"),Z(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const o=!!(t!=null&&t.disableWarnings),a=Zg(e),{host:c,port:h}=D1(e),d=h===null?"":`:${h}`;r.config.emulator={url:`${a}//${c}${d}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:c,port:h,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:o})}),o||L1()}function Zg(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function D1(n){const e=Zg(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(r);if(o){const a=o[1];return{host:a,port:dp(r.substr(a.length+1))}}else{const[a,c]=r.split(":");return{host:a,port:dp(c)}}}function dp(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function L1(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class em{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return gn("not implemented")}_getIdTokenResponse(e){return gn("not implemented")}_linkToIdToken(e,t){return gn("not implemented")}_getReauthenticationResolver(e){return gn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yi(n,e){return Wg(n,"POST","/v1/accounts:signInWithIdp",Zo(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M1="http://localhost";class wi extends em{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new wi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):En("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:o}=t,a=wu(t,["providerId","signInMethod"]);if(!r||!o)return null;const c=new wi(r,o);return c.idToken=a.idToken||void 0,c.accessToken=a.accessToken||void 0,c.secret=a.secret,c.nonce=a.nonce,c.pendingToken=a.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return Yi(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Yi(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Yi(e,t)}buildRequest(){const e={requestUri:M1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ir(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tm{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss extends tm{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn extends ss{constructor(){super("facebook.com")}static credential(e){return wi._fromParams({providerId:Fn.PROVIDER_ID,signInMethod:Fn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Fn.credentialFromTaggedObject(e)}static credentialFromError(e){return Fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Fn.credential(e.oauthAccessToken)}catch{return null}}}Fn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Fn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn extends ss{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return wi._fromParams({providerId:Bn.PROVIDER_ID,signInMethod:Bn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Bn.credentialFromTaggedObject(e)}static credentialFromError(e){return Bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Bn.credential(t,r)}catch{return null}}}Bn.GOOGLE_SIGN_IN_METHOD="google.com";Bn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn extends ss{constructor(){super("github.com")}static credential(e){return wi._fromParams({providerId:Wn.PROVIDER_ID,signInMethod:Wn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Wn.credentialFromTaggedObject(e)}static credentialFromError(e){return Wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Wn.credential(e.oauthAccessToken)}catch{return null}}}Wn.GITHUB_SIGN_IN_METHOD="github.com";Wn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn extends ss{constructor(){super("twitter.com")}static credential(e,t){return wi._fromParams({providerId:Hn.PROVIDER_ID,signInMethod:Hn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Hn.credentialFromTaggedObject(e)}static credentialFromError(e){return Hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Hn.credential(t,r)}catch{return null}}}Hn.TWITTER_SIGN_IN_METHOD="twitter.com";Hn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U1(n,e){return Wg(n,"POST","/v1/accounts:signUp",Zo(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,o=!1){const a=await mn._fromIdTokenResponse(e,r,o),c=fp(r);return new Qn({user:a,providerId:c,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const o=fp(r);return new Qn({user:e,providerId:o,_tokenResponse:r,operationType:t})}}function fp(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sx(n){var e;if(pn(n.app))return Promise.reject(zn(n));const t=ta(n);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new Qn({user:t.currentUser,providerId:null,operationType:"signIn"});const r=await U1(t,{returnSecureToken:!0}),o=await Qn._fromIdTokenResponse(t,"signIn",r,!0);return await t._updateCurrentUser(o.user),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo extends In{constructor(e,t,r,o){var a;super(t.code,t.message),this.operationType=r,this.user=o,Object.setPrototypeOf(this,Lo.prototype),this.customData={appName:e.name,tenantId:(a=e.tenantId)!==null&&a!==void 0?a:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,o){return new Lo(e,t,r,o)}}function nm(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?Lo._fromErrorAndOperation(n,a,e,r):a})}async function F1(n,e,t=!1){const r=await Qr(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Qn._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B1(n,e,t=!1){const{auth:r}=n;if(pn(r.app))return Promise.reject(zn(r));const o="reauthenticate";try{const a=await Qr(n,nm(r,o,e,n),t);Z(a.idToken,r,"internal-error");const c=Iu(a.idToken);Z(c,r,"internal-error");const{sub:h}=c;return Z(n.uid===h,r,"user-mismatch"),Qn._forOperation(n,o,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&En(r,"user-mismatch"),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function W1(n,e,t=!1){if(pn(n.app))return Promise.reject(zn(n));const r="signIn",o=await nm(n,r,e),a=await Qn._fromIdTokenResponse(n,r,o);return t||await n._updateCurrentUser(a.user),a}function H1(n,e,t,r){return ot(n).onIdTokenChanged(e,t,r)}function $1(n,e,t){return ot(n).beforeAuthStateChanged(e,t)}const Mo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class im{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Mo,"1"),this.storage.removeItem(Mo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V1(){const n=st();return Cu(n)||ea(n)}const q1=1e3,G1=10;class rm extends im{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=V1()&&E1(),this.fallbackToPolling=Xg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),o=this.localCache[t];r!==o&&e(t,o,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,h,d)=>{this.notifyListeners(c,d)});return}const r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const c=this.storage.getItem(r);if(e.newValue!==c)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}const o=()=>{const c=this.storage.getItem(r);!t&&this.localCache[r]===c||this.notifyListeners(r,c)},a=this.storage.getItem(r);w1()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,G1):o()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const o of Array.from(r))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},q1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}rm.type="LOCAL";const z1=rm;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sm extends im{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}sm.type="SESSION";const om=sm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K1(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const r=new na(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:o,data:a}=t.data,c=this.handlersMap[o];if(!(c!=null&&c.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:o});const h=Array.from(c).map(async p=>p(t.origin,a)),d=await K1(h);t.ports[0].postMessage({status:"done",eventId:r,eventType:o,response:d})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}na.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Su(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let a,c;return new Promise((h,d)=>{const p=Su("",20);o.port1.start();const y=setTimeout(()=>{d(new Error("unsupported_event"))},r);c={messageChannel:o,onMessage(v){const E=v;if(E.data.eventId===p)switch(E.data.status){case"ack":clearTimeout(y),a=setTimeout(()=>{d(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),h(E.data.response);break;default:clearTimeout(y),clearTimeout(a),d(new Error("invalid_response"));break}}},this.handlers.add(c),o.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:p,data:t},[o.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function en(){return window}function j1(n){en().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function am(){return typeof en().WorkerGlobalScope<"u"&&typeof en().importScripts=="function"}async function Q1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function X1(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function J1(){return am()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lm="firebaseLocalStorageDb",Z1=1,Uo="firebaseLocalStorage",cm="fbase_key";class os{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ia(n,e){return n.transaction([Uo],e?"readwrite":"readonly").objectStore(Uo)}function ek(){const n=indexedDB.deleteDatabase(lm);return new os(n).toPromise()}function Sc(){const n=indexedDB.open(lm,Z1);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Uo,{keyPath:cm})}catch(o){t(o)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Uo)?e(r):(r.close(),await ek(),e(await Sc()))})})}async function pp(n,e,t){const r=ia(n,!0).put({[cm]:e,value:t});return new os(r).toPromise()}async function tk(n,e){const t=ia(n,!1).get(e),r=await new os(t).toPromise();return r===void 0?null:r.value}function _p(n,e){const t=ia(n,!0).delete(e);return new os(t).toPromise()}const nk=800,ik=3;class um{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Sc(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>ik)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return am()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=na._getInstance(J1()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Q1(),!this.activeServiceWorker)return;this.sender=new Y1(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||X1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Sc();return await pp(e,Mo,"1"),await _p(e,Mo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>pp(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>tk(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>_p(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const a=ia(o,!1).getAll();return new os(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:o,value:a}of e)r.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(a)&&(this.notifyListeners(o,a),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!r.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const o of Array.from(r))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),nk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}um.type="LOCAL";const rk=um;new rs(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sk(n,e){return e?vn(e):(Z(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au extends em{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Yi(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Yi(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Yi(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function ok(n){return W1(n.auth,new Au(n),n.bypassAuthState)}function ak(n){const{auth:e,user:t}=n;return Z(t,e,"internal-error"),B1(t,new Au(n),n.bypassAuthState)}async function lk(n){const{auth:e,user:t}=n;return Z(t,e,"internal-error"),F1(t,new Au(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hm{constructor(e,t,r,o,a=!1){this.auth=e,this.resolver=r,this.user=o,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:o,tenantId:a,error:c,type:h}=e;if(c){this.reject(c);return}const d={auth:this.auth,requestUri:t,sessionId:r,tenantId:a||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(h)(d))}catch(p){this.reject(p)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ok;case"linkViaPopup":case"linkViaRedirect":return lk;case"reauthViaPopup":case"reauthViaRedirect":return ak;default:En(this.auth,"internal-error")}}resolve(e){bn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){bn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ck=new rs(2e3,1e4);class Hi extends hm{constructor(e,t,r,o,a){super(e,t,o,a),this.provider=r,this.authWindow=null,this.pollId=null,Hi.currentPopupAction&&Hi.currentPopupAction.cancel(),Hi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Z(e,this.auth,"internal-error"),e}async onExecution(){bn(this.filter.length===1,"Popup operations only handle one event");const e=Su();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Zt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Zt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Hi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Zt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,ck.get())};e()}}Hi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uk="pendingRedirect",fo=new Map;class hk extends hm{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=fo.get(this.auth._key());if(!e){try{const r=await dk(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}fo.set(this.auth._key(),e)}return this.bypassAuthState||fo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function dk(n,e){const t=_k(e),r=pk(n);if(!await r._isAvailable())return!1;const o=await r._get(t)==="true";return await r._remove(t),o}function fk(n,e){fo.set(n._key(),e)}function pk(n){return vn(n._redirectPersistence)}function _k(n){return ho(uk,n.config.apiKey,n.name)}async function gk(n,e,t=!1){if(pn(n.app))return Promise.reject(zn(n));const r=ta(n),o=sk(r,e),c=await new hk(r,o,t).execute();return c&&!t&&(delete c.user._redirectEventId,await r._persistUserIfCurrent(c.user),await r._setRedirectUser(null,e)),c}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mk=10*60*1e3;class vk{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!yk(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!dm(e)){const o=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Zt(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=mk&&this.cachedEventUids.clear(),this.cachedEventUids.has(gp(e))}saveEventToCache(e){this.cachedEventUids.add(gp(e)),this.lastProcessedEventTime=Date.now()}}function gp(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function dm({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function yk(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return dm(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wk(n,e={}){return ar(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ek=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,bk=/^https?/;async function Ik(n){if(n.config.emulator)return;const{authorizedDomains:e}=await wk(n);for(const t of e)try{if(Ck(t))return}catch{}En(n,"unauthorized-domain")}function Ck(n){const e=Cc(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const c=new URL(n);return c.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===r}if(!bk.test(t))return!1;if(Ek.test(n))return r===n;const o=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tk=new rs(3e4,6e4);function mp(){const n=en().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Sk(n){return new Promise((e,t)=>{var r,o,a;function c(){mp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{mp(),t(Zt(n,"network-request-failed"))},timeout:Tk.get()})}if(!((o=(r=en().gapi)===null||r===void 0?void 0:r.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((a=en().gapi)===null||a===void 0)&&a.load)c();else{const h=k1("iframefcb");return en()[h]=()=>{gapi.load?c():t(Zt(n,"network-request-failed"))},R1(`${N1()}?onload=${h}`).catch(d=>t(d))}}).catch(e=>{throw po=null,e})}let po=null;function Ak(n){return po=po||Sk(n),po}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rk=new rs(5e3,15e3),Nk="__/auth/iframe",kk="emulator/auth/iframe",Ok={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},xk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Pk(n){const e=n.config;Z(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?bu(e,kk):`https://${n.config.authDomain}/${Nk}`,r={apiKey:e.apiKey,appName:n.name,v:Ei},o=xk.get(n.config.apiHost);o&&(r.eid=o);const a=n._getFrameworks();return a.length&&(r.fw=a.join(",")),`${t}?${ir(r).slice(1)}`}async function Dk(n){const e=await Ak(n),t=en().gapi;return Z(t,n,"internal-error"),e.open({where:document.body,url:Pk(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ok,dontclear:!0},r=>new Promise(async(o,a)=>{await r.restyle({setHideOnLeave:!1});const c=Zt(n,"network-request-failed"),h=en().setTimeout(()=>{a(c)},Rk.get());function d(){en().clearTimeout(h),o(r)}r.ping(d).then(d,()=>{a(c)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Mk=500,Uk=600,Fk="_blank",Bk="http://localhost";class vp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Wk(n,e,t,r=Mk,o=Uk){const a=Math.max((window.screen.availHeight-o)/2,0).toString(),c=Math.max((window.screen.availWidth-r)/2,0).toString();let h="";const d=Object.assign(Object.assign({},Lk),{width:r.toString(),height:o.toString(),top:a,left:c}),p=st().toLowerCase();t&&(h=zg(p)?Fk:t),Gg(p)&&(e=e||Bk,d.scrollbars="yes");const y=Object.entries(d).reduce((E,[T,A])=>`${E}${T}=${A},`,"");if(y1(p)&&h!=="_self")return Hk(e||"",h),new vp(null);const v=window.open(e||"",h,y);Z(v,n,"popup-blocked");try{v.focus()}catch{}return new vp(v)}function Hk(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $k="__/auth/handler",Vk="emulator/auth/handler",qk=encodeURIComponent("fac");async function yp(n,e,t,r,o,a){Z(n.config.authDomain,n,"auth-domain-config-required"),Z(n.config.apiKey,n,"invalid-api-key");const c={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Ei,eventId:o};if(e instanceof tm){e.setDefaultLanguage(n.languageCode),c.providerId=e.providerId||"",nc(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[y,v]of Object.entries(a||{}))c[y]=v}if(e instanceof ss){const y=e.getScopes().filter(v=>v!=="");y.length>0&&(c.scopes=y.join(","))}n.tenantId&&(c.tid=n.tenantId);const h=c;for(const y of Object.keys(h))h[y]===void 0&&delete h[y];const d=await n._getAppCheckToken(),p=d?`#${qk}=${encodeURIComponent(d)}`:"";return`${Gk(n)}?${ir(h).slice(1)}${p}`}function Gk({config:n}){return n.emulator?bu(n,Vk):`https://${n.authDomain}/${$k}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gl="webStorageSupport";class zk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=om,this._completeRedirectFn=gk,this._overrideRedirectResult=fk}async _openPopup(e,t,r,o){var a;bn((a=this.eventManagers[e._key()])===null||a===void 0?void 0:a.manager,"_initialize() not called before _openPopup()");const c=await yp(e,t,r,Cc(),o);return Wk(e,c,Su())}async _openRedirect(e,t,r,o){await this._originValidation(e);const a=await yp(e,t,r,Cc(),o);return j1(a),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:a}=this.eventManagers[t];return o?Promise.resolve(o):(bn(a,"If manager is not set, promise should be"),a)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await Dk(e),r=new vk(e);return t.register("authEvent",o=>(Z(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:r.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Gl,{type:Gl},o=>{var a;const c=(a=o==null?void 0:o[0])===null||a===void 0?void 0:a[Gl];c!==void 0&&t(!!c),En(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Ik(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Xg()||Cu()||ea()}}const Kk=zk;var wp="@firebase/auth",Ep="1.7.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jk(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Qk(n){pi(new Kn("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:c,authDomain:h}=r.options;Z(c&&!c.includes(":"),"invalid-api-key",{appName:r.name});const d={apiKey:c,authDomain:h,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Jg(n)},p=new S1(r,o,a,d);return x1(p,t),p},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),pi(new Kn("auth-internal",e=>{const t=ta(e.getProvider("auth").getImmediate());return(r=>new Yk(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Jt(wp,Ep,jk(n)),Jt(wp,Ep,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xk=5*60,Jk=Kp("authIdTokenMaxAge")||Xk;let bp=null;const Zk=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Jk)return;const o=t==null?void 0:t.token;bp!==o&&(bp=o,await fetch(n,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function eO(n=xc()){const e=Ho(n,"auth");if(e.isInitialized())return e.getImmediate();const t=O1(n,{popupRedirectResolver:Kk,persistence:[rk,z1,om]}),r=Kp("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(r,location.origin);if(location.origin===a.origin){const c=Zk(a.toString());$1(t,c,()=>c(t.currentUser)),H1(t,h=>c(h))}}const o=qp("auth");return o&&P1(t,`http://${o}`),t}function tO(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}A1({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=o=>{const a=Zt("internal-error");a.customData=o,t(a)},r.type="text/javascript",r.charset="UTF-8",tO().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Qk("Browser");const nO={apiKey:"AIzaSyD1bUd4QHmDnXtuA1SZgvxiaRcmuEVLpWo",authDomain:"instagram-imitation-180e8.firebaseapp.com",databaseURL:"https://instagram-imitation-180e8-default-rtdb.firebaseio.com",projectId:"instagram-imitation-180e8",storageBucket:"instagram-imitation-180e8.appspot.com",messagingSenderId:"266282768545",appId:"1:266282768545:web:07dbf92d25e2a93b3078e0"},ra=e_(nO),Ax=eO(ra),Xr=HR(ra);Dg(ra);const iO="/Instagram-Imitation/assets/Instagram_logo_light-WGj1KLTg.png";var fm={exports:{}},so={exports:{}};/*!
  * Bootstrap index.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var Ip;function Xn(){return Ip||(Ip=1,function(n,e){(function(t,r){r(e)})(et,function(t){const a="transitionend",c=R=>R==null?`${R}`:Object.prototype.toString.call(R).match(/\s([a-z]+)/i)[1].toLowerCase(),h=R=>{do R+=Math.floor(Math.random()*1e6);while(document.getElementById(R));return R},d=R=>{let K=R.getAttribute("data-bs-target");if(!K||K==="#"){let J=R.getAttribute("href");if(!J||!J.includes("#")&&!J.startsWith("."))return null;J.includes("#")&&!J.startsWith("#")&&(J=`#${J.split("#")[1]}`),K=J&&J!=="#"?J.trim():null}return K},p=R=>{const K=d(R);return K&&document.querySelector(K)?K:null},y=R=>{const K=d(R);return K?document.querySelector(K):null},v=R=>{if(!R)return 0;let{transitionDuration:K,transitionDelay:J}=window.getComputedStyle(R);const Ne=Number.parseFloat(K),be=Number.parseFloat(J);return!Ne&&!be?0:(K=K.split(",")[0],J=J.split(",")[0],(Number.parseFloat(K)+Number.parseFloat(J))*1e3)},E=R=>{R.dispatchEvent(new Event(a))},T=R=>!R||typeof R!="object"?!1:(typeof R.jquery<"u"&&(R=R[0]),typeof R.nodeType<"u"),A=R=>T(R)?R.jquery?R[0]:R:typeof R=="string"&&R.length>0?document.querySelector(R):null,L=R=>{if(!T(R)||R.getClientRects().length===0)return!1;const K=getComputedStyle(R).getPropertyValue("visibility")==="visible",J=R.closest("details:not([open])");if(!J)return K;if(J!==R){const Ne=R.closest("summary");if(Ne&&Ne.parentNode!==J||Ne===null)return!1}return K},D=R=>!R||R.nodeType!==Node.ELEMENT_NODE||R.classList.contains("disabled")?!0:typeof R.disabled<"u"?R.disabled:R.hasAttribute("disabled")&&R.getAttribute("disabled")!=="false",F=R=>{if(!document.documentElement.attachShadow)return null;if(typeof R.getRootNode=="function"){const K=R.getRootNode();return K instanceof ShadowRoot?K:null}return R instanceof ShadowRoot?R:R.parentNode?F(R.parentNode):null},ee=()=>{},O=R=>{R.offsetHeight},G=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,z=[],x=R=>{document.readyState==="loading"?(z.length||document.addEventListener("DOMContentLoaded",()=>{for(const K of z)K()}),z.push(R)):R()},U=()=>document.documentElement.dir==="rtl",$=R=>{x(()=>{const K=G();if(K){const J=R.NAME,Ne=K.fn[J];K.fn[J]=R.jQueryInterface,K.fn[J].Constructor=R,K.fn[J].noConflict=()=>(K.fn[J]=Ne,R.jQueryInterface)}})},q=R=>{typeof R=="function"&&R()},_e=(R,K,J=!0)=>{if(!J){q(R);return}const be=v(K)+5;let Ie=!1;const Pe=({target:Mt})=>{Mt===K&&(Ie=!0,K.removeEventListener(a,Pe),q(R))};K.addEventListener(a,Pe),setTimeout(()=>{Ie||E(K)},be)},ve=(R,K,J,Ne)=>{const be=R.length;let Ie=R.indexOf(K);return Ie===-1?!J&&Ne?R[be-1]:R[0]:(Ie+=J?1:-1,Ne&&(Ie=(Ie+be)%be),R[Math.max(0,Math.min(Ie,be-1))])};t.defineJQueryPlugin=$,t.execute=q,t.executeAfterTransition=_e,t.findShadowRoot=F,t.getElement=A,t.getElementFromSelector=y,t.getNextActiveElement=ve,t.getSelectorFromElement=p,t.getTransitionDurationFromElement=v,t.getUID=h,t.getjQuery=G,t.isDisabled=D,t.isElement=T,t.isRTL=U,t.isVisible=L,t.noop=ee,t.onDOMContentLoaded=x,t.reflow=O,t.toType=c,t.triggerTransitionEnd=E,Object.defineProperties(t,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})})}(so,so.exports)),so.exports}var zl={exports:{}};/*!
  * Bootstrap event-handler.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var Cp;function as(){return Cp||(Cp=1,function(n,e){(function(t,r){n.exports=r(Xn())})(et,function(t){const r=/[^.]*(?=\..*)\.|.*/,o=/\..*/,a=/::\d+$/,c={};let h=1;const d={mouseenter:"mouseover",mouseleave:"mouseout"},p=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function y(x,U){return U&&`${U}::${h++}`||x.uidEvent||h++}function v(x){const U=y(x);return x.uidEvent=U,c[U]=c[U]||{},c[U]}function E(x,U){return function $(q){return z(q,{delegateTarget:x}),$.oneOff&&G.off(x,q.type,U),U.apply(x,[q])}}function T(x,U,$){return function q(_e){const ve=x.querySelectorAll(U);for(let{target:R}=_e;R&&R!==this;R=R.parentNode)for(const K of ve)if(K===R)return z(_e,{delegateTarget:R}),q.oneOff&&G.off(x,_e.type,U,$),$.apply(R,[_e])}}function A(x,U,$=null){return Object.values(x).find(q=>q.callable===U&&q.delegationSelector===$)}function L(x,U,$){const q=typeof U=="string",_e=q?$:U||$;let ve=O(x);return p.has(ve)||(ve=x),[q,_e,ve]}function D(x,U,$,q,_e){if(typeof U!="string"||!x)return;let[ve,R,K]=L(U,$,q);U in d&&(R=(Tn=>function($e){if(!$e.relatedTarget||$e.relatedTarget!==$e.delegateTarget&&!$e.delegateTarget.contains($e.relatedTarget))return Tn.call(this,$e)})(R));const J=v(x),Ne=J[K]||(J[K]={}),be=A(Ne,R,ve?$:null);if(be){be.oneOff=be.oneOff&&_e;return}const Ie=y(R,U.replace(r,"")),Pe=ve?T(x,$,R):E(x,R);Pe.delegationSelector=ve?$:null,Pe.callable=R,Pe.oneOff=_e,Pe.uidEvent=Ie,Ne[Ie]=Pe,x.addEventListener(K,Pe,ve)}function F(x,U,$,q,_e){const ve=A(U[$],q,_e);ve&&(x.removeEventListener($,ve,!!_e),delete U[$][ve.uidEvent])}function ee(x,U,$,q){const _e=U[$]||{};for(const ve of Object.keys(_e))if(ve.includes(q)){const R=_e[ve];F(x,U,$,R.callable,R.delegationSelector)}}function O(x){return x=x.replace(o,""),d[x]||x}const G={on(x,U,$,q){D(x,U,$,q,!1)},one(x,U,$,q){D(x,U,$,q,!0)},off(x,U,$,q){if(typeof U!="string"||!x)return;const[_e,ve,R]=L(U,$,q),K=R!==U,J=v(x),Ne=J[R]||{},be=U.startsWith(".");if(typeof ve<"u"){if(!Object.keys(Ne).length)return;F(x,J,R,ve,_e?$:null);return}if(be)for(const Ie of Object.keys(J))ee(x,J,Ie,U.slice(1));for(const Ie of Object.keys(Ne)){const Pe=Ie.replace(a,"");if(!K||U.includes(Pe)){const Mt=Ne[Ie];F(x,J,R,Mt.callable,Mt.delegationSelector)}}},trigger(x,U,$){if(typeof U!="string"||!x)return null;const q=t.getjQuery(),_e=O(U),ve=U!==_e;let R=null,K=!0,J=!0,Ne=!1;ve&&q&&(R=q.Event(U,$),q(x).trigger(R),K=!R.isPropagationStopped(),J=!R.isImmediatePropagationStopped(),Ne=R.isDefaultPrevented());let be=new Event(U,{bubbles:K,cancelable:!0});return be=z(be,$),Ne&&be.preventDefault(),J&&x.dispatchEvent(be),be.defaultPrevented&&R&&R.preventDefault(),be}};function z(x,U){for(const[$,q]of Object.entries(U||{}))try{x[$]=q}catch{Object.defineProperty(x,$,{configurable:!0,get(){return q}})}return x}return G})}(zl)),zl.exports}var Kl={exports:{}};/*!
  * Bootstrap selector-engine.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var Tp;function Ru(){return Tp||(Tp=1,function(n,e){(function(t,r){n.exports=r(Xn())})(et,function(t){return{find(o,a=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(a,o))},findOne(o,a=document.documentElement){return Element.prototype.querySelector.call(a,o)},children(o,a){return[].concat(...o.children).filter(c=>c.matches(a))},parents(o,a){const c=[];let h=o.parentNode.closest(a);for(;h;)c.push(h),h=h.parentNode.closest(a);return c},prev(o,a){let c=o.previousElementSibling;for(;c;){if(c.matches(a))return[c];c=c.previousElementSibling}return[]},next(o,a){let c=o.nextElementSibling;for(;c;){if(c.matches(a))return[c];c=c.nextElementSibling}return[]},focusableChildren(o){const a=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(c=>`${c}:not([tabindex^="-"])`).join(",");return this.find(a,o).filter(c=>!t.isDisabled(c)&&t.isVisible(c))}}})}(Kl)),Kl.exports}var Yl={exports:{}},jl={exports:{}};/*!
  * Bootstrap manipulator.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var Sp;function pm(){return Sp||(Sp=1,function(n,e){(function(t,r){n.exports=r()})(et,function(){function t(a){if(a==="true")return!0;if(a==="false")return!1;if(a===Number(a).toString())return Number(a);if(a===""||a==="null")return null;if(typeof a!="string")return a;try{return JSON.parse(decodeURIComponent(a))}catch{return a}}function r(a){return a.replace(/[A-Z]/g,c=>`-${c.toLowerCase()}`)}return{setDataAttribute(a,c,h){a.setAttribute(`data-bs-${r(c)}`,h)},removeDataAttribute(a,c){a.removeAttribute(`data-bs-${r(c)}`)},getDataAttributes(a){if(!a)return{};const c={},h=Object.keys(a.dataset).filter(d=>d.startsWith("bs")&&!d.startsWith("bsConfig"));for(const d of h){let p=d.replace(/^bs/,"");p=p.charAt(0).toLowerCase()+p.slice(1,p.length),c[p]=t(a.dataset[d])}return c},getDataAttribute(a,c){return t(a.getAttribute(`data-bs-${r(c)}`))}}})}(jl)),jl.exports}/*!
  * Bootstrap scrollbar.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var Ap;function rO(){return Ap||(Ap=1,function(n,e){(function(t,r){n.exports=r(Ru(),pm(),Xn())})(et,function(t,r,o){const a=T=>T&&typeof T=="object"&&"default"in T?T:{default:T},c=a(t),h=a(r),d=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",p=".sticky-top",y="padding-right",v="margin-right";class E{constructor(){this._element=document.body}getWidth(){const A=document.documentElement.clientWidth;return Math.abs(window.innerWidth-A)}hide(){const A=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,y,L=>L+A),this._setElementAttributes(d,y,L=>L+A),this._setElementAttributes(p,v,L=>L-A)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,y),this._resetElementAttributes(d,y),this._resetElementAttributes(p,v)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(A,L,D){const F=this.getWidth(),ee=O=>{if(O!==this._element&&window.innerWidth>O.clientWidth+F)return;this._saveInitialAttribute(O,L);const G=window.getComputedStyle(O).getPropertyValue(L);O.style.setProperty(L,`${D(Number.parseFloat(G))}px`)};this._applyManipulationCallback(A,ee)}_saveInitialAttribute(A,L){const D=A.style.getPropertyValue(L);D&&h.default.setDataAttribute(A,L,D)}_resetElementAttributes(A,L){const D=F=>{const ee=h.default.getDataAttribute(F,L);if(ee===null){F.style.removeProperty(L);return}h.default.removeDataAttribute(F,L),F.style.setProperty(L,ee)};this._applyManipulationCallback(A,D)}_applyManipulationCallback(A,L){if(o.isElement(A)){L(A);return}for(const D of c.default.find(A,this._element))L(D)}}return E})}(Yl)),Yl.exports}var Ql={exports:{}},Xl={exports:{}};/*!
  * Bootstrap data.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var Rp;function sO(){return Rp||(Rp=1,function(n,e){(function(t,r){n.exports=r()})(et,function(){const t=new Map;return{set(o,a,c){t.has(o)||t.set(o,new Map);const h=t.get(o);if(!h.has(a)&&h.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(h.keys())[0]}.`);return}h.set(a,c)},get(o,a){return t.has(o)&&t.get(o).get(a)||null},remove(o,a){if(!t.has(o))return;const c=t.get(o);c.delete(a),c.size===0&&t.delete(o)}}})}(Xl)),Xl.exports}var Jl={exports:{}};/*!
  * Bootstrap config.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var Np;function Nu(){return Np||(Np=1,function(n,e){(function(t,r){n.exports=r(Xn(),pm())})(et,function(t,r){const a=(h=>h&&typeof h=="object"&&"default"in h?h:{default:h})(r);class c{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(d){return d=this._mergeConfigObj(d),d=this._configAfterMerge(d),this._typeCheckConfig(d),d}_configAfterMerge(d){return d}_mergeConfigObj(d,p){const y=t.isElement(p)?a.default.getDataAttribute(p,"config"):{};return{...this.constructor.Default,...typeof y=="object"?y:{},...t.isElement(p)?a.default.getDataAttributes(p):{},...typeof d=="object"?d:{}}}_typeCheckConfig(d,p=this.constructor.DefaultType){for(const y of Object.keys(p)){const v=p[y],E=d[y],T=t.isElement(E)?"element":t.toType(E);if(!new RegExp(v).test(T))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${y}" provided type "${T}" but expected type "${v}".`)}}}return c})}(Jl)),Jl.exports}/*!
  * Bootstrap base-component.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var kp;function oO(){return kp||(kp=1,function(n,e){(function(t,r){n.exports=r(sO(),Xn(),as(),Nu())})(et,function(t,r,o,a){const c=E=>E&&typeof E=="object"&&"default"in E?E:{default:E},h=c(t),d=c(o),p=c(a),y="5.2.3";class v extends p.default{constructor(T,A){super(),T=r.getElement(T),T&&(this._element=T,this._config=this._getConfig(A),h.default.set(this._element,this.constructor.DATA_KEY,this))}dispose(){h.default.remove(this._element,this.constructor.DATA_KEY),d.default.off(this._element,this.constructor.EVENT_KEY);for(const T of Object.getOwnPropertyNames(this))this[T]=null}_queueCallback(T,A,L=!0){r.executeAfterTransition(T,A,L)}_getConfig(T){return T=this._mergeConfigObj(T,this._element),T=this._configAfterMerge(T),this._typeCheckConfig(T),T}static getInstance(T){return h.default.get(r.getElement(T),this.DATA_KEY)}static getOrCreateInstance(T,A={}){return this.getInstance(T)||new this(T,typeof A=="object"?A:null)}static get VERSION(){return y}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(T){return`${T}${this.EVENT_KEY}`}}return v})}(Ql)),Ql.exports}var Zl={exports:{}};/*!
  * Bootstrap backdrop.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var Op;function aO(){return Op||(Op=1,function(n,e){(function(t,r){n.exports=r(as(),Xn(),Nu())})(et,function(t,r,o){const a=L=>L&&typeof L=="object"&&"default"in L?L:{default:L},c=a(t),h=a(o),d="backdrop",p="fade",y="show",v=`mousedown.bs.${d}`,E={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},T={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class A extends h.default{constructor(D){super(),this._config=this._getConfig(D),this._isAppended=!1,this._element=null}static get Default(){return E}static get DefaultType(){return T}static get NAME(){return d}show(D){if(!this._config.isVisible){r.execute(D);return}this._append();const F=this._getElement();this._config.isAnimated&&r.reflow(F),F.classList.add(y),this._emulateAnimation(()=>{r.execute(D)})}hide(D){if(!this._config.isVisible){r.execute(D);return}this._getElement().classList.remove(y),this._emulateAnimation(()=>{this.dispose(),r.execute(D)})}dispose(){this._isAppended&&(c.default.off(this._element,v),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const D=document.createElement("div");D.className=this._config.className,this._config.isAnimated&&D.classList.add(p),this._element=D}return this._element}_configAfterMerge(D){return D.rootElement=r.getElement(D.rootElement),D}_append(){if(this._isAppended)return;const D=this._getElement();this._config.rootElement.append(D),c.default.on(D,v,()=>{r.execute(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(D){r.executeAfterTransition(D,this._getElement(),this._config.isAnimated)}}return A})}(Zl)),Zl.exports}var ec={exports:{}};/*!
  * Bootstrap focustrap.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var xp;function lO(){return xp||(xp=1,function(n,e){(function(t,r){n.exports=r(as(),Ru(),Nu())})(et,function(t,r,o){const a=G=>G&&typeof G=="object"&&"default"in G?G:{default:G},c=a(t),h=a(r),d=a(o),p="focustrap",v=".bs.focustrap",E=`focusin${v}`,T=`keydown.tab${v}`,A="Tab",L="forward",D="backward",F={autofocus:!0,trapElement:null},ee={autofocus:"boolean",trapElement:"element"};class O extends d.default{constructor(z){super(),this._config=this._getConfig(z),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return F}static get DefaultType(){return ee}static get NAME(){return p}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),c.default.off(document,v),c.default.on(document,E,z=>this._handleFocusin(z)),c.default.on(document,T,z=>this._handleKeydown(z)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,c.default.off(document,v))}_handleFocusin(z){const{trapElement:x}=this._config;if(z.target===document||z.target===x||x.contains(z.target))return;const U=h.default.focusableChildren(x);U.length===0?x.focus():this._lastTabNavDirection===D?U[U.length-1].focus():U[0].focus()}_handleKeydown(z){z.key===A&&(this._lastTabNavDirection=z.shiftKey?D:L)}}return O})}(ec)),ec.exports}var oo={exports:{}};/*!
  * Bootstrap component-functions.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var Pp;function cO(){return Pp||(Pp=1,function(n,e){(function(t,r){r(e,as(),Xn())})(et,function(t,r,o){const c=(d=>d&&typeof d=="object"&&"default"in d?d:{default:d})(r),h=(d,p="hide")=>{const y=`click.dismiss${d.EVENT_KEY}`,v=d.NAME;c.default.on(document,y,`[data-bs-dismiss="${v}"]`,function(E){if(["A","AREA"].includes(this.tagName)&&E.preventDefault(),o.isDisabled(this))return;const T=o.getElementFromSelector(this)||this.closest(`.${v}`);d.getOrCreateInstance(T)[p]()})};t.enableDismissTrigger=h,Object.defineProperties(t,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})})}(oo,oo.exports)),oo.exports}/*!
  * Bootstrap modal.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */(function(n,e){(function(t,r){n.exports=r(Xn(),as(),Ru(),rO(),oO(),aO(),lO(),cO())})(et,function(t,r,o,a,c,h,d,p){const y=nn=>nn&&typeof nn=="object"&&"default"in nn?nn:{default:nn},v=y(r),E=y(o),T=y(a),A=y(c),L=y(h),D=y(d),F="modal",O=".bs.modal",G=".data-api",z="Escape",x=`hide${O}`,U=`hidePrevented${O}`,$=`hidden${O}`,q=`show${O}`,_e=`shown${O}`,ve=`resize${O}`,R=`click.dismiss${O}`,K=`mousedown.dismiss${O}`,J=`keydown.dismiss${O}`,Ne=`click${O}${G}`,be="modal-open",Ie="fade",Pe="show",Mt="modal-static",Tn=".modal.show",$e=".modal-dialog",sa=".modal-body",oa='[data-bs-toggle="modal"]',aa={backdrop:!0,focus:!0,keyboard:!0},Sn={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class St extends A.default{constructor(ue,Oe){super(ue,Oe),this._dialog=E.default.findOne($e,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new T.default,this._addEventListeners()}static get Default(){return aa}static get DefaultType(){return Sn}static get NAME(){return F}toggle(ue){return this._isShown?this.hide():this.show(ue)}show(ue){this._isShown||this._isTransitioning||v.default.trigger(this._element,q,{relatedTarget:ue}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(be),this._adjustDialog(),this._backdrop.show(()=>this._showElement(ue)))}hide(){!this._isShown||this._isTransitioning||v.default.trigger(this._element,x).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(Pe),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){for(const ue of[window,this._dialog])v.default.off(ue,O);this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new L.default({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new D.default({trapElement:this._element})}_showElement(ue){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const Oe=E.default.findOne(sa,this._dialog);Oe&&(Oe.scrollTop=0),t.reflow(this._element),this._element.classList.add(Pe);const vt=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,v.default.trigger(this._element,_e,{relatedTarget:ue})};this._queueCallback(vt,this._dialog,this._isAnimated())}_addEventListeners(){v.default.on(this._element,J,ue=>{if(ue.key===z){if(this._config.keyboard){ue.preventDefault(),this.hide();return}this._triggerBackdropTransition()}}),v.default.on(window,ve,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),v.default.on(this._element,K,ue=>{v.default.one(this._element,R,Oe=>{if(!(this._element!==ue.target||this._element!==Oe.target)){if(this._config.backdrop==="static"){this._triggerBackdropTransition();return}this._config.backdrop&&this.hide()}})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(be),this._resetAdjustments(),this._scrollBar.reset(),v.default.trigger(this._element,$)})}_isAnimated(){return this._element.classList.contains(Ie)}_triggerBackdropTransition(){if(v.default.trigger(this._element,U).defaultPrevented)return;const Oe=this._element.scrollHeight>document.documentElement.clientHeight,vt=this._element.style.overflowY;vt==="hidden"||this._element.classList.contains(Mt)||(Oe||(this._element.style.overflowY="hidden"),this._element.classList.add(Mt),this._queueCallback(()=>{this._element.classList.remove(Mt),this._queueCallback(()=>{this._element.style.overflowY=vt},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const ue=this._element.scrollHeight>document.documentElement.clientHeight,Oe=this._scrollBar.getWidth(),vt=Oe>0;if(vt&&!ue){const Kt=t.isRTL()?"paddingLeft":"paddingRight";this._element.style[Kt]=`${Oe}px`}if(!vt&&ue){const Kt=t.isRTL()?"paddingRight":"paddingLeft";this._element.style[Kt]=`${Oe}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(ue,Oe){return this.each(function(){const vt=St.getOrCreateInstance(this,ue);if(typeof ue=="string"){if(typeof vt[ue]>"u")throw new TypeError(`No method named "${ue}"`);vt[ue](Oe)}})}}return v.default.on(document,Ne,oa,function(nn){const ue=t.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&nn.preventDefault(),v.default.one(ue,q,Kt=>{Kt.defaultPrevented||v.default.one(ue,$,()=>{t.isVisible(this)&&this.focus()})});const Oe=E.default.findOne(Tn);Oe&&St.getInstance(Oe).hide(),St.getOrCreateInstance(ue).toggle(this)}),p.enableDismissTrigger(St),t.defineJQueryPlugin(St),St})})(fm);var uO=fm.exports;const hO=JI(uO),dO=ZI("userDataList",()=>{const n=Ke(null);async function e(){try{const o=localStorage.getItem("long-lived-access-token"),a=localStorage.getItem("user_id");if(!o||!a)throw new Error("Access token or user ID is missing.");const c=await eC.get(`https://graph.instagram.com/${a}?fields=account_type,id,media_count,username&access_token=${o}`);n.value=c.data,t(c.data.id)}catch(o){console.error("Error fetching user data:",o)}}async function t(o){const a=jr(Xr,"userData");gg(a,async c=>{const h=[];c.forEach(p=>{const y=p.key,v=p.val();h.push({key:y,...v})});const d=h.find(p=>p.id===o);d||await r(o),n.value={...n.value,...d}})}async function r(o){const a=jr(Xr,"userData");if(!n.value){console.error("User data is null.");return}const c={id:o.toString(),media_url:"https://firebasestorage.googleapis.com/v0/b/instagram-imitation-180e8.appspot.com/o/user%2Fkarsten-winegeart-NE0XGVKTmcA-unsplash.jpg?alt=media&token=9f250d7f-e2e5-46fa-bad9-bcae3001951f",username:n.value.username};try{await _g(a,c),console.log("Data successfully written to Firebase!")}catch(h){console.error("Error writing data to Firebase:",h)}}return{userData:n,getUserData:e}}),ls=n=>(Fp("data-v-f74a2547"),n=n(),Bp(),n),fO=ls(()=>H("button",{type:"button",class:"btn-close btn-close-white position-absolute top-0 end-0 m-3","data-bs-dismiss":"modal","aria-label":"Close"},null,-1)),pO={class:"modal-content my-5"},_O={class:"modal-header d-flex justify-content-center"},gO=ls(()=>H("h5",{class:"modal-title",id:"addPostModalLabel"},"建立新貼文",-1)),mO={class:"d-flex flex-sm-column flex-md-row"},vO=ls(()=>H("i",{class:"bi bi-image pic-icon"},null,-1)),yO=ls(()=>H("span",null,"將相片和影片拖曳到這裡",-1)),wO=ls(()=>H("label",{for:"file-input",class:"file-input-button btn btn-primary m-3"},"從電腦選擇",-1)),EO={key:1,class:"modal-body d-flex flex-column align-items-center input-img-area p-0"},bO=["src"],IO={key:2,class:"border-start p-2 w-100"},CO={class:"d-flex align-self-center align-middle"},TO={class:"rounded-circle user-pic"},SO=["src"],AO={class:"align-middle my-auto ms-2 fw-bold"},RO={__name:"addPostModalComponent",setup(n,{expose:e}){const t=Ke(!1),r=Ke(null),o=Ke(null),a=function(){r.value.show(),c()},c=()=>{h.value="",L.value=!1,A.value.style.maxWidth="700px",d.value=null};e({showModal:a}),tc(()=>{r.value=new hO(o.value)});const h=Ke(null),d=Ke(null),p=function(x){if(t.value=!0,x.files){d.value=x.files[0];let U=new FileReader;U.onload=$=>{h.value=$.target.result,t.value=!1},U.readAsDataURL(x.files[0])}},y=Ke(!1),v=x=>{x.dataTransfer.dropEffect="copy",y.value=!0,x.preventDefault()},E=x=>{y.value=!1,x.preventDefault()},T=x=>{x.preventDefault(),p(x.dataTransfer)},A=Ke(null),L=Ke(!1),D=function(){L.value?ee():(A.value.style.maxWidth="1000px",L.value=!0)},F=()=>{L.value&&(A.value.style.maxWidth="700px",L.value=!1),h.value=null},ee=async()=>{t.value=!0;const x=d.value;if(!x){console.error("No file selected."),t.value=!1;return}const U=Dg(ra),$=ZN(U,"posts/"+x.name);try{await XN($,x);const q=await JN($);if(q)z(q);else throw new Error("Fail to get imageUrl from storage")}catch(q){t.value=!1,console.error("Error uploading image:",q)}},O=dO(),G=Ke(""),z=function(x){const U=jr(Xr,"postsData"),$=new Date,q={caption:G.value,id:$.getTime()+O.userData.id,isThumb:!1,media_type:"IMAGE",media_url:x,permalink:"",postownerid:O.userData.id,timestamp:$.toISOString(),username:O.userData.username};_g(U,q).then(()=>{console.log("Data successfully written to Firebase!"),r.value.hide(),G.value=""}).catch(_e=>{console.error("Error writing data to Firebase:",_e)}).finally(()=>{t.value=!1})};return(x,U)=>{const $=Lp("loading-overlay");return Te(),Se(Pr,null,[H("div",{class:"modal fade",id:"addPostModal",tabindex:"-1","aria-labelledby":"addPostModalLabel","aria-hidden":"true",ref_key:"addPostModal",ref:o},[fO,H("div",{class:"modal-dialog",ref_key:"modalDialog",ref:A},[H("div",pO,[H("div",_O,[h.value?(Te(),Se("button",{key:0,class:"btn position-absolute start-0 mx-3 text-primary",onClick:F}," 上一步 ")):rt("",!0),gO,h.value?(Te(),Se("button",{key:1,class:"btn position-absolute end-0 mx-3 text-primary",onClick:D}," 下一步 ")):rt("",!0)]),H("div",mO,[h.value?(Te(),Se("div",EO,[H("img",{src:h.value,alt:"",class:"input-img"},null,8,bO)])):(Te(),Se("div",{key:0,class:"modal-body align-items-center p-5",onDragover:ui(v,["prevent"]),onDragleave:ui(E,["prevent"]),onDrop:ui(T,["prevent"])},[H("div",{class:ao(["d-flex flex-column align-items-center justify-content-center",y.value?"text-primary":""])},[vO,yO,wO,H("input",{type:"file",id:"file-input",accept:"audio/*,video/*,image/*",onChange:U[0]||(U[0]=q=>p(q.target))},null,32)],2)],32)),L.value?(Te(),Se("div",IO,[H("div",CO,[H("div",TO,[H("img",{src:_o(O).userData.media_url,alt:""},null,8,SO)]),H("p",AO,lo(_o(O).userData.username),1)]),Mp(H("textarea",{type:"text",placeholder:"撰寫說明文字......",class:"post-description-input py-2 w-100","onUpdate:modelValue":U[1]||(U[1]=q=>G.value=q)},null,512),[[Up,G.value]])])):rt("",!0)])])],512)],512),co($,{active:t.value,"is-full-page":!0},null,8,["active"])],64)}}},NO=Dp(RO,[["__scopeId","data-v-f74a2547"]]),kO={class:"col-md-1 col-lg-2 nav-all p-md-3 overflow-hidden position-relative"},OO=H("div",{class:"position-relative width-inherit"},[H("div",{class:"navbar navbar-light header-nav width-inherit start-0"},[H("img",{src:iO,alt:"",class:"header-logo d-md-none d-lg-block d-sm-block ms-md-3"}),H("svg",{"aria-label":"Instagram",class:"d-none d-lg-none d-md-block header-logo header-logo-icon",fill:"currentColor",height:"24",role:"img",viewBox:"0 0 24 24",width:"24"},[H("title",null,"Instagram"),H("path",{d:"M12 2.982c2.937 0 3.285.011 4.445.064a6.087 6.087 0 0 1 2.042.379 3.408 3.408 0 0 1 1.265.823 3.408 3.408 0 0 1 .823 1.265 6.087 6.087 0 0 1 .379 2.042c.053 1.16.064 1.508.064 4.445s-.011 3.285-.064 4.445a6.087 6.087 0 0 1-.379 2.042 3.643 3.643 0 0 1-2.088 2.088 6.087 6.087 0 0 1-2.042.379c-1.16.053-1.508.064-4.445.064s-3.285-.011-4.445-.064a6.087 6.087 0 0 1-2.043-.379 3.408 3.408 0 0 1-1.264-.823 3.408 3.408 0 0 1-.823-1.265 6.087 6.087 0 0 1-.379-2.042c-.053-1.16-.064-1.508-.064-4.445s.011-3.285.064-4.445a6.087 6.087 0 0 1 .379-2.042 3.408 3.408 0 0 1 .823-1.265 3.408 3.408 0 0 1 1.265-.823 6.087 6.087 0 0 1 2.042-.379c1.16-.053 1.508-.064 4.445-.064M12 1c-2.987 0-3.362.013-4.535.066a8.074 8.074 0 0 0-2.67.511 5.392 5.392 0 0 0-1.949 1.27 5.392 5.392 0 0 0-1.269 1.948 8.074 8.074 0 0 0-.51 2.67C1.012 8.638 1 9.013 1 12s.013 3.362.066 4.535a8.074 8.074 0 0 0 .511 2.67 5.392 5.392 0 0 0 1.27 1.949 5.392 5.392 0 0 0 1.948 1.269 8.074 8.074 0 0 0 2.67.51C8.638 22.988 9.013 23 12 23s3.362-.013 4.535-.066a8.074 8.074 0 0 0 2.67-.511 5.625 5.625 0 0 0 3.218-3.218 8.074 8.074 0 0 0 .51-2.67C22.988 15.362 23 14.987 23 12s-.013-3.362-.066-4.535a8.074 8.074 0 0 0-.511-2.67 5.392 5.392 0 0 0-1.27-1.949 5.392 5.392 0 0 0-1.948-1.269 8.074 8.074 0 0 0-2.67-.51C15.362 1.012 14.987 1 12 1Zm0 5.351A5.649 5.649 0 1 0 17.649 12 5.649 5.649 0 0 0 12 6.351Zm0 9.316A3.667 3.667 0 1 1 15.667 12 3.667 3.667 0 0 1 12 15.667Zm5.872-10.859a1.32 1.32 0 1 0 1.32 1.32 1.32 1.32 0 0 0-1.32-1.32Z"})])])],-1),xO={class:"bg-body d-flex flex-md-column position-fixed nav-selection bottom-0 start-0 justify-content-evenly justify-content-md-start width-inherit"},PO={class:"nav-item rounded px-2 mx-md-3"},DO=H("div",null,[H("i",{class:"bi bi-house-door icon-size m-0"})],-1),LO=H("div",{class:"position-absolute ms-4"},[H("span",{class:"d-none d-lg-inline p-2"},"首頁")],-1),MO={class:"nav-item rounded px-2 mx-md-3"},UO=H("div",null,[H("i",{class:"bi bi-plus-square icon-size m-0"})],-1),FO=H("div",{class:"position-absolute ms-4"},[H("span",{class:"d-none d-lg-inline p-2"},"建立")],-1),BO=[UO,FO],WO={class:"nav-item rounded px-2 mx-md-3"},HO=H("div",null,[H("i",{class:"bi bi-person-circle icon-size m-0"})],-1),$O=H("div",{class:"position-absolute ms-4"},[H("span",{class:"d-none d-lg-inline p-2"},"個人檔案")],-1),Rx={__name:"navComponent",setup(n){const e=Ke(null),t=function(){e.value.showModal()};return(r,o)=>{const a=Lp("RouterLink");return Te(),Se(Pr,null,[H("nav",kO,[OO,H("div",xO,[H("div",PO,[co(a,{to:"/",class:"text-decoration-none text-secondary d-flex text-dark justify-content-md-center justify-content-lg-start"},{default:lf(()=>[DO,LO]),_:1})]),H("div",MO,[H("a",{href:"#",class:"text-decoration-none text-secondary d-flex text-dark justify-content-md-center justify-content-lg-start",onClick:ui(t,["prevent"])},BO)]),H("div",WO,[co(a,{to:"/profile",class:"text-decoration-none text-secondary d-flex text-dark justify-content-md-center justify-content-lg-start"},{default:lf(()=>[HO,$O]),_:1})])])]),co(NO,{ref_key:"addPostModal",ref:e},null,512)],64)}}};var Fo={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */Fo.exports;(function(n,e){(function(){var t,r="4.17.21",o=200,a="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",c="Expected a function",h="Invalid `variable` option passed into `_.template`",d="__lodash_hash_undefined__",p=500,y="__lodash_placeholder__",v=1,E=2,T=4,A=1,L=2,D=1,F=2,ee=4,O=8,G=16,z=32,x=64,U=128,$=256,q=512,_e=30,ve="...",R=800,K=16,J=1,Ne=2,be=3,Ie=1/0,Pe=9007199254740991,Mt=17976931348623157e292,Tn=NaN,$e=4294967295,sa=$e-1,oa=$e>>>1,aa=[["ary",U],["bind",D],["bindKey",F],["curry",O],["curryRight",G],["flip",q],["partial",z],["partialRight",x],["rearg",$]],Sn="[object Arguments]",St="[object Array]",nn="[object AsyncFunction]",ue="[object Boolean]",Oe="[object Date]",vt="[object DOMException]",Kt="[object Error]",us="[object Function]",ku="[object GeneratorFunction]",Ut="[object Map]",lr="[object Number]",_m="[object Null]",rn="[object Object]",Ou="[object Promise]",gm="[object Proxy]",cr="[object RegExp]",Ft="[object Set]",ur="[object String]",hs="[object Symbol]",mm="[object Undefined]",hr="[object WeakMap]",vm="[object WeakSet]",dr="[object ArrayBuffer]",Ci="[object DataView]",la="[object Float32Array]",ca="[object Float64Array]",ua="[object Int8Array]",ha="[object Int16Array]",da="[object Int32Array]",fa="[object Uint8Array]",pa="[object Uint8ClampedArray]",_a="[object Uint16Array]",ga="[object Uint32Array]",ym=/\b__p \+= '';/g,wm=/\b(__p \+=) '' \+/g,Em=/(__e\(.*?\)|\b__t\)) \+\n'';/g,xu=/&(?:amp|lt|gt|quot|#39);/g,Pu=/[&<>"']/g,bm=RegExp(xu.source),Im=RegExp(Pu.source),Cm=/<%-([\s\S]+?)%>/g,Tm=/<%([\s\S]+?)%>/g,Du=/<%=([\s\S]+?)%>/g,Sm=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Am=/^\w*$/,Rm=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ma=/[\\^$.*+?()[\]{}|]/g,Nm=RegExp(ma.source),va=/^\s+/,km=/\s/,Om=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,xm=/\{\n\/\* \[wrapped with (.+)\] \*/,Pm=/,? & /,Dm=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Lm=/[()=,{}\[\]\/\s]/,Mm=/\\(\\)?/g,Um=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Lu=/\w*$/,Fm=/^[-+]0x[0-9a-f]+$/i,Bm=/^0b[01]+$/i,Wm=/^\[object .+?Constructor\]$/,Hm=/^0o[0-7]+$/i,$m=/^(?:0|[1-9]\d*)$/,Vm=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,ds=/($^)/,qm=/['\n\r\u2028\u2029\\]/g,fs="\\ud800-\\udfff",Gm="\\u0300-\\u036f",zm="\\ufe20-\\ufe2f",Km="\\u20d0-\\u20ff",Mu=Gm+zm+Km,Uu="\\u2700-\\u27bf",Fu="a-z\\xdf-\\xf6\\xf8-\\xff",Ym="\\xac\\xb1\\xd7\\xf7",jm="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Qm="\\u2000-\\u206f",Xm=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Bu="A-Z\\xc0-\\xd6\\xd8-\\xde",Wu="\\ufe0e\\ufe0f",Hu=Ym+jm+Qm+Xm,ya="['’]",Jm="["+fs+"]",$u="["+Hu+"]",ps="["+Mu+"]",Vu="\\d+",Zm="["+Uu+"]",qu="["+Fu+"]",Gu="[^"+fs+Hu+Vu+Uu+Fu+Bu+"]",wa="\\ud83c[\\udffb-\\udfff]",ev="(?:"+ps+"|"+wa+")",zu="[^"+fs+"]",Ea="(?:\\ud83c[\\udde6-\\uddff]){2}",ba="[\\ud800-\\udbff][\\udc00-\\udfff]",Ti="["+Bu+"]",Ku="\\u200d",Yu="(?:"+qu+"|"+Gu+")",tv="(?:"+Ti+"|"+Gu+")",ju="(?:"+ya+"(?:d|ll|m|re|s|t|ve))?",Qu="(?:"+ya+"(?:D|LL|M|RE|S|T|VE))?",Xu=ev+"?",Ju="["+Wu+"]?",nv="(?:"+Ku+"(?:"+[zu,Ea,ba].join("|")+")"+Ju+Xu+")*",iv="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",rv="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Zu=Ju+Xu+nv,sv="(?:"+[Zm,Ea,ba].join("|")+")"+Zu,ov="(?:"+[zu+ps+"?",ps,Ea,ba,Jm].join("|")+")",av=RegExp(ya,"g"),lv=RegExp(ps,"g"),Ia=RegExp(wa+"(?="+wa+")|"+ov+Zu,"g"),cv=RegExp([Ti+"?"+qu+"+"+ju+"(?="+[$u,Ti,"$"].join("|")+")",tv+"+"+Qu+"(?="+[$u,Ti+Yu,"$"].join("|")+")",Ti+"?"+Yu+"+"+ju,Ti+"+"+Qu,rv,iv,Vu,sv].join("|"),"g"),uv=RegExp("["+Ku+fs+Mu+Wu+"]"),hv=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,dv=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],fv=-1,ke={};ke[la]=ke[ca]=ke[ua]=ke[ha]=ke[da]=ke[fa]=ke[pa]=ke[_a]=ke[ga]=!0,ke[Sn]=ke[St]=ke[dr]=ke[ue]=ke[Ci]=ke[Oe]=ke[Kt]=ke[us]=ke[Ut]=ke[lr]=ke[rn]=ke[cr]=ke[Ft]=ke[ur]=ke[hr]=!1;var Ce={};Ce[Sn]=Ce[St]=Ce[dr]=Ce[Ci]=Ce[ue]=Ce[Oe]=Ce[la]=Ce[ca]=Ce[ua]=Ce[ha]=Ce[da]=Ce[Ut]=Ce[lr]=Ce[rn]=Ce[cr]=Ce[Ft]=Ce[ur]=Ce[hs]=Ce[fa]=Ce[pa]=Ce[_a]=Ce[ga]=!0,Ce[Kt]=Ce[us]=Ce[hr]=!1;var pv={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},_v={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},gv={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},mv={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},vv=parseFloat,yv=parseInt,eh=typeof et=="object"&&et&&et.Object===Object&&et,wv=typeof self=="object"&&self&&self.Object===Object&&self,Xe=eh||wv||Function("return this")(),Ca=e&&!e.nodeType&&e,Jn=Ca&&!0&&n&&!n.nodeType&&n,th=Jn&&Jn.exports===Ca,Ta=th&&eh.process,At=function(){try{var b=Jn&&Jn.require&&Jn.require("util").types;return b||Ta&&Ta.binding&&Ta.binding("util")}catch{}}(),nh=At&&At.isArrayBuffer,ih=At&&At.isDate,rh=At&&At.isMap,sh=At&&At.isRegExp,oh=At&&At.isSet,ah=At&&At.isTypedArray;function yt(b,S,C){switch(C.length){case 0:return b.call(S);case 1:return b.call(S,C[0]);case 2:return b.call(S,C[0],C[1]);case 3:return b.call(S,C[0],C[1],C[2])}return b.apply(S,C)}function Ev(b,S,C,W){for(var te=-1,fe=b==null?0:b.length;++te<fe;){var Ve=b[te];S(W,Ve,C(Ve),b)}return W}function Rt(b,S){for(var C=-1,W=b==null?0:b.length;++C<W&&S(b[C],C,b)!==!1;);return b}function bv(b,S){for(var C=b==null?0:b.length;C--&&S(b[C],C,b)!==!1;);return b}function lh(b,S){for(var C=-1,W=b==null?0:b.length;++C<W;)if(!S(b[C],C,b))return!1;return!0}function An(b,S){for(var C=-1,W=b==null?0:b.length,te=0,fe=[];++C<W;){var Ve=b[C];S(Ve,C,b)&&(fe[te++]=Ve)}return fe}function _s(b,S){var C=b==null?0:b.length;return!!C&&Si(b,S,0)>-1}function Sa(b,S,C){for(var W=-1,te=b==null?0:b.length;++W<te;)if(C(S,b[W]))return!0;return!1}function xe(b,S){for(var C=-1,W=b==null?0:b.length,te=Array(W);++C<W;)te[C]=S(b[C],C,b);return te}function Rn(b,S){for(var C=-1,W=S.length,te=b.length;++C<W;)b[te+C]=S[C];return b}function Aa(b,S,C,W){var te=-1,fe=b==null?0:b.length;for(W&&fe&&(C=b[++te]);++te<fe;)C=S(C,b[te],te,b);return C}function Iv(b,S,C,W){var te=b==null?0:b.length;for(W&&te&&(C=b[--te]);te--;)C=S(C,b[te],te,b);return C}function Ra(b,S){for(var C=-1,W=b==null?0:b.length;++C<W;)if(S(b[C],C,b))return!0;return!1}var Cv=Na("length");function Tv(b){return b.split("")}function Sv(b){return b.match(Dm)||[]}function ch(b,S,C){var W;return C(b,function(te,fe,Ve){if(S(te,fe,Ve))return W=fe,!1}),W}function gs(b,S,C,W){for(var te=b.length,fe=C+(W?1:-1);W?fe--:++fe<te;)if(S(b[fe],fe,b))return fe;return-1}function Si(b,S,C){return S===S?Fv(b,S,C):gs(b,uh,C)}function Av(b,S,C,W){for(var te=C-1,fe=b.length;++te<fe;)if(W(b[te],S))return te;return-1}function uh(b){return b!==b}function hh(b,S){var C=b==null?0:b.length;return C?Oa(b,S)/C:Tn}function Na(b){return function(S){return S==null?t:S[b]}}function ka(b){return function(S){return b==null?t:b[S]}}function dh(b,S,C,W,te){return te(b,function(fe,Ve,Ee){C=W?(W=!1,fe):S(C,fe,Ve,Ee)}),C}function Rv(b,S){var C=b.length;for(b.sort(S);C--;)b[C]=b[C].value;return b}function Oa(b,S){for(var C,W=-1,te=b.length;++W<te;){var fe=S(b[W]);fe!==t&&(C=C===t?fe:C+fe)}return C}function xa(b,S){for(var C=-1,W=Array(b);++C<b;)W[C]=S(C);return W}function Nv(b,S){return xe(S,function(C){return[C,b[C]]})}function fh(b){return b&&b.slice(0,mh(b)+1).replace(va,"")}function wt(b){return function(S){return b(S)}}function Pa(b,S){return xe(S,function(C){return b[C]})}function fr(b,S){return b.has(S)}function ph(b,S){for(var C=-1,W=b.length;++C<W&&Si(S,b[C],0)>-1;);return C}function _h(b,S){for(var C=b.length;C--&&Si(S,b[C],0)>-1;);return C}function kv(b,S){for(var C=b.length,W=0;C--;)b[C]===S&&++W;return W}var Ov=ka(pv),xv=ka(_v);function Pv(b){return"\\"+mv[b]}function Dv(b,S){return b==null?t:b[S]}function Ai(b){return uv.test(b)}function Lv(b){return hv.test(b)}function Mv(b){for(var S,C=[];!(S=b.next()).done;)C.push(S.value);return C}function Da(b){var S=-1,C=Array(b.size);return b.forEach(function(W,te){C[++S]=[te,W]}),C}function gh(b,S){return function(C){return b(S(C))}}function Nn(b,S){for(var C=-1,W=b.length,te=0,fe=[];++C<W;){var Ve=b[C];(Ve===S||Ve===y)&&(b[C]=y,fe[te++]=C)}return fe}function ms(b){var S=-1,C=Array(b.size);return b.forEach(function(W){C[++S]=W}),C}function Uv(b){var S=-1,C=Array(b.size);return b.forEach(function(W){C[++S]=[W,W]}),C}function Fv(b,S,C){for(var W=C-1,te=b.length;++W<te;)if(b[W]===S)return W;return-1}function Bv(b,S,C){for(var W=C+1;W--;)if(b[W]===S)return W;return W}function Ri(b){return Ai(b)?Hv(b):Cv(b)}function Bt(b){return Ai(b)?$v(b):Tv(b)}function mh(b){for(var S=b.length;S--&&km.test(b.charAt(S)););return S}var Wv=ka(gv);function Hv(b){for(var S=Ia.lastIndex=0;Ia.test(b);)++S;return S}function $v(b){return b.match(Ia)||[]}function Vv(b){return b.match(cv)||[]}var qv=function b(S){S=S==null?Xe:Ni.defaults(Xe.Object(),S,Ni.pick(Xe,dv));var C=S.Array,W=S.Date,te=S.Error,fe=S.Function,Ve=S.Math,Ee=S.Object,La=S.RegExp,Gv=S.String,Nt=S.TypeError,vs=C.prototype,zv=fe.prototype,ki=Ee.prototype,ys=S["__core-js_shared__"],ws=zv.toString,me=ki.hasOwnProperty,Kv=0,vh=function(){var i=/[^.]+$/.exec(ys&&ys.keys&&ys.keys.IE_PROTO||"");return i?"Symbol(src)_1."+i:""}(),Es=ki.toString,Yv=ws.call(Ee),jv=Xe._,Qv=La("^"+ws.call(me).replace(ma,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),bs=th?S.Buffer:t,kn=S.Symbol,Is=S.Uint8Array,yh=bs?bs.allocUnsafe:t,Cs=gh(Ee.getPrototypeOf,Ee),wh=Ee.create,Eh=ki.propertyIsEnumerable,Ts=vs.splice,bh=kn?kn.isConcatSpreadable:t,pr=kn?kn.iterator:t,Zn=kn?kn.toStringTag:t,Ss=function(){try{var i=ri(Ee,"defineProperty");return i({},"",{}),i}catch{}}(),Xv=S.clearTimeout!==Xe.clearTimeout&&S.clearTimeout,Jv=W&&W.now!==Xe.Date.now&&W.now,Zv=S.setTimeout!==Xe.setTimeout&&S.setTimeout,As=Ve.ceil,Rs=Ve.floor,Ma=Ee.getOwnPropertySymbols,ey=bs?bs.isBuffer:t,Ih=S.isFinite,ty=vs.join,ny=gh(Ee.keys,Ee),qe=Ve.max,nt=Ve.min,iy=W.now,ry=S.parseInt,Ch=Ve.random,sy=vs.reverse,Ua=ri(S,"DataView"),_r=ri(S,"Map"),Fa=ri(S,"Promise"),Oi=ri(S,"Set"),gr=ri(S,"WeakMap"),mr=ri(Ee,"create"),Ns=gr&&new gr,xi={},oy=si(Ua),ay=si(_r),ly=si(Fa),cy=si(Oi),uy=si(gr),ks=kn?kn.prototype:t,vr=ks?ks.valueOf:t,Th=ks?ks.toString:t;function _(i){if(Le(i)&&!ne(i)&&!(i instanceof he)){if(i instanceof kt)return i;if(me.call(i,"__wrapped__"))return Sd(i)}return new kt(i)}var Pi=function(){function i(){}return function(s){if(!De(s))return{};if(wh)return wh(s);i.prototype=s;var l=new i;return i.prototype=t,l}}();function Os(){}function kt(i,s){this.__wrapped__=i,this.__actions__=[],this.__chain__=!!s,this.__index__=0,this.__values__=t}_.templateSettings={escape:Cm,evaluate:Tm,interpolate:Du,variable:"",imports:{_}},_.prototype=Os.prototype,_.prototype.constructor=_,kt.prototype=Pi(Os.prototype),kt.prototype.constructor=kt;function he(i){this.__wrapped__=i,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=$e,this.__views__=[]}function hy(){var i=new he(this.__wrapped__);return i.__actions__=dt(this.__actions__),i.__dir__=this.__dir__,i.__filtered__=this.__filtered__,i.__iteratees__=dt(this.__iteratees__),i.__takeCount__=this.__takeCount__,i.__views__=dt(this.__views__),i}function dy(){if(this.__filtered__){var i=new he(this);i.__dir__=-1,i.__filtered__=!0}else i=this.clone(),i.__dir__*=-1;return i}function fy(){var i=this.__wrapped__.value(),s=this.__dir__,l=ne(i),u=s<0,f=l?i.length:0,g=Tw(0,f,this.__views__),m=g.start,w=g.end,I=w-m,N=u?w:m-1,k=this.__iteratees__,P=k.length,B=0,V=nt(I,this.__takeCount__);if(!l||!u&&f==I&&V==I)return jh(i,this.__actions__);var j=[];e:for(;I--&&B<V;){N+=s;for(var re=-1,Q=i[N];++re<P;){var le=k[re],de=le.iteratee,It=le.type,ct=de(Q);if(It==Ne)Q=ct;else if(!ct){if(It==J)continue e;break e}}j[B++]=Q}return j}he.prototype=Pi(Os.prototype),he.prototype.constructor=he;function ei(i){var s=-1,l=i==null?0:i.length;for(this.clear();++s<l;){var u=i[s];this.set(u[0],u[1])}}function py(){this.__data__=mr?mr(null):{},this.size=0}function _y(i){var s=this.has(i)&&delete this.__data__[i];return this.size-=s?1:0,s}function gy(i){var s=this.__data__;if(mr){var l=s[i];return l===d?t:l}return me.call(s,i)?s[i]:t}function my(i){var s=this.__data__;return mr?s[i]!==t:me.call(s,i)}function vy(i,s){var l=this.__data__;return this.size+=this.has(i)?0:1,l[i]=mr&&s===t?d:s,this}ei.prototype.clear=py,ei.prototype.delete=_y,ei.prototype.get=gy,ei.prototype.has=my,ei.prototype.set=vy;function sn(i){var s=-1,l=i==null?0:i.length;for(this.clear();++s<l;){var u=i[s];this.set(u[0],u[1])}}function yy(){this.__data__=[],this.size=0}function wy(i){var s=this.__data__,l=xs(s,i);if(l<0)return!1;var u=s.length-1;return l==u?s.pop():Ts.call(s,l,1),--this.size,!0}function Ey(i){var s=this.__data__,l=xs(s,i);return l<0?t:s[l][1]}function by(i){return xs(this.__data__,i)>-1}function Iy(i,s){var l=this.__data__,u=xs(l,i);return u<0?(++this.size,l.push([i,s])):l[u][1]=s,this}sn.prototype.clear=yy,sn.prototype.delete=wy,sn.prototype.get=Ey,sn.prototype.has=by,sn.prototype.set=Iy;function on(i){var s=-1,l=i==null?0:i.length;for(this.clear();++s<l;){var u=i[s];this.set(u[0],u[1])}}function Cy(){this.size=0,this.__data__={hash:new ei,map:new(_r||sn),string:new ei}}function Ty(i){var s=qs(this,i).delete(i);return this.size-=s?1:0,s}function Sy(i){return qs(this,i).get(i)}function Ay(i){return qs(this,i).has(i)}function Ry(i,s){var l=qs(this,i),u=l.size;return l.set(i,s),this.size+=l.size==u?0:1,this}on.prototype.clear=Cy,on.prototype.delete=Ty,on.prototype.get=Sy,on.prototype.has=Ay,on.prototype.set=Ry;function ti(i){var s=-1,l=i==null?0:i.length;for(this.__data__=new on;++s<l;)this.add(i[s])}function Ny(i){return this.__data__.set(i,d),this}function ky(i){return this.__data__.has(i)}ti.prototype.add=ti.prototype.push=Ny,ti.prototype.has=ky;function Wt(i){var s=this.__data__=new sn(i);this.size=s.size}function Oy(){this.__data__=new sn,this.size=0}function xy(i){var s=this.__data__,l=s.delete(i);return this.size=s.size,l}function Py(i){return this.__data__.get(i)}function Dy(i){return this.__data__.has(i)}function Ly(i,s){var l=this.__data__;if(l instanceof sn){var u=l.__data__;if(!_r||u.length<o-1)return u.push([i,s]),this.size=++l.size,this;l=this.__data__=new on(u)}return l.set(i,s),this.size=l.size,this}Wt.prototype.clear=Oy,Wt.prototype.delete=xy,Wt.prototype.get=Py,Wt.prototype.has=Dy,Wt.prototype.set=Ly;function Sh(i,s){var l=ne(i),u=!l&&oi(i),f=!l&&!u&&Ln(i),g=!l&&!u&&!f&&Ui(i),m=l||u||f||g,w=m?xa(i.length,Gv):[],I=w.length;for(var N in i)(s||me.call(i,N))&&!(m&&(N=="length"||f&&(N=="offset"||N=="parent")||g&&(N=="buffer"||N=="byteLength"||N=="byteOffset")||un(N,I)))&&w.push(N);return w}function Ah(i){var s=i.length;return s?i[ja(0,s-1)]:t}function My(i,s){return Gs(dt(i),ni(s,0,i.length))}function Uy(i){return Gs(dt(i))}function Ba(i,s,l){(l!==t&&!Ht(i[s],l)||l===t&&!(s in i))&&an(i,s,l)}function yr(i,s,l){var u=i[s];(!(me.call(i,s)&&Ht(u,l))||l===t&&!(s in i))&&an(i,s,l)}function xs(i,s){for(var l=i.length;l--;)if(Ht(i[l][0],s))return l;return-1}function Fy(i,s,l,u){return On(i,function(f,g,m){s(u,f,l(f),m)}),u}function Rh(i,s){return i&&jt(s,Ge(s),i)}function By(i,s){return i&&jt(s,pt(s),i)}function an(i,s,l){s=="__proto__"&&Ss?Ss(i,s,{configurable:!0,enumerable:!0,value:l,writable:!0}):i[s]=l}function Wa(i,s){for(var l=-1,u=s.length,f=C(u),g=i==null;++l<u;)f[l]=g?t:wl(i,s[l]);return f}function ni(i,s,l){return i===i&&(l!==t&&(i=i<=l?i:l),s!==t&&(i=i>=s?i:s)),i}function Ot(i,s,l,u,f,g){var m,w=s&v,I=s&E,N=s&T;if(l&&(m=f?l(i,u,f,g):l(i)),m!==t)return m;if(!De(i))return i;var k=ne(i);if(k){if(m=Aw(i),!w)return dt(i,m)}else{var P=it(i),B=P==us||P==ku;if(Ln(i))return Jh(i,w);if(P==rn||P==Sn||B&&!f){if(m=I||B?{}:md(i),!w)return I?gw(i,By(m,i)):_w(i,Rh(m,i))}else{if(!Ce[P])return f?i:{};m=Rw(i,P,w)}}g||(g=new Wt);var V=g.get(i);if(V)return V;g.set(i,m),zd(i)?i.forEach(function(Q){m.add(Ot(Q,s,l,Q,i,g))}):qd(i)&&i.forEach(function(Q,le){m.set(le,Ot(Q,s,l,le,i,g))});var j=N?I?ol:sl:I?pt:Ge,re=k?t:j(i);return Rt(re||i,function(Q,le){re&&(le=Q,Q=i[le]),yr(m,le,Ot(Q,s,l,le,i,g))}),m}function Wy(i){var s=Ge(i);return function(l){return Nh(l,i,s)}}function Nh(i,s,l){var u=l.length;if(i==null)return!u;for(i=Ee(i);u--;){var f=l[u],g=s[f],m=i[f];if(m===t&&!(f in i)||!g(m))return!1}return!0}function kh(i,s,l){if(typeof i!="function")throw new Nt(c);return Sr(function(){i.apply(t,l)},s)}function wr(i,s,l,u){var f=-1,g=_s,m=!0,w=i.length,I=[],N=s.length;if(!w)return I;l&&(s=xe(s,wt(l))),u?(g=Sa,m=!1):s.length>=o&&(g=fr,m=!1,s=new ti(s));e:for(;++f<w;){var k=i[f],P=l==null?k:l(k);if(k=u||k!==0?k:0,m&&P===P){for(var B=N;B--;)if(s[B]===P)continue e;I.push(k)}else g(s,P,u)||I.push(k)}return I}var On=id(Yt),Oh=id($a,!0);function Hy(i,s){var l=!0;return On(i,function(u,f,g){return l=!!s(u,f,g),l}),l}function Ps(i,s,l){for(var u=-1,f=i.length;++u<f;){var g=i[u],m=s(g);if(m!=null&&(w===t?m===m&&!bt(m):l(m,w)))var w=m,I=g}return I}function $y(i,s,l,u){var f=i.length;for(l=ie(l),l<0&&(l=-l>f?0:f+l),u=u===t||u>f?f:ie(u),u<0&&(u+=f),u=l>u?0:Yd(u);l<u;)i[l++]=s;return i}function xh(i,s){var l=[];return On(i,function(u,f,g){s(u,f,g)&&l.push(u)}),l}function Je(i,s,l,u,f){var g=-1,m=i.length;for(l||(l=kw),f||(f=[]);++g<m;){var w=i[g];s>0&&l(w)?s>1?Je(w,s-1,l,u,f):Rn(f,w):u||(f[f.length]=w)}return f}var Ha=rd(),Ph=rd(!0);function Yt(i,s){return i&&Ha(i,s,Ge)}function $a(i,s){return i&&Ph(i,s,Ge)}function Ds(i,s){return An(s,function(l){return hn(i[l])})}function ii(i,s){s=Pn(s,i);for(var l=0,u=s.length;i!=null&&l<u;)i=i[Qt(s[l++])];return l&&l==u?i:t}function Dh(i,s,l){var u=s(i);return ne(i)?u:Rn(u,l(i))}function at(i){return i==null?i===t?mm:_m:Zn&&Zn in Ee(i)?Cw(i):Uw(i)}function Va(i,s){return i>s}function Vy(i,s){return i!=null&&me.call(i,s)}function qy(i,s){return i!=null&&s in Ee(i)}function Gy(i,s,l){return i>=nt(s,l)&&i<qe(s,l)}function qa(i,s,l){for(var u=l?Sa:_s,f=i[0].length,g=i.length,m=g,w=C(g),I=1/0,N=[];m--;){var k=i[m];m&&s&&(k=xe(k,wt(s))),I=nt(k.length,I),w[m]=!l&&(s||f>=120&&k.length>=120)?new ti(m&&k):t}k=i[0];var P=-1,B=w[0];e:for(;++P<f&&N.length<I;){var V=k[P],j=s?s(V):V;if(V=l||V!==0?V:0,!(B?fr(B,j):u(N,j,l))){for(m=g;--m;){var re=w[m];if(!(re?fr(re,j):u(i[m],j,l)))continue e}B&&B.push(j),N.push(V)}}return N}function zy(i,s,l,u){return Yt(i,function(f,g,m){s(u,l(f),g,m)}),u}function Er(i,s,l){s=Pn(s,i),i=Ed(i,s);var u=i==null?i:i[Qt(Pt(s))];return u==null?t:yt(u,i,l)}function Lh(i){return Le(i)&&at(i)==Sn}function Ky(i){return Le(i)&&at(i)==dr}function Yy(i){return Le(i)&&at(i)==Oe}function br(i,s,l,u,f){return i===s?!0:i==null||s==null||!Le(i)&&!Le(s)?i!==i&&s!==s:jy(i,s,l,u,br,f)}function jy(i,s,l,u,f,g){var m=ne(i),w=ne(s),I=m?St:it(i),N=w?St:it(s);I=I==Sn?rn:I,N=N==Sn?rn:N;var k=I==rn,P=N==rn,B=I==N;if(B&&Ln(i)){if(!Ln(s))return!1;m=!0,k=!1}if(B&&!k)return g||(g=new Wt),m||Ui(i)?pd(i,s,l,u,f,g):bw(i,s,I,l,u,f,g);if(!(l&A)){var V=k&&me.call(i,"__wrapped__"),j=P&&me.call(s,"__wrapped__");if(V||j){var re=V?i.value():i,Q=j?s.value():s;return g||(g=new Wt),f(re,Q,l,u,g)}}return B?(g||(g=new Wt),Iw(i,s,l,u,f,g)):!1}function Qy(i){return Le(i)&&it(i)==Ut}function Ga(i,s,l,u){var f=l.length,g=f,m=!u;if(i==null)return!g;for(i=Ee(i);f--;){var w=l[f];if(m&&w[2]?w[1]!==i[w[0]]:!(w[0]in i))return!1}for(;++f<g;){w=l[f];var I=w[0],N=i[I],k=w[1];if(m&&w[2]){if(N===t&&!(I in i))return!1}else{var P=new Wt;if(u)var B=u(N,k,I,i,s,P);if(!(B===t?br(k,N,A|L,u,P):B))return!1}}return!0}function Mh(i){if(!De(i)||xw(i))return!1;var s=hn(i)?Qv:Wm;return s.test(si(i))}function Xy(i){return Le(i)&&at(i)==cr}function Jy(i){return Le(i)&&it(i)==Ft}function Zy(i){return Le(i)&&Xs(i.length)&&!!ke[at(i)]}function Uh(i){return typeof i=="function"?i:i==null?_t:typeof i=="object"?ne(i)?Wh(i[0],i[1]):Bh(i):of(i)}function za(i){if(!Tr(i))return ny(i);var s=[];for(var l in Ee(i))me.call(i,l)&&l!="constructor"&&s.push(l);return s}function ew(i){if(!De(i))return Mw(i);var s=Tr(i),l=[];for(var u in i)u=="constructor"&&(s||!me.call(i,u))||l.push(u);return l}function Ka(i,s){return i<s}function Fh(i,s){var l=-1,u=ft(i)?C(i.length):[];return On(i,function(f,g,m){u[++l]=s(f,g,m)}),u}function Bh(i){var s=ll(i);return s.length==1&&s[0][2]?yd(s[0][0],s[0][1]):function(l){return l===i||Ga(l,i,s)}}function Wh(i,s){return ul(i)&&vd(s)?yd(Qt(i),s):function(l){var u=wl(l,i);return u===t&&u===s?El(l,i):br(s,u,A|L)}}function Ls(i,s,l,u,f){i!==s&&Ha(s,function(g,m){if(f||(f=new Wt),De(g))tw(i,s,m,l,Ls,u,f);else{var w=u?u(dl(i,m),g,m+"",i,s,f):t;w===t&&(w=g),Ba(i,m,w)}},pt)}function tw(i,s,l,u,f,g,m){var w=dl(i,l),I=dl(s,l),N=m.get(I);if(N){Ba(i,l,N);return}var k=g?g(w,I,l+"",i,s,m):t,P=k===t;if(P){var B=ne(I),V=!B&&Ln(I),j=!B&&!V&&Ui(I);k=I,B||V||j?ne(w)?k=w:We(w)?k=dt(w):V?(P=!1,k=Jh(I,!0)):j?(P=!1,k=Zh(I,!0)):k=[]:Ar(I)||oi(I)?(k=w,oi(w)?k=jd(w):(!De(w)||hn(w))&&(k=md(I))):P=!1}P&&(m.set(I,k),f(k,I,u,g,m),m.delete(I)),Ba(i,l,k)}function Hh(i,s){var l=i.length;if(l)return s+=s<0?l:0,un(s,l)?i[s]:t}function $h(i,s,l){s.length?s=xe(s,function(g){return ne(g)?function(m){return ii(m,g.length===1?g[0]:g)}:g}):s=[_t];var u=-1;s=xe(s,wt(Y()));var f=Fh(i,function(g,m,w){var I=xe(s,function(N){return N(g)});return{criteria:I,index:++u,value:g}});return Rv(f,function(g,m){return pw(g,m,l)})}function nw(i,s){return Vh(i,s,function(l,u){return El(i,u)})}function Vh(i,s,l){for(var u=-1,f=s.length,g={};++u<f;){var m=s[u],w=ii(i,m);l(w,m)&&Ir(g,Pn(m,i),w)}return g}function iw(i){return function(s){return ii(s,i)}}function Ya(i,s,l,u){var f=u?Av:Si,g=-1,m=s.length,w=i;for(i===s&&(s=dt(s)),l&&(w=xe(i,wt(l)));++g<m;)for(var I=0,N=s[g],k=l?l(N):N;(I=f(w,k,I,u))>-1;)w!==i&&Ts.call(w,I,1),Ts.call(i,I,1);return i}function qh(i,s){for(var l=i?s.length:0,u=l-1;l--;){var f=s[l];if(l==u||f!==g){var g=f;un(f)?Ts.call(i,f,1):Ja(i,f)}}return i}function ja(i,s){return i+Rs(Ch()*(s-i+1))}function rw(i,s,l,u){for(var f=-1,g=qe(As((s-i)/(l||1)),0),m=C(g);g--;)m[u?g:++f]=i,i+=l;return m}function Qa(i,s){var l="";if(!i||s<1||s>Pe)return l;do s%2&&(l+=i),s=Rs(s/2),s&&(i+=i);while(s);return l}function se(i,s){return fl(wd(i,s,_t),i+"")}function sw(i){return Ah(Fi(i))}function ow(i,s){var l=Fi(i);return Gs(l,ni(s,0,l.length))}function Ir(i,s,l,u){if(!De(i))return i;s=Pn(s,i);for(var f=-1,g=s.length,m=g-1,w=i;w!=null&&++f<g;){var I=Qt(s[f]),N=l;if(I==="__proto__"||I==="constructor"||I==="prototype")return i;if(f!=m){var k=w[I];N=u?u(k,I,w):t,N===t&&(N=De(k)?k:un(s[f+1])?[]:{})}yr(w,I,N),w=w[I]}return i}var Gh=Ns?function(i,s){return Ns.set(i,s),i}:_t,aw=Ss?function(i,s){return Ss(i,"toString",{configurable:!0,enumerable:!1,value:Il(s),writable:!0})}:_t;function lw(i){return Gs(Fi(i))}function xt(i,s,l){var u=-1,f=i.length;s<0&&(s=-s>f?0:f+s),l=l>f?f:l,l<0&&(l+=f),f=s>l?0:l-s>>>0,s>>>=0;for(var g=C(f);++u<f;)g[u]=i[u+s];return g}function cw(i,s){var l;return On(i,function(u,f,g){return l=s(u,f,g),!l}),!!l}function Ms(i,s,l){var u=0,f=i==null?u:i.length;if(typeof s=="number"&&s===s&&f<=oa){for(;u<f;){var g=u+f>>>1,m=i[g];m!==null&&!bt(m)&&(l?m<=s:m<s)?u=g+1:f=g}return f}return Xa(i,s,_t,l)}function Xa(i,s,l,u){var f=0,g=i==null?0:i.length;if(g===0)return 0;s=l(s);for(var m=s!==s,w=s===null,I=bt(s),N=s===t;f<g;){var k=Rs((f+g)/2),P=l(i[k]),B=P!==t,V=P===null,j=P===P,re=bt(P);if(m)var Q=u||j;else N?Q=j&&(u||B):w?Q=j&&B&&(u||!V):I?Q=j&&B&&!V&&(u||!re):V||re?Q=!1:Q=u?P<=s:P<s;Q?f=k+1:g=k}return nt(g,sa)}function zh(i,s){for(var l=-1,u=i.length,f=0,g=[];++l<u;){var m=i[l],w=s?s(m):m;if(!l||!Ht(w,I)){var I=w;g[f++]=m===0?0:m}}return g}function Kh(i){return typeof i=="number"?i:bt(i)?Tn:+i}function Et(i){if(typeof i=="string")return i;if(ne(i))return xe(i,Et)+"";if(bt(i))return Th?Th.call(i):"";var s=i+"";return s=="0"&&1/i==-Ie?"-0":s}function xn(i,s,l){var u=-1,f=_s,g=i.length,m=!0,w=[],I=w;if(l)m=!1,f=Sa;else if(g>=o){var N=s?null:ww(i);if(N)return ms(N);m=!1,f=fr,I=new ti}else I=s?[]:w;e:for(;++u<g;){var k=i[u],P=s?s(k):k;if(k=l||k!==0?k:0,m&&P===P){for(var B=I.length;B--;)if(I[B]===P)continue e;s&&I.push(P),w.push(k)}else f(I,P,l)||(I!==w&&I.push(P),w.push(k))}return w}function Ja(i,s){return s=Pn(s,i),i=Ed(i,s),i==null||delete i[Qt(Pt(s))]}function Yh(i,s,l,u){return Ir(i,s,l(ii(i,s)),u)}function Us(i,s,l,u){for(var f=i.length,g=u?f:-1;(u?g--:++g<f)&&s(i[g],g,i););return l?xt(i,u?0:g,u?g+1:f):xt(i,u?g+1:0,u?f:g)}function jh(i,s){var l=i;return l instanceof he&&(l=l.value()),Aa(s,function(u,f){return f.func.apply(f.thisArg,Rn([u],f.args))},l)}function Za(i,s,l){var u=i.length;if(u<2)return u?xn(i[0]):[];for(var f=-1,g=C(u);++f<u;)for(var m=i[f],w=-1;++w<u;)w!=f&&(g[f]=wr(g[f]||m,i[w],s,l));return xn(Je(g,1),s,l)}function Qh(i,s,l){for(var u=-1,f=i.length,g=s.length,m={};++u<f;){var w=u<g?s[u]:t;l(m,i[u],w)}return m}function el(i){return We(i)?i:[]}function tl(i){return typeof i=="function"?i:_t}function Pn(i,s){return ne(i)?i:ul(i,s)?[i]:Td(ge(i))}var uw=se;function Dn(i,s,l){var u=i.length;return l=l===t?u:l,!s&&l>=u?i:xt(i,s,l)}var Xh=Xv||function(i){return Xe.clearTimeout(i)};function Jh(i,s){if(s)return i.slice();var l=i.length,u=yh?yh(l):new i.constructor(l);return i.copy(u),u}function nl(i){var s=new i.constructor(i.byteLength);return new Is(s).set(new Is(i)),s}function hw(i,s){var l=s?nl(i.buffer):i.buffer;return new i.constructor(l,i.byteOffset,i.byteLength)}function dw(i){var s=new i.constructor(i.source,Lu.exec(i));return s.lastIndex=i.lastIndex,s}function fw(i){return vr?Ee(vr.call(i)):{}}function Zh(i,s){var l=s?nl(i.buffer):i.buffer;return new i.constructor(l,i.byteOffset,i.length)}function ed(i,s){if(i!==s){var l=i!==t,u=i===null,f=i===i,g=bt(i),m=s!==t,w=s===null,I=s===s,N=bt(s);if(!w&&!N&&!g&&i>s||g&&m&&I&&!w&&!N||u&&m&&I||!l&&I||!f)return 1;if(!u&&!g&&!N&&i<s||N&&l&&f&&!u&&!g||w&&l&&f||!m&&f||!I)return-1}return 0}function pw(i,s,l){for(var u=-1,f=i.criteria,g=s.criteria,m=f.length,w=l.length;++u<m;){var I=ed(f[u],g[u]);if(I){if(u>=w)return I;var N=l[u];return I*(N=="desc"?-1:1)}}return i.index-s.index}function td(i,s,l,u){for(var f=-1,g=i.length,m=l.length,w=-1,I=s.length,N=qe(g-m,0),k=C(I+N),P=!u;++w<I;)k[w]=s[w];for(;++f<m;)(P||f<g)&&(k[l[f]]=i[f]);for(;N--;)k[w++]=i[f++];return k}function nd(i,s,l,u){for(var f=-1,g=i.length,m=-1,w=l.length,I=-1,N=s.length,k=qe(g-w,0),P=C(k+N),B=!u;++f<k;)P[f]=i[f];for(var V=f;++I<N;)P[V+I]=s[I];for(;++m<w;)(B||f<g)&&(P[V+l[m]]=i[f++]);return P}function dt(i,s){var l=-1,u=i.length;for(s||(s=C(u));++l<u;)s[l]=i[l];return s}function jt(i,s,l,u){var f=!l;l||(l={});for(var g=-1,m=s.length;++g<m;){var w=s[g],I=u?u(l[w],i[w],w,l,i):t;I===t&&(I=i[w]),f?an(l,w,I):yr(l,w,I)}return l}function _w(i,s){return jt(i,cl(i),s)}function gw(i,s){return jt(i,_d(i),s)}function Fs(i,s){return function(l,u){var f=ne(l)?Ev:Fy,g=s?s():{};return f(l,i,Y(u,2),g)}}function Di(i){return se(function(s,l){var u=-1,f=l.length,g=f>1?l[f-1]:t,m=f>2?l[2]:t;for(g=i.length>3&&typeof g=="function"?(f--,g):t,m&&lt(l[0],l[1],m)&&(g=f<3?t:g,f=1),s=Ee(s);++u<f;){var w=l[u];w&&i(s,w,u,g)}return s})}function id(i,s){return function(l,u){if(l==null)return l;if(!ft(l))return i(l,u);for(var f=l.length,g=s?f:-1,m=Ee(l);(s?g--:++g<f)&&u(m[g],g,m)!==!1;);return l}}function rd(i){return function(s,l,u){for(var f=-1,g=Ee(s),m=u(s),w=m.length;w--;){var I=m[i?w:++f];if(l(g[I],I,g)===!1)break}return s}}function mw(i,s,l){var u=s&D,f=Cr(i);function g(){var m=this&&this!==Xe&&this instanceof g?f:i;return m.apply(u?l:this,arguments)}return g}function sd(i){return function(s){s=ge(s);var l=Ai(s)?Bt(s):t,u=l?l[0]:s.charAt(0),f=l?Dn(l,1).join(""):s.slice(1);return u[i]()+f}}function Li(i){return function(s){return Aa(rf(nf(s).replace(av,"")),i,"")}}function Cr(i){return function(){var s=arguments;switch(s.length){case 0:return new i;case 1:return new i(s[0]);case 2:return new i(s[0],s[1]);case 3:return new i(s[0],s[1],s[2]);case 4:return new i(s[0],s[1],s[2],s[3]);case 5:return new i(s[0],s[1],s[2],s[3],s[4]);case 6:return new i(s[0],s[1],s[2],s[3],s[4],s[5]);case 7:return new i(s[0],s[1],s[2],s[3],s[4],s[5],s[6])}var l=Pi(i.prototype),u=i.apply(l,s);return De(u)?u:l}}function vw(i,s,l){var u=Cr(i);function f(){for(var g=arguments.length,m=C(g),w=g,I=Mi(f);w--;)m[w]=arguments[w];var N=g<3&&m[0]!==I&&m[g-1]!==I?[]:Nn(m,I);if(g-=N.length,g<l)return ud(i,s,Bs,f.placeholder,t,m,N,t,t,l-g);var k=this&&this!==Xe&&this instanceof f?u:i;return yt(k,this,m)}return f}function od(i){return function(s,l,u){var f=Ee(s);if(!ft(s)){var g=Y(l,3);s=Ge(s),l=function(w){return g(f[w],w,f)}}var m=i(s,l,u);return m>-1?f[g?s[m]:m]:t}}function ad(i){return cn(function(s){var l=s.length,u=l,f=kt.prototype.thru;for(i&&s.reverse();u--;){var g=s[u];if(typeof g!="function")throw new Nt(c);if(f&&!m&&Vs(g)=="wrapper")var m=new kt([],!0)}for(u=m?u:l;++u<l;){g=s[u];var w=Vs(g),I=w=="wrapper"?al(g):t;I&&hl(I[0])&&I[1]==(U|O|z|$)&&!I[4].length&&I[9]==1?m=m[Vs(I[0])].apply(m,I[3]):m=g.length==1&&hl(g)?m[w]():m.thru(g)}return function(){var N=arguments,k=N[0];if(m&&N.length==1&&ne(k))return m.plant(k).value();for(var P=0,B=l?s[P].apply(this,N):k;++P<l;)B=s[P].call(this,B);return B}})}function Bs(i,s,l,u,f,g,m,w,I,N){var k=s&U,P=s&D,B=s&F,V=s&(O|G),j=s&q,re=B?t:Cr(i);function Q(){for(var le=arguments.length,de=C(le),It=le;It--;)de[It]=arguments[It];if(V)var ct=Mi(Q),Ct=kv(de,ct);if(u&&(de=td(de,u,f,V)),g&&(de=nd(de,g,m,V)),le-=Ct,V&&le<N){var He=Nn(de,ct);return ud(i,s,Bs,Q.placeholder,l,de,He,w,I,N-le)}var $t=P?l:this,fn=B?$t[i]:i;return le=de.length,w?de=Fw(de,w):j&&le>1&&de.reverse(),k&&I<le&&(de.length=I),this&&this!==Xe&&this instanceof Q&&(fn=re||Cr(fn)),fn.apply($t,de)}return Q}function ld(i,s){return function(l,u){return zy(l,i,s(u),{})}}function Ws(i,s){return function(l,u){var f;if(l===t&&u===t)return s;if(l!==t&&(f=l),u!==t){if(f===t)return u;typeof l=="string"||typeof u=="string"?(l=Et(l),u=Et(u)):(l=Kh(l),u=Kh(u)),f=i(l,u)}return f}}function il(i){return cn(function(s){return s=xe(s,wt(Y())),se(function(l){var u=this;return i(s,function(f){return yt(f,u,l)})})})}function Hs(i,s){s=s===t?" ":Et(s);var l=s.length;if(l<2)return l?Qa(s,i):s;var u=Qa(s,As(i/Ri(s)));return Ai(s)?Dn(Bt(u),0,i).join(""):u.slice(0,i)}function yw(i,s,l,u){var f=s&D,g=Cr(i);function m(){for(var w=-1,I=arguments.length,N=-1,k=u.length,P=C(k+I),B=this&&this!==Xe&&this instanceof m?g:i;++N<k;)P[N]=u[N];for(;I--;)P[N++]=arguments[++w];return yt(B,f?l:this,P)}return m}function cd(i){return function(s,l,u){return u&&typeof u!="number"&&lt(s,l,u)&&(l=u=t),s=dn(s),l===t?(l=s,s=0):l=dn(l),u=u===t?s<l?1:-1:dn(u),rw(s,l,u,i)}}function $s(i){return function(s,l){return typeof s=="string"&&typeof l=="string"||(s=Dt(s),l=Dt(l)),i(s,l)}}function ud(i,s,l,u,f,g,m,w,I,N){var k=s&O,P=k?m:t,B=k?t:m,V=k?g:t,j=k?t:g;s|=k?z:x,s&=~(k?x:z),s&ee||(s&=~(D|F));var re=[i,s,f,V,P,j,B,w,I,N],Q=l.apply(t,re);return hl(i)&&bd(Q,re),Q.placeholder=u,Id(Q,i,s)}function rl(i){var s=Ve[i];return function(l,u){if(l=Dt(l),u=u==null?0:nt(ie(u),292),u&&Ih(l)){var f=(ge(l)+"e").split("e"),g=s(f[0]+"e"+(+f[1]+u));return f=(ge(g)+"e").split("e"),+(f[0]+"e"+(+f[1]-u))}return s(l)}}var ww=Oi&&1/ms(new Oi([,-0]))[1]==Ie?function(i){return new Oi(i)}:Sl;function hd(i){return function(s){var l=it(s);return l==Ut?Da(s):l==Ft?Uv(s):Nv(s,i(s))}}function ln(i,s,l,u,f,g,m,w){var I=s&F;if(!I&&typeof i!="function")throw new Nt(c);var N=u?u.length:0;if(N||(s&=~(z|x),u=f=t),m=m===t?m:qe(ie(m),0),w=w===t?w:ie(w),N-=f?f.length:0,s&x){var k=u,P=f;u=f=t}var B=I?t:al(i),V=[i,s,l,u,f,k,P,g,m,w];if(B&&Lw(V,B),i=V[0],s=V[1],l=V[2],u=V[3],f=V[4],w=V[9]=V[9]===t?I?0:i.length:qe(V[9]-N,0),!w&&s&(O|G)&&(s&=~(O|G)),!s||s==D)var j=mw(i,s,l);else s==O||s==G?j=vw(i,s,w):(s==z||s==(D|z))&&!f.length?j=yw(i,s,l,u):j=Bs.apply(t,V);var re=B?Gh:bd;return Id(re(j,V),i,s)}function dd(i,s,l,u){return i===t||Ht(i,ki[l])&&!me.call(u,l)?s:i}function fd(i,s,l,u,f,g){return De(i)&&De(s)&&(g.set(s,i),Ls(i,s,t,fd,g),g.delete(s)),i}function Ew(i){return Ar(i)?t:i}function pd(i,s,l,u,f,g){var m=l&A,w=i.length,I=s.length;if(w!=I&&!(m&&I>w))return!1;var N=g.get(i),k=g.get(s);if(N&&k)return N==s&&k==i;var P=-1,B=!0,V=l&L?new ti:t;for(g.set(i,s),g.set(s,i);++P<w;){var j=i[P],re=s[P];if(u)var Q=m?u(re,j,P,s,i,g):u(j,re,P,i,s,g);if(Q!==t){if(Q)continue;B=!1;break}if(V){if(!Ra(s,function(le,de){if(!fr(V,de)&&(j===le||f(j,le,l,u,g)))return V.push(de)})){B=!1;break}}else if(!(j===re||f(j,re,l,u,g))){B=!1;break}}return g.delete(i),g.delete(s),B}function bw(i,s,l,u,f,g,m){switch(l){case Ci:if(i.byteLength!=s.byteLength||i.byteOffset!=s.byteOffset)return!1;i=i.buffer,s=s.buffer;case dr:return!(i.byteLength!=s.byteLength||!g(new Is(i),new Is(s)));case ue:case Oe:case lr:return Ht(+i,+s);case Kt:return i.name==s.name&&i.message==s.message;case cr:case ur:return i==s+"";case Ut:var w=Da;case Ft:var I=u&A;if(w||(w=ms),i.size!=s.size&&!I)return!1;var N=m.get(i);if(N)return N==s;u|=L,m.set(i,s);var k=pd(w(i),w(s),u,f,g,m);return m.delete(i),k;case hs:if(vr)return vr.call(i)==vr.call(s)}return!1}function Iw(i,s,l,u,f,g){var m=l&A,w=sl(i),I=w.length,N=sl(s),k=N.length;if(I!=k&&!m)return!1;for(var P=I;P--;){var B=w[P];if(!(m?B in s:me.call(s,B)))return!1}var V=g.get(i),j=g.get(s);if(V&&j)return V==s&&j==i;var re=!0;g.set(i,s),g.set(s,i);for(var Q=m;++P<I;){B=w[P];var le=i[B],de=s[B];if(u)var It=m?u(de,le,B,s,i,g):u(le,de,B,i,s,g);if(!(It===t?le===de||f(le,de,l,u,g):It)){re=!1;break}Q||(Q=B=="constructor")}if(re&&!Q){var ct=i.constructor,Ct=s.constructor;ct!=Ct&&"constructor"in i&&"constructor"in s&&!(typeof ct=="function"&&ct instanceof ct&&typeof Ct=="function"&&Ct instanceof Ct)&&(re=!1)}return g.delete(i),g.delete(s),re}function cn(i){return fl(wd(i,t,Nd),i+"")}function sl(i){return Dh(i,Ge,cl)}function ol(i){return Dh(i,pt,_d)}var al=Ns?function(i){return Ns.get(i)}:Sl;function Vs(i){for(var s=i.name+"",l=xi[s],u=me.call(xi,s)?l.length:0;u--;){var f=l[u],g=f.func;if(g==null||g==i)return f.name}return s}function Mi(i){var s=me.call(_,"placeholder")?_:i;return s.placeholder}function Y(){var i=_.iteratee||Cl;return i=i===Cl?Uh:i,arguments.length?i(arguments[0],arguments[1]):i}function qs(i,s){var l=i.__data__;return Ow(s)?l[typeof s=="string"?"string":"hash"]:l.map}function ll(i){for(var s=Ge(i),l=s.length;l--;){var u=s[l],f=i[u];s[l]=[u,f,vd(f)]}return s}function ri(i,s){var l=Dv(i,s);return Mh(l)?l:t}function Cw(i){var s=me.call(i,Zn),l=i[Zn];try{i[Zn]=t;var u=!0}catch{}var f=Es.call(i);return u&&(s?i[Zn]=l:delete i[Zn]),f}var cl=Ma?function(i){return i==null?[]:(i=Ee(i),An(Ma(i),function(s){return Eh.call(i,s)}))}:Al,_d=Ma?function(i){for(var s=[];i;)Rn(s,cl(i)),i=Cs(i);return s}:Al,it=at;(Ua&&it(new Ua(new ArrayBuffer(1)))!=Ci||_r&&it(new _r)!=Ut||Fa&&it(Fa.resolve())!=Ou||Oi&&it(new Oi)!=Ft||gr&&it(new gr)!=hr)&&(it=function(i){var s=at(i),l=s==rn?i.constructor:t,u=l?si(l):"";if(u)switch(u){case oy:return Ci;case ay:return Ut;case ly:return Ou;case cy:return Ft;case uy:return hr}return s});function Tw(i,s,l){for(var u=-1,f=l.length;++u<f;){var g=l[u],m=g.size;switch(g.type){case"drop":i+=m;break;case"dropRight":s-=m;break;case"take":s=nt(s,i+m);break;case"takeRight":i=qe(i,s-m);break}}return{start:i,end:s}}function Sw(i){var s=i.match(xm);return s?s[1].split(Pm):[]}function gd(i,s,l){s=Pn(s,i);for(var u=-1,f=s.length,g=!1;++u<f;){var m=Qt(s[u]);if(!(g=i!=null&&l(i,m)))break;i=i[m]}return g||++u!=f?g:(f=i==null?0:i.length,!!f&&Xs(f)&&un(m,f)&&(ne(i)||oi(i)))}function Aw(i){var s=i.length,l=new i.constructor(s);return s&&typeof i[0]=="string"&&me.call(i,"index")&&(l.index=i.index,l.input=i.input),l}function md(i){return typeof i.constructor=="function"&&!Tr(i)?Pi(Cs(i)):{}}function Rw(i,s,l){var u=i.constructor;switch(s){case dr:return nl(i);case ue:case Oe:return new u(+i);case Ci:return hw(i,l);case la:case ca:case ua:case ha:case da:case fa:case pa:case _a:case ga:return Zh(i,l);case Ut:return new u;case lr:case ur:return new u(i);case cr:return dw(i);case Ft:return new u;case hs:return fw(i)}}function Nw(i,s){var l=s.length;if(!l)return i;var u=l-1;return s[u]=(l>1?"& ":"")+s[u],s=s.join(l>2?", ":" "),i.replace(Om,`{
/* [wrapped with `+s+`] */
`)}function kw(i){return ne(i)||oi(i)||!!(bh&&i&&i[bh])}function un(i,s){var l=typeof i;return s=s??Pe,!!s&&(l=="number"||l!="symbol"&&$m.test(i))&&i>-1&&i%1==0&&i<s}function lt(i,s,l){if(!De(l))return!1;var u=typeof s;return(u=="number"?ft(l)&&un(s,l.length):u=="string"&&s in l)?Ht(l[s],i):!1}function ul(i,s){if(ne(i))return!1;var l=typeof i;return l=="number"||l=="symbol"||l=="boolean"||i==null||bt(i)?!0:Am.test(i)||!Sm.test(i)||s!=null&&i in Ee(s)}function Ow(i){var s=typeof i;return s=="string"||s=="number"||s=="symbol"||s=="boolean"?i!=="__proto__":i===null}function hl(i){var s=Vs(i),l=_[s];if(typeof l!="function"||!(s in he.prototype))return!1;if(i===l)return!0;var u=al(l);return!!u&&i===u[0]}function xw(i){return!!vh&&vh in i}var Pw=ys?hn:Rl;function Tr(i){var s=i&&i.constructor,l=typeof s=="function"&&s.prototype||ki;return i===l}function vd(i){return i===i&&!De(i)}function yd(i,s){return function(l){return l==null?!1:l[i]===s&&(s!==t||i in Ee(l))}}function Dw(i){var s=js(i,function(u){return l.size===p&&l.clear(),u}),l=s.cache;return s}function Lw(i,s){var l=i[1],u=s[1],f=l|u,g=f<(D|F|U),m=u==U&&l==O||u==U&&l==$&&i[7].length<=s[8]||u==(U|$)&&s[7].length<=s[8]&&l==O;if(!(g||m))return i;u&D&&(i[2]=s[2],f|=l&D?0:ee);var w=s[3];if(w){var I=i[3];i[3]=I?td(I,w,s[4]):w,i[4]=I?Nn(i[3],y):s[4]}return w=s[5],w&&(I=i[5],i[5]=I?nd(I,w,s[6]):w,i[6]=I?Nn(i[5],y):s[6]),w=s[7],w&&(i[7]=w),u&U&&(i[8]=i[8]==null?s[8]:nt(i[8],s[8])),i[9]==null&&(i[9]=s[9]),i[0]=s[0],i[1]=f,i}function Mw(i){var s=[];if(i!=null)for(var l in Ee(i))s.push(l);return s}function Uw(i){return Es.call(i)}function wd(i,s,l){return s=qe(s===t?i.length-1:s,0),function(){for(var u=arguments,f=-1,g=qe(u.length-s,0),m=C(g);++f<g;)m[f]=u[s+f];f=-1;for(var w=C(s+1);++f<s;)w[f]=u[f];return w[s]=l(m),yt(i,this,w)}}function Ed(i,s){return s.length<2?i:ii(i,xt(s,0,-1))}function Fw(i,s){for(var l=i.length,u=nt(s.length,l),f=dt(i);u--;){var g=s[u];i[u]=un(g,l)?f[g]:t}return i}function dl(i,s){if(!(s==="constructor"&&typeof i[s]=="function")&&s!="__proto__")return i[s]}var bd=Cd(Gh),Sr=Zv||function(i,s){return Xe.setTimeout(i,s)},fl=Cd(aw);function Id(i,s,l){var u=s+"";return fl(i,Nw(u,Bw(Sw(u),l)))}function Cd(i){var s=0,l=0;return function(){var u=iy(),f=K-(u-l);if(l=u,f>0){if(++s>=R)return arguments[0]}else s=0;return i.apply(t,arguments)}}function Gs(i,s){var l=-1,u=i.length,f=u-1;for(s=s===t?u:s;++l<s;){var g=ja(l,f),m=i[g];i[g]=i[l],i[l]=m}return i.length=s,i}var Td=Dw(function(i){var s=[];return i.charCodeAt(0)===46&&s.push(""),i.replace(Rm,function(l,u,f,g){s.push(f?g.replace(Mm,"$1"):u||l)}),s});function Qt(i){if(typeof i=="string"||bt(i))return i;var s=i+"";return s=="0"&&1/i==-Ie?"-0":s}function si(i){if(i!=null){try{return ws.call(i)}catch{}try{return i+""}catch{}}return""}function Bw(i,s){return Rt(aa,function(l){var u="_."+l[0];s&l[1]&&!_s(i,u)&&i.push(u)}),i.sort()}function Sd(i){if(i instanceof he)return i.clone();var s=new kt(i.__wrapped__,i.__chain__);return s.__actions__=dt(i.__actions__),s.__index__=i.__index__,s.__values__=i.__values__,s}function Ww(i,s,l){(l?lt(i,s,l):s===t)?s=1:s=qe(ie(s),0);var u=i==null?0:i.length;if(!u||s<1)return[];for(var f=0,g=0,m=C(As(u/s));f<u;)m[g++]=xt(i,f,f+=s);return m}function Hw(i){for(var s=-1,l=i==null?0:i.length,u=0,f=[];++s<l;){var g=i[s];g&&(f[u++]=g)}return f}function $w(){var i=arguments.length;if(!i)return[];for(var s=C(i-1),l=arguments[0],u=i;u--;)s[u-1]=arguments[u];return Rn(ne(l)?dt(l):[l],Je(s,1))}var Vw=se(function(i,s){return We(i)?wr(i,Je(s,1,We,!0)):[]}),qw=se(function(i,s){var l=Pt(s);return We(l)&&(l=t),We(i)?wr(i,Je(s,1,We,!0),Y(l,2)):[]}),Gw=se(function(i,s){var l=Pt(s);return We(l)&&(l=t),We(i)?wr(i,Je(s,1,We,!0),t,l):[]});function zw(i,s,l){var u=i==null?0:i.length;return u?(s=l||s===t?1:ie(s),xt(i,s<0?0:s,u)):[]}function Kw(i,s,l){var u=i==null?0:i.length;return u?(s=l||s===t?1:ie(s),s=u-s,xt(i,0,s<0?0:s)):[]}function Yw(i,s){return i&&i.length?Us(i,Y(s,3),!0,!0):[]}function jw(i,s){return i&&i.length?Us(i,Y(s,3),!0):[]}function Qw(i,s,l,u){var f=i==null?0:i.length;return f?(l&&typeof l!="number"&&lt(i,s,l)&&(l=0,u=f),$y(i,s,l,u)):[]}function Ad(i,s,l){var u=i==null?0:i.length;if(!u)return-1;var f=l==null?0:ie(l);return f<0&&(f=qe(u+f,0)),gs(i,Y(s,3),f)}function Rd(i,s,l){var u=i==null?0:i.length;if(!u)return-1;var f=u-1;return l!==t&&(f=ie(l),f=l<0?qe(u+f,0):nt(f,u-1)),gs(i,Y(s,3),f,!0)}function Nd(i){var s=i==null?0:i.length;return s?Je(i,1):[]}function Xw(i){var s=i==null?0:i.length;return s?Je(i,Ie):[]}function Jw(i,s){var l=i==null?0:i.length;return l?(s=s===t?1:ie(s),Je(i,s)):[]}function Zw(i){for(var s=-1,l=i==null?0:i.length,u={};++s<l;){var f=i[s];u[f[0]]=f[1]}return u}function kd(i){return i&&i.length?i[0]:t}function eE(i,s,l){var u=i==null?0:i.length;if(!u)return-1;var f=l==null?0:ie(l);return f<0&&(f=qe(u+f,0)),Si(i,s,f)}function tE(i){var s=i==null?0:i.length;return s?xt(i,0,-1):[]}var nE=se(function(i){var s=xe(i,el);return s.length&&s[0]===i[0]?qa(s):[]}),iE=se(function(i){var s=Pt(i),l=xe(i,el);return s===Pt(l)?s=t:l.pop(),l.length&&l[0]===i[0]?qa(l,Y(s,2)):[]}),rE=se(function(i){var s=Pt(i),l=xe(i,el);return s=typeof s=="function"?s:t,s&&l.pop(),l.length&&l[0]===i[0]?qa(l,t,s):[]});function sE(i,s){return i==null?"":ty.call(i,s)}function Pt(i){var s=i==null?0:i.length;return s?i[s-1]:t}function oE(i,s,l){var u=i==null?0:i.length;if(!u)return-1;var f=u;return l!==t&&(f=ie(l),f=f<0?qe(u+f,0):nt(f,u-1)),s===s?Bv(i,s,f):gs(i,uh,f,!0)}function aE(i,s){return i&&i.length?Hh(i,ie(s)):t}var lE=se(Od);function Od(i,s){return i&&i.length&&s&&s.length?Ya(i,s):i}function cE(i,s,l){return i&&i.length&&s&&s.length?Ya(i,s,Y(l,2)):i}function uE(i,s,l){return i&&i.length&&s&&s.length?Ya(i,s,t,l):i}var hE=cn(function(i,s){var l=i==null?0:i.length,u=Wa(i,s);return qh(i,xe(s,function(f){return un(f,l)?+f:f}).sort(ed)),u});function dE(i,s){var l=[];if(!(i&&i.length))return l;var u=-1,f=[],g=i.length;for(s=Y(s,3);++u<g;){var m=i[u];s(m,u,i)&&(l.push(m),f.push(u))}return qh(i,f),l}function pl(i){return i==null?i:sy.call(i)}function fE(i,s,l){var u=i==null?0:i.length;return u?(l&&typeof l!="number"&&lt(i,s,l)?(s=0,l=u):(s=s==null?0:ie(s),l=l===t?u:ie(l)),xt(i,s,l)):[]}function pE(i,s){return Ms(i,s)}function _E(i,s,l){return Xa(i,s,Y(l,2))}function gE(i,s){var l=i==null?0:i.length;if(l){var u=Ms(i,s);if(u<l&&Ht(i[u],s))return u}return-1}function mE(i,s){return Ms(i,s,!0)}function vE(i,s,l){return Xa(i,s,Y(l,2),!0)}function yE(i,s){var l=i==null?0:i.length;if(l){var u=Ms(i,s,!0)-1;if(Ht(i[u],s))return u}return-1}function wE(i){return i&&i.length?zh(i):[]}function EE(i,s){return i&&i.length?zh(i,Y(s,2)):[]}function bE(i){var s=i==null?0:i.length;return s?xt(i,1,s):[]}function IE(i,s,l){return i&&i.length?(s=l||s===t?1:ie(s),xt(i,0,s<0?0:s)):[]}function CE(i,s,l){var u=i==null?0:i.length;return u?(s=l||s===t?1:ie(s),s=u-s,xt(i,s<0?0:s,u)):[]}function TE(i,s){return i&&i.length?Us(i,Y(s,3),!1,!0):[]}function SE(i,s){return i&&i.length?Us(i,Y(s,3)):[]}var AE=se(function(i){return xn(Je(i,1,We,!0))}),RE=se(function(i){var s=Pt(i);return We(s)&&(s=t),xn(Je(i,1,We,!0),Y(s,2))}),NE=se(function(i){var s=Pt(i);return s=typeof s=="function"?s:t,xn(Je(i,1,We,!0),t,s)});function kE(i){return i&&i.length?xn(i):[]}function OE(i,s){return i&&i.length?xn(i,Y(s,2)):[]}function xE(i,s){return s=typeof s=="function"?s:t,i&&i.length?xn(i,t,s):[]}function _l(i){if(!(i&&i.length))return[];var s=0;return i=An(i,function(l){if(We(l))return s=qe(l.length,s),!0}),xa(s,function(l){return xe(i,Na(l))})}function xd(i,s){if(!(i&&i.length))return[];var l=_l(i);return s==null?l:xe(l,function(u){return yt(s,t,u)})}var PE=se(function(i,s){return We(i)?wr(i,s):[]}),DE=se(function(i){return Za(An(i,We))}),LE=se(function(i){var s=Pt(i);return We(s)&&(s=t),Za(An(i,We),Y(s,2))}),ME=se(function(i){var s=Pt(i);return s=typeof s=="function"?s:t,Za(An(i,We),t,s)}),UE=se(_l);function FE(i,s){return Qh(i||[],s||[],yr)}function BE(i,s){return Qh(i||[],s||[],Ir)}var WE=se(function(i){var s=i.length,l=s>1?i[s-1]:t;return l=typeof l=="function"?(i.pop(),l):t,xd(i,l)});function Pd(i){var s=_(i);return s.__chain__=!0,s}function HE(i,s){return s(i),i}function zs(i,s){return s(i)}var $E=cn(function(i){var s=i.length,l=s?i[0]:0,u=this.__wrapped__,f=function(g){return Wa(g,i)};return s>1||this.__actions__.length||!(u instanceof he)||!un(l)?this.thru(f):(u=u.slice(l,+l+(s?1:0)),u.__actions__.push({func:zs,args:[f],thisArg:t}),new kt(u,this.__chain__).thru(function(g){return s&&!g.length&&g.push(t),g}))});function VE(){return Pd(this)}function qE(){return new kt(this.value(),this.__chain__)}function GE(){this.__values__===t&&(this.__values__=Kd(this.value()));var i=this.__index__>=this.__values__.length,s=i?t:this.__values__[this.__index__++];return{done:i,value:s}}function zE(){return this}function KE(i){for(var s,l=this;l instanceof Os;){var u=Sd(l);u.__index__=0,u.__values__=t,s?f.__wrapped__=u:s=u;var f=u;l=l.__wrapped__}return f.__wrapped__=i,s}function YE(){var i=this.__wrapped__;if(i instanceof he){var s=i;return this.__actions__.length&&(s=new he(this)),s=s.reverse(),s.__actions__.push({func:zs,args:[pl],thisArg:t}),new kt(s,this.__chain__)}return this.thru(pl)}function jE(){return jh(this.__wrapped__,this.__actions__)}var QE=Fs(function(i,s,l){me.call(i,l)?++i[l]:an(i,l,1)});function XE(i,s,l){var u=ne(i)?lh:Hy;return l&&lt(i,s,l)&&(s=t),u(i,Y(s,3))}function JE(i,s){var l=ne(i)?An:xh;return l(i,Y(s,3))}var ZE=od(Ad),e0=od(Rd);function t0(i,s){return Je(Ks(i,s),1)}function n0(i,s){return Je(Ks(i,s),Ie)}function i0(i,s,l){return l=l===t?1:ie(l),Je(Ks(i,s),l)}function Dd(i,s){var l=ne(i)?Rt:On;return l(i,Y(s,3))}function Ld(i,s){var l=ne(i)?bv:Oh;return l(i,Y(s,3))}var r0=Fs(function(i,s,l){me.call(i,l)?i[l].push(s):an(i,l,[s])});function s0(i,s,l,u){i=ft(i)?i:Fi(i),l=l&&!u?ie(l):0;var f=i.length;return l<0&&(l=qe(f+l,0)),Js(i)?l<=f&&i.indexOf(s,l)>-1:!!f&&Si(i,s,l)>-1}var o0=se(function(i,s,l){var u=-1,f=typeof s=="function",g=ft(i)?C(i.length):[];return On(i,function(m){g[++u]=f?yt(s,m,l):Er(m,s,l)}),g}),a0=Fs(function(i,s,l){an(i,l,s)});function Ks(i,s){var l=ne(i)?xe:Fh;return l(i,Y(s,3))}function l0(i,s,l,u){return i==null?[]:(ne(s)||(s=s==null?[]:[s]),l=u?t:l,ne(l)||(l=l==null?[]:[l]),$h(i,s,l))}var c0=Fs(function(i,s,l){i[l?0:1].push(s)},function(){return[[],[]]});function u0(i,s,l){var u=ne(i)?Aa:dh,f=arguments.length<3;return u(i,Y(s,4),l,f,On)}function h0(i,s,l){var u=ne(i)?Iv:dh,f=arguments.length<3;return u(i,Y(s,4),l,f,Oh)}function d0(i,s){var l=ne(i)?An:xh;return l(i,Qs(Y(s,3)))}function f0(i){var s=ne(i)?Ah:sw;return s(i)}function p0(i,s,l){(l?lt(i,s,l):s===t)?s=1:s=ie(s);var u=ne(i)?My:ow;return u(i,s)}function _0(i){var s=ne(i)?Uy:lw;return s(i)}function g0(i){if(i==null)return 0;if(ft(i))return Js(i)?Ri(i):i.length;var s=it(i);return s==Ut||s==Ft?i.size:za(i).length}function m0(i,s,l){var u=ne(i)?Ra:cw;return l&&lt(i,s,l)&&(s=t),u(i,Y(s,3))}var v0=se(function(i,s){if(i==null)return[];var l=s.length;return l>1&&lt(i,s[0],s[1])?s=[]:l>2&&lt(s[0],s[1],s[2])&&(s=[s[0]]),$h(i,Je(s,1),[])}),Ys=Jv||function(){return Xe.Date.now()};function y0(i,s){if(typeof s!="function")throw new Nt(c);return i=ie(i),function(){if(--i<1)return s.apply(this,arguments)}}function Md(i,s,l){return s=l?t:s,s=i&&s==null?i.length:s,ln(i,U,t,t,t,t,s)}function Ud(i,s){var l;if(typeof s!="function")throw new Nt(c);return i=ie(i),function(){return--i>0&&(l=s.apply(this,arguments)),i<=1&&(s=t),l}}var gl=se(function(i,s,l){var u=D;if(l.length){var f=Nn(l,Mi(gl));u|=z}return ln(i,u,s,l,f)}),Fd=se(function(i,s,l){var u=D|F;if(l.length){var f=Nn(l,Mi(Fd));u|=z}return ln(s,u,i,l,f)});function Bd(i,s,l){s=l?t:s;var u=ln(i,O,t,t,t,t,t,s);return u.placeholder=Bd.placeholder,u}function Wd(i,s,l){s=l?t:s;var u=ln(i,G,t,t,t,t,t,s);return u.placeholder=Wd.placeholder,u}function Hd(i,s,l){var u,f,g,m,w,I,N=0,k=!1,P=!1,B=!0;if(typeof i!="function")throw new Nt(c);s=Dt(s)||0,De(l)&&(k=!!l.leading,P="maxWait"in l,g=P?qe(Dt(l.maxWait)||0,s):g,B="trailing"in l?!!l.trailing:B);function V(He){var $t=u,fn=f;return u=f=t,N=He,m=i.apply(fn,$t),m}function j(He){return N=He,w=Sr(le,s),k?V(He):m}function re(He){var $t=He-I,fn=He-N,af=s-$t;return P?nt(af,g-fn):af}function Q(He){var $t=He-I,fn=He-N;return I===t||$t>=s||$t<0||P&&fn>=g}function le(){var He=Ys();if(Q(He))return de(He);w=Sr(le,re(He))}function de(He){return w=t,B&&u?V(He):(u=f=t,m)}function It(){w!==t&&Xh(w),N=0,u=I=f=w=t}function ct(){return w===t?m:de(Ys())}function Ct(){var He=Ys(),$t=Q(He);if(u=arguments,f=this,I=He,$t){if(w===t)return j(I);if(P)return Xh(w),w=Sr(le,s),V(I)}return w===t&&(w=Sr(le,s)),m}return Ct.cancel=It,Ct.flush=ct,Ct}var w0=se(function(i,s){return kh(i,1,s)}),E0=se(function(i,s,l){return kh(i,Dt(s)||0,l)});function b0(i){return ln(i,q)}function js(i,s){if(typeof i!="function"||s!=null&&typeof s!="function")throw new Nt(c);var l=function(){var u=arguments,f=s?s.apply(this,u):u[0],g=l.cache;if(g.has(f))return g.get(f);var m=i.apply(this,u);return l.cache=g.set(f,m)||g,m};return l.cache=new(js.Cache||on),l}js.Cache=on;function Qs(i){if(typeof i!="function")throw new Nt(c);return function(){var s=arguments;switch(s.length){case 0:return!i.call(this);case 1:return!i.call(this,s[0]);case 2:return!i.call(this,s[0],s[1]);case 3:return!i.call(this,s[0],s[1],s[2])}return!i.apply(this,s)}}function I0(i){return Ud(2,i)}var C0=uw(function(i,s){s=s.length==1&&ne(s[0])?xe(s[0],wt(Y())):xe(Je(s,1),wt(Y()));var l=s.length;return se(function(u){for(var f=-1,g=nt(u.length,l);++f<g;)u[f]=s[f].call(this,u[f]);return yt(i,this,u)})}),ml=se(function(i,s){var l=Nn(s,Mi(ml));return ln(i,z,t,s,l)}),$d=se(function(i,s){var l=Nn(s,Mi($d));return ln(i,x,t,s,l)}),T0=cn(function(i,s){return ln(i,$,t,t,t,s)});function S0(i,s){if(typeof i!="function")throw new Nt(c);return s=s===t?s:ie(s),se(i,s)}function A0(i,s){if(typeof i!="function")throw new Nt(c);return s=s==null?0:qe(ie(s),0),se(function(l){var u=l[s],f=Dn(l,0,s);return u&&Rn(f,u),yt(i,this,f)})}function R0(i,s,l){var u=!0,f=!0;if(typeof i!="function")throw new Nt(c);return De(l)&&(u="leading"in l?!!l.leading:u,f="trailing"in l?!!l.trailing:f),Hd(i,s,{leading:u,maxWait:s,trailing:f})}function N0(i){return Md(i,1)}function k0(i,s){return ml(tl(s),i)}function O0(){if(!arguments.length)return[];var i=arguments[0];return ne(i)?i:[i]}function x0(i){return Ot(i,T)}function P0(i,s){return s=typeof s=="function"?s:t,Ot(i,T,s)}function D0(i){return Ot(i,v|T)}function L0(i,s){return s=typeof s=="function"?s:t,Ot(i,v|T,s)}function M0(i,s){return s==null||Nh(i,s,Ge(s))}function Ht(i,s){return i===s||i!==i&&s!==s}var U0=$s(Va),F0=$s(function(i,s){return i>=s}),oi=Lh(function(){return arguments}())?Lh:function(i){return Le(i)&&me.call(i,"callee")&&!Eh.call(i,"callee")},ne=C.isArray,B0=nh?wt(nh):Ky;function ft(i){return i!=null&&Xs(i.length)&&!hn(i)}function We(i){return Le(i)&&ft(i)}function W0(i){return i===!0||i===!1||Le(i)&&at(i)==ue}var Ln=ey||Rl,H0=ih?wt(ih):Yy;function $0(i){return Le(i)&&i.nodeType===1&&!Ar(i)}function V0(i){if(i==null)return!0;if(ft(i)&&(ne(i)||typeof i=="string"||typeof i.splice=="function"||Ln(i)||Ui(i)||oi(i)))return!i.length;var s=it(i);if(s==Ut||s==Ft)return!i.size;if(Tr(i))return!za(i).length;for(var l in i)if(me.call(i,l))return!1;return!0}function q0(i,s){return br(i,s)}function G0(i,s,l){l=typeof l=="function"?l:t;var u=l?l(i,s):t;return u===t?br(i,s,t,l):!!u}function vl(i){if(!Le(i))return!1;var s=at(i);return s==Kt||s==vt||typeof i.message=="string"&&typeof i.name=="string"&&!Ar(i)}function z0(i){return typeof i=="number"&&Ih(i)}function hn(i){if(!De(i))return!1;var s=at(i);return s==us||s==ku||s==nn||s==gm}function Vd(i){return typeof i=="number"&&i==ie(i)}function Xs(i){return typeof i=="number"&&i>-1&&i%1==0&&i<=Pe}function De(i){var s=typeof i;return i!=null&&(s=="object"||s=="function")}function Le(i){return i!=null&&typeof i=="object"}var qd=rh?wt(rh):Qy;function K0(i,s){return i===s||Ga(i,s,ll(s))}function Y0(i,s,l){return l=typeof l=="function"?l:t,Ga(i,s,ll(s),l)}function j0(i){return Gd(i)&&i!=+i}function Q0(i){if(Pw(i))throw new te(a);return Mh(i)}function X0(i){return i===null}function J0(i){return i==null}function Gd(i){return typeof i=="number"||Le(i)&&at(i)==lr}function Ar(i){if(!Le(i)||at(i)!=rn)return!1;var s=Cs(i);if(s===null)return!0;var l=me.call(s,"constructor")&&s.constructor;return typeof l=="function"&&l instanceof l&&ws.call(l)==Yv}var yl=sh?wt(sh):Xy;function Z0(i){return Vd(i)&&i>=-Pe&&i<=Pe}var zd=oh?wt(oh):Jy;function Js(i){return typeof i=="string"||!ne(i)&&Le(i)&&at(i)==ur}function bt(i){return typeof i=="symbol"||Le(i)&&at(i)==hs}var Ui=ah?wt(ah):Zy;function eb(i){return i===t}function tb(i){return Le(i)&&it(i)==hr}function nb(i){return Le(i)&&at(i)==vm}var ib=$s(Ka),rb=$s(function(i,s){return i<=s});function Kd(i){if(!i)return[];if(ft(i))return Js(i)?Bt(i):dt(i);if(pr&&i[pr])return Mv(i[pr]());var s=it(i),l=s==Ut?Da:s==Ft?ms:Fi;return l(i)}function dn(i){if(!i)return i===0?i:0;if(i=Dt(i),i===Ie||i===-Ie){var s=i<0?-1:1;return s*Mt}return i===i?i:0}function ie(i){var s=dn(i),l=s%1;return s===s?l?s-l:s:0}function Yd(i){return i?ni(ie(i),0,$e):0}function Dt(i){if(typeof i=="number")return i;if(bt(i))return Tn;if(De(i)){var s=typeof i.valueOf=="function"?i.valueOf():i;i=De(s)?s+"":s}if(typeof i!="string")return i===0?i:+i;i=fh(i);var l=Bm.test(i);return l||Hm.test(i)?yv(i.slice(2),l?2:8):Fm.test(i)?Tn:+i}function jd(i){return jt(i,pt(i))}function sb(i){return i?ni(ie(i),-Pe,Pe):i===0?i:0}function ge(i){return i==null?"":Et(i)}var ob=Di(function(i,s){if(Tr(s)||ft(s)){jt(s,Ge(s),i);return}for(var l in s)me.call(s,l)&&yr(i,l,s[l])}),Qd=Di(function(i,s){jt(s,pt(s),i)}),Zs=Di(function(i,s,l,u){jt(s,pt(s),i,u)}),ab=Di(function(i,s,l,u){jt(s,Ge(s),i,u)}),lb=cn(Wa);function cb(i,s){var l=Pi(i);return s==null?l:Rh(l,s)}var ub=se(function(i,s){i=Ee(i);var l=-1,u=s.length,f=u>2?s[2]:t;for(f&&lt(s[0],s[1],f)&&(u=1);++l<u;)for(var g=s[l],m=pt(g),w=-1,I=m.length;++w<I;){var N=m[w],k=i[N];(k===t||Ht(k,ki[N])&&!me.call(i,N))&&(i[N]=g[N])}return i}),hb=se(function(i){return i.push(t,fd),yt(Xd,t,i)});function db(i,s){return ch(i,Y(s,3),Yt)}function fb(i,s){return ch(i,Y(s,3),$a)}function pb(i,s){return i==null?i:Ha(i,Y(s,3),pt)}function _b(i,s){return i==null?i:Ph(i,Y(s,3),pt)}function gb(i,s){return i&&Yt(i,Y(s,3))}function mb(i,s){return i&&$a(i,Y(s,3))}function vb(i){return i==null?[]:Ds(i,Ge(i))}function yb(i){return i==null?[]:Ds(i,pt(i))}function wl(i,s,l){var u=i==null?t:ii(i,s);return u===t?l:u}function wb(i,s){return i!=null&&gd(i,s,Vy)}function El(i,s){return i!=null&&gd(i,s,qy)}var Eb=ld(function(i,s,l){s!=null&&typeof s.toString!="function"&&(s=Es.call(s)),i[s]=l},Il(_t)),bb=ld(function(i,s,l){s!=null&&typeof s.toString!="function"&&(s=Es.call(s)),me.call(i,s)?i[s].push(l):i[s]=[l]},Y),Ib=se(Er);function Ge(i){return ft(i)?Sh(i):za(i)}function pt(i){return ft(i)?Sh(i,!0):ew(i)}function Cb(i,s){var l={};return s=Y(s,3),Yt(i,function(u,f,g){an(l,s(u,f,g),u)}),l}function Tb(i,s){var l={};return s=Y(s,3),Yt(i,function(u,f,g){an(l,f,s(u,f,g))}),l}var Sb=Di(function(i,s,l){Ls(i,s,l)}),Xd=Di(function(i,s,l,u){Ls(i,s,l,u)}),Ab=cn(function(i,s){var l={};if(i==null)return l;var u=!1;s=xe(s,function(g){return g=Pn(g,i),u||(u=g.length>1),g}),jt(i,ol(i),l),u&&(l=Ot(l,v|E|T,Ew));for(var f=s.length;f--;)Ja(l,s[f]);return l});function Rb(i,s){return Jd(i,Qs(Y(s)))}var Nb=cn(function(i,s){return i==null?{}:nw(i,s)});function Jd(i,s){if(i==null)return{};var l=xe(ol(i),function(u){return[u]});return s=Y(s),Vh(i,l,function(u,f){return s(u,f[0])})}function kb(i,s,l){s=Pn(s,i);var u=-1,f=s.length;for(f||(f=1,i=t);++u<f;){var g=i==null?t:i[Qt(s[u])];g===t&&(u=f,g=l),i=hn(g)?g.call(i):g}return i}function Ob(i,s,l){return i==null?i:Ir(i,s,l)}function xb(i,s,l,u){return u=typeof u=="function"?u:t,i==null?i:Ir(i,s,l,u)}var Zd=hd(Ge),ef=hd(pt);function Pb(i,s,l){var u=ne(i),f=u||Ln(i)||Ui(i);if(s=Y(s,4),l==null){var g=i&&i.constructor;f?l=u?new g:[]:De(i)?l=hn(g)?Pi(Cs(i)):{}:l={}}return(f?Rt:Yt)(i,function(m,w,I){return s(l,m,w,I)}),l}function Db(i,s){return i==null?!0:Ja(i,s)}function Lb(i,s,l){return i==null?i:Yh(i,s,tl(l))}function Mb(i,s,l,u){return u=typeof u=="function"?u:t,i==null?i:Yh(i,s,tl(l),u)}function Fi(i){return i==null?[]:Pa(i,Ge(i))}function Ub(i){return i==null?[]:Pa(i,pt(i))}function Fb(i,s,l){return l===t&&(l=s,s=t),l!==t&&(l=Dt(l),l=l===l?l:0),s!==t&&(s=Dt(s),s=s===s?s:0),ni(Dt(i),s,l)}function Bb(i,s,l){return s=dn(s),l===t?(l=s,s=0):l=dn(l),i=Dt(i),Gy(i,s,l)}function Wb(i,s,l){if(l&&typeof l!="boolean"&&lt(i,s,l)&&(s=l=t),l===t&&(typeof s=="boolean"?(l=s,s=t):typeof i=="boolean"&&(l=i,i=t)),i===t&&s===t?(i=0,s=1):(i=dn(i),s===t?(s=i,i=0):s=dn(s)),i>s){var u=i;i=s,s=u}if(l||i%1||s%1){var f=Ch();return nt(i+f*(s-i+vv("1e-"+((f+"").length-1))),s)}return ja(i,s)}var Hb=Li(function(i,s,l){return s=s.toLowerCase(),i+(l?tf(s):s)});function tf(i){return bl(ge(i).toLowerCase())}function nf(i){return i=ge(i),i&&i.replace(Vm,Ov).replace(lv,"")}function $b(i,s,l){i=ge(i),s=Et(s);var u=i.length;l=l===t?u:ni(ie(l),0,u);var f=l;return l-=s.length,l>=0&&i.slice(l,f)==s}function Vb(i){return i=ge(i),i&&Im.test(i)?i.replace(Pu,xv):i}function qb(i){return i=ge(i),i&&Nm.test(i)?i.replace(ma,"\\$&"):i}var Gb=Li(function(i,s,l){return i+(l?"-":"")+s.toLowerCase()}),zb=Li(function(i,s,l){return i+(l?" ":"")+s.toLowerCase()}),Kb=sd("toLowerCase");function Yb(i,s,l){i=ge(i),s=ie(s);var u=s?Ri(i):0;if(!s||u>=s)return i;var f=(s-u)/2;return Hs(Rs(f),l)+i+Hs(As(f),l)}function jb(i,s,l){i=ge(i),s=ie(s);var u=s?Ri(i):0;return s&&u<s?i+Hs(s-u,l):i}function Qb(i,s,l){i=ge(i),s=ie(s);var u=s?Ri(i):0;return s&&u<s?Hs(s-u,l)+i:i}function Xb(i,s,l){return l||s==null?s=0:s&&(s=+s),ry(ge(i).replace(va,""),s||0)}function Jb(i,s,l){return(l?lt(i,s,l):s===t)?s=1:s=ie(s),Qa(ge(i),s)}function Zb(){var i=arguments,s=ge(i[0]);return i.length<3?s:s.replace(i[1],i[2])}var eI=Li(function(i,s,l){return i+(l?"_":"")+s.toLowerCase()});function tI(i,s,l){return l&&typeof l!="number"&&lt(i,s,l)&&(s=l=t),l=l===t?$e:l>>>0,l?(i=ge(i),i&&(typeof s=="string"||s!=null&&!yl(s))&&(s=Et(s),!s&&Ai(i))?Dn(Bt(i),0,l):i.split(s,l)):[]}var nI=Li(function(i,s,l){return i+(l?" ":"")+bl(s)});function iI(i,s,l){return i=ge(i),l=l==null?0:ni(ie(l),0,i.length),s=Et(s),i.slice(l,l+s.length)==s}function rI(i,s,l){var u=_.templateSettings;l&&lt(i,s,l)&&(s=t),i=ge(i),s=Zs({},s,u,dd);var f=Zs({},s.imports,u.imports,dd),g=Ge(f),m=Pa(f,g),w,I,N=0,k=s.interpolate||ds,P="__p += '",B=La((s.escape||ds).source+"|"+k.source+"|"+(k===Du?Um:ds).source+"|"+(s.evaluate||ds).source+"|$","g"),V="//# sourceURL="+(me.call(s,"sourceURL")?(s.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++fv+"]")+`
`;i.replace(B,function(Q,le,de,It,ct,Ct){return de||(de=It),P+=i.slice(N,Ct).replace(qm,Pv),le&&(w=!0,P+=`' +
__e(`+le+`) +
'`),ct&&(I=!0,P+=`';
`+ct+`;
__p += '`),de&&(P+=`' +
((__t = (`+de+`)) == null ? '' : __t) +
'`),N=Ct+Q.length,Q}),P+=`';
`;var j=me.call(s,"variable")&&s.variable;if(!j)P=`with (obj) {
`+P+`
}
`;else if(Lm.test(j))throw new te(h);P=(I?P.replace(ym,""):P).replace(wm,"$1").replace(Em,"$1;"),P="function("+(j||"obj")+`) {
`+(j?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(w?", __e = _.escape":"")+(I?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+P+`return __p
}`;var re=sf(function(){return fe(g,V+"return "+P).apply(t,m)});if(re.source=P,vl(re))throw re;return re}function sI(i){return ge(i).toLowerCase()}function oI(i){return ge(i).toUpperCase()}function aI(i,s,l){if(i=ge(i),i&&(l||s===t))return fh(i);if(!i||!(s=Et(s)))return i;var u=Bt(i),f=Bt(s),g=ph(u,f),m=_h(u,f)+1;return Dn(u,g,m).join("")}function lI(i,s,l){if(i=ge(i),i&&(l||s===t))return i.slice(0,mh(i)+1);if(!i||!(s=Et(s)))return i;var u=Bt(i),f=_h(u,Bt(s))+1;return Dn(u,0,f).join("")}function cI(i,s,l){if(i=ge(i),i&&(l||s===t))return i.replace(va,"");if(!i||!(s=Et(s)))return i;var u=Bt(i),f=ph(u,Bt(s));return Dn(u,f).join("")}function uI(i,s){var l=_e,u=ve;if(De(s)){var f="separator"in s?s.separator:f;l="length"in s?ie(s.length):l,u="omission"in s?Et(s.omission):u}i=ge(i);var g=i.length;if(Ai(i)){var m=Bt(i);g=m.length}if(l>=g)return i;var w=l-Ri(u);if(w<1)return u;var I=m?Dn(m,0,w).join(""):i.slice(0,w);if(f===t)return I+u;if(m&&(w+=I.length-w),yl(f)){if(i.slice(w).search(f)){var N,k=I;for(f.global||(f=La(f.source,ge(Lu.exec(f))+"g")),f.lastIndex=0;N=f.exec(k);)var P=N.index;I=I.slice(0,P===t?w:P)}}else if(i.indexOf(Et(f),w)!=w){var B=I.lastIndexOf(f);B>-1&&(I=I.slice(0,B))}return I+u}function hI(i){return i=ge(i),i&&bm.test(i)?i.replace(xu,Wv):i}var dI=Li(function(i,s,l){return i+(l?" ":"")+s.toUpperCase()}),bl=sd("toUpperCase");function rf(i,s,l){return i=ge(i),s=l?t:s,s===t?Lv(i)?Vv(i):Sv(i):i.match(s)||[]}var sf=se(function(i,s){try{return yt(i,t,s)}catch(l){return vl(l)?l:new te(l)}}),fI=cn(function(i,s){return Rt(s,function(l){l=Qt(l),an(i,l,gl(i[l],i))}),i});function pI(i){var s=i==null?0:i.length,l=Y();return i=s?xe(i,function(u){if(typeof u[1]!="function")throw new Nt(c);return[l(u[0]),u[1]]}):[],se(function(u){for(var f=-1;++f<s;){var g=i[f];if(yt(g[0],this,u))return yt(g[1],this,u)}})}function _I(i){return Wy(Ot(i,v))}function Il(i){return function(){return i}}function gI(i,s){return i==null||i!==i?s:i}var mI=ad(),vI=ad(!0);function _t(i){return i}function Cl(i){return Uh(typeof i=="function"?i:Ot(i,v))}function yI(i){return Bh(Ot(i,v))}function wI(i,s){return Wh(i,Ot(s,v))}var EI=se(function(i,s){return function(l){return Er(l,i,s)}}),bI=se(function(i,s){return function(l){return Er(i,l,s)}});function Tl(i,s,l){var u=Ge(s),f=Ds(s,u);l==null&&!(De(s)&&(f.length||!u.length))&&(l=s,s=i,i=this,f=Ds(s,Ge(s)));var g=!(De(l)&&"chain"in l)||!!l.chain,m=hn(i);return Rt(f,function(w){var I=s[w];i[w]=I,m&&(i.prototype[w]=function(){var N=this.__chain__;if(g||N){var k=i(this.__wrapped__),P=k.__actions__=dt(this.__actions__);return P.push({func:I,args:arguments,thisArg:i}),k.__chain__=N,k}return I.apply(i,Rn([this.value()],arguments))})}),i}function II(){return Xe._===this&&(Xe._=jv),this}function Sl(){}function CI(i){return i=ie(i),se(function(s){return Hh(s,i)})}var TI=il(xe),SI=il(lh),AI=il(Ra);function of(i){return ul(i)?Na(Qt(i)):iw(i)}function RI(i){return function(s){return i==null?t:ii(i,s)}}var NI=cd(),kI=cd(!0);function Al(){return[]}function Rl(){return!1}function OI(){return{}}function xI(){return""}function PI(){return!0}function DI(i,s){if(i=ie(i),i<1||i>Pe)return[];var l=$e,u=nt(i,$e);s=Y(s),i-=$e;for(var f=xa(u,s);++l<i;)s(l);return f}function LI(i){return ne(i)?xe(i,Qt):bt(i)?[i]:dt(Td(ge(i)))}function MI(i){var s=++Kv;return ge(i)+s}var UI=Ws(function(i,s){return i+s},0),FI=rl("ceil"),BI=Ws(function(i,s){return i/s},1),WI=rl("floor");function HI(i){return i&&i.length?Ps(i,_t,Va):t}function $I(i,s){return i&&i.length?Ps(i,Y(s,2),Va):t}function VI(i){return hh(i,_t)}function qI(i,s){return hh(i,Y(s,2))}function GI(i){return i&&i.length?Ps(i,_t,Ka):t}function zI(i,s){return i&&i.length?Ps(i,Y(s,2),Ka):t}var KI=Ws(function(i,s){return i*s},1),YI=rl("round"),jI=Ws(function(i,s){return i-s},0);function QI(i){return i&&i.length?Oa(i,_t):0}function XI(i,s){return i&&i.length?Oa(i,Y(s,2)):0}return _.after=y0,_.ary=Md,_.assign=ob,_.assignIn=Qd,_.assignInWith=Zs,_.assignWith=ab,_.at=lb,_.before=Ud,_.bind=gl,_.bindAll=fI,_.bindKey=Fd,_.castArray=O0,_.chain=Pd,_.chunk=Ww,_.compact=Hw,_.concat=$w,_.cond=pI,_.conforms=_I,_.constant=Il,_.countBy=QE,_.create=cb,_.curry=Bd,_.curryRight=Wd,_.debounce=Hd,_.defaults=ub,_.defaultsDeep=hb,_.defer=w0,_.delay=E0,_.difference=Vw,_.differenceBy=qw,_.differenceWith=Gw,_.drop=zw,_.dropRight=Kw,_.dropRightWhile=Yw,_.dropWhile=jw,_.fill=Qw,_.filter=JE,_.flatMap=t0,_.flatMapDeep=n0,_.flatMapDepth=i0,_.flatten=Nd,_.flattenDeep=Xw,_.flattenDepth=Jw,_.flip=b0,_.flow=mI,_.flowRight=vI,_.fromPairs=Zw,_.functions=vb,_.functionsIn=yb,_.groupBy=r0,_.initial=tE,_.intersection=nE,_.intersectionBy=iE,_.intersectionWith=rE,_.invert=Eb,_.invertBy=bb,_.invokeMap=o0,_.iteratee=Cl,_.keyBy=a0,_.keys=Ge,_.keysIn=pt,_.map=Ks,_.mapKeys=Cb,_.mapValues=Tb,_.matches=yI,_.matchesProperty=wI,_.memoize=js,_.merge=Sb,_.mergeWith=Xd,_.method=EI,_.methodOf=bI,_.mixin=Tl,_.negate=Qs,_.nthArg=CI,_.omit=Ab,_.omitBy=Rb,_.once=I0,_.orderBy=l0,_.over=TI,_.overArgs=C0,_.overEvery=SI,_.overSome=AI,_.partial=ml,_.partialRight=$d,_.partition=c0,_.pick=Nb,_.pickBy=Jd,_.property=of,_.propertyOf=RI,_.pull=lE,_.pullAll=Od,_.pullAllBy=cE,_.pullAllWith=uE,_.pullAt=hE,_.range=NI,_.rangeRight=kI,_.rearg=T0,_.reject=d0,_.remove=dE,_.rest=S0,_.reverse=pl,_.sampleSize=p0,_.set=Ob,_.setWith=xb,_.shuffle=_0,_.slice=fE,_.sortBy=v0,_.sortedUniq=wE,_.sortedUniqBy=EE,_.split=tI,_.spread=A0,_.tail=bE,_.take=IE,_.takeRight=CE,_.takeRightWhile=TE,_.takeWhile=SE,_.tap=HE,_.throttle=R0,_.thru=zs,_.toArray=Kd,_.toPairs=Zd,_.toPairsIn=ef,_.toPath=LI,_.toPlainObject=jd,_.transform=Pb,_.unary=N0,_.union=AE,_.unionBy=RE,_.unionWith=NE,_.uniq=kE,_.uniqBy=OE,_.uniqWith=xE,_.unset=Db,_.unzip=_l,_.unzipWith=xd,_.update=Lb,_.updateWith=Mb,_.values=Fi,_.valuesIn=Ub,_.without=PE,_.words=rf,_.wrap=k0,_.xor=DE,_.xorBy=LE,_.xorWith=ME,_.zip=UE,_.zipObject=FE,_.zipObjectDeep=BE,_.zipWith=WE,_.entries=Zd,_.entriesIn=ef,_.extend=Qd,_.extendWith=Zs,Tl(_,_),_.add=UI,_.attempt=sf,_.camelCase=Hb,_.capitalize=tf,_.ceil=FI,_.clamp=Fb,_.clone=x0,_.cloneDeep=D0,_.cloneDeepWith=L0,_.cloneWith=P0,_.conformsTo=M0,_.deburr=nf,_.defaultTo=gI,_.divide=BI,_.endsWith=$b,_.eq=Ht,_.escape=Vb,_.escapeRegExp=qb,_.every=XE,_.find=ZE,_.findIndex=Ad,_.findKey=db,_.findLast=e0,_.findLastIndex=Rd,_.findLastKey=fb,_.floor=WI,_.forEach=Dd,_.forEachRight=Ld,_.forIn=pb,_.forInRight=_b,_.forOwn=gb,_.forOwnRight=mb,_.get=wl,_.gt=U0,_.gte=F0,_.has=wb,_.hasIn=El,_.head=kd,_.identity=_t,_.includes=s0,_.indexOf=eE,_.inRange=Bb,_.invoke=Ib,_.isArguments=oi,_.isArray=ne,_.isArrayBuffer=B0,_.isArrayLike=ft,_.isArrayLikeObject=We,_.isBoolean=W0,_.isBuffer=Ln,_.isDate=H0,_.isElement=$0,_.isEmpty=V0,_.isEqual=q0,_.isEqualWith=G0,_.isError=vl,_.isFinite=z0,_.isFunction=hn,_.isInteger=Vd,_.isLength=Xs,_.isMap=qd,_.isMatch=K0,_.isMatchWith=Y0,_.isNaN=j0,_.isNative=Q0,_.isNil=J0,_.isNull=X0,_.isNumber=Gd,_.isObject=De,_.isObjectLike=Le,_.isPlainObject=Ar,_.isRegExp=yl,_.isSafeInteger=Z0,_.isSet=zd,_.isString=Js,_.isSymbol=bt,_.isTypedArray=Ui,_.isUndefined=eb,_.isWeakMap=tb,_.isWeakSet=nb,_.join=sE,_.kebabCase=Gb,_.last=Pt,_.lastIndexOf=oE,_.lowerCase=zb,_.lowerFirst=Kb,_.lt=ib,_.lte=rb,_.max=HI,_.maxBy=$I,_.mean=VI,_.meanBy=qI,_.min=GI,_.minBy=zI,_.stubArray=Al,_.stubFalse=Rl,_.stubObject=OI,_.stubString=xI,_.stubTrue=PI,_.multiply=KI,_.nth=aE,_.noConflict=II,_.noop=Sl,_.now=Ys,_.pad=Yb,_.padEnd=jb,_.padStart=Qb,_.parseInt=Xb,_.random=Wb,_.reduce=u0,_.reduceRight=h0,_.repeat=Jb,_.replace=Zb,_.result=kb,_.round=YI,_.runInContext=b,_.sample=f0,_.size=g0,_.snakeCase=eI,_.some=m0,_.sortedIndex=pE,_.sortedIndexBy=_E,_.sortedIndexOf=gE,_.sortedLastIndex=mE,_.sortedLastIndexBy=vE,_.sortedLastIndexOf=yE,_.startCase=nI,_.startsWith=iI,_.subtract=jI,_.sum=QI,_.sumBy=XI,_.template=rI,_.times=DI,_.toFinite=dn,_.toInteger=ie,_.toLength=Yd,_.toLower=sI,_.toNumber=Dt,_.toSafeInteger=sb,_.toString=ge,_.toUpper=oI,_.trim=aI,_.trimEnd=lI,_.trimStart=cI,_.truncate=uI,_.unescape=hI,_.uniqueId=MI,_.upperCase=dI,_.upperFirst=bl,_.each=Dd,_.eachRight=Ld,_.first=kd,Tl(_,function(){var i={};return Yt(_,function(s,l){me.call(_.prototype,l)||(i[l]=s)}),i}(),{chain:!1}),_.VERSION=r,Rt(["bind","bindKey","curry","curryRight","partial","partialRight"],function(i){_[i].placeholder=_}),Rt(["drop","take"],function(i,s){he.prototype[i]=function(l){l=l===t?1:qe(ie(l),0);var u=this.__filtered__&&!s?new he(this):this.clone();return u.__filtered__?u.__takeCount__=nt(l,u.__takeCount__):u.__views__.push({size:nt(l,$e),type:i+(u.__dir__<0?"Right":"")}),u},he.prototype[i+"Right"]=function(l){return this.reverse()[i](l).reverse()}}),Rt(["filter","map","takeWhile"],function(i,s){var l=s+1,u=l==J||l==be;he.prototype[i]=function(f){var g=this.clone();return g.__iteratees__.push({iteratee:Y(f,3),type:l}),g.__filtered__=g.__filtered__||u,g}}),Rt(["head","last"],function(i,s){var l="take"+(s?"Right":"");he.prototype[i]=function(){return this[l](1).value()[0]}}),Rt(["initial","tail"],function(i,s){var l="drop"+(s?"":"Right");he.prototype[i]=function(){return this.__filtered__?new he(this):this[l](1)}}),he.prototype.compact=function(){return this.filter(_t)},he.prototype.find=function(i){return this.filter(i).head()},he.prototype.findLast=function(i){return this.reverse().find(i)},he.prototype.invokeMap=se(function(i,s){return typeof i=="function"?new he(this):this.map(function(l){return Er(l,i,s)})}),he.prototype.reject=function(i){return this.filter(Qs(Y(i)))},he.prototype.slice=function(i,s){i=ie(i);var l=this;return l.__filtered__&&(i>0||s<0)?new he(l):(i<0?l=l.takeRight(-i):i&&(l=l.drop(i)),s!==t&&(s=ie(s),l=s<0?l.dropRight(-s):l.take(s-i)),l)},he.prototype.takeRightWhile=function(i){return this.reverse().takeWhile(i).reverse()},he.prototype.toArray=function(){return this.take($e)},Yt(he.prototype,function(i,s){var l=/^(?:filter|find|map|reject)|While$/.test(s),u=/^(?:head|last)$/.test(s),f=_[u?"take"+(s=="last"?"Right":""):s],g=u||/^find/.test(s);f&&(_.prototype[s]=function(){var m=this.__wrapped__,w=u?[1]:arguments,I=m instanceof he,N=w[0],k=I||ne(m),P=function(le){var de=f.apply(_,Rn([le],w));return u&&B?de[0]:de};k&&l&&typeof N=="function"&&N.length!=1&&(I=k=!1);var B=this.__chain__,V=!!this.__actions__.length,j=g&&!B,re=I&&!V;if(!g&&k){m=re?m:new he(this);var Q=i.apply(m,w);return Q.__actions__.push({func:zs,args:[P],thisArg:t}),new kt(Q,B)}return j&&re?i.apply(this,w):(Q=this.thru(P),j?u?Q.value()[0]:Q.value():Q)})}),Rt(["pop","push","shift","sort","splice","unshift"],function(i){var s=vs[i],l=/^(?:push|sort|unshift)$/.test(i)?"tap":"thru",u=/^(?:pop|shift)$/.test(i);_.prototype[i]=function(){var f=arguments;if(u&&!this.__chain__){var g=this.value();return s.apply(ne(g)?g:[],f)}return this[l](function(m){return s.apply(ne(m)?m:[],f)})}}),Yt(he.prototype,function(i,s){var l=_[s];if(l){var u=l.name+"";me.call(xi,u)||(xi[u]=[]),xi[u].push({name:s,func:l})}}),xi[Bs(t,F).name]=[{name:"wrapper",func:t}],he.prototype.clone=hy,he.prototype.reverse=dy,he.prototype.value=fy,_.prototype.at=$E,_.prototype.chain=VE,_.prototype.commit=qE,_.prototype.next=GE,_.prototype.plant=KE,_.prototype.reverse=YE,_.prototype.toJSON=_.prototype.valueOf=_.prototype.value=jE,_.prototype.first=_.prototype.head,pr&&(_.prototype[pr]=zE),_},Ni=qv();Jn?((Jn.exports=Ni)._=Ni,Ca._=Ni):Xe._=Ni}).call(et)})(Fo,Fo.exports);var VO=Fo.exports;const cs=n=>(Fp("data-v-df1f7227"),n=n(),Bp(),n),qO=["id"],GO={class:"card-header bg-body px-1 d-flex align-items-center px-2 px-md-0"},zO={class:"rounded-circle user-pic"},KO=["src"],YO={class:"ms-2 fw-bold"},jO=["id","onDblclick"],QO=cs(()=>H("svg",{xmlns:"http://www.w3.org/2000/svg",width:"50",height:"50",fill:"currentColor",class:"bi bi-heart-fill text-danger",viewBox:"0 0 16 16"},[H("path",{"fill-rule":"evenodd",d:"M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"})],-1)),XO=[QO],JO={key:0,class:"carousel-indicators"},ZO=["data-bs-target","data-bs-slide-to","aria-current","aria-label"],ex=["src"],tx=["src"],nx={controls:"",class:"d-block w-100"},ix=["src"],rx=["data-bs-target"],sx=cs(()=>H("span",{class:"carousel-control-prev-icon","aria-hidden":"true"},null,-1)),ox=cs(()=>H("span",{class:"visually-hidden"},"Previous",-1)),ax=[sx,ox],lx=["data-bs-target"],cx=cs(()=>H("span",{class:"carousel-control-next-icon","aria-hidden":"true"},null,-1)),ux=cs(()=>H("span",{class:"visually-hidden"},"Next",-1)),hx=[cx,ux],dx={class:"card-body px-sm-0 py-1 mb-1"},fx=["onClick"],px={key:0,class:"bi bi-heart icon-size text-danger"},_x={key:1,class:"bi bi-heart-fill icon-size text-danger"},gx={key:1},mx={class:"card-text d-inline fw-bold"},vx={class:"card-text ms-2 d-inline"},yx=["onClick"],wx={class:"position-relative"},Ex=["id","onUpdate:modelValue"],bx=["onClick"],Ix={key:0,class:"m-0"},Cx={__name:"postComponent",props:{postDataList:{type:Array,default:[]},postIdDirection:{type:String,default:""}},setup(n){const e=n,t=Ke(e.postDataList),r=tC(()=>{if(!Array.isArray(t.value))return[];const F=[...t.value];return F.sort((ee,O)=>new Date(O.timestamp)-new Date(ee.timestamp)),F});nC(()=>e.postDataList,F=>{t.value=F});const o=Ke(new Set),a=F=>{o.value.has(F)?o.value.delete(F):o.value.add(F)},c=F=>o.value.has(F),h=(F,ee)=>F?c(ee)?F:F.slice(0,20):void 0,d=Ke(window.innerWidth>=768),p=()=>{d.value=window.innerWidth>=768};tc(()=>{window.addEventListener("resize",p)}),iC(()=>{window.removeEventListener("resize",p)});const y=Ke([]);tc(()=>{const F=jr(Xr,"userData");gg(F,ee=>{const O=[];ee.forEach(G=>{const z=G.key,x=G.val();O.push({key:z,...x})}),y.value=O})});const v=F=>{const ee=y.value.find(O=>O.id===F);return ee?ee.media_url:""},E=Ke({}),T=F=>{console.log(F),console.log(E.value[F])},A=Ke({}),L=Ke({}),D=VO.debounce(function(F){F.isThumb=!F.isThumb;const ee=jr(Xr,`postsData/${F.key}`);xR(ee,F).then(()=>{console.log("Data updated successfully!")}).catch(O=>{console.error("Error updating data:",O)}),A.value[F.id]=F.isThumb,L.value[F.id]&&clearTimeout(L.value[F.id]),L.value[F.id]=setTimeout(()=>{A.value[F.id]=!1},2e3)},300);return(F,ee)=>(Te(!0),Se(Pr,null,Nl(r.value,(O,G)=>(Te(),Se("div",{class:"card mt-3 post-card w-100 border-0",key:O.id,id:O.id},[H("div",GO,[H("div",zO,[H("img",{src:v(O.postownerid),alt:""},null,8,KO)]),H("div",YO,lo(O.username),1)]),H("div",{id:"post"+O.id,class:"carousel slide post-pic-area position-relative",onDblclick:z=>_o(D)(O)},[H("div",{class:ao(["position-absolute heart-animation-default",A.value[O.id]?"heart-animation":""])},XO,2),O.media_type==="CAROUSEL_ALBUM"?(Te(),Se("div",JO,[(Te(!0),Se(Pr,null,Nl(O.media_children,(z,x)=>(Te(),Se("div",{key:x},[H("button",{class:ao({active:x===0}),type:"button","data-bs-target":"#post"+O.id,"data-bs-slide-to":x,"aria-current":x===1,"aria-label":"Slide"+x},null,10,ZO)]))),128))])):rt("",!0),O.media_type==="IMAGE"?(Te(),Se("div",{key:1,class:"carousel-inner position-relative",ref_for:!0,ref:"postImg"},[H("img",{src:O.media_url,class:"d-block w-100",alt:"..."},null,8,ex)],512)):rt("",!0),O.media_type==="CAROUSEL_ALBUM"?(Te(),Se("div",{key:2,class:"carousel-inner position-relative",ref_for:!0,ref:"postImg"},[(Te(!0),Se(Pr,null,Nl(O.media_children,(z,x)=>(Te(),Se("div",{class:ao(["carousel-item",{active:x===0}]),key:x},[H("img",{src:z,class:"d-block w-100",alt:"..."},null,8,tx)],2))),128))],512)):rt("",!0),O.media_type==="VIDEO"?(Te(),Se("div",{key:3,class:"carousel-inner position-relative",ref_for:!0,ref:"postImg"},[H("video",nx,[H("source",{src:O.media_url,type:"video/webm"},null,8,ix)])],512)):rt("",!0),O.media_type==="CAROUSEL_ALBUM"?(Te(),Se("button",{key:4,class:"carousel-control-prev",type:"button","data-bs-target":"#post"+O.id,"data-bs-slide":"prev"},ax,8,rx)):rt("",!0),O.media_type==="CAROUSEL_ALBUM"?(Te(),Se("button",{key:5,class:"carousel-control-next",type:"button","data-bs-target":"#post"+O.id,"data-bs-slide":"next"},hx,8,lx)):rt("",!0)],40,jO),H("div",dx,[O.permalink?rt("",!0):(Te(),Se("a",{key:0,href:"",onClick:ui(z=>_o(D)(O),["prevent"])},[O.isThumb?rt("",!0):(Te(),Se("i",px)),O.isThumb?(Te(),Se("i",_x)):rt("",!0)],8,fx)),O.caption?(Te(),Se("div",gx,[H("span",mx,lo(O.username),1),H("div",vx,lo(h(O.caption,O.id)),1),!c(O.id)&&O.caption&&O.caption.length>20?(Te(),Se("a",{key:0,class:"text-decoration-none text-secondary fs-6",onClick:ui(z=>a(O.id),["prevent"]),href:"#"}," ...更多 ",8,yx)):rt("",!0)])):rt("",!0),H("div",wx,[Mp(H("input",{type:"text",placeholder:"留言...",class:"w-100 border-0 my-1 py-1 post-message",id:"#message"+O.id,"onUpdate:modelValue":z=>E.value[O.id]=z},null,8,Ex),[[Up,E.value[O.id]]]),E.value[O.id]?(Te(),Se("a",{key:0,type:"button",class:"position-absolute top-50 end-0 translate-middle-y text-decoration-none",onClick:ui(z=>T(O.id),["prevent"])},"發布",8,bx)):rt("",!0)])]),G!=t.value.length-1&&d.value?(Te(),Se("hr",Ix)):rt("",!0)],8,qO))),128))}},Nx=Dp(Cx,[["__scopeId","data-v-df1f7227"]]);export{hO as M,Rx as _,Ax as a,Xr as d,gg as o,Nx as p,jr as r,Sx as s,dO as u};
