import{r as b,o as w,u as y,d as k,_ as x}from"./navComponent-qOANedtg.js";import{z as V,r as h,p as P,a as c,c as n,s as B,b as e,x as _,t as f,A as g,F as C,f as E,g as v}from"./index-E-N19lc5.js";const L=V("postDataList",()=>{const i=h([]);function r(){const d=h(!0),m=localStorage.getItem("long-lived-access-token");P.get(`https://cors-anywhere.herokuapp.com/https://graph.instagram.com/me/media?fields=caption,id,media_type,media_url,permalink,thumbnail_url,timestamp,username&access_token=${m}`).then(a=>{console.log(a),i.value=a.data.data,console.log("post",i.value),d.value=!1}).catch(a=>{console.log(a)})}return{postData:i,getPostData:r}}),N={class:"row mx-0"},S={class:"col m-0 border-start min-vh-100"},A={class:"profile mx-auto py-md-4 d-flex"},F={class:"rounded-circle profile-pic m-1 flex-shrink-0 p-1"},I=["src"],M={class:"align-self-center ms-5"},U={class:"d-flex my-1 align-self-center"},$={class:"userName p-2"},z=e("div",null,[e("button",{class:"btn btn-light",type:"button"},"編輯個人檔案")],-1),O=e("div",{class:"p-2 cursor-pointer"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-gear-wide",viewBox:"0 0 16 16"},[e("path",{d:"M8.932.727c-.243-.97-1.62-.97-1.864 0l-.071.286a.96.96 0 0 1-1.622.434l-.205-.211c-.695-.719-1.888-.03-1.613.931l.08.284a.96.96 0 0 1-1.186 1.187l-.284-.081c-.96-.275-1.65.918-.931 1.613l.211.205a.96.96 0 0 1-.434 1.622l-.286.071c-.97.243-.97 1.62 0 1.864l.286.071a.96.96 0 0 1 .434 1.622l-.211.205c-.719.695-.03 1.888.931 1.613l.284-.08a.96.96 0 0 1 1.187 1.187l-.081.283c-.275.96.918 1.65 1.613.931l.205-.211a.96.96 0 0 1 1.622.434l.071.286c.243.97 1.62.97 1.864 0l.071-.286a.96.96 0 0 1 1.622-.434l.205.211c.695.719 1.888.03 1.613-.931l-.08-.284a.96.96 0 0 1 1.187-1.187l.283.081c.96.275 1.65-.918.931-1.613l-.211-.205a.96.96 0 0 1 .434-1.622l.286-.071c.97-.243.97-1.62 0-1.864l-.286-.071a.96.96 0 0 1-.434-1.622l.211-.205c.719-.695.03-1.888-.931-1.613l-.284.08a.96.96 0 0 1-1.187-1.186l.081-.284c.275-.96-.918-1.65-1.613-.931l-.205.211a.96.96 0 0 1-1.622-.434zM8 12.997a4.998 4.998 0 1 1 0-9.995 4.998 4.998 0 0 1 0 9.996z"})])],-1),R={class:"my-1 d-flex list-unstyled align-self-center"},G={class:"media_count profileData p-2"},T=e("span",null,"則貼文",-1),j=e("li",{class:"media_count profileData p-2"},[g("0"),e("span",null,"位粉絲")],-1),q=e("li",{class:"media_count profileData p-2"},[g("0"),e("span",null,"人追蹤中")],-1),H={class:"row mx-auto border-top"},J=["onClick"],K={class:"post-pic position-absolute w-100 h-100"},Q=["src"],W=["src"],X=e("button",{class:"btn"},null,-1),ee={__name:"ProfileView",setup(i){const r=L();r.getPostData();const d=h([]),m=b(k,"postsData");w(m,s=>{const l=[];s.forEach(t=>{const p=t.key,u=t.val();console.log(u,"value"),console.log(o.value,"userData.value"),u.postownerid,o.value.id,l.push({key:p,...u})}),d.value=l});const a=computed(()=>{const s=[...d,...r.value];return console.log(s),s.sort((l,t)=>new Date(t.timestamp)-new Date(l.timestamp)),s}),o=y();o.getUserData();const D=function(s){console.log(s)};return(s,l)=>(c(),n("div",N,[B(x),e("main",S,[e("div",A,[e("div",F,[e("img",{src:_(o).userData.media_url,alt:""},null,8,I)]),e("div",M,[e("div",U,[e("h4",$,f(_(o).userData.username),1),z,O]),e("ul",R,[e("li",G,[g(f(_(o).userData.media_count),1),T]),j,q])])]),e("article",H,[(c(!0),n(C,null,E(_(a),(t,p)=>(c(),n("div",{class:"mt-1 col-4 px-0 ps-1",key:p},[e("div",{class:"profile-post",onClick:u=>D(t.id)},[e("div",K,[t.media_type==="IMAGE"||t.media_type==="CAROUSEL_ALBUM"?(c(),n("img",{key:0,src:t.media_url,alt:""},null,8,Q)):v("",!0),t.media_type==="VIDEO"?(c(),n("img",{key:1,src:t.thumbnail_url,alt:""},null,8,W)):v("",!0)])],8,J)]))),128))]),X])]))}};export{ee as default};
