import{M as $,p as C,u as L,r as S,o as E,d as B,_ as A}from"./postComponent-r8uJNhxf.js";import{q as U,r as i,j as y,o as I,s as P,a as m,c as p,b as e,l as D,d as V,u as b,t as k,x as w,F as x,e as N,m as M}from"./index-KmnQRUYI.js";const F=U("postDataList",()=>{const r=i([]),d=i(!0),o=i(null);async function u(){const s=localStorage.getItem("long-lived-access-token");try{const a=await y.get(`https://cors-anywhere.herokuapp.com/https://graph.instagram.com/me/media?fields=caption,id,media_type,media_url,permalink,thumbnail_url,timestamp,username&access_token=${s}`);r.value=a.data.data,console.log("post",r.value),await Promise.all(r.value.map(async t=>{if(t.media_type==="CAROUSEL_ALBUM"){const f=await _(t.id);t.media_children=f}}))}catch(a){console.error(a),o.value=a}finally{d.value=!1}}async function _(s){const a=localStorage.getItem("long-lived-access-token");try{const t=await y.get(`https://cors-anywhere.herokuapp.com/https://graph.instagram.com/${s}/children?access_token=${a}`);return await Promise.all(t.data.data.map(async l=>await h(l.id)))}catch(t){return console.error(t),o.value=t,[]}}async function h(s){const a=localStorage.getItem("long-lived-access-token");try{return(await y.get(`https://cors-anywhere.herokuapp.com/https://graph.instagram.com/${s}?fields=id,media_type,media_url,permalink,thumbnail_url,timestamp,username&access_token=${a}`)).data.media_url}catch(t){return console.error(t),o.value=t,[]}}return{postData:r,getPostData:u}}),O=e("button",{type:"button",class:"btn-close btn-close-white position-absolute top-0 end-0 m-3","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),R={class:"modal-dialog modal-dialog-scrollable"},z={class:"modal-content"},T={class:"modal-body"},j={__name:"profilePostModalComponent",props:{postId:String,mergedPostData:Array},setup(r,{expose:d}){const o=i(null),u=i(null);d({showModal:function(){o.value.show()}}),I(()=>{o.value=new $(u.value)});const h=r,s=i(null);return P(()=>h.postId,a=>{s.value=a}),(a,t)=>(m(),p("div",{class:"modal fade custom-modal",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref_key:"profilePostModal",ref:u},[O,e("div",R,[e("div",z,[e("div",T,[D(C,{postDataList:r.mergedPostData,postIdDirection:s.value},null,8,["postDataList","postIdDirection"])])])])],512))}},q={class:"row mx-0"},G={class:"col m-0 border-start min-vh-100"},H={class:"profile mx-auto py-md-4 d-flex"},J={class:"rounded-circle profile-pic m-1 flex-shrink-0 p-1"},K=["src"],Q={class:"align-self-center ms-5"},W={class:"d-flex my-1 align-self-center"},X={class:"userName p-2"},Y=e("div",null,[e("button",{class:"btn btn-light",type:"button"},"編輯個人檔案")],-1),Z=e("div",{class:"p-2 cursor-pointer"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-gear-wide",viewBox:"0 0 16 16"},[e("path",{d:"M8.932.727c-.243-.97-1.62-.97-1.864 0l-.071.286a.96.96 0 0 1-1.622.434l-.205-.211c-.695-.719-1.888-.03-1.613.931l.08.284a.96.96 0 0 1-1.186 1.187l-.284-.081c-.96-.275-1.65.918-.931 1.613l.211.205a.96.96 0 0 1-.434 1.622l-.286.071c-.97.243-.97 1.62 0 1.864l.286.071a.96.96 0 0 1 .434 1.622l-.211.205c-.719.695-.03 1.888.931 1.613l.284-.08a.96.96 0 0 1 1.187 1.187l-.081.283c-.275.96.918 1.65 1.613.931l.205-.211a.96.96 0 0 1 1.622.434l.071.286c.243.97 1.62.97 1.864 0l.071-.286a.96.96 0 0 1 1.622-.434l.205.211c.695.719 1.888.03 1.613-.931l-.08-.284a.96.96 0 0 1 1.187-1.187l.283.081c.96.275 1.65-.918.931-1.613l-.211-.205a.96.96 0 0 1 .434-1.622l.286-.071c.97-.243.97-1.62 0-1.864l-.286-.071a.96.96 0 0 1-.434-1.622l.211-.205c.719-.695.03-1.888-.931-1.613l-.284.08a.96.96 0 0 1-1.187-1.186l.081-.284c.275-.96-.918-1.65-1.613-.931l-.205.211a.96.96 0 0 1-1.622-.434zM8 12.997a4.998 4.998 0 1 1 0-9.995 4.998 4.998 0 0 1 0 9.996z"})])],-1),ee={class:"my-1 d-flex list-unstyled align-self-center"},te={class:"media_count profileData p-2"},ae=e("span",null,"則貼文",-1),se=e("li",{class:"media_count profileData p-2"},[w("0"),e("span",null,"位粉絲")],-1),oe=e("li",{class:"media_count profileData p-2"},[w("0"),e("span",null,"人追蹤中")],-1),le={class:"row mx-auto border-top"},ne=["onClick"],ce={class:"post-pic position-absolute w-100 h-100"},ie=["src"],re=["src"],de=e("button",{class:"btn"},null,-1),pe={__name:"ProfileView",setup(r){const d=F(),o=L(),u=async()=>{await o.getUserData(),await d.getPostData()},_=i([]),h=S(B,"postsData");I(async()=>{await u(),E(h,l=>{const c=[];l.forEach(n=>{const g=n.key,v=n.val();o.userData.username===v.username&&c.push({key:g,...v})}),_.value=c})});const s=V(()=>[...d.postData,..._.value].sort((c,n)=>new Date(n.timestamp)-new Date(c.timestamp))),a=i(null),t=i(""),f=function(l){t.value=l,a.value.showModal()};return P(()=>t,async l=>{if(l){await nextTick(),console.log(l);const c=document.getElementById(l);console.log(c),c&&c.scrollIntoView()}}),(l,c)=>(m(),p(x,null,[e("div",q,[D(A),e("main",G,[e("div",H,[e("div",J,[e("img",{src:b(o).userData.media_url,alt:""},null,8,K)]),e("div",Q,[e("div",W,[e("h4",X,k(b(o).userData.username),1),Y,Z]),e("ul",ee,[e("li",te,[w(k(s.value.length),1),ae]),se,oe])])]),e("article",le,[(m(!0),p(x,null,N(s.value,(n,g)=>(m(),p("div",{class:"mt-1 col-4 px-0 ps-1",key:g},[e("div",{class:"profile-post",onClick:v=>f(n.id)},[e("div",ce,[n.media_type==="IMAGE"||n.media_type==="CAROUSEL_ALBUM"?(m(),p("img",{key:0,src:n.media_url,alt:""},null,8,ie)):M("",!0),n.media_type==="VIDEO"?(m(),p("img",{key:1,src:n.thumbnail_url,alt:""},null,8,re)):M("",!0)])],8,ne)]))),128))]),de])]),D(j,{postId:t.value,mergedPostData:s.value,ref_key:"profilePostModal",ref:a},null,8,["postId","mergedPostData"])],64))}};export{pe as default};