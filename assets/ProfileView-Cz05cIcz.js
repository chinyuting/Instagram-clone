import{r as k,d as b,o as x,_ as w}from"./navComponent-InV2lJdL.js";import{y as g,r as f,s as v,b as i,d as r,m as I,e as t,t as p,q as u,z as _,F as V,i as F,j as h}from"./index-MA9n4Vjl.js";const E="/Instagram-Imitation/assets/profile-lXLDf-KZ.jpg",N=g("postDataList",()=>{const e=f([]);function l(){const o=localStorage.getItem("long-lived-access-token");v.get(`https://cors-anywhere.herokuapp.com/https://graph.instagram.com/me/media?fields=caption,id,media_type,media_url,permalink,thumbnail_url,timestamp,username&access_token=${o}`).then(s=>{console.log(s),e.value=s.data.data,console.log("post",e.value)}).catch(s=>{console.log(s)})}return{postData:e,getPostData:l}}),P=g("userDataList",()=>{const e=f(null);async function l(){try{const s=localStorage.getItem("long-lived-access-token"),c=await v.get(`https://graph.instagram.com/7089654107806386?fields=account_type,id,media_count,username&access_token=${s}`);e.value=c.data,o(c.data.id)}catch(s){console.error("Error fetching user data:",s)}}async function o(s){const c=k(b,"userData");x(c,m=>{const a=[];m.forEach(n=>{const D=n.key,y=n.val();a.push({key:D,...y})});const d=a.find(n=>n.id===s);d&&(e.value={...e.value,...d})})}return{userData:e,getUserData:l}}),S={class:"row mx-0"},$={class:"col m-0 border-start min-vh-100"},B={class:"profile mx-auto py-md-4 d-flex"},C=t("div",{class:"rounded-circle profile-pic m-1 flex-shrink-0 p-1"},[t("img",{src:E,alt:""})],-1),L={class:"align-self-center ms-5"},U={class:"d-flex my-1 align-self-center"},z={class:"userName p-2"},M=t("div",null,[t("button",{class:"btn btn-light",type:"button"},"編輯個人檔案")],-1),j=t("div",{class:"p-2 cursor-pointer"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-gear-wide",viewBox:"0 0 16 16"},[t("path",{d:"M8.932.727c-.243-.97-1.62-.97-1.864 0l-.071.286a.96.96 0 0 1-1.622.434l-.205-.211c-.695-.719-1.888-.03-1.613.931l.08.284a.96.96 0 0 1-1.186 1.187l-.284-.081c-.96-.275-1.65.918-.931 1.613l.211.205a.96.96 0 0 1-.434 1.622l-.286.071c-.97.243-.97 1.62 0 1.864l.286.071a.96.96 0 0 1 .434 1.622l-.211.205c-.719.695-.03 1.888.931 1.613l.284-.08a.96.96 0 0 1 1.187 1.187l-.081.283c-.275.96.918 1.65 1.613.931l.205-.211a.96.96 0 0 1 1.622.434l.071.286c.243.97 1.62.97 1.864 0l.071-.286a.96.96 0 0 1 1.622-.434l.205.211c.695.719 1.888.03 1.613-.931l-.08-.284a.96.96 0 0 1 1.187-1.187l.283.081c.96.275 1.65-.918.931-1.613l-.211-.205a.96.96 0 0 1 .434-1.622l.286-.071c.97-.243.97-1.62 0-1.864l-.286-.071a.96.96 0 0 1-.434-1.622l.211-.205c.719-.695.03-1.888-.931-1.613l-.284.08a.96.96 0 0 1-1.187-1.186l.081-.284c.275-.96-.918-1.65-1.613-.931l-.205.211a.96.96 0 0 1-1.622-.434zM8 12.997a4.998 4.998 0 1 1 0-9.995 4.998 4.998 0 0 1 0 9.996z"})])],-1),q={class:"my-1 d-flex list-unstyled align-self-center"},A={class:"media_count profileData p-2"},G=t("span",null,"則貼文",-1),K=t("li",{class:"media_count profileData p-2"},[_("0"),t("span",null,"位粉絲")],-1),O=t("li",{class:"media_count profileData p-2"},[_("0"),t("span",null,"人追蹤中")],-1),R={class:"row mx-auto border-top"},T=["onClick"],X={class:"post-pic position-absolute w-100 h-100"},Z=["src"],H=["src"],J=t("button",{class:"btn"},null,-1),Y={__name:"ProfileView",setup(e){const l=N();l.getPostData();const o=P();o.getUserData();const s=function(c){console.log(c)};return(c,m)=>(i(),r("div",S,[I(w),t("main",$,[t("div",B,[C,t("div",L,[t("div",U,[t("h4",z,p(u(o).userData.username),1),M,j]),t("ul",q,[t("li",A,[_(p(u(o).userData.media_count),1),G]),K,O])])]),t("article",R,[(i(!0),r(V,null,F(u(l).postData,(a,d)=>(i(),r("div",{class:"mt-1 col-4 px-0 ps-1",key:d},[t("div",{class:"profile-post",onClick:n=>s(a.id)},[t("div",X,[a.media_type==="IMAGE"?(i(),r("img",{key:0,src:a.media_url,alt:""},null,8,Z)):h("",!0),a.media_type==="VIDEO"?(i(),r("img",{key:1,src:a.thumbnail_url,alt:""},null,8,H)):h("",!0)])],8,T)]))),128))]),J])]))}};export{Y as default};
