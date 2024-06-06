import{f as me,h as zc,s as Gc,r as ae,j as Kc,_ as la,o as ni,k as ca,a as $,c as H,b,p as oe,m as Or,t as Mn,i as ua,v as ha,l as Qt,F as Jt,z as da,A as fa,B as ks,w as Un,d as Yc,x as xr,C as Qc,e as Ns,D as Lr,E as Jc}from"./index-T7KzEY47.js";var Mr={};/**
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
 */const pa={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const m=function(n,e){if(!n)throw Ft(e)},Ft=function(n){return new Error("Firebase Database ("+pa.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
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
 */const _a=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Xc=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const i=n[t++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=n[t++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=n[t++],o=n[t++],a=n[t++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=n[t++],o=n[t++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Ai={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<n.length;i+=3){const r=n[i],o=i+1<n.length,a=o?n[i+1]:0,l=i+2<n.length,c=l?n[i+2]:0,h=r>>2,u=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(d=64)),s.push(t[h],t[u],t[d],t[f])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(_a(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Xc(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<n.length;){const r=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const c=i<n.length?t[n.charAt(i)]:64;++i;const u=i<n.length?t[n.charAt(i)]:64;if(++i,r==null||a==null||c==null||u==null)throw new Zc;const d=r<<2|a>>4;if(s.push(d),c!==64){const f=a<<4&240|c>>2;if(s.push(f),u!==64){const _=c<<6&192|u;s.push(_)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Zc extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ga=function(n){const e=_a(n);return Ai.encodeByteArray(e,!0)},$n=function(n){return ga(n).replace(/\./g,"")},Hn=function(n){try{return Ai.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function eu(n){return ma(void 0,n)}function ma(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!tu(t)||(n[t]=ma(n[t],e[t]));return n}function tu(n){return n!=="__proto__"}/**
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
 */function nu(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const su=()=>nu().__FIREBASE_DEFAULTS__,iu=()=>{if(typeof process>"u"||typeof Mr>"u")return;const n=Mr.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},ru=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Hn(n[1]);return e&&JSON.parse(e)},ki=()=>{try{return su()||iu()||ru()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},va=n=>{var e,t;return(t=(e=ki())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},ya=n=>{const e=va(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Ea=()=>{var n;return(n=ki())===null||n===void 0?void 0:n.config},wa=n=>{var e;return(e=ki())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class mn{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function ba(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",i=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n);return[$n(JSON.stringify(t)),$n(JSON.stringify(o)),""].join(".")}/**
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
 */function le(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ni(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(le())}function ou(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Ia(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function au(){const n=le();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Ca(){return pa.NODE_ADMIN===!0}function lu(){try{return typeof indexedDB=="object"}catch{return!1}}function cu(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}/**
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
 */const uu="FirebaseError";class Ue extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=uu,Object.setPrototypeOf(this,Ue.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,vn.prototype.create)}}class vn{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?hu(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Ue(i,a,s)}}function hu(n,e){return n.replace(du,(t,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const du=/\{\$([^}]+)}/g;/**
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
 */function rn(n){return JSON.parse(n)}function se(n){return JSON.stringify(n)}/**
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
 */const Ta=function(n){let e={},t={},s={},i="";try{const r=n.split(".");e=rn(Hn(r[0])||""),t=rn(Hn(r[1])||""),i=r[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:i}},fu=function(n){const e=Ta(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},pu=function(n){const e=Ta(n).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Re(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Nt(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function si(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function jn(n,e,t){const s={};for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&(s[i]=e.call(t,n[i],i,n));return s}function qn(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const i of t){if(!s.includes(i))return!1;const r=n[i],o=e[i];if(Ur(r)&&Ur(o)){if(!qn(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!t.includes(i))return!1;return!0}function Ur(n){return n!==null&&typeof n=="object"}/**
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
 */function Bt(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
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
 */class _u{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let u=0;u<16;u++)s[u]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let u=0;u<16;u++)s[u]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let u=16;u<80;u++){const d=s[u-3]^s[u-8]^s[u-14]^s[u-16];s[u]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,h;for(let u=0;u<80;u++){u<40?u<20?(c=a^r&(o^a),h=1518500249):(c=r^o^a,h=1859775393):u<60?(c=r&o|a&(r|o),h=2400959708):(c=r^o^a,h=3395469782);const d=(i<<5|i>>>27)+c+l+h+s[u]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<t;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<t;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function gu(n,e){const t=new mu(n,e);return t.subscribe.bind(t)}class mu{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let i;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");vu(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:s},i.next===void 0&&(i.next=Ds),i.error===void 0&&(i.error=Ds),i.complete===void 0&&(i.complete=Ds);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function vu(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Ds(){}function us(n,e){return`${n} failed: ${e} argument `}/**
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
 */const yu=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,m(s<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):i<65536?(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},hs=function(n){let e=0;for(let t=0;t<n.length;t++){const s=n.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function ce(n){return n&&n._delegate?n._delegate:n}class Je{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const st="[DEFAULT]";/**
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
 */class Eu{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new mn;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(bu(e))try{this.getOrInitializeService({instanceIdentifier:st})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=st){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=st){return this.instances.has(e)}getOptions(e=st){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,t){var s;const i=this.normalizeInstanceIdentifier(t),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const i of s)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:wu(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=st){return this.component?this.component.multipleInstances?e:st:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function wu(n){return n===st?void 0:n}function bu(n){return n.instantiationMode==="EAGER"}/**
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
 */class Iu{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Eu(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var F;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(F||(F={}));const Cu={debug:F.DEBUG,verbose:F.VERBOSE,info:F.INFO,warn:F.WARN,error:F.ERROR,silent:F.SILENT},Tu=F.INFO,Su={[F.DEBUG]:"log",[F.VERBOSE]:"log",[F.INFO]:"info",[F.WARN]:"warn",[F.ERROR]:"error"},Ru=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),i=Su[e];if(i)console[i](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Di{constructor(e){this.name=e,this._logLevel=Tu,this._logHandler=Ru,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in F))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Cu[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,F.DEBUG,...e),this._logHandler(this,F.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,F.VERBOSE,...e),this._logHandler(this,F.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,F.INFO,...e),this._logHandler(this,F.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,F.WARN,...e),this._logHandler(this,F.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,F.ERROR,...e),this._logHandler(this,F.ERROR,...e)}}const Au=(n,e)=>e.some(t=>n instanceof t);let Fr,Br;function ku(){return Fr||(Fr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Nu(){return Br||(Br=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Sa=new WeakMap,ii=new WeakMap,Ra=new WeakMap,Ps=new WeakMap,Pi=new WeakMap;function Du(n){const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(Ke(n.result)),i()},o=()=>{s(n.error),i()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Sa.set(t,n)}).catch(()=>{}),Pi.set(e,n),e}function Pu(n){if(ii.has(n))return;const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),i()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});ii.set(n,e)}let ri={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return ii.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Ra.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ke(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Ou(n){ri=n(ri)}function xu(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(Os(this),e,...t);return Ra.set(s,e.sort?e.sort():[e]),Ke(s)}:Nu().includes(n)?function(...e){return n.apply(Os(this),e),Ke(Sa.get(this))}:function(...e){return Ke(n.apply(Os(this),e))}}function Lu(n){return typeof n=="function"?xu(n):(n instanceof IDBTransaction&&Pu(n),Au(n,ku())?new Proxy(n,ri):n)}function Ke(n){if(n instanceof IDBRequest)return Du(n);if(Ps.has(n))return Ps.get(n);const e=Lu(n);return e!==n&&(Ps.set(n,e),Pi.set(e,n)),e}const Os=n=>Pi.get(n);function Mu(n,e,{blocked:t,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(n,e),a=Ke(o);return s&&o.addEventListener("upgradeneeded",l=>{s(Ke(o.result),l.oldVersion,l.newVersion,Ke(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Uu=["get","getKey","getAll","getAllKeys","count"],Fu=["put","add","delete","clear"],xs=new Map;function Wr(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(xs.get(e))return xs.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,i=Fu.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Uu.includes(t)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[t](...a),i&&l.done]))[0]};return xs.set(e,r),r}Ou(n=>({...n,get:(e,t,s)=>Wr(e,t)||n.get(e,t,s),has:(e,t)=>!!Wr(e,t)||n.has(e,t)}));/**
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
 */class Bu{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Wu(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function Wu(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const oi="@firebase/app",Vr="0.10.2";/**
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
 */const ct=new Di("@firebase/app"),Vu="@firebase/app-compat",$u="@firebase/analytics-compat",Hu="@firebase/analytics",ju="@firebase/app-check-compat",qu="@firebase/app-check",zu="@firebase/auth",Gu="@firebase/auth-compat",Ku="@firebase/database",Yu="@firebase/database-compat",Qu="@firebase/functions",Ju="@firebase/functions-compat",Xu="@firebase/installations",Zu="@firebase/installations-compat",eh="@firebase/messaging",th="@firebase/messaging-compat",nh="@firebase/performance",sh="@firebase/performance-compat",ih="@firebase/remote-config",rh="@firebase/remote-config-compat",oh="@firebase/storage",ah="@firebase/storage-compat",lh="@firebase/firestore",ch="@firebase/firestore-compat",uh="firebase",hh="10.11.1";/**
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
 */const ai="[DEFAULT]",dh={[oi]:"fire-core",[Vu]:"fire-core-compat",[Hu]:"fire-analytics",[$u]:"fire-analytics-compat",[qu]:"fire-app-check",[ju]:"fire-app-check-compat",[zu]:"fire-auth",[Gu]:"fire-auth-compat",[Ku]:"fire-rtdb",[Yu]:"fire-rtdb-compat",[Qu]:"fire-fn",[Ju]:"fire-fn-compat",[Xu]:"fire-iid",[Zu]:"fire-iid-compat",[eh]:"fire-fcm",[th]:"fire-fcm-compat",[nh]:"fire-perf",[sh]:"fire-perf-compat",[ih]:"fire-rc",[rh]:"fire-rc-compat",[oh]:"fire-gcs",[ah]:"fire-gcs-compat",[lh]:"fire-fst",[ch]:"fire-fst-compat","fire-js":"fire-js",[uh]:"fire-js-all"};/**
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
 */const zn=new Map,fh=new Map,li=new Map;function $r(n,e){try{n.container.addComponent(e)}catch(t){ct.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function ut(n){const e=n.name;if(li.has(e))return ct.debug(`There were multiple attempts to register component ${e}.`),!1;li.set(e,n);for(const t of zn.values())$r(t,n);for(const t of fh.values())$r(t,n);return!0}function ds(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function ze(n){return n.settings!==void 0}/**
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
 */const ph={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ye=new vn("app","Firebase",ph);/**
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
 */class _h{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Je("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ye.create("app-deleted",{appName:this._name})}}/**
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
 */const mt=hh;function Aa(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s=Object.assign({name:ai,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw Ye.create("bad-app-name",{appName:String(i)});if(t||(t=Ea()),!t)throw Ye.create("no-options");const r=zn.get(i);if(r){if(qn(t,r.options)&&qn(s,r.config))return r;throw Ye.create("duplicate-app",{appName:i})}const o=new Iu(i);for(const l of li.values())o.addComponent(l);const a=new _h(t,s,o);return zn.set(i,a),a}function Oi(n=ai){const e=zn.get(n);if(!e&&n===ai&&Ea())return Aa();if(!e)throw Ye.create("no-app",{appName:n});return e}function Ce(n,e,t){var s;let i=(s=dh[n])!==null&&s!==void 0?s:n;t&&(i+=`-${t}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ct.warn(a.join(" "));return}ut(new Je(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const gh="firebase-heartbeat-database",mh=1,on="firebase-heartbeat-store";let Ls=null;function ka(){return Ls||(Ls=Mu(gh,mh,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(on)}catch(t){console.warn(t)}}}}).catch(n=>{throw Ye.create("idb-open",{originalErrorMessage:n.message})})),Ls}async function vh(n){try{const t=(await ka()).transaction(on),s=await t.objectStore(on).get(Na(n));return await t.done,s}catch(e){if(e instanceof Ue)ct.warn(e.message);else{const t=Ye.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ct.warn(t.message)}}}async function Hr(n,e){try{const s=(await ka()).transaction(on,"readwrite");await s.objectStore(on).put(e,Na(n)),await s.done}catch(t){if(t instanceof Ue)ct.warn(t.message);else{const s=Ye.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});ct.warn(s.message)}}}function Na(n){return`${n.name}!${n.options.appId}`}/**
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
 */const yh=1024,Eh=30*24*60*60*1e3;class wh{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Ih(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=jr();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Eh}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=jr(),{heartbeatsToSend:s,unsentEntries:i}=bh(this._heartbeatsCache.heartbeats),r=$n(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function jr(){return new Date().toISOString().substring(0,10)}function bh(n,e=yh){const t=[];let s=n.slice();for(const i of n){const r=t.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),qr(t)>e){r.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),qr(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class Ih{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return lu()?cu().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await vh(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Hr(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Hr(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function qr(n){return $n(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function Ch(n){ut(new Je("platform-logger",e=>new Bu(e),"PRIVATE")),ut(new Je("heartbeat",e=>new wh(e),"PRIVATE")),Ce(oi,Vr,n),Ce(oi,Vr,"esm2017"),Ce("fire-js","")}Ch("");var Th="firebase",Sh="10.11.1";/**
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
 */Ce(Th,Sh,"app");var zr={};const Gr="@firebase/database",Kr="1.0.4";/**
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
 */let Da="";function Rh(n){Da=n}/**
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
 */class Ah{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),se(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:rn(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class kh{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Re(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Pa=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Ah(e)}}catch{}return new kh},rt=Pa("localStorage"),ci=Pa("sessionStorage");/**
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
 */const It=new Di("@firebase/database"),Nh=function(){let n=1;return function(){return n++}}(),Oa=function(n){const e=yu(n),t=new _u;t.update(e);const s=t.digest();return Ai.encodeByteArray(s)},yn=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=yn.apply(null,s):typeof s=="object"?e+=se(s):e+=s,e+=" "}return e};let ot=null,Yr=!0;const Dh=function(n,e){m(!e||n===!0||n===!1,"Can't turn on custom loggers persistently."),n===!0?(It.logLevel=F.VERBOSE,ot=It.log.bind(It),e&&ci.set("logging_enabled",!0)):typeof n=="function"?ot=n:(ot=null,ci.remove("logging_enabled"))},ie=function(...n){if(Yr===!0&&(Yr=!1,ot===null&&ci.get("logging_enabled")===!0&&Dh(!0)),ot){const e=yn.apply(null,n);ot(e)}},En=function(n){return function(...e){ie(n,...e)}},ui=function(...n){const e="FIREBASE INTERNAL ERROR: "+yn(...n);It.error(e)},xe=function(...n){const e=`FIREBASE FATAL ERROR: ${yn(...n)}`;throw It.error(e),new Error(e)},he=function(...n){const e="FIREBASE WARNING: "+yn(...n);It.warn(e)},Ph=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&he("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},xi=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},Oh=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Dt="[MIN_NAME]",ht="[MAX_NAME]",vt=function(n,e){if(n===e)return 0;if(n===Dt||e===ht)return-1;if(e===Dt||n===ht)return 1;{const t=Qr(n),s=Qr(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},xh=function(n,e){return n===e?0:n<e?-1:1},qt=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+se(e))},Li=function(n){if(typeof n!="object"||n===null)return se(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=se(e[s]),t+=":",t+=Li(n[e[s]]);return t+="}",t},xa=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let i=0;i<t;i+=e)i+e>t?s.push(n.substring(i,t)):s.push(n.substring(i,i+e));return s};function re(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const La=function(n){m(!xi(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let i,r,o,a,l;n===0?(r=0,o=0,i=1/n===-1/0?1:0):(i=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),s),r=a+s,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-s-t))));const c=[];for(l=t;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const h=c.join("");let u="";for(l=0;l<64;l+=8){let d=parseInt(h.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),u=u+d}return u.toLowerCase()},Lh=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Mh=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Uh(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const s=new Error(n+" at "+e._path.toString()+": "+t);return s.code=n.toUpperCase(),s}const Fh=new RegExp("^-?(0*)\\d{1,10}$"),Bh=-2147483648,Wh=2147483647,Qr=function(n){if(Fh.test(n)){const e=Number(n);if(e>=Bh&&e<=Wh)return e}return null},Wt=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw he("Exception was thrown by user callback.",t),e},Math.floor(0))}},Vh=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Xt=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class $h{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){he(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class Hh{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(ie("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',he(e)}}class Ct{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Ct.OWNER="owner";/**
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
 */const Mi="5",Ma="v",Ua="s",Fa="r",Ba="f",Wa=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Va="ls",$a="p",hi="ac",Ha="websocket",ja="long_polling";/**
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
 */class qa{constructor(e,t,s,i,r=!1,o="",a=!1,l=!1){this.secure=t,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=rt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&rt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function jh(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function za(n,e,t){m(typeof e=="string","typeof type must == string"),m(typeof t=="object","typeof params must == object");let s;if(e===Ha)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===ja)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);jh(n)&&(t.ns=n.namespace);const i=[];return re(t,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
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
 */class qh{constructor(){this.counters_={}}incrementCounter(e,t=1){Re(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return eu(this.counters_)}}/**
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
 */const Ms={},Us={};function Ui(n){const e=n.toString();return Ms[e]||(Ms[e]=new qh),Ms[e]}function zh(n,e){const t=n.toString();return Us[t]||(Us[t]=e()),Us[t]}/**
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
 */class Gh{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Wt(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Jr="start",Kh="close",Yh="pLPCommand",Qh="pRTLPCB",Ga="id",Ka="pw",Ya="ser",Jh="cb",Xh="seg",Zh="ts",ed="d",td="dframe",Qa=1870,Ja=30,nd=Qa-Ja,sd=25e3,id=3e4;class wt{constructor(e,t,s,i,r,o,a){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=En(e),this.stats_=Ui(t),this.urlFn=l=>(this.appCheckToken&&(l[hi]=this.appCheckToken),za(t,ja,l))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Gh(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(id)),Oh(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Fi((...r)=>{const[o,a,l,c,h]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Jr)this.id=a,this.password=l;else if(o===Kh)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[Jr]="t",s[Ya]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Jh]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Ma]=Mi,this.transportSessionId&&(s[Ua]=this.transportSessionId),this.lastSessionId&&(s[Va]=this.lastSessionId),this.applicationId&&(s[$a]=this.applicationId),this.appCheckToken&&(s[hi]=this.appCheckToken),typeof location<"u"&&location.hostname&&Wa.test(location.hostname)&&(s[Fa]=Ba);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){wt.forceAllow_=!0}static forceDisallow(){wt.forceDisallow_=!0}static isAvailable(){return wt.forceAllow_?!0:!wt.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Lh()&&!Mh()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=se(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=ga(t),i=xa(s,nd);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[td]="t",s[Ga]=e,s[Ka]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=se(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Fi{constructor(e,t,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Nh(),window[Yh+this.uniqueCallbackIdentifier]=e,window[Qh+this.uniqueCallbackIdentifier]=t,this.myIFrame=Fi.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){ie("frame writing exception"),a.stack&&ie(a.stack),ie(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ie("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Ga]=this.myID,e[Ka]=this.myPW,e[Ya]=this.currentSerial;let t=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Ja+s.length<=Qa;){const o=this.pendingSegs.shift();s=s+"&"+Xh+i+"="+o.seg+"&"+Zh+i+"="+o.ts+"&"+ed+i+"="+o.d,i++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(s,Math.floor(sd)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{ie("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const rd=16384,od=45e3;let Gn=null;typeof MozWebSocket<"u"?Gn=MozWebSocket:typeof WebSocket<"u"&&(Gn=WebSocket);class ye{constructor(e,t,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=En(this.connId),this.stats_=Ui(t),this.connURL=ye.connectionURL_(t,o,a,i,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,i,r){const o={};return o[Ma]=Mi,typeof location<"u"&&location.hostname&&Wa.test(location.hostname)&&(o[Fa]=Ba),t&&(o[Ua]=t),s&&(o[Va]=s),i&&(o[hi]=i),r&&(o[$a]=r),za(e,Ha,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,rt.set("previous_websocket_failure",!0);try{let s;Ca(),this.mySock=new Gn(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){ye.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Gn!==null&&!ye.forceDisallow_}static previouslyFailed(){return rt.isInMemoryStorage||rt.get("previous_websocket_failure")===!0}markConnectionHealthy(){rt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=rn(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(m(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=se(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=xa(t,rd);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(od))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ye.responsesRequiredToBeHealthy=2;ye.healthyTimeout=3e4;/**
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
 */class an{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[wt,ye]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=ye&&ye.isAvailable();let s=t&&!ye.previouslyFailed();if(e.webSocketOnly&&(t||he("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[ye];else{const i=this.transports_=[];for(const r of an.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);an.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}an.globalTransportInitialized_=!1;/**
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
 */const ad=6e4,ld=5e3,cd=10*1024,ud=100*1024,Fs="t",Xr="d",hd="s",Zr="r",dd="e",eo="o",to="a",no="n",so="p",fd="h";class pd{constructor(e,t,s,i,r,o,a,l,c,h){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=En("c:"+this.id+":"),this.transportManager_=new an(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Xt(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>ud?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>cd?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Fs in e){const t=e[Fs];t===to?this.upgradeIfSecondaryHealthy_():t===Zr?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===eo&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=qt("t",e),s=qt("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:so,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:to,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:no,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=qt("t",e),s=qt("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=qt(Fs,e);if(Xr in e){const s=e[Xr];if(t===fd){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(t===no){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===hd?this.onConnectionShutdown_(s):t===Zr?this.onReset_(s):t===dd?ui("Server Error: "+s):t===eo?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ui("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Mi!==s&&he("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),Xt(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(ad))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Xt(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(ld))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:so,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(rt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Xa{put(e,t,s,i){}merge(e,t,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */class Za{constructor(e){this.allowedEvents_=e,this.listeners_={},m(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const i=this.getInitialEvent(e);i&&t.apply(s,i)}off(e,t,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===t&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){m(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class Kn extends Za{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Ni()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Kn}getInitialEvent(e){return m(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const io=32,ro=768;class B{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function M(){return new B("")}function O(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Xe(n){return n.pieces_.length-n.pieceNum_}function q(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new B(n.pieces_,e)}function Bi(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function _d(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function ln(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function el(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new B(e,0)}function K(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof B)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&t.push(s[i])}return new B(t,0)}function L(n){return n.pieceNum_>=n.pieces_.length}function fe(n,e){const t=O(n),s=O(e);if(t===null)return e;if(t===s)return fe(q(n),q(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function gd(n,e){const t=ln(n,0),s=ln(e,0);for(let i=0;i<t.length&&i<s.length;i++){const r=vt(t[i],s[i]);if(r!==0)return r}return t.length===s.length?0:t.length<s.length?-1:1}function Wi(n,e){if(Xe(n)!==Xe(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function ge(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(Xe(n)>Xe(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class md{constructor(e,t){this.errorPrefix_=t,this.parts_=ln(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=hs(this.parts_[s]);tl(this)}}function vd(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=hs(e),tl(n)}function yd(n){const e=n.parts_.pop();n.byteLength_-=hs(e),n.parts_.length>0&&(n.byteLength_-=1)}function tl(n){if(n.byteLength_>ro)throw new Error(n.errorPrefix_+"has a key path longer than "+ro+" bytes ("+n.byteLength_+").");if(n.parts_.length>io)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+io+") or object contains a cycle "+it(n))}function it(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
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
 */class Vi extends Za{constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new Vi}getInitialEvent(e){return m(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const zt=1e3,Ed=60*5*1e3,oo=30*1e3,wd=1.3,bd=3e4,Id="server_kill",ao=3;class Oe extends Xa{constructor(e,t,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Oe.nextPersistentConnectionId_++,this.log_=En("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=zt,this.maxReconnectDelay_=Ed,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Ca())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Vi.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Kn.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(se(r)),m(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const t=new mn,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),m(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),m(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:t,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;Oe.warnOnListenWarnings_(l,t),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Re(e,"w")){const s=Nt(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();he(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||pu(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=oo)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=fu(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),m(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,t)}sendUnlisten_(e,t,s,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,i){const r={p:t,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,t,s,i){this.putInternal("p",e,t,s,i)}merge(e,t,s,i){this.putInternal("m",e,t,s,i)}putInternal(e,t,s,i,r){this.initConnection_();const o={p:t,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+se(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):ui("Unrecognized action received from server: "+se(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){m(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=zt,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=zt,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>bd&&(this.reconnectDelay_=zt),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*wd)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Oe.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(u){m(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(u)};this.realtime_={close:l,sendRequest:c};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[u,d]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?ie("getToken() completed but was canceled"):(ie("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=d&&d.token,a=new pd(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,f=>{he(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(Id)},r))}catch(u){this.log_("Failed to get token: "+u),o||(this.repoInfo_.nodeAdmin&&he(u),l())}}}interrupt(e){ie("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ie("Resuming connection for reason: "+e),delete this.interruptReasons_[e],si(this.interruptReasons_)&&(this.reconnectDelay_=zt,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(r=>Li(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const s=new B(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(t),r.delete(t),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,t){ie("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=ao&&(this.reconnectDelay_=oo,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){ie("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=ao&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+Da.replace(/\./g,"-")]=1,Ni()?e["framework.cordova"]=1:Ia()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Kn.getInstance().currentlyOnline();return si(this.interruptReasons_)&&e}}Oe.nextPersistentConnectionId_=0;Oe.nextConnectionId_=0;/**
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
 */class x{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new x(e,t)}}/**
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
 */class fs{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new x(Dt,e),i=new x(Dt,t);return this.compare(s,i)!==0}minPost(){return x.MIN}}/**
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
 */let kn;class nl extends fs{static get __EMPTY_NODE(){return kn}static set __EMPTY_NODE(e){kn=e}compare(e,t){return vt(e.name,t.name)}isDefinedOn(e){throw Ft("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return x.MIN}maxPost(){return new x(ht,kn)}makePost(e,t){return m(typeof e=="string","KeyIndex indexValue must always be a string."),new x(e,kn)}toString(){return".key"}}const Tt=new nl;/**
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
 */class Nn{constructor(e,t,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?s(e.key,t):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class te{constructor(e,t,s,i,r){this.key=e,this.value=t,this.color=s??te.RED,this.left=i??pe.EMPTY_NODE,this.right=r??pe.EMPTY_NODE}copy(e,t,s,i,r){return new te(e??this.key,t??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,t,s),null):r===0?i=i.copy(null,t,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return pe.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,i;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return pe.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,te.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,te.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}te.RED=!0;te.BLACK=!1;class Cd{copy(e,t,s,i,r){return this}insert(e,t,s){return new te(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class pe{constructor(e,t=pe.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new pe(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,te.BLACK,null,null))}remove(e){return new pe(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,te.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,i=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Nn(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Nn(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Nn(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Nn(this.root_,null,this.comparator_,!0,e)}}pe.EMPTY_NODE=new Cd;/**
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
 */function Td(n,e){return vt(n.name,e.name)}function $i(n,e){return vt(n,e)}/**
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
 */let di;function Sd(n){di=n}const sl=function(n){return typeof n=="number"?"number:"+La(n):"string:"+n},il=function(n){if(n.isLeafNode()){const e=n.val();m(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Re(e,".sv"),"Priority must be a string or number.")}else m(n===di||n.isEmpty(),"priority of unexpected type.");m(n===di||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let lo;class ee{constructor(e,t=ee.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,m(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),il(this.priorityNode_)}static set __childrenNodeConstructor(e){lo=e}static get __childrenNodeConstructor(){return lo}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ee(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ee.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return L(e)?this:O(e)===".priority"?this.priorityNode_:ee.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:ee.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=O(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(m(s!==".priority"||Xe(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,ee.__childrenNodeConstructor.EMPTY_NODE.updateChild(q(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+sl(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=La(this.value_):e+=this.value_,this.lazyHash_=Oa(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ee.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ee.__childrenNodeConstructor?-1:(m(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,i=ee.VALUE_TYPE_ORDER.indexOf(t),r=ee.VALUE_TYPE_ORDER.indexOf(s);return m(i>=0,"Unknown leaf type: "+t),m(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}ee.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let rl,ol;function Rd(n){rl=n}function Ad(n){ol=n}class kd extends fs{compare(e,t){const s=e.node.getPriority(),i=t.node.getPriority(),r=s.compareTo(i);return r===0?vt(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return x.MIN}maxPost(){return new x(ht,new ee("[PRIORITY-POST]",ol))}makePost(e,t){const s=rl(e);return new x(t,new ee("[PRIORITY-POST]",s))}toString(){return".priority"}}const Y=new kd;/**
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
 */const Nd=Math.log(2);class Dd{constructor(e){const t=r=>parseInt(Math.log(r)/Nd,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Yn=function(n,e,t,s){n.sort(e);const i=function(l,c){const h=c-l;let u,d;if(h===0)return null;if(h===1)return u=n[l],d=t?t(u):u,new te(d,u.node,te.BLACK,null,null);{const f=parseInt(h/2,10)+l,_=i(l,f),v=i(f+1,c);return u=n[f],d=t?t(u):u,new te(d,u.node,te.BLACK,_,v)}},r=function(l){let c=null,h=null,u=n.length;const d=function(_,v){const E=u-_,y=u;u-=_;const C=i(E+1,y),g=n[E],T=t?t(g):g;f(new te(T,g.node,v,null,C))},f=function(_){c?(c.left=_,c=_):(h=_,c=_)};for(let _=0;_<l.count;++_){const v=l.nextBitIsOne(),E=Math.pow(2,l.count-(_+1));v?d(E,te.BLACK):(d(E,te.BLACK),d(E,te.RED))}return h},o=new Dd(n.length),a=r(o);return new pe(s||e,a)};/**
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
 */let Bs;const Et={};class ke{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return m(Et&&Y,"ChildrenNode.ts has not been loaded"),Bs=Bs||new ke({".priority":Et},{".priority":Y}),Bs}get(e){const t=Nt(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof pe?t:null}hasIndex(e){return Re(this.indexSet_,e.toString())}addIndex(e,t){m(e!==Tt,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=t.getIterator(x.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=Yn(s,e.getCompare()):a=Et;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const h=Object.assign({},this.indexes_);return h[l]=a,new ke(h,c)}addToIndexes(e,t){const s=jn(this.indexes_,(i,r)=>{const o=Nt(this.indexSet_,r);if(m(o,"Missing index implementation for "+r),i===Et)if(o.isDefinedOn(e.node)){const a=[],l=t.getIterator(x.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Yn(a,o.getCompare())}else return Et;else{const a=t.get(e.name);let l=i;return a&&(l=l.remove(new x(e.name,a))),l.insert(e,e.node)}});return new ke(s,this.indexSet_)}removeFromIndexes(e,t){const s=jn(this.indexes_,i=>{if(i===Et)return i;{const r=t.get(e.name);return r?i.remove(new x(e.name,r)):i}});return new ke(s,this.indexSet_)}}/**
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
 */let Gt;class R{constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&il(this.priorityNode_),this.children_.isEmpty()&&m(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Gt||(Gt=new R(new pe($i),null,ke.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Gt}updatePriority(e){return this.children_.isEmpty()?this:new R(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Gt:t}}getChild(e){const t=O(e);return t===null?this:this.getImmediateChild(t).getChild(q(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(m(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new x(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Gt:this.priorityNode_;return new R(i,o,r)}}updateChild(e,t){const s=O(e);if(s===null)return t;{m(O(e)!==".priority"||Xe(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(q(e),t);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,i=0,r=!0;if(this.forEachChild(Y,(o,a)=>{t[o]=a.val(e),s++,r&&R.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+sl(this.getPriority().val())+":"),this.forEachChild(Y,(t,s)=>{const i=s.hash();i!==""&&(e+=":"+t+":"+i)}),this.lazyHash_=e===""?"":Oa(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new x(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new x(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new x(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>t(i.name,i.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,x.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,x.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===wn?-1:0}withIndex(e){if(e===Tt||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new R(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Tt||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(Y),i=t.getIterator(Y);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Tt?null:this.indexMap_.get(e.toString())}}R.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Pd extends R{constructor(){super(new pe($i),R.EMPTY_NODE,ke.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return R.EMPTY_NODE}isEmpty(){return!1}}const wn=new Pd;Object.defineProperties(x,{MIN:{value:new x(Dt,R.EMPTY_NODE)},MAX:{value:new x(ht,wn)}});nl.__EMPTY_NODE=R.EMPTY_NODE;ee.__childrenNodeConstructor=R;Sd(wn);Ad(wn);/**
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
 */const Od=!0;function ne(n,e=null){if(n===null)return R.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),m(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new ee(t,ne(e))}if(!(n instanceof Array)&&Od){const t=[];let s=!1;if(re(n,(o,a)=>{if(o.substring(0,1)!=="."){const l=ne(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),t.push(new x(o,l)))}}),t.length===0)return R.EMPTY_NODE;const r=Yn(t,Td,o=>o.name,$i);if(s){const o=Yn(t,Y.getCompare());return new R(r,ne(e),new ke({".priority":o},{".priority":Y}))}else return new R(r,ne(e),ke.Default)}else{let t=R.EMPTY_NODE;return re(n,(s,i)=>{if(Re(n,s)&&s.substring(0,1)!=="."){const r=ne(i);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(s,r))}}),t.updatePriority(ne(e))}}Rd(ne);/**
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
 */class xd extends fs{constructor(e){super(),this.indexPath_=e,m(!L(e)&&O(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),i=this.extractChild(t.node),r=s.compareTo(i);return r===0?vt(e.name,t.name):r}makePost(e,t){const s=ne(e),i=R.EMPTY_NODE.updateChild(this.indexPath_,s);return new x(t,i)}maxPost(){const e=R.EMPTY_NODE.updateChild(this.indexPath_,wn);return new x(ht,e)}toString(){return ln(this.indexPath_,0).join("/")}}/**
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
 */class Ld extends fs{compare(e,t){const s=e.node.compareTo(t.node);return s===0?vt(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return x.MIN}maxPost(){return x.MAX}makePost(e,t){const s=ne(e);return new x(t,s)}toString(){return".value"}}const Md=new Ld;/**
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
 */function al(n){return{type:"value",snapshotNode:n}}function Pt(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function cn(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function un(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function Ud(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
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
 */class Hi{constructor(e){this.index_=e}updateChild(e,t,s,i,r,o){m(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(t)?o.trackChildChange(cn(t,a)):m(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Pt(t,s)):o.trackChildChange(un(t,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(t,s).withIndex(this.index_)}updateFullNode(e,t,s){return s!=null&&(e.isLeafNode()||e.forEachChild(Y,(i,r)=>{t.hasChild(i)||s.trackChildChange(cn(i,r))}),t.isLeafNode()||t.forEachChild(Y,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(un(i,r,o))}else s.trackChildChange(Pt(i,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?R.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class hn{constructor(e){this.indexedFilter_=new Hi(e.getIndex()),this.index_=e.getIndex(),this.startPost_=hn.getStartPost_(e),this.endPost_=hn.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&s}updateChild(e,t,s,i,r,o){return this.matches(new x(t,s))||(s=R.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,s,i,r,o)}updateFullNode(e,t,s){t.isLeafNode()&&(t=R.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(R.EMPTY_NODE);const r=this;return t.forEachChild(Y,(o,a)=>{r.matches(new x(o,a))||(i=i.updateImmediateChild(o,R.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
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
 */class Fd{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=t=>{const s=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new hn(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,s,i,r,o){return this.rangedFilter_.matches(new x(t,s))||(s=R.EMPTY_NODE),e.getImmediateChild(t).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,s,i,r,o):this.fullLimitUpdateChild_(e,t,s,r,o)}updateFullNode(e,t,s){let i;if(t.isLeafNode()||t.isEmpty())i=R.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){i=R.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=t.withIndex(this.index_),i=i.updatePriority(R.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,R.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,s,i,r){let o;if(this.reverse_){const u=this.index_.getCompare();o=(d,f)=>u(f,d)}else o=this.index_.getCompare();const a=e;m(a.numChildren()===this.limit_,"");const l=new x(t,s),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),h=this.rangedFilter_.matches(l);if(a.hasChild(t)){const u=a.getImmediateChild(t);let d=i.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===t||a.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const f=d==null?1:o(d,l);if(h&&!s.isEmpty()&&f>=0)return r!=null&&r.trackChildChange(un(t,s,u)),a.updateImmediateChild(t,s);{r!=null&&r.trackChildChange(cn(t,u));const v=a.updateImmediateChild(t,R.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(Pt(d.name,d.node)),v.updateImmediateChild(d.name,d.node)):v}}else return s.isEmpty()?e:h&&o(c,l)>=0?(r!=null&&(r.trackChildChange(cn(c.name,c.node)),r.trackChildChange(Pt(t,s))),a.updateImmediateChild(t,s).updateImmediateChild(c.name,R.EMPTY_NODE)):e}}/**
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
 */class ji{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Y}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return m(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return m(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Dt}hasEnd(){return this.endSet_}getIndexEndValue(){return m(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return m(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ht}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return m(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Y}copy(){const e=new ji;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Bd(n){return n.loadsAllData()?new Hi(n.getIndex()):n.hasLimit()?new Fd(n):new hn(n)}function co(n){const e={};if(n.isDefault())return e;let t;if(n.index_===Y?t="$priority":n.index_===Md?t="$value":n.index_===Tt?t="$key":(m(n.index_ instanceof xd,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=se(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=se(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+se(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=se(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+se(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function uo(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==Y&&(e.i=n.index_.toString()),e}/**
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
 */class Qn extends Xa{constructor(e,t,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=En("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(m(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Qn.getListenId_(e,s),a={};this.listens_[o]=a;const l=co(e._queryParams);this.restRequest_(r+".json",l,(c,h)=>{let u=h;if(c===404&&(u=null,c=null),c===null&&this.onDataUpdate_(r,u,!1,s),Nt(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,t){const s=Qn.getListenId_(e,t);delete this.listens_[s]}get(e){const t=co(e._queryParams),s=e._path.toString(),i=new mn;return this.restRequest_(s+".json",t,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Bt(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=rn(a.responseText)}catch{he("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&he("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class Wd{constructor(){this.rootNode_=R.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */function Jn(){return{value:null,children:new Map}}function ll(n,e,t){if(L(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=O(e);n.children.has(s)||n.children.set(s,Jn());const i=n.children.get(s);e=q(e),ll(i,e,t)}}function fi(n,e,t){n.value!==null?t(e,n.value):Vd(n,(s,i)=>{const r=new B(e.toString()+"/"+s);fi(i,r,t)})}function Vd(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
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
 */class $d{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&re(this.last_,(s,i)=>{t[s]=t[s]-i}),this.last_=e,t}}/**
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
 */const ho=10*1e3,Hd=30*1e3,jd=5*60*1e3;class qd{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new $d(e);const s=ho+(Hd-ho)*Math.random();Xt(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;re(e,(i,r)=>{r>0&&Re(this.statsToReport_,i)&&(t[i]=r,s=!0)}),s&&this.server_.reportStats(t),Xt(this.reportStats_.bind(this),Math.floor(Math.random()*2*jd))}}/**
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
 */var Ee;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Ee||(Ee={}));function qi(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function zi(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Gi(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
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
 */class Xn{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=Ee.ACK_USER_WRITE,this.source=qi()}operationForChild(e){if(L(this.path)){if(this.affectedTree.value!=null)return m(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new B(e));return new Xn(M(),t,this.revert)}}else return m(O(this.path)===e,"operationForChild called for unrelated child."),new Xn(q(this.path),this.affectedTree,this.revert)}}/**
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
 */class dn{constructor(e,t){this.source=e,this.path=t,this.type=Ee.LISTEN_COMPLETE}operationForChild(e){return L(this.path)?new dn(this.source,M()):new dn(this.source,q(this.path))}}/**
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
 */class dt{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=Ee.OVERWRITE}operationForChild(e){return L(this.path)?new dt(this.source,M(),this.snap.getImmediateChild(e)):new dt(this.source,q(this.path),this.snap)}}/**
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
 */class Ot{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=Ee.MERGE}operationForChild(e){if(L(this.path)){const t=this.children.subtree(new B(e));return t.isEmpty()?null:t.value?new dt(this.source,M(),t.value):new Ot(this.source,M(),t)}else return m(O(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ot(this.source,q(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class ft{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(L(e))return this.isFullyInitialized()&&!this.filtered_;const t=O(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class zd{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Gd(n,e,t,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Ud(o.childName,o.snapshotNode))}),Kt(n,i,"child_removed",e,s,t),Kt(n,i,"child_added",e,s,t),Kt(n,i,"child_moved",r,s,t),Kt(n,i,"child_changed",e,s,t),Kt(n,i,"value",e,s,t),i}function Kt(n,e,t,s,i,r){const o=s.filter(a=>a.type===t);o.sort((a,l)=>Yd(n,a,l)),o.forEach(a=>{const l=Kd(n,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,n.query_))})})}function Kd(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function Yd(n,e,t){if(e.childName==null||t.childName==null)throw Ft("Should only compare child_ events.");const s=new x(e.childName,e.snapshotNode),i=new x(t.childName,t.snapshotNode);return n.index_.compare(s,i)}/**
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
 */function ps(n,e){return{eventCache:n,serverCache:e}}function Zt(n,e,t,s){return ps(new ft(e,t,s),n.serverCache)}function cl(n,e,t,s){return ps(n.eventCache,new ft(e,t,s))}function pi(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function pt(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
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
 */let Ws;const Qd=()=>(Ws||(Ws=new pe(xh)),Ws);class j{constructor(e,t=Qd()){this.value=e,this.children=t}static fromObject(e){let t=new j(null);return re(e,(s,i)=>{t=t.set(new B(s),i)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:M(),value:this.value};if(L(e))return null;{const s=O(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(q(e),t);return r!=null?{path:K(new B(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(L(e))return this;{const t=O(e),s=this.children.get(t);return s!==null?s.subtree(q(e)):new j(null)}}set(e,t){if(L(e))return new j(t,this.children);{const s=O(e),r=(this.children.get(s)||new j(null)).set(q(e),t),o=this.children.insert(s,r);return new j(this.value,o)}}remove(e){if(L(e))return this.children.isEmpty()?new j(null):new j(null,this.children);{const t=O(e),s=this.children.get(t);if(s){const i=s.remove(q(e));let r;return i.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,i),this.value===null&&r.isEmpty()?new j(null):new j(this.value,r)}else return this}}get(e){if(L(e))return this.value;{const t=O(e),s=this.children.get(t);return s?s.get(q(e)):null}}setTree(e,t){if(L(e))return t;{const s=O(e),r=(this.children.get(s)||new j(null)).setTree(q(e),t);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new j(this.value,o)}}fold(e){return this.fold_(M(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(K(e,i),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,M(),t)}findOnPath_(e,t,s){const i=this.value?s(t,this.value):!1;if(i)return i;if(L(e))return null;{const r=O(e),o=this.children.get(r);return o?o.findOnPath_(q(e),K(t,r),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,M(),t)}foreachOnPath_(e,t,s){if(L(e))return this;{this.value&&s(t,this.value);const i=O(e),r=this.children.get(i);return r?r.foreachOnPath_(q(e),K(t,i),s):new j(null)}}foreach(e){this.foreach_(M(),e)}foreach_(e,t){this.children.inorderTraversal((s,i)=>{i.foreach_(K(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
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
 */class we{constructor(e){this.writeTree_=e}static empty(){return new we(new j(null))}}function en(n,e,t){if(L(e))return new we(new j(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=fe(i,e);return r=r.updateChild(o,t),new we(n.writeTree_.set(i,r))}else{const i=new j(t),r=n.writeTree_.setTree(e,i);return new we(r)}}}function _i(n,e,t){let s=n;return re(t,(i,r)=>{s=en(s,K(e,i),r)}),s}function fo(n,e){if(L(e))return we.empty();{const t=n.writeTree_.setTree(e,new j(null));return new we(t)}}function gi(n,e){return yt(n,e)!=null}function yt(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(fe(t.path,e)):null}function po(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(Y,(s,i)=>{e.push(new x(s,i))}):n.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new x(s,i.value))}),e}function Qe(n,e){if(L(e))return n;{const t=yt(n,e);return t!=null?new we(new j(t)):new we(n.writeTree_.subtree(e))}}function mi(n){return n.writeTree_.isEmpty()}function xt(n,e){return ul(M(),n.writeTree_,e)}function ul(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(m(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):t=ul(K(n,i),r,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(K(n,".priority"),s)),t}}/**
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
 */function Ki(n,e){return pl(e,n)}function Jd(n,e,t,s,i){m(s>n.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:i}),i&&(n.visibleWrites=en(n.visibleWrites,e,t)),n.lastWriteId=s}function Xd(n,e,t,s){m(s>n.lastWriteId,"Stacking an older merge on top of newer ones"),n.allWrites.push({path:e,children:t,writeId:s,visible:!0}),n.visibleWrites=_i(n.visibleWrites,e,t),n.lastWriteId=s}function Zd(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function ef(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);m(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let i=s.visible,r=!1,o=n.allWrites.length-1;for(;i&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&tf(a,s.path)?i=!1:ge(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return nf(n),!0;if(s.snap)n.visibleWrites=fo(n.visibleWrites,s.path);else{const a=s.children;re(a,l=>{n.visibleWrites=fo(n.visibleWrites,K(s.path,l))})}return!0}else return!1}function tf(n,e){if(n.snap)return ge(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&ge(K(n.path,t),e))return!0;return!1}function nf(n){n.visibleWrites=hl(n.allWrites,sf,M()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function sf(n){return n.visible}function hl(n,e,t){let s=we.empty();for(let i=0;i<n.length;++i){const r=n[i];if(e(r)){const o=r.path;let a;if(r.snap)ge(t,o)?(a=fe(t,o),s=en(s,a,r.snap)):ge(o,t)&&(a=fe(o,t),s=en(s,M(),r.snap.getChild(a)));else if(r.children){if(ge(t,o))a=fe(t,o),s=_i(s,a,r.children);else if(ge(o,t))if(a=fe(o,t),L(a))s=_i(s,M(),r.children);else{const l=Nt(r.children,O(a));if(l){const c=l.getChild(q(a));s=en(s,M(),c)}}}else throw Ft("WriteRecord should have .snap or .children")}}return s}function dl(n,e,t,s,i){if(!s&&!i){const r=yt(n.visibleWrites,e);if(r!=null)return r;{const o=Qe(n.visibleWrites,e);if(mi(o))return t;if(t==null&&!gi(o,M()))return null;{const a=t||R.EMPTY_NODE;return xt(o,a)}}}else{const r=Qe(n.visibleWrites,e);if(!i&&mi(r))return t;if(!i&&t==null&&!gi(r,M()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(ge(c.path,e)||ge(e,c.path))},a=hl(n.allWrites,o,e),l=t||R.EMPTY_NODE;return xt(a,l)}}}function rf(n,e,t){let s=R.EMPTY_NODE;const i=yt(n.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Y,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(t){const r=Qe(n.visibleWrites,e);return t.forEachChild(Y,(o,a)=>{const l=xt(Qe(r,new B(o)),a);s=s.updateImmediateChild(o,l)}),po(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Qe(n.visibleWrites,e);return po(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function of(n,e,t,s,i){m(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=K(e,t);if(gi(n.visibleWrites,r))return null;{const o=Qe(n.visibleWrites,r);return mi(o)?i.getChild(t):xt(o,i.getChild(t))}}function af(n,e,t,s){const i=K(e,t),r=yt(n.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(t)){const o=Qe(n.visibleWrites,i);return xt(o,s.getNode().getImmediateChild(t))}else return null}function lf(n,e){return yt(n.visibleWrites,e)}function cf(n,e,t,s,i,r,o){let a;const l=Qe(n.visibleWrites,e),c=yt(l,M());if(c!=null)a=c;else if(t!=null)a=xt(l,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const h=[],u=o.getCompare(),d=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let f=d.getNext();for(;f&&h.length<i;)u(f,s)!==0&&h.push(f),f=d.getNext();return h}else return[]}function uf(){return{visibleWrites:we.empty(),allWrites:[],lastWriteId:-1}}function Zn(n,e,t,s){return dl(n.writeTree,n.treePath,e,t,s)}function Yi(n,e){return rf(n.writeTree,n.treePath,e)}function _o(n,e,t,s){return of(n.writeTree,n.treePath,e,t,s)}function es(n,e){return lf(n.writeTree,K(n.treePath,e))}function hf(n,e,t,s,i,r){return cf(n.writeTree,n.treePath,e,t,s,i,r)}function Qi(n,e,t){return af(n.writeTree,n.treePath,e,t)}function fl(n,e){return pl(K(n.treePath,e),n.writeTree)}function pl(n,e){return{treePath:n,writeTree:e}}/**
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
 */class df{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;m(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),m(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(s,un(s,e.snapshotNode,i.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(s,cn(s,i.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(s,Pt(s,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(s,un(s,e.snapshotNode,i.oldSnap));else throw Ft("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class ff{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const _l=new ff;class Ji{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new ft(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Qi(this.writes_,e,s)}}getChildAfterChild(e,t,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:pt(this.viewCache_),r=hf(this.writes_,i,t,1,s,e);return r.length===0?null:r[0]}}/**
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
 */function pf(n){return{filter:n}}function _f(n,e){m(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),m(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function gf(n,e,t,s,i){const r=new df;let o,a;if(t.type===Ee.OVERWRITE){const c=t;c.source.fromUser?o=vi(n,e,c.path,c.snap,s,i,r):(m(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!L(c.path),o=ts(n,e,c.path,c.snap,s,i,a,r))}else if(t.type===Ee.MERGE){const c=t;c.source.fromUser?o=vf(n,e,c.path,c.children,s,i,r):(m(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=yi(n,e,c.path,c.children,s,i,a,r))}else if(t.type===Ee.ACK_USER_WRITE){const c=t;c.revert?o=wf(n,e,c.path,s,i,r):o=yf(n,e,c.path,c.affectedTree,s,i,r)}else if(t.type===Ee.LISTEN_COMPLETE)o=Ef(n,e,t.path,s,r);else throw Ft("Unknown operation type: "+t.type);const l=r.getChanges();return mf(e,o,l),{viewCache:o,changes:l}}function mf(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=pi(n);(t.length>0||!n.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&t.push(al(pi(e)))}}function gl(n,e,t,s,i,r){const o=e.eventCache;if(es(s,t)!=null)return e;{let a,l;if(L(t))if(m(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=pt(e),h=c instanceof R?c:R.EMPTY_NODE,u=Yi(s,h);a=n.filter.updateFullNode(e.eventCache.getNode(),u,r)}else{const c=Zn(s,pt(e));a=n.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=O(t);if(c===".priority"){m(Xe(t)===1,"Can't have a priority with additional path components");const h=o.getNode();l=e.serverCache.getNode();const u=_o(s,t,h,l);u!=null?a=n.filter.updatePriority(h,u):a=o.getNode()}else{const h=q(t);let u;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=_o(s,t,o.getNode(),l);d!=null?u=o.getNode().getImmediateChild(c).updateChild(h,d):u=o.getNode().getImmediateChild(c)}else u=Qi(s,c,e.serverCache);u!=null?a=n.filter.updateChild(o.getNode(),c,u,h,i,r):a=o.getNode()}}return Zt(e,a,o.isFullyInitialized()||L(t),n.filter.filtersNodes())}}function ts(n,e,t,s,i,r,o,a){const l=e.serverCache;let c;const h=o?n.filter:n.filter.getIndexedFilter();if(L(t))c=h.updateFullNode(l.getNode(),s,null);else if(h.filtersNodes()&&!l.isFiltered()){const f=l.getNode().updateChild(t,s);c=h.updateFullNode(l.getNode(),f,null)}else{const f=O(t);if(!l.isCompleteForPath(t)&&Xe(t)>1)return e;const _=q(t),E=l.getNode().getImmediateChild(f).updateChild(_,s);f===".priority"?c=h.updatePriority(l.getNode(),E):c=h.updateChild(l.getNode(),f,E,_,_l,null)}const u=cl(e,c,l.isFullyInitialized()||L(t),h.filtersNodes()),d=new Ji(i,u,r);return gl(n,u,t,i,d,a)}function vi(n,e,t,s,i,r,o){const a=e.eventCache;let l,c;const h=new Ji(i,e,r);if(L(t))c=n.filter.updateFullNode(e.eventCache.getNode(),s,o),l=Zt(e,c,!0,n.filter.filtersNodes());else{const u=O(t);if(u===".priority")c=n.filter.updatePriority(e.eventCache.getNode(),s),l=Zt(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=q(t),f=a.getNode().getImmediateChild(u);let _;if(L(d))_=s;else{const v=h.getCompleteChild(u);v!=null?Bi(d)===".priority"&&v.getChild(el(d)).isEmpty()?_=v:_=v.updateChild(d,s):_=R.EMPTY_NODE}if(f.equals(_))l=e;else{const v=n.filter.updateChild(a.getNode(),u,_,d,h,o);l=Zt(e,v,a.isFullyInitialized(),n.filter.filtersNodes())}}}return l}function go(n,e){return n.eventCache.isCompleteForChild(e)}function vf(n,e,t,s,i,r,o){let a=e;return s.foreach((l,c)=>{const h=K(t,l);go(e,O(h))&&(a=vi(n,a,h,c,i,r,o))}),s.foreach((l,c)=>{const h=K(t,l);go(e,O(h))||(a=vi(n,a,h,c,i,r,o))}),a}function mo(n,e,t){return t.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function yi(n,e,t,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;L(t)?c=s:c=new j(null).setTree(t,s);const h=e.serverCache.getNode();return c.children.inorderTraversal((u,d)=>{if(h.hasChild(u)){const f=e.serverCache.getNode().getImmediateChild(u),_=mo(n,f,d);l=ts(n,l,new B(u),_,i,r,o,a)}}),c.children.inorderTraversal((u,d)=>{const f=!e.serverCache.isCompleteForChild(u)&&d.value===null;if(!h.hasChild(u)&&!f){const _=e.serverCache.getNode().getImmediateChild(u),v=mo(n,_,d);l=ts(n,l,new B(u),v,i,r,o,a)}}),l}function yf(n,e,t,s,i,r,o){if(es(i,t)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(L(t)&&l.isFullyInitialized()||l.isCompleteForPath(t))return ts(n,e,t,l.getNode().getChild(t),i,r,a,o);if(L(t)){let c=new j(null);return l.getNode().forEachChild(Tt,(h,u)=>{c=c.set(new B(h),u)}),yi(n,e,t,c,i,r,a,o)}else return e}else{let c=new j(null);return s.foreach((h,u)=>{const d=K(t,h);l.isCompleteForPath(d)&&(c=c.set(h,l.getNode().getChild(d)))}),yi(n,e,t,c,i,r,a,o)}}function Ef(n,e,t,s,i){const r=e.serverCache,o=cl(e,r.getNode(),r.isFullyInitialized()||L(t),r.isFiltered());return gl(n,o,t,s,_l,i)}function wf(n,e,t,s,i,r){let o;if(es(s,t)!=null)return e;{const a=new Ji(s,e,i),l=e.eventCache.getNode();let c;if(L(t)||O(t)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=Zn(s,pt(e));else{const u=e.serverCache.getNode();m(u instanceof R,"serverChildren would be complete if leaf node"),h=Yi(s,u)}h=h,c=n.filter.updateFullNode(l,h,r)}else{const h=O(t);let u=Qi(s,h,e.serverCache);u==null&&e.serverCache.isCompleteForChild(h)&&(u=l.getImmediateChild(h)),u!=null?c=n.filter.updateChild(l,h,u,q(t),a,r):e.eventCache.getNode().hasChild(h)?c=n.filter.updateChild(l,h,R.EMPTY_NODE,q(t),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Zn(s,pt(e)),o.isLeafNode()&&(c=n.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||es(s,M())!=null,Zt(e,c,o,n.filter.filtersNodes())}}/**
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
 */class bf{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new Hi(s.getIndex()),r=Bd(s);this.processor_=pf(r);const o=t.serverCache,a=t.eventCache,l=i.updateFullNode(R.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(R.EMPTY_NODE,a.getNode(),null),h=new ft(l,o.isFullyInitialized(),i.filtersNodes()),u=new ft(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=ps(u,h),this.eventGenerator_=new zd(this.query_)}get query(){return this.query_}}function If(n){return n.viewCache_.serverCache.getNode()}function Cf(n,e){const t=pt(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!L(e)&&!t.getImmediateChild(O(e)).isEmpty())?t.getChild(e):null}function vo(n){return n.eventRegistrations_.length===0}function Tf(n,e){n.eventRegistrations_.push(e)}function yo(n,e,t){const s=[];if(t){m(e==null,"A cancel should cancel all event registrations.");const i=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=i}else n.eventRegistrations_=[];return s}function Eo(n,e,t,s){e.type===Ee.MERGE&&e.source.queryId!==null&&(m(pt(n.viewCache_),"We should always have a full cache before handling merges"),m(pi(n.viewCache_),"Missing event cache, even though we have a server cache"));const i=n.viewCache_,r=gf(n.processor_,i,e,t,s);return _f(n.processor_,r.viewCache),m(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,ml(n,r.changes,r.viewCache.eventCache.getNode(),null)}function Sf(n,e){const t=n.viewCache_.eventCache,s=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(Y,(r,o)=>{s.push(Pt(r,o))}),t.isFullyInitialized()&&s.push(al(t.getNode())),ml(n,s,t.getNode(),e)}function ml(n,e,t,s){const i=s?[s]:n.eventRegistrations_;return Gd(n.eventGenerator_,e,t,i)}/**
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
 */let ns;class Rf{constructor(){this.views=new Map}}function Af(n){m(!ns,"__referenceConstructor has already been defined"),ns=n}function kf(){return m(ns,"Reference.ts has not been loaded"),ns}function Nf(n){return n.views.size===0}function Xi(n,e,t,s){const i=e.source.queryId;if(i!==null){const r=n.views.get(i);return m(r!=null,"SyncTree gave us an op for an invalid query."),Eo(r,e,t,s)}else{let r=[];for(const o of n.views.values())r=r.concat(Eo(o,e,t,s));return r}}function Df(n,e,t,s,i){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let a=Zn(t,i?s:null),l=!1;a?l=!0:s instanceof R?(a=Yi(t,s),l=!1):(a=R.EMPTY_NODE,l=!1);const c=ps(new ft(a,l,!1),new ft(s,i,!1));return new bf(e,c)}return o}function Pf(n,e,t,s,i,r){const o=Df(n,e,s,i,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),Tf(o,t),Sf(o,t)}function Of(n,e,t,s){const i=e._queryIdentifier,r=[];let o=[];const a=Ze(n);if(i==="default")for(const[l,c]of n.views.entries())o=o.concat(yo(c,t,s)),vo(c)&&(n.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=n.views.get(i);l&&(o=o.concat(yo(l,t,s)),vo(l)&&(n.views.delete(i),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!Ze(n)&&r.push(new(kf())(e._repo,e._path)),{removed:r,events:o}}function vl(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function St(n,e){let t=null;for(const s of n.views.values())t=t||Cf(s,e);return t}function yl(n,e){if(e._queryParams.loadsAllData())return _s(n);{const s=e._queryIdentifier;return n.views.get(s)}}function El(n,e){return yl(n,e)!=null}function Ze(n){return _s(n)!=null}function _s(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let ss;function xf(n){m(!ss,"__referenceConstructor has already been defined"),ss=n}function Lf(){return m(ss,"Reference.ts has not been loaded"),ss}let Mf=1;class wo{constructor(e){this.listenProvider_=e,this.syncPointTree_=new j(null),this.pendingWriteTree_=uf(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function wl(n,e,t,s,i){return Jd(n.pendingWriteTree_,e,t,s,i),i?Vt(n,new dt(qi(),e,t)):[]}function Uf(n,e,t,s){Xd(n.pendingWriteTree_,e,t,s);const i=j.fromObject(t);return Vt(n,new Ot(qi(),e,i))}function Ge(n,e,t=!1){const s=Zd(n.pendingWriteTree_,e);if(ef(n.pendingWriteTree_,e)){let r=new j(null);return s.snap!=null?r=r.set(M(),!0):re(s.children,o=>{r=r.set(new B(o),!0)}),Vt(n,new Xn(s.path,r,t))}else return[]}function gs(n,e,t){return Vt(n,new dt(zi(),e,t))}function Ff(n,e,t){const s=j.fromObject(t);return Vt(n,new Ot(zi(),e,s))}function Bf(n,e){return Vt(n,new dn(zi(),e))}function Wf(n,e,t){const s=er(n,t);if(s){const i=tr(s),r=i.path,o=i.queryId,a=fe(r,e),l=new dn(Gi(o),a);return nr(n,r,l)}else return[]}function Ei(n,e,t,s,i=!1){const r=e._path,o=n.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||El(o,e))){const l=Of(o,e,t,s);Nf(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!i){const h=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,u=n.syncPointTree_.findOnPath(r,(d,f)=>Ze(f));if(h&&!u){const d=n.syncPointTree_.subtree(r);if(!d.isEmpty()){const f=Hf(d);for(let _=0;_<f.length;++_){const v=f[_],E=v.query,y=Cl(n,v);n.listenProvider_.startListening(tn(E),is(n,E),y.hashFn,y.onComplete)}}}!u&&c.length>0&&!s&&(h?n.listenProvider_.stopListening(tn(e),null):c.forEach(d=>{const f=n.queryToTagMap.get(ms(d));n.listenProvider_.stopListening(tn(d),f)}))}jf(n,c)}return a}function Vf(n,e,t,s){const i=er(n,s);if(i!=null){const r=tr(i),o=r.path,a=r.queryId,l=fe(o,e),c=new dt(Gi(a),l,t);return nr(n,o,c)}else return[]}function $f(n,e,t,s){const i=er(n,s);if(i){const r=tr(i),o=r.path,a=r.queryId,l=fe(o,e),c=j.fromObject(t),h=new Ot(Gi(a),l,c);return nr(n,o,h)}else return[]}function bo(n,e,t,s=!1){const i=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(i,(d,f)=>{const _=fe(d,i);r=r||St(f,_),o=o||Ze(f)});let a=n.syncPointTree_.get(i);a?(o=o||Ze(a),r=r||St(a,M())):(a=new Rf,n.syncPointTree_=n.syncPointTree_.set(i,a));let l;r!=null?l=!0:(l=!1,r=R.EMPTY_NODE,n.syncPointTree_.subtree(i).foreachChild((f,_)=>{const v=St(_,M());v&&(r=r.updateImmediateChild(f,v))}));const c=El(a,e);if(!c&&!e._queryParams.loadsAllData()){const d=ms(e);m(!n.queryToTagMap.has(d),"View does not exist, but we have a tag");const f=qf();n.queryToTagMap.set(d,f),n.tagToQueryMap.set(f,d)}const h=Ki(n.pendingWriteTree_,i);let u=Pf(a,e,t,h,r,l);if(!c&&!o&&!s){const d=yl(a,e);u=u.concat(zf(n,e,d))}return u}function Zi(n,e,t){const i=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,a)=>{const l=fe(o,e),c=St(a,l);if(c)return c});return dl(i,e,r,t,!0)}function Vt(n,e){return bl(e,n.syncPointTree_,null,Ki(n.pendingWriteTree_,M()))}function bl(n,e,t,s){if(L(n.path))return Il(n,e,t,s);{const i=e.get(M());t==null&&i!=null&&(t=St(i,M()));let r=[];const o=O(n.path),a=n.operationForChild(o),l=e.children.get(o);if(l&&a){const c=t?t.getImmediateChild(o):null,h=fl(s,o);r=r.concat(bl(a,l,c,h))}return i&&(r=r.concat(Xi(i,n,s,t))),r}}function Il(n,e,t,s){const i=e.get(M());t==null&&i!=null&&(t=St(i,M()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=t?t.getImmediateChild(o):null,c=fl(s,o),h=n.operationForChild(o);h&&(r=r.concat(Il(h,a,l,c)))}),i&&(r=r.concat(Xi(i,n,s,t))),r}function Cl(n,e){const t=e.query,s=is(n,t);return{hashFn:()=>(If(e)||R.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?Wf(n,t._path,s):Bf(n,t._path);{const r=Uh(i,t);return Ei(n,t,null,r)}}}}function is(n,e){const t=ms(e);return n.queryToTagMap.get(t)}function ms(n){return n._path.toString()+"$"+n._queryIdentifier}function er(n,e){return n.tagToQueryMap.get(e)}function tr(n){const e=n.indexOf("$");return m(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new B(n.substr(0,e))}}function nr(n,e,t){const s=n.syncPointTree_.get(e);m(s,"Missing sync point for query tag that we're tracking");const i=Ki(n.pendingWriteTree_,e);return Xi(s,t,i,null)}function Hf(n){return n.fold((e,t,s)=>{if(t&&Ze(t))return[_s(t)];{let i=[];return t&&(i=vl(t)),re(s,(r,o)=>{i=i.concat(o)}),i}})}function tn(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(Lf())(n._repo,n._path):n}function jf(n,e){for(let t=0;t<e.length;++t){const s=e[t];if(!s._queryParams.loadsAllData()){const i=ms(s),r=n.queryToTagMap.get(i);n.queryToTagMap.delete(i),n.tagToQueryMap.delete(r)}}}function qf(){return Mf++}function zf(n,e,t){const s=e._path,i=is(n,e),r=Cl(n,t),o=n.listenProvider_.startListening(tn(e),i,r.hashFn,r.onComplete),a=n.syncPointTree_.subtree(s);if(i)m(!Ze(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,h,u)=>{if(!L(c)&&h&&Ze(h))return[_s(h).query];{let d=[];return h&&(d=d.concat(vl(h).map(f=>f.query))),re(u,(f,_)=>{d=d.concat(_)}),d}});for(let c=0;c<l.length;++c){const h=l[c];n.listenProvider_.stopListening(tn(h),is(n,h))}}return o}/**
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
 */class sr{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new sr(t)}node(){return this.node_}}class ir{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=K(this.path_,e);return new ir(this.syncTree_,t)}node(){return Zi(this.syncTree_,this.path_)}}const Gf=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},Io=function(n,e,t){if(!n||typeof n!="object")return n;if(m(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return Kf(n[".sv"],e,t);if(typeof n[".sv"]=="object")return Yf(n[".sv"],e);m(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},Kf=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:m(!1,"Unexpected server value: "+n)}},Yf=function(n,e,t){n.hasOwnProperty("increment")||m(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&m(!1,"Unexpected increment value: "+s);const i=e.node();if(m(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},Tl=function(n,e,t,s){return rr(e,new ir(t,n),s)},Sl=function(n,e,t){return rr(n,new sr(e),t)};function rr(n,e,t){const s=n.getPriority().val(),i=Io(s,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,a=Io(o.getValue(),e,t);return a!==o.getValue()||i!==o.getPriority().val()?new ee(a,ne(i)):n}else{const o=n;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new ee(i))),o.forEachChild(Y,(a,l)=>{const c=rr(l,e.getImmediateChild(a),t);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
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
 */class or{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function ar(n,e){let t=e instanceof B?e:new B(e),s=n,i=O(t);for(;i!==null;){const r=Nt(s.node.children,i)||{children:{},childCount:0};s=new or(i,s,r),t=q(t),i=O(t)}return s}function $t(n){return n.node.value}function Rl(n,e){n.node.value=e,wi(n)}function Al(n){return n.node.childCount>0}function Qf(n){return $t(n)===void 0&&!Al(n)}function vs(n,e){re(n.node.children,(t,s)=>{e(new or(t,n,s))})}function kl(n,e,t,s){t&&!s&&e(n),vs(n,i=>{kl(i,e,!0,s)}),t&&s&&e(n)}function Jf(n,e,t){let s=t?n:n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function bn(n){return new B(n.parent===null?n.name:bn(n.parent)+"/"+n.name)}function wi(n){n.parent!==null&&Xf(n.parent,n.name,n)}function Xf(n,e,t){const s=Qf(t),i=Re(n.node.children,e);s&&i?(delete n.node.children[e],n.node.childCount--,wi(n)):!s&&!i&&(n.node.children[e]=t.node,n.node.childCount++,wi(n))}/**
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
 */const Zf=/[\[\].#$\/\u0000-\u001F\u007F]/,ep=/[\[\].#$\u0000-\u001F\u007F]/,Vs=10*1024*1024,lr=function(n){return typeof n=="string"&&n.length!==0&&!Zf.test(n)},Nl=function(n){return typeof n=="string"&&n.length!==0&&!ep.test(n)},tp=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Nl(n)},np=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!xi(n)||n&&typeof n=="object"&&Re(n,".sv")},Dl=function(n,e,t,s){s&&e===void 0||ys(us(n,"value"),e,t)},ys=function(n,e,t){const s=t instanceof B?new md(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+it(s));if(typeof e=="function")throw new Error(n+"contains a function "+it(s)+" with contents = "+e.toString());if(xi(e))throw new Error(n+"contains "+e.toString()+" "+it(s));if(typeof e=="string"&&e.length>Vs/3&&hs(e)>Vs)throw new Error(n+"contains a string greater than "+Vs+" utf8 bytes "+it(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(re(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!lr(o)))throw new Error(n+" contains an invalid key ("+o+") "+it(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);vd(s,o),ys(n,a,s),yd(s)}),i&&r)throw new Error(n+' contains ".value" child '+it(s)+" in addition to actual children.")}},sp=function(n,e){let t,s;for(t=0;t<e.length;t++){s=e[t];const r=ln(s);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!lr(r[o]))throw new Error(n+"contains an invalid key ("+r[o]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(gd);let i=null;for(t=0;t<e.length;t++){if(s=e[t],i!==null&&ge(i,s))throw new Error(n+"contains a path "+i.toString()+" that is ancestor of another path "+s.toString());i=s}},ip=function(n,e,t,s){if(s&&e===void 0)return;const i=us(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const r=[];re(e,(o,a)=>{const l=new B(o);if(ys(i,a,K(t,l)),Bi(l)===".priority"&&!np(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(l)}),sp(i,r)},Pl=function(n,e,t,s){if(!(s&&t===void 0)&&!Nl(t))throw new Error(us(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},rp=function(n,e,t,s){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Pl(n,e,t,s)},Ol=function(n,e){if(O(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},op=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!lr(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!tp(t))throw new Error(us(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class ap{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Es(n,e){let t=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();t!==null&&!Wi(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(i)}t&&n.eventLists_.push(t)}function xl(n,e,t){Es(n,t),Ll(n,s=>Wi(s,e))}function be(n,e,t){Es(n,t),Ll(n,s=>ge(s,e)||ge(e,s))}function Ll(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const i=n.eventLists_[s];if(i){const r=i.path;e(r)?(lp(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function lp(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();ot&&ie("event: "+t.toString()),Wt(s)}}}/**
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
 */const cp="repo_interrupt",up=25;class hp{constructor(e,t,s,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new ap,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Jn(),this.transactionQueueTree_=new or,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function dp(n,e,t){if(n.stats_=Ui(n.repoInfo_),n.forceRestClient_||Vh())n.server_=new Qn(n.repoInfo_,(s,i,r,o)=>{Co(n,s,i,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>To(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{se(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new Oe(n.repoInfo_,e,(s,i,r,o)=>{Co(n,s,i,r,o)},s=>{To(n,s)},s=>{fp(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=zh(n.repoInfo_,()=>new qd(n.stats_,n.server_)),n.infoData_=new Wd,n.infoSyncTree_=new wo({startListening:(s,i,r,o)=>{let a=[];const l=n.infoData_.getNode(s._path);return l.isEmpty()||(a=gs(n.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),cr(n,"connected",!1),n.serverSyncTree_=new wo({startListening:(s,i,r,o)=>(n.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);be(n.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{n.server_.unlisten(s,i)}})}function Ml(n){const t=n.infoData_.getNode(new B(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function ws(n){return Gf({timestamp:Ml(n)})}function Co(n,e,t,s,i){n.dataUpdateCount++;const r=new B(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(i)if(s){const l=jn(t,c=>ne(c));o=$f(n.serverSyncTree_,r,l,i)}else{const l=ne(t);o=Vf(n.serverSyncTree_,r,l,i)}else if(s){const l=jn(t,c=>ne(c));o=Ff(n.serverSyncTree_,r,l)}else{const l=ne(t);o=gs(n.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=Lt(n,r)),be(n.eventQueue_,a,o)}function To(n,e){cr(n,"connected",e),e===!1&&gp(n)}function fp(n,e){re(e,(t,s)=>{cr(n,t,s)})}function cr(n,e,t){const s=new B("/.info/"+e),i=ne(t);n.infoData_.updateSnapshot(s,i);const r=gs(n.infoSyncTree_,s,i);be(n.eventQueue_,s,r)}function ur(n){return n.nextWriteId_++}function pp(n,e,t,s,i){bs(n,"set",{path:e.toString(),value:t,priority:s});const r=ws(n),o=ne(t,s),a=Zi(n.serverSyncTree_,e),l=Sl(o,a,r),c=ur(n),h=wl(n.serverSyncTree_,e,l,c,!0);Es(n.eventQueue_,h),n.server_.put(e.toString(),o.val(!0),(d,f)=>{const _=d==="ok";_||he("set at "+e+" failed: "+d);const v=Ge(n.serverSyncTree_,c,!_);be(n.eventQueue_,e,v),bi(n,i,d,f)});const u=dr(n,e);Lt(n,u),be(n.eventQueue_,u,[])}function _p(n,e,t,s){bs(n,"update",{path:e.toString(),value:t});let i=!0;const r=ws(n),o={};if(re(t,(a,l)=>{i=!1,o[a]=Tl(K(e,a),ne(l),n.serverSyncTree_,r)}),i)ie("update() called with empty data.  Don't do anything."),bi(n,s,"ok",void 0);else{const a=ur(n),l=Uf(n.serverSyncTree_,e,o,a);Es(n.eventQueue_,l),n.server_.merge(e.toString(),t,(c,h)=>{const u=c==="ok";u||he("update at "+e+" failed: "+c);const d=Ge(n.serverSyncTree_,a,!u),f=d.length>0?Lt(n,e):e;be(n.eventQueue_,f,d),bi(n,s,c,h)}),re(t,c=>{const h=dr(n,K(e,c));Lt(n,h)}),be(n.eventQueue_,e,[])}}function gp(n){bs(n,"onDisconnectEvents");const e=ws(n),t=Jn();fi(n.onDisconnect_,M(),(i,r)=>{const o=Tl(i,r,n.serverSyncTree_,e);ll(t,i,o)});let s=[];fi(t,M(),(i,r)=>{s=s.concat(gs(n.serverSyncTree_,i,r));const o=dr(n,i);Lt(n,o)}),n.onDisconnect_=Jn(),be(n.eventQueue_,M(),s)}function mp(n,e,t){let s;O(e._path)===".info"?s=bo(n.infoSyncTree_,e,t):s=bo(n.serverSyncTree_,e,t),xl(n.eventQueue_,e._path,s)}function So(n,e,t){let s;O(e._path)===".info"?s=Ei(n.infoSyncTree_,e,t):s=Ei(n.serverSyncTree_,e,t),xl(n.eventQueue_,e._path,s)}function vp(n){n.persistentConnection_&&n.persistentConnection_.interrupt(cp)}function bs(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),ie(t,...e)}function bi(n,e,t,s){e&&Wt(()=>{if(t==="ok")e(null);else{const i=(t||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function Ul(n,e,t){return Zi(n.serverSyncTree_,e,t)||R.EMPTY_NODE}function hr(n,e=n.transactionQueueTree_){if(e||Is(n,e),$t(e)){const t=Bl(n,e);m(t.length>0,"Sending zero length transaction queue"),t.every(i=>i.status===0)&&yp(n,bn(e),t)}else Al(e)&&vs(e,t=>{hr(n,t)})}function yp(n,e,t){const s=t.map(c=>c.currentWriteId),i=Ul(n,e,s);let r=i;const o=i.hash();for(let c=0;c<t.length;c++){const h=t[c];m(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const u=fe(e,h.path);r=r.updateChild(u,h.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;n.server_.put(l.toString(),a,c=>{bs(n,"transaction put response",{path:l.toString(),status:c});let h=[];if(c==="ok"){const u=[];for(let d=0;d<t.length;d++)t[d].status=2,h=h.concat(Ge(n.serverSyncTree_,t[d].currentWriteId)),t[d].onComplete&&u.push(()=>t[d].onComplete(null,!0,t[d].currentOutputSnapshotResolved)),t[d].unwatcher();Is(n,ar(n.transactionQueueTree_,e)),hr(n,n.transactionQueueTree_),be(n.eventQueue_,e,h);for(let d=0;d<u.length;d++)Wt(u[d])}else{if(c==="datastale")for(let u=0;u<t.length;u++)t[u].status===3?t[u].status=4:t[u].status=0;else{he("transaction at "+l.toString()+" failed: "+c);for(let u=0;u<t.length;u++)t[u].status=4,t[u].abortReason=c}Lt(n,e)}},o)}function Lt(n,e){const t=Fl(n,e),s=bn(t),i=Bl(n,t);return Ep(n,i,s),s}function Ep(n,e,t){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=fe(t,l.path);let h=!1,u;if(m(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)h=!0,u=l.abortReason,i=i.concat(Ge(n.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=up)h=!0,u="maxretry",i=i.concat(Ge(n.serverSyncTree_,l.currentWriteId,!0));else{const d=Ul(n,l.path,o);l.currentInputSnapshot=d;const f=e[a].update(d.val());if(f!==void 0){ys("transaction failed: Data returned ",f,l.path);let _=ne(f);typeof f=="object"&&f!=null&&Re(f,".priority")||(_=_.updatePriority(d.getPriority()));const E=l.currentWriteId,y=ws(n),C=Sl(_,d,y);l.currentOutputSnapshotRaw=_,l.currentOutputSnapshotResolved=C,l.currentWriteId=ur(n),o.splice(o.indexOf(E),1),i=i.concat(wl(n.serverSyncTree_,l.path,C,l.currentWriteId,l.applyLocally)),i=i.concat(Ge(n.serverSyncTree_,E,!0))}else h=!0,u="nodata",i=i.concat(Ge(n.serverSyncTree_,l.currentWriteId,!0))}be(n.eventQueue_,t,i),i=[],h&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(u==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(u),!1,null))))}Is(n,n.transactionQueueTree_);for(let a=0;a<s.length;a++)Wt(s[a]);hr(n,n.transactionQueueTree_)}function Fl(n,e){let t,s=n.transactionQueueTree_;for(t=O(e);t!==null&&$t(s)===void 0;)s=ar(s,t),e=q(e),t=O(e);return s}function Bl(n,e){const t=[];return Wl(n,e,t),t.sort((s,i)=>s.order-i.order),t}function Wl(n,e,t){const s=$t(e);if(s)for(let i=0;i<s.length;i++)t.push(s[i]);vs(e,i=>{Wl(n,i,t)})}function Is(n,e){const t=$t(e);if(t){let s=0;for(let i=0;i<t.length;i++)t[i].status!==2&&(t[s]=t[i],s++);t.length=s,Rl(e,t.length>0?t:void 0)}vs(e,s=>{Is(n,s)})}function dr(n,e){const t=bn(Fl(n,e)),s=ar(n.transactionQueueTree_,e);return Jf(s,i=>{$s(n,i)}),$s(n,s),kl(s,i=>{$s(n,i)}),t}function $s(n,e){const t=$t(e);if(t){const s=[];let i=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(m(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(m(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),i=i.concat(Ge(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&s.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Rl(e,void 0):t.length=r+1,be(n.eventQueue_,bn(e),i);for(let o=0;o<s.length;o++)Wt(s[o])}}/**
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
 */function wp(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let i=t[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function bp(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):he(`Invalid query segment '${t}' in query '${n}'`)}return e}const Ro=function(n,e){const t=Ip(n),s=t.namespace;t.domain==="firebase.com"&&xe(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&xe("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||Ph();const i=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new qa(t.host,t.secure,s,i,e,"",s!==t.subdomain),path:new B(t.pathString)}},Ip=function(n){let e="",t="",s="",i="",r="",o=!0,a="https",l=443;if(typeof n=="string"){let c=n.indexOf("//");c>=0&&(a=n.substring(0,c-1),n=n.substring(c+2));let h=n.indexOf("/");h===-1&&(h=n.length);let u=n.indexOf("?");u===-1&&(u=n.length),e=n.substring(0,Math.min(h,u)),h<u&&(i=wp(n.substring(h,u)));const d=bp(n.substring(Math.min(n.length,u)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const f=e.slice(0,c);if(f.toLowerCase()==="localhost")t="localhost";else if(f.split(".").length<=2)t=f;else{const _=e.indexOf(".");s=e.substring(0,_).toLowerCase(),t=e.substring(_+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:l,domain:t,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
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
 */const Ao="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",Cp=function(){let n=0;const e=[];return function(t){const s=t===n;n=t;let i;const r=new Array(8);for(i=7;i>=0;i--)r[i]=Ao.charAt(t%64),t=Math.floor(t/64);m(t===0,"Cannot push at time == 0");let o=r.join("");if(s){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=Ao.charAt(e[i]);return m(o.length===20,"nextPushId: Length should be 20."),o}}();/**
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
 */class Vl{constructor(e,t,s,i){this.eventType=e,this.eventRegistration=t,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+se(this.snapshot.exportVal())}}class $l{constructor(e,t,s){this.eventRegistration=e,this.error=t,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class Tp{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return m(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class fr{constructor(e,t,s,i){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=i}get key(){return L(this._path)?null:Bi(this._path)}get ref(){return new Fe(this._repo,this._path)}get _queryIdentifier(){const e=uo(this._queryParams),t=Li(e);return t==="{}"?"default":t}get _queryObject(){return uo(this._queryParams)}isEqual(e){if(e=ce(e),!(e instanceof fr))return!1;const t=this._repo===e._repo,s=Wi(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+_d(this._path)}}class Fe extends fr{constructor(e,t){super(e,t,new ji,!1)}get parent(){const e=el(this._path);return e===null?null:new Fe(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class fn{constructor(e,t,s){this._node=e,this.ref=t,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new B(e),s=Mt(this.ref,e);return new fn(this._node.getChild(t),s,Y)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new fn(i,Mt(this.ref,s),Y)))}hasChild(e){const t=new B(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function pn(n,e){return n=ce(n),n._checkNotDeleted("ref"),e!==void 0?Mt(n._root,e):n._root}function Mt(n,e){return n=ce(n),O(n._path)===null?rp("child","path",e,!1):Pl("child","path",e,!1),new Fe(n._repo,K(n._path,e))}function Hl(n,e){n=ce(n),Ol("push",n._path),Dl("push",e,n._path,!0);const t=Ml(n._repo),s=Cp(t),i=Mt(n,s),r=Mt(n,s);let o;return e!=null?o=Sp(r,e).then(()=>r):o=Promise.resolve(r),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function Sp(n,e){n=ce(n),Ol("set",n._path),Dl("set",e,n._path,!1);const t=new mn;return pp(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function Rp(n,e){ip("update",e,n._path,!1);const t=new mn;return _p(n._repo,n._path,e,t.wrapCallback(()=>{})),t.promise}class pr{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const s=t._queryParams.getIndex();return new Vl("value",this,new fn(e.snapshotNode,new Fe(t._repo,t._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new $l(this,e,t):null}matches(e){return e instanceof pr?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class _r{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t=e==="children_added"?"child_added":e;return t=t==="children_removed"?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new $l(this,e,t):null}createEvent(e,t){m(e.childName!=null,"Child events should have a childName.");const s=Mt(new Fe(t._repo,t._path),e.childName),i=t._queryParams.getIndex();return new Vl(e.type,this,new fn(e.snapshotNode,s,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof _r?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function Ap(n,e,t,s,i){let r;if(typeof s=="object"&&(r=void 0,i=s),typeof s=="function"&&(r=s),i&&i.onlyOnce){const l=t,c=(h,u)=>{So(n._repo,n,a),l(h,u)};c.userCallback=t.userCallback,c.context=t.context,t=c}const o=new Tp(t,r||void 0),a=e==="value"?new pr(o):new _r(e,o);return mp(n._repo,n,a),()=>So(n._repo,n,a)}function jl(n,e,t,s){return Ap(n,"value",e,t,s)}Af(Fe);xf(Fe);/**
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
 */const kp="FIREBASE_DATABASE_EMULATOR_HOST",Ii={};let Np=!1;function Dp(n,e,t,s){n.repoInfo_=new qa(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),s&&(n.authTokenProvider_=s)}function Pp(n,e,t,s,i){let r=s||n.options.databaseURL;r===void 0&&(n.options.projectId||xe("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ie("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=Ro(r,i),a=o.repoInfo,l,c;typeof process<"u"&&zr&&(c=zr[kp]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=Ro(r,i),a=o.repoInfo):l=!o.repoInfo.secure;const h=i&&l?new Ct(Ct.OWNER):new Hh(n.name,n.options,e);op("Invalid Firebase Database URL",o),L(o.path)||xe("Database URL must point to the root of a Firebase Database (not including a child path).");const u=xp(a,n,h,new $h(n.name,t));return new Lp(u,n)}function Op(n,e){const t=Ii[e];(!t||t[n.key]!==n)&&xe(`Database ${e}(${n.repoInfo_}) has already been deleted.`),vp(n),delete t[n.key]}function xp(n,e,t,s){let i=Ii[e.name];i||(i={},Ii[e.name]=i);let r=i[n.toURLString()];return r&&xe("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new hp(n,Np,t,s),i[n.toURLString()]=r,r}class Lp{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(dp(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Fe(this._repo,M())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Op(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&xe("Cannot call "+e+" on a deleted database.")}}function Mp(n=Oi(),e){const t=ds(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const s=ya("database");s&&Up(t,...s)}return t}function Up(n,e,t,s={}){n=ce(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&xe("Cannot call useEmulator() after instance has already been initialized.");const i=n._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&xe('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new Ct(Ct.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:ba(s.mockUserToken,n.app.options.projectId);r=new Ct(o)}Dp(i,e,t,r)}/**
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
 */function Fp(n){Rh(mt),ut(new Je("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Pp(s,i,r,t)},"PUBLIC").setMultipleInstances(!0)),Ce(Gr,Kr,n),Ce(Gr,Kr,"esm2017")}Oe.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};Oe.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};Fp();/**
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
 */const ql="firebasestorage.googleapis.com",zl="storageBucket",Bp=2*60*1e3,Wp=10*60*1e3;/**
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
 */class J extends Ue{constructor(e,t,s=0){super(Hs(e),`Firebase Storage: ${t} (${Hs(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,J.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Hs(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Q;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Q||(Q={}));function Hs(n){return"storage/"+n}function gr(){const n="An unknown error occurred, please check the error payload for server response.";return new J(Q.UNKNOWN,n)}function Vp(n){return new J(Q.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function $p(n){return new J(Q.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Hp(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new J(Q.UNAUTHENTICATED,n)}function jp(){return new J(Q.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function qp(n){return new J(Q.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function zp(){return new J(Q.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Gp(){return new J(Q.CANCELED,"User canceled the upload/download.")}function Kp(n){return new J(Q.INVALID_URL,"Invalid URL '"+n+"'.")}function Yp(n){return new J(Q.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function Qp(){return new J(Q.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+zl+"' property when initializing the app?")}function Jp(){return new J(Q.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function Xp(){return new J(Q.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Zp(n){return new J(Q.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Ci(n){return new J(Q.INVALID_ARGUMENT,n)}function Gl(){return new J(Q.APP_DELETED,"The Firebase app was deleted.")}function e_(n){return new J(Q.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function nn(n,e){return new J(Q.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function Yt(n){throw new J(Q.INTERNAL_ERROR,"Internal error: "+n)}/**
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
 */class _e{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let s;try{s=_e.makeFromUrl(e,t)}catch{return new _e(e,"")}if(s.path==="")return s;throw Yp(e)}static makeFromUrl(e,t){let s=null;const i="([A-Za-z0-9.\\-_]+)";function r(T){T.path.charAt(T.path.length-1)==="/"&&(T.path_=T.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function c(T){T.path_=decodeURIComponent(T.path)}const h="v[A-Za-z0-9_]+",u=t.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${u}/${h}/b/${i}/o${d}`,"i"),_={bucket:1,path:3},v=t===ql?"(?:storage.googleapis.com|storage.cloud.google.com)":t,E="([^?#]*)",y=new RegExp(`^https?://${v}/${i}/${E}`,"i"),g=[{regex:a,indices:l,postModify:r},{regex:f,indices:_,postModify:c},{regex:y,indices:{bucket:1,path:2},postModify:c}];for(let T=0;T<g.length;T++){const D=g[T],w=D.regex.exec(e);if(w){const I=w[D.indices.bucket];let k=w[D.indices.path];k||(k=""),s=new _e(I,k),D.postModify(s);break}}if(s==null)throw Kp(e);return s}}class t_{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function n_(n,e,t){let s=1,i=null,r=null,o=!1,a=0;function l(){return a===2}let c=!1;function h(...E){c||(c=!0,e.apply(null,E))}function u(E){i=setTimeout(()=>{i=null,n(f,l())},E)}function d(){r&&clearTimeout(r)}function f(E,...y){if(c){d();return}if(E){d(),h.call(null,E,...y);return}if(l()||o){d(),h.call(null,E,...y);return}s<64&&(s*=2);let g;a===1?(a=2,g=0):g=(s+Math.random())*1e3,u(g)}let _=!1;function v(E){_||(_=!0,d(),!c&&(i!==null?(E||(a=2),clearTimeout(i),u(0)):E||(a=1)))}return u(0),r=setTimeout(()=>{o=!0,v(!0)},t),v}function s_(n){n(!1)}/**
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
 */function i_(n){return n!==void 0}function r_(n){return typeof n=="object"&&!Array.isArray(n)}function mr(n){return typeof n=="string"||n instanceof String}function ko(n){return vr()&&n instanceof Blob}function vr(){return typeof Blob<"u"}function No(n,e,t,s){if(s<e)throw Ci(`Invalid value for '${n}'. Expected ${e} or greater.`);if(s>t)throw Ci(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
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
 */function yr(n,e,t){let s=e;return t==null&&(s=`https://${e}`),`${t}://${s}/v0${n}`}function Kl(n){const e=encodeURIComponent;let t="?";for(const s in n)if(n.hasOwnProperty(s)){const i=e(s)+"="+e(n[s]);t=t+i+"&"}return t=t.slice(0,-1),t}/**
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
 */var at;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(at||(at={}));/**
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
 */function o_(n,e){const t=n>=500&&n<600,i=[408,429].indexOf(n)!==-1,r=e.indexOf(n)!==-1;return t||i||r}/**
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
 */class a_{constructor(e,t,s,i,r,o,a,l,c,h,u,d=!0){this.url_=e,this.method_=t,this.headers_=s,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=h,this.connectionFactory_=u,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,_)=>{this.resolve_=f,this.reject_=_,this.start_()})}start_(){const e=(s,i)=>{if(i){s(!1,new Dn(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===at.NO_ERROR,l=r.getStatus();if(!a||o_(l,this.additionalRetryCodes_)&&this.retry){const h=r.getErrorCode()===at.ABORT;s(!1,new Dn(!1,null,h));return}const c=this.successCodes_.indexOf(l)!==-1;s(!0,new Dn(c,r))})},t=(s,i)=>{const r=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());i_(l)?r(l):r()}catch(l){o(l)}else if(a!==null){const l=gr();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?Gl():Gp();o(l)}else{const l=zp();o(l)}};this.canceled_?t(!1,new Dn(!1,null,!0)):this.backoffId_=n_(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&s_(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Dn{constructor(e,t,s){this.wasSuccessCode=e,this.connection=t,this.canceled=!!s}}function l_(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function c_(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function u_(n,e){e&&(n["X-Firebase-GMPID"]=e)}function h_(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function d_(n,e,t,s,i,r,o=!0){const a=Kl(n.urlParams),l=n.url+a,c=Object.assign({},n.headers);return u_(c,e),l_(c,t),c_(c,r),h_(c,s),new a_(l,n.method,c,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,i,o)}/**
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
 */function f_(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function p_(...n){const e=f_();if(e!==void 0){const t=new e;for(let s=0;s<n.length;s++)t.append(n[s]);return t.getBlob()}else{if(vr())return new Blob(n);throw new J(Q.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function __(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
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
 */function g_(n){if(typeof atob>"u")throw Zp("base-64");return atob(n)}/**
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
 */const Ie={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class js{constructor(e,t){this.data=e,this.contentType=t||null}}function m_(n,e){switch(n){case Ie.RAW:return new js(Yl(e));case Ie.BASE64:case Ie.BASE64URL:return new js(Ql(n,e));case Ie.DATA_URL:return new js(y_(e),E_(e))}throw gr()}function Yl(n){const e=[];for(let t=0;t<n.length;t++){let s=n.charCodeAt(t);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const r=s,o=n.charCodeAt(++t);s=65536|(r&1023)<<10|o&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function v_(n){let e;try{e=decodeURIComponent(n)}catch{throw nn(Ie.DATA_URL,"Malformed data URL.")}return Yl(e)}function Ql(n,e){switch(n){case Ie.BASE64:{const i=e.indexOf("-")!==-1,r=e.indexOf("_")!==-1;if(i||r)throw nn(n,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Ie.BASE64URL:{const i=e.indexOf("+")!==-1,r=e.indexOf("/")!==-1;if(i||r)throw nn(n,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=g_(e)}catch(i){throw i.message.includes("polyfill")?i:nn(n,"Invalid character found")}const s=new Uint8Array(t.length);for(let i=0;i<t.length;i++)s[i]=t.charCodeAt(i);return s}class Jl{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw nn(Ie.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=t[1]||null;s!=null&&(this.base64=w_(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=e.substring(e.indexOf(",")+1)}}function y_(n){const e=new Jl(n);return e.base64?Ql(Ie.BASE64,e.rest):v_(e.rest)}function E_(n){return new Jl(n).contentType}function w_(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
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
 */class Ve{constructor(e,t){let s=0,i="";ko(e)?(this.data_=e,s=e.size,i=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,t){if(ko(this.data_)){const s=this.data_,i=__(s,e,t);return i===null?null:new Ve(i)}else{const s=new Uint8Array(this.data_.buffer,e,t-e);return new Ve(s,!0)}}static getBlob(...e){if(vr()){const t=e.map(s=>s instanceof Ve?s.data_:s);return new Ve(p_.apply(null,t))}else{const t=e.map(o=>mr(o)?m_(Ie.RAW,o).data:o.data_);let s=0;t.forEach(o=>{s+=o.byteLength});const i=new Uint8Array(s);let r=0;return t.forEach(o=>{for(let a=0;a<o.length;a++)i[r++]=o[a]}),new Ve(i,!0)}}uploadData(){return this.data_}}/**
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
 */function Xl(n){let e;try{e=JSON.parse(n)}catch{return null}return r_(e)?e:null}/**
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
 */function b_(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function I_(n,e){const t=e.split("/").filter(s=>s.length>0).join("/");return n.length===0?t:n+"/"+t}function Zl(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
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
 */function C_(n,e){return e}class ue{constructor(e,t,s,i){this.server=e,this.local=t||e,this.writable=!!s,this.xform=i||C_}}let Pn=null;function T_(n){return!mr(n)||n.length<2?n:Zl(n)}function ec(){if(Pn)return Pn;const n=[];n.push(new ue("bucket")),n.push(new ue("generation")),n.push(new ue("metageneration")),n.push(new ue("name","fullPath",!0));function e(r,o){return T_(o)}const t=new ue("name");t.xform=e,n.push(t);function s(r,o){return o!==void 0?Number(o):o}const i=new ue("size");return i.xform=s,n.push(i),n.push(new ue("timeCreated")),n.push(new ue("updated")),n.push(new ue("md5Hash",null,!0)),n.push(new ue("cacheControl",null,!0)),n.push(new ue("contentDisposition",null,!0)),n.push(new ue("contentEncoding",null,!0)),n.push(new ue("contentLanguage",null,!0)),n.push(new ue("contentType",null,!0)),n.push(new ue("metadata","customMetadata",!0)),Pn=n,Pn}function S_(n,e){function t(){const s=n.bucket,i=n.fullPath,r=new _e(s,i);return e._makeStorageReference(r)}Object.defineProperty(n,"ref",{get:t})}function R_(n,e,t){const s={};s.type="file";const i=t.length;for(let r=0;r<i;r++){const o=t[r];s[o.local]=o.xform(s,e[o.server])}return S_(s,n),s}function tc(n,e,t){const s=Xl(e);return s===null?null:R_(n,s,t)}function A_(n,e,t,s){const i=Xl(e);if(i===null||!mr(i.downloadTokens))return null;const r=i.downloadTokens;if(r.length===0)return null;const o=encodeURIComponent;return r.split(",").map(c=>{const h=n.bucket,u=n.fullPath,d="/b/"+o(h)+"/o/"+o(u),f=yr(d,t,s),_=Kl({alt:"media",token:c});return f+_})[0]}function k_(n,e){const t={},s=e.length;for(let i=0;i<s;i++){const r=e[i];r.writable&&(t[r.server]=n[r.local])}return JSON.stringify(t)}class nc{constructor(e,t,s,i){this.url=e,this.method=t,this.handler=s,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function sc(n){if(!n)throw gr()}function N_(n,e){function t(s,i){const r=tc(n,i,e);return sc(r!==null),r}return t}function D_(n,e){function t(s,i){const r=tc(n,i,e);return sc(r!==null),A_(r,i,n.host,n._protocol)}return t}function ic(n){function e(t,s){let i;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?i=jp():i=Hp():t.getStatus()===402?i=$p(n.bucket):t.getStatus()===403?i=qp(n.path):i=s,i.status=t.getStatus(),i.serverResponse=s.serverResponse,i}return e}function P_(n){const e=ic(n);function t(s,i){let r=e(s,i);return s.getStatus()===404&&(r=Vp(n.path)),r.serverResponse=i.serverResponse,r}return t}function O_(n,e,t){const s=e.fullServerUrl(),i=yr(s,n.host,n._protocol),r="GET",o=n.maxOperationRetryTime,a=new nc(i,r,D_(n,t),o);return a.errorHandler=P_(e),a}function x_(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function L_(n,e,t){const s=Object.assign({},t);return s.fullPath=n.path,s.size=e.size(),s.contentType||(s.contentType=x_(null,e)),s}function M_(n,e,t,s,i){const r=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let g="";for(let T=0;T<2;T++)g=g+Math.random().toString().slice(2);return g}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const c=L_(e,s,i),h=k_(c,t),u="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+h+`\r
--`+l+`\r
Content-Type: `+c.contentType+`\r
\r
`,d=`\r
--`+l+"--",f=Ve.getBlob(u,s,d);if(f===null)throw Jp();const _={name:c.fullPath},v=yr(r,n.host,n._protocol),E="POST",y=n.maxUploadRetryTime,C=new nc(v,E,N_(n,t),y);return C.urlParams=_,C.headers=o,C.body=f.uploadData(),C.errorHandler=ic(e),C}class U_{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=at.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=at.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=at.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,s,i){if(this.sent_)throw Yt("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),i!==void 0)for(const r in i)i.hasOwnProperty(r)&&this.xhr_.setRequestHeader(r,i[r].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Yt("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Yt("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Yt("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Yt("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class F_ extends U_{initXhr(){this.xhr_.responseType="text"}}function rc(){return new F_}/**
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
 */class _t{constructor(e,t){this._service=e,t instanceof _e?this._location=t:this._location=_e.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new _t(e,t)}get root(){const e=new _e(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Zl(this._location.path)}get storage(){return this._service}get parent(){const e=b_(this._location.path);if(e===null)return null;const t=new _e(this._location.bucket,e);return new _t(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw e_(e)}}function B_(n,e,t){n._throwIfRoot("uploadBytes");const s=M_(n.storage,n._location,ec(),new Ve(e,!0),t);return n.storage.makeRequestWithTokens(s,rc).then(i=>({metadata:i,ref:n}))}function W_(n){n._throwIfRoot("getDownloadURL");const e=O_(n.storage,n._location,ec());return n.storage.makeRequestWithTokens(e,rc).then(t=>{if(t===null)throw Xp();return t})}function V_(n,e){const t=I_(n._location.path,e),s=new _e(n._location.bucket,t);return new _t(n.storage,s)}/**
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
 */function $_(n){return/^[A-Za-z]+:\/\//.test(n)}function H_(n,e){return new _t(n,e)}function oc(n,e){if(n instanceof Er){const t=n;if(t._bucket==null)throw Qp();const s=new _t(t,t._bucket);return e!=null?oc(s,e):s}else return e!==void 0?V_(n,e):n}function j_(n,e){if(e&&$_(e)){if(n instanceof Er)return H_(n,e);throw Ci("To use ref(service, url), the first argument must be a Storage instance.")}else return oc(n,e)}function Do(n,e){const t=e==null?void 0:e[zl];return t==null?null:_e.makeFromBucketSpec(t,n)}function q_(n,e,t,s={}){n.host=`${e}:${t}`,n._protocol="http";const{mockUserToken:i}=s;i&&(n._overrideAuthToken=typeof i=="string"?i:ba(i,n.app.options.projectId))}class Er{constructor(e,t,s,i,r){this.app=e,this._authProvider=t,this._appCheckProvider=s,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=ql,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Bp,this._maxUploadRetryTime=Wp,this._requests=new Set,i!=null?this._bucket=_e.makeFromBucketSpec(i,this._host):this._bucket=Do(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=_e.makeFromBucketSpec(this._url,e):this._bucket=Do(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){No("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){No("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new _t(this,e)}_makeRequest(e,t,s,i,r=!0){if(this._deleted)return new t_(Gl());{const o=d_(e,this._appId,s,i,t,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,t){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,s,i).getPromise()}}const Po="@firebase/storage",Oo="0.12.4";/**
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
 */const ac="storage";function z_(n,e,t){return n=ce(n),B_(n,e,t)}function G_(n){return n=ce(n),W_(n)}function K_(n,e){return n=ce(n),j_(n,e)}function lc(n=Oi(),e){n=ce(n);const s=ds(n,ac).getImmediate({identifier:e}),i=ya("storage");return i&&Y_(s,...i),s}function Y_(n,e,t,s={}){q_(n,e,t,s)}function Q_(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),s=n.getProvider("auth-internal"),i=n.getProvider("app-check-internal");return new Er(t,s,i,e,mt)}function J_(){ut(new Je(ac,Q_,"PUBLIC").setMultipleInstances(!0)),Ce(Po,Oo,""),Ce(Po,Oo,"esm2017")}J_();function wr(n,e){var t={};for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&e.indexOf(s)<0&&(t[s]=n[s]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(n);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(n,s[i])&&(t[s[i]]=n[s[i]]);return t}function cc(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const X_=cc,uc=new vn("auth","Firebase",cc());/**
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
 */const rs=new Di("@firebase/auth");function Z_(n,...e){rs.logLevel<=F.WARN&&rs.warn(`Auth (${mt}): ${n}`,...e)}function Fn(n,...e){rs.logLevel<=F.ERROR&&rs.error(`Auth (${mt}): ${n}`,...e)}/**
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
 */function Le(n,...e){throw br(n,...e)}function Te(n,...e){return br(n,...e)}function hc(n,e,t){const s=Object.assign(Object.assign({},X_()),{[e]:t});return new vn("auth","Firebase",s).create(e,{appName:n.name})}function lt(n){return hc(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function br(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return uc.create(n,...e)}function A(n,e,...t){if(!n)throw br(e,...t)}function Ne(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Fn(e),new Error(e)}function Me(n,e){n||Ne(e)}/**
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
 */function Ti(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function eg(){return xo()==="http:"||xo()==="https:"}function xo(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function tg(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(eg()||ou()||"connection"in navigator)?navigator.onLine:!0}function ng(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class In{constructor(e,t){this.shortDelay=e,this.longDelay=t,Me(t>e,"Short delay should be less than long delay!"),this.isMobile=Ni()||Ia()}get(){return tg()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ir(n,e){Me(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class dc{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ne("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ne("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ne("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const sg={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const ig=new In(3e4,6e4);function Cr(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Ht(n,e,t,s,i={}){return fc(n,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=Bt(Object.assign({key:n.config.apiKey},o)).slice(1),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode),dc.fetch()(pc(n,n.config.apiHost,t,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function fc(n,e,t){n._canInitEmulator=!1;const s=Object.assign(Object.assign({},sg),e);try{const i=new og(n),r=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw On(n,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw On(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw On(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw On(n,"user-disabled",o);const h=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw hc(n,h,c);Le(n,h)}}catch(i){if(i instanceof Ue)throw i;Le(n,"network-request-failed",{message:String(i)})}}async function rg(n,e,t,s,i={}){const r=await Ht(n,e,t,s,i);return"mfaPendingCredential"in r&&Le(n,"multi-factor-auth-required",{_serverResponse:r}),r}function pc(n,e,t,s){const i=`${e}${t}?${s}`;return n.config.emulator?Ir(n.config,i):`${n.config.apiScheme}://${i}`}class og{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(Te(this.auth,"network-request-failed")),ig.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function On(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const i=Te(n,e,s);return i.customData._tokenResponse=t,i}/**
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
 */async function ag(n,e){return Ht(n,"POST","/v1/accounts:delete",e)}async function _c(n,e){return Ht(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function sn(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function lg(n,e=!1){const t=ce(n),s=await t.getIdToken(e),i=Tr(s);A(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:sn(qs(i.auth_time)),issuedAtTime:sn(qs(i.iat)),expirationTime:sn(qs(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function qs(n){return Number(n)*1e3}function Tr(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return Fn("JWT malformed, contained fewer than 3 sections"),null;try{const i=Hn(t);return i?JSON.parse(i):(Fn("Failed to decode base64 JWT payload"),null)}catch(i){return Fn("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Lo(n){const e=Tr(n);return A(e,"internal-error"),A(typeof e.exp<"u","internal-error"),A(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function _n(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Ue&&cg(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function cg({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class ug{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Si{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=sn(this.lastLoginAt),this.creationTime=sn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function os(n){var e;const t=n.auth,s=await n.getIdToken(),i=await _n(n,_c(t,{idToken:s}));A(i==null?void 0:i.users.length,t,"internal-error");const r=i.users[0];n._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?gc(r.providerUserInfo):[],a=dg(n.providerData,o),l=n.isAnonymous,c=!(n.email&&r.passwordHash)&&!(a!=null&&a.length),h=l?c:!1,u={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Si(r.createdAt,r.lastLoginAt),isAnonymous:h};Object.assign(n,u)}async function hg(n){const e=ce(n);await os(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function dg(n,e){return[...n.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function gc(n){return n.map(e=>{var{providerId:t}=e,s=wr(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function fg(n,e){const t=await fc(n,{},async()=>{const s=Bt({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=n.config,o=pc(n,i,"/v1/token",`key=${r}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",dc.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function pg(n,e){return Ht(n,"POST","/v2/accounts:revokeToken",Cr(n,e))}/**
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
 */class Rt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){A(e.idToken,"internal-error"),A(typeof e.idToken<"u","internal-error"),A(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Lo(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){A(e.length!==0,"internal-error");const t=Lo(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(A(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:i,expiresIn:r}=await fg(e,t);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:i,expirationTime:r}=t,o=new Rt;return s&&(A(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(A(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(A(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Rt,this.toJSON())}_performRefresh(){return Ne("not implemented")}}/**
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
 */function We(n,e){A(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class De{constructor(e){var{uid:t,auth:s,stsTokenManager:i}=e,r=wr(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ug(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Si(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await _n(this,this.stsTokenManager.getToken(this.auth,e));return A(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return lg(this,e)}reload(){return hg(this)}_assign(e){this!==e&&(A(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new De(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){A(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await os(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ze(this.auth.app))return Promise.reject(lt(this.auth));const e=await this.getIdToken();return await _n(this,ag(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,i,r,o,a,l,c,h;const u=(s=t.displayName)!==null&&s!==void 0?s:void 0,d=(i=t.email)!==null&&i!==void 0?i:void 0,f=(r=t.phoneNumber)!==null&&r!==void 0?r:void 0,_=(o=t.photoURL)!==null&&o!==void 0?o:void 0,v=(a=t.tenantId)!==null&&a!==void 0?a:void 0,E=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,y=(c=t.createdAt)!==null&&c!==void 0?c:void 0,C=(h=t.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:g,emailVerified:T,isAnonymous:D,providerData:w,stsTokenManager:I}=t;A(g&&I,e,"internal-error");const k=Rt.fromJSON(this.name,I);A(typeof g=="string",e,"internal-error"),We(u,e.name),We(d,e.name),A(typeof T=="boolean",e,"internal-error"),A(typeof D=="boolean",e,"internal-error"),We(f,e.name),We(_,e.name),We(v,e.name),We(E,e.name),We(y,e.name),We(C,e.name);const P=new De({uid:g,auth:e,email:d,emailVerified:T,displayName:u,isAnonymous:D,photoURL:_,phoneNumber:f,tenantId:v,stsTokenManager:k,createdAt:y,lastLoginAt:C});return w&&Array.isArray(w)&&(P.providerData=w.map(W=>Object.assign({},W))),E&&(P._redirectEventId=E),P}static async _fromIdTokenResponse(e,t,s=!1){const i=new Rt;i.updateFromServerResponse(t);const r=new De({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await os(r),r}static async _fromGetAccountInfoResponse(e,t,s){const i=t.users[0];A(i.localId!==void 0,"internal-error");const r=i.providerUserInfo!==void 0?gc(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(r!=null&&r.length),a=new Rt;a.updateFromIdToken(s);const l=new De({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:r,metadata:new Si(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(r!=null&&r.length)};return Object.assign(l,c),l}}/**
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
 */const Mo=new Map;function Pe(n){Me(n instanceof Function,"Expected a class definition");let e=Mo.get(n);return e?(Me(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Mo.set(n,e),e)}/**
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
 */class mc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}mc.type="NONE";const Uo=mc;/**
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
 */function Bn(n,e,t){return`firebase:${n}:${e}:${t}`}class At{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=Bn(this.userKey,i.apiKey,r),this.fullPersistenceKey=Bn("persistence",i.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?De._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new At(Pe(Uo),e,s);const i=(await Promise.all(t.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||Pe(Uo);const o=Bn(s,e.config.apiKey,e.name);let a=null;for(const c of t)try{const h=await c._get(o);if(h){const u=De._fromJSON(e,h);c!==r&&(a=u),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new At(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(t.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new At(r,e,s))}}/**
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
 */function Fo(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ec(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(vc(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(bc(e))return"Blackberry";if(Ic(e))return"Webos";if(Sr(e))return"Safari";if((e.includes("chrome/")||yc(e))&&!e.includes("edge/"))return"Chrome";if(wc(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function vc(n=le()){return/firefox\//i.test(n)}function Sr(n=le()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function yc(n=le()){return/crios\//i.test(n)}function Ec(n=le()){return/iemobile/i.test(n)}function wc(n=le()){return/android/i.test(n)}function bc(n=le()){return/blackberry/i.test(n)}function Ic(n=le()){return/webos/i.test(n)}function Cs(n=le()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function _g(n=le()){var e;return Cs(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function gg(){return au()&&document.documentMode===10}function Cc(n=le()){return Cs(n)||wc(n)||Ic(n)||bc(n)||/windows phone/i.test(n)||Ec(n)}function mg(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Tc(n,e=[]){let t;switch(n){case"Browser":t=Fo(le());break;case"Worker":t=`${Fo(le())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${mt}/${s}`}/**
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
 */class vg{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=t,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function yg(n,e={}){return Ht(n,"GET","/v2/passwordPolicy",Cr(n,e))}/**
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
 */const Eg=6;class wg{constructor(e){var t,s,i,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:Eg,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,i,r,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(s=l.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(r=l.containsUppercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let i=0;i<e.length;i++)s=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,i,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
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
 */class bg{constructor(e,t,s,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Bo(this),this.idTokenSubscription=new Bo(this),this.beforeStateQueue=new vg(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=uc,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Pe(t)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await At.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await _c(this,{idToken:e}),s=await De._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(ze(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return A(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await os(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ng()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ze(this.app))return Promise.reject(lt(this));const t=e?ce(e):null;return t&&A(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&A(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ze(this.app)?Promise.reject(lt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ze(this.app)?Promise.reject(lt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Pe(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await yg(this),t=new wg(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new vn("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await pg(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Pe(e)||this._popupRedirectResolver;A(t,this,"argument-error"),this.redirectPersistenceManager=await At.create(this,[Pe(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,i){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(A(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,s,i);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return A(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Tc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Z_(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Rr(n){return ce(n)}class Bo{constructor(e){this.auth=e,this.observer=null,this.addObserver=gu(t=>this.observer=t)}get next(){return A(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Ar={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Ig(n){Ar=n}function Cg(n){return Ar.loadJS(n)}function Tg(){return Ar.gapiScript}function Sg(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */function Rg(n,e){const t=ds(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),r=t.getOptions();if(qn(r,e??{}))return i;Le(i,"already-initialized")}return t.initialize({options:e})}function Ag(n,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(Pe);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function kg(n,e,t){const s=Rr(n);A(s._canInitEmulator,s,"emulator-config-failed"),A(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!!(t!=null&&t.disableWarnings),r=Sc(e),{host:o,port:a}=Ng(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Dg()}function Sc(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Ng(n){const e=Sc(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:Wo(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:Wo(o)}}}function Wo(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Dg(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Rc{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Ne("not implemented")}_getIdTokenResponse(e){return Ne("not implemented")}_linkToIdToken(e,t){return Ne("not implemented")}_getReauthenticationResolver(e){return Ne("not implemented")}}/**
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
 */async function kt(n,e){return rg(n,"POST","/v1/accounts:signInWithIdp",Cr(n,e))}/**
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
 */const Pg="http://localhost";class gt extends Rc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new gt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Le("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=t,r=wr(t,["providerId","signInMethod"]);if(!s||!i)return null;const o=new gt(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return kt(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,kt(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,kt(e,t)}buildRequest(){const e={requestUri:Pg,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Bt(t)}return e}}/**
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
 */class Ac{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Cn extends Ac{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class $e extends Cn{constructor(){super("facebook.com")}static credential(e){return gt._fromParams({providerId:$e.PROVIDER_ID,signInMethod:$e.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $e.credentialFromTaggedObject(e)}static credentialFromError(e){return $e.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return $e.credential(e.oauthAccessToken)}catch{return null}}}$e.FACEBOOK_SIGN_IN_METHOD="facebook.com";$e.PROVIDER_ID="facebook.com";/**
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
 */class He extends Cn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return gt._fromParams({providerId:He.PROVIDER_ID,signInMethod:He.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return He.credentialFromTaggedObject(e)}static credentialFromError(e){return He.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return He.credential(t,s)}catch{return null}}}He.GOOGLE_SIGN_IN_METHOD="google.com";He.PROVIDER_ID="google.com";/**
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
 */class je extends Cn{constructor(){super("github.com")}static credential(e){return gt._fromParams({providerId:je.PROVIDER_ID,signInMethod:je.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return je.credentialFromTaggedObject(e)}static credentialFromError(e){return je.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return je.credential(e.oauthAccessToken)}catch{return null}}}je.GITHUB_SIGN_IN_METHOD="github.com";je.PROVIDER_ID="github.com";/**
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
 */class qe extends Cn{constructor(){super("twitter.com")}static credential(e,t){return gt._fromParams({providerId:qe.PROVIDER_ID,signInMethod:qe.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return qe.credentialFromTaggedObject(e)}static credentialFromError(e){return qe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return qe.credential(t,s)}catch{return null}}}qe.TWITTER_SIGN_IN_METHOD="twitter.com";qe.PROVIDER_ID="twitter.com";/**
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
 */class Ut{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,i=!1){const r=await De._fromIdTokenResponse(e,s,i),o=Vo(s);return new Ut({user:r,providerId:o,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const i=Vo(s);return new Ut({user:e,providerId:i,_tokenResponse:s,operationType:t})}}function Vo(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class as extends Ue{constructor(e,t,s,i){var r;super(t.code,t.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,as.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,i){return new as(e,t,s,i)}}function kc(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?as._fromErrorAndOperation(n,r,e,s):r})}async function Og(n,e,t=!1){const s=await _n(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Ut._forOperation(n,"link",s)}/**
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
 */async function xg(n,e,t=!1){const{auth:s}=n;if(ze(s.app))return Promise.reject(lt(s));const i="reauthenticate";try{const r=await _n(n,kc(s,i,e,n),t);A(r.idToken,s,"internal-error");const o=Tr(r.idToken);A(o,s,"internal-error");const{sub:a}=o;return A(n.uid===a,s,"user-mismatch"),Ut._forOperation(n,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Le(s,"user-mismatch"),r}}/**
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
 */async function Lg(n,e,t=!1){if(ze(n.app))return Promise.reject(lt(n));const s="signIn",i=await kc(n,s,e),r=await Ut._fromIdTokenResponse(n,s,i);return t||await n._updateCurrentUser(r.user),r}function Mg(n,e,t,s){return ce(n).onIdTokenChanged(e,t,s)}function Ug(n,e,t){return ce(n).beforeAuthStateChanged(e,t)}const ls="__sak";/**
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
 */class Nc{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ls,"1"),this.storage.removeItem(ls),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Fg(){const n=le();return Sr(n)||Cs(n)}const Bg=1e3,Wg=10;class Dc extends Nc{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Fg()&&mg(),this.fallbackToPolling=Cc(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),i=this.localCache[t];s!==i&&e(t,i,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!t)return}const i=()=>{const o=this.storage.getItem(s);!t&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);gg()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Wg):i()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},Bg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Dc.type="LOCAL";const Vg=Dc;/**
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
 */class Pc extends Nc{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Pc.type="SESSION";const Oc=Pc;/**
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
 */function $g(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Ts{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const s=new Ts(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:i,data:r}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(t.origin,r)),l=await $g(a);t.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ts.receivers=[];/**
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
 */function kr(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class Hg{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=kr("",20);i.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(u){const d=u;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(h),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(h),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Se(){return window}function jg(n){Se().location.href=n}/**
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
 */function xc(){return typeof Se().WorkerGlobalScope<"u"&&typeof Se().importScripts=="function"}async function qg(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function zg(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Gg(){return xc()?self:null}/**
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
 */const Lc="firebaseLocalStorageDb",Kg=1,cs="firebaseLocalStorage",Mc="fbase_key";class Tn{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ss(n,e){return n.transaction([cs],e?"readwrite":"readonly").objectStore(cs)}function Yg(){const n=indexedDB.deleteDatabase(Lc);return new Tn(n).toPromise()}function Ri(){const n=indexedDB.open(Lc,Kg);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(cs,{keyPath:Mc})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(cs)?e(s):(s.close(),await Yg(),e(await Ri()))})})}async function $o(n,e,t){const s=Ss(n,!0).put({[Mc]:e,value:t});return new Tn(s).toPromise()}async function Qg(n,e){const t=Ss(n,!1).get(e),s=await new Tn(t).toPromise();return s===void 0?null:s.value}function Ho(n,e){const t=Ss(n,!0).delete(e);return new Tn(t).toPromise()}const Jg=800,Xg=3;class Uc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ri(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>Xg)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return xc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ts._getInstance(Gg()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await qg(),!this.activeServiceWorker)return;this.sender=new Hg(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||zg()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ri();return await $o(e,ls,"1"),await Ho(e,ls),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>$o(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>Qg(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Ho(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=Ss(i,!1).getAll();return new Tn(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Jg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Uc.type="LOCAL";const Zg=Uc;new In(3e4,6e4);/**
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
 */function em(n,e){return e?Pe(e):(A(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Nr extends Rc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return kt(e,this._buildIdpRequest())}_linkToIdToken(e,t){return kt(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return kt(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function tm(n){return Lg(n.auth,new Nr(n),n.bypassAuthState)}function nm(n){const{auth:e,user:t}=n;return A(t,e,"internal-error"),xg(t,new Nr(n),n.bypassAuthState)}async function sm(n){const{auth:e,user:t}=n;return A(t,e,"internal-error"),Og(t,new Nr(n),n.bypassAuthState)}/**
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
 */class Fc{constructor(e,t,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return tm;case"linkViaPopup":case"linkViaRedirect":return sm;case"reauthViaPopup":case"reauthViaRedirect":return nm;default:Le(this.auth,"internal-error")}}resolve(e){Me(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Me(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const im=new In(2e3,1e4);class bt extends Fc{constructor(e,t,s,i,r){super(e,t,i,r),this.provider=s,this.authWindow=null,this.pollId=null,bt.currentPopupAction&&bt.currentPopupAction.cancel(),bt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return A(e,this.auth,"internal-error"),e}async onExecution(){Me(this.filter.length===1,"Popup operations only handle one event");const e=kr();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Te(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Te(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,bt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Te(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,im.get())};e()}}bt.currentPopupAction=null;/**
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
 */const rm="pendingRedirect",Wn=new Map;class om extends Fc{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Wn.get(this.auth._key());if(!e){try{const s=await am(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Wn.set(this.auth._key(),e)}return this.bypassAuthState||Wn.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function am(n,e){const t=um(e),s=cm(n);if(!await s._isAvailable())return!1;const i=await s._get(t)==="true";return await s._remove(t),i}function lm(n,e){Wn.set(n._key(),e)}function cm(n){return Pe(n._redirectPersistence)}function um(n){return Bn(rm,n.config.apiKey,n.name)}async function hm(n,e,t=!1){if(ze(n.app))return Promise.reject(lt(n));const s=Rr(n),i=em(s,e),o=await new om(s,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const dm=10*60*1e3;class fm{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!pm(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!Bc(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(Te(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=dm&&this.cachedEventUids.clear(),this.cachedEventUids.has(jo(e))}saveEventToCache(e){this.cachedEventUids.add(jo(e)),this.lastProcessedEventTime=Date.now()}}function jo(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Bc({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function pm(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Bc(n);default:return!1}}/**
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
 */async function _m(n,e={}){return Ht(n,"GET","/v1/projects",e)}/**
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
 */const gm=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,mm=/^https?/;async function vm(n){if(n.config.emulator)return;const{authorizedDomains:e}=await _m(n);for(const t of e)try{if(ym(t))return}catch{}Le(n,"unauthorized-domain")}function ym(n){const e=Ti(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===s}if(!mm.test(t))return!1;if(gm.test(n))return s===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const Em=new In(3e4,6e4);function qo(){const n=Se().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function wm(n){return new Promise((e,t)=>{var s,i,r;function o(){qo(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{qo(),t(Te(n,"network-request-failed"))},timeout:Em.get()})}if(!((i=(s=Se().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=Se().gapi)===null||r===void 0)&&r.load)o();else{const a=Sg("iframefcb");return Se()[a]=()=>{gapi.load?o():t(Te(n,"network-request-failed"))},Cg(`${Tg()}?onload=${a}`).catch(l=>t(l))}}).catch(e=>{throw Vn=null,e})}let Vn=null;function bm(n){return Vn=Vn||wm(n),Vn}/**
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
 */const Im=new In(5e3,15e3),Cm="__/auth/iframe",Tm="emulator/auth/iframe",Sm={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Rm=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Am(n){const e=n.config;A(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Ir(e,Tm):`https://${n.config.authDomain}/${Cm}`,s={apiKey:e.apiKey,appName:n.name,v:mt},i=Rm.get(n.config.apiHost);i&&(s.eid=i);const r=n._getFrameworks();return r.length&&(s.fw=r.join(",")),`${t}?${Bt(s).slice(1)}`}async function km(n){const e=await bm(n),t=Se().gapi;return A(t,n,"internal-error"),e.open({where:document.body,url:Am(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Sm,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=Te(n,"network-request-failed"),a=Se().setTimeout(()=>{r(o)},Im.get());function l(){Se().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const Nm={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Dm=500,Pm=600,Om="_blank",xm="http://localhost";class zo{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Lm(n,e,t,s=Dm,i=Pm){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Nm),{width:s.toString(),height:i.toString(),top:r,left:o}),c=le().toLowerCase();t&&(a=yc(c)?Om:t),vc(c)&&(e=e||xm,l.scrollbars="yes");const h=Object.entries(l).reduce((d,[f,_])=>`${d}${f}=${_},`,"");if(_g(c)&&a!=="_self")return Mm(e||"",a),new zo(null);const u=window.open(e||"",a,h);A(u,n,"popup-blocked");try{u.focus()}catch{}return new zo(u)}function Mm(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const Um="__/auth/handler",Fm="emulator/auth/handler",Bm=encodeURIComponent("fac");async function Go(n,e,t,s,i,r){A(n.config.authDomain,n,"auth-domain-config-required"),A(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:mt,eventId:i};if(e instanceof Ac){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",si(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,u]of Object.entries(r||{}))o[h]=u}if(e instanceof Cn){const h=e.getScopes().filter(u=>u!=="");h.length>0&&(o.scopes=h.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const l=await n._getAppCheckToken(),c=l?`#${Bm}=${encodeURIComponent(l)}`:"";return`${Wm(n)}?${Bt(a).slice(1)}${c}`}function Wm({config:n}){return n.emulator?Ir(n,Fm):`https://${n.authDomain}/${Um}`}/**
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
 */const zs="webStorageSupport";class Vm{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Oc,this._completeRedirectFn=hm,this._overrideRedirectResult=lm}async _openPopup(e,t,s,i){var r;Me((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await Go(e,t,s,Ti(),i);return Lm(e,o,kr())}async _openRedirect(e,t,s,i){await this._originValidation(e);const r=await Go(e,t,s,Ti(),i);return jg(r),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:r}=this.eventManagers[t];return i?Promise.resolve(i):(Me(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await km(e),s=new fm(e);return t.register("authEvent",i=>(A(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(zs,{type:zs},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[zs];o!==void 0&&t(!!o),Le(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=vm(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Cc()||Sr()||Cs()}}const $m=Vm;var Ko="@firebase/auth",Yo="1.7.2";/**
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
 */class Hm{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){A(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function jm(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function qm(n){ut(new Je("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;A(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Tc(n)},c=new bg(s,i,r,l);return Ag(c,t),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),ut(new Je("auth-internal",e=>{const t=Rr(e.getProvider("auth").getImmediate());return(s=>new Hm(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ce(Ko,Yo,jm(n)),Ce(Ko,Yo,"esm2017")}/**
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
 */const zm=5*60,Gm=wa("authIdTokenMaxAge")||zm;let Qo=null;const Km=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>Gm)return;const i=t==null?void 0:t.token;Qo!==i&&(Qo=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Ym(n=Oi()){const e=ds(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Rg(n,{popupRedirectResolver:$m,persistence:[Zg,Vg,Oc]}),s=wa("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(s,location.origin);if(location.origin===r.origin){const o=Km(r.toString());Ug(t,o,()=>o(t.currentUser)),Mg(t,a=>o(a))}}const i=va("auth");return i&&kg(t,`http://${i}`),t}function Qm(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}Ig({loadJS(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=i=>{const r=Te("internal-error");r.customData=i,t(r)},s.type="text/javascript",s.charset="UTF-8",Qm().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});qm("Browser");const Jm={apiKey:"AIzaSyD1bUd4QHmDnXtuA1SZgvxiaRcmuEVLpWo",authDomain:"instagram-imitation-180e8.firebaseapp.com",databaseURL:"https://instagram-imitation-180e8-default-rtdb.firebaseio.com",projectId:"instagram-imitation-180e8",storageBucket:"instagram-imitation-180e8.appspot.com",messagingSenderId:"266282768545",appId:"1:266282768545:web:07dbf92d25e2a93b3078e0"},Rs=Aa(Jm);Ym(Rs);const gn=Mp(Rs);lc(Rs);const Xm="/Instagram-Imitation/assets/Instagram_logo_light-WGj1KLTg.png";var Wc={exports:{}},xn={exports:{}};/*!
  * Bootstrap index.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var Jo;function et(){return Jo||(Jo=1,function(n,e){(function(t,s){s(e)})(me,function(t){const r="transitionend",o=p=>p==null?`${p}`:Object.prototype.toString.call(p).match(/\s([a-z]+)/i)[1].toLowerCase(),a=p=>{do p+=Math.floor(Math.random()*1e6);while(document.getElementById(p));return p},l=p=>{let S=p.getAttribute("data-bs-target");if(!S||S==="#"){let N=p.getAttribute("href");if(!N||!N.includes("#")&&!N.startsWith("."))return null;N.includes("#")&&!N.startsWith("#")&&(N=`#${N.split("#")[1]}`),S=N&&N!=="#"?N.trim():null}return S},c=p=>{const S=l(p);return S&&document.querySelector(S)?S:null},h=p=>{const S=l(p);return S?document.querySelector(S):null},u=p=>{if(!p)return 0;let{transitionDuration:S,transitionDelay:N}=window.getComputedStyle(p);const G=Number.parseFloat(S),z=Number.parseFloat(N);return!G&&!z?0:(S=S.split(",")[0],N=N.split(",")[0],(Number.parseFloat(S)+Number.parseFloat(N))*1e3)},d=p=>{p.dispatchEvent(new Event(r))},f=p=>!p||typeof p!="object"?!1:(typeof p.jquery<"u"&&(p=p[0]),typeof p.nodeType<"u"),_=p=>f(p)?p.jquery?p[0]:p:typeof p=="string"&&p.length>0?document.querySelector(p):null,v=p=>{if(!f(p)||p.getClientRects().length===0)return!1;const S=getComputedStyle(p).getPropertyValue("visibility")==="visible",N=p.closest("details:not([open])");if(!N)return S;if(N!==p){const G=p.closest("summary");if(G&&G.parentNode!==N||G===null)return!1}return S},E=p=>!p||p.nodeType!==Node.ELEMENT_NODE||p.classList.contains("disabled")?!0:typeof p.disabled<"u"?p.disabled:p.hasAttribute("disabled")&&p.getAttribute("disabled")!=="false",y=p=>{if(!document.documentElement.attachShadow)return null;if(typeof p.getRootNode=="function"){const S=p.getRootNode();return S instanceof ShadowRoot?S:null}return p instanceof ShadowRoot?p:p.parentNode?y(p.parentNode):null},C=()=>{},g=p=>{p.offsetHeight},T=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,D=[],w=p=>{document.readyState==="loading"?(D.length||document.addEventListener("DOMContentLoaded",()=>{for(const S of D)S()}),D.push(p)):p()},I=()=>document.documentElement.dir==="rtl",k=p=>{w(()=>{const S=T();if(S){const N=p.NAME,G=S.fn[N];S.fn[N]=p.jQueryInterface,S.fn[N].Constructor=p,S.fn[N].noConflict=()=>(S.fn[N]=G,p.jQueryInterface)}})},P=p=>{typeof p=="function"&&p()},W=(p,S,N=!0)=>{if(!N){P(p);return}const z=u(S)+5;let X=!1;const de=({target:Ae})=>{Ae===S&&(X=!0,S.removeEventListener(r,de),P(p))};S.addEventListener(r,de),setTimeout(()=>{X||d(S)},z)},V=(p,S,N,G)=>{const z=p.length;let X=p.indexOf(S);return X===-1?!N&&G?p[z-1]:p[0]:(X+=N?1:-1,G&&(X=(X+z)%z),p[Math.max(0,Math.min(X,z-1))])};t.defineJQueryPlugin=k,t.execute=P,t.executeAfterTransition=W,t.findShadowRoot=y,t.getElement=_,t.getElementFromSelector=h,t.getNextActiveElement=V,t.getSelectorFromElement=c,t.getTransitionDurationFromElement=u,t.getUID=a,t.getjQuery=T,t.isDisabled=E,t.isElement=f,t.isRTL=I,t.isVisible=v,t.noop=C,t.onDOMContentLoaded=w,t.reflow=g,t.toType=o,t.triggerTransitionEnd=d,Object.defineProperties(t,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})})}(xn,xn.exports)),xn.exports}var Gs={exports:{}};/*!
  * Bootstrap event-handler.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var Xo;function Sn(){return Xo||(Xo=1,function(n,e){(function(t,s){n.exports=s(et())})(me,function(t){const s=/[^.]*(?=\..*)\.|.*/,i=/\..*/,r=/::\d+$/,o={};let a=1;const l={mouseenter:"mouseover",mouseleave:"mouseout"},c=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function h(w,I){return I&&`${I}::${a++}`||w.uidEvent||a++}function u(w){const I=h(w);return w.uidEvent=I,o[I]=o[I]||{},o[I]}function d(w,I){return function k(P){return D(P,{delegateTarget:w}),k.oneOff&&T.off(w,P.type,I),I.apply(w,[P])}}function f(w,I,k){return function P(W){const V=w.querySelectorAll(I);for(let{target:p}=W;p&&p!==this;p=p.parentNode)for(const S of V)if(S===p)return D(W,{delegateTarget:p}),P.oneOff&&T.off(w,W.type,I,k),k.apply(p,[W])}}function _(w,I,k=null){return Object.values(w).find(P=>P.callable===I&&P.delegationSelector===k)}function v(w,I,k){const P=typeof I=="string",W=P?k:I||k;let V=g(w);return c.has(V)||(V=w),[P,W,V]}function E(w,I,k,P,W){if(typeof I!="string"||!w)return;let[V,p,S]=v(I,k,P);I in l&&(p=(As=>function(Be){if(!Be.relatedTarget||Be.relatedTarget!==Be.delegateTarget&&!Be.delegateTarget.contains(Be.relatedTarget))return As.call(this,Be)})(p));const N=u(w),G=N[S]||(N[S]={}),z=_(G,p,V?k:null);if(z){z.oneOff=z.oneOff&&W;return}const X=h(p,I.replace(s,"")),de=V?f(w,k,p):d(w,p);de.delegationSelector=V?k:null,de.callable=p,de.oneOff=W,de.uidEvent=X,G[X]=de,w.addEventListener(S,de,V)}function y(w,I,k,P,W){const V=_(I[k],P,W);V&&(w.removeEventListener(k,V,!!W),delete I[k][V.uidEvent])}function C(w,I,k,P){const W=I[k]||{};for(const V of Object.keys(W))if(V.includes(P)){const p=W[V];y(w,I,k,p.callable,p.delegationSelector)}}function g(w){return w=w.replace(i,""),l[w]||w}const T={on(w,I,k,P){E(w,I,k,P,!1)},one(w,I,k,P){E(w,I,k,P,!0)},off(w,I,k,P){if(typeof I!="string"||!w)return;const[W,V,p]=v(I,k,P),S=p!==I,N=u(w),G=N[p]||{},z=I.startsWith(".");if(typeof V<"u"){if(!Object.keys(G).length)return;y(w,N,p,V,W?k:null);return}if(z)for(const X of Object.keys(N))C(w,N,X,I.slice(1));for(const X of Object.keys(G)){const de=X.replace(r,"");if(!S||I.includes(de)){const Ae=G[X];y(w,N,p,Ae.callable,Ae.delegationSelector)}}},trigger(w,I,k){if(typeof I!="string"||!w)return null;const P=t.getjQuery(),W=g(I),V=I!==W;let p=null,S=!0,N=!0,G=!1;V&&P&&(p=P.Event(I,k),P(w).trigger(p),S=!p.isPropagationStopped(),N=!p.isImmediatePropagationStopped(),G=p.isDefaultPrevented());let z=new Event(I,{bubbles:S,cancelable:!0});return z=D(z,k),G&&z.preventDefault(),N&&w.dispatchEvent(z),z.defaultPrevented&&p&&p.preventDefault(),z}};function D(w,I){for(const[k,P]of Object.entries(I||{}))try{w[k]=P}catch{Object.defineProperty(w,k,{configurable:!0,get(){return P}})}return w}return T})}(Gs)),Gs.exports}var Ks={exports:{}};/*!
  * Bootstrap selector-engine.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var Zo;function Dr(){return Zo||(Zo=1,function(n,e){(function(t,s){n.exports=s(et())})(me,function(t){return{find(i,r=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(r,i))},findOne(i,r=document.documentElement){return Element.prototype.querySelector.call(r,i)},children(i,r){return[].concat(...i.children).filter(o=>o.matches(r))},parents(i,r){const o=[];let a=i.parentNode.closest(r);for(;a;)o.push(a),a=a.parentNode.closest(r);return o},prev(i,r){let o=i.previousElementSibling;for(;o;){if(o.matches(r))return[o];o=o.previousElementSibling}return[]},next(i,r){let o=i.nextElementSibling;for(;o;){if(o.matches(r))return[o];o=o.nextElementSibling}return[]},focusableChildren(i){const r=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(o=>`${o}:not([tabindex^="-"])`).join(",");return this.find(r,i).filter(o=>!t.isDisabled(o)&&t.isVisible(o))}}})}(Ks)),Ks.exports}var Ys={exports:{}},Qs={exports:{}};/*!
  * Bootstrap manipulator.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var ea;function Vc(){return ea||(ea=1,function(n,e){(function(t,s){n.exports=s()})(me,function(){function t(r){if(r==="true")return!0;if(r==="false")return!1;if(r===Number(r).toString())return Number(r);if(r===""||r==="null")return null;if(typeof r!="string")return r;try{return JSON.parse(decodeURIComponent(r))}catch{return r}}function s(r){return r.replace(/[A-Z]/g,o=>`-${o.toLowerCase()}`)}return{setDataAttribute(r,o,a){r.setAttribute(`data-bs-${s(o)}`,a)},removeDataAttribute(r,o){r.removeAttribute(`data-bs-${s(o)}`)},getDataAttributes(r){if(!r)return{};const o={},a=Object.keys(r.dataset).filter(l=>l.startsWith("bs")&&!l.startsWith("bsConfig"));for(const l of a){let c=l.replace(/^bs/,"");c=c.charAt(0).toLowerCase()+c.slice(1,c.length),o[c]=t(r.dataset[l])}return o},getDataAttribute(r,o){return t(r.getAttribute(`data-bs-${s(o)}`))}}})}(Qs)),Qs.exports}/*!
  * Bootstrap scrollbar.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var ta;function Zm(){return ta||(ta=1,function(n,e){(function(t,s){n.exports=s(Dr(),Vc(),et())})(me,function(t,s,i){const r=f=>f&&typeof f=="object"&&"default"in f?f:{default:f},o=r(t),a=r(s),l=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",c=".sticky-top",h="padding-right",u="margin-right";class d{constructor(){this._element=document.body}getWidth(){const _=document.documentElement.clientWidth;return Math.abs(window.innerWidth-_)}hide(){const _=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,h,v=>v+_),this._setElementAttributes(l,h,v=>v+_),this._setElementAttributes(c,u,v=>v-_)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,h),this._resetElementAttributes(l,h),this._resetElementAttributes(c,u)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(_,v,E){const y=this.getWidth(),C=g=>{if(g!==this._element&&window.innerWidth>g.clientWidth+y)return;this._saveInitialAttribute(g,v);const T=window.getComputedStyle(g).getPropertyValue(v);g.style.setProperty(v,`${E(Number.parseFloat(T))}px`)};this._applyManipulationCallback(_,C)}_saveInitialAttribute(_,v){const E=_.style.getPropertyValue(v);E&&a.default.setDataAttribute(_,v,E)}_resetElementAttributes(_,v){const E=y=>{const C=a.default.getDataAttribute(y,v);if(C===null){y.style.removeProperty(v);return}a.default.removeDataAttribute(y,v),y.style.setProperty(v,C)};this._applyManipulationCallback(_,E)}_applyManipulationCallback(_,v){if(i.isElement(_)){v(_);return}for(const E of o.default.find(_,this._element))v(E)}}return d})}(Ys)),Ys.exports}var Js={exports:{}},Xs={exports:{}};/*!
  * Bootstrap data.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var na;function ev(){return na||(na=1,function(n,e){(function(t,s){n.exports=s()})(me,function(){const t=new Map;return{set(i,r,o){t.has(i)||t.set(i,new Map);const a=t.get(i);if(!a.has(r)&&a.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(a.keys())[0]}.`);return}a.set(r,o)},get(i,r){return t.has(i)&&t.get(i).get(r)||null},remove(i,r){if(!t.has(i))return;const o=t.get(i);o.delete(r),o.size===0&&t.delete(i)}}})}(Xs)),Xs.exports}var Zs={exports:{}};/*!
  * Bootstrap config.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var sa;function Pr(){return sa||(sa=1,function(n,e){(function(t,s){n.exports=s(et(),Vc())})(me,function(t,s){const r=(a=>a&&typeof a=="object"&&"default"in a?a:{default:a})(s);class o{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(l){return l=this._mergeConfigObj(l),l=this._configAfterMerge(l),this._typeCheckConfig(l),l}_configAfterMerge(l){return l}_mergeConfigObj(l,c){const h=t.isElement(c)?r.default.getDataAttribute(c,"config"):{};return{...this.constructor.Default,...typeof h=="object"?h:{},...t.isElement(c)?r.default.getDataAttributes(c):{},...typeof l=="object"?l:{}}}_typeCheckConfig(l,c=this.constructor.DefaultType){for(const h of Object.keys(c)){const u=c[h],d=l[h],f=t.isElement(d)?"element":t.toType(d);if(!new RegExp(u).test(f))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${h}" provided type "${f}" but expected type "${u}".`)}}}return o})}(Zs)),Zs.exports}/*!
  * Bootstrap base-component.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var ia;function tv(){return ia||(ia=1,function(n,e){(function(t,s){n.exports=s(ev(),et(),Sn(),Pr())})(me,function(t,s,i,r){const o=d=>d&&typeof d=="object"&&"default"in d?d:{default:d},a=o(t),l=o(i),c=o(r),h="5.2.3";class u extends c.default{constructor(f,_){super(),f=s.getElement(f),f&&(this._element=f,this._config=this._getConfig(_),a.default.set(this._element,this.constructor.DATA_KEY,this))}dispose(){a.default.remove(this._element,this.constructor.DATA_KEY),l.default.off(this._element,this.constructor.EVENT_KEY);for(const f of Object.getOwnPropertyNames(this))this[f]=null}_queueCallback(f,_,v=!0){s.executeAfterTransition(f,_,v)}_getConfig(f){return f=this._mergeConfigObj(f,this._element),f=this._configAfterMerge(f),this._typeCheckConfig(f),f}static getInstance(f){return a.default.get(s.getElement(f),this.DATA_KEY)}static getOrCreateInstance(f,_={}){return this.getInstance(f)||new this(f,typeof _=="object"?_:null)}static get VERSION(){return h}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(f){return`${f}${this.EVENT_KEY}`}}return u})}(Js)),Js.exports}var ei={exports:{}};/*!
  * Bootstrap backdrop.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var ra;function nv(){return ra||(ra=1,function(n,e){(function(t,s){n.exports=s(Sn(),et(),Pr())})(me,function(t,s,i){const r=v=>v&&typeof v=="object"&&"default"in v?v:{default:v},o=r(t),a=r(i),l="backdrop",c="fade",h="show",u=`mousedown.bs.${l}`,d={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},f={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class _ extends a.default{constructor(E){super(),this._config=this._getConfig(E),this._isAppended=!1,this._element=null}static get Default(){return d}static get DefaultType(){return f}static get NAME(){return l}show(E){if(!this._config.isVisible){s.execute(E);return}this._append();const y=this._getElement();this._config.isAnimated&&s.reflow(y),y.classList.add(h),this._emulateAnimation(()=>{s.execute(E)})}hide(E){if(!this._config.isVisible){s.execute(E);return}this._getElement().classList.remove(h),this._emulateAnimation(()=>{this.dispose(),s.execute(E)})}dispose(){this._isAppended&&(o.default.off(this._element,u),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const E=document.createElement("div");E.className=this._config.className,this._config.isAnimated&&E.classList.add(c),this._element=E}return this._element}_configAfterMerge(E){return E.rootElement=s.getElement(E.rootElement),E}_append(){if(this._isAppended)return;const E=this._getElement();this._config.rootElement.append(E),o.default.on(E,u,()=>{s.execute(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(E){s.executeAfterTransition(E,this._getElement(),this._config.isAnimated)}}return _})}(ei)),ei.exports}var ti={exports:{}};/*!
  * Bootstrap focustrap.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var oa;function sv(){return oa||(oa=1,function(n,e){(function(t,s){n.exports=s(Sn(),Dr(),Pr())})(me,function(t,s,i){const r=T=>T&&typeof T=="object"&&"default"in T?T:{default:T},o=r(t),a=r(s),l=r(i),c="focustrap",u=".bs.focustrap",d=`focusin${u}`,f=`keydown.tab${u}`,_="Tab",v="forward",E="backward",y={autofocus:!0,trapElement:null},C={autofocus:"boolean",trapElement:"element"};class g extends l.default{constructor(D){super(),this._config=this._getConfig(D),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return y}static get DefaultType(){return C}static get NAME(){return c}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),o.default.off(document,u),o.default.on(document,d,D=>this._handleFocusin(D)),o.default.on(document,f,D=>this._handleKeydown(D)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,o.default.off(document,u))}_handleFocusin(D){const{trapElement:w}=this._config;if(D.target===document||D.target===w||w.contains(D.target))return;const I=a.default.focusableChildren(w);I.length===0?w.focus():this._lastTabNavDirection===E?I[I.length-1].focus():I[0].focus()}_handleKeydown(D){D.key===_&&(this._lastTabNavDirection=D.shiftKey?E:v)}}return g})}(ti)),ti.exports}var Ln={exports:{}};/*!
  * Bootstrap component-functions.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var aa;function iv(){return aa||(aa=1,function(n,e){(function(t,s){s(e,Sn(),et())})(me,function(t,s,i){const o=(l=>l&&typeof l=="object"&&"default"in l?l:{default:l})(s),a=(l,c="hide")=>{const h=`click.dismiss${l.EVENT_KEY}`,u=l.NAME;o.default.on(document,h,`[data-bs-dismiss="${u}"]`,function(d){if(["A","AREA"].includes(this.tagName)&&d.preventDefault(),i.isDisabled(this))return;const f=i.getElementFromSelector(this)||this.closest(`.${u}`);l.getOrCreateInstance(f)[c]()})};t.enableDismissTrigger=a,Object.defineProperties(t,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})})}(Ln,Ln.exports)),Ln.exports}/*!
  * Bootstrap modal.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */(function(n,e){(function(t,s){n.exports=s(et(),Sn(),Dr(),Zm(),tv(),nv(),sv(),iv())})(me,function(t,s,i,r,o,a,l,c){const h=nt=>nt&&typeof nt=="object"&&"default"in nt?nt:{default:nt},u=h(s),d=h(i),f=h(r),_=h(o),v=h(a),E=h(l),y="modal",g=".bs.modal",T=".data-api",D="Escape",w=`hide${g}`,I=`hidePrevented${g}`,k=`hidden${g}`,P=`show${g}`,W=`shown${g}`,V=`resize${g}`,p=`click.dismiss${g}`,S=`mousedown.dismiss${g}`,N=`keydown.dismiss${g}`,G=`click${g}${T}`,z="modal-open",X="fade",de="show",Ae="modal-static",As=".modal.show",Be=".modal-dialog",$c=".modal-body",Hc='[data-bs-toggle="modal"]',jc={backdrop:!0,focus:!0,keyboard:!0},qc={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class tt extends _.default{constructor(U,Z){super(U,Z),this._dialog=d.default.findOne(Be,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new f.default,this._addEventListeners()}static get Default(){return jc}static get DefaultType(){return qc}static get NAME(){return y}toggle(U){return this._isShown?this.hide():this.show(U)}show(U){this._isShown||this._isTransitioning||u.default.trigger(this._element,P,{relatedTarget:U}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(z),this._adjustDialog(),this._backdrop.show(()=>this._showElement(U)))}hide(){!this._isShown||this._isTransitioning||u.default.trigger(this._element,w).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(de),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){for(const U of[window,this._dialog])u.default.off(U,g);this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new v.default({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new E.default({trapElement:this._element})}_showElement(U){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const Z=d.default.findOne($c,this._dialog);Z&&(Z.scrollTop=0),t.reflow(this._element),this._element.classList.add(de);const ve=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,u.default.trigger(this._element,W,{relatedTarget:U})};this._queueCallback(ve,this._dialog,this._isAnimated())}_addEventListeners(){u.default.on(this._element,N,U=>{if(U.key===D){if(this._config.keyboard){U.preventDefault(),this.hide();return}this._triggerBackdropTransition()}}),u.default.on(window,V,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),u.default.on(this._element,S,U=>{u.default.one(this._element,p,Z=>{if(!(this._element!==U.target||this._element!==Z.target)){if(this._config.backdrop==="static"){this._triggerBackdropTransition();return}this._config.backdrop&&this.hide()}})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(z),this._resetAdjustments(),this._scrollBar.reset(),u.default.trigger(this._element,k)})}_isAnimated(){return this._element.classList.contains(X)}_triggerBackdropTransition(){if(u.default.trigger(this._element,I).defaultPrevented)return;const Z=this._element.scrollHeight>document.documentElement.clientHeight,ve=this._element.style.overflowY;ve==="hidden"||this._element.classList.contains(Ae)||(Z||(this._element.style.overflowY="hidden"),this._element.classList.add(Ae),this._queueCallback(()=>{this._element.classList.remove(Ae),this._queueCallback(()=>{this._element.style.overflowY=ve},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const U=this._element.scrollHeight>document.documentElement.clientHeight,Z=this._scrollBar.getWidth(),ve=Z>0;if(ve&&!U){const jt=t.isRTL()?"paddingLeft":"paddingRight";this._element.style[jt]=`${Z}px`}if(!ve&&U){const jt=t.isRTL()?"paddingRight":"paddingLeft";this._element.style[jt]=`${Z}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(U,Z){return this.each(function(){const ve=tt.getOrCreateInstance(this,U);if(typeof U=="string"){if(typeof ve[U]>"u")throw new TypeError(`No method named "${U}"`);ve[U](Z)}})}}return u.default.on(document,G,Hc,function(nt){const U=t.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&nt.preventDefault(),u.default.one(U,P,jt=>{jt.defaultPrevented||u.default.one(U,k,()=>{t.isVisible(this)&&this.focus()})});const Z=d.default.findOne(As);Z&&tt.getInstance(Z).hide(),tt.getOrCreateInstance(U).toggle(this)}),c.enableDismissTrigger(tt),t.defineJQueryPlugin(tt),tt})})(Wc);var rv=Wc.exports;const ov=zc(rv),av=Gc("userDataList",()=>{const n=ae(null);async function e(){try{const i=localStorage.getItem("long-lived-access-token"),r=localStorage.getItem("user_id");if(!i||!r)throw new Error("Access token or user ID is missing.");const o=await Kc.get(`https://graph.instagram.com/${r}?fields=account_type,id,media_count,username&access_token=${i}`);n.value=o.data,t(o.data.id)}catch(i){console.error("Error fetching user data:",i)}}async function t(i){const r=pn(gn,"userData");jl(r,async o=>{const a=[];o.forEach(c=>{const h=c.key,u=c.val();a.push({key:h,...u})});const l=a.find(c=>c.id===i);l||await s(i),n.value={...n.value,...l}})}async function s(i){const r=pn(gn,"userData");if(!n.value){console.error("User data is null.");return}const o={id:i.toString(),media_url:"https://firebasestorage.googleapis.com/v0/b/instagram-imitation-180e8.appspot.com/o/user%2Fkarsten-winegeart-NE0XGVKTmcA-unsplash.jpg?alt=media&token=9f250d7f-e2e5-46fa-bad9-bcae3001951f",username:n.value.username};try{await Hl(r,o),console.log("Data successfully written to Firebase!")}catch(a){console.error("Error writing data to Firebase:",a)}}return{userData:n,getUserData:e}}),Rn=n=>(da("data-v-35a63ebf"),n=n(),fa(),n),lv=Rn(()=>b("button",{type:"button",class:"btn-close btn-close-white position-absolute top-0 end-0 m-3","data-bs-dismiss":"modal","aria-label":"Close"},null,-1)),cv={class:"modal-content my-5"},uv={class:"modal-header d-flex justify-content-center"},hv=Rn(()=>b("h5",{class:"modal-title",id:"exampleModalLabel"},"建立新貼文",-1)),dv={class:"d-flex flex-sm-column flex-md-row"},fv={key:0,class:"modal-body align-items-center p-5"},pv={class:"d-flex flex-column align-items-center justify-content-center"},_v=Rn(()=>b("i",{class:"bi bi-image pic-icon"},null,-1)),gv=Rn(()=>b("div",null,"將相片和影片拖曳到這裡",-1)),mv=Rn(()=>b("label",{for:"file-input",class:"file-input-button btn btn-primary m-3"},"從電腦選擇",-1)),vv={key:1,class:"modal-body d-flex flex-column align-items-center input-img-area p-0"},yv=["src"],Ev={key:2,class:"border-start p-2 w-100"},wv={class:"d-flex align-self-center align-middle"},bv={class:"rounded-circle user-pic"},Iv=["src"],Cv={class:"align-middle my-auto ms-2 fw-bold"},Tv={__name:"addNewModalComponent",setup(n,{expose:e}){const t=ae(!1),s=ae(null),i=ae(null);e({showModal:function(){s.value.show(),o.value="",h.value=!1,c.value.style.maxWidth="700px",a.value=null}}),ni(()=>{s.value=new ov(i.value)});const o=ae(null),a=ae(null),l=function(y){t.value=!0;let C=y.target;if(a.value=y.target.files[0],C.files){let g=new FileReader;g.onload=T=>{o.value=T.target.result,t.value=!1},g.readAsDataURL(C.files[0])}},c=ae(null),h=ae(!1),u=function(){h.value===!0?f():(c.value.style.maxWidth="1000px",h.value=!0)},d=()=>{h.value===!0&&(c.value.style.maxWidth="700px",h.value=!1),o.value=null},f=async()=>{t.value=!0;const y=a.value;if(!y){console.error("No file selected.");return}const C=lc(Rs),g=K_(C,"posts/"+y.name);try{await z_(g,y);const T=await G_(g);console.log(T),T&&E(T)}catch(T){t.value=!1,console.error("Error uploading image:",T)}},_=av(),v=ae(""),E=function(y){const C=Date.now(),g=pn(gn,"postsData"),T={caption:v.value,id:C+_.userData.id,isThumb:!1,media_type:"IMAGE",media_url:[y],permalink:"",postownerid:_.userData.id,timestamp:new Date().toISOString(),username:_.userData.username};Hl(g,T).then(()=>{console.log("Data successfully written to Firebase!"),s.value.hide(),v.value="",t.value=!1}).catch(D=>{t.value=!1,console.error("Error writing data to Firebase:",D)})};return(y,C)=>{const g=ca("loading-overlay");return $(),H(Jt,null,[b("div",{class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref_key:"addNewModal",ref:i},[lv,b("div",{class:"modal-dialog",ref_key:"modalDialog",ref:c},[b("div",cv,[b("div",uv,[o.value?($(),H("button",{key:0,class:"btn position-absolute start-0 mx-3 text-primary",onClick:d}," 上一步 ")):oe("",!0),hv,o.value?($(),H("button",{key:1,class:"btn position-absolute end-0 mx-3 text-primary",onClick:u}," 下一步 ")):oe("",!0)]),b("div",dv,[o.value?($(),H("div",vv,[b("img",{src:o.value,alt:"",class:"input-img"},null,8,yv)])):($(),H("div",fv,[b("div",pv,[_v,gv,mv,b("input",{type:"file",id:"file-input",accept:"audio/*,video/*,image/*",onChange:C[0]||(C[0]=T=>l(T))},null,32)])])),h.value?($(),H("div",Ev,[b("div",wv,[b("div",bv,[b("img",{src:Or(_).userData.media_url,alt:""},null,8,Iv)]),b("p",Cv,Mn(Or(_).userData.username),1)]),ua(b("textarea",{type:"text",placeholder:"撰寫說明文字......",class:"postDescriptionInput py-2 w-100","onUpdate:modelValue":C[1]||(C[1]=T=>v.value=T)},null,512),[[ha,v.value]])])):oe("",!0)])])],512)],512),Qt(g,{active:t.value,"is-full-page":!0},null,8,["active"])],64)}}},Sv=la(Tv,[["__scopeId","data-v-35a63ebf"]]),Rv={class:"col-md-1 col-lg-2 nav-all p-md-3 overflow-hidden position-relative"},Av=b("div",{class:"w-100 position-relative"},[b("div",{class:"navbar navbar-light header-nav"},[b("img",{src:Xm,alt:"",class:"logo d-md-none d-lg-block d-sm-block"}),b("svg",{"aria-label":"Instagram",class:"d-none d-lg-none d-md-block logo",fill:"currentColor",height:"24",role:"img",viewBox:"0 0 24 24",width:"24"},[b("title",null,"Instagram"),b("path",{d:"M12 2.982c2.937 0 3.285.011 4.445.064a6.087 6.087 0 0 1 2.042.379 3.408 3.408 0 0 1 1.265.823 3.408 3.408 0 0 1 .823 1.265 6.087 6.087 0 0 1 .379 2.042c.053 1.16.064 1.508.064 4.445s-.011 3.285-.064 4.445a6.087 6.087 0 0 1-.379 2.042 3.643 3.643 0 0 1-2.088 2.088 6.087 6.087 0 0 1-2.042.379c-1.16.053-1.508.064-4.445.064s-3.285-.011-4.445-.064a6.087 6.087 0 0 1-2.043-.379 3.408 3.408 0 0 1-1.264-.823 3.408 3.408 0 0 1-.823-1.265 6.087 6.087 0 0 1-.379-2.042c-.053-1.16-.064-1.508-.064-4.445s.011-3.285.064-4.445a6.087 6.087 0 0 1 .379-2.042 3.408 3.408 0 0 1 .823-1.265 3.408 3.408 0 0 1 1.265-.823 6.087 6.087 0 0 1 2.042-.379c1.16-.053 1.508-.064 4.445-.064M12 1c-2.987 0-3.362.013-4.535.066a8.074 8.074 0 0 0-2.67.511 5.392 5.392 0 0 0-1.949 1.27 5.392 5.392 0 0 0-1.269 1.948 8.074 8.074 0 0 0-.51 2.67C1.012 8.638 1 9.013 1 12s.013 3.362.066 4.535a8.074 8.074 0 0 0 .511 2.67 5.392 5.392 0 0 0 1.27 1.949 5.392 5.392 0 0 0 1.948 1.269 8.074 8.074 0 0 0 2.67.51C8.638 22.988 9.013 23 12 23s3.362-.013 4.535-.066a8.074 8.074 0 0 0 2.67-.511 5.625 5.625 0 0 0 3.218-3.218 8.074 8.074 0 0 0 .51-2.67C22.988 15.362 23 14.987 23 12s-.013-3.362-.066-4.535a8.074 8.074 0 0 0-.511-2.67 5.392 5.392 0 0 0-1.27-1.949 5.392 5.392 0 0 0-1.948-1.269 8.074 8.074 0 0 0-2.67-.51C15.362 1.012 14.987 1 12 1Zm0 5.351A5.649 5.649 0 1 0 17.649 12 5.649 5.649 0 0 0 12 6.351Zm0 9.316A3.667 3.667 0 1 1 15.667 12 3.667 3.667 0 0 1 12 15.667Zm5.872-10.859a1.32 1.32 0 1 0 1.32 1.32 1.32 1.32 0 0 0-1.32-1.32Z"})])])],-1),kv={class:"w-100 my-md-3"},Nv={class:"bg-body d-flex flex-md-column position-fixed nav-selection bottom-0 start-0 justify-content-evenly justify-content-md-start"},Dv={class:"nav-item rounded px-2 ms-md-3"},Pv=b("div",null,[b("i",{class:"bi bi-house-door icon-size"})],-1),Ov=b("div",null,[b("span",{class:"d-none d-lg-inline p-2"},"首頁")],-1),xv={class:"nav-item rounded px-2 ms-md-3"},Lv=b("div",null,[b("i",{class:"bi bi-plus-square icon-size"})],-1),Mv=b("div",null,[b("span",{class:"d-none d-lg-inline p-2"},"建立")],-1),Uv={class:"nav-item rounded px-2 ms-md-3"},Fv=b("div",null,[b("i",{class:"bi bi-person-circle icon-size"})],-1),Bv=b("div",null,[b("span",{class:"d-none d-lg-inline p-2"},"個人檔案")],-1),Iy={__name:"navComponent",setup(n){const e=ae(null),t=function(){e.value.showModal()};return(s,i)=>{const r=ca("RouterLink");return $(),H(Jt,null,[b("div",Rv,[Av,b("div",kv,[b("nav",Nv,[b("div",Dv,[Qt(r,{to:"/",class:"text-decoration-none text-secondary d-flex text-dark"},{default:ks(()=>[Pv,Ov]),_:1})]),b("div",xv,[Qt(r,{to:"/",class:"text-decoration-none text-secondary d-flex text-dark",onClick:Un(t,["prevent"])},{default:ks(()=>[Lv,Mv]),_:1})]),b("div",Uv,[Qt(r,{to:"/profile",class:"text-decoration-none text-secondary d-flex text-dark"},{default:ks(()=>[Fv,Bv]),_:1})])])])]),Qt(Sv,{ref_key:"addNewModal",ref:e},null,512)],64)}}},An=n=>(da("data-v-a7e67cc3"),n=n(),fa(),n),Wv=["id"],Vv={class:"card-header bg-body px-1 d-flex align-items-center px-2 px-md-0"},$v={class:"rounded-circle user-pic"},Hv=["src"],jv={class:"ms-2 fw-bold"},qv=["id","onDblclick"],zv={key:0,class:"position-absolute top-50 start-50 translate-middle w-25"},Gv=An(()=>b("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-heart-fill text-danger",viewBox:"0 0 16 16"},[b("path",{"fill-rule":"evenodd",d:"M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"})],-1)),Kv=[Gv],Yv={key:1,class:"carousel-indicators"},Qv=["data-bs-target","data-bs-slide-to","aria-current","aria-label"],Jv=["src"],Xv=["src"],Zv={controls:"",class:"d-block w-100"},ey=["src"],ty=["data-bs-target"],ny=An(()=>b("span",{class:"carousel-control-prev-icon","aria-hidden":"true"},null,-1)),sy=An(()=>b("span",{class:"visually-hidden"},"Previous",-1)),iy=[ny,sy],ry=["data-bs-target"],oy=An(()=>b("span",{class:"carousel-control-next-icon","aria-hidden":"true"},null,-1)),ay=An(()=>b("span",{class:"visually-hidden"},"Next",-1)),ly=[oy,ay],cy={class:"card-body px-sm-0 py-1 mb-1"},uy=["onClick"],hy={key:0,class:"bi bi-heart icon-size text-danger"},dy={key:1,class:"bi bi-heart-fill icon-size text-danger"},fy={key:0},py={class:"card-text d-inline fw-bold"},_y={class:"card-text ms-2 d-inline"},gy=["onClick"],my={class:"position-relative"},vy=["id","onUpdate:modelValue"],yy=["onClick"],Ey={key:0,class:"m-0"},wy={__name:"postComponent",props:{postDataList:Array,postIdDirection:String},setup(n){const e=n,t=ae(e.postDataList),s=Yc(()=>{const y=[...t.value];return y.sort((C,g)=>new Date(g.timestamp)-new Date(C.timestamp)),y});xr(()=>e.postDataList,(y,C)=>{t.value=y}),xr(()=>e.postIdDirection,async y=>{if(y){await Jc(),console.log(y);const C=document.getElementById(y);console.log(C),C&&C.scrollIntoView()}});const i=ae(new Set),r=y=>{i.value.has(y)?i.value.delete(y):i.value.add(y)},o=y=>i.value.has(y),a=(y,C)=>{if(y)return o(C)?y:y.slice(0,20)},l=ae(window.innerWidth>=768),c=()=>{l.value=window.innerWidth>=768};ni(()=>{window.addEventListener("resize",c)}),Qc(()=>{window.removeEventListener("resize",c)});const h=ae([]);ni(()=>{const y=pn(gn,"userData");jl(y,C=>{const g=[];C.forEach(T=>{const D=T.key,w=T.val();g.push({key:D,...w})}),h.value=g})});let u=!1;const d=y=>{for(const C in h.value)if(u=h.value[C].id===y.postownerid,u)return h.value[C].media_url;return""},f=ae({}),_=y=>{console.log(y),console.log(f.value[y])},v=ae({}),E=function(y){y.isThumb=!y.isThumb;const C=pn(gn,`postsData/${y.key}`);Rp(C,y).then(()=>{console.log("Data updated successfully!")}).catch(g=>{console.error("Error updating data:",g)}),v.value[y.id]=!0,setTimeout(()=>{v.value[y.id]=!1},1e3)};return(y,C)=>($(!0),H(Jt,null,Ns(s.value,(g,T)=>($(),H("div",{class:"card mt-3 post-card w-100 border-0",key:g.id,id:g.id},[b("div",Vv,[b("div",$v,[b("img",{src:d(g),alt:""},null,8,Hv)]),b("div",jv,Mn(g.username),1)]),b("div",{id:"post"+g.id,class:"carousel slide post-pic-area position-relative",onDblclick:D=>E(g)},[v.value[g.id]?($(),H("div",zv,Kv)):oe("",!0),g.media_type==="CAROUSEL_ALBUM"?($(),H("div",Yv,[($(!0),H(Jt,null,Ns(g.media_children.length,(D,w)=>($(),H("div",{key:w},[b("button",{class:Lr({active:w===0}),type:"button","data-bs-target":"#post"+g.id,"data-bs-slide-to":w,"aria-current":w===1,"aria-label":"Slide"+w},null,10,Qv)]))),128))])):oe("",!0),g.media_type==="IMAGE"?($(),H("div",{key:2,class:"carousel-inner position-relative",ref_for:!0,ref:"postImg"},[b("img",{src:g.media_url,class:"d-block w-100",alt:"..."},null,8,Jv)],512)):oe("",!0),g.media_type==="CAROUSEL_ALBUM"?($(),H("div",{key:3,class:"carousel-inner position-relative",ref_for:!0,ref:"postImg"},[($(!0),H(Jt,null,Ns(g.media_children,(D,w)=>($(),H("div",{class:Lr(["carousel-item",{active:w===0}]),key:w},[b("img",{src:D,class:"d-block w-100",alt:"..."},null,8,Xv)],2))),128))],512)):oe("",!0),g.media_type==="VIDEO"?($(),H("div",{key:4,class:"carousel-inner position-relative",ref_for:!0,ref:"postImg"},[b("video",Zv,[b("source",{src:g.media_url,type:"video/webm"},null,8,ey)])],512)):oe("",!0),g.media_type==="CAROUSEL_ALBUM"?($(),H("button",{key:5,class:"carousel-control-prev",type:"button","data-bs-target":"#post"+g.id,"data-bs-slide":"prev"},iy,8,ty)):oe("",!0),g.media_type==="CAROUSEL_ALBUM"?($(),H("button",{key:6,class:"carousel-control-next",type:"button","data-bs-target":"#post"+g.id,"data-bs-slide":"next"},ly,8,ry)):oe("",!0)],40,qv),b("div",cy,[b("a",{href:"",onClick:Un(D=>E(g),["prevent"])},[g.isThumb?oe("",!0):($(),H("i",hy)),g.isThumb?($(),H("i",dy)):oe("",!0)],8,uy),g.caption?($(),H("div",fy,[b("span",py,Mn(g.username),1),b("div",_y,Mn(a(g.caption,g.id)),1),!o(g.id)&&g.caption&&g.caption.length>20?($(),H("a",{key:0,class:"text-decoration-none text-secondary fs-6",onClick:Un(D=>r(g.id),["prevent"]),href:"#"}," ...更多 ",8,gy)):oe("",!0)])):oe("",!0),b("div",my,[ua(b("input",{type:"text",placeholder:"留言...",class:"w-100 border-0 my-1 py-1 postMessage",id:"#message"+g.id,"onUpdate:modelValue":D=>f.value[g.id]=D},null,8,vy),[[ha,f.value[g.id]]]),f.value[g.id]?($(),H("a",{key:0,type:"button",class:"position-absolute top-50 end-0 translate-middle-y text-decoration-none",onClick:Un(D=>_(g.id),["prevent"])},"發布",8,yy)):oe("",!0)])]),T!=t.value.length-1&&l.value?($(),H("hr",Ey)):oe("",!0)],8,Wv))),128))}},Cy=la(wy,[["__scopeId","data-v-a7e67cc3"]]);export{ov as M,Iy as _,gn as d,jl as o,Cy as p,pn as r,av as u};
