import{c as ce,a as ma,_ as ga,r as Pe,o as ya,b as Me,d as Le,e as I,i as vn,A as Ea,B as va,C as ba,m as Ht,D as bn,w as Ca,F as wa}from"./index-krUN-M83.js";var Js={};/**
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
 */const ar={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const m=function(n,e){if(!n)throw ct(e)},ct=function(n){return new Error("Firebase Database ("+ar.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
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
 */const lr=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Ta=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const i=n[t++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=n[t++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=n[t++],o=n[t++],a=n[t++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=n[t++],o=n[t++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},hs={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<n.length;i+=3){const r=n[i],o=i+1<n.length,a=o?n[i+1]:0,l=i+2<n.length,c=l?n[i+2]:0,h=r>>2,u=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(d=64)),s.push(t[h],t[u],t[d],t[f])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(lr(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Ta(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<n.length;){const r=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const c=i<n.length?t[n.charAt(i)]:64;++i;const u=i<n.length?t[n.charAt(i)]:64;if(++i,r==null||a==null||c==null||u==null)throw new Ia;const d=r<<2|a>>4;if(s.push(d),c!==64){const f=a<<4&240|c>>2;if(s.push(f),u!==64){const p=c<<6&192|u;s.push(p)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Ia extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const cr=function(n){const e=lr(n);return hs.encodeByteArray(e,!0)},Kt=function(n){return cr(n).replace(/\./g,"")},qn=function(n){try{return hs.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Sa(n){return ur(void 0,n)}function ur(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!Na(t)||(n[t]=ur(n[t],e[t]));return n}function Na(n){return n!=="__proto__"}/**
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
 */function Ra(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Aa=()=>Ra().__FIREBASE_DEFAULTS__,Da=()=>{if(typeof process>"u"||typeof Js>"u")return;const n=Js.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},ka=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&qn(n[1]);return e&&JSON.parse(e)},hr=()=>{try{return Aa()||Da()||ka()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},xa=n=>{var e,t;return(t=(e=hr())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},dr=n=>{const e=xa(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},fr=()=>{var n;return(n=hr())===null||n===void 0?void 0:n.config};/**
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
 */class ds{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function _r(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",i=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Kt(JSON.stringify(t)),Kt(JSON.stringify(o)),""].join(".")}/**
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
 */function Oa(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function pr(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Oa())}function Pa(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function mr(){return ar.NODE_ADMIN===!0}function Ma(){try{return typeof indexedDB=="object"}catch{return!1}}function La(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}/**
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
 */const Fa="FirebaseError";class ut extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=Fa,Object.setPrototypeOf(this,ut.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,gr.prototype.create)}}class gr{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Ua(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new ut(i,a,s)}}function Ua(n,e){return n.replace(Ba,(t,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const Ba=/\{\$([^}]+)}/g;/**
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
 */function Tt(n){return JSON.parse(n)}function Z(n){return JSON.stringify(n)}/**
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
 */const yr=function(n){let e={},t={},s={},i="";try{const r=n.split(".");e=Tt(qn(r[0])||""),t=Tt(qn(r[1])||""),i=r[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:i}},Wa=function(n){const e=yr(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},Ha=function(n){const e=yr(n).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function ve(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function it(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Zs(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Yt(n,e,t){const s={};for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&(s[i]=e.call(t,n[i],i,n));return s}function jn(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const i of t){if(!s.includes(i))return!1;const r=n[i],o=e[i];if(ei(r)&&ei(o)){if(!jn(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!t.includes(i))return!1;return!0}function ei(n){return n!==null&&typeof n=="object"}/**
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
 */function $a(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
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
 */class Va{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let u=0;u<16;u++)s[u]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let u=0;u<16;u++)s[u]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let u=16;u<80;u++){const d=s[u-3]^s[u-8]^s[u-14]^s[u-16];s[u]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,h;for(let u=0;u<80;u++){u<40?u<20?(c=a^r&(o^a),h=1518500249):(c=r^o^a,h=1859775393):u<60?(c=r&o|a&(r|o),h=2400959708):(c=r^o^a,h=3395469782);const d=(i<<5|i>>>27)+c+l+h+s[u]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<t;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<t;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function Er(n,e){return`${n} failed: ${e} argument `}/**
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
 */const qa=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,m(s<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):i<65536?(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},hn=function(n){let e=0;for(let t=0;t<n.length;t++){const s=n.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function De(n){return n&&n._delegate?n._delegate:n}class rt{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Fe="[DEFAULT]";/**
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
 */class ja{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new ds;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ga(e))try{this.getOrInitializeService({instanceIdentifier:Fe})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Fe){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Fe){return this.instances.has(e)}getOptions(e=Fe){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,t){var s;const i=this.normalizeInstanceIdentifier(t),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const i of s)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:za(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Fe){return this.component?this.component.multipleInstances?e:Fe:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function za(n){return n===Fe?void 0:n}function Ga(n){return n.instantiationMode==="EAGER"}/**
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
 */class Ka{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new ja(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var U;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(U||(U={}));const Ya={debug:U.DEBUG,verbose:U.VERBOSE,info:U.INFO,warn:U.WARN,error:U.ERROR,silent:U.SILENT},Qa=U.INFO,Xa={[U.DEBUG]:"log",[U.VERBOSE]:"log",[U.INFO]:"info",[U.WARN]:"warn",[U.ERROR]:"error"},Ja=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),i=Xa[e];if(i)console[i](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class vr{constructor(e){this.name=e,this._logLevel=Qa,this._logHandler=Ja,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in U))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ya[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,U.DEBUG,...e),this._logHandler(this,U.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,U.VERBOSE,...e),this._logHandler(this,U.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,U.INFO,...e),this._logHandler(this,U.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,U.WARN,...e),this._logHandler(this,U.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,U.ERROR,...e),this._logHandler(this,U.ERROR,...e)}}const Za=(n,e)=>e.some(t=>n instanceof t);let ti,ni;function el(){return ti||(ti=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function tl(){return ni||(ni=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const br=new WeakMap,zn=new WeakMap,Cr=new WeakMap,Cn=new WeakMap,fs=new WeakMap;function nl(n){const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(Te(n.result)),i()},o=()=>{s(n.error),i()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&br.set(t,n)}).catch(()=>{}),fs.set(e,n),e}function sl(n){if(zn.has(n))return;const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),i()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});zn.set(n,e)}let Gn={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return zn.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Cr.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Te(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function il(n){Gn=n(Gn)}function rl(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(wn(this),e,...t);return Cr.set(s,e.sort?e.sort():[e]),Te(s)}:tl().includes(n)?function(...e){return n.apply(wn(this),e),Te(br.get(this))}:function(...e){return Te(n.apply(wn(this),e))}}function ol(n){return typeof n=="function"?rl(n):(n instanceof IDBTransaction&&sl(n),Za(n,el())?new Proxy(n,Gn):n)}function Te(n){if(n instanceof IDBRequest)return nl(n);if(Cn.has(n))return Cn.get(n);const e=ol(n);return e!==n&&(Cn.set(n,e),fs.set(e,n)),e}const wn=n=>fs.get(n);function al(n,e,{blocked:t,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(n,e),a=Te(o);return s&&o.addEventListener("upgradeneeded",l=>{s(Te(o.result),l.oldVersion,l.newVersion,Te(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const ll=["get","getKey","getAll","getAllKeys","count"],cl=["put","add","delete","clear"],Tn=new Map;function si(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Tn.get(e))return Tn.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,i=cl.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(i||ll.includes(t)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[t](...a),i&&l.done]))[0]};return Tn.set(e,r),r}il(n=>({...n,get:(e,t,s)=>si(e,t)||n.get(e,t,s),has:(e,t)=>!!si(e,t)||n.has(e,t)}));/**
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
 */class ul{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(hl(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function hl(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Kn="@firebase/app",ii="0.10.2";/**
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
 */const $e=new vr("@firebase/app"),dl="@firebase/app-compat",fl="@firebase/analytics-compat",_l="@firebase/analytics",pl="@firebase/app-check-compat",ml="@firebase/app-check",gl="@firebase/auth",yl="@firebase/auth-compat",El="@firebase/database",vl="@firebase/database-compat",bl="@firebase/functions",Cl="@firebase/functions-compat",wl="@firebase/installations",Tl="@firebase/installations-compat",Il="@firebase/messaging",Sl="@firebase/messaging-compat",Nl="@firebase/performance",Rl="@firebase/performance-compat",Al="@firebase/remote-config",Dl="@firebase/remote-config-compat",kl="@firebase/storage",xl="@firebase/storage-compat",Ol="@firebase/firestore",Pl="@firebase/firestore-compat",Ml="firebase",Ll="10.11.1";/**
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
 */const Yn="[DEFAULT]",Fl={[Kn]:"fire-core",[dl]:"fire-core-compat",[_l]:"fire-analytics",[fl]:"fire-analytics-compat",[ml]:"fire-app-check",[pl]:"fire-app-check-compat",[gl]:"fire-auth",[yl]:"fire-auth-compat",[El]:"fire-rtdb",[vl]:"fire-rtdb-compat",[bl]:"fire-fn",[Cl]:"fire-fn-compat",[wl]:"fire-iid",[Tl]:"fire-iid-compat",[Il]:"fire-fcm",[Sl]:"fire-fcm-compat",[Nl]:"fire-perf",[Rl]:"fire-perf-compat",[Al]:"fire-rc",[Dl]:"fire-rc-compat",[kl]:"fire-gcs",[xl]:"fire-gcs-compat",[Ol]:"fire-fst",[Pl]:"fire-fst-compat","fire-js":"fire-js",[Ml]:"fire-js-all"};/**
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
 */const Qt=new Map,Ul=new Map,Qn=new Map;function ri(n,e){try{n.container.addComponent(e)}catch(t){$e.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function It(n){const e=n.name;if(Qn.has(e))return $e.debug(`There were multiple attempts to register component ${e}.`),!1;Qn.set(e,n);for(const t of Qt.values())ri(t,n);for(const t of Ul.values())ri(t,n);return!0}function wr(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
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
 */const Bl={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ie=new gr("app","Firebase",Bl);/**
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
 */class Wl{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new rt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ie.create("app-deleted",{appName:this._name})}}/**
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
 */const Tr=Ll;function Ir(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Yn,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw Ie.create("bad-app-name",{appName:String(i)});if(t||(t=fr()),!t)throw Ie.create("no-options");const r=Qt.get(i);if(r){if(jn(t,r.options)&&jn(s,r.config))return r;throw Ie.create("duplicate-app",{appName:i})}const o=new Ka(i);for(const l of Qn.values())o.addComponent(l);const a=new Wl(t,s,o);return Qt.set(i,a),a}function Sr(n=Yn){const e=Qt.get(n);if(!e&&n===Yn&&fr())return Ir();if(!e)throw Ie.create("no-app",{appName:n});return e}function Se(n,e,t){var s;let i=(s=Fl[n])!==null&&s!==void 0?s:n;t&&(i+=`-${t}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),$e.warn(a.join(" "));return}It(new rt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Hl="firebase-heartbeat-database",$l=1,St="firebase-heartbeat-store";let In=null;function Nr(){return In||(In=al(Hl,$l,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(St)}catch(t){console.warn(t)}}}}).catch(n=>{throw Ie.create("idb-open",{originalErrorMessage:n.message})})),In}async function Vl(n){try{const t=(await Nr()).transaction(St),s=await t.objectStore(St).get(Rr(n));return await t.done,s}catch(e){if(e instanceof ut)$e.warn(e.message);else{const t=Ie.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});$e.warn(t.message)}}}async function oi(n,e){try{const s=(await Nr()).transaction(St,"readwrite");await s.objectStore(St).put(e,Rr(n)),await s.done}catch(t){if(t instanceof ut)$e.warn(t.message);else{const s=Ie.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});$e.warn(s.message)}}}function Rr(n){return`${n.name}!${n.options.appId}`}/**
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
 */const ql=1024,jl=30*24*60*60*1e3;class zl{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Kl(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=ai();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=jl}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=ai(),{heartbeatsToSend:s,unsentEntries:i}=Gl(this._heartbeatsCache.heartbeats),r=Kt(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function ai(){return new Date().toISOString().substring(0,10)}function Gl(n,e=ql){const t=[];let s=n.slice();for(const i of n){const r=t.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),li(t)>e){r.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),li(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class Kl{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ma()?La().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Vl(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return oi(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return oi(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function li(n){return Kt(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function Yl(n){It(new rt("platform-logger",e=>new ul(e),"PRIVATE")),It(new rt("heartbeat",e=>new zl(e),"PRIVATE")),Se(Kn,ii,n),Se(Kn,ii,"esm2017"),Se("fire-js","")}Yl("");var Ql="firebase",Xl="10.11.1";/**
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
 */Se(Ql,Xl,"app");var ci={};const ui="@firebase/database",hi="1.0.4";/**
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
 */let Ar="";function Jl(n){Ar=n}/**
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
 */class Zl{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Z(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Tt(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class ec{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return ve(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Dr=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Zl(e)}}catch{}return new ec},Be=Dr("localStorage"),Xn=Dr("sessionStorage");/**
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
 */const et=new vr("@firebase/database"),tc=function(){let n=1;return function(){return n++}}(),kr=function(n){const e=qa(n),t=new Va;t.update(e);const s=t.digest();return hs.encodeByteArray(s)},Pt=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Pt.apply(null,s):typeof s=="object"?e+=Z(s):e+=s,e+=" "}return e};let We=null,di=!0;const nc=function(n,e){m(!e||n===!0||n===!1,"Can't turn on custom loggers persistently."),n===!0?(et.logLevel=U.VERBOSE,We=et.log.bind(et),e&&Xn.set("logging_enabled",!0)):typeof n=="function"?We=n:(We=null,Xn.remove("logging_enabled"))},ee=function(...n){if(di===!0&&(di=!1,We===null&&Xn.get("logging_enabled")===!0&&nc(!0)),We){const e=Pt.apply(null,n);We(e)}},Mt=function(n){return function(...e){ee(n,...e)}},Jn=function(...n){const e="FIREBASE INTERNAL ERROR: "+Pt(...n);et.error(e)},Ee=function(...n){const e=`FIREBASE FATAL ERROR: ${Pt(...n)}`;throw et.error(e),new Error(e)},le=function(...n){const e="FIREBASE WARNING: "+Pt(...n);et.warn(e)},sc=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&le("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},xr=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},ic=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},ot="[MIN_NAME]",Ve="[MAX_NAME]",ht=function(n,e){if(n===e)return 0;if(n===ot||e===Ve)return-1;if(e===ot||n===Ve)return 1;{const t=fi(n),s=fi(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},rc=function(n,e){return n===e?0:n<e?-1:1},_t=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+Z(e))},_s=function(n){if(typeof n!="object"||n===null)return Z(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=Z(e[s]),t+=":",t+=_s(n[e[s]]);return t+="}",t},Or=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let i=0;i<t;i+=e)i+e>t?s.push(n.substring(i,t)):s.push(n.substring(i,i+e));return s};function oe(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const Pr=function(n){m(!xr(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let i,r,o,a,l;n===0?(r=0,o=0,i=1/n===-1/0?1:0):(i=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),s),r=a+s,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-s-t))));const c=[];for(l=t;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const h=c.join("");let u="";for(l=0;l<64;l+=8){let d=parseInt(h.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),u=u+d}return u.toLowerCase()},oc=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},ac=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function lc(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const s=new Error(n+" at "+e._path.toString()+": "+t);return s.code=n.toUpperCase(),s}const cc=new RegExp("^-?(0*)\\d{1,10}$"),uc=-2147483648,hc=2147483647,fi=function(n){if(cc.test(n)){const e=Number(n);if(e>=uc&&e<=hc)return e}return null},Lt=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw le("Exception was thrown by user callback.",t),e},Math.floor(0))}},dc=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Et=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class fc{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){le(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class _c{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(ee("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',le(e)}}class tt{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}tt.OWNER="owner";/**
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
 */const ps="5",Mr="v",Lr="s",Fr="r",Ur="f",Br=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Wr="ls",Hr="p",Zn="ac",$r="websocket",Vr="long_polling";/**
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
 */class qr{constructor(e,t,s,i,r=!1,o="",a=!1,l=!1){this.secure=t,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Be.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Be.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function pc(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function jr(n,e,t){m(typeof e=="string","typeof type must == string"),m(typeof t=="object","typeof params must == object");let s;if(e===$r)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===Vr)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);pc(n)&&(t.ns=n.namespace);const i=[];return oe(t,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
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
 */class mc{constructor(){this.counters_={}}incrementCounter(e,t=1){ve(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Sa(this.counters_)}}/**
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
 */const Sn={},Nn={};function ms(n){const e=n.toString();return Sn[e]||(Sn[e]=new mc),Sn[e]}function gc(n,e){const t=n.toString();return Nn[t]||(Nn[t]=e()),Nn[t]}/**
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
 */class yc{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Lt(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const _i="start",Ec="close",vc="pLPCommand",bc="pRTLPCB",zr="id",Gr="pw",Kr="ser",Cc="cb",wc="seg",Tc="ts",Ic="d",Sc="dframe",Yr=1870,Qr=30,Nc=Yr-Qr,Rc=25e3,Ac=3e4;class Je{constructor(e,t,s,i,r,o,a){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Mt(e),this.stats_=ms(t),this.urlFn=l=>(this.appCheckToken&&(l[Zn]=this.appCheckToken),jr(t,Vr,l))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new yc(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Ac)),ic(()=>{if(this.isClosed_)return;this.scriptTagHolder=new gs((...r)=>{const[o,a,l,c,h]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===_i)this.id=a,this.password=l;else if(o===Ec)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[_i]="t",s[Kr]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Cc]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Mr]=ps,this.transportSessionId&&(s[Lr]=this.transportSessionId),this.lastSessionId&&(s[Wr]=this.lastSessionId),this.applicationId&&(s[Hr]=this.applicationId),this.appCheckToken&&(s[Zn]=this.appCheckToken),typeof location<"u"&&location.hostname&&Br.test(location.hostname)&&(s[Fr]=Ur);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Je.forceAllow_=!0}static forceDisallow(){Je.forceDisallow_=!0}static isAvailable(){return Je.forceAllow_?!0:!Je.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!oc()&&!ac()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Z(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=cr(t),i=Or(s,Nc);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[Sc]="t",s[zr]=e,s[Gr]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Z(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class gs{constructor(e,t,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=tc(),window[vc+this.uniqueCallbackIdentifier]=e,window[bc+this.uniqueCallbackIdentifier]=t,this.myIFrame=gs.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){ee("frame writing exception"),a.stack&&ee(a.stack),ee(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ee("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[zr]=this.myID,e[Gr]=this.myPW,e[Kr]=this.currentSerial;let t=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Qr+s.length<=Yr;){const o=this.pendingSegs.shift();s=s+"&"+wc+i+"="+o.seg+"&"+Tc+i+"="+o.ts+"&"+Ic+i+"="+o.d,i++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(s,Math.floor(Rc)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{ee("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const Dc=16384,kc=45e3;let Xt=null;typeof MozWebSocket<"u"?Xt=MozWebSocket:typeof WebSocket<"u"&&(Xt=WebSocket);class he{constructor(e,t,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Mt(this.connId),this.stats_=ms(t),this.connURL=he.connectionURL_(t,o,a,i,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,i,r){const o={};return o[Mr]=ps,typeof location<"u"&&location.hostname&&Br.test(location.hostname)&&(o[Fr]=Ur),t&&(o[Lr]=t),s&&(o[Wr]=s),i&&(o[Zn]=i),r&&(o[Hr]=r),jr(e,$r,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Be.set("previous_websocket_failure",!0);try{let s;mr(),this.mySock=new Xt(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){he.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Xt!==null&&!he.forceDisallow_}static previouslyFailed(){return Be.isInMemoryStorage||Be.get("previous_websocket_failure")===!0}markConnectionHealthy(){Be.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=Tt(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(m(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=Z(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=Or(t,Dc);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(kc))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}he.responsesRequiredToBeHealthy=2;he.healthyTimeout=3e4;/**
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
 */class Nt{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Je,he]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=he&&he.isAvailable();let s=t&&!he.previouslyFailed();if(e.webSocketOnly&&(t||le("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[he];else{const i=this.transports_=[];for(const r of Nt.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Nt.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Nt.globalTransportInitialized_=!1;/**
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
 */const xc=6e4,Oc=5e3,Pc=10*1024,Mc=100*1024,Rn="t",pi="d",Lc="s",mi="r",Fc="e",gi="o",yi="a",Ei="n",vi="p",Uc="h";class Bc{constructor(e,t,s,i,r,o,a,l,c,h){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Mt("c:"+this.id+":"),this.transportManager_=new Nt(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Et(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Mc?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Pc?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Rn in e){const t=e[Rn];t===yi?this.upgradeIfSecondaryHealthy_():t===mi?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===gi&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=_t("t",e),s=_t("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:vi,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:yi,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Ei,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=_t("t",e),s=_t("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=_t(Rn,e);if(pi in e){const s=e[pi];if(t===Uc){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(t===Ei){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Lc?this.onConnectionShutdown_(s):t===mi?this.onReset_(s):t===Fc?Jn("Server Error: "+s):t===gi?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Jn("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),ps!==s&&le("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),Et(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(xc))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Et(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Oc))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:vi,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Be.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Xr{put(e,t,s,i){}merge(e,t,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */class Jr{constructor(e){this.allowedEvents_=e,this.listeners_={},m(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const i=this.getInitialEvent(e);i&&t.apply(s,i)}off(e,t,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===t&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){m(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class Jt extends Jr{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!pr()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Jt}getInitialEvent(e){return m(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const bi=32,Ci=768;class L{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function O(){return new L("")}function A(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Re(n){return n.pieces_.length-n.pieceNum_}function B(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new L(n.pieces_,e)}function Zr(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function Wc(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function eo(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function to(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new L(e,0)}function K(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof L)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&t.push(s[i])}return new L(t,0)}function D(n){return n.pieceNum_>=n.pieces_.length}function ie(n,e){const t=A(n),s=A(e);if(t===null)return e;if(t===s)return ie(B(n),B(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function ys(n,e){if(Re(n)!==Re(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function de(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(Re(n)>Re(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class Hc{constructor(e,t){this.errorPrefix_=t,this.parts_=eo(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=hn(this.parts_[s]);no(this)}}function $c(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=hn(e),no(n)}function Vc(n){const e=n.parts_.pop();n.byteLength_-=hn(e),n.parts_.length>0&&(n.byteLength_-=1)}function no(n){if(n.byteLength_>Ci)throw new Error(n.errorPrefix_+"has a key path longer than "+Ci+" bytes ("+n.byteLength_+").");if(n.parts_.length>bi)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+bi+") or object contains a cycle "+Ue(n))}function Ue(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
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
 */class Es extends Jr{constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new Es}getInitialEvent(e){return m(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const pt=1e3,qc=60*5*1e3,wi=30*1e3,jc=1.3,zc=3e4,Gc="server_kill",Ti=3;class ye extends Xr{constructor(e,t,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=ye.nextPersistentConnectionId_++,this.log_=Mt("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=pt,this.maxReconnectDelay_=qc,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!mr())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Es.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Jt.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(Z(r)),m(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const t=new ds,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),m(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),m(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:t,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;ye.warnOnListenWarnings_(l,t),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&ve(e,"w")){const s=it(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();le(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Ha(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=wi)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Wa(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),m(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,t)}sendUnlisten_(e,t,s,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,i){const r={p:t,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,t,s,i){this.putInternal("p",e,t,s,i)}merge(e,t,s,i){this.putInternal("m",e,t,s,i)}putInternal(e,t,s,i,r){this.initConnection_();const o={p:t,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Z(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Jn("Unrecognized action received from server: "+Z(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){m(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=pt,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=pt,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>zc&&(this.reconnectDelay_=pt),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*jc)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+ye.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(u){m(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(u)};this.realtime_={close:l,sendRequest:c};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[u,d]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?ee("getToken() completed but was canceled"):(ee("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=d&&d.token,a=new Bc(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,f=>{le(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(Gc)},r))}catch(u){this.log_("Failed to get token: "+u),o||(this.repoInfo_.nodeAdmin&&le(u),l())}}}interrupt(e){ee("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ee("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Zs(this.interruptReasons_)&&(this.reconnectDelay_=pt,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(r=>_s(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const s=new L(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(t),r.delete(t),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,t){ee("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Ti&&(this.reconnectDelay_=wi,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){ee("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Ti&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+Ar.replace(/\./g,"-")]=1,pr()?e["framework.cordova"]=1:Pa()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Jt.getInstance().currentlyOnline();return Zs(this.interruptReasons_)&&e}}ye.nextPersistentConnectionId_=0;ye.nextConnectionId_=0;/**
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
 */class N{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new N(e,t)}}/**
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
 */class dn{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new N(ot,e),i=new N(ot,t);return this.compare(s,i)!==0}minPost(){return N.MIN}}/**
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
 */let $t;class so extends dn{static get __EMPTY_NODE(){return $t}static set __EMPTY_NODE(e){$t=e}compare(e,t){return ht(e.name,t.name)}isDefinedOn(e){throw ct("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return N.MIN}maxPost(){return new N(Ve,$t)}makePost(e,t){return m(typeof e=="string","KeyIndex indexValue must always be a string."),new N(e,$t)}toString(){return".key"}}const nt=new so;/**
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
 */class Vt{constructor(e,t,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?s(e.key,t):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class J{constructor(e,t,s,i,r){this.key=e,this.value=t,this.color=s??J.RED,this.left=i??re.EMPTY_NODE,this.right=r??re.EMPTY_NODE}copy(e,t,s,i,r){return new J(e??this.key,t??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,t,s),null):r===0?i=i.copy(null,t,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return re.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,i;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return re.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,J.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,J.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}J.RED=!0;J.BLACK=!1;class Kc{copy(e,t,s,i,r){return this}insert(e,t,s){return new J(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class re{constructor(e,t=re.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new re(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,J.BLACK,null,null))}remove(e){return new re(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,J.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,i=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Vt(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Vt(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Vt(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Vt(this.root_,null,this.comparator_,!0,e)}}re.EMPTY_NODE=new Kc;/**
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
 */function Yc(n,e){return ht(n.name,e.name)}function vs(n,e){return ht(n,e)}/**
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
 */let es;function Qc(n){es=n}const io=function(n){return typeof n=="number"?"number:"+Pr(n):"string:"+n},ro=function(n){if(n.isLeafNode()){const e=n.val();m(typeof e=="string"||typeof e=="number"||typeof e=="object"&&ve(e,".sv"),"Priority must be a string or number.")}else m(n===es||n.isEmpty(),"priority of unexpected type.");m(n===es||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Ii;class X{constructor(e,t=X.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,m(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),ro(this.priorityNode_)}static set __childrenNodeConstructor(e){Ii=e}static get __childrenNodeConstructor(){return Ii}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new X(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:X.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return D(e)?this:A(e)===".priority"?this.priorityNode_:X.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:X.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=A(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(m(s!==".priority"||Re(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,X.__childrenNodeConstructor.EMPTY_NODE.updateChild(B(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+io(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=Pr(this.value_):e+=this.value_,this.lazyHash_=kr(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===X.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof X.__childrenNodeConstructor?-1:(m(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,i=X.VALUE_TYPE_ORDER.indexOf(t),r=X.VALUE_TYPE_ORDER.indexOf(s);return m(i>=0,"Unknown leaf type: "+t),m(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}X.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let oo,ao;function Xc(n){oo=n}function Jc(n){ao=n}class Zc extends dn{compare(e,t){const s=e.node.getPriority(),i=t.node.getPriority(),r=s.compareTo(i);return r===0?ht(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return N.MIN}maxPost(){return new N(Ve,new X("[PRIORITY-POST]",ao))}makePost(e,t){const s=oo(e);return new N(t,new X("[PRIORITY-POST]",s))}toString(){return".priority"}}const j=new Zc;/**
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
 */const eu=Math.log(2);class tu{constructor(e){const t=r=>parseInt(Math.log(r)/eu,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Zt=function(n,e,t,s){n.sort(e);const i=function(l,c){const h=c-l;let u,d;if(h===0)return null;if(h===1)return u=n[l],d=t?t(u):u,new J(d,u.node,J.BLACK,null,null);{const f=parseInt(h/2,10)+l,p=i(l,f),g=i(f+1,c);return u=n[f],d=t?t(u):u,new J(d,u.node,J.BLACK,p,g)}},r=function(l){let c=null,h=null,u=n.length;const d=function(p,g){const y=u-p,k=u;u-=p;const H=i(y+1,k),S=n[y],x=t?t(S):S;f(new J(x,S.node,g,null,H))},f=function(p){c?(c.left=p,c=p):(h=p,c=p)};for(let p=0;p<l.count;++p){const g=l.nextBitIsOne(),y=Math.pow(2,l.count-(p+1));g?d(y,J.BLACK):(d(y,J.BLACK),d(y,J.RED))}return h},o=new tu(n.length),a=r(o);return new re(s||e,a)};/**
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
 */let An;const Xe={};class ge{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return m(Xe&&j,"ChildrenNode.ts has not been loaded"),An=An||new ge({".priority":Xe},{".priority":j}),An}get(e){const t=it(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof re?t:null}hasIndex(e){return ve(this.indexSet_,e.toString())}addIndex(e,t){m(e!==nt,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=t.getIterator(N.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=Zt(s,e.getCompare()):a=Xe;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const h=Object.assign({},this.indexes_);return h[l]=a,new ge(h,c)}addToIndexes(e,t){const s=Yt(this.indexes_,(i,r)=>{const o=it(this.indexSet_,r);if(m(o,"Missing index implementation for "+r),i===Xe)if(o.isDefinedOn(e.node)){const a=[],l=t.getIterator(N.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Zt(a,o.getCompare())}else return Xe;else{const a=t.get(e.name);let l=i;return a&&(l=l.remove(new N(e.name,a))),l.insert(e,e.node)}});return new ge(s,this.indexSet_)}removeFromIndexes(e,t){const s=Yt(this.indexes_,i=>{if(i===Xe)return i;{const r=t.get(e.name);return r?i.remove(new N(e.name,r)):i}});return new ge(s,this.indexSet_)}}/**
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
 */let mt;class C{constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&ro(this.priorityNode_),this.children_.isEmpty()&&m(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return mt||(mt=new C(new re(vs),null,ge.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||mt}updatePriority(e){return this.children_.isEmpty()?this:new C(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?mt:t}}getChild(e){const t=A(e);return t===null?this:this.getImmediateChild(t).getChild(B(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(m(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new N(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?mt:this.priorityNode_;return new C(i,o,r)}}updateChild(e,t){const s=A(e);if(s===null)return t;{m(A(e)!==".priority"||Re(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(B(e),t);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,i=0,r=!0;if(this.forEachChild(j,(o,a)=>{t[o]=a.val(e),s++,r&&C.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+io(this.getPriority().val())+":"),this.forEachChild(j,(t,s)=>{const i=s.hash();i!==""&&(e+=":"+t+":"+i)}),this.lazyHash_=e===""?"":kr(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new N(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new N(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new N(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>t(i.name,i.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,N.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,N.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ft?-1:0}withIndex(e){if(e===nt||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new C(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===nt||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(j),i=t.getIterator(j);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===nt?null:this.indexMap_.get(e.toString())}}C.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class nu extends C{constructor(){super(new re(vs),C.EMPTY_NODE,ge.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return C.EMPTY_NODE}isEmpty(){return!1}}const Ft=new nu;Object.defineProperties(N,{MIN:{value:new N(ot,C.EMPTY_NODE)},MAX:{value:new N(Ve,Ft)}});so.__EMPTY_NODE=C.EMPTY_NODE;X.__childrenNodeConstructor=C;Qc(Ft);Jc(Ft);/**
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
 */const su=!0;function te(n,e=null){if(n===null)return C.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),m(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new X(t,te(e))}if(!(n instanceof Array)&&su){const t=[];let s=!1;if(oe(n,(o,a)=>{if(o.substring(0,1)!=="."){const l=te(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),t.push(new N(o,l)))}}),t.length===0)return C.EMPTY_NODE;const r=Zt(t,Yc,o=>o.name,vs);if(s){const o=Zt(t,j.getCompare());return new C(r,te(e),new ge({".priority":o},{".priority":j}))}else return new C(r,te(e),ge.Default)}else{let t=C.EMPTY_NODE;return oe(n,(s,i)=>{if(ve(n,s)&&s.substring(0,1)!=="."){const r=te(i);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(s,r))}}),t.updatePriority(te(e))}}Xc(te);/**
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
 */class iu extends dn{constructor(e){super(),this.indexPath_=e,m(!D(e)&&A(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),i=this.extractChild(t.node),r=s.compareTo(i);return r===0?ht(e.name,t.name):r}makePost(e,t){const s=te(e),i=C.EMPTY_NODE.updateChild(this.indexPath_,s);return new N(t,i)}maxPost(){const e=C.EMPTY_NODE.updateChild(this.indexPath_,Ft);return new N(Ve,e)}toString(){return eo(this.indexPath_,0).join("/")}}/**
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
 */class ru extends dn{compare(e,t){const s=e.node.compareTo(t.node);return s===0?ht(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return N.MIN}maxPost(){return N.MAX}makePost(e,t){const s=te(e);return new N(t,s)}toString(){return".value"}}const ou=new ru;/**
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
 */function lo(n){return{type:"value",snapshotNode:n}}function at(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function Rt(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function At(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function au(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
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
 */class bs{constructor(e){this.index_=e}updateChild(e,t,s,i,r,o){m(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(t)?o.trackChildChange(Rt(t,a)):m(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(at(t,s)):o.trackChildChange(At(t,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(t,s).withIndex(this.index_)}updateFullNode(e,t,s){return s!=null&&(e.isLeafNode()||e.forEachChild(j,(i,r)=>{t.hasChild(i)||s.trackChildChange(Rt(i,r))}),t.isLeafNode()||t.forEachChild(j,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(At(i,r,o))}else s.trackChildChange(at(i,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?C.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Dt{constructor(e){this.indexedFilter_=new bs(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Dt.getStartPost_(e),this.endPost_=Dt.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&s}updateChild(e,t,s,i,r,o){return this.matches(new N(t,s))||(s=C.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,s,i,r,o)}updateFullNode(e,t,s){t.isLeafNode()&&(t=C.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(C.EMPTY_NODE);const r=this;return t.forEachChild(j,(o,a)=>{r.matches(new N(o,a))||(i=i.updateImmediateChild(o,C.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
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
 */class lu{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=t=>{const s=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Dt(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,s,i,r,o){return this.rangedFilter_.matches(new N(t,s))||(s=C.EMPTY_NODE),e.getImmediateChild(t).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,s,i,r,o):this.fullLimitUpdateChild_(e,t,s,r,o)}updateFullNode(e,t,s){let i;if(t.isLeafNode()||t.isEmpty())i=C.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){i=C.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=t.withIndex(this.index_),i=i.updatePriority(C.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,C.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,s,i,r){let o;if(this.reverse_){const u=this.index_.getCompare();o=(d,f)=>u(f,d)}else o=this.index_.getCompare();const a=e;m(a.numChildren()===this.limit_,"");const l=new N(t,s),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),h=this.rangedFilter_.matches(l);if(a.hasChild(t)){const u=a.getImmediateChild(t);let d=i.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===t||a.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const f=d==null?1:o(d,l);if(h&&!s.isEmpty()&&f>=0)return r!=null&&r.trackChildChange(At(t,s,u)),a.updateImmediateChild(t,s);{r!=null&&r.trackChildChange(Rt(t,u));const g=a.updateImmediateChild(t,C.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(at(d.name,d.node)),g.updateImmediateChild(d.name,d.node)):g}}else return s.isEmpty()?e:h&&o(c,l)>=0?(r!=null&&(r.trackChildChange(Rt(c.name,c.node)),r.trackChildChange(at(t,s))),a.updateImmediateChild(t,s).updateImmediateChild(c.name,C.EMPTY_NODE)):e}}/**
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
 */class Cs{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=j}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return m(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return m(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ot}hasEnd(){return this.endSet_}getIndexEndValue(){return m(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return m(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ve}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return m(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===j}copy(){const e=new Cs;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function cu(n){return n.loadsAllData()?new bs(n.getIndex()):n.hasLimit()?new lu(n):new Dt(n)}function Si(n){const e={};if(n.isDefault())return e;let t;if(n.index_===j?t="$priority":n.index_===ou?t="$value":n.index_===nt?t="$key":(m(n.index_ instanceof iu,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=Z(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=Z(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+Z(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=Z(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+Z(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function Ni(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==j&&(e.i=n.index_.toString()),e}/**
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
 */class en extends Xr{constructor(e,t,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Mt("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(m(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=en.getListenId_(e,s),a={};this.listens_[o]=a;const l=Si(e._queryParams);this.restRequest_(r+".json",l,(c,h)=>{let u=h;if(c===404&&(u=null,c=null),c===null&&this.onDataUpdate_(r,u,!1,s),it(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,t){const s=en.getListenId_(e,t);delete this.listens_[s]}get(e){const t=Si(e._queryParams),s=e._path.toString(),i=new ds;return this.restRequest_(s+".json",t,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+$a(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Tt(a.responseText)}catch{le("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&le("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class uu{constructor(){this.rootNode_=C.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */function tn(){return{value:null,children:new Map}}function co(n,e,t){if(D(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=A(e);n.children.has(s)||n.children.set(s,tn());const i=n.children.get(s);e=B(e),co(i,e,t)}}function ts(n,e,t){n.value!==null?t(e,n.value):hu(n,(s,i)=>{const r=new L(e.toString()+"/"+s);ts(i,r,t)})}function hu(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
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
 */class du{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&oe(this.last_,(s,i)=>{t[s]=t[s]-i}),this.last_=e,t}}/**
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
 */const Ri=10*1e3,fu=30*1e3,_u=5*60*1e3;class pu{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new du(e);const s=Ri+(fu-Ri)*Math.random();Et(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;oe(e,(i,r)=>{r>0&&ve(this.statsToReport_,i)&&(t[i]=r,s=!0)}),s&&this.server_.reportStats(t),Et(this.reportStats_.bind(this),Math.floor(Math.random()*2*_u))}}/**
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
 */var fe;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(fe||(fe={}));function uo(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function ws(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Ts(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
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
 */class nn{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=fe.ACK_USER_WRITE,this.source=uo()}operationForChild(e){if(D(this.path)){if(this.affectedTree.value!=null)return m(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new L(e));return new nn(O(),t,this.revert)}}else return m(A(this.path)===e,"operationForChild called for unrelated child."),new nn(B(this.path),this.affectedTree,this.revert)}}/**
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
 */class kt{constructor(e,t){this.source=e,this.path=t,this.type=fe.LISTEN_COMPLETE}operationForChild(e){return D(this.path)?new kt(this.source,O()):new kt(this.source,B(this.path))}}/**
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
 */class qe{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=fe.OVERWRITE}operationForChild(e){return D(this.path)?new qe(this.source,O(),this.snap.getImmediateChild(e)):new qe(this.source,B(this.path),this.snap)}}/**
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
 */class xt{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=fe.MERGE}operationForChild(e){if(D(this.path)){const t=this.children.subtree(new L(e));return t.isEmpty()?null:t.value?new qe(this.source,O(),t.value):new xt(this.source,O(),t)}else return m(A(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new xt(this.source,B(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class je{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(D(e))return this.isFullyInitialized()&&!this.filtered_;const t=A(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class mu{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function gu(n,e,t,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(au(o.childName,o.snapshotNode))}),gt(n,i,"child_removed",e,s,t),gt(n,i,"child_added",e,s,t),gt(n,i,"child_moved",r,s,t),gt(n,i,"child_changed",e,s,t),gt(n,i,"value",e,s,t),i}function gt(n,e,t,s,i,r){const o=s.filter(a=>a.type===t);o.sort((a,l)=>Eu(n,a,l)),o.forEach(a=>{const l=yu(n,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,n.query_))})})}function yu(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function Eu(n,e,t){if(e.childName==null||t.childName==null)throw ct("Should only compare child_ events.");const s=new N(e.childName,e.snapshotNode),i=new N(t.childName,t.snapshotNode);return n.index_.compare(s,i)}/**
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
 */function fn(n,e){return{eventCache:n,serverCache:e}}function vt(n,e,t,s){return fn(new je(e,t,s),n.serverCache)}function ho(n,e,t,s){return fn(n.eventCache,new je(e,t,s))}function ns(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function ze(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
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
 */let Dn;const vu=()=>(Dn||(Dn=new re(rc)),Dn);class W{constructor(e,t=vu()){this.value=e,this.children=t}static fromObject(e){let t=new W(null);return oe(e,(s,i)=>{t=t.set(new L(s),i)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:O(),value:this.value};if(D(e))return null;{const s=A(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(B(e),t);return r!=null?{path:K(new L(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(D(e))return this;{const t=A(e),s=this.children.get(t);return s!==null?s.subtree(B(e)):new W(null)}}set(e,t){if(D(e))return new W(t,this.children);{const s=A(e),r=(this.children.get(s)||new W(null)).set(B(e),t),o=this.children.insert(s,r);return new W(this.value,o)}}remove(e){if(D(e))return this.children.isEmpty()?new W(null):new W(null,this.children);{const t=A(e),s=this.children.get(t);if(s){const i=s.remove(B(e));let r;return i.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,i),this.value===null&&r.isEmpty()?new W(null):new W(this.value,r)}else return this}}get(e){if(D(e))return this.value;{const t=A(e),s=this.children.get(t);return s?s.get(B(e)):null}}setTree(e,t){if(D(e))return t;{const s=A(e),r=(this.children.get(s)||new W(null)).setTree(B(e),t);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new W(this.value,o)}}fold(e){return this.fold_(O(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(K(e,i),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,O(),t)}findOnPath_(e,t,s){const i=this.value?s(t,this.value):!1;if(i)return i;if(D(e))return null;{const r=A(e),o=this.children.get(r);return o?o.findOnPath_(B(e),K(t,r),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,O(),t)}foreachOnPath_(e,t,s){if(D(e))return this;{this.value&&s(t,this.value);const i=A(e),r=this.children.get(i);return r?r.foreachOnPath_(B(e),K(t,i),s):new W(null)}}foreach(e){this.foreach_(O(),e)}foreach_(e,t){this.children.inorderTraversal((s,i)=>{i.foreach_(K(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
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
 */class _e{constructor(e){this.writeTree_=e}static empty(){return new _e(new W(null))}}function bt(n,e,t){if(D(e))return new _e(new W(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=ie(i,e);return r=r.updateChild(o,t),new _e(n.writeTree_.set(i,r))}else{const i=new W(t),r=n.writeTree_.setTree(e,i);return new _e(r)}}}function Ai(n,e,t){let s=n;return oe(t,(i,r)=>{s=bt(s,K(e,i),r)}),s}function Di(n,e){if(D(e))return _e.empty();{const t=n.writeTree_.setTree(e,new W(null));return new _e(t)}}function ss(n,e){return Ke(n,e)!=null}function Ke(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(ie(t.path,e)):null}function ki(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(j,(s,i)=>{e.push(new N(s,i))}):n.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new N(s,i.value))}),e}function Ne(n,e){if(D(e))return n;{const t=Ke(n,e);return t!=null?new _e(new W(t)):new _e(n.writeTree_.subtree(e))}}function is(n){return n.writeTree_.isEmpty()}function lt(n,e){return fo(O(),n.writeTree_,e)}function fo(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(m(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):t=fo(K(n,i),r,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(K(n,".priority"),s)),t}}/**
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
 */function Is(n,e){return go(e,n)}function bu(n,e,t,s,i){m(s>n.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:i}),i&&(n.visibleWrites=bt(n.visibleWrites,e,t)),n.lastWriteId=s}function Cu(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function wu(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);m(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let i=s.visible,r=!1,o=n.allWrites.length-1;for(;i&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&Tu(a,s.path)?i=!1:de(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return Iu(n),!0;if(s.snap)n.visibleWrites=Di(n.visibleWrites,s.path);else{const a=s.children;oe(a,l=>{n.visibleWrites=Di(n.visibleWrites,K(s.path,l))})}return!0}else return!1}function Tu(n,e){if(n.snap)return de(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&de(K(n.path,t),e))return!0;return!1}function Iu(n){n.visibleWrites=_o(n.allWrites,Su,O()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function Su(n){return n.visible}function _o(n,e,t){let s=_e.empty();for(let i=0;i<n.length;++i){const r=n[i];if(e(r)){const o=r.path;let a;if(r.snap)de(t,o)?(a=ie(t,o),s=bt(s,a,r.snap)):de(o,t)&&(a=ie(o,t),s=bt(s,O(),r.snap.getChild(a)));else if(r.children){if(de(t,o))a=ie(t,o),s=Ai(s,a,r.children);else if(de(o,t))if(a=ie(o,t),D(a))s=Ai(s,O(),r.children);else{const l=it(r.children,A(a));if(l){const c=l.getChild(B(a));s=bt(s,O(),c)}}}else throw ct("WriteRecord should have .snap or .children")}}return s}function po(n,e,t,s,i){if(!s&&!i){const r=Ke(n.visibleWrites,e);if(r!=null)return r;{const o=Ne(n.visibleWrites,e);if(is(o))return t;if(t==null&&!ss(o,O()))return null;{const a=t||C.EMPTY_NODE;return lt(o,a)}}}else{const r=Ne(n.visibleWrites,e);if(!i&&is(r))return t;if(!i&&t==null&&!ss(r,O()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(de(c.path,e)||de(e,c.path))},a=_o(n.allWrites,o,e),l=t||C.EMPTY_NODE;return lt(a,l)}}}function Nu(n,e,t){let s=C.EMPTY_NODE;const i=Ke(n.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(j,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(t){const r=Ne(n.visibleWrites,e);return t.forEachChild(j,(o,a)=>{const l=lt(Ne(r,new L(o)),a);s=s.updateImmediateChild(o,l)}),ki(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Ne(n.visibleWrites,e);return ki(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function Ru(n,e,t,s,i){m(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=K(e,t);if(ss(n.visibleWrites,r))return null;{const o=Ne(n.visibleWrites,r);return is(o)?i.getChild(t):lt(o,i.getChild(t))}}function Au(n,e,t,s){const i=K(e,t),r=Ke(n.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(t)){const o=Ne(n.visibleWrites,i);return lt(o,s.getNode().getImmediateChild(t))}else return null}function Du(n,e){return Ke(n.visibleWrites,e)}function ku(n,e,t,s,i,r,o){let a;const l=Ne(n.visibleWrites,e),c=Ke(l,O());if(c!=null)a=c;else if(t!=null)a=lt(l,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const h=[],u=o.getCompare(),d=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let f=d.getNext();for(;f&&h.length<i;)u(f,s)!==0&&h.push(f),f=d.getNext();return h}else return[]}function xu(){return{visibleWrites:_e.empty(),allWrites:[],lastWriteId:-1}}function sn(n,e,t,s){return po(n.writeTree,n.treePath,e,t,s)}function Ss(n,e){return Nu(n.writeTree,n.treePath,e)}function xi(n,e,t,s){return Ru(n.writeTree,n.treePath,e,t,s)}function rn(n,e){return Du(n.writeTree,K(n.treePath,e))}function Ou(n,e,t,s,i,r){return ku(n.writeTree,n.treePath,e,t,s,i,r)}function Ns(n,e,t){return Au(n.writeTree,n.treePath,e,t)}function mo(n,e){return go(K(n.treePath,e),n.writeTree)}function go(n,e){return{treePath:n,writeTree:e}}/**
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
 */class Pu{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;m(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),m(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(s,At(s,e.snapshotNode,i.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(s,Rt(s,i.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(s,at(s,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(s,At(s,e.snapshotNode,i.oldSnap));else throw ct("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class Mu{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const yo=new Mu;class Rs{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new je(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Ns(this.writes_,e,s)}}getChildAfterChild(e,t,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ze(this.viewCache_),r=Ou(this.writes_,i,t,1,s,e);return r.length===0?null:r[0]}}/**
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
 */function Lu(n){return{filter:n}}function Fu(n,e){m(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),m(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function Uu(n,e,t,s,i){const r=new Pu;let o,a;if(t.type===fe.OVERWRITE){const c=t;c.source.fromUser?o=rs(n,e,c.path,c.snap,s,i,r):(m(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!D(c.path),o=on(n,e,c.path,c.snap,s,i,a,r))}else if(t.type===fe.MERGE){const c=t;c.source.fromUser?o=Wu(n,e,c.path,c.children,s,i,r):(m(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=os(n,e,c.path,c.children,s,i,a,r))}else if(t.type===fe.ACK_USER_WRITE){const c=t;c.revert?o=Vu(n,e,c.path,s,i,r):o=Hu(n,e,c.path,c.affectedTree,s,i,r)}else if(t.type===fe.LISTEN_COMPLETE)o=$u(n,e,t.path,s,r);else throw ct("Unknown operation type: "+t.type);const l=r.getChanges();return Bu(e,o,l),{viewCache:o,changes:l}}function Bu(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=ns(n);(t.length>0||!n.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&t.push(lo(ns(e)))}}function Eo(n,e,t,s,i,r){const o=e.eventCache;if(rn(s,t)!=null)return e;{let a,l;if(D(t))if(m(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=ze(e),h=c instanceof C?c:C.EMPTY_NODE,u=Ss(s,h);a=n.filter.updateFullNode(e.eventCache.getNode(),u,r)}else{const c=sn(s,ze(e));a=n.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=A(t);if(c===".priority"){m(Re(t)===1,"Can't have a priority with additional path components");const h=o.getNode();l=e.serverCache.getNode();const u=xi(s,t,h,l);u!=null?a=n.filter.updatePriority(h,u):a=o.getNode()}else{const h=B(t);let u;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=xi(s,t,o.getNode(),l);d!=null?u=o.getNode().getImmediateChild(c).updateChild(h,d):u=o.getNode().getImmediateChild(c)}else u=Ns(s,c,e.serverCache);u!=null?a=n.filter.updateChild(o.getNode(),c,u,h,i,r):a=o.getNode()}}return vt(e,a,o.isFullyInitialized()||D(t),n.filter.filtersNodes())}}function on(n,e,t,s,i,r,o,a){const l=e.serverCache;let c;const h=o?n.filter:n.filter.getIndexedFilter();if(D(t))c=h.updateFullNode(l.getNode(),s,null);else if(h.filtersNodes()&&!l.isFiltered()){const f=l.getNode().updateChild(t,s);c=h.updateFullNode(l.getNode(),f,null)}else{const f=A(t);if(!l.isCompleteForPath(t)&&Re(t)>1)return e;const p=B(t),y=l.getNode().getImmediateChild(f).updateChild(p,s);f===".priority"?c=h.updatePriority(l.getNode(),y):c=h.updateChild(l.getNode(),f,y,p,yo,null)}const u=ho(e,c,l.isFullyInitialized()||D(t),h.filtersNodes()),d=new Rs(i,u,r);return Eo(n,u,t,i,d,a)}function rs(n,e,t,s,i,r,o){const a=e.eventCache;let l,c;const h=new Rs(i,e,r);if(D(t))c=n.filter.updateFullNode(e.eventCache.getNode(),s,o),l=vt(e,c,!0,n.filter.filtersNodes());else{const u=A(t);if(u===".priority")c=n.filter.updatePriority(e.eventCache.getNode(),s),l=vt(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=B(t),f=a.getNode().getImmediateChild(u);let p;if(D(d))p=s;else{const g=h.getCompleteChild(u);g!=null?Zr(d)===".priority"&&g.getChild(to(d)).isEmpty()?p=g:p=g.updateChild(d,s):p=C.EMPTY_NODE}if(f.equals(p))l=e;else{const g=n.filter.updateChild(a.getNode(),u,p,d,h,o);l=vt(e,g,a.isFullyInitialized(),n.filter.filtersNodes())}}}return l}function Oi(n,e){return n.eventCache.isCompleteForChild(e)}function Wu(n,e,t,s,i,r,o){let a=e;return s.foreach((l,c)=>{const h=K(t,l);Oi(e,A(h))&&(a=rs(n,a,h,c,i,r,o))}),s.foreach((l,c)=>{const h=K(t,l);Oi(e,A(h))||(a=rs(n,a,h,c,i,r,o))}),a}function Pi(n,e,t){return t.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function os(n,e,t,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;D(t)?c=s:c=new W(null).setTree(t,s);const h=e.serverCache.getNode();return c.children.inorderTraversal((u,d)=>{if(h.hasChild(u)){const f=e.serverCache.getNode().getImmediateChild(u),p=Pi(n,f,d);l=on(n,l,new L(u),p,i,r,o,a)}}),c.children.inorderTraversal((u,d)=>{const f=!e.serverCache.isCompleteForChild(u)&&d.value===null;if(!h.hasChild(u)&&!f){const p=e.serverCache.getNode().getImmediateChild(u),g=Pi(n,p,d);l=on(n,l,new L(u),g,i,r,o,a)}}),l}function Hu(n,e,t,s,i,r,o){if(rn(i,t)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(D(t)&&l.isFullyInitialized()||l.isCompleteForPath(t))return on(n,e,t,l.getNode().getChild(t),i,r,a,o);if(D(t)){let c=new W(null);return l.getNode().forEachChild(nt,(h,u)=>{c=c.set(new L(h),u)}),os(n,e,t,c,i,r,a,o)}else return e}else{let c=new W(null);return s.foreach((h,u)=>{const d=K(t,h);l.isCompleteForPath(d)&&(c=c.set(h,l.getNode().getChild(d)))}),os(n,e,t,c,i,r,a,o)}}function $u(n,e,t,s,i){const r=e.serverCache,o=ho(e,r.getNode(),r.isFullyInitialized()||D(t),r.isFiltered());return Eo(n,o,t,s,yo,i)}function Vu(n,e,t,s,i,r){let o;if(rn(s,t)!=null)return e;{const a=new Rs(s,e,i),l=e.eventCache.getNode();let c;if(D(t)||A(t)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=sn(s,ze(e));else{const u=e.serverCache.getNode();m(u instanceof C,"serverChildren would be complete if leaf node"),h=Ss(s,u)}h=h,c=n.filter.updateFullNode(l,h,r)}else{const h=A(t);let u=Ns(s,h,e.serverCache);u==null&&e.serverCache.isCompleteForChild(h)&&(u=l.getImmediateChild(h)),u!=null?c=n.filter.updateChild(l,h,u,B(t),a,r):e.eventCache.getNode().hasChild(h)?c=n.filter.updateChild(l,h,C.EMPTY_NODE,B(t),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=sn(s,ze(e)),o.isLeafNode()&&(c=n.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||rn(s,O())!=null,vt(e,c,o,n.filter.filtersNodes())}}/**
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
 */class qu{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new bs(s.getIndex()),r=cu(s);this.processor_=Lu(r);const o=t.serverCache,a=t.eventCache,l=i.updateFullNode(C.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(C.EMPTY_NODE,a.getNode(),null),h=new je(l,o.isFullyInitialized(),i.filtersNodes()),u=new je(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=fn(u,h),this.eventGenerator_=new mu(this.query_)}get query(){return this.query_}}function ju(n){return n.viewCache_.serverCache.getNode()}function zu(n,e){const t=ze(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!D(e)&&!t.getImmediateChild(A(e)).isEmpty())?t.getChild(e):null}function Mi(n){return n.eventRegistrations_.length===0}function Gu(n,e){n.eventRegistrations_.push(e)}function Li(n,e,t){const s=[];if(t){m(e==null,"A cancel should cancel all event registrations.");const i=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=i}else n.eventRegistrations_=[];return s}function Fi(n,e,t,s){e.type===fe.MERGE&&e.source.queryId!==null&&(m(ze(n.viewCache_),"We should always have a full cache before handling merges"),m(ns(n.viewCache_),"Missing event cache, even though we have a server cache"));const i=n.viewCache_,r=Uu(n.processor_,i,e,t,s);return Fu(n.processor_,r.viewCache),m(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,vo(n,r.changes,r.viewCache.eventCache.getNode(),null)}function Ku(n,e){const t=n.viewCache_.eventCache,s=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(j,(r,o)=>{s.push(at(r,o))}),t.isFullyInitialized()&&s.push(lo(t.getNode())),vo(n,s,t.getNode(),e)}function vo(n,e,t,s){const i=s?[s]:n.eventRegistrations_;return gu(n.eventGenerator_,e,t,i)}/**
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
 */let an;class Yu{constructor(){this.views=new Map}}function Qu(n){m(!an,"__referenceConstructor has already been defined"),an=n}function Xu(){return m(an,"Reference.ts has not been loaded"),an}function Ju(n){return n.views.size===0}function As(n,e,t,s){const i=e.source.queryId;if(i!==null){const r=n.views.get(i);return m(r!=null,"SyncTree gave us an op for an invalid query."),Fi(r,e,t,s)}else{let r=[];for(const o of n.views.values())r=r.concat(Fi(o,e,t,s));return r}}function Zu(n,e,t,s,i){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let a=sn(t,i?s:null),l=!1;a?l=!0:s instanceof C?(a=Ss(t,s),l=!1):(a=C.EMPTY_NODE,l=!1);const c=fn(new je(a,l,!1),new je(s,i,!1));return new qu(e,c)}return o}function eh(n,e,t,s,i,r){const o=Zu(n,e,s,i,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),Gu(o,t),Ku(o,t)}function th(n,e,t,s){const i=e._queryIdentifier,r=[];let o=[];const a=Ae(n);if(i==="default")for(const[l,c]of n.views.entries())o=o.concat(Li(c,t,s)),Mi(c)&&(n.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=n.views.get(i);l&&(o=o.concat(Li(l,t,s)),Mi(l)&&(n.views.delete(i),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!Ae(n)&&r.push(new(Xu())(e._repo,e._path)),{removed:r,events:o}}function bo(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function st(n,e){let t=null;for(const s of n.views.values())t=t||zu(s,e);return t}function Co(n,e){if(e._queryParams.loadsAllData())return _n(n);{const s=e._queryIdentifier;return n.views.get(s)}}function wo(n,e){return Co(n,e)!=null}function Ae(n){return _n(n)!=null}function _n(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let ln;function nh(n){m(!ln,"__referenceConstructor has already been defined"),ln=n}function sh(){return m(ln,"Reference.ts has not been loaded"),ln}let ih=1;class Ui{constructor(e){this.listenProvider_=e,this.syncPointTree_=new W(null),this.pendingWriteTree_=xu(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function rh(n,e,t,s,i){return bu(n.pendingWriteTree_,e,t,s,i),i?Ut(n,new qe(uo(),e,t)):[]}function Ze(n,e,t=!1){const s=Cu(n.pendingWriteTree_,e);if(wu(n.pendingWriteTree_,e)){let r=new W(null);return s.snap!=null?r=r.set(O(),!0):oe(s.children,o=>{r=r.set(new L(o),!0)}),Ut(n,new nn(s.path,r,t))}else return[]}function pn(n,e,t){return Ut(n,new qe(ws(),e,t))}function oh(n,e,t){const s=W.fromObject(t);return Ut(n,new xt(ws(),e,s))}function ah(n,e){return Ut(n,new kt(ws(),e))}function lh(n,e,t){const s=Ds(n,t);if(s){const i=ks(s),r=i.path,o=i.queryId,a=ie(r,e),l=new kt(Ts(o),a);return xs(n,r,l)}else return[]}function as(n,e,t,s,i=!1){const r=e._path,o=n.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||wo(o,e))){const l=th(o,e,t,s);Ju(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!i){const h=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,u=n.syncPointTree_.findOnPath(r,(d,f)=>Ae(f));if(h&&!u){const d=n.syncPointTree_.subtree(r);if(!d.isEmpty()){const f=hh(d);for(let p=0;p<f.length;++p){const g=f[p],y=g.query,k=No(n,g);n.listenProvider_.startListening(Ct(y),cn(n,y),k.hashFn,k.onComplete)}}}!u&&c.length>0&&!s&&(h?n.listenProvider_.stopListening(Ct(e),null):c.forEach(d=>{const f=n.queryToTagMap.get(mn(d));n.listenProvider_.stopListening(Ct(d),f)}))}dh(n,c)}return a}function ch(n,e,t,s){const i=Ds(n,s);if(i!=null){const r=ks(i),o=r.path,a=r.queryId,l=ie(o,e),c=new qe(Ts(a),l,t);return xs(n,o,c)}else return[]}function uh(n,e,t,s){const i=Ds(n,s);if(i){const r=ks(i),o=r.path,a=r.queryId,l=ie(o,e),c=W.fromObject(t),h=new xt(Ts(a),l,c);return xs(n,o,h)}else return[]}function Bi(n,e,t,s=!1){const i=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(i,(d,f)=>{const p=ie(d,i);r=r||st(f,p),o=o||Ae(f)});let a=n.syncPointTree_.get(i);a?(o=o||Ae(a),r=r||st(a,O())):(a=new Yu,n.syncPointTree_=n.syncPointTree_.set(i,a));let l;r!=null?l=!0:(l=!1,r=C.EMPTY_NODE,n.syncPointTree_.subtree(i).foreachChild((f,p)=>{const g=st(p,O());g&&(r=r.updateImmediateChild(f,g))}));const c=wo(a,e);if(!c&&!e._queryParams.loadsAllData()){const d=mn(e);m(!n.queryToTagMap.has(d),"View does not exist, but we have a tag");const f=fh();n.queryToTagMap.set(d,f),n.tagToQueryMap.set(f,d)}const h=Is(n.pendingWriteTree_,i);let u=eh(a,e,t,h,r,l);if(!c&&!o&&!s){const d=Co(a,e);u=u.concat(_h(n,e,d))}return u}function To(n,e,t){const i=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,a)=>{const l=ie(o,e),c=st(a,l);if(c)return c});return po(i,e,r,t,!0)}function Ut(n,e){return Io(e,n.syncPointTree_,null,Is(n.pendingWriteTree_,O()))}function Io(n,e,t,s){if(D(n.path))return So(n,e,t,s);{const i=e.get(O());t==null&&i!=null&&(t=st(i,O()));let r=[];const o=A(n.path),a=n.operationForChild(o),l=e.children.get(o);if(l&&a){const c=t?t.getImmediateChild(o):null,h=mo(s,o);r=r.concat(Io(a,l,c,h))}return i&&(r=r.concat(As(i,n,s,t))),r}}function So(n,e,t,s){const i=e.get(O());t==null&&i!=null&&(t=st(i,O()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=t?t.getImmediateChild(o):null,c=mo(s,o),h=n.operationForChild(o);h&&(r=r.concat(So(h,a,l,c)))}),i&&(r=r.concat(As(i,n,s,t))),r}function No(n,e){const t=e.query,s=cn(n,t);return{hashFn:()=>(ju(e)||C.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?lh(n,t._path,s):ah(n,t._path);{const r=lc(i,t);return as(n,t,null,r)}}}}function cn(n,e){const t=mn(e);return n.queryToTagMap.get(t)}function mn(n){return n._path.toString()+"$"+n._queryIdentifier}function Ds(n,e){return n.tagToQueryMap.get(e)}function ks(n){const e=n.indexOf("$");return m(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new L(n.substr(0,e))}}function xs(n,e,t){const s=n.syncPointTree_.get(e);m(s,"Missing sync point for query tag that we're tracking");const i=Is(n.pendingWriteTree_,e);return As(s,t,i,null)}function hh(n){return n.fold((e,t,s)=>{if(t&&Ae(t))return[_n(t)];{let i=[];return t&&(i=bo(t)),oe(s,(r,o)=>{i=i.concat(o)}),i}})}function Ct(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(sh())(n._repo,n._path):n}function dh(n,e){for(let t=0;t<e.length;++t){const s=e[t];if(!s._queryParams.loadsAllData()){const i=mn(s),r=n.queryToTagMap.get(i);n.queryToTagMap.delete(i),n.tagToQueryMap.delete(r)}}}function fh(){return ih++}function _h(n,e,t){const s=e._path,i=cn(n,e),r=No(n,t),o=n.listenProvider_.startListening(Ct(e),i,r.hashFn,r.onComplete),a=n.syncPointTree_.subtree(s);if(i)m(!Ae(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,h,u)=>{if(!D(c)&&h&&Ae(h))return[_n(h).query];{let d=[];return h&&(d=d.concat(bo(h).map(f=>f.query))),oe(u,(f,p)=>{d=d.concat(p)}),d}});for(let c=0;c<l.length;++c){const h=l[c];n.listenProvider_.stopListening(Ct(h),cn(n,h))}}return o}/**
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
 */class Os{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Os(t)}node(){return this.node_}}class Ps{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=K(this.path_,e);return new Ps(this.syncTree_,t)}node(){return To(this.syncTree_,this.path_)}}const ph=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},Wi=function(n,e,t){if(!n||typeof n!="object")return n;if(m(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return mh(n[".sv"],e,t);if(typeof n[".sv"]=="object")return gh(n[".sv"],e);m(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},mh=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:m(!1,"Unexpected server value: "+n)}},gh=function(n,e,t){n.hasOwnProperty("increment")||m(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&m(!1,"Unexpected increment value: "+s);const i=e.node();if(m(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},yh=function(n,e,t,s){return Ms(e,new Ps(t,n),s)},Eh=function(n,e,t){return Ms(n,new Os(e),t)};function Ms(n,e,t){const s=n.getPriority().val(),i=Wi(s,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,a=Wi(o.getValue(),e,t);return a!==o.getValue()||i!==o.getPriority().val()?new X(a,te(i)):n}else{const o=n;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new X(i))),o.forEachChild(j,(a,l)=>{const c=Ms(l,e.getImmediateChild(a),t);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
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
 */class Ls{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function Fs(n,e){let t=e instanceof L?e:new L(e),s=n,i=A(t);for(;i!==null;){const r=it(s.node.children,i)||{children:{},childCount:0};s=new Ls(i,s,r),t=B(t),i=A(t)}return s}function dt(n){return n.node.value}function Ro(n,e){n.node.value=e,ls(n)}function Ao(n){return n.node.childCount>0}function vh(n){return dt(n)===void 0&&!Ao(n)}function gn(n,e){oe(n.node.children,(t,s)=>{e(new Ls(t,n,s))})}function Do(n,e,t,s){t&&!s&&e(n),gn(n,i=>{Do(i,e,!0,s)}),t&&s&&e(n)}function bh(n,e,t){let s=t?n:n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Bt(n){return new L(n.parent===null?n.name:Bt(n.parent)+"/"+n.name)}function ls(n){n.parent!==null&&Ch(n.parent,n.name,n)}function Ch(n,e,t){const s=vh(t),i=ve(n.node.children,e);s&&i?(delete n.node.children[e],n.node.childCount--,ls(n)):!s&&!i&&(n.node.children[e]=t.node,n.node.childCount++,ls(n))}/**
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
 */const wh=/[\[\].#$\/\u0000-\u001F\u007F]/,Th=/[\[\].#$\u0000-\u001F\u007F]/,kn=10*1024*1024,ko=function(n){return typeof n=="string"&&n.length!==0&&!wh.test(n)},xo=function(n){return typeof n=="string"&&n.length!==0&&!Th.test(n)},Ih=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),xo(n)},Oo=function(n,e,t){const s=t instanceof L?new Hc(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+Ue(s));if(typeof e=="function")throw new Error(n+"contains a function "+Ue(s)+" with contents = "+e.toString());if(xr(e))throw new Error(n+"contains "+e.toString()+" "+Ue(s));if(typeof e=="string"&&e.length>kn/3&&hn(e)>kn)throw new Error(n+"contains a string greater than "+kn+" utf8 bytes "+Ue(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(oe(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!ko(o)))throw new Error(n+" contains an invalid key ("+o+") "+Ue(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);$c(s,o),Oo(n,a,s),Vc(s)}),i&&r)throw new Error(n+' contains ".value" child '+Ue(s)+" in addition to actual children.")}},Po=function(n,e,t,s){if(!(s&&t===void 0)&&!xo(t))throw new Error(Er(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Sh=function(n,e,t,s){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Po(n,e,t,s)},Nh=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!ko(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!Ih(t))throw new Error(Er(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class Rh{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Mo(n,e){let t=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();t!==null&&!ys(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(i)}t&&n.eventLists_.push(t)}function Lo(n,e,t){Mo(n,t),Fo(n,s=>ys(s,e))}function Ye(n,e,t){Mo(n,t),Fo(n,s=>de(s,e)||de(e,s))}function Fo(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const i=n.eventLists_[s];if(i){const r=i.path;e(r)?(Ah(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function Ah(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();We&&ee("event: "+t.toString()),Lt(s)}}}/**
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
 */const Dh="repo_interrupt",kh=25;class xh{constructor(e,t,s,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Rh,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=tn(),this.transactionQueueTree_=new Ls,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Oh(n,e,t){if(n.stats_=ms(n.repoInfo_),n.forceRestClient_||dc())n.server_=new en(n.repoInfo_,(s,i,r,o)=>{Hi(n,s,i,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>$i(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Z(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new ye(n.repoInfo_,e,(s,i,r,o)=>{Hi(n,s,i,r,o)},s=>{$i(n,s)},s=>{Mh(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=gc(n.repoInfo_,()=>new pu(n.stats_,n.server_)),n.infoData_=new uu,n.infoSyncTree_=new Ui({startListening:(s,i,r,o)=>{let a=[];const l=n.infoData_.getNode(s._path);return l.isEmpty()||(a=pn(n.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Us(n,"connected",!1),n.serverSyncTree_=new Ui({startListening:(s,i,r,o)=>(n.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);Ye(n.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{n.server_.unlisten(s,i)}})}function Ph(n){const t=n.infoData_.getNode(new L(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Uo(n){return ph({timestamp:Ph(n)})}function Hi(n,e,t,s,i){n.dataUpdateCount++;const r=new L(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(i)if(s){const l=Yt(t,c=>te(c));o=uh(n.serverSyncTree_,r,l,i)}else{const l=te(t);o=ch(n.serverSyncTree_,r,l,i)}else if(s){const l=Yt(t,c=>te(c));o=oh(n.serverSyncTree_,r,l)}else{const l=te(t);o=pn(n.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=Ws(n,r)),Ye(n.eventQueue_,a,o)}function $i(n,e){Us(n,"connected",e),e===!1&&Fh(n)}function Mh(n,e){oe(e,(t,s)=>{Us(n,t,s)})}function Us(n,e,t){const s=new L("/.info/"+e),i=te(t);n.infoData_.updateSnapshot(s,i);const r=pn(n.infoSyncTree_,s,i);Ye(n.eventQueue_,s,r)}function Lh(n){return n.nextWriteId_++}function Fh(n){Bo(n,"onDisconnectEvents");const e=Uo(n),t=tn();ts(n.onDisconnect_,O(),(i,r)=>{const o=yh(i,r,n.serverSyncTree_,e);co(t,i,o)});let s=[];ts(t,O(),(i,r)=>{s=s.concat(pn(n.serverSyncTree_,i,r));const o=$h(n,i);Ws(n,o)}),n.onDisconnect_=tn(),Ye(n.eventQueue_,O(),s)}function Uh(n,e,t){let s;A(e._path)===".info"?s=Bi(n.infoSyncTree_,e,t):s=Bi(n.serverSyncTree_,e,t),Lo(n.eventQueue_,e._path,s)}function Vi(n,e,t){let s;A(e._path)===".info"?s=as(n.infoSyncTree_,e,t):s=as(n.serverSyncTree_,e,t),Lo(n.eventQueue_,e._path,s)}function Bh(n){n.persistentConnection_&&n.persistentConnection_.interrupt(Dh)}function Bo(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),ee(t,...e)}function Wo(n,e,t){return To(n.serverSyncTree_,e,t)||C.EMPTY_NODE}function Bs(n,e=n.transactionQueueTree_){if(e||yn(n,e),dt(e)){const t=$o(n,e);m(t.length>0,"Sending zero length transaction queue"),t.every(i=>i.status===0)&&Wh(n,Bt(e),t)}else Ao(e)&&gn(e,t=>{Bs(n,t)})}function Wh(n,e,t){const s=t.map(c=>c.currentWriteId),i=Wo(n,e,s);let r=i;const o=i.hash();for(let c=0;c<t.length;c++){const h=t[c];m(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const u=ie(e,h.path);r=r.updateChild(u,h.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;n.server_.put(l.toString(),a,c=>{Bo(n,"transaction put response",{path:l.toString(),status:c});let h=[];if(c==="ok"){const u=[];for(let d=0;d<t.length;d++)t[d].status=2,h=h.concat(Ze(n.serverSyncTree_,t[d].currentWriteId)),t[d].onComplete&&u.push(()=>t[d].onComplete(null,!0,t[d].currentOutputSnapshotResolved)),t[d].unwatcher();yn(n,Fs(n.transactionQueueTree_,e)),Bs(n,n.transactionQueueTree_),Ye(n.eventQueue_,e,h);for(let d=0;d<u.length;d++)Lt(u[d])}else{if(c==="datastale")for(let u=0;u<t.length;u++)t[u].status===3?t[u].status=4:t[u].status=0;else{le("transaction at "+l.toString()+" failed: "+c);for(let u=0;u<t.length;u++)t[u].status=4,t[u].abortReason=c}Ws(n,e)}},o)}function Ws(n,e){const t=Ho(n,e),s=Bt(t),i=$o(n,t);return Hh(n,i,s),s}function Hh(n,e,t){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=ie(t,l.path);let h=!1,u;if(m(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)h=!0,u=l.abortReason,i=i.concat(Ze(n.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=kh)h=!0,u="maxretry",i=i.concat(Ze(n.serverSyncTree_,l.currentWriteId,!0));else{const d=Wo(n,l.path,o);l.currentInputSnapshot=d;const f=e[a].update(d.val());if(f!==void 0){Oo("transaction failed: Data returned ",f,l.path);let p=te(f);typeof f=="object"&&f!=null&&ve(f,".priority")||(p=p.updatePriority(d.getPriority()));const y=l.currentWriteId,k=Uo(n),H=Eh(p,d,k);l.currentOutputSnapshotRaw=p,l.currentOutputSnapshotResolved=H,l.currentWriteId=Lh(n),o.splice(o.indexOf(y),1),i=i.concat(rh(n.serverSyncTree_,l.path,H,l.currentWriteId,l.applyLocally)),i=i.concat(Ze(n.serverSyncTree_,y,!0))}else h=!0,u="nodata",i=i.concat(Ze(n.serverSyncTree_,l.currentWriteId,!0))}Ye(n.eventQueue_,t,i),i=[],h&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(u==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(u),!1,null))))}yn(n,n.transactionQueueTree_);for(let a=0;a<s.length;a++)Lt(s[a]);Bs(n,n.transactionQueueTree_)}function Ho(n,e){let t,s=n.transactionQueueTree_;for(t=A(e);t!==null&&dt(s)===void 0;)s=Fs(s,t),e=B(e),t=A(e);return s}function $o(n,e){const t=[];return Vo(n,e,t),t.sort((s,i)=>s.order-i.order),t}function Vo(n,e,t){const s=dt(e);if(s)for(let i=0;i<s.length;i++)t.push(s[i]);gn(e,i=>{Vo(n,i,t)})}function yn(n,e){const t=dt(e);if(t){let s=0;for(let i=0;i<t.length;i++)t[i].status!==2&&(t[s]=t[i],s++);t.length=s,Ro(e,t.length>0?t:void 0)}gn(e,s=>{yn(n,s)})}function $h(n,e){const t=Bt(Ho(n,e)),s=Fs(n.transactionQueueTree_,e);return bh(s,i=>{xn(n,i)}),xn(n,s),Do(s,i=>{xn(n,i)}),t}function xn(n,e){const t=dt(e);if(t){const s=[];let i=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(m(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(m(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),i=i.concat(Ze(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&s.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Ro(e,void 0):t.length=r+1,Ye(n.eventQueue_,Bt(e),i);for(let o=0;o<s.length;o++)Lt(s[o])}}/**
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
 */function Vh(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let i=t[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function qh(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):le(`Invalid query segment '${t}' in query '${n}'`)}return e}const qi=function(n,e){const t=jh(n),s=t.namespace;t.domain==="firebase.com"&&Ee(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&Ee("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||sc();const i=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new qr(t.host,t.secure,s,i,e,"",s!==t.subdomain),path:new L(t.pathString)}},jh=function(n){let e="",t="",s="",i="",r="",o=!0,a="https",l=443;if(typeof n=="string"){let c=n.indexOf("//");c>=0&&(a=n.substring(0,c-1),n=n.substring(c+2));let h=n.indexOf("/");h===-1&&(h=n.length);let u=n.indexOf("?");u===-1&&(u=n.length),e=n.substring(0,Math.min(h,u)),h<u&&(i=Vh(n.substring(h,u)));const d=qh(n.substring(Math.min(n.length,u)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const f=e.slice(0,c);if(f.toLowerCase()==="localhost")t="localhost";else if(f.split(".").length<=2)t=f;else{const p=e.indexOf(".");s=e.substring(0,p).toLowerCase(),t=e.substring(p+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:l,domain:t,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
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
 */class qo{constructor(e,t,s,i){this.eventType=e,this.eventRegistration=t,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Z(this.snapshot.exportVal())}}class jo{constructor(e,t,s){this.eventRegistration=e,this.error=t,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class zh{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return m(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Hs{constructor(e,t,s,i){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=i}get key(){return D(this._path)?null:Zr(this._path)}get ref(){return new be(this._repo,this._path)}get _queryIdentifier(){const e=Ni(this._queryParams),t=_s(e);return t==="{}"?"default":t}get _queryObject(){return Ni(this._queryParams)}isEqual(e){if(e=De(e),!(e instanceof Hs))return!1;const t=this._repo===e._repo,s=ys(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Wc(this._path)}}class be extends Hs{constructor(e,t){super(e,t,new Cs,!1)}get parent(){const e=to(this._path);return e===null?null:new be(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Ot{constructor(e,t,s){this._node=e,this.ref=t,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new L(e),s=un(this.ref,e);return new Ot(this._node.getChild(t),s,j)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new Ot(i,un(this.ref,s),j)))}hasChild(e){const t=new L(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function a_(n,e){return n=De(n),n._checkNotDeleted("ref"),e!==void 0?un(n._root,e):n._root}function un(n,e){return n=De(n),A(n._path)===null?Sh("child","path",e,!1):Po("child","path",e,!1),new be(n._repo,K(n._path,e))}class $s{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const s=t._queryParams.getIndex();return new qo("value",this,new Ot(e.snapshotNode,new be(t._repo,t._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new jo(this,e,t):null}matches(e){return e instanceof $s?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Vs{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t=e==="children_added"?"child_added":e;return t=t==="children_removed"?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new jo(this,e,t):null}createEvent(e,t){m(e.childName!=null,"Child events should have a childName.");const s=un(new be(t._repo,t._path),e.childName),i=t._queryParams.getIndex();return new qo(e.type,this,new Ot(e.snapshotNode,s,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Vs?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function Gh(n,e,t,s,i){let r;if(typeof s=="object"&&(r=void 0,i=s),typeof s=="function"&&(r=s),i&&i.onlyOnce){const l=t,c=(h,u)=>{Vi(n._repo,n,a),l(h,u)};c.userCallback=t.userCallback,c.context=t.context,t=c}const o=new zh(t,r||void 0),a=e==="value"?new $s(o):new Vs(e,o);return Uh(n._repo,n,a),()=>Vi(n._repo,n,a)}function l_(n,e,t,s){return Gh(n,"value",e,t,s)}Qu(be);nh(be);/**
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
 */const Kh="FIREBASE_DATABASE_EMULATOR_HOST",cs={};let Yh=!1;function Qh(n,e,t,s){n.repoInfo_=new qr(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),s&&(n.authTokenProvider_=s)}function Xh(n,e,t,s,i){let r=s||n.options.databaseURL;r===void 0&&(n.options.projectId||Ee("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ee("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=qi(r,i),a=o.repoInfo,l,c;typeof process<"u"&&ci&&(c=ci[Kh]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=qi(r,i),a=o.repoInfo):l=!o.repoInfo.secure;const h=i&&l?new tt(tt.OWNER):new _c(n.name,n.options,e);Nh("Invalid Firebase Database URL",o),D(o.path)||Ee("Database URL must point to the root of a Firebase Database (not including a child path).");const u=Zh(a,n,h,new fc(n.name,t));return new ed(u,n)}function Jh(n,e){const t=cs[e];(!t||t[n.key]!==n)&&Ee(`Database ${e}(${n.repoInfo_}) has already been deleted.`),Bh(n),delete t[n.key]}function Zh(n,e,t,s){let i=cs[e.name];i||(i={},cs[e.name]=i);let r=i[n.toURLString()];return r&&Ee("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new xh(n,Yh,t,s),i[n.toURLString()]=r,r}class ed{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Oh(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new be(this._repo,O())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Jh(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Ee("Cannot call "+e+" on a deleted database.")}}function td(n=Sr(),e){const t=wr(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const s=dr("database");s&&nd(t,...s)}return t}function nd(n,e,t,s={}){n=De(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&Ee("Cannot call useEmulator() after instance has already been initialized.");const i=n._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&Ee('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new tt(tt.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:_r(s.mockUserToken,n.app.options.projectId);r=new tt(o)}Qh(i,e,t,r)}/**
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
 */function sd(n){Jl(Tr),It(new rt("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Xh(s,i,r,t)},"PUBLIC").setMultipleInstances(!0)),Se(ui,hi,n),Se(ui,hi,"esm2017")}ye.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};ye.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};sd();/**
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
 */const zo="firebasestorage.googleapis.com",Go="storageBucket",id=2*60*1e3,rd=10*60*1e3;/**
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
 */class G extends ut{constructor(e,t,s=0){super(On(e),`Firebase Storage: ${t} (${On(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,G.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return On(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var z;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(z||(z={}));function On(n){return"storage/"+n}function qs(){const n="An unknown error occurred, please check the error payload for server response.";return new G(z.UNKNOWN,n)}function od(n){return new G(z.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function ad(n){return new G(z.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function ld(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new G(z.UNAUTHENTICATED,n)}function cd(){return new G(z.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function ud(n){return new G(z.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function hd(){return new G(z.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function dd(){return new G(z.CANCELED,"User canceled the upload/download.")}function fd(n){return new G(z.INVALID_URL,"Invalid URL '"+n+"'.")}function _d(n){return new G(z.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function pd(){return new G(z.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Go+"' property when initializing the app?")}function md(){return new G(z.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function gd(){return new G(z.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function yd(n){return new G(z.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function us(n){return new G(z.INVALID_ARGUMENT,n)}function Ko(){return new G(z.APP_DELETED,"The Firebase app was deleted.")}function Ed(n){return new G(z.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function wt(n,e){return new G(z.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function yt(n){throw new G(z.INTERNAL_ERROR,"Internal error: "+n)}/**
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
 */class ae{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let s;try{s=ae.makeFromUrl(e,t)}catch{return new ae(e,"")}if(s.path==="")return s;throw _d(e)}static makeFromUrl(e,t){let s=null;const i="([A-Za-z0-9.\\-_]+)";function r(x){x.path.charAt(x.path.length-1)==="/"&&(x.path_=x.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function c(x){x.path_=decodeURIComponent(x.path)}const h="v[A-Za-z0-9_]+",u=t.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${u}/${h}/b/${i}/o${d}`,"i"),p={bucket:1,path:3},g=t===zo?"(?:storage.googleapis.com|storage.cloud.google.com)":t,y="([^?#]*)",k=new RegExp(`^https?://${g}/${i}/${y}`,"i"),S=[{regex:a,indices:l,postModify:r},{regex:f,indices:p,postModify:c},{regex:k,indices:{bucket:1,path:2},postModify:c}];for(let x=0;x<S.length;x++){const M=S[x],E=M.regex.exec(e);if(E){const v=E[M.indices.bucket];let T=E[M.indices.path];T||(T=""),s=new ae(v,T),M.postModify(s);break}}if(s==null)throw fd(e);return s}}class vd{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function bd(n,e,t){let s=1,i=null,r=null,o=!1,a=0;function l(){return a===2}let c=!1;function h(...y){c||(c=!0,e.apply(null,y))}function u(y){i=setTimeout(()=>{i=null,n(f,l())},y)}function d(){r&&clearTimeout(r)}function f(y,...k){if(c){d();return}if(y){d(),h.call(null,y,...k);return}if(l()||o){d(),h.call(null,y,...k);return}s<64&&(s*=2);let S;a===1?(a=2,S=0):S=(s+Math.random())*1e3,u(S)}let p=!1;function g(y){p||(p=!0,d(),!c&&(i!==null?(y||(a=2),clearTimeout(i),u(0)):y||(a=1)))}return u(0),r=setTimeout(()=>{o=!0,g(!0)},t),g}function Cd(n){n(!1)}/**
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
 */function wd(n){return n!==void 0}function Td(n){return typeof n=="object"&&!Array.isArray(n)}function js(n){return typeof n=="string"||n instanceof String}function ji(n){return zs()&&n instanceof Blob}function zs(){return typeof Blob<"u"}function zi(n,e,t,s){if(s<e)throw us(`Invalid value for '${n}'. Expected ${e} or greater.`);if(s>t)throw us(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
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
 */function Gs(n,e,t){let s=e;return t==null&&(s=`https://${e}`),`${t}://${s}/v0${n}`}function Yo(n){const e=encodeURIComponent;let t="?";for(const s in n)if(n.hasOwnProperty(s)){const i=e(s)+"="+e(n[s]);t=t+i+"&"}return t=t.slice(0,-1),t}/**
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
 */var He;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(He||(He={}));/**
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
 */function Id(n,e){const t=n>=500&&n<600,i=[408,429].indexOf(n)!==-1,r=e.indexOf(n)!==-1;return t||i||r}/**
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
 */class Sd{constructor(e,t,s,i,r,o,a,l,c,h,u,d=!0){this.url_=e,this.method_=t,this.headers_=s,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=h,this.connectionFactory_=u,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,p)=>{this.resolve_=f,this.reject_=p,this.start_()})}start_(){const e=(s,i)=>{if(i){s(!1,new qt(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===He.NO_ERROR,l=r.getStatus();if(!a||Id(l,this.additionalRetryCodes_)&&this.retry){const h=r.getErrorCode()===He.ABORT;s(!1,new qt(!1,null,h));return}const c=this.successCodes_.indexOf(l)!==-1;s(!0,new qt(c,r))})},t=(s,i)=>{const r=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());wd(l)?r(l):r()}catch(l){o(l)}else if(a!==null){const l=qs();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?Ko():dd();o(l)}else{const l=hd();o(l)}};this.canceled_?t(!1,new qt(!1,null,!0)):this.backoffId_=bd(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Cd(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class qt{constructor(e,t,s){this.wasSuccessCode=e,this.connection=t,this.canceled=!!s}}function Nd(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function Rd(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Ad(n,e){e&&(n["X-Firebase-GMPID"]=e)}function Dd(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function kd(n,e,t,s,i,r,o=!0){const a=Yo(n.urlParams),l=n.url+a,c=Object.assign({},n.headers);return Ad(c,e),Nd(c,t),Rd(c,r),Dd(c,s),new Sd(l,n.method,c,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,i,o)}/**
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
 */function xd(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Od(...n){const e=xd();if(e!==void 0){const t=new e;for(let s=0;s<n.length;s++)t.append(n[s]);return t.getBlob()}else{if(zs())return new Blob(n);throw new G(z.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function Pd(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
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
 */function Md(n){if(typeof atob>"u")throw yd("base-64");return atob(n)}/**
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
 */const pe={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Pn{constructor(e,t){this.data=e,this.contentType=t||null}}function Ld(n,e){switch(n){case pe.RAW:return new Pn(Qo(e));case pe.BASE64:case pe.BASE64URL:return new Pn(Xo(n,e));case pe.DATA_URL:return new Pn(Ud(e),Bd(e))}throw qs()}function Qo(n){const e=[];for(let t=0;t<n.length;t++){let s=n.charCodeAt(t);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const r=s,o=n.charCodeAt(++t);s=65536|(r&1023)<<10|o&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function Fd(n){let e;try{e=decodeURIComponent(n)}catch{throw wt(pe.DATA_URL,"Malformed data URL.")}return Qo(e)}function Xo(n,e){switch(n){case pe.BASE64:{const i=e.indexOf("-")!==-1,r=e.indexOf("_")!==-1;if(i||r)throw wt(n,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case pe.BASE64URL:{const i=e.indexOf("+")!==-1,r=e.indexOf("/")!==-1;if(i||r)throw wt(n,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=Md(e)}catch(i){throw i.message.includes("polyfill")?i:wt(n,"Invalid character found")}const s=new Uint8Array(t.length);for(let i=0;i<t.length;i++)s[i]=t.charCodeAt(i);return s}class Jo{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw wt(pe.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=t[1]||null;s!=null&&(this.base64=Wd(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=e.substring(e.indexOf(",")+1)}}function Ud(n){const e=new Jo(n);return e.base64?Xo(pe.BASE64,e.rest):Fd(e.rest)}function Bd(n){return new Jo(n).contentType}function Wd(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
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
 */class we{constructor(e,t){let s=0,i="";ji(e)?(this.data_=e,s=e.size,i=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,t){if(ji(this.data_)){const s=this.data_,i=Pd(s,e,t);return i===null?null:new we(i)}else{const s=new Uint8Array(this.data_.buffer,e,t-e);return new we(s,!0)}}static getBlob(...e){if(zs()){const t=e.map(s=>s instanceof we?s.data_:s);return new we(Od.apply(null,t))}else{const t=e.map(o=>js(o)?Ld(pe.RAW,o).data:o.data_);let s=0;t.forEach(o=>{s+=o.byteLength});const i=new Uint8Array(s);let r=0;return t.forEach(o=>{for(let a=0;a<o.length;a++)i[r++]=o[a]}),new we(i,!0)}}uploadData(){return this.data_}}/**
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
 */function Zo(n){let e;try{e=JSON.parse(n)}catch{return null}return Td(e)?e:null}/**
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
 */function Hd(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function $d(n,e){const t=e.split("/").filter(s=>s.length>0).join("/");return n.length===0?t:n+"/"+t}function ea(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
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
 */function Vd(n,e){return e}class ne{constructor(e,t,s,i){this.server=e,this.local=t||e,this.writable=!!s,this.xform=i||Vd}}let jt=null;function qd(n){return!js(n)||n.length<2?n:ea(n)}function ta(){if(jt)return jt;const n=[];n.push(new ne("bucket")),n.push(new ne("generation")),n.push(new ne("metageneration")),n.push(new ne("name","fullPath",!0));function e(r,o){return qd(o)}const t=new ne("name");t.xform=e,n.push(t);function s(r,o){return o!==void 0?Number(o):o}const i=new ne("size");return i.xform=s,n.push(i),n.push(new ne("timeCreated")),n.push(new ne("updated")),n.push(new ne("md5Hash",null,!0)),n.push(new ne("cacheControl",null,!0)),n.push(new ne("contentDisposition",null,!0)),n.push(new ne("contentEncoding",null,!0)),n.push(new ne("contentLanguage",null,!0)),n.push(new ne("contentType",null,!0)),n.push(new ne("metadata","customMetadata",!0)),jt=n,jt}function jd(n,e){function t(){const s=n.bucket,i=n.fullPath,r=new ae(s,i);return e._makeStorageReference(r)}Object.defineProperty(n,"ref",{get:t})}function zd(n,e,t){const s={};s.type="file";const i=t.length;for(let r=0;r<i;r++){const o=t[r];s[o.local]=o.xform(s,e[o.server])}return jd(s,n),s}function na(n,e,t){const s=Zo(e);return s===null?null:zd(n,s,t)}function Gd(n,e,t,s){const i=Zo(e);if(i===null||!js(i.downloadTokens))return null;const r=i.downloadTokens;if(r.length===0)return null;const o=encodeURIComponent;return r.split(",").map(c=>{const h=n.bucket,u=n.fullPath,d="/b/"+o(h)+"/o/"+o(u),f=Gs(d,t,s),p=Yo({alt:"media",token:c});return f+p})[0]}function Kd(n,e){const t={},s=e.length;for(let i=0;i<s;i++){const r=e[i];r.writable&&(t[r.server]=n[r.local])}return JSON.stringify(t)}class sa{constructor(e,t,s,i){this.url=e,this.method=t,this.handler=s,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function ia(n){if(!n)throw qs()}function Yd(n,e){function t(s,i){const r=na(n,i,e);return ia(r!==null),r}return t}function Qd(n,e){function t(s,i){const r=na(n,i,e);return ia(r!==null),Gd(r,i,n.host,n._protocol)}return t}function ra(n){function e(t,s){let i;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?i=cd():i=ld():t.getStatus()===402?i=ad(n.bucket):t.getStatus()===403?i=ud(n.path):i=s,i.status=t.getStatus(),i.serverResponse=s.serverResponse,i}return e}function Xd(n){const e=ra(n);function t(s,i){let r=e(s,i);return s.getStatus()===404&&(r=od(n.path)),r.serverResponse=i.serverResponse,r}return t}function Jd(n,e,t){const s=e.fullServerUrl(),i=Gs(s,n.host,n._protocol),r="GET",o=n.maxOperationRetryTime,a=new sa(i,r,Qd(n,t),o);return a.errorHandler=Xd(e),a}function Zd(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function ef(n,e,t){const s=Object.assign({},t);return s.fullPath=n.path,s.size=e.size(),s.contentType||(s.contentType=Zd(null,e)),s}function tf(n,e,t,s,i){const r=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let S="";for(let x=0;x<2;x++)S=S+Math.random().toString().slice(2);return S}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const c=ef(e,s,i),h=Kd(c,t),u="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+h+`\r
--`+l+`\r
Content-Type: `+c.contentType+`\r
\r
`,d=`\r
--`+l+"--",f=we.getBlob(u,s,d);if(f===null)throw md();const p={name:c.fullPath},g=Gs(r,n.host,n._protocol),y="POST",k=n.maxUploadRetryTime,H=new sa(g,y,Yd(n,t),k);return H.urlParams=p,H.headers=o,H.body=f.uploadData(),H.errorHandler=ra(e),H}class nf{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=He.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=He.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=He.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,s,i){if(this.sent_)throw yt("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),i!==void 0)for(const r in i)i.hasOwnProperty(r)&&this.xhr_.setRequestHeader(r,i[r].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw yt("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw yt("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw yt("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw yt("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class sf extends nf{initXhr(){this.xhr_.responseType="text"}}function oa(){return new sf}/**
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
 */class Ge{constructor(e,t){this._service=e,t instanceof ae?this._location=t:this._location=ae.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Ge(e,t)}get root(){const e=new ae(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return ea(this._location.path)}get storage(){return this._service}get parent(){const e=Hd(this._location.path);if(e===null)return null;const t=new ae(this._location.bucket,e);return new Ge(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw Ed(e)}}function rf(n,e,t){n._throwIfRoot("uploadBytes");const s=tf(n.storage,n._location,ta(),new we(e,!0),t);return n.storage.makeRequestWithTokens(s,oa).then(i=>({metadata:i,ref:n}))}function of(n){n._throwIfRoot("getDownloadURL");const e=Jd(n.storage,n._location,ta());return n.storage.makeRequestWithTokens(e,oa).then(t=>{if(t===null)throw gd();return t})}function af(n,e){const t=$d(n._location.path,e),s=new ae(n._location.bucket,t);return new Ge(n.storage,s)}/**
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
 */function lf(n){return/^[A-Za-z]+:\/\//.test(n)}function cf(n,e){return new Ge(n,e)}function aa(n,e){if(n instanceof Ks){const t=n;if(t._bucket==null)throw pd();const s=new Ge(t,t._bucket);return e!=null?aa(s,e):s}else return e!==void 0?af(n,e):n}function uf(n,e){if(e&&lf(e)){if(n instanceof Ks)return cf(n,e);throw us("To use ref(service, url), the first argument must be a Storage instance.")}else return aa(n,e)}function Gi(n,e){const t=e==null?void 0:e[Go];return t==null?null:ae.makeFromBucketSpec(t,n)}function hf(n,e,t,s={}){n.host=`${e}:${t}`,n._protocol="http";const{mockUserToken:i}=s;i&&(n._overrideAuthToken=typeof i=="string"?i:_r(i,n.app.options.projectId))}class Ks{constructor(e,t,s,i,r){this.app=e,this._authProvider=t,this._appCheckProvider=s,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=zo,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=id,this._maxUploadRetryTime=rd,this._requests=new Set,i!=null?this._bucket=ae.makeFromBucketSpec(i,this._host):this._bucket=Gi(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=ae.makeFromBucketSpec(this._url,e):this._bucket=Gi(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){zi("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){zi("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ge(this,e)}_makeRequest(e,t,s,i,r=!0){if(this._deleted)return new vd(Ko());{const o=kd(e,this._appId,s,i,t,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,t){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,s,i).getPromise()}}const Ki="@firebase/storage",Yi="0.12.4";/**
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
 */const la="storage";function df(n,e,t){return n=De(n),rf(n,e,t)}function ff(n){return n=De(n),of(n)}function _f(n,e){return n=De(n),uf(n,e)}function ca(n=Sr(),e){n=De(n);const s=wr(n,la).getImmediate({identifier:e}),i=dr("storage");return i&&pf(s,...i),s}function pf(n,e,t,s={}){hf(n,e,t,s)}function mf(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),s=n.getProvider("auth-internal"),i=n.getProvider("app-check-internal");return new Ks(t,s,i,e,Tr)}function gf(){It(new rt(la,mf,"PUBLIC").setMultipleInstances(!0)),Se(Ki,Yi,""),Se(Ki,Yi,"esm2017")}gf();const yf={apiKey:"AIzaSyD1bUd4QHmDnXtuA1SZgvxiaRcmuEVLpWo",authDomain:"instagram-imitation-180e8.firebaseapp.com",databaseURL:"https://instagram-imitation-180e8-default-rtdb.firebaseio.com",projectId:"instagram-imitation-180e8",storageBucket:"instagram-imitation-180e8.appspot.com",messagingSenderId:"266282768545",appId:"1:266282768545:web:07dbf92d25e2a93b3078e0"},Ys=Ir(yf),c_=td(Ys);ca(Ys);const Ef="/Instagram-Imitation/assets/Instagram_logo_light-WGj1KLTg.png";var ua={exports:{}},zt={exports:{}};/*!
  * Bootstrap index.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var Qi;function ke(){return Qi||(Qi=1,function(n,e){(function(t,s){s(e)})(ce,function(t){const r="transitionend",o=_=>_==null?`${_}`:Object.prototype.toString.call(_).match(/\s([a-z]+)/i)[1].toLowerCase(),a=_=>{do _+=Math.floor(Math.random()*1e6);while(document.getElementById(_));return _},l=_=>{let b=_.getAttribute("data-bs-target");if(!b||b==="#"){let w=_.getAttribute("href");if(!w||!w.includes("#")&&!w.startsWith("."))return null;w.includes("#")&&!w.startsWith("#")&&(w=`#${w.split("#")[1]}`),b=w&&w!=="#"?w.trim():null}return b},c=_=>{const b=l(_);return b&&document.querySelector(b)?b:null},h=_=>{const b=l(_);return b?document.querySelector(b):null},u=_=>{if(!_)return 0;let{transitionDuration:b,transitionDelay:w}=window.getComputedStyle(_);const q=Number.parseFloat(b),V=Number.parseFloat(w);return!q&&!V?0:(b=b.split(",")[0],w=w.split(",")[0],(Number.parseFloat(b)+Number.parseFloat(w))*1e3)},d=_=>{_.dispatchEvent(new Event(r))},f=_=>!_||typeof _!="object"?!1:(typeof _.jquery<"u"&&(_=_[0]),typeof _.nodeType<"u"),p=_=>f(_)?_.jquery?_[0]:_:typeof _=="string"&&_.length>0?document.querySelector(_):null,g=_=>{if(!f(_)||_.getClientRects().length===0)return!1;const b=getComputedStyle(_).getPropertyValue("visibility")==="visible",w=_.closest("details:not([open])");if(!w)return b;if(w!==_){const q=_.closest("summary");if(q&&q.parentNode!==w||q===null)return!1}return b},y=_=>!_||_.nodeType!==Node.ELEMENT_NODE||_.classList.contains("disabled")?!0:typeof _.disabled<"u"?_.disabled:_.hasAttribute("disabled")&&_.getAttribute("disabled")!=="false",k=_=>{if(!document.documentElement.attachShadow)return null;if(typeof _.getRootNode=="function"){const b=_.getRootNode();return b instanceof ShadowRoot?b:null}return _ instanceof ShadowRoot?_:_.parentNode?k(_.parentNode):null},H=()=>{},S=_=>{_.offsetHeight},x=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,M=[],E=_=>{document.readyState==="loading"?(M.length||document.addEventListener("DOMContentLoaded",()=>{for(const b of M)b()}),M.push(_)):_()},v=()=>document.documentElement.dir==="rtl",T=_=>{E(()=>{const b=x();if(b){const w=_.NAME,q=b.fn[w];b.fn[w]=_.jQueryInterface,b.fn[w].Constructor=_,b.fn[w].noConflict=()=>(b.fn[w]=q,_.jQueryInterface)}})},R=_=>{typeof _=="function"&&_()},$=(_,b,w=!0)=>{if(!w){R(_);return}const V=u(b)+5;let Y=!1;const se=({target:me})=>{me===b&&(Y=!0,b.removeEventListener(r,se),R(_))};b.addEventListener(r,se),setTimeout(()=>{Y||d(b)},V)},F=(_,b,w,q)=>{const V=_.length;let Y=_.indexOf(b);return Y===-1?!w&&q?_[V-1]:_[0]:(Y+=w?1:-1,q&&(Y=(Y+V)%V),_[Math.max(0,Math.min(Y,V-1))])};t.defineJQueryPlugin=T,t.execute=R,t.executeAfterTransition=$,t.findShadowRoot=k,t.getElement=p,t.getElementFromSelector=h,t.getNextActiveElement=F,t.getSelectorFromElement=c,t.getTransitionDurationFromElement=u,t.getUID=a,t.getjQuery=x,t.isDisabled=y,t.isElement=f,t.isRTL=v,t.isVisible=g,t.noop=H,t.onDOMContentLoaded=E,t.reflow=S,t.toType=o,t.triggerTransitionEnd=d,Object.defineProperties(t,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})})}(zt,zt.exports)),zt.exports}var Mn={exports:{}};/*!
  * Bootstrap event-handler.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var Xi;function Wt(){return Xi||(Xi=1,function(n,e){(function(t,s){n.exports=s(ke())})(ce,function(t){const s=/[^.]*(?=\..*)\.|.*/,i=/\..*/,r=/::\d+$/,o={};let a=1;const l={mouseenter:"mouseover",mouseleave:"mouseout"},c=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function h(E,v){return v&&`${v}::${a++}`||E.uidEvent||a++}function u(E){const v=h(E);return E.uidEvent=v,o[v]=o[v]||{},o[v]}function d(E,v){return function T(R){return M(R,{delegateTarget:E}),T.oneOff&&x.off(E,R.type,v),v.apply(E,[R])}}function f(E,v,T){return function R($){const F=E.querySelectorAll(v);for(let{target:_}=$;_&&_!==this;_=_.parentNode)for(const b of F)if(b===_)return M($,{delegateTarget:_}),R.oneOff&&x.off(E,$.type,v,T),T.apply(_,[$])}}function p(E,v,T=null){return Object.values(E).find(R=>R.callable===v&&R.delegationSelector===T)}function g(E,v,T){const R=typeof v=="string",$=R?T:v||T;let F=S(E);return c.has(F)||(F=E),[R,$,F]}function y(E,v,T,R,$){if(typeof v!="string"||!E)return;let[F,_,b]=g(v,T,R);v in l&&(_=(En=>function(Ce){if(!Ce.relatedTarget||Ce.relatedTarget!==Ce.delegateTarget&&!Ce.delegateTarget.contains(Ce.relatedTarget))return En.call(this,Ce)})(_));const w=u(E),q=w[b]||(w[b]={}),V=p(q,_,F?T:null);if(V){V.oneOff=V.oneOff&&$;return}const Y=h(_,v.replace(s,"")),se=F?f(E,T,_):d(E,_);se.delegationSelector=F?T:null,se.callable=_,se.oneOff=$,se.uidEvent=Y,q[Y]=se,E.addEventListener(b,se,F)}function k(E,v,T,R,$){const F=p(v[T],R,$);F&&(E.removeEventListener(T,F,!!$),delete v[T][F.uidEvent])}function H(E,v,T,R){const $=v[T]||{};for(const F of Object.keys($))if(F.includes(R)){const _=$[F];k(E,v,T,_.callable,_.delegationSelector)}}function S(E){return E=E.replace(i,""),l[E]||E}const x={on(E,v,T,R){y(E,v,T,R,!1)},one(E,v,T,R){y(E,v,T,R,!0)},off(E,v,T,R){if(typeof v!="string"||!E)return;const[$,F,_]=g(v,T,R),b=_!==v,w=u(E),q=w[_]||{},V=v.startsWith(".");if(typeof F<"u"){if(!Object.keys(q).length)return;k(E,w,_,F,$?T:null);return}if(V)for(const Y of Object.keys(w))H(E,w,Y,v.slice(1));for(const Y of Object.keys(q)){const se=Y.replace(r,"");if(!b||v.includes(se)){const me=q[Y];k(E,w,_,me.callable,me.delegationSelector)}}},trigger(E,v,T){if(typeof v!="string"||!E)return null;const R=t.getjQuery(),$=S(v),F=v!==$;let _=null,b=!0,w=!0,q=!1;F&&R&&(_=R.Event(v,T),R(E).trigger(_),b=!_.isPropagationStopped(),w=!_.isImmediatePropagationStopped(),q=_.isDefaultPrevented());let V=new Event(v,{bubbles:b,cancelable:!0});return V=M(V,T),q&&V.preventDefault(),w&&E.dispatchEvent(V),V.defaultPrevented&&_&&_.preventDefault(),V}};function M(E,v){for(const[T,R]of Object.entries(v||{}))try{E[T]=R}catch{Object.defineProperty(E,T,{configurable:!0,get(){return R}})}return E}return x})}(Mn)),Mn.exports}var Ln={exports:{}};/*!
  * Bootstrap selector-engine.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var Ji;function Qs(){return Ji||(Ji=1,function(n,e){(function(t,s){n.exports=s(ke())})(ce,function(t){return{find(i,r=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(r,i))},findOne(i,r=document.documentElement){return Element.prototype.querySelector.call(r,i)},children(i,r){return[].concat(...i.children).filter(o=>o.matches(r))},parents(i,r){const o=[];let a=i.parentNode.closest(r);for(;a;)o.push(a),a=a.parentNode.closest(r);return o},prev(i,r){let o=i.previousElementSibling;for(;o;){if(o.matches(r))return[o];o=o.previousElementSibling}return[]},next(i,r){let o=i.nextElementSibling;for(;o;){if(o.matches(r))return[o];o=o.nextElementSibling}return[]},focusableChildren(i){const r=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(o=>`${o}:not([tabindex^="-"])`).join(",");return this.find(r,i).filter(o=>!t.isDisabled(o)&&t.isVisible(o))}}})}(Ln)),Ln.exports}var Fn={exports:{}},Un={exports:{}};/*!
  * Bootstrap manipulator.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var Zi;function ha(){return Zi||(Zi=1,function(n,e){(function(t,s){n.exports=s()})(ce,function(){function t(r){if(r==="true")return!0;if(r==="false")return!1;if(r===Number(r).toString())return Number(r);if(r===""||r==="null")return null;if(typeof r!="string")return r;try{return JSON.parse(decodeURIComponent(r))}catch{return r}}function s(r){return r.replace(/[A-Z]/g,o=>`-${o.toLowerCase()}`)}return{setDataAttribute(r,o,a){r.setAttribute(`data-bs-${s(o)}`,a)},removeDataAttribute(r,o){r.removeAttribute(`data-bs-${s(o)}`)},getDataAttributes(r){if(!r)return{};const o={},a=Object.keys(r.dataset).filter(l=>l.startsWith("bs")&&!l.startsWith("bsConfig"));for(const l of a){let c=l.replace(/^bs/,"");c=c.charAt(0).toLowerCase()+c.slice(1,c.length),o[c]=t(r.dataset[l])}return o},getDataAttribute(r,o){return t(r.getAttribute(`data-bs-${s(o)}`))}}})}(Un)),Un.exports}/*!
  * Bootstrap scrollbar.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var er;function vf(){return er||(er=1,function(n,e){(function(t,s){n.exports=s(Qs(),ha(),ke())})(ce,function(t,s,i){const r=f=>f&&typeof f=="object"&&"default"in f?f:{default:f},o=r(t),a=r(s),l=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",c=".sticky-top",h="padding-right",u="margin-right";class d{constructor(){this._element=document.body}getWidth(){const p=document.documentElement.clientWidth;return Math.abs(window.innerWidth-p)}hide(){const p=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,h,g=>g+p),this._setElementAttributes(l,h,g=>g+p),this._setElementAttributes(c,u,g=>g-p)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,h),this._resetElementAttributes(l,h),this._resetElementAttributes(c,u)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(p,g,y){const k=this.getWidth(),H=S=>{if(S!==this._element&&window.innerWidth>S.clientWidth+k)return;this._saveInitialAttribute(S,g);const x=window.getComputedStyle(S).getPropertyValue(g);S.style.setProperty(g,`${y(Number.parseFloat(x))}px`)};this._applyManipulationCallback(p,H)}_saveInitialAttribute(p,g){const y=p.style.getPropertyValue(g);y&&a.default.setDataAttribute(p,g,y)}_resetElementAttributes(p,g){const y=k=>{const H=a.default.getDataAttribute(k,g);if(H===null){k.style.removeProperty(g);return}a.default.removeDataAttribute(k,g),k.style.setProperty(g,H)};this._applyManipulationCallback(p,y)}_applyManipulationCallback(p,g){if(i.isElement(p)){g(p);return}for(const y of o.default.find(p,this._element))g(y)}}return d})}(Fn)),Fn.exports}var Bn={exports:{}},Wn={exports:{}};/*!
  * Bootstrap data.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var tr;function bf(){return tr||(tr=1,function(n,e){(function(t,s){n.exports=s()})(ce,function(){const t=new Map;return{set(i,r,o){t.has(i)||t.set(i,new Map);const a=t.get(i);if(!a.has(r)&&a.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(a.keys())[0]}.`);return}a.set(r,o)},get(i,r){return t.has(i)&&t.get(i).get(r)||null},remove(i,r){if(!t.has(i))return;const o=t.get(i);o.delete(r),o.size===0&&t.delete(i)}}})}(Wn)),Wn.exports}var Hn={exports:{}};/*!
  * Bootstrap config.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var nr;function Xs(){return nr||(nr=1,function(n,e){(function(t,s){n.exports=s(ke(),ha())})(ce,function(t,s){const r=(a=>a&&typeof a=="object"&&"default"in a?a:{default:a})(s);class o{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(l){return l=this._mergeConfigObj(l),l=this._configAfterMerge(l),this._typeCheckConfig(l),l}_configAfterMerge(l){return l}_mergeConfigObj(l,c){const h=t.isElement(c)?r.default.getDataAttribute(c,"config"):{};return{...this.constructor.Default,...typeof h=="object"?h:{},...t.isElement(c)?r.default.getDataAttributes(c):{},...typeof l=="object"?l:{}}}_typeCheckConfig(l,c=this.constructor.DefaultType){for(const h of Object.keys(c)){const u=c[h],d=l[h],f=t.isElement(d)?"element":t.toType(d);if(!new RegExp(u).test(f))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${h}" provided type "${f}" but expected type "${u}".`)}}}return o})}(Hn)),Hn.exports}/*!
  * Bootstrap base-component.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var sr;function Cf(){return sr||(sr=1,function(n,e){(function(t,s){n.exports=s(bf(),ke(),Wt(),Xs())})(ce,function(t,s,i,r){const o=d=>d&&typeof d=="object"&&"default"in d?d:{default:d},a=o(t),l=o(i),c=o(r),h="5.2.3";class u extends c.default{constructor(f,p){super(),f=s.getElement(f),f&&(this._element=f,this._config=this._getConfig(p),a.default.set(this._element,this.constructor.DATA_KEY,this))}dispose(){a.default.remove(this._element,this.constructor.DATA_KEY),l.default.off(this._element,this.constructor.EVENT_KEY);for(const f of Object.getOwnPropertyNames(this))this[f]=null}_queueCallback(f,p,g=!0){s.executeAfterTransition(f,p,g)}_getConfig(f){return f=this._mergeConfigObj(f,this._element),f=this._configAfterMerge(f),this._typeCheckConfig(f),f}static getInstance(f){return a.default.get(s.getElement(f),this.DATA_KEY)}static getOrCreateInstance(f,p={}){return this.getInstance(f)||new this(f,typeof p=="object"?p:null)}static get VERSION(){return h}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(f){return`${f}${this.EVENT_KEY}`}}return u})}(Bn)),Bn.exports}var $n={exports:{}};/*!
  * Bootstrap backdrop.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var ir;function wf(){return ir||(ir=1,function(n,e){(function(t,s){n.exports=s(Wt(),ke(),Xs())})(ce,function(t,s,i){const r=g=>g&&typeof g=="object"&&"default"in g?g:{default:g},o=r(t),a=r(i),l="backdrop",c="fade",h="show",u=`mousedown.bs.${l}`,d={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},f={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class p extends a.default{constructor(y){super(),this._config=this._getConfig(y),this._isAppended=!1,this._element=null}static get Default(){return d}static get DefaultType(){return f}static get NAME(){return l}show(y){if(!this._config.isVisible){s.execute(y);return}this._append();const k=this._getElement();this._config.isAnimated&&s.reflow(k),k.classList.add(h),this._emulateAnimation(()=>{s.execute(y)})}hide(y){if(!this._config.isVisible){s.execute(y);return}this._getElement().classList.remove(h),this._emulateAnimation(()=>{this.dispose(),s.execute(y)})}dispose(){this._isAppended&&(o.default.off(this._element,u),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const y=document.createElement("div");y.className=this._config.className,this._config.isAnimated&&y.classList.add(c),this._element=y}return this._element}_configAfterMerge(y){return y.rootElement=s.getElement(y.rootElement),y}_append(){if(this._isAppended)return;const y=this._getElement();this._config.rootElement.append(y),o.default.on(y,u,()=>{s.execute(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(y){s.executeAfterTransition(y,this._getElement(),this._config.isAnimated)}}return p})}($n)),$n.exports}var Vn={exports:{}};/*!
  * Bootstrap focustrap.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var rr;function Tf(){return rr||(rr=1,function(n,e){(function(t,s){n.exports=s(Wt(),Qs(),Xs())})(ce,function(t,s,i){const r=x=>x&&typeof x=="object"&&"default"in x?x:{default:x},o=r(t),a=r(s),l=r(i),c="focustrap",u=".bs.focustrap",d=`focusin${u}`,f=`keydown.tab${u}`,p="Tab",g="forward",y="backward",k={autofocus:!0,trapElement:null},H={autofocus:"boolean",trapElement:"element"};class S extends l.default{constructor(M){super(),this._config=this._getConfig(M),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return k}static get DefaultType(){return H}static get NAME(){return c}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),o.default.off(document,u),o.default.on(document,d,M=>this._handleFocusin(M)),o.default.on(document,f,M=>this._handleKeydown(M)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,o.default.off(document,u))}_handleFocusin(M){const{trapElement:E}=this._config;if(M.target===document||M.target===E||E.contains(M.target))return;const v=a.default.focusableChildren(E);v.length===0?E.focus():this._lastTabNavDirection===y?v[v.length-1].focus():v[0].focus()}_handleKeydown(M){M.key===p&&(this._lastTabNavDirection=M.shiftKey?y:g)}}return S})}(Vn)),Vn.exports}var Gt={exports:{}};/*!
  * Bootstrap component-functions.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var or;function If(){return or||(or=1,function(n,e){(function(t,s){s(e,Wt(),ke())})(ce,function(t,s,i){const o=(l=>l&&typeof l=="object"&&"default"in l?l:{default:l})(s),a=(l,c="hide")=>{const h=`click.dismiss${l.EVENT_KEY}`,u=l.NAME;o.default.on(document,h,`[data-bs-dismiss="${u}"]`,function(d){if(["A","AREA"].includes(this.tagName)&&d.preventDefault(),i.isDisabled(this))return;const f=i.getElementFromSelector(this)||this.closest(`.${u}`);l.getOrCreateInstance(f)[c]()})};t.enableDismissTrigger=a,Object.defineProperties(t,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})})}(Gt,Gt.exports)),Gt.exports}/*!
  * Bootstrap modal.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */(function(n,e){(function(t,s){n.exports=s(ke(),Wt(),Qs(),vf(),Cf(),wf(),Tf(),If())})(ce,function(t,s,i,r,o,a,l,c){const h=Oe=>Oe&&typeof Oe=="object"&&"default"in Oe?Oe:{default:Oe},u=h(s),d=h(i),f=h(r),p=h(o),g=h(a),y=h(l),k="modal",S=".bs.modal",x=".data-api",M="Escape",E=`hide${S}`,v=`hidePrevented${S}`,T=`hidden${S}`,R=`show${S}`,$=`shown${S}`,F=`resize${S}`,_=`click.dismiss${S}`,b=`mousedown.dismiss${S}`,w=`keydown.dismiss${S}`,q=`click${S}${x}`,V="modal-open",Y="fade",se="show",me="modal-static",En=".modal.show",Ce=".modal-dialog",da=".modal-body",fa='[data-bs-toggle="modal"]',_a={backdrop:!0,focus:!0,keyboard:!0},pa={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class xe extends p.default{constructor(P,Q){super(P,Q),this._dialog=d.default.findOne(Ce,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new f.default,this._addEventListeners()}static get Default(){return _a}static get DefaultType(){return pa}static get NAME(){return k}toggle(P){return this._isShown?this.hide():this.show(P)}show(P){this._isShown||this._isTransitioning||u.default.trigger(this._element,R,{relatedTarget:P}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(V),this._adjustDialog(),this._backdrop.show(()=>this._showElement(P)))}hide(){!this._isShown||this._isTransitioning||u.default.trigger(this._element,E).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(se),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){for(const P of[window,this._dialog])u.default.off(P,S);this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new g.default({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new y.default({trapElement:this._element})}_showElement(P){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const Q=d.default.findOne(da,this._dialog);Q&&(Q.scrollTop=0),t.reflow(this._element),this._element.classList.add(se);const ue=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,u.default.trigger(this._element,$,{relatedTarget:P})};this._queueCallback(ue,this._dialog,this._isAnimated())}_addEventListeners(){u.default.on(this._element,w,P=>{if(P.key===M){if(this._config.keyboard){P.preventDefault(),this.hide();return}this._triggerBackdropTransition()}}),u.default.on(window,F,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),u.default.on(this._element,b,P=>{u.default.one(this._element,_,Q=>{if(!(this._element!==P.target||this._element!==Q.target)){if(this._config.backdrop==="static"){this._triggerBackdropTransition();return}this._config.backdrop&&this.hide()}})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(V),this._resetAdjustments(),this._scrollBar.reset(),u.default.trigger(this._element,T)})}_isAnimated(){return this._element.classList.contains(Y)}_triggerBackdropTransition(){if(u.default.trigger(this._element,v).defaultPrevented)return;const Q=this._element.scrollHeight>document.documentElement.clientHeight,ue=this._element.style.overflowY;ue==="hidden"||this._element.classList.contains(me)||(Q||(this._element.style.overflowY="hidden"),this._element.classList.add(me),this._queueCallback(()=>{this._element.classList.remove(me),this._queueCallback(()=>{this._element.style.overflowY=ue},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const P=this._element.scrollHeight>document.documentElement.clientHeight,Q=this._scrollBar.getWidth(),ue=Q>0;if(ue&&!P){const ft=t.isRTL()?"paddingLeft":"paddingRight";this._element.style[ft]=`${Q}px`}if(!ue&&P){const ft=t.isRTL()?"paddingRight":"paddingLeft";this._element.style[ft]=`${Q}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(P,Q){return this.each(function(){const ue=xe.getOrCreateInstance(this,P);if(typeof P=="string"){if(typeof ue[P]>"u")throw new TypeError(`No method named "${P}"`);ue[P](Q)}})}}return u.default.on(document,q,fa,function(Oe){const P=t.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&Oe.preventDefault(),u.default.one(P,R,ft=>{ft.defaultPrevented||u.default.one(P,T,()=>{t.isVisible(this)&&this.focus()})});const Q=d.default.findOne(En);Q&&xe.getInstance(Q).hide(),xe.getOrCreateInstance(P).toggle(this)}),c.enableDismissTrigger(xe),t.defineJQueryPlugin(xe),xe})})(ua);var Sf=ua.exports;const Nf=ma(Sf),Qe=n=>(Ea("data-v-bf626095"),n=n(),va(),n),Rf=Qe(()=>I("button",{type:"button",class:"btn-close btn-close-white position-absolute top-0 end-0 m-3","data-bs-dismiss":"modal","aria-label":"Close"},null,-1)),Af={class:"modal-content my-5"},Df={class:"modal-header d-flex justify-content-center"},kf={key:0,class:"btn position-absolute start-0 mx-3 text-primary"},xf=Qe(()=>I("h5",{class:"modal-title",id:"exampleModalLabel"},"建立新貼文",-1)),Of={class:"d-flex"},Pf={key:0,class:"modal-body d-flex flex-column align-items-center p-5"},Mf={class:"d-flex flex-column align-items-center"},Lf=Qe(()=>I("i",{class:"bi bi-image pic-icon"},null,-1)),Ff=Qe(()=>I("div",null,"將相片和影片拖曳到這裡",-1)),Uf=Qe(()=>I("label",{for:"file-input",class:"file-input-button btn btn-primary m-3"},"從電腦選擇",-1)),Bf={key:1,class:"modal-body d-flex flex-column align-items-center input-img-area p-0"},Wf=["src"],Hf={key:2,class:"border-start p-2"},$f=Qe(()=>I("div",{class:"d-flex align-self-center align-middle"},[I("div",{class:"rounded-circle user-pic"}),I("p",{class:"align-middle my-auto ms-2 fw-bold"},"shelly")],-1)),Vf=Qe(()=>I("textarea",{type:"text",placeholder:"撰寫說明文字......",class:"postDescriptionInput py-2"},null,-1)),qf=[$f,Vf],jf={__name:"addNewModalComponent",setup(n,{expose:e}){const t=Pe(null),s=Pe(null);e({showModal:function(){t.value.show(),r.value="",c.value=!1,l.value.style.maxWidth="750px"}}),ya(()=>{t.value=new Nf(s.value)});const r=Pe(null),o=Pe(null),a=function(d){let f=d.target;if(o.value=d.target.files[0],console.log(o.value),f.files){let p=new FileReader;p.onload=g=>{r.value=g.target.result},this.image=f.files[0],p.readAsDataURL(f.files[0])}},l=Pe(null),c=Pe(!1),h=function(){l.value.style.maxWidth="1000px",c.value=!0,u()},u=async()=>{const d=o.value;if(!d){console.error("No file selected.");return}const f=ca(Ys),p=_f(f,"images/"+d.name);try{await df(p,d);const g=await ff(p);console.log("Image uploaded successfully!"),console.log("Image URL:",g)}catch(g){console.error("Error uploading image:",g)}};return(d,f)=>(Me(),Le("div",{class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref_key:"addNewModal",ref:s},[Rf,I("div",{class:"modal-dialog",ref_key:"modalDialog",ref:l},[I("div",Af,[I("div",Df,[r.value?(Me(),Le("button",kf," 上一步 ")):vn("",!0),xf,r.value?(Me(),Le("button",{key:1,class:"btn position-absolute end-0 mx-3 text-primary",onClick:h}," 下一步 ")):vn("",!0)]),I("div",Of,[r.value?(Me(),Le("div",Bf,[I("img",{src:r.value,alt:"",class:"input-img"},null,8,Wf)])):(Me(),Le("div",Pf,[I("div",Mf,[Lf,Ff,Uf,I("input",{type:"file",id:"file-input",accept:"audio/*,video/*,image/*",onChange:f[0]||(f[0]=p=>a(p))},null,32)])])),c.value?(Me(),Le("div",Hf,qf)):vn("",!0)])])],512)],512))}},zf=ga(jf,[["__scopeId","data-v-bf626095"]]),Gf={class:"col-md-1 col-lg-2 nav-all p-md-3 overflow-hidden position-relative"},Kf=I("div",{class:"w-100 position-relative"},[I("div",{class:"navbar navbar-light header-nav"},[I("img",{src:Ef,alt:"",class:"logo d-md-none d-lg-block d-sm-block"}),I("svg",{"aria-label":"Instagram",class:"d-none d-lg-none d-md-block logo",fill:"currentColor",height:"24",role:"img",viewBox:"0 0 24 24",width:"24"},[I("title",null,"Instagram"),I("path",{d:"M12 2.982c2.937 0 3.285.011 4.445.064a6.087 6.087 0 0 1 2.042.379 3.408 3.408 0 0 1 1.265.823 3.408 3.408 0 0 1 .823 1.265 6.087 6.087 0 0 1 .379 2.042c.053 1.16.064 1.508.064 4.445s-.011 3.285-.064 4.445a6.087 6.087 0 0 1-.379 2.042 3.643 3.643 0 0 1-2.088 2.088 6.087 6.087 0 0 1-2.042.379c-1.16.053-1.508.064-4.445.064s-3.285-.011-4.445-.064a6.087 6.087 0 0 1-2.043-.379 3.408 3.408 0 0 1-1.264-.823 3.408 3.408 0 0 1-.823-1.265 6.087 6.087 0 0 1-.379-2.042c-.053-1.16-.064-1.508-.064-4.445s.011-3.285.064-4.445a6.087 6.087 0 0 1 .379-2.042 3.408 3.408 0 0 1 .823-1.265 3.408 3.408 0 0 1 1.265-.823 6.087 6.087 0 0 1 2.042-.379c1.16-.053 1.508-.064 4.445-.064M12 1c-2.987 0-3.362.013-4.535.066a8.074 8.074 0 0 0-2.67.511 5.392 5.392 0 0 0-1.949 1.27 5.392 5.392 0 0 0-1.269 1.948 8.074 8.074 0 0 0-.51 2.67C1.012 8.638 1 9.013 1 12s.013 3.362.066 4.535a8.074 8.074 0 0 0 .511 2.67 5.392 5.392 0 0 0 1.27 1.949 5.392 5.392 0 0 0 1.948 1.269 8.074 8.074 0 0 0 2.67.51C8.638 22.988 9.013 23 12 23s3.362-.013 4.535-.066a8.074 8.074 0 0 0 2.67-.511 5.625 5.625 0 0 0 3.218-3.218 8.074 8.074 0 0 0 .51-2.67C22.988 15.362 23 14.987 23 12s-.013-3.362-.066-4.535a8.074 8.074 0 0 0-.511-2.67 5.392 5.392 0 0 0-1.27-1.949 5.392 5.392 0 0 0-1.948-1.269 8.074 8.074 0 0 0-2.67-.51C15.362 1.012 14.987 1 12 1Zm0 5.351A5.649 5.649 0 1 0 17.649 12 5.649 5.649 0 0 0 12 6.351Zm0 9.316A3.667 3.667 0 1 1 15.667 12 3.667 3.667 0 0 1 12 15.667Zm5.872-10.859a1.32 1.32 0 1 0 1.32 1.32 1.32 1.32 0 0 0-1.32-1.32Z"})])])],-1),Yf={class:"w-100 my-md-3"},Qf={class:"bg-body d-flex flex-md-column position-fixed nav-selection bottom-0 start-0 justify-content-evenly justify-content-md-start"},Xf={class:"nav-item rounded px-2 ms-md-3"},Jf=I("div",null,[I("i",{class:"bi bi-house-door icon-size"})],-1),Zf=I("div",null,[I("span",{class:"d-none d-lg-inline p-2"},"首頁")],-1),e_={class:"nav-item rounded px-2 ms-md-3"},t_=I("div",null,[I("i",{class:"bi bi-plus-square icon-size"})],-1),n_=I("div",null,[I("span",{class:"d-none d-lg-inline p-2"},"建立")],-1),s_={class:"nav-item rounded px-2 ms-md-3"},i_=I("div",null,[I("i",{class:"bi bi-person-circle icon-size"})],-1),r_=I("div",null,[I("span",{class:"d-none d-lg-inline p-2"},"個人檔案")],-1),u_={__name:"navComponent",setup(n){const e=Pe(null),t=function(){e.value.showModal()};return(s,i)=>{const r=ba("RouterLink");return Me(),Le(wa,null,[I("div",Gf,[Kf,I("div",Yf,[I("nav",Qf,[I("div",Xf,[Ht(r,{to:"/",class:"text-decoration-none text-secondary d-flex"},{default:bn(()=>[Jf,Zf]),_:1})]),I("div",e_,[Ht(r,{to:"/",class:"text-decoration-none text-secondary d-flex",onClick:Ca(t,["prevent"])},{default:bn(()=>[t_,n_]),_:1})]),I("div",s_,[Ht(r,{to:"/profile",class:"text-decoration-none text-secondary d-flex"},{default:bn(()=>[i_,r_]),_:1})])])])]),Ht(zf,{ref_key:"addNewModal",ref:e},null,512)],64)}}};export{Nf as M,u_ as _,c_ as d,l_ as o,a_ as r};
