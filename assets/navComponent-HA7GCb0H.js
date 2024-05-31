import{k as ue,l as xa,z as Oa,r as me,p as Pa,_ as Ma,o as La,q as Ir,a as Fe,c as Ue,b as R,g as Rn,x as pi,t as Fa,m as Ua,v as Ba,s as wt,F as Sr,B as Wa,C as Ha,D as An,h as $a}from"./index-mZCnZ0rX.js";var mi={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nr={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m=function(n,e){if(!n)throw dt(e)},dt=function(n){return new Error("Firebase Database ("+Nr.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rr=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Va=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const i=n[t++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=n[t++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=n[t++],o=n[t++],a=n[t++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=n[t++],o=n[t++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},ws={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<n.length;i+=3){const r=n[i],o=i+1<n.length,a=o?n[i+1]:0,l=i+2<n.length,c=l?n[i+2]:0,h=r>>2,u=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(d=64)),s.push(t[h],t[u],t[d],t[f])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Rr(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Va(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<n.length;){const r=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const c=i<n.length?t[n.charAt(i)]:64;++i;const u=i<n.length?t[n.charAt(i)]:64;if(++i,r==null||a==null||c==null||u==null)throw new ja;const d=r<<2|a>>4;if(s.push(d),c!==64){const f=a<<4&240|c>>2;if(s.push(f),u!==64){const p=c<<6&192|u;s.push(p)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class ja extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ar=function(n){const e=Rr(n);return ws.encodeByteArray(e,!0)},Jt=function(n){return Ar(n).replace(/\./g,"")},Jn=function(n){try{return ws.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qa(n){return Dr(void 0,n)}function Dr(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!za(t)||(n[t]=Dr(n[t],e[t]));return n}function za(n){return n!=="__proto__"}/**
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
 */function Ga(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Ka=()=>Ga().__FIREBASE_DEFAULTS__,Ya=()=>{if(typeof process>"u"||typeof mi>"u")return;const n=mi.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Qa=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Jn(n[1]);return e&&JSON.parse(e)},kr=()=>{try{return Ka()||Ya()||Qa()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Xa=n=>{var e,t;return(t=(e=kr())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},xr=n=>{const e=Xa(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Or=()=>{var n;return(n=kr())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function Pr(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",i=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Jt(JSON.stringify(t)),Jt(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ja(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Mr(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ja())}function Za(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Lr(){return Nr.NODE_ADMIN===!0}function el(){try{return typeof indexedDB=="object"}catch{return!1}}function tl(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nl="FirebaseError";class ft extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=nl,Object.setPrototypeOf(this,ft.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Fr.prototype.create)}}class Fr{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?sl(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new ft(i,a,s)}}function sl(n,e){return n.replace(il,(t,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const il=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function At(n){return JSON.parse(n)}function ee(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ur=function(n){let e={},t={},s={},i="";try{const r=n.split(".");e=At(Jn(r[0])||""),t=At(Jn(r[1])||""),i=r[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:i}},rl=function(n){const e=Ur(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},ol=function(n){const e=Ur(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ye(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function it(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function gi(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Zt(n,e,t){const s={};for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&(s[i]=e.call(t,n[i],i,n));return s}function Zn(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const i of t){if(!s.includes(i))return!1;const r=n[i],o=e[i];if(yi(r)&&yi(o)){if(!Zn(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!t.includes(i))return!1;return!0}function yi(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function al(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let u=0;u<16;u++)s[u]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let u=0;u<16;u++)s[u]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let u=16;u<80;u++){const d=s[u-3]^s[u-8]^s[u-14]^s[u-16];s[u]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,h;for(let u=0;u<80;u++){u<40?u<20?(c=a^r&(o^a),h=1518500249):(c=r^o^a,h=1859775393):u<60?(c=r&o|a&(r|o),h=2400959708):(c=r^o^a,h=3395469782);const d=(i<<5|i>>>27)+c+l+h+s[u]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<t;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<t;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function _n(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cl=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,m(s<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):i<65536?(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},pn=function(n){let e=0;for(let t=0;t<n.length;t++){const s=n.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function ve(n){return n&&n._delegate?n._delegate:n}class rt{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Be="[DEFAULT]";/**
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
 */class ul{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new Bt;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(dl(e))try{this.getOrInitializeService({instanceIdentifier:Be})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Be){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Be){return this.instances.has(e)}getOptions(e=Be){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,t){var s;const i=this.normalizeInstanceIdentifier(t),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const i of s)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:hl(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Be){return this.component?this.component.multipleInstances?e:Be:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function hl(n){return n===Be?void 0:n}function dl(n){return n.instantiationMode==="EAGER"}/**
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
 */class fl{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new ul(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var W;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(W||(W={}));const _l={debug:W.DEBUG,verbose:W.VERBOSE,info:W.INFO,warn:W.WARN,error:W.ERROR,silent:W.SILENT},pl=W.INFO,ml={[W.DEBUG]:"log",[W.VERBOSE]:"log",[W.INFO]:"info",[W.WARN]:"warn",[W.ERROR]:"error"},gl=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),i=ml[e];if(i)console[i](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Br{constructor(e){this.name=e,this._logLevel=pl,this._logHandler=gl,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in W))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?_l[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,W.DEBUG,...e),this._logHandler(this,W.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,W.VERBOSE,...e),this._logHandler(this,W.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,W.INFO,...e),this._logHandler(this,W.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,W.WARN,...e),this._logHandler(this,W.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,W.ERROR,...e),this._logHandler(this,W.ERROR,...e)}}const yl=(n,e)=>e.some(t=>n instanceof t);let vi,Ei;function vl(){return vi||(vi=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function El(){return Ei||(Ei=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Wr=new WeakMap,es=new WeakMap,Hr=new WeakMap,Dn=new WeakMap,Ts=new WeakMap;function bl(n){const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(Re(n.result)),i()},o=()=>{s(n.error),i()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Wr.set(t,n)}).catch(()=>{}),Ts.set(e,n),e}function Cl(n){if(es.has(n))return;const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),i()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});es.set(n,e)}let ts={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return es.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Hr.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Re(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function wl(n){ts=n(ts)}function Tl(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(kn(this),e,...t);return Hr.set(s,e.sort?e.sort():[e]),Re(s)}:El().includes(n)?function(...e){return n.apply(kn(this),e),Re(Wr.get(this))}:function(...e){return Re(n.apply(kn(this),e))}}function Il(n){return typeof n=="function"?Tl(n):(n instanceof IDBTransaction&&Cl(n),yl(n,vl())?new Proxy(n,ts):n)}function Re(n){if(n instanceof IDBRequest)return bl(n);if(Dn.has(n))return Dn.get(n);const e=Il(n);return e!==n&&(Dn.set(n,e),Ts.set(e,n)),e}const kn=n=>Ts.get(n);function Sl(n,e,{blocked:t,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(n,e),a=Re(o);return s&&o.addEventListener("upgradeneeded",l=>{s(Re(o.result),l.oldVersion,l.newVersion,Re(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Nl=["get","getKey","getAll","getAllKeys","count"],Rl=["put","add","delete","clear"],xn=new Map;function bi(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(xn.get(e))return xn.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,i=Rl.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Nl.includes(t)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[t](...a),i&&l.done]))[0]};return xn.set(e,r),r}wl(n=>({...n,get:(e,t,s)=>bi(e,t)||n.get(e,t,s),has:(e,t)=>!!bi(e,t)||n.has(e,t)}));/**
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
 */class Al{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Dl(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function Dl(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ns="@firebase/app",Ci="0.10.2";/**
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
 */const je=new Br("@firebase/app"),kl="@firebase/app-compat",xl="@firebase/analytics-compat",Ol="@firebase/analytics",Pl="@firebase/app-check-compat",Ml="@firebase/app-check",Ll="@firebase/auth",Fl="@firebase/auth-compat",Ul="@firebase/database",Bl="@firebase/database-compat",Wl="@firebase/functions",Hl="@firebase/functions-compat",$l="@firebase/installations",Vl="@firebase/installations-compat",jl="@firebase/messaging",ql="@firebase/messaging-compat",zl="@firebase/performance",Gl="@firebase/performance-compat",Kl="@firebase/remote-config",Yl="@firebase/remote-config-compat",Ql="@firebase/storage",Xl="@firebase/storage-compat",Jl="@firebase/firestore",Zl="@firebase/firestore-compat",ec="firebase",tc="10.11.1";/**
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
 */const ss="[DEFAULT]",nc={[ns]:"fire-core",[kl]:"fire-core-compat",[Ol]:"fire-analytics",[xl]:"fire-analytics-compat",[Ml]:"fire-app-check",[Pl]:"fire-app-check-compat",[Ll]:"fire-auth",[Fl]:"fire-auth-compat",[Ul]:"fire-rtdb",[Bl]:"fire-rtdb-compat",[Wl]:"fire-fn",[Hl]:"fire-fn-compat",[$l]:"fire-iid",[Vl]:"fire-iid-compat",[jl]:"fire-fcm",[ql]:"fire-fcm-compat",[zl]:"fire-perf",[Gl]:"fire-perf-compat",[Kl]:"fire-rc",[Yl]:"fire-rc-compat",[Ql]:"fire-gcs",[Xl]:"fire-gcs-compat",[Jl]:"fire-fst",[Zl]:"fire-fst-compat","fire-js":"fire-js",[ec]:"fire-js-all"};/**
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
 */const en=new Map,sc=new Map,is=new Map;function wi(n,e){try{n.container.addComponent(e)}catch(t){je.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Dt(n){const e=n.name;if(is.has(e))return je.debug(`There were multiple attempts to register component ${e}.`),!1;is.set(e,n);for(const t of en.values())wi(t,n);for(const t of sc.values())wi(t,n);return!0}function $r(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
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
 */const ic={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ae=new Fr("app","Firebase",ic);/**
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
 */class rc{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new rt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ae.create("app-deleted",{appName:this._name})}}/**
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
 */const Vr=tc;function jr(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s=Object.assign({name:ss,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw Ae.create("bad-app-name",{appName:String(i)});if(t||(t=Or()),!t)throw Ae.create("no-options");const r=en.get(i);if(r){if(Zn(t,r.options)&&Zn(s,r.config))return r;throw Ae.create("duplicate-app",{appName:i})}const o=new fl(i);for(const l of is.values())o.addComponent(l);const a=new rc(t,s,o);return en.set(i,a),a}function qr(n=ss){const e=en.get(n);if(!e&&n===ss&&Or())return jr();if(!e)throw Ae.create("no-app",{appName:n});return e}function De(n,e,t){var s;let i=(s=nc[n])!==null&&s!==void 0?s:n;t&&(i+=`-${t}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),je.warn(a.join(" "));return}Dt(new rt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const oc="firebase-heartbeat-database",ac=1,kt="firebase-heartbeat-store";let On=null;function zr(){return On||(On=Sl(oc,ac,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(kt)}catch(t){console.warn(t)}}}}).catch(n=>{throw Ae.create("idb-open",{originalErrorMessage:n.message})})),On}async function lc(n){try{const t=(await zr()).transaction(kt),s=await t.objectStore(kt).get(Gr(n));return await t.done,s}catch(e){if(e instanceof ft)je.warn(e.message);else{const t=Ae.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});je.warn(t.message)}}}async function Ti(n,e){try{const s=(await zr()).transaction(kt,"readwrite");await s.objectStore(kt).put(e,Gr(n)),await s.done}catch(t){if(t instanceof ft)je.warn(t.message);else{const s=Ae.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});je.warn(s.message)}}}function Gr(n){return`${n.name}!${n.options.appId}`}/**
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
 */const cc=1024,uc=30*24*60*60*1e3;class hc{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new fc(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ii();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=uc}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Ii(),{heartbeatsToSend:s,unsentEntries:i}=dc(this._heartbeatsCache.heartbeats),r=Jt(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Ii(){return new Date().toISOString().substring(0,10)}function dc(n,e=cc){const t=[];let s=n.slice();for(const i of n){const r=t.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Si(t)>e){r.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Si(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class fc{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return el()?tl().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await lc(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ti(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ti(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Si(n){return Jt(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function _c(n){Dt(new rt("platform-logger",e=>new Al(e),"PRIVATE")),Dt(new rt("heartbeat",e=>new hc(e),"PRIVATE")),De(ns,Ci,n),De(ns,Ci,"esm2017"),De("fire-js","")}_c("");var pc="firebase",mc="10.11.1";/**
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
 */De(pc,mc,"app");var Ni={};const Ri="@firebase/database",Ai="1.0.4";/**
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
 */let Kr="";function gc(n){Kr=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ee(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:At(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return ye(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yr=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new yc(e)}}catch{}return new vc},He=Yr("localStorage"),rs=Yr("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const et=new Br("@firebase/database"),Ec=function(){let n=1;return function(){return n++}}(),Qr=function(n){const e=cl(n),t=new ll;t.update(e);const s=t.digest();return ws.encodeByteArray(s)},Wt=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Wt.apply(null,s):typeof s=="object"?e+=ee(s):e+=s,e+=" "}return e};let $e=null,Di=!0;const bc=function(n,e){m(!e||n===!0||n===!1,"Can't turn on custom loggers persistently."),n===!0?(et.logLevel=W.VERBOSE,$e=et.log.bind(et),e&&rs.set("logging_enabled",!0)):typeof n=="function"?$e=n:($e=null,rs.remove("logging_enabled"))},te=function(...n){if(Di===!0&&(Di=!1,$e===null&&rs.get("logging_enabled")===!0&&bc(!0)),$e){const e=Wt.apply(null,n);$e(e)}},Ht=function(n){return function(...e){te(n,...e)}},os=function(...n){const e="FIREBASE INTERNAL ERROR: "+Wt(...n);et.error(e)},we=function(...n){const e=`FIREBASE FATAL ERROR: ${Wt(...n)}`;throw et.error(e),new Error(e)},ie=function(...n){const e="FIREBASE WARNING: "+Wt(...n);et.warn(e)},Cc=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ie("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Is=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},wc=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},ot="[MIN_NAME]",qe="[MAX_NAME]",Qe=function(n,e){if(n===e)return 0;if(n===ot||e===qe)return-1;if(e===ot||n===qe)return 1;{const t=ki(n),s=ki(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},Tc=function(n,e){return n===e?0:n<e?-1:1},yt=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+ee(e))},Ss=function(n){if(typeof n!="object"||n===null)return ee(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=ee(e[s]),t+=":",t+=Ss(n[e[s]]);return t+="}",t},Xr=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let i=0;i<t;i+=e)i+e>t?s.push(n.substring(i,t)):s.push(n.substring(i,i+e));return s};function ne(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const Jr=function(n){m(!Is(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let i,r,o,a,l;n===0?(r=0,o=0,i=1/n===-1/0?1:0):(i=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),s),r=a+s,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-s-t))));const c=[];for(l=t;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const h=c.join("");let u="";for(l=0;l<64;l+=8){let d=parseInt(h.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),u=u+d}return u.toLowerCase()},Ic=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Sc=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Nc(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const s=new Error(n+" at "+e._path.toString()+": "+t);return s.code=n.toUpperCase(),s}const Rc=new RegExp("^-?(0*)\\d{1,10}$"),Ac=-2147483648,Dc=2147483647,ki=function(n){if(Rc.test(n)){const e=Number(n);if(e>=Ac&&e<=Dc)return e}return null},_t=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw ie("Exception was thrown by user callback.",t),e},Math.floor(0))}},kc=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Tt=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class xc{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){ie(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(te("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ie(e)}}class tt{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}tt.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ns="5",Zr="v",eo="s",to="r",no="f",so=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,io="ls",ro="p",as="ac",oo="websocket",ao="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(e,t,s,i,r=!1,o="",a=!1,l=!1){this.secure=t,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=He.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&He.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function Pc(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function co(n,e,t){m(typeof e=="string","typeof type must == string"),m(typeof t=="object","typeof params must == object");let s;if(e===oo)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===ao)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Pc(n)&&(t.ns=n.namespace);const i=[];return ne(t,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(){this.counters_={}}incrementCounter(e,t=1){ye(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return qa(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pn={},Mn={};function Rs(n){const e=n.toString();return Pn[e]||(Pn[e]=new Mc),Pn[e]}function Lc(n,e){const t=n.toString();return Mn[t]||(Mn[t]=e()),Mn[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&_t(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xi="start",Uc="close",Bc="pLPCommand",Wc="pRTLPCB",uo="id",ho="pw",fo="ser",Hc="cb",$c="seg",Vc="ts",jc="d",qc="dframe",_o=1870,po=30,zc=_o-po,Gc=25e3,Kc=3e4;class Ze{constructor(e,t,s,i,r,o,a){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ht(e),this.stats_=Rs(t),this.urlFn=l=>(this.appCheckToken&&(l[as]=this.appCheckToken),co(t,ao,l))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Fc(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Kc)),wc(()=>{if(this.isClosed_)return;this.scriptTagHolder=new As((...r)=>{const[o,a,l,c,h]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===xi)this.id=a,this.password=l;else if(o===Uc)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[xi]="t",s[fo]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Hc]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Zr]=Ns,this.transportSessionId&&(s[eo]=this.transportSessionId),this.lastSessionId&&(s[io]=this.lastSessionId),this.applicationId&&(s[ro]=this.applicationId),this.appCheckToken&&(s[as]=this.appCheckToken),typeof location<"u"&&location.hostname&&so.test(location.hostname)&&(s[to]=no);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ze.forceAllow_=!0}static forceDisallow(){Ze.forceDisallow_=!0}static isAvailable(){return Ze.forceAllow_?!0:!Ze.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Ic()&&!Sc()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=ee(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=Ar(t),i=Xr(s,zc);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[qc]="t",s[uo]=e,s[ho]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=ee(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class As{constructor(e,t,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Ec(),window[Bc+this.uniqueCallbackIdentifier]=e,window[Wc+this.uniqueCallbackIdentifier]=t,this.myIFrame=As.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){te("frame writing exception"),a.stack&&te(a.stack),te(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||te("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[uo]=this.myID,e[ho]=this.myPW,e[fo]=this.currentSerial;let t=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+po+s.length<=_o;){const o=this.pendingSegs.shift();s=s+"&"+$c+i+"="+o.seg+"&"+Vc+i+"="+o.ts+"&"+jc+i+"="+o.d,i++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(s,Math.floor(Gc)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{te("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yc=16384,Qc=45e3;let tn=null;typeof MozWebSocket<"u"?tn=MozWebSocket:typeof WebSocket<"u"&&(tn=WebSocket);class de{constructor(e,t,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ht(this.connId),this.stats_=Rs(t),this.connURL=de.connectionURL_(t,o,a,i,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,i,r){const o={};return o[Zr]=Ns,typeof location<"u"&&location.hostname&&so.test(location.hostname)&&(o[to]=no),t&&(o[eo]=t),s&&(o[io]=s),i&&(o[as]=i),r&&(o[ro]=r),co(e,oo,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,He.set("previous_websocket_failure",!0);try{let s;Lr(),this.mySock=new tn(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){de.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&tn!==null&&!de.forceDisallow_}static previouslyFailed(){return He.isInMemoryStorage||He.get("previous_websocket_failure")===!0}markConnectionHealthy(){He.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=At(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(m(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=ee(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=Xr(t,Yc);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Qc))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}de.responsesRequiredToBeHealthy=2;de.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Ze,de]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=de&&de.isAvailable();let s=t&&!de.previouslyFailed();if(e.webSocketOnly&&(t||ie("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[de];else{const i=this.transports_=[];for(const r of xt.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);xt.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}xt.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xc=6e4,Jc=5e3,Zc=10*1024,eu=100*1024,Ln="t",Oi="d",tu="s",Pi="r",nu="e",Mi="o",Li="a",Fi="n",Ui="p",su="h";class iu{constructor(e,t,s,i,r,o,a,l,c,h){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ht("c:"+this.id+":"),this.transportManager_=new xt(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Tt(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>eu?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Zc?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ln in e){const t=e[Ln];t===Li?this.upgradeIfSecondaryHealthy_():t===Pi?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Mi&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=yt("t",e),s=yt("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Ui,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Li,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Fi,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=yt("t",e),s=yt("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=yt(Ln,e);if(Oi in e){const s=e[Oi];if(t===su){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(t===Fi){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===tu?this.onConnectionShutdown_(s):t===Pi?this.onReset_(s):t===nu?os("Server Error: "+s):t===Mi?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):os("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Ns!==s&&ie("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),Tt(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Xc))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Tt(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Jc))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Ui,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(He.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{put(e,t,s,i){}merge(e,t,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(e){this.allowedEvents_=e,this.listeners_={},m(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const i=this.getInitialEvent(e);i&&t.apply(s,i)}off(e,t,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===t&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){m(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn extends go{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Mr()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new nn}getInitialEvent(e){return m(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bi=32,Wi=768;class F{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function P(){return new F("")}function A(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function xe(n){return n.pieces_.length-n.pieceNum_}function H(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new F(n.pieces_,e)}function Ds(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function ru(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Ot(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function yo(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new F(e,0)}function q(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof F)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&t.push(s[i])}return new F(t,0)}function x(n){return n.pieceNum_>=n.pieces_.length}function oe(n,e){const t=A(n),s=A(e);if(t===null)return e;if(t===s)return oe(H(n),H(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function ou(n,e){const t=Ot(n,0),s=Ot(e,0);for(let i=0;i<t.length&&i<s.length;i++){const r=Qe(t[i],s[i]);if(r!==0)return r}return t.length===s.length?0:t.length<s.length?-1:1}function ks(n,e){if(xe(n)!==xe(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function ce(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(xe(n)>xe(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class au{constructor(e,t){this.errorPrefix_=t,this.parts_=Ot(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=pn(this.parts_[s]);vo(this)}}function lu(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=pn(e),vo(n)}function cu(n){const e=n.parts_.pop();n.byteLength_-=pn(e),n.parts_.length>0&&(n.byteLength_-=1)}function vo(n){if(n.byteLength_>Wi)throw new Error(n.errorPrefix_+"has a key path longer than "+Wi+" bytes ("+n.byteLength_+").");if(n.parts_.length>Bi)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Bi+") or object contains a cycle "+We(n))}function We(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs extends go{constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new xs}getInitialEvent(e){return m(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vt=1e3,uu=60*5*1e3,Hi=30*1e3,hu=1.3,du=3e4,fu="server_kill",$i=3;class Ce extends mo{constructor(e,t,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Ce.nextPersistentConnectionId_++,this.log_=Ht("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=vt,this.maxReconnectDelay_=uu,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Lr())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");xs.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&nn.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(ee(r)),m(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const t=new Bt,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),m(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),m(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:t,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;Ce.warnOnListenWarnings_(l,t),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&ye(e,"w")){const s=it(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();ie(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||ol(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Hi)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=rl(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),m(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,t)}sendUnlisten_(e,t,s,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,i){const r={p:t,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,t,s,i){this.putInternal("p",e,t,s,i)}merge(e,t,s,i){this.putInternal("m",e,t,s,i)}putInternal(e,t,s,i,r){this.initConnection_();const o={p:t,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ee(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):os("Unrecognized action received from server: "+ee(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){m(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=vt,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=vt,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>du&&(this.reconnectDelay_=vt),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*hu)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Ce.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(u){m(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(u)};this.realtime_={close:l,sendRequest:c};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[u,d]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?te("getToken() completed but was canceled"):(te("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=d&&d.token,a=new iu(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,f=>{ie(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(fu)},r))}catch(u){this.log_("Failed to get token: "+u),o||(this.repoInfo_.nodeAdmin&&ie(u),l())}}}interrupt(e){te("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){te("Resuming connection for reason: "+e),delete this.interruptReasons_[e],gi(this.interruptReasons_)&&(this.reconnectDelay_=vt,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(r=>Ss(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const s=new F(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(t),r.delete(t),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,t){te("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=$i&&(this.reconnectDelay_=Hi,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){te("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=$i&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+Kr.replace(/\./g,"-")]=1,Mr()?e["framework.cordova"]=1:Za()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=nn.getInstance().currentlyOnline();return gi(this.interruptReasons_)&&e}}Ce.nextPersistentConnectionId_=0;Ce.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new D(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new D(ot,e),i=new D(ot,t);return this.compare(s,i)!==0}minPost(){return D.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zt;class Eo extends mn{static get __EMPTY_NODE(){return zt}static set __EMPTY_NODE(e){zt=e}compare(e,t){return Qe(e.name,t.name)}isDefinedOn(e){throw dt("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return D.MIN}maxPost(){return new D(qe,zt)}makePost(e,t){return m(typeof e=="string","KeyIndex indexValue must always be a string."),new D(e,zt)}toString(){return".key"}}const nt=new Eo;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e,t,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?s(e.key,t):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class J{constructor(e,t,s,i,r){this.key=e,this.value=t,this.color=s??J.RED,this.left=i??ae.EMPTY_NODE,this.right=r??ae.EMPTY_NODE}copy(e,t,s,i,r){return new J(e??this.key,t??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,t,s),null):r===0?i=i.copy(null,t,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return ae.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,i;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return ae.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,J.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,J.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}J.RED=!0;J.BLACK=!1;class _u{copy(e,t,s,i,r){return this}insert(e,t,s){return new J(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class ae{constructor(e,t=ae.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new ae(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,J.BLACK,null,null))}remove(e){return new ae(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,J.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,i=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Gt(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Gt(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Gt(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Gt(this.root_,null,this.comparator_,!0,e)}}ae.EMPTY_NODE=new _u;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pu(n,e){return Qe(n.name,e.name)}function Os(n,e){return Qe(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ls;function mu(n){ls=n}const bo=function(n){return typeof n=="number"?"number:"+Jr(n):"string:"+n},Co=function(n){if(n.isLeafNode()){const e=n.val();m(typeof e=="string"||typeof e=="number"||typeof e=="object"&&ye(e,".sv"),"Priority must be a string or number.")}else m(n===ls||n.isEmpty(),"priority of unexpected type.");m(n===ls||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vi;class X{constructor(e,t=X.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,m(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Co(this.priorityNode_)}static set __childrenNodeConstructor(e){Vi=e}static get __childrenNodeConstructor(){return Vi}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new X(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:X.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return x(e)?this:A(e)===".priority"?this.priorityNode_:X.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:X.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=A(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(m(s!==".priority"||xe(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,X.__childrenNodeConstructor.EMPTY_NODE.updateChild(H(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+bo(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=Jr(this.value_):e+=this.value_,this.lazyHash_=Qr(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===X.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof X.__childrenNodeConstructor?-1:(m(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,i=X.VALUE_TYPE_ORDER.indexOf(t),r=X.VALUE_TYPE_ORDER.indexOf(s);return m(i>=0,"Unknown leaf type: "+t),m(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}X.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wo,To;function gu(n){wo=n}function yu(n){To=n}class vu extends mn{compare(e,t){const s=e.node.getPriority(),i=t.node.getPriority(),r=s.compareTo(i);return r===0?Qe(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return D.MIN}maxPost(){return new D(qe,new X("[PRIORITY-POST]",To))}makePost(e,t){const s=wo(e);return new D(t,new X("[PRIORITY-POST]",s))}toString(){return".priority"}}const z=new vu;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eu=Math.log(2);class bu{constructor(e){const t=r=>parseInt(Math.log(r)/Eu,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const sn=function(n,e,t,s){n.sort(e);const i=function(l,c){const h=c-l;let u,d;if(h===0)return null;if(h===1)return u=n[l],d=t?t(u):u,new J(d,u.node,J.BLACK,null,null);{const f=parseInt(h/2,10)+l,p=i(l,f),g=i(f+1,c);return u=n[f],d=t?t(u):u,new J(d,u.node,J.BLACK,p,g)}},r=function(l){let c=null,h=null,u=n.length;const d=function(p,g){const y=u-p,I=u;u-=p;const O=i(y+1,I),C=n[y],w=t?t(C):C;f(new J(w,C.node,g,null,O))},f=function(p){c?(c.left=p,c=p):(h=p,c=p)};for(let p=0;p<l.count;++p){const g=l.nextBitIsOne(),y=Math.pow(2,l.count-(p+1));g?d(y,J.BLACK):(d(y,J.BLACK),d(y,J.RED))}return h},o=new bu(n.length),a=r(o);return new ae(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fn;const Je={};class be{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return m(Je&&z,"ChildrenNode.ts has not been loaded"),Fn=Fn||new be({".priority":Je},{".priority":z}),Fn}get(e){const t=it(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof ae?t:null}hasIndex(e){return ye(this.indexSet_,e.toString())}addIndex(e,t){m(e!==nt,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=t.getIterator(D.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=sn(s,e.getCompare()):a=Je;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const h=Object.assign({},this.indexes_);return h[l]=a,new be(h,c)}addToIndexes(e,t){const s=Zt(this.indexes_,(i,r)=>{const o=it(this.indexSet_,r);if(m(o,"Missing index implementation for "+r),i===Je)if(o.isDefinedOn(e.node)){const a=[],l=t.getIterator(D.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),sn(a,o.getCompare())}else return Je;else{const a=t.get(e.name);let l=i;return a&&(l=l.remove(new D(e.name,a))),l.insert(e,e.node)}});return new be(s,this.indexSet_)}removeFromIndexes(e,t){const s=Zt(this.indexes_,i=>{if(i===Je)return i;{const r=t.get(e.name);return r?i.remove(new D(e.name,r)):i}});return new be(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Et;class T{constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Co(this.priorityNode_),this.children_.isEmpty()&&m(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Et||(Et=new T(new ae(Os),null,be.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Et}updatePriority(e){return this.children_.isEmpty()?this:new T(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Et:t}}getChild(e){const t=A(e);return t===null?this:this.getImmediateChild(t).getChild(H(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(m(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new D(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Et:this.priorityNode_;return new T(i,o,r)}}updateChild(e,t){const s=A(e);if(s===null)return t;{m(A(e)!==".priority"||xe(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(H(e),t);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,i=0,r=!0;if(this.forEachChild(z,(o,a)=>{t[o]=a.val(e),s++,r&&T.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+bo(this.getPriority().val())+":"),this.forEachChild(z,(t,s)=>{const i=s.hash();i!==""&&(e+=":"+t+":"+i)}),this.lazyHash_=e===""?"":Qr(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new D(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new D(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new D(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>t(i.name,i.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,D.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,D.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===$t?-1:0}withIndex(e){if(e===nt||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new T(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===nt||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(z),i=t.getIterator(z);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===nt?null:this.indexMap_.get(e.toString())}}T.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Cu extends T{constructor(){super(new ae(Os),T.EMPTY_NODE,be.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return T.EMPTY_NODE}isEmpty(){return!1}}const $t=new Cu;Object.defineProperties(D,{MIN:{value:new D(ot,T.EMPTY_NODE)},MAX:{value:new D(qe,$t)}});Eo.__EMPTY_NODE=T.EMPTY_NODE;X.__childrenNodeConstructor=T;mu($t);yu($t);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wu=!0;function Z(n,e=null){if(n===null)return T.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),m(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new X(t,Z(e))}if(!(n instanceof Array)&&wu){const t=[];let s=!1;if(ne(n,(o,a)=>{if(o.substring(0,1)!=="."){const l=Z(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),t.push(new D(o,l)))}}),t.length===0)return T.EMPTY_NODE;const r=sn(t,pu,o=>o.name,Os);if(s){const o=sn(t,z.getCompare());return new T(r,Z(e),new be({".priority":o},{".priority":z}))}else return new T(r,Z(e),be.Default)}else{let t=T.EMPTY_NODE;return ne(n,(s,i)=>{if(ye(n,s)&&s.substring(0,1)!=="."){const r=Z(i);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(s,r))}}),t.updatePriority(Z(e))}}gu(Z);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu extends mn{constructor(e){super(),this.indexPath_=e,m(!x(e)&&A(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),i=this.extractChild(t.node),r=s.compareTo(i);return r===0?Qe(e.name,t.name):r}makePost(e,t){const s=Z(e),i=T.EMPTY_NODE.updateChild(this.indexPath_,s);return new D(t,i)}maxPost(){const e=T.EMPTY_NODE.updateChild(this.indexPath_,$t);return new D(qe,e)}toString(){return Ot(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu extends mn{compare(e,t){const s=e.node.compareTo(t.node);return s===0?Qe(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return D.MIN}maxPost(){return D.MAX}makePost(e,t){const s=Z(e);return new D(t,s)}toString(){return".value"}}const Su=new Iu;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Io(n){return{type:"value",snapshotNode:n}}function at(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function Pt(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Mt(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function Nu(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(e){this.index_=e}updateChild(e,t,s,i,r,o){m(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(t)?o.trackChildChange(Pt(t,a)):m(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(at(t,s)):o.trackChildChange(Mt(t,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(t,s).withIndex(this.index_)}updateFullNode(e,t,s){return s!=null&&(e.isLeafNode()||e.forEachChild(z,(i,r)=>{t.hasChild(i)||s.trackChildChange(Pt(i,r))}),t.isLeafNode()||t.forEachChild(z,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(Mt(i,r,o))}else s.trackChildChange(at(i,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?T.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e){this.indexedFilter_=new Ps(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Lt.getStartPost_(e),this.endPost_=Lt.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&s}updateChild(e,t,s,i,r,o){return this.matches(new D(t,s))||(s=T.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,s,i,r,o)}updateFullNode(e,t,s){t.isLeafNode()&&(t=T.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(T.EMPTY_NODE);const r=this;return t.forEachChild(z,(o,a)=>{r.matches(new D(o,a))||(i=i.updateImmediateChild(o,T.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=t=>{const s=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Lt(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,s,i,r,o){return this.rangedFilter_.matches(new D(t,s))||(s=T.EMPTY_NODE),e.getImmediateChild(t).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,s,i,r,o):this.fullLimitUpdateChild_(e,t,s,r,o)}updateFullNode(e,t,s){let i;if(t.isLeafNode()||t.isEmpty())i=T.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){i=T.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=t.withIndex(this.index_),i=i.updatePriority(T.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,T.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,s,i,r){let o;if(this.reverse_){const u=this.index_.getCompare();o=(d,f)=>u(f,d)}else o=this.index_.getCompare();const a=e;m(a.numChildren()===this.limit_,"");const l=new D(t,s),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),h=this.rangedFilter_.matches(l);if(a.hasChild(t)){const u=a.getImmediateChild(t);let d=i.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===t||a.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const f=d==null?1:o(d,l);if(h&&!s.isEmpty()&&f>=0)return r!=null&&r.trackChildChange(Mt(t,s,u)),a.updateImmediateChild(t,s);{r!=null&&r.trackChildChange(Pt(t,u));const g=a.updateImmediateChild(t,T.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(at(d.name,d.node)),g.updateImmediateChild(d.name,d.node)):g}}else return s.isEmpty()?e:h&&o(c,l)>=0?(r!=null&&(r.trackChildChange(Pt(c.name,c.node)),r.trackChildChange(at(t,s))),a.updateImmediateChild(t,s).updateImmediateChild(c.name,T.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=z}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return m(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return m(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ot}hasEnd(){return this.endSet_}getIndexEndValue(){return m(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return m(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:qe}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return m(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===z}copy(){const e=new Ms;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Au(n){return n.loadsAllData()?new Ps(n.getIndex()):n.hasLimit()?new Ru(n):new Lt(n)}function ji(n){const e={};if(n.isDefault())return e;let t;if(n.index_===z?t="$priority":n.index_===Su?t="$value":n.index_===nt?t="$key":(m(n.index_ instanceof Tu,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=ee(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=ee(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+ee(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=ee(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+ee(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function qi(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==z&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn extends mo{constructor(e,t,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Ht("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(m(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=rn.getListenId_(e,s),a={};this.listens_[o]=a;const l=ji(e._queryParams);this.restRequest_(r+".json",l,(c,h)=>{let u=h;if(c===404&&(u=null,c=null),c===null&&this.onDataUpdate_(r,u,!1,s),it(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,t){const s=rn.getListenId_(e,t);delete this.listens_[s]}get(e){const t=ji(e._queryParams),s=e._path.toString(),i=new Bt;return this.restRequest_(s+".json",t,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+al(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=At(a.responseText)}catch{ie("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&ie("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du{constructor(){this.rootNode_=T.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function on(){return{value:null,children:new Map}}function So(n,e,t){if(x(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=A(e);n.children.has(s)||n.children.set(s,on());const i=n.children.get(s);e=H(e),So(i,e,t)}}function cs(n,e,t){n.value!==null?t(e,n.value):ku(n,(s,i)=>{const r=new F(e.toString()+"/"+s);cs(i,r,t)})}function ku(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&ne(this.last_,(s,i)=>{t[s]=t[s]-i}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zi=10*1e3,Ou=30*1e3,Pu=5*60*1e3;class Mu{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new xu(e);const s=zi+(Ou-zi)*Math.random();Tt(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;ne(e,(i,r)=>{r>0&&ye(this.statsToReport_,i)&&(t[i]=r,s=!0)}),s&&this.server_.reportStats(t),Tt(this.reportStats_.bind(this),Math.floor(Math.random()*2*Pu))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var fe;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(fe||(fe={}));function Ls(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Fs(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Us(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=fe.ACK_USER_WRITE,this.source=Ls()}operationForChild(e){if(x(this.path)){if(this.affectedTree.value!=null)return m(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new F(e));return new an(P(),t,this.revert)}}else return m(A(this.path)===e,"operationForChild called for unrelated child."),new an(H(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e,t){this.source=e,this.path=t,this.type=fe.LISTEN_COMPLETE}operationForChild(e){return x(this.path)?new Ft(this.source,P()):new Ft(this.source,H(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=fe.OVERWRITE}operationForChild(e){return x(this.path)?new ze(this.source,P(),this.snap.getImmediateChild(e)):new ze(this.source,H(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=fe.MERGE}operationForChild(e){if(x(this.path)){const t=this.children.subtree(new F(e));return t.isEmpty()?null:t.value?new ze(this.source,P(),t.value):new lt(this.source,P(),t)}else return m(A(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new lt(this.source,H(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(x(e))return this.isFullyInitialized()&&!this.filtered_;const t=A(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lu{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Fu(n,e,t,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Nu(o.childName,o.snapshotNode))}),bt(n,i,"child_removed",e,s,t),bt(n,i,"child_added",e,s,t),bt(n,i,"child_moved",r,s,t),bt(n,i,"child_changed",e,s,t),bt(n,i,"value",e,s,t),i}function bt(n,e,t,s,i,r){const o=s.filter(a=>a.type===t);o.sort((a,l)=>Bu(n,a,l)),o.forEach(a=>{const l=Uu(n,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,n.query_))})})}function Uu(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function Bu(n,e,t){if(e.childName==null||t.childName==null)throw dt("Should only compare child_ events.");const s=new D(e.childName,e.snapshotNode),i=new D(t.childName,t.snapshotNode);return n.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gn(n,e){return{eventCache:n,serverCache:e}}function It(n,e,t,s){return gn(new Ge(e,t,s),n.serverCache)}function No(n,e,t,s){return gn(n.eventCache,new Ge(e,t,s))}function us(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function Ke(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Un;const Wu=()=>(Un||(Un=new ae(Tc)),Un);class B{constructor(e,t=Wu()){this.value=e,this.children=t}static fromObject(e){let t=new B(null);return ne(e,(s,i)=>{t=t.set(new F(s),i)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:P(),value:this.value};if(x(e))return null;{const s=A(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(H(e),t);return r!=null?{path:q(new F(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(x(e))return this;{const t=A(e),s=this.children.get(t);return s!==null?s.subtree(H(e)):new B(null)}}set(e,t){if(x(e))return new B(t,this.children);{const s=A(e),r=(this.children.get(s)||new B(null)).set(H(e),t),o=this.children.insert(s,r);return new B(this.value,o)}}remove(e){if(x(e))return this.children.isEmpty()?new B(null):new B(null,this.children);{const t=A(e),s=this.children.get(t);if(s){const i=s.remove(H(e));let r;return i.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,i),this.value===null&&r.isEmpty()?new B(null):new B(this.value,r)}else return this}}get(e){if(x(e))return this.value;{const t=A(e),s=this.children.get(t);return s?s.get(H(e)):null}}setTree(e,t){if(x(e))return t;{const s=A(e),r=(this.children.get(s)||new B(null)).setTree(H(e),t);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new B(this.value,o)}}fold(e){return this.fold_(P(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(q(e,i),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,P(),t)}findOnPath_(e,t,s){const i=this.value?s(t,this.value):!1;if(i)return i;if(x(e))return null;{const r=A(e),o=this.children.get(r);return o?o.findOnPath_(H(e),q(t,r),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,P(),t)}foreachOnPath_(e,t,s){if(x(e))return this;{this.value&&s(t,this.value);const i=A(e),r=this.children.get(i);return r?r.foreachOnPath_(H(e),q(t,i),s):new B(null)}}foreach(e){this.foreach_(P(),e)}foreach_(e,t){this.children.inorderTraversal((s,i)=>{i.foreach_(q(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(e){this.writeTree_=e}static empty(){return new _e(new B(null))}}function St(n,e,t){if(x(e))return new _e(new B(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=oe(i,e);return r=r.updateChild(o,t),new _e(n.writeTree_.set(i,r))}else{const i=new B(t),r=n.writeTree_.setTree(e,i);return new _e(r)}}}function hs(n,e,t){let s=n;return ne(t,(i,r)=>{s=St(s,q(e,i),r)}),s}function Gi(n,e){if(x(e))return _e.empty();{const t=n.writeTree_.setTree(e,new B(null));return new _e(t)}}function ds(n,e){return Xe(n,e)!=null}function Xe(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(oe(t.path,e)):null}function Ki(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(z,(s,i)=>{e.push(new D(s,i))}):n.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new D(s,i.value))}),e}function ke(n,e){if(x(e))return n;{const t=Xe(n,e);return t!=null?new _e(new B(t)):new _e(n.writeTree_.subtree(e))}}function fs(n){return n.writeTree_.isEmpty()}function ct(n,e){return Ro(P(),n.writeTree_,e)}function Ro(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(m(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):t=Ro(q(n,i),r,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(q(n,".priority"),s)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bs(n,e){return xo(e,n)}function Hu(n,e,t,s,i){m(s>n.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:i}),i&&(n.visibleWrites=St(n.visibleWrites,e,t)),n.lastWriteId=s}function $u(n,e,t,s){m(s>n.lastWriteId,"Stacking an older merge on top of newer ones"),n.allWrites.push({path:e,children:t,writeId:s,visible:!0}),n.visibleWrites=hs(n.visibleWrites,e,t),n.lastWriteId=s}function Vu(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function ju(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);m(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let i=s.visible,r=!1,o=n.allWrites.length-1;for(;i&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&qu(a,s.path)?i=!1:ce(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return zu(n),!0;if(s.snap)n.visibleWrites=Gi(n.visibleWrites,s.path);else{const a=s.children;ne(a,l=>{n.visibleWrites=Gi(n.visibleWrites,q(s.path,l))})}return!0}else return!1}function qu(n,e){if(n.snap)return ce(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&ce(q(n.path,t),e))return!0;return!1}function zu(n){n.visibleWrites=Ao(n.allWrites,Gu,P()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function Gu(n){return n.visible}function Ao(n,e,t){let s=_e.empty();for(let i=0;i<n.length;++i){const r=n[i];if(e(r)){const o=r.path;let a;if(r.snap)ce(t,o)?(a=oe(t,o),s=St(s,a,r.snap)):ce(o,t)&&(a=oe(o,t),s=St(s,P(),r.snap.getChild(a)));else if(r.children){if(ce(t,o))a=oe(t,o),s=hs(s,a,r.children);else if(ce(o,t))if(a=oe(o,t),x(a))s=hs(s,P(),r.children);else{const l=it(r.children,A(a));if(l){const c=l.getChild(H(a));s=St(s,P(),c)}}}else throw dt("WriteRecord should have .snap or .children")}}return s}function Do(n,e,t,s,i){if(!s&&!i){const r=Xe(n.visibleWrites,e);if(r!=null)return r;{const o=ke(n.visibleWrites,e);if(fs(o))return t;if(t==null&&!ds(o,P()))return null;{const a=t||T.EMPTY_NODE;return ct(o,a)}}}else{const r=ke(n.visibleWrites,e);if(!i&&fs(r))return t;if(!i&&t==null&&!ds(r,P()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(ce(c.path,e)||ce(e,c.path))},a=Ao(n.allWrites,o,e),l=t||T.EMPTY_NODE;return ct(a,l)}}}function Ku(n,e,t){let s=T.EMPTY_NODE;const i=Xe(n.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(z,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(t){const r=ke(n.visibleWrites,e);return t.forEachChild(z,(o,a)=>{const l=ct(ke(r,new F(o)),a);s=s.updateImmediateChild(o,l)}),Ki(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=ke(n.visibleWrites,e);return Ki(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function Yu(n,e,t,s,i){m(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=q(e,t);if(ds(n.visibleWrites,r))return null;{const o=ke(n.visibleWrites,r);return fs(o)?i.getChild(t):ct(o,i.getChild(t))}}function Qu(n,e,t,s){const i=q(e,t),r=Xe(n.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(t)){const o=ke(n.visibleWrites,i);return ct(o,s.getNode().getImmediateChild(t))}else return null}function Xu(n,e){return Xe(n.visibleWrites,e)}function Ju(n,e,t,s,i,r,o){let a;const l=ke(n.visibleWrites,e),c=Xe(l,P());if(c!=null)a=c;else if(t!=null)a=ct(l,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const h=[],u=o.getCompare(),d=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let f=d.getNext();for(;f&&h.length<i;)u(f,s)!==0&&h.push(f),f=d.getNext();return h}else return[]}function Zu(){return{visibleWrites:_e.empty(),allWrites:[],lastWriteId:-1}}function ln(n,e,t,s){return Do(n.writeTree,n.treePath,e,t,s)}function Ws(n,e){return Ku(n.writeTree,n.treePath,e)}function Yi(n,e,t,s){return Yu(n.writeTree,n.treePath,e,t,s)}function cn(n,e){return Xu(n.writeTree,q(n.treePath,e))}function eh(n,e,t,s,i,r){return Ju(n.writeTree,n.treePath,e,t,s,i,r)}function Hs(n,e,t){return Qu(n.writeTree,n.treePath,e,t)}function ko(n,e){return xo(q(n.treePath,e),n.writeTree)}function xo(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;m(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),m(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(s,Mt(s,e.snapshotNode,i.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(s,Pt(s,i.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(s,at(s,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(s,Mt(s,e.snapshotNode,i.oldSnap));else throw dt("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const Oo=new nh;class $s{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Ge(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Hs(this.writes_,e,s)}}getChildAfterChild(e,t,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ke(this.viewCache_),r=eh(this.writes_,i,t,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sh(n){return{filter:n}}function ih(n,e){m(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),m(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function rh(n,e,t,s,i){const r=new th;let o,a;if(t.type===fe.OVERWRITE){const c=t;c.source.fromUser?o=_s(n,e,c.path,c.snap,s,i,r):(m(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!x(c.path),o=un(n,e,c.path,c.snap,s,i,a,r))}else if(t.type===fe.MERGE){const c=t;c.source.fromUser?o=ah(n,e,c.path,c.children,s,i,r):(m(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=ps(n,e,c.path,c.children,s,i,a,r))}else if(t.type===fe.ACK_USER_WRITE){const c=t;c.revert?o=uh(n,e,c.path,s,i,r):o=lh(n,e,c.path,c.affectedTree,s,i,r)}else if(t.type===fe.LISTEN_COMPLETE)o=ch(n,e,t.path,s,r);else throw dt("Unknown operation type: "+t.type);const l=r.getChanges();return oh(e,o,l),{viewCache:o,changes:l}}function oh(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=us(n);(t.length>0||!n.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&t.push(Io(us(e)))}}function Po(n,e,t,s,i,r){const o=e.eventCache;if(cn(s,t)!=null)return e;{let a,l;if(x(t))if(m(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Ke(e),h=c instanceof T?c:T.EMPTY_NODE,u=Ws(s,h);a=n.filter.updateFullNode(e.eventCache.getNode(),u,r)}else{const c=ln(s,Ke(e));a=n.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=A(t);if(c===".priority"){m(xe(t)===1,"Can't have a priority with additional path components");const h=o.getNode();l=e.serverCache.getNode();const u=Yi(s,t,h,l);u!=null?a=n.filter.updatePriority(h,u):a=o.getNode()}else{const h=H(t);let u;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=Yi(s,t,o.getNode(),l);d!=null?u=o.getNode().getImmediateChild(c).updateChild(h,d):u=o.getNode().getImmediateChild(c)}else u=Hs(s,c,e.serverCache);u!=null?a=n.filter.updateChild(o.getNode(),c,u,h,i,r):a=o.getNode()}}return It(e,a,o.isFullyInitialized()||x(t),n.filter.filtersNodes())}}function un(n,e,t,s,i,r,o,a){const l=e.serverCache;let c;const h=o?n.filter:n.filter.getIndexedFilter();if(x(t))c=h.updateFullNode(l.getNode(),s,null);else if(h.filtersNodes()&&!l.isFiltered()){const f=l.getNode().updateChild(t,s);c=h.updateFullNode(l.getNode(),f,null)}else{const f=A(t);if(!l.isCompleteForPath(t)&&xe(t)>1)return e;const p=H(t),y=l.getNode().getImmediateChild(f).updateChild(p,s);f===".priority"?c=h.updatePriority(l.getNode(),y):c=h.updateChild(l.getNode(),f,y,p,Oo,null)}const u=No(e,c,l.isFullyInitialized()||x(t),h.filtersNodes()),d=new $s(i,u,r);return Po(n,u,t,i,d,a)}function _s(n,e,t,s,i,r,o){const a=e.eventCache;let l,c;const h=new $s(i,e,r);if(x(t))c=n.filter.updateFullNode(e.eventCache.getNode(),s,o),l=It(e,c,!0,n.filter.filtersNodes());else{const u=A(t);if(u===".priority")c=n.filter.updatePriority(e.eventCache.getNode(),s),l=It(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=H(t),f=a.getNode().getImmediateChild(u);let p;if(x(d))p=s;else{const g=h.getCompleteChild(u);g!=null?Ds(d)===".priority"&&g.getChild(yo(d)).isEmpty()?p=g:p=g.updateChild(d,s):p=T.EMPTY_NODE}if(f.equals(p))l=e;else{const g=n.filter.updateChild(a.getNode(),u,p,d,h,o);l=It(e,g,a.isFullyInitialized(),n.filter.filtersNodes())}}}return l}function Qi(n,e){return n.eventCache.isCompleteForChild(e)}function ah(n,e,t,s,i,r,o){let a=e;return s.foreach((l,c)=>{const h=q(t,l);Qi(e,A(h))&&(a=_s(n,a,h,c,i,r,o))}),s.foreach((l,c)=>{const h=q(t,l);Qi(e,A(h))||(a=_s(n,a,h,c,i,r,o))}),a}function Xi(n,e,t){return t.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function ps(n,e,t,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;x(t)?c=s:c=new B(null).setTree(t,s);const h=e.serverCache.getNode();return c.children.inorderTraversal((u,d)=>{if(h.hasChild(u)){const f=e.serverCache.getNode().getImmediateChild(u),p=Xi(n,f,d);l=un(n,l,new F(u),p,i,r,o,a)}}),c.children.inorderTraversal((u,d)=>{const f=!e.serverCache.isCompleteForChild(u)&&d.value===null;if(!h.hasChild(u)&&!f){const p=e.serverCache.getNode().getImmediateChild(u),g=Xi(n,p,d);l=un(n,l,new F(u),g,i,r,o,a)}}),l}function lh(n,e,t,s,i,r,o){if(cn(i,t)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(x(t)&&l.isFullyInitialized()||l.isCompleteForPath(t))return un(n,e,t,l.getNode().getChild(t),i,r,a,o);if(x(t)){let c=new B(null);return l.getNode().forEachChild(nt,(h,u)=>{c=c.set(new F(h),u)}),ps(n,e,t,c,i,r,a,o)}else return e}else{let c=new B(null);return s.foreach((h,u)=>{const d=q(t,h);l.isCompleteForPath(d)&&(c=c.set(h,l.getNode().getChild(d)))}),ps(n,e,t,c,i,r,a,o)}}function ch(n,e,t,s,i){const r=e.serverCache,o=No(e,r.getNode(),r.isFullyInitialized()||x(t),r.isFiltered());return Po(n,o,t,s,Oo,i)}function uh(n,e,t,s,i,r){let o;if(cn(s,t)!=null)return e;{const a=new $s(s,e,i),l=e.eventCache.getNode();let c;if(x(t)||A(t)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=ln(s,Ke(e));else{const u=e.serverCache.getNode();m(u instanceof T,"serverChildren would be complete if leaf node"),h=Ws(s,u)}h=h,c=n.filter.updateFullNode(l,h,r)}else{const h=A(t);let u=Hs(s,h,e.serverCache);u==null&&e.serverCache.isCompleteForChild(h)&&(u=l.getImmediateChild(h)),u!=null?c=n.filter.updateChild(l,h,u,H(t),a,r):e.eventCache.getNode().hasChild(h)?c=n.filter.updateChild(l,h,T.EMPTY_NODE,H(t),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=ln(s,Ke(e)),o.isLeafNode()&&(c=n.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||cn(s,P())!=null,It(e,c,o,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new Ps(s.getIndex()),r=Au(s);this.processor_=sh(r);const o=t.serverCache,a=t.eventCache,l=i.updateFullNode(T.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(T.EMPTY_NODE,a.getNode(),null),h=new Ge(l,o.isFullyInitialized(),i.filtersNodes()),u=new Ge(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=gn(u,h),this.eventGenerator_=new Lu(this.query_)}get query(){return this.query_}}function dh(n){return n.viewCache_.serverCache.getNode()}function fh(n,e){const t=Ke(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!x(e)&&!t.getImmediateChild(A(e)).isEmpty())?t.getChild(e):null}function Ji(n){return n.eventRegistrations_.length===0}function _h(n,e){n.eventRegistrations_.push(e)}function Zi(n,e,t){const s=[];if(t){m(e==null,"A cancel should cancel all event registrations.");const i=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=i}else n.eventRegistrations_=[];return s}function er(n,e,t,s){e.type===fe.MERGE&&e.source.queryId!==null&&(m(Ke(n.viewCache_),"We should always have a full cache before handling merges"),m(us(n.viewCache_),"Missing event cache, even though we have a server cache"));const i=n.viewCache_,r=rh(n.processor_,i,e,t,s);return ih(n.processor_,r.viewCache),m(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,Mo(n,r.changes,r.viewCache.eventCache.getNode(),null)}function ph(n,e){const t=n.viewCache_.eventCache,s=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(z,(r,o)=>{s.push(at(r,o))}),t.isFullyInitialized()&&s.push(Io(t.getNode())),Mo(n,s,t.getNode(),e)}function Mo(n,e,t,s){const i=s?[s]:n.eventRegistrations_;return Fu(n.eventGenerator_,e,t,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hn;class mh{constructor(){this.views=new Map}}function gh(n){m(!hn,"__referenceConstructor has already been defined"),hn=n}function yh(){return m(hn,"Reference.ts has not been loaded"),hn}function vh(n){return n.views.size===0}function Vs(n,e,t,s){const i=e.source.queryId;if(i!==null){const r=n.views.get(i);return m(r!=null,"SyncTree gave us an op for an invalid query."),er(r,e,t,s)}else{let r=[];for(const o of n.views.values())r=r.concat(er(o,e,t,s));return r}}function Eh(n,e,t,s,i){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let a=ln(t,i?s:null),l=!1;a?l=!0:s instanceof T?(a=Ws(t,s),l=!1):(a=T.EMPTY_NODE,l=!1);const c=gn(new Ge(a,l,!1),new Ge(s,i,!1));return new hh(e,c)}return o}function bh(n,e,t,s,i,r){const o=Eh(n,e,s,i,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),_h(o,t),ph(o,t)}function Ch(n,e,t,s){const i=e._queryIdentifier,r=[];let o=[];const a=Oe(n);if(i==="default")for(const[l,c]of n.views.entries())o=o.concat(Zi(c,t,s)),Ji(c)&&(n.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=n.views.get(i);l&&(o=o.concat(Zi(l,t,s)),Ji(l)&&(n.views.delete(i),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!Oe(n)&&r.push(new(yh())(e._repo,e._path)),{removed:r,events:o}}function Lo(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function st(n,e){let t=null;for(const s of n.views.values())t=t||fh(s,e);return t}function Fo(n,e){if(e._queryParams.loadsAllData())return yn(n);{const s=e._queryIdentifier;return n.views.get(s)}}function Uo(n,e){return Fo(n,e)!=null}function Oe(n){return yn(n)!=null}function yn(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dn;function wh(n){m(!dn,"__referenceConstructor has already been defined"),dn=n}function Th(){return m(dn,"Reference.ts has not been loaded"),dn}let Ih=1;class tr{constructor(e){this.listenProvider_=e,this.syncPointTree_=new B(null),this.pendingWriteTree_=Zu(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Bo(n,e,t,s,i){return Hu(n.pendingWriteTree_,e,t,s,i),i?pt(n,new ze(Ls(),e,t)):[]}function Sh(n,e,t,s){$u(n.pendingWriteTree_,e,t,s);const i=B.fromObject(t);return pt(n,new lt(Ls(),e,i))}function Ne(n,e,t=!1){const s=Vu(n.pendingWriteTree_,e);if(ju(n.pendingWriteTree_,e)){let r=new B(null);return s.snap!=null?r=r.set(P(),!0):ne(s.children,o=>{r=r.set(new F(o),!0)}),pt(n,new an(s.path,r,t))}else return[]}function vn(n,e,t){return pt(n,new ze(Fs(),e,t))}function Nh(n,e,t){const s=B.fromObject(t);return pt(n,new lt(Fs(),e,s))}function Rh(n,e){return pt(n,new Ft(Fs(),e))}function Ah(n,e,t){const s=qs(n,t);if(s){const i=zs(s),r=i.path,o=i.queryId,a=oe(r,e),l=new Ft(Us(o),a);return Gs(n,r,l)}else return[]}function ms(n,e,t,s,i=!1){const r=e._path,o=n.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||Uo(o,e))){const l=Ch(o,e,t,s);vh(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!i){const h=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,u=n.syncPointTree_.findOnPath(r,(d,f)=>Oe(f));if(h&&!u){const d=n.syncPointTree_.subtree(r);if(!d.isEmpty()){const f=xh(d);for(let p=0;p<f.length;++p){const g=f[p],y=g.query,I=$o(n,g);n.listenProvider_.startListening(Nt(y),fn(n,y),I.hashFn,I.onComplete)}}}!u&&c.length>0&&!s&&(h?n.listenProvider_.stopListening(Nt(e),null):c.forEach(d=>{const f=n.queryToTagMap.get(En(d));n.listenProvider_.stopListening(Nt(d),f)}))}Oh(n,c)}return a}function Dh(n,e,t,s){const i=qs(n,s);if(i!=null){const r=zs(i),o=r.path,a=r.queryId,l=oe(o,e),c=new ze(Us(a),l,t);return Gs(n,o,c)}else return[]}function kh(n,e,t,s){const i=qs(n,s);if(i){const r=zs(i),o=r.path,a=r.queryId,l=oe(o,e),c=B.fromObject(t),h=new lt(Us(a),l,c);return Gs(n,o,h)}else return[]}function nr(n,e,t,s=!1){const i=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(i,(d,f)=>{const p=oe(d,i);r=r||st(f,p),o=o||Oe(f)});let a=n.syncPointTree_.get(i);a?(o=o||Oe(a),r=r||st(a,P())):(a=new mh,n.syncPointTree_=n.syncPointTree_.set(i,a));let l;r!=null?l=!0:(l=!1,r=T.EMPTY_NODE,n.syncPointTree_.subtree(i).foreachChild((f,p)=>{const g=st(p,P());g&&(r=r.updateImmediateChild(f,g))}));const c=Uo(a,e);if(!c&&!e._queryParams.loadsAllData()){const d=En(e);m(!n.queryToTagMap.has(d),"View does not exist, but we have a tag");const f=Ph();n.queryToTagMap.set(d,f),n.tagToQueryMap.set(f,d)}const h=Bs(n.pendingWriteTree_,i);let u=bh(a,e,t,h,r,l);if(!c&&!o&&!s){const d=Fo(a,e);u=u.concat(Mh(n,e,d))}return u}function js(n,e,t){const i=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,a)=>{const l=oe(o,e),c=st(a,l);if(c)return c});return Do(i,e,r,t,!0)}function pt(n,e){return Wo(e,n.syncPointTree_,null,Bs(n.pendingWriteTree_,P()))}function Wo(n,e,t,s){if(x(n.path))return Ho(n,e,t,s);{const i=e.get(P());t==null&&i!=null&&(t=st(i,P()));let r=[];const o=A(n.path),a=n.operationForChild(o),l=e.children.get(o);if(l&&a){const c=t?t.getImmediateChild(o):null,h=ko(s,o);r=r.concat(Wo(a,l,c,h))}return i&&(r=r.concat(Vs(i,n,s,t))),r}}function Ho(n,e,t,s){const i=e.get(P());t==null&&i!=null&&(t=st(i,P()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=t?t.getImmediateChild(o):null,c=ko(s,o),h=n.operationForChild(o);h&&(r=r.concat(Ho(h,a,l,c)))}),i&&(r=r.concat(Vs(i,n,s,t))),r}function $o(n,e){const t=e.query,s=fn(n,t);return{hashFn:()=>(dh(e)||T.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?Ah(n,t._path,s):Rh(n,t._path);{const r=Nc(i,t);return ms(n,t,null,r)}}}}function fn(n,e){const t=En(e);return n.queryToTagMap.get(t)}function En(n){return n._path.toString()+"$"+n._queryIdentifier}function qs(n,e){return n.tagToQueryMap.get(e)}function zs(n){const e=n.indexOf("$");return m(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new F(n.substr(0,e))}}function Gs(n,e,t){const s=n.syncPointTree_.get(e);m(s,"Missing sync point for query tag that we're tracking");const i=Bs(n.pendingWriteTree_,e);return Vs(s,t,i,null)}function xh(n){return n.fold((e,t,s)=>{if(t&&Oe(t))return[yn(t)];{let i=[];return t&&(i=Lo(t)),ne(s,(r,o)=>{i=i.concat(o)}),i}})}function Nt(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(Th())(n._repo,n._path):n}function Oh(n,e){for(let t=0;t<e.length;++t){const s=e[t];if(!s._queryParams.loadsAllData()){const i=En(s),r=n.queryToTagMap.get(i);n.queryToTagMap.delete(i),n.tagToQueryMap.delete(r)}}}function Ph(){return Ih++}function Mh(n,e,t){const s=e._path,i=fn(n,e),r=$o(n,t),o=n.listenProvider_.startListening(Nt(e),i,r.hashFn,r.onComplete),a=n.syncPointTree_.subtree(s);if(i)m(!Oe(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,h,u)=>{if(!x(c)&&h&&Oe(h))return[yn(h).query];{let d=[];return h&&(d=d.concat(Lo(h).map(f=>f.query))),ne(u,(f,p)=>{d=d.concat(p)}),d}});for(let c=0;c<l.length;++c){const h=l[c];n.listenProvider_.stopListening(Nt(h),fn(n,h))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Ks(t)}node(){return this.node_}}class Ys{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=q(this.path_,e);return new Ys(this.syncTree_,t)}node(){return js(this.syncTree_,this.path_)}}const Lh=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},sr=function(n,e,t){if(!n||typeof n!="object")return n;if(m(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return Fh(n[".sv"],e,t);if(typeof n[".sv"]=="object")return Uh(n[".sv"],e);m(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},Fh=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:m(!1,"Unexpected server value: "+n)}},Uh=function(n,e,t){n.hasOwnProperty("increment")||m(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&m(!1,"Unexpected increment value: "+s);const i=e.node();if(m(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},Vo=function(n,e,t,s){return Qs(e,new Ys(t,n),s)},jo=function(n,e,t){return Qs(n,new Ks(e),t)};function Qs(n,e,t){const s=n.getPriority().val(),i=sr(s,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,a=sr(o.getValue(),e,t);return a!==o.getValue()||i!==o.getPriority().val()?new X(a,Z(i)):n}else{const o=n;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new X(i))),o.forEachChild(z,(a,l)=>{const c=Qs(l,e.getImmediateChild(a),t);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function Js(n,e){let t=e instanceof F?e:new F(e),s=n,i=A(t);for(;i!==null;){const r=it(s.node.children,i)||{children:{},childCount:0};s=new Xs(i,s,r),t=H(t),i=A(t)}return s}function mt(n){return n.node.value}function qo(n,e){n.node.value=e,gs(n)}function zo(n){return n.node.childCount>0}function Bh(n){return mt(n)===void 0&&!zo(n)}function bn(n,e){ne(n.node.children,(t,s)=>{e(new Xs(t,n,s))})}function Go(n,e,t,s){t&&!s&&e(n),bn(n,i=>{Go(i,e,!0,s)}),t&&s&&e(n)}function Wh(n,e,t){let s=t?n:n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Vt(n){return new F(n.parent===null?n.name:Vt(n.parent)+"/"+n.name)}function gs(n){n.parent!==null&&Hh(n.parent,n.name,n)}function Hh(n,e,t){const s=Bh(t),i=ye(n.node.children,e);s&&i?(delete n.node.children[e],n.node.childCount--,gs(n)):!s&&!i&&(n.node.children[e]=t.node,n.node.childCount++,gs(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $h=/[\[\].#$\/\u0000-\u001F\u007F]/,Vh=/[\[\].#$\u0000-\u001F\u007F]/,Bn=10*1024*1024,Zs=function(n){return typeof n=="string"&&n.length!==0&&!$h.test(n)},Ko=function(n){return typeof n=="string"&&n.length!==0&&!Vh.test(n)},jh=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Ko(n)},qh=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!Is(n)||n&&typeof n=="object"&&ye(n,".sv")},Yo=function(n,e,t,s){s&&e===void 0||Cn(_n(n,"value"),e,t)},Cn=function(n,e,t){const s=t instanceof F?new au(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+We(s));if(typeof e=="function")throw new Error(n+"contains a function "+We(s)+" with contents = "+e.toString());if(Is(e))throw new Error(n+"contains "+e.toString()+" "+We(s));if(typeof e=="string"&&e.length>Bn/3&&pn(e)>Bn)throw new Error(n+"contains a string greater than "+Bn+" utf8 bytes "+We(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(ne(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Zs(o)))throw new Error(n+" contains an invalid key ("+o+") "+We(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);lu(s,o),Cn(n,a,s),cu(s)}),i&&r)throw new Error(n+' contains ".value" child '+We(s)+" in addition to actual children.")}},zh=function(n,e){let t,s;for(t=0;t<e.length;t++){s=e[t];const r=Ot(s);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!Zs(r[o]))throw new Error(n+"contains an invalid key ("+r[o]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(ou);let i=null;for(t=0;t<e.length;t++){if(s=e[t],i!==null&&ce(i,s))throw new Error(n+"contains a path "+i.toString()+" that is ancestor of another path "+s.toString());i=s}},Gh=function(n,e,t,s){if(s&&e===void 0)return;const i=_n(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const r=[];ne(e,(o,a)=>{const l=new F(o);if(Cn(i,a,q(t,l)),Ds(l)===".priority"&&!qh(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(l)}),zh(i,r)},Qo=function(n,e,t,s){if(!(s&&t===void 0)&&!Ko(t))throw new Error(_n(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Kh=function(n,e,t,s){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Qo(n,e,t,s)},Xo=function(n,e){if(A(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},Yh=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Zs(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!jh(t))throw new Error(_n(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function wn(n,e){let t=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();t!==null&&!ks(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(i)}t&&n.eventLists_.push(t)}function Jo(n,e,t){wn(n,t),Zo(n,s=>ks(s,e))}function pe(n,e,t){wn(n,t),Zo(n,s=>ce(s,e)||ce(e,s))}function Zo(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const i=n.eventLists_[s];if(i){const r=i.path;e(r)?(Xh(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function Xh(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();$e&&te("event: "+t.toString()),_t(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jh="repo_interrupt",Zh=25;class ed{constructor(e,t,s,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Qh,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=on(),this.transactionQueueTree_=new Xs,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function td(n,e,t){if(n.stats_=Rs(n.repoInfo_),n.forceRestClient_||kc())n.server_=new rn(n.repoInfo_,(s,i,r,o)=>{ir(n,s,i,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>rr(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ee(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new Ce(n.repoInfo_,e,(s,i,r,o)=>{ir(n,s,i,r,o)},s=>{rr(n,s)},s=>{nd(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=Lc(n.repoInfo_,()=>new Mu(n.stats_,n.server_)),n.infoData_=new Du,n.infoSyncTree_=new tr({startListening:(s,i,r,o)=>{let a=[];const l=n.infoData_.getNode(s._path);return l.isEmpty()||(a=vn(n.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),ei(n,"connected",!1),n.serverSyncTree_=new tr({startListening:(s,i,r,o)=>(n.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);pe(n.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{n.server_.unlisten(s,i)}})}function ea(n){const t=n.infoData_.getNode(new F(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Tn(n){return Lh({timestamp:ea(n)})}function ir(n,e,t,s,i){n.dataUpdateCount++;const r=new F(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(i)if(s){const l=Zt(t,c=>Z(c));o=kh(n.serverSyncTree_,r,l,i)}else{const l=Z(t);o=Dh(n.serverSyncTree_,r,l,i)}else if(s){const l=Zt(t,c=>Z(c));o=Nh(n.serverSyncTree_,r,l)}else{const l=Z(t);o=vn(n.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=ut(n,r)),pe(n.eventQueue_,a,o)}function rr(n,e){ei(n,"connected",e),e===!1&&rd(n)}function nd(n,e){ne(e,(t,s)=>{ei(n,t,s)})}function ei(n,e,t){const s=new F("/.info/"+e),i=Z(t);n.infoData_.updateSnapshot(s,i);const r=vn(n.infoSyncTree_,s,i);pe(n.eventQueue_,s,r)}function ti(n){return n.nextWriteId_++}function sd(n,e,t,s,i){In(n,"set",{path:e.toString(),value:t,priority:s});const r=Tn(n),o=Z(t,s),a=js(n.serverSyncTree_,e),l=jo(o,a,r),c=ti(n),h=Bo(n.serverSyncTree_,e,l,c,!0);wn(n.eventQueue_,h),n.server_.put(e.toString(),o.val(!0),(d,f)=>{const p=d==="ok";p||ie("set at "+e+" failed: "+d);const g=Ne(n.serverSyncTree_,c,!p);pe(n.eventQueue_,e,g),ys(n,i,d,f)});const u=si(n,e);ut(n,u),pe(n.eventQueue_,u,[])}function id(n,e,t,s){In(n,"update",{path:e.toString(),value:t});let i=!0;const r=Tn(n),o={};if(ne(t,(a,l)=>{i=!1,o[a]=Vo(q(e,a),Z(l),n.serverSyncTree_,r)}),i)te("update() called with empty data.  Don't do anything."),ys(n,s,"ok",void 0);else{const a=ti(n),l=Sh(n.serverSyncTree_,e,o,a);wn(n.eventQueue_,l),n.server_.merge(e.toString(),t,(c,h)=>{const u=c==="ok";u||ie("update at "+e+" failed: "+c);const d=Ne(n.serverSyncTree_,a,!u),f=d.length>0?ut(n,e):e;pe(n.eventQueue_,f,d),ys(n,s,c,h)}),ne(t,c=>{const h=si(n,q(e,c));ut(n,h)}),pe(n.eventQueue_,e,[])}}function rd(n){In(n,"onDisconnectEvents");const e=Tn(n),t=on();cs(n.onDisconnect_,P(),(i,r)=>{const o=Vo(i,r,n.serverSyncTree_,e);So(t,i,o)});let s=[];cs(t,P(),(i,r)=>{s=s.concat(vn(n.serverSyncTree_,i,r));const o=si(n,i);ut(n,o)}),n.onDisconnect_=on(),pe(n.eventQueue_,P(),s)}function od(n,e,t){let s;A(e._path)===".info"?s=nr(n.infoSyncTree_,e,t):s=nr(n.serverSyncTree_,e,t),Jo(n.eventQueue_,e._path,s)}function or(n,e,t){let s;A(e._path)===".info"?s=ms(n.infoSyncTree_,e,t):s=ms(n.serverSyncTree_,e,t),Jo(n.eventQueue_,e._path,s)}function ad(n){n.persistentConnection_&&n.persistentConnection_.interrupt(Jh)}function In(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),te(t,...e)}function ys(n,e,t,s){e&&_t(()=>{if(t==="ok")e(null);else{const i=(t||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function ta(n,e,t){return js(n.serverSyncTree_,e,t)||T.EMPTY_NODE}function ni(n,e=n.transactionQueueTree_){if(e||Sn(n,e),mt(e)){const t=sa(n,e);m(t.length>0,"Sending zero length transaction queue"),t.every(i=>i.status===0)&&ld(n,Vt(e),t)}else zo(e)&&bn(e,t=>{ni(n,t)})}function ld(n,e,t){const s=t.map(c=>c.currentWriteId),i=ta(n,e,s);let r=i;const o=i.hash();for(let c=0;c<t.length;c++){const h=t[c];m(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const u=oe(e,h.path);r=r.updateChild(u,h.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;n.server_.put(l.toString(),a,c=>{In(n,"transaction put response",{path:l.toString(),status:c});let h=[];if(c==="ok"){const u=[];for(let d=0;d<t.length;d++)t[d].status=2,h=h.concat(Ne(n.serverSyncTree_,t[d].currentWriteId)),t[d].onComplete&&u.push(()=>t[d].onComplete(null,!0,t[d].currentOutputSnapshotResolved)),t[d].unwatcher();Sn(n,Js(n.transactionQueueTree_,e)),ni(n,n.transactionQueueTree_),pe(n.eventQueue_,e,h);for(let d=0;d<u.length;d++)_t(u[d])}else{if(c==="datastale")for(let u=0;u<t.length;u++)t[u].status===3?t[u].status=4:t[u].status=0;else{ie("transaction at "+l.toString()+" failed: "+c);for(let u=0;u<t.length;u++)t[u].status=4,t[u].abortReason=c}ut(n,e)}},o)}function ut(n,e){const t=na(n,e),s=Vt(t),i=sa(n,t);return cd(n,i,s),s}function cd(n,e,t){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=oe(t,l.path);let h=!1,u;if(m(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)h=!0,u=l.abortReason,i=i.concat(Ne(n.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=Zh)h=!0,u="maxretry",i=i.concat(Ne(n.serverSyncTree_,l.currentWriteId,!0));else{const d=ta(n,l.path,o);l.currentInputSnapshot=d;const f=e[a].update(d.val());if(f!==void 0){Cn("transaction failed: Data returned ",f,l.path);let p=Z(f);typeof f=="object"&&f!=null&&ye(f,".priority")||(p=p.updatePriority(d.getPriority()));const y=l.currentWriteId,I=Tn(n),O=jo(p,d,I);l.currentOutputSnapshotRaw=p,l.currentOutputSnapshotResolved=O,l.currentWriteId=ti(n),o.splice(o.indexOf(y),1),i=i.concat(Bo(n.serverSyncTree_,l.path,O,l.currentWriteId,l.applyLocally)),i=i.concat(Ne(n.serverSyncTree_,y,!0))}else h=!0,u="nodata",i=i.concat(Ne(n.serverSyncTree_,l.currentWriteId,!0))}pe(n.eventQueue_,t,i),i=[],h&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(u==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(u),!1,null))))}Sn(n,n.transactionQueueTree_);for(let a=0;a<s.length;a++)_t(s[a]);ni(n,n.transactionQueueTree_)}function na(n,e){let t,s=n.transactionQueueTree_;for(t=A(e);t!==null&&mt(s)===void 0;)s=Js(s,t),e=H(e),t=A(e);return s}function sa(n,e){const t=[];return ia(n,e,t),t.sort((s,i)=>s.order-i.order),t}function ia(n,e,t){const s=mt(e);if(s)for(let i=0;i<s.length;i++)t.push(s[i]);bn(e,i=>{ia(n,i,t)})}function Sn(n,e){const t=mt(e);if(t){let s=0;for(let i=0;i<t.length;i++)t[i].status!==2&&(t[s]=t[i],s++);t.length=s,qo(e,t.length>0?t:void 0)}bn(e,s=>{Sn(n,s)})}function si(n,e){const t=Vt(na(n,e)),s=Js(n.transactionQueueTree_,e);return Wh(s,i=>{Wn(n,i)}),Wn(n,s),Go(s,i=>{Wn(n,i)}),t}function Wn(n,e){const t=mt(e);if(t){const s=[];let i=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(m(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(m(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),i=i.concat(Ne(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&s.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?qo(e,void 0):t.length=r+1,pe(n.eventQueue_,Vt(e),i);for(let o=0;o<s.length;o++)_t(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ud(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let i=t[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function hd(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):ie(`Invalid query segment '${t}' in query '${n}'`)}return e}const ar=function(n,e){const t=dd(n),s=t.namespace;t.domain==="firebase.com"&&we(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&we("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||Cc();const i=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new lo(t.host,t.secure,s,i,e,"",s!==t.subdomain),path:new F(t.pathString)}},dd=function(n){let e="",t="",s="",i="",r="",o=!0,a="https",l=443;if(typeof n=="string"){let c=n.indexOf("//");c>=0&&(a=n.substring(0,c-1),n=n.substring(c+2));let h=n.indexOf("/");h===-1&&(h=n.length);let u=n.indexOf("?");u===-1&&(u=n.length),e=n.substring(0,Math.min(h,u)),h<u&&(i=ud(n.substring(h,u)));const d=hd(n.substring(Math.min(n.length,u)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const f=e.slice(0,c);if(f.toLowerCase()==="localhost")t="localhost";else if(f.split(".").length<=2)t=f;else{const p=e.indexOf(".");s=e.substring(0,p).toLowerCase(),t=e.substring(p+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:l,domain:t,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lr="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",fd=function(){let n=0;const e=[];return function(t){const s=t===n;n=t;let i;const r=new Array(8);for(i=7;i>=0;i--)r[i]=lr.charAt(t%64),t=Math.floor(t/64);m(t===0,"Cannot push at time == 0");let o=r.join("");if(s){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=lr.charAt(e[i]);return m(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(e,t,s,i){this.eventType=e,this.eventRegistration=t,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ee(this.snapshot.exportVal())}}class oa{constructor(e,t,s){this.eventRegistration=e,this.error=t,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _d{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return m(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class ii{constructor(e,t,s,i){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=i}get key(){return x(this._path)?null:Ds(this._path)}get ref(){return new Te(this._repo,this._path)}get _queryIdentifier(){const e=qi(this._queryParams),t=Ss(e);return t==="{}"?"default":t}get _queryObject(){return qi(this._queryParams)}isEqual(e){if(e=ve(e),!(e instanceof ii))return!1;const t=this._repo===e._repo,s=ks(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+ru(this._path)}}class Te extends ii{constructor(e,t){super(e,t,new Ms,!1)}get parent(){const e=yo(this._path);return e===null?null:new Te(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Ut{constructor(e,t,s){this._node=e,this.ref=t,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new F(e),s=ht(this.ref,e);return new Ut(this._node.getChild(t),s,z)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new Ut(i,ht(this.ref,s),z)))}hasChild(e){const t=new F(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function vs(n,e){return n=ve(n),n._checkNotDeleted("ref"),e!==void 0?ht(n._root,e):n._root}function ht(n,e){return n=ve(n),A(n._path)===null?Kh("child","path",e,!1):Qo("child","path",e,!1),new Te(n._repo,q(n._path,e))}function aa(n,e){n=ve(n),Xo("push",n._path),Yo("push",e,n._path,!0);const t=ea(n._repo),s=fd(t),i=ht(n,s),r=ht(n,s);let o;return e!=null?o=pd(r,e).then(()=>r):o=Promise.resolve(r),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function pd(n,e){n=ve(n),Xo("set",n._path),Yo("set",e,n._path,!1);const t=new Bt;return sd(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function x_(n,e){Gh("update",e,n._path,!1);const t=new Bt;return id(n._repo,n._path,e,t.wrapCallback(()=>{})),t.promise}class ri{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const s=t._queryParams.getIndex();return new ra("value",this,new Ut(e.snapshotNode,new Te(t._repo,t._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new oa(this,e,t):null}matches(e){return e instanceof ri?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class oi{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t=e==="children_added"?"child_added":e;return t=t==="children_removed"?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new oa(this,e,t):null}createEvent(e,t){m(e.childName!=null,"Child events should have a childName.");const s=ht(new Te(t._repo,t._path),e.childName),i=t._queryParams.getIndex();return new ra(e.type,this,new Ut(e.snapshotNode,s,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof oi?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function md(n,e,t,s,i){let r;if(typeof s=="object"&&(r=void 0,i=s),typeof s=="function"&&(r=s),i&&i.onlyOnce){const l=t,c=(h,u)=>{or(n._repo,n,a),l(h,u)};c.userCallback=t.userCallback,c.context=t.context,t=c}const o=new _d(t,r||void 0),a=e==="value"?new ri(o):new oi(e,o);return od(n._repo,n,a),()=>or(n._repo,n,a)}function gd(n,e,t,s){return md(n,"value",e,t,s)}gh(Te);wh(Te);/**
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
 */const yd="FIREBASE_DATABASE_EMULATOR_HOST",Es={};let vd=!1;function Ed(n,e,t,s){n.repoInfo_=new lo(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),s&&(n.authTokenProvider_=s)}function bd(n,e,t,s,i){let r=s||n.options.databaseURL;r===void 0&&(n.options.projectId||we("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),te("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=ar(r,i),a=o.repoInfo,l,c;typeof process<"u"&&Ni&&(c=Ni[yd]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=ar(r,i),a=o.repoInfo):l=!o.repoInfo.secure;const h=i&&l?new tt(tt.OWNER):new Oc(n.name,n.options,e);Yh("Invalid Firebase Database URL",o),x(o.path)||we("Database URL must point to the root of a Firebase Database (not including a child path).");const u=wd(a,n,h,new xc(n.name,t));return new Td(u,n)}function Cd(n,e){const t=Es[e];(!t||t[n.key]!==n)&&we(`Database ${e}(${n.repoInfo_}) has already been deleted.`),ad(n),delete t[n.key]}function wd(n,e,t,s){let i=Es[e.name];i||(i={},Es[e.name]=i);let r=i[n.toURLString()];return r&&we("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new ed(n,vd,t,s),i[n.toURLString()]=r,r}class Td{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(td(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Te(this._repo,P())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Cd(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&we("Cannot call "+e+" on a deleted database.")}}function Id(n=qr(),e){const t=$r(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const s=xr("database");s&&Sd(t,...s)}return t}function Sd(n,e,t,s={}){n=ve(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&we("Cannot call useEmulator() after instance has already been initialized.");const i=n._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&we('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new tt(tt.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:Pr(s.mockUserToken,n.app.options.projectId);r=new tt(o)}Ed(i,e,t,r)}/**
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
 */function Nd(n){gc(Vr),Dt(new rt("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return bd(s,i,r,t)},"PUBLIC").setMultipleInstances(!0)),De(Ri,Ai,n),De(Ri,Ai,"esm2017")}Ce.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};Ce.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};Nd();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const la="firebasestorage.googleapis.com",ca="storageBucket",Rd=2*60*1e3,Ad=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K extends ft{constructor(e,t,s=0){super(Hn(e),`Firebase Storage: ${t} (${Hn(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,K.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Hn(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var G;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(G||(G={}));function Hn(n){return"storage/"+n}function ai(){const n="An unknown error occurred, please check the error payload for server response.";return new K(G.UNKNOWN,n)}function Dd(n){return new K(G.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function kd(n){return new K(G.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function xd(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new K(G.UNAUTHENTICATED,n)}function Od(){return new K(G.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Pd(n){return new K(G.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function Md(){return new K(G.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Ld(){return new K(G.CANCELED,"User canceled the upload/download.")}function Fd(n){return new K(G.INVALID_URL,"Invalid URL '"+n+"'.")}function Ud(n){return new K(G.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function Bd(){return new K(G.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+ca+"' property when initializing the app?")}function Wd(){return new K(G.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function Hd(){return new K(G.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function $d(n){return new K(G.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function bs(n){return new K(G.INVALID_ARGUMENT,n)}function ua(){return new K(G.APP_DELETED,"The Firebase app was deleted.")}function Vd(n){return new K(G.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Rt(n,e){return new K(G.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function Ct(n){throw new K(G.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let s;try{s=le.makeFromUrl(e,t)}catch{return new le(e,"")}if(s.path==="")return s;throw Ud(e)}static makeFromUrl(e,t){let s=null;const i="([A-Za-z0-9.\\-_]+)";function r(w){w.path.charAt(w.path.length-1)==="/"&&(w.path_=w.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function c(w){w.path_=decodeURIComponent(w.path)}const h="v[A-Za-z0-9_]+",u=t.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${u}/${h}/b/${i}/o${d}`,"i"),p={bucket:1,path:3},g=t===la?"(?:storage.googleapis.com|storage.cloud.google.com)":t,y="([^?#]*)",I=new RegExp(`^https?://${g}/${i}/${y}`,"i"),C=[{regex:a,indices:l,postModify:r},{regex:f,indices:p,postModify:c},{regex:I,indices:{bucket:1,path:2},postModify:c}];for(let w=0;w<C.length;w++){const L=C[w],v=L.regex.exec(e);if(v){const E=v[L.indices.bucket];let N=v[L.indices.path];N||(N=""),s=new le(E,N),L.postModify(s);break}}if(s==null)throw Fd(e);return s}}class jd{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qd(n,e,t){let s=1,i=null,r=null,o=!1,a=0;function l(){return a===2}let c=!1;function h(...y){c||(c=!0,e.apply(null,y))}function u(y){i=setTimeout(()=>{i=null,n(f,l())},y)}function d(){r&&clearTimeout(r)}function f(y,...I){if(c){d();return}if(y){d(),h.call(null,y,...I);return}if(l()||o){d(),h.call(null,y,...I);return}s<64&&(s*=2);let C;a===1?(a=2,C=0):C=(s+Math.random())*1e3,u(C)}let p=!1;function g(y){p||(p=!0,d(),!c&&(i!==null?(y||(a=2),clearTimeout(i),u(0)):y||(a=1)))}return u(0),r=setTimeout(()=>{o=!0,g(!0)},t),g}function zd(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gd(n){return n!==void 0}function Kd(n){return typeof n=="object"&&!Array.isArray(n)}function li(n){return typeof n=="string"||n instanceof String}function cr(n){return ci()&&n instanceof Blob}function ci(){return typeof Blob<"u"}function ur(n,e,t,s){if(s<e)throw bs(`Invalid value for '${n}'. Expected ${e} or greater.`);if(s>t)throw bs(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ui(n,e,t){let s=e;return t==null&&(s=`https://${e}`),`${t}://${s}/v0${n}`}function ha(n){const e=encodeURIComponent;let t="?";for(const s in n)if(n.hasOwnProperty(s)){const i=e(s)+"="+e(n[s]);t=t+i+"&"}return t=t.slice(0,-1),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ve;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Ve||(Ve={}));/**
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
 */function Yd(n,e){const t=n>=500&&n<600,i=[408,429].indexOf(n)!==-1,r=e.indexOf(n)!==-1;return t||i||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{constructor(e,t,s,i,r,o,a,l,c,h,u,d=!0){this.url_=e,this.method_=t,this.headers_=s,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=h,this.connectionFactory_=u,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,p)=>{this.resolve_=f,this.reject_=p,this.start_()})}start_(){const e=(s,i)=>{if(i){s(!1,new Kt(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===Ve.NO_ERROR,l=r.getStatus();if(!a||Yd(l,this.additionalRetryCodes_)&&this.retry){const h=r.getErrorCode()===Ve.ABORT;s(!1,new Kt(!1,null,h));return}const c=this.successCodes_.indexOf(l)!==-1;s(!0,new Kt(c,r))})},t=(s,i)=>{const r=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());Gd(l)?r(l):r()}catch(l){o(l)}else if(a!==null){const l=ai();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?ua():Ld();o(l)}else{const l=Md();o(l)}};this.canceled_?t(!1,new Kt(!1,null,!0)):this.backoffId_=qd(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&zd(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Kt{constructor(e,t,s){this.wasSuccessCode=e,this.connection=t,this.canceled=!!s}}function Xd(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function Jd(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Zd(n,e){e&&(n["X-Firebase-GMPID"]=e)}function ef(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function tf(n,e,t,s,i,r,o=!0){const a=ha(n.urlParams),l=n.url+a,c=Object.assign({},n.headers);return Zd(c,e),Xd(c,t),Jd(c,r),ef(c,s),new Qd(l,n.method,c,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nf(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function sf(...n){const e=nf();if(e!==void 0){const t=new e;for(let s=0;s<n.length;s++)t.append(n[s]);return t.getBlob()}else{if(ci())return new Blob(n);throw new K(G.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function rf(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
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
 */function of(n){if(typeof atob>"u")throw $d("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ge={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class $n{constructor(e,t){this.data=e,this.contentType=t||null}}function af(n,e){switch(n){case ge.RAW:return new $n(da(e));case ge.BASE64:case ge.BASE64URL:return new $n(fa(n,e));case ge.DATA_URL:return new $n(cf(e),uf(e))}throw ai()}function da(n){const e=[];for(let t=0;t<n.length;t++){let s=n.charCodeAt(t);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const r=s,o=n.charCodeAt(++t);s=65536|(r&1023)<<10|o&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function lf(n){let e;try{e=decodeURIComponent(n)}catch{throw Rt(ge.DATA_URL,"Malformed data URL.")}return da(e)}function fa(n,e){switch(n){case ge.BASE64:{const i=e.indexOf("-")!==-1,r=e.indexOf("_")!==-1;if(i||r)throw Rt(n,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case ge.BASE64URL:{const i=e.indexOf("+")!==-1,r=e.indexOf("/")!==-1;if(i||r)throw Rt(n,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=of(e)}catch(i){throw i.message.includes("polyfill")?i:Rt(n,"Invalid character found")}const s=new Uint8Array(t.length);for(let i=0;i<t.length;i++)s[i]=t.charCodeAt(i);return s}class _a{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw Rt(ge.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=t[1]||null;s!=null&&(this.base64=hf(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=e.substring(e.indexOf(",")+1)}}function cf(n){const e=new _a(n);return e.base64?fa(ge.BASE64,e.rest):lf(e.rest)}function uf(n){return new _a(n).contentType}function hf(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e,t){let s=0,i="";cr(e)?(this.data_=e,s=e.size,i=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,t){if(cr(this.data_)){const s=this.data_,i=rf(s,e,t);return i===null?null:new Se(i)}else{const s=new Uint8Array(this.data_.buffer,e,t-e);return new Se(s,!0)}}static getBlob(...e){if(ci()){const t=e.map(s=>s instanceof Se?s.data_:s);return new Se(sf.apply(null,t))}else{const t=e.map(o=>li(o)?af(ge.RAW,o).data:o.data_);let s=0;t.forEach(o=>{s+=o.byteLength});const i=new Uint8Array(s);let r=0;return t.forEach(o=>{for(let a=0;a<o.length;a++)i[r++]=o[a]}),new Se(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pa(n){let e;try{e=JSON.parse(n)}catch{return null}return Kd(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function df(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function ff(n,e){const t=e.split("/").filter(s=>s.length>0).join("/");return n.length===0?t:n+"/"+t}function ma(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _f(n,e){return e}class se{constructor(e,t,s,i){this.server=e,this.local=t||e,this.writable=!!s,this.xform=i||_f}}let Yt=null;function pf(n){return!li(n)||n.length<2?n:ma(n)}function ga(){if(Yt)return Yt;const n=[];n.push(new se("bucket")),n.push(new se("generation")),n.push(new se("metageneration")),n.push(new se("name","fullPath",!0));function e(r,o){return pf(o)}const t=new se("name");t.xform=e,n.push(t);function s(r,o){return o!==void 0?Number(o):o}const i=new se("size");return i.xform=s,n.push(i),n.push(new se("timeCreated")),n.push(new se("updated")),n.push(new se("md5Hash",null,!0)),n.push(new se("cacheControl",null,!0)),n.push(new se("contentDisposition",null,!0)),n.push(new se("contentEncoding",null,!0)),n.push(new se("contentLanguage",null,!0)),n.push(new se("contentType",null,!0)),n.push(new se("metadata","customMetadata",!0)),Yt=n,Yt}function mf(n,e){function t(){const s=n.bucket,i=n.fullPath,r=new le(s,i);return e._makeStorageReference(r)}Object.defineProperty(n,"ref",{get:t})}function gf(n,e,t){const s={};s.type="file";const i=t.length;for(let r=0;r<i;r++){const o=t[r];s[o.local]=o.xform(s,e[o.server])}return mf(s,n),s}function ya(n,e,t){const s=pa(e);return s===null?null:gf(n,s,t)}function yf(n,e,t,s){const i=pa(e);if(i===null||!li(i.downloadTokens))return null;const r=i.downloadTokens;if(r.length===0)return null;const o=encodeURIComponent;return r.split(",").map(c=>{const h=n.bucket,u=n.fullPath,d="/b/"+o(h)+"/o/"+o(u),f=ui(d,t,s),p=ha({alt:"media",token:c});return f+p})[0]}function vf(n,e){const t={},s=e.length;for(let i=0;i<s;i++){const r=e[i];r.writable&&(t[r.server]=n[r.local])}return JSON.stringify(t)}class va{constructor(e,t,s,i){this.url=e,this.method=t,this.handler=s,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ea(n){if(!n)throw ai()}function Ef(n,e){function t(s,i){const r=ya(n,i,e);return Ea(r!==null),r}return t}function bf(n,e){function t(s,i){const r=ya(n,i,e);return Ea(r!==null),yf(r,i,n.host,n._protocol)}return t}function ba(n){function e(t,s){let i;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?i=Od():i=xd():t.getStatus()===402?i=kd(n.bucket):t.getStatus()===403?i=Pd(n.path):i=s,i.status=t.getStatus(),i.serverResponse=s.serverResponse,i}return e}function Cf(n){const e=ba(n);function t(s,i){let r=e(s,i);return s.getStatus()===404&&(r=Dd(n.path)),r.serverResponse=i.serverResponse,r}return t}function wf(n,e,t){const s=e.fullServerUrl(),i=ui(s,n.host,n._protocol),r="GET",o=n.maxOperationRetryTime,a=new va(i,r,bf(n,t),o);return a.errorHandler=Cf(e),a}function Tf(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function If(n,e,t){const s=Object.assign({},t);return s.fullPath=n.path,s.size=e.size(),s.contentType||(s.contentType=Tf(null,e)),s}function Sf(n,e,t,s,i){const r=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let C="";for(let w=0;w<2;w++)C=C+Math.random().toString().slice(2);return C}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const c=If(e,s,i),h=vf(c,t),u="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+h+`\r
--`+l+`\r
Content-Type: `+c.contentType+`\r
\r
`,d=`\r
--`+l+"--",f=Se.getBlob(u,s,d);if(f===null)throw Wd();const p={name:c.fullPath},g=ui(r,n.host,n._protocol),y="POST",I=n.maxUploadRetryTime,O=new va(g,y,Ef(n,t),I);return O.urlParams=p,O.headers=o,O.body=f.uploadData(),O.errorHandler=ba(e),O}class Nf{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Ve.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Ve.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Ve.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,s,i){if(this.sent_)throw Ct("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),i!==void 0)for(const r in i)i.hasOwnProperty(r)&&this.xhr_.setRequestHeader(r,i[r].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Ct("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Ct("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Ct("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Ct("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class Rf extends Nf{initXhr(){this.xhr_.responseType="text"}}function Ca(){return new Rf}/**
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
 */class Ye{constructor(e,t){this._service=e,t instanceof le?this._location=t:this._location=le.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Ye(e,t)}get root(){const e=new le(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return ma(this._location.path)}get storage(){return this._service}get parent(){const e=df(this._location.path);if(e===null)return null;const t=new le(this._location.bucket,e);return new Ye(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw Vd(e)}}function Af(n,e,t){n._throwIfRoot("uploadBytes");const s=Sf(n.storage,n._location,ga(),new Se(e,!0),t);return n.storage.makeRequestWithTokens(s,Ca).then(i=>({metadata:i,ref:n}))}function Df(n){n._throwIfRoot("getDownloadURL");const e=wf(n.storage,n._location,ga());return n.storage.makeRequestWithTokens(e,Ca).then(t=>{if(t===null)throw Hd();return t})}function kf(n,e){const t=ff(n._location.path,e),s=new le(n._location.bucket,t);return new Ye(n.storage,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xf(n){return/^[A-Za-z]+:\/\//.test(n)}function Of(n,e){return new Ye(n,e)}function wa(n,e){if(n instanceof hi){const t=n;if(t._bucket==null)throw Bd();const s=new Ye(t,t._bucket);return e!=null?wa(s,e):s}else return e!==void 0?kf(n,e):n}function Pf(n,e){if(e&&xf(e)){if(n instanceof hi)return Of(n,e);throw bs("To use ref(service, url), the first argument must be a Storage instance.")}else return wa(n,e)}function hr(n,e){const t=e==null?void 0:e[ca];return t==null?null:le.makeFromBucketSpec(t,n)}function Mf(n,e,t,s={}){n.host=`${e}:${t}`,n._protocol="http";const{mockUserToken:i}=s;i&&(n._overrideAuthToken=typeof i=="string"?i:Pr(i,n.app.options.projectId))}class hi{constructor(e,t,s,i,r){this.app=e,this._authProvider=t,this._appCheckProvider=s,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=la,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Rd,this._maxUploadRetryTime=Ad,this._requests=new Set,i!=null?this._bucket=le.makeFromBucketSpec(i,this._host):this._bucket=hr(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=le.makeFromBucketSpec(this._url,e):this._bucket=hr(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){ur("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){ur("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ye(this,e)}_makeRequest(e,t,s,i,r=!0){if(this._deleted)return new jd(ua());{const o=tf(e,this._appId,s,i,t,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,t){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,s,i).getPromise()}}const dr="@firebase/storage",fr="0.12.4";/**
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
 */const Ta="storage";function Lf(n,e,t){return n=ve(n),Af(n,e,t)}function Ff(n){return n=ve(n),Df(n)}function Uf(n,e){return n=ve(n),Pf(n,e)}function Ia(n=qr(),e){n=ve(n);const s=$r(n,Ta).getImmediate({identifier:e}),i=xr("storage");return i&&Bf(s,...i),s}function Bf(n,e,t,s={}){Mf(n,e,t,s)}function Wf(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),s=n.getProvider("auth-internal"),i=n.getProvider("app-check-internal");return new hi(t,s,i,e,Vr)}function Hf(){Dt(new rt(Ta,Wf,"PUBLIC").setMultipleInstances(!0)),De(dr,fr,""),De(dr,fr,"esm2017")}Hf();const $f={apiKey:"AIzaSyD1bUd4QHmDnXtuA1SZgvxiaRcmuEVLpWo",authDomain:"instagram-imitation-180e8.firebaseapp.com",databaseURL:"https://instagram-imitation-180e8-default-rtdb.firebaseio.com",projectId:"instagram-imitation-180e8",storageBucket:"instagram-imitation-180e8.appspot.com",messagingSenderId:"266282768545",appId:"1:266282768545:web:07dbf92d25e2a93b3078e0"},di=jr($f),Cs=Id(di);Ia(di);const Vf="/Instagram-Imitation/assets/Instagram_logo_light-WGj1KLTg.png";var Sa={exports:{}},Qt={exports:{}};/*!
  * Bootstrap index.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var _r;function Pe(){return _r||(_r=1,function(n,e){(function(t,s){s(e)})(ue,function(t){const r="transitionend",o=_=>_==null?`${_}`:Object.prototype.toString.call(_).match(/\s([a-z]+)/i)[1].toLowerCase(),a=_=>{do _+=Math.floor(Math.random()*1e6);while(document.getElementById(_));return _},l=_=>{let b=_.getAttribute("data-bs-target");if(!b||b==="#"){let S=_.getAttribute("href");if(!S||!S.includes("#")&&!S.startsWith("."))return null;S.includes("#")&&!S.startsWith("#")&&(S=`#${S.split("#")[1]}`),b=S&&S!=="#"?S.trim():null}return b},c=_=>{const b=l(_);return b&&document.querySelector(b)?b:null},h=_=>{const b=l(_);return b?document.querySelector(b):null},u=_=>{if(!_)return 0;let{transitionDuration:b,transitionDelay:S}=window.getComputedStyle(_);const j=Number.parseFloat(b),V=Number.parseFloat(S);return!j&&!V?0:(b=b.split(",")[0],S=S.split(",")[0],(Number.parseFloat(b)+Number.parseFloat(S))*1e3)},d=_=>{_.dispatchEvent(new Event(r))},f=_=>!_||typeof _!="object"?!1:(typeof _.jquery<"u"&&(_=_[0]),typeof _.nodeType<"u"),p=_=>f(_)?_.jquery?_[0]:_:typeof _=="string"&&_.length>0?document.querySelector(_):null,g=_=>{if(!f(_)||_.getClientRects().length===0)return!1;const b=getComputedStyle(_).getPropertyValue("visibility")==="visible",S=_.closest("details:not([open])");if(!S)return b;if(S!==_){const j=_.closest("summary");if(j&&j.parentNode!==S||j===null)return!1}return b},y=_=>!_||_.nodeType!==Node.ELEMENT_NODE||_.classList.contains("disabled")?!0:typeof _.disabled<"u"?_.disabled:_.hasAttribute("disabled")&&_.getAttribute("disabled")!=="false",I=_=>{if(!document.documentElement.attachShadow)return null;if(typeof _.getRootNode=="function"){const b=_.getRootNode();return b instanceof ShadowRoot?b:null}return _ instanceof ShadowRoot?_:_.parentNode?I(_.parentNode):null},O=()=>{},C=_=>{_.offsetHeight},w=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,L=[],v=_=>{document.readyState==="loading"?(L.length||document.addEventListener("DOMContentLoaded",()=>{for(const b of L)b()}),L.push(_)):_()},E=()=>document.documentElement.dir==="rtl",N=_=>{v(()=>{const b=w();if(b){const S=_.NAME,j=b.fn[S];b.fn[S]=_.jQueryInterface,b.fn[S].Constructor=_,b.fn[S].noConflict=()=>(b.fn[S]=j,_.jQueryInterface)}})},k=_=>{typeof _=="function"&&_()},$=(_,b,S=!0)=>{if(!S){k(_);return}const V=u(b)+5;let Y=!1;const re=({target:Ee})=>{Ee===b&&(Y=!0,b.removeEventListener(r,re),k(_))};b.addEventListener(r,re),setTimeout(()=>{Y||d(b)},V)},U=(_,b,S,j)=>{const V=_.length;let Y=_.indexOf(b);return Y===-1?!S&&j?_[V-1]:_[0]:(Y+=S?1:-1,j&&(Y=(Y+V)%V),_[Math.max(0,Math.min(Y,V-1))])};t.defineJQueryPlugin=N,t.execute=k,t.executeAfterTransition=$,t.findShadowRoot=I,t.getElement=p,t.getElementFromSelector=h,t.getNextActiveElement=U,t.getSelectorFromElement=c,t.getTransitionDurationFromElement=u,t.getUID=a,t.getjQuery=w,t.isDisabled=y,t.isElement=f,t.isRTL=E,t.isVisible=g,t.noop=O,t.onDOMContentLoaded=v,t.reflow=C,t.toType=o,t.triggerTransitionEnd=d,Object.defineProperties(t,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})})}(Qt,Qt.exports)),Qt.exports}var Vn={exports:{}};/*!
  * Bootstrap event-handler.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var pr;function jt(){return pr||(pr=1,function(n,e){(function(t,s){n.exports=s(Pe())})(ue,function(t){const s=/[^.]*(?=\..*)\.|.*/,i=/\..*/,r=/::\d+$/,o={};let a=1;const l={mouseenter:"mouseover",mouseleave:"mouseout"},c=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function h(v,E){return E&&`${E}::${a++}`||v.uidEvent||a++}function u(v){const E=h(v);return v.uidEvent=E,o[E]=o[E]||{},o[E]}function d(v,E){return function N(k){return L(k,{delegateTarget:v}),N.oneOff&&w.off(v,k.type,E),E.apply(v,[k])}}function f(v,E,N){return function k($){const U=v.querySelectorAll(E);for(let{target:_}=$;_&&_!==this;_=_.parentNode)for(const b of U)if(b===_)return L($,{delegateTarget:_}),k.oneOff&&w.off(v,$.type,E,N),N.apply(_,[$])}}function p(v,E,N=null){return Object.values(v).find(k=>k.callable===E&&k.delegationSelector===N)}function g(v,E,N){const k=typeof E=="string",$=k?N:E||N;let U=C(v);return c.has(U)||(U=v),[k,$,U]}function y(v,E,N,k,$){if(typeof E!="string"||!v)return;let[U,_,b]=g(E,N,k);E in l&&(_=(Nn=>function(Ie){if(!Ie.relatedTarget||Ie.relatedTarget!==Ie.delegateTarget&&!Ie.delegateTarget.contains(Ie.relatedTarget))return Nn.call(this,Ie)})(_));const S=u(v),j=S[b]||(S[b]={}),V=p(j,_,U?N:null);if(V){V.oneOff=V.oneOff&&$;return}const Y=h(_,E.replace(s,"")),re=U?f(v,N,_):d(v,_);re.delegationSelector=U?N:null,re.callable=_,re.oneOff=$,re.uidEvent=Y,j[Y]=re,v.addEventListener(b,re,U)}function I(v,E,N,k,$){const U=p(E[N],k,$);U&&(v.removeEventListener(N,U,!!$),delete E[N][U.uidEvent])}function O(v,E,N,k){const $=E[N]||{};for(const U of Object.keys($))if(U.includes(k)){const _=$[U];I(v,E,N,_.callable,_.delegationSelector)}}function C(v){return v=v.replace(i,""),l[v]||v}const w={on(v,E,N,k){y(v,E,N,k,!1)},one(v,E,N,k){y(v,E,N,k,!0)},off(v,E,N,k){if(typeof E!="string"||!v)return;const[$,U,_]=g(E,N,k),b=_!==E,S=u(v),j=S[_]||{},V=E.startsWith(".");if(typeof U<"u"){if(!Object.keys(j).length)return;I(v,S,_,U,$?N:null);return}if(V)for(const Y of Object.keys(S))O(v,S,Y,E.slice(1));for(const Y of Object.keys(j)){const re=Y.replace(r,"");if(!b||E.includes(re)){const Ee=j[Y];I(v,S,_,Ee.callable,Ee.delegationSelector)}}},trigger(v,E,N){if(typeof E!="string"||!v)return null;const k=t.getjQuery(),$=C(E),U=E!==$;let _=null,b=!0,S=!0,j=!1;U&&k&&(_=k.Event(E,N),k(v).trigger(_),b=!_.isPropagationStopped(),S=!_.isImmediatePropagationStopped(),j=_.isDefaultPrevented());let V=new Event(E,{bubbles:b,cancelable:!0});return V=L(V,N),j&&V.preventDefault(),S&&v.dispatchEvent(V),V.defaultPrevented&&_&&_.preventDefault(),V}};function L(v,E){for(const[N,k]of Object.entries(E||{}))try{v[N]=k}catch{Object.defineProperty(v,N,{configurable:!0,get(){return k}})}return v}return w})}(Vn)),Vn.exports}var jn={exports:{}};/*!
  * Bootstrap selector-engine.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var mr;function fi(){return mr||(mr=1,function(n,e){(function(t,s){n.exports=s(Pe())})(ue,function(t){return{find(i,r=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(r,i))},findOne(i,r=document.documentElement){return Element.prototype.querySelector.call(r,i)},children(i,r){return[].concat(...i.children).filter(o=>o.matches(r))},parents(i,r){const o=[];let a=i.parentNode.closest(r);for(;a;)o.push(a),a=a.parentNode.closest(r);return o},prev(i,r){let o=i.previousElementSibling;for(;o;){if(o.matches(r))return[o];o=o.previousElementSibling}return[]},next(i,r){let o=i.nextElementSibling;for(;o;){if(o.matches(r))return[o];o=o.nextElementSibling}return[]},focusableChildren(i){const r=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(o=>`${o}:not([tabindex^="-"])`).join(",");return this.find(r,i).filter(o=>!t.isDisabled(o)&&t.isVisible(o))}}})}(jn)),jn.exports}var qn={exports:{}},zn={exports:{}};/*!
  * Bootstrap manipulator.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var gr;function Na(){return gr||(gr=1,function(n,e){(function(t,s){n.exports=s()})(ue,function(){function t(r){if(r==="true")return!0;if(r==="false")return!1;if(r===Number(r).toString())return Number(r);if(r===""||r==="null")return null;if(typeof r!="string")return r;try{return JSON.parse(decodeURIComponent(r))}catch{return r}}function s(r){return r.replace(/[A-Z]/g,o=>`-${o.toLowerCase()}`)}return{setDataAttribute(r,o,a){r.setAttribute(`data-bs-${s(o)}`,a)},removeDataAttribute(r,o){r.removeAttribute(`data-bs-${s(o)}`)},getDataAttributes(r){if(!r)return{};const o={},a=Object.keys(r.dataset).filter(l=>l.startsWith("bs")&&!l.startsWith("bsConfig"));for(const l of a){let c=l.replace(/^bs/,"");c=c.charAt(0).toLowerCase()+c.slice(1,c.length),o[c]=t(r.dataset[l])}return o},getDataAttribute(r,o){return t(r.getAttribute(`data-bs-${s(o)}`))}}})}(zn)),zn.exports}/*!
  * Bootstrap scrollbar.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var yr;function jf(){return yr||(yr=1,function(n,e){(function(t,s){n.exports=s(fi(),Na(),Pe())})(ue,function(t,s,i){const r=f=>f&&typeof f=="object"&&"default"in f?f:{default:f},o=r(t),a=r(s),l=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",c=".sticky-top",h="padding-right",u="margin-right";class d{constructor(){this._element=document.body}getWidth(){const p=document.documentElement.clientWidth;return Math.abs(window.innerWidth-p)}hide(){const p=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,h,g=>g+p),this._setElementAttributes(l,h,g=>g+p),this._setElementAttributes(c,u,g=>g-p)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,h),this._resetElementAttributes(l,h),this._resetElementAttributes(c,u)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(p,g,y){const I=this.getWidth(),O=C=>{if(C!==this._element&&window.innerWidth>C.clientWidth+I)return;this._saveInitialAttribute(C,g);const w=window.getComputedStyle(C).getPropertyValue(g);C.style.setProperty(g,`${y(Number.parseFloat(w))}px`)};this._applyManipulationCallback(p,O)}_saveInitialAttribute(p,g){const y=p.style.getPropertyValue(g);y&&a.default.setDataAttribute(p,g,y)}_resetElementAttributes(p,g){const y=I=>{const O=a.default.getDataAttribute(I,g);if(O===null){I.style.removeProperty(g);return}a.default.removeDataAttribute(I,g),I.style.setProperty(g,O)};this._applyManipulationCallback(p,y)}_applyManipulationCallback(p,g){if(i.isElement(p)){g(p);return}for(const y of o.default.find(p,this._element))g(y)}}return d})}(qn)),qn.exports}var Gn={exports:{}},Kn={exports:{}};/*!
  * Bootstrap data.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var vr;function qf(){return vr||(vr=1,function(n,e){(function(t,s){n.exports=s()})(ue,function(){const t=new Map;return{set(i,r,o){t.has(i)||t.set(i,new Map);const a=t.get(i);if(!a.has(r)&&a.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(a.keys())[0]}.`);return}a.set(r,o)},get(i,r){return t.has(i)&&t.get(i).get(r)||null},remove(i,r){if(!t.has(i))return;const o=t.get(i);o.delete(r),o.size===0&&t.delete(i)}}})}(Kn)),Kn.exports}var Yn={exports:{}};/*!
  * Bootstrap config.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var Er;function _i(){return Er||(Er=1,function(n,e){(function(t,s){n.exports=s(Pe(),Na())})(ue,function(t,s){const r=(a=>a&&typeof a=="object"&&"default"in a?a:{default:a})(s);class o{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(l){return l=this._mergeConfigObj(l),l=this._configAfterMerge(l),this._typeCheckConfig(l),l}_configAfterMerge(l){return l}_mergeConfigObj(l,c){const h=t.isElement(c)?r.default.getDataAttribute(c,"config"):{};return{...this.constructor.Default,...typeof h=="object"?h:{},...t.isElement(c)?r.default.getDataAttributes(c):{},...typeof l=="object"?l:{}}}_typeCheckConfig(l,c=this.constructor.DefaultType){for(const h of Object.keys(c)){const u=c[h],d=l[h],f=t.isElement(d)?"element":t.toType(d);if(!new RegExp(u).test(f))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${h}" provided type "${f}" but expected type "${u}".`)}}}return o})}(Yn)),Yn.exports}/*!
  * Bootstrap base-component.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var br;function zf(){return br||(br=1,function(n,e){(function(t,s){n.exports=s(qf(),Pe(),jt(),_i())})(ue,function(t,s,i,r){const o=d=>d&&typeof d=="object"&&"default"in d?d:{default:d},a=o(t),l=o(i),c=o(r),h="5.2.3";class u extends c.default{constructor(f,p){super(),f=s.getElement(f),f&&(this._element=f,this._config=this._getConfig(p),a.default.set(this._element,this.constructor.DATA_KEY,this))}dispose(){a.default.remove(this._element,this.constructor.DATA_KEY),l.default.off(this._element,this.constructor.EVENT_KEY);for(const f of Object.getOwnPropertyNames(this))this[f]=null}_queueCallback(f,p,g=!0){s.executeAfterTransition(f,p,g)}_getConfig(f){return f=this._mergeConfigObj(f,this._element),f=this._configAfterMerge(f),this._typeCheckConfig(f),f}static getInstance(f){return a.default.get(s.getElement(f),this.DATA_KEY)}static getOrCreateInstance(f,p={}){return this.getInstance(f)||new this(f,typeof p=="object"?p:null)}static get VERSION(){return h}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(f){return`${f}${this.EVENT_KEY}`}}return u})}(Gn)),Gn.exports}var Qn={exports:{}};/*!
  * Bootstrap backdrop.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var Cr;function Gf(){return Cr||(Cr=1,function(n,e){(function(t,s){n.exports=s(jt(),Pe(),_i())})(ue,function(t,s,i){const r=g=>g&&typeof g=="object"&&"default"in g?g:{default:g},o=r(t),a=r(i),l="backdrop",c="fade",h="show",u=`mousedown.bs.${l}`,d={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},f={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class p extends a.default{constructor(y){super(),this._config=this._getConfig(y),this._isAppended=!1,this._element=null}static get Default(){return d}static get DefaultType(){return f}static get NAME(){return l}show(y){if(!this._config.isVisible){s.execute(y);return}this._append();const I=this._getElement();this._config.isAnimated&&s.reflow(I),I.classList.add(h),this._emulateAnimation(()=>{s.execute(y)})}hide(y){if(!this._config.isVisible){s.execute(y);return}this._getElement().classList.remove(h),this._emulateAnimation(()=>{this.dispose(),s.execute(y)})}dispose(){this._isAppended&&(o.default.off(this._element,u),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const y=document.createElement("div");y.className=this._config.className,this._config.isAnimated&&y.classList.add(c),this._element=y}return this._element}_configAfterMerge(y){return y.rootElement=s.getElement(y.rootElement),y}_append(){if(this._isAppended)return;const y=this._getElement();this._config.rootElement.append(y),o.default.on(y,u,()=>{s.execute(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(y){s.executeAfterTransition(y,this._getElement(),this._config.isAnimated)}}return p})}(Qn)),Qn.exports}var Xn={exports:{}};/*!
  * Bootstrap focustrap.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var wr;function Kf(){return wr||(wr=1,function(n,e){(function(t,s){n.exports=s(jt(),fi(),_i())})(ue,function(t,s,i){const r=w=>w&&typeof w=="object"&&"default"in w?w:{default:w},o=r(t),a=r(s),l=r(i),c="focustrap",u=".bs.focustrap",d=`focusin${u}`,f=`keydown.tab${u}`,p="Tab",g="forward",y="backward",I={autofocus:!0,trapElement:null},O={autofocus:"boolean",trapElement:"element"};class C extends l.default{constructor(L){super(),this._config=this._getConfig(L),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return I}static get DefaultType(){return O}static get NAME(){return c}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),o.default.off(document,u),o.default.on(document,d,L=>this._handleFocusin(L)),o.default.on(document,f,L=>this._handleKeydown(L)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,o.default.off(document,u))}_handleFocusin(L){const{trapElement:v}=this._config;if(L.target===document||L.target===v||v.contains(L.target))return;const E=a.default.focusableChildren(v);E.length===0?v.focus():this._lastTabNavDirection===y?E[E.length-1].focus():E[0].focus()}_handleKeydown(L){L.key===p&&(this._lastTabNavDirection=L.shiftKey?y:g)}}return C})}(Xn)),Xn.exports}var Xt={exports:{}};/*!
  * Bootstrap component-functions.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var Tr;function Yf(){return Tr||(Tr=1,function(n,e){(function(t,s){s(e,jt(),Pe())})(ue,function(t,s,i){const o=(l=>l&&typeof l=="object"&&"default"in l?l:{default:l})(s),a=(l,c="hide")=>{const h=`click.dismiss${l.EVENT_KEY}`,u=l.NAME;o.default.on(document,h,`[data-bs-dismiss="${u}"]`,function(d){if(["A","AREA"].includes(this.tagName)&&d.preventDefault(),i.isDisabled(this))return;const f=i.getElementFromSelector(this)||this.closest(`.${u}`);l.getOrCreateInstance(f)[c]()})};t.enableDismissTrigger=a,Object.defineProperties(t,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})})}(Xt,Xt.exports)),Xt.exports}/*!
  * Bootstrap modal.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */(function(n,e){(function(t,s){n.exports=s(Pe(),jt(),fi(),jf(),zf(),Gf(),Kf(),Yf())})(ue,function(t,s,i,r,o,a,l,c){const h=Le=>Le&&typeof Le=="object"&&"default"in Le?Le:{default:Le},u=h(s),d=h(i),f=h(r),p=h(o),g=h(a),y=h(l),I="modal",C=".bs.modal",w=".data-api",L="Escape",v=`hide${C}`,E=`hidePrevented${C}`,N=`hidden${C}`,k=`show${C}`,$=`shown${C}`,U=`resize${C}`,_=`click.dismiss${C}`,b=`mousedown.dismiss${C}`,S=`keydown.dismiss${C}`,j=`click${C}${w}`,V="modal-open",Y="fade",re="show",Ee="modal-static",Nn=".modal.show",Ie=".modal-dialog",Ra=".modal-body",Aa='[data-bs-toggle="modal"]',Da={backdrop:!0,focus:!0,keyboard:!0},ka={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class Me extends p.default{constructor(M,Q){super(M,Q),this._dialog=d.default.findOne(Ie,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new f.default,this._addEventListeners()}static get Default(){return Da}static get DefaultType(){return ka}static get NAME(){return I}toggle(M){return this._isShown?this.hide():this.show(M)}show(M){this._isShown||this._isTransitioning||u.default.trigger(this._element,k,{relatedTarget:M}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(V),this._adjustDialog(),this._backdrop.show(()=>this._showElement(M)))}hide(){!this._isShown||this._isTransitioning||u.default.trigger(this._element,v).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(re),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){for(const M of[window,this._dialog])u.default.off(M,C);this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new g.default({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new y.default({trapElement:this._element})}_showElement(M){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const Q=d.default.findOne(Ra,this._dialog);Q&&(Q.scrollTop=0),t.reflow(this._element),this._element.classList.add(re);const he=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,u.default.trigger(this._element,$,{relatedTarget:M})};this._queueCallback(he,this._dialog,this._isAnimated())}_addEventListeners(){u.default.on(this._element,S,M=>{if(M.key===L){if(this._config.keyboard){M.preventDefault(),this.hide();return}this._triggerBackdropTransition()}}),u.default.on(window,U,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),u.default.on(this._element,b,M=>{u.default.one(this._element,_,Q=>{if(!(this._element!==M.target||this._element!==Q.target)){if(this._config.backdrop==="static"){this._triggerBackdropTransition();return}this._config.backdrop&&this.hide()}})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(V),this._resetAdjustments(),this._scrollBar.reset(),u.default.trigger(this._element,N)})}_isAnimated(){return this._element.classList.contains(Y)}_triggerBackdropTransition(){if(u.default.trigger(this._element,E).defaultPrevented)return;const Q=this._element.scrollHeight>document.documentElement.clientHeight,he=this._element.style.overflowY;he==="hidden"||this._element.classList.contains(Ee)||(Q||(this._element.style.overflowY="hidden"),this._element.classList.add(Ee),this._queueCallback(()=>{this._element.classList.remove(Ee),this._queueCallback(()=>{this._element.style.overflowY=he},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const M=this._element.scrollHeight>document.documentElement.clientHeight,Q=this._scrollBar.getWidth(),he=Q>0;if(he&&!M){const gt=t.isRTL()?"paddingLeft":"paddingRight";this._element.style[gt]=`${Q}px`}if(!he&&M){const gt=t.isRTL()?"paddingRight":"paddingLeft";this._element.style[gt]=`${Q}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(M,Q){return this.each(function(){const he=Me.getOrCreateInstance(this,M);if(typeof M=="string"){if(typeof he[M]>"u")throw new TypeError(`No method named "${M}"`);he[M](Q)}})}}return u.default.on(document,j,Aa,function(Le){const M=t.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&Le.preventDefault(),u.default.one(M,k,gt=>{gt.defaultPrevented||u.default.one(M,N,()=>{t.isVisible(this)&&this.focus()})});const Q=d.default.findOne(Nn);Q&&Me.getInstance(Q).hide(),Me.getOrCreateInstance(M).toggle(this)}),c.enableDismissTrigger(Me),t.defineJQueryPlugin(Me),Me})})(Sa);var Qf=Sa.exports;const Xf=xa(Qf),Jf=Oa("userDataList",()=>{const n=me(null);async function e(){try{const i=localStorage.getItem("long-lived-access-token"),r=localStorage.getItem("user_id");if(!i||!r)throw new Error("Access token or user ID is missing.");const o=await Pa.get(`https://graph.instagram.com/${r}?fields=account_type,id,media_count,username&access_token=${i}`);n.value=o.data,t(o.data.id)}catch(i){console.error("Error fetching user data:",i)}}async function t(i){const r=vs(Cs,"userData");gd(r,async o=>{const a=[];o.forEach(c=>{const h=c.key,u=c.val();a.push({key:h,...u})});const l=a.find(c=>c.id===i);l||await s(i),n.value={...n.value,...l}})}async function s(i){const r=vs(Cs,"userData");if(!n.value){console.error("User data is null.");return}const o={id:i,media_url:"https://firebasestorage.googleapis.com/v0/b/instagram-imitation-180e8.appspot.com/o/user%2Fkarsten-winegeart-NE0XGVKTmcA-unsplash.jpg?alt=media&token=9f250d7f-e2e5-46fa-bad9-bcae3001951f",username:n.value.username};try{await aa(r,o),console.log("Data successfully written to Firebase!")}catch(a){console.error("Error writing data to Firebase:",a)}}return{userData:n,getUserData:e}}),qt=n=>(Wa("data-v-8ea79c2e"),n=n(),Ha(),n),Zf=qt(()=>R("button",{type:"button",class:"btn-close btn-close-white position-absolute top-0 end-0 m-3","data-bs-dismiss":"modal","aria-label":"Close"},null,-1)),e_={class:"modal-content my-5"},t_={class:"modal-header d-flex justify-content-center"},n_=qt(()=>R("h5",{class:"modal-title",id:"exampleModalLabel"},"建立新貼文",-1)),s_={class:"d-flex flex-sm-column flex-md-row"},i_={key:0,class:"modal-body align-items-center p-5"},r_={class:"d-flex flex-column align-items-center justify-content-center"},o_=qt(()=>R("i",{class:"bi bi-image pic-icon"},null,-1)),a_=qt(()=>R("div",null,"將相片和影片拖曳到這裡",-1)),l_=qt(()=>R("label",{for:"file-input",class:"file-input-button btn btn-primary m-3"},"從電腦選擇",-1)),c_={key:1,class:"modal-body d-flex flex-column align-items-center input-img-area p-0"},u_=["src"],h_={key:2,class:"border-start p-2 w-100"},d_={class:"d-flex align-self-center align-middle"},f_={class:"rounded-circle user-pic"},__=["src"],p_={class:"align-middle my-auto ms-2 fw-bold"},m_={__name:"addNewModalComponent",setup(n,{expose:e}){const t=me(!1),s=me(null),i=me(null);e({showModal:function(){s.value.show(),o.value="",h.value=!1,c.value.style.maxWidth="700px",a.value=null}}),La(()=>{s.value=new Xf(i.value)});const o=me(null),a=me(null),l=function(I){t.value=!0;let O=I.target;if(a.value=I.target.files[0],O.files){let C=new FileReader;C.onload=w=>{o.value=w.target.result,t.value=!1},C.readAsDataURL(O.files[0])}},c=me(null),h=me(!1),u=function(){h.value===!0?f():(c.value.style.maxWidth="1000px",h.value=!0)},d=()=>{h.value===!0&&(c.value.style.maxWidth="700px",h.value=!1),o.value=null},f=async()=>{t.value=!0;const I=a.value;if(!I){console.error("No file selected.");return}const O=Ia(di),C=Uf(O,"posts/"+I.name);try{await Lf(C,I);const w=await Ff(C);console.log(w),w&&y(w)}catch(w){t.value=!1,console.error("Error uploading image:",w)}},p=Jf(),g=me(""),y=function(I){const O=Date.now(),C=vs(Cs,"postsData"),w={caption:g.value,id:O,isThumb:!1,media_type:"IMAGE",media_url:[I],permalink:"",postownerid:p.userData.id,timestamp:new Date().toISOString(),username:p.userData.username};aa(C,w).then(()=>{console.log("Data successfully written to Firebase!"),s.value.hide(),g.value="",t.value=!1}).catch(L=>{t.value=!1,console.error("Error writing data to Firebase:",L)})};return(I,O)=>{const C=Ir("loading-overlay");return Fe(),Ue(Sr,null,[R("div",{class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref_key:"addNewModal",ref:i},[Zf,R("div",{class:"modal-dialog",ref_key:"modalDialog",ref:c},[R("div",e_,[R("div",t_,[o.value?(Fe(),Ue("button",{key:0,class:"btn position-absolute start-0 mx-3 text-primary",onClick:d}," 上一步 ")):Rn("",!0),n_,o.value?(Fe(),Ue("button",{key:1,class:"btn position-absolute end-0 mx-3 text-primary",onClick:u}," 下一步 ")):Rn("",!0)]),R("div",s_,[o.value?(Fe(),Ue("div",c_,[R("img",{src:o.value,alt:"",class:"input-img"},null,8,u_)])):(Fe(),Ue("div",i_,[R("div",r_,[o_,a_,l_,R("input",{type:"file",id:"file-input",accept:"audio/*,video/*,image/*",onChange:O[0]||(O[0]=w=>l(w))},null,32)])])),h.value?(Fe(),Ue("div",h_,[R("div",d_,[R("div",f_,[R("img",{src:pi(p).userData.media_url,alt:""},null,8,__)]),R("p",p_,Fa(pi(p).userData.username),1)]),Ua(R("textarea",{type:"text",placeholder:"撰寫說明文字......",class:"postDescriptionInput py-2 w-100","onUpdate:modelValue":O[1]||(O[1]=w=>g.value=w)},null,512),[[Ba,g.value]])])):Rn("",!0)])])],512)],512),wt(C,{active:t.value,"is-full-page":!0},null,8,["active"])],64)}}},g_=Ma(m_,[["__scopeId","data-v-8ea79c2e"]]),y_={class:"col-md-1 col-lg-2 nav-all p-md-3 overflow-hidden position-relative"},v_=R("div",{class:"w-100 position-relative"},[R("div",{class:"navbar navbar-light header-nav"},[R("img",{src:Vf,alt:"",class:"logo d-md-none d-lg-block d-sm-block"}),R("svg",{"aria-label":"Instagram",class:"d-none d-lg-none d-md-block logo",fill:"currentColor",height:"24",role:"img",viewBox:"0 0 24 24",width:"24"},[R("title",null,"Instagram"),R("path",{d:"M12 2.982c2.937 0 3.285.011 4.445.064a6.087 6.087 0 0 1 2.042.379 3.408 3.408 0 0 1 1.265.823 3.408 3.408 0 0 1 .823 1.265 6.087 6.087 0 0 1 .379 2.042c.053 1.16.064 1.508.064 4.445s-.011 3.285-.064 4.445a6.087 6.087 0 0 1-.379 2.042 3.643 3.643 0 0 1-2.088 2.088 6.087 6.087 0 0 1-2.042.379c-1.16.053-1.508.064-4.445.064s-3.285-.011-4.445-.064a6.087 6.087 0 0 1-2.043-.379 3.408 3.408 0 0 1-1.264-.823 3.408 3.408 0 0 1-.823-1.265 6.087 6.087 0 0 1-.379-2.042c-.053-1.16-.064-1.508-.064-4.445s.011-3.285.064-4.445a6.087 6.087 0 0 1 .379-2.042 3.408 3.408 0 0 1 .823-1.265 3.408 3.408 0 0 1 1.265-.823 6.087 6.087 0 0 1 2.042-.379c1.16-.053 1.508-.064 4.445-.064M12 1c-2.987 0-3.362.013-4.535.066a8.074 8.074 0 0 0-2.67.511 5.392 5.392 0 0 0-1.949 1.27 5.392 5.392 0 0 0-1.269 1.948 8.074 8.074 0 0 0-.51 2.67C1.012 8.638 1 9.013 1 12s.013 3.362.066 4.535a8.074 8.074 0 0 0 .511 2.67 5.392 5.392 0 0 0 1.27 1.949 5.392 5.392 0 0 0 1.948 1.269 8.074 8.074 0 0 0 2.67.51C8.638 22.988 9.013 23 12 23s3.362-.013 4.535-.066a8.074 8.074 0 0 0 2.67-.511 5.625 5.625 0 0 0 3.218-3.218 8.074 8.074 0 0 0 .51-2.67C22.988 15.362 23 14.987 23 12s-.013-3.362-.066-4.535a8.074 8.074 0 0 0-.511-2.67 5.392 5.392 0 0 0-1.27-1.949 5.392 5.392 0 0 0-1.948-1.269 8.074 8.074 0 0 0-2.67-.51C15.362 1.012 14.987 1 12 1Zm0 5.351A5.649 5.649 0 1 0 17.649 12 5.649 5.649 0 0 0 12 6.351Zm0 9.316A3.667 3.667 0 1 1 15.667 12 3.667 3.667 0 0 1 12 15.667Zm5.872-10.859a1.32 1.32 0 1 0 1.32 1.32 1.32 1.32 0 0 0-1.32-1.32Z"})])])],-1),E_={class:"w-100 my-md-3"},b_={class:"bg-body d-flex flex-md-column position-fixed nav-selection bottom-0 start-0 justify-content-evenly justify-content-md-start"},C_={class:"nav-item rounded px-2 ms-md-3"},w_=R("div",null,[R("i",{class:"bi bi-house-door icon-size"})],-1),T_=R("div",null,[R("span",{class:"d-none d-lg-inline p-2"},"首頁")],-1),I_={class:"nav-item rounded px-2 ms-md-3"},S_=R("div",null,[R("i",{class:"bi bi-plus-square icon-size"})],-1),N_=R("div",null,[R("span",{class:"d-none d-lg-inline p-2"},"建立")],-1),R_={class:"nav-item rounded px-2 ms-md-3"},A_=R("div",null,[R("i",{class:"bi bi-person-circle icon-size"})],-1),D_=R("div",null,[R("span",{class:"d-none d-lg-inline p-2"},"個人檔案")],-1),O_={__name:"navComponent",setup(n){const e=me(null),t=function(){e.value.showModal()};return(s,i)=>{const r=Ir("RouterLink");return Fe(),Ue(Sr,null,[R("div",y_,[v_,R("div",E_,[R("nav",b_,[R("div",C_,[wt(r,{to:"/",class:"text-decoration-none text-secondary d-flex text-dark"},{default:An(()=>[w_,T_]),_:1})]),R("div",I_,[wt(r,{to:"/",class:"text-decoration-none text-secondary d-flex text-dark",onClick:$a(t,["prevent"])},{default:An(()=>[S_,N_]),_:1})]),R("div",R_,[wt(r,{to:"/profile",class:"text-decoration-none text-secondary d-flex text-dark"},{default:An(()=>[A_,D_]),_:1})])])])]),wt(g_,{ref_key:"addNewModal",ref:e},null,512)],64)}}};export{Xf as M,O_ as _,Jf as a,Cs as d,gd as o,vs as r,x_ as u};
