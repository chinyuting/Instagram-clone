import{a as p,_ as h}from"./navComponent-ScjWI8ue.js";import{y as g,r as f,p as v,a as o,c as l,q as D,b as t,s as i,t as _,z as r,F as b,f as x,g as u}from"./index-Ttx0XKbp.js";const y=g("postDataList",()=>{const c=f([]);function n(){const s=localStorage.getItem("long-lived-access-token");v.get(`https://cors-anywhere.herokuapp.com/https://graph.instagram.com/me/media?fields=caption,id,media_type,media_url,permalink,thumbnail_url,timestamp,username&access_token=${s}`).then(e=>{console.log(e),c.value=e.data.data,console.log("post",c.value)}).catch(e=>{console.log(e)})}return{postData:c,getPostData:n}}),k={class:"row mx-0"},w={class:"col m-0 border-start min-vh-100"},V={class:"profile mx-auto py-md-4 d-flex"},N={class:"rounded-circle profile-pic m-1 flex-shrink-0 p-1"},P=["src"],S={class:"align-self-center ms-5"},B={class:"d-flex my-1 align-self-center"},C={class:"userName p-2"},z=t("div",null,[t("button",{class:"btn btn-light",type:"button"},"編輯個人檔案")],-1),E=t("div",{class:"p-2 cursor-pointer"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-gear-wide",viewBox:"0 0 16 16"},[t("path",{d:"M8.932.727c-.243-.97-1.62-.97-1.864 0l-.071.286a.96.96 0 0 1-1.622.434l-.205-.211c-.695-.719-1.888-.03-1.613.931l.08.284a.96.96 0 0 1-1.186 1.187l-.284-.081c-.96-.275-1.65.918-.931 1.613l.211.205a.96.96 0 0 1-.434 1.622l-.286.071c-.97.243-.97 1.62 0 1.864l.286.071a.96.96 0 0 1 .434 1.622l-.211.205c-.719.695-.03 1.888.931 1.613l.284-.08a.96.96 0 0 1 1.187 1.187l-.081.283c-.275.96.918 1.65 1.613.931l.205-.211a.96.96 0 0 1 1.622.434l.071.286c.243.97 1.62.97 1.864 0l.071-.286a.96.96 0 0 1 1.622-.434l.205.211c.695.719 1.888.03 1.613-.931l-.08-.284a.96.96 0 0 1 1.187-1.187l.283.081c.96.275 1.65-.918.931-1.613l-.211-.205a.96.96 0 0 1 .434-1.622l.286-.071c.97-.243.97-1.62 0-1.864l-.286-.071a.96.96 0 0 1-.434-1.622l.211-.205c.719-.695.03-1.888-.931-1.613l-.284.08a.96.96 0 0 1-1.187-1.186l.081-.284c.275-.96-.918-1.65-1.613-.931l-.205.211a.96.96 0 0 1-1.622-.434zM8 12.997a4.998 4.998 0 1 1 0-9.995 4.998 4.998 0 0 1 0 9.996z"})])],-1),I={class:"my-1 d-flex list-unstyled align-self-center"},M={class:"media_count profileData p-2"},$=t("span",null,"則貼文",-1),F=t("li",{class:"media_count profileData p-2"},[r("0"),t("span",null,"位粉絲")],-1),L=t("li",{class:"media_count profileData p-2"},[r("0"),t("span",null,"人追蹤中")],-1),U={class:"row mx-auto border-top"},q=["onClick"],A={class:"post-pic position-absolute w-100 h-100"},G=["src"],O=["src"],T=t("button",{class:"btn"},null,-1),Q={__name:"ProfileView",setup(c){const n=y();n.getPostData();const s=p();s.getUserData();const e=function(d){console.log(d)};return(d,j)=>(o(),l("div",k,[D(h),t("main",w,[t("div",V,[t("div",N,[t("img",{src:i(s).userData.media_url,alt:""},null,8,P)]),t("div",S,[t("div",B,[t("h4",C,_(i(s).userData.username),1),z,E]),t("ul",I,[t("li",M,[r(_(i(s).userData.media_count),1),$]),F,L])])]),t("article",U,[(o(!0),l(b,null,x(i(n).postData,(a,m)=>(o(),l("div",{class:"mt-1 col-4 px-0 ps-1",key:m},[t("div",{class:"profile-post",onClick:H=>e(a.id)},[t("div",A,[a.media_type==="IMAGE"?(o(),l("img",{key:0,src:a.media_url,alt:""},null,8,G)):u("",!0),a.media_type==="VIDEO"?(o(),l("img",{key:1,src:a.thumbnail_url,alt:""},null,8,O)):u("",!0)])],8,q)]))),128))]),T])]))}};export{Q as default};