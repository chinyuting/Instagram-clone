import{r as h,d as g,o as x,p as F,_ as V}from"./navComponent-1l7UNR6W.js";import{y as v,r as y,s as b,b as i,d,m as E,e as t,q as _,t as f,z as p,F as N,i as U,j as D}from"./index-JqZmj6Nt.js";const P=v("postDataList",()=>{const s=y([]);function n(){const o=localStorage.getItem("long-lived-access-token");b.get(`https://cors-anywhere.herokuapp.com/https://graph.instagram.com/me/media?fields=caption,id,media_type,media_url,permalink,thumbnail_url,timestamp,username&access_token=${o}`).then(c=>{console.log(c),s.value=c.data.data,console.log("post",s.value)}).catch(c=>{console.log(c)})}return{postData:s,getPostData:n}}),S=v("userDataList",()=>{const s=y(null);async function n(){try{const e=localStorage.getItem("long-lived-access-token"),l=await b.get(`https://graph.instagram.com/7089654107806386?fields=account_type,id,media_count,username&access_token=${e}`);s.value=l.data,o(l.data.id)}catch(e){console.error("Error fetching user data:",e)}}async function o(e){const l=h(g,"userData");x(l,async a=>{const r=[];a.forEach(u=>{const k=u.key,w=u.val();r.push({key:k,...w})});const m=r.find(u=>u.id===e);m||await c(e),s.value={...s.value,...m}})}async function c(e){const l=h(g,"userData"),a={id:e,media_url:"https://firebasestorage.googleapis.com/v0/b/instagram-imitation-180e8.appspot.com/o/user%2Fprofile.jpg?alt=media&token=a0c4cd44-c560-4a99-9a2a-c67a5b69df73",username:s.value.username};try{await F(l,a),console.log("Data successfully written to Firebase!")}catch(r){console.error("Error writing data to Firebase:",r)}}return{userData:s,getUserData:n}}),$={class:"row mx-0"},B={class:"col m-0 border-start min-vh-100"},C={class:"profile mx-auto py-md-4 d-flex"},I={class:"rounded-circle profile-pic m-1 flex-shrink-0 p-1"},z=["src"],L={class:"align-self-center ms-5"},M={class:"d-flex my-1 align-self-center"},j={class:"userName p-2"},R=t("div",null,[t("button",{class:"btn btn-light",type:"button"},"編輯個人檔案")],-1),q=t("div",{class:"p-2 cursor-pointer"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-gear-wide",viewBox:"0 0 16 16"},[t("path",{d:"M8.932.727c-.243-.97-1.62-.97-1.864 0l-.071.286a.96.96 0 0 1-1.622.434l-.205-.211c-.695-.719-1.888-.03-1.613.931l.08.284a.96.96 0 0 1-1.186 1.187l-.284-.081c-.96-.275-1.65.918-.931 1.613l.211.205a.96.96 0 0 1-.434 1.622l-.286.071c-.97.243-.97 1.62 0 1.864l.286.071a.96.96 0 0 1 .434 1.622l-.211.205c-.719.695-.03 1.888.931 1.613l.284-.08a.96.96 0 0 1 1.187 1.187l-.081.283c-.275.96.918 1.65 1.613.931l.205-.211a.96.96 0 0 1 1.622.434l.071.286c.243.97 1.62.97 1.864 0l.071-.286a.96.96 0 0 1 1.622-.434l.205.211c.695.719 1.888.03 1.613-.931l-.08-.284a.96.96 0 0 1 1.187-1.187l.283.081c.96.275 1.65-.918.931-1.613l-.211-.205a.96.96 0 0 1 .434-1.622l.286-.071c.97-.243.97-1.62 0-1.864l-.286-.071a.96.96 0 0 1-.434-1.622l.211-.205c.719-.695.03-1.888-.931-1.613l-.284.08a.96.96 0 0 1-1.187-1.186l.081-.284c.275-.96-.918-1.65-1.613-.931l-.205.211a.96.96 0 0 1-1.622-.434zM8 12.997a4.998 4.998 0 1 1 0-9.995 4.998 4.998 0 0 1 0 9.996z"})])],-1),A={class:"my-1 d-flex list-unstyled align-self-center"},G={class:"media_count profileData p-2"},O=t("span",null,"則貼文",-1),T=t("li",{class:"media_count profileData p-2"},[p("0"),t("span",null,"位粉絲")],-1),H=t("li",{class:"media_count profileData p-2"},[p("0"),t("span",null,"人追蹤中")],-1),J={class:"row mx-auto border-top"},K=["onClick"],Q={class:"post-pic position-absolute w-100 h-100"},W=["src"],X=["src"],Y=t("button",{class:"btn"},null,-1),et={__name:"ProfileView",setup(s){const n=P();n.getPostData();const o=S();o.getUserData();const c=function(e){console.log(e)};return(e,l)=>(i(),d("div",$,[E(V),t("main",B,[t("div",C,[t("div",I,[t("img",{src:_(o).userData.media_url,alt:""},null,8,z)]),t("div",L,[t("div",M,[t("h4",j,f(_(o).userData.username),1),R,q]),t("ul",A,[t("li",G,[p(f(_(o).userData.media_count),1),O]),T,H])])]),t("article",J,[(i(!0),d(N,null,U(_(n).postData,(a,r)=>(i(),d("div",{class:"mt-1 col-4 px-0 ps-1",key:r},[t("div",{class:"profile-post",onClick:m=>c(a.id)},[t("div",Q,[a.media_type==="IMAGE"?(i(),d("img",{key:0,src:a.media_url,alt:""},null,8,W)):D("",!0),a.media_type==="VIDEO"?(i(),d("img",{key:1,src:a.thumbnail_url,alt:""},null,8,X)):D("",!0)])],8,K)]))),128))]),Y])]))}};export{et as default};
