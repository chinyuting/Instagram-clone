import{_ as f}from"./navComponent--oz68T2G.js";import{y as m,r as p,s as h,b as c,d as n,m as v,e as t,t as _,q as i,z as r,F as D,h as y,i as u}from"./index-ayOHx5lr.js";const k="/Instagram-Imitation/assets/profile-lXLDf-KZ.jpg",b=m("postDataList",()=>{const e=p([]);function o(){const s=localStorage.getItem("long-lived-access-token");h.get(`https://cors-anywhere.herokuapp.com/https://graph.instagram.com/me/media?fields=caption,id,media_type,media_url,permalink,thumbnail_url,timestamp,username&access_token=${s}`).then(a=>{console.log(a),e.value=a.data.data,console.log("post",e.value)}).catch(a=>{console.log(a)})}return{postData:e,getPostData:o}}),x=m("userDataList",()=>{const e=p(null);async function o(){try{const s=localStorage.getItem("long-lived-access-token"),a=await h.get(`https://graph.instagram.com/7089654107806386?fields=account_type,id,media_count,username&access_token=${s}`);e.value=a.data,console.log("User data:",e.value)}catch(s){console.error("Error fetching user data:",s)}}return{userData:e,getUserData:o}}),w={class:"row mx-0"},I={class:"col m-0 border-start min-vh-100"},S={class:"profile mx-auto py-md-4 d-flex"},V=t("div",{class:"rounded-circle profile-pic m-1 flex-shrink-0 p-1"},[t("img",{src:k,alt:""})],-1),N={class:"align-self-center ms-5"},P={class:"d-flex my-1 align-self-center"},B={class:"userName p-2"},C=t("div",null,[t("button",{class:"btn btn-light",type:"button"},"編輯個人檔案")],-1),E=t("div",{class:"p-2 cursor-pointer"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-gear-wide",viewBox:"0 0 16 16"},[t("path",{d:"M8.932.727c-.243-.97-1.62-.97-1.864 0l-.071.286a.96.96 0 0 1-1.622.434l-.205-.211c-.695-.719-1.888-.03-1.613.931l.08.284a.96.96 0 0 1-1.186 1.187l-.284-.081c-.96-.275-1.65.918-.931 1.613l.211.205a.96.96 0 0 1-.434 1.622l-.286.071c-.97.243-.97 1.62 0 1.864l.286.071a.96.96 0 0 1 .434 1.622l-.211.205c-.719.695-.03 1.888.931 1.613l.284-.08a.96.96 0 0 1 1.187 1.187l-.081.283c-.275.96.918 1.65 1.613.931l.205-.211a.96.96 0 0 1 1.622.434l.071.286c.243.97 1.62.97 1.864 0l.071-.286a.96.96 0 0 1 1.622-.434l.205.211c.695.719 1.888.03 1.613-.931l-.08-.284a.96.96 0 0 1 1.187-1.187l.283.081c.96.275 1.65-.918.931-1.613l-.211-.205a.96.96 0 0 1 .434-1.622l.286-.071c.97-.243.97-1.62 0-1.864l-.286-.071a.96.96 0 0 1-.434-1.622l.211-.205c.719-.695.03-1.888-.931-1.613l-.284.08a.96.96 0 0 1-1.187-1.186l.081-.284c.275-.96-.918-1.65-1.613-.931l-.205.211a.96.96 0 0 1-1.622-.434zM8 12.997a4.998 4.998 0 1 1 0-9.995 4.998 4.998 0 0 1 0 9.996z"})])],-1),L={class:"my-1 d-flex list-unstyled align-self-center"},U={class:"media_count profileData p-2"},$=t("span",null,"則貼文",-1),z=t("li",{class:"media_count profileData p-2"},[r("0"),t("span",null,"位粉絲")],-1),M=t("li",{class:"media_count profileData p-2"},[r("0"),t("span",null,"人追蹤中")],-1),F={class:"row mx-auto border-top"},j=["onClick"],q={class:"post-pic position-absolute w-100 h-100"},A=["src"],G=["src"],K=t("button",{class:"btn"},null,-1),H={__name:"ProfileView",setup(e){const o=b();o.getPostData();const s=x();s.getUserData();const a=function(d){console.log(d)};return(d,O)=>(c(),n("div",w,[v(f),t("main",I,[t("div",S,[V,t("div",N,[t("div",P,[t("h4",B,_(i(s).userData.username),1),C,E]),t("ul",L,[t("li",U,[r(_(i(s).userData.media_count),1),$]),z,M])])]),t("article",F,[(c(!0),n(D,null,y(i(o).postData,(l,g)=>(c(),n("div",{class:"mt-1 col-4 px-0 ps-1",key:g},[t("div",{class:"profile-post",onClick:T=>a(l.id)},[t("div",q,[l.media_type==="IMAGE"?(c(),n("img",{key:0,src:l.media_url,alt:""},null,8,A)):u("",!0),l.media_type==="VIDEO"?(c(),n("img",{key:1,src:l.thumbnail_url,alt:""},null,8,G)):u("",!0)])],8,j)]))),128))]),K])]))}};export{H as default};