import{q as I,r as n,i as y,o as P,s as $,a as u,c as m,b as t,l as w,d as C,u as b,t as k,x as D,F as x,e as L,m as M}from"./index-ylvgdU-T.js";import{M as S,p as E,u as V,r as A,o as B,d as U,_ as N}from"./postComponent-kr5GTRK2.js";const F=I("postDataList",()=>{const c=n([]),i=n(!0),o=n(null);async function d(){const s=localStorage.getItem("long-lived-access-token");try{const e=await y.get(`https://cors-anywhere.herokuapp.com/https://graph.instagram.com/me/media?fields=caption,id,media_type,media_url,permalink,thumbnail_url,timestamp,username&access_token=${s}`);c.value=e.data.data,console.log("post",c.value),await Promise.all(c.value.map(async a=>{if(a.media_type==="CAROUSEL_ALBUM"){const f=await p(a.id);a.media_children=f}}))}catch(e){console.error(e),o.value=e}finally{i.value=!1}}async function p(s){const e=localStorage.getItem("long-lived-access-token");try{const a=await y.get(`https://cors-anywhere.herokuapp.com/https://graph.instagram.com/${s}/children?access_token=${e}`);return await Promise.all(a.data.data.map(async r=>await _(r.id)))}catch(a){return console.error(a),o.value=a,[]}}async function _(s){const e=localStorage.getItem("long-lived-access-token");try{return(await y.get(`https://cors-anywhere.herokuapp.com/https://graph.instagram.com/${s}?fields=id,media_type,media_url,permalink,thumbnail_url,timestamp,username&access_token=${e}`)).data.media_url}catch(a){return console.error(a),o.value=a,[]}}return{postData:c,getPostData:d}}),O=t("button",{type:"button",class:"btn-close btn-close-white position-absolute top-0 end-0 m-3","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),R={class:"modal-dialog modal-dialog-scrollable"},z={class:"modal-content"},q={class:"modal-body"},G={__name:"profilePostModalComponent",props:{postId:String,postsData:Array},setup(c,{expose:i}){const o=n(null),d=n(null);i({showModal:function(){o.value.show()}}),P(()=>{o.value=new S(d.value)});const _=c,s=n(null);return $(()=>_.postId,e=>{s.value=e}),(e,a)=>(u(),m("div",{class:"modal fade custom-modal",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref_key:"profilePostModal",ref:d},[O,t("div",R,[t("div",z,[t("div",q,[w(E,{postDataList:c.postsData,postIdDirection:s.value},null,8,["postDataList","postIdDirection"])])])])],512))}},T={class:"row mx-0"},j={class:"col m-0 border-start min-vh-100"},H={class:"profile mx-auto py-md-4 d-flex"},J={class:"rounded-circle profile-pic m-1 flex-shrink-0 p-1"},K=["src"],Q={class:"align-self-center ms-5"},W={class:"d-flex my-1 align-self-center"},X={class:"userName p-2"},Y=t("div",null,[t("button",{class:"btn btn-light",type:"button"},"編輯個人檔案")],-1),Z=t("div",{class:"p-2 cursor-pointer"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-gear-wide",viewBox:"0 0 16 16"},[t("path",{d:"M8.932.727c-.243-.97-1.62-.97-1.864 0l-.071.286a.96.96 0 0 1-1.622.434l-.205-.211c-.695-.719-1.888-.03-1.613.931l.08.284a.96.96 0 0 1-1.186 1.187l-.284-.081c-.96-.275-1.65.918-.931 1.613l.211.205a.96.96 0 0 1-.434 1.622l-.286.071c-.97.243-.97 1.62 0 1.864l.286.071a.96.96 0 0 1 .434 1.622l-.211.205c-.719.695-.03 1.888.931 1.613l.284-.08a.96.96 0 0 1 1.187 1.187l-.081.283c-.275.96.918 1.65 1.613.931l.205-.211a.96.96 0 0 1 1.622.434l.071.286c.243.97 1.62.97 1.864 0l.071-.286a.96.96 0 0 1 1.622-.434l.205.211c.695.719 1.888.03 1.613-.931l-.08-.284a.96.96 0 0 1 1.187-1.187l.283.081c.96.275 1.65-.918.931-1.613l-.211-.205a.96.96 0 0 1 .434-1.622l.286-.071c.97-.243.97-1.62 0-1.864l-.286-.071a.96.96 0 0 1-.434-1.622l.211-.205c.719-.695.03-1.888-.931-1.613l-.284.08a.96.96 0 0 1-1.187-1.186l.081-.284c.275-.96-.918-1.65-1.613-.931l-.205.211a.96.96 0 0 1-1.622-.434zM8 12.997a4.998 4.998 0 1 1 0-9.995 4.998 4.998 0 0 1 0 9.996z"})])],-1),tt={class:"my-1 d-flex list-unstyled align-self-center"},at={class:"media_count profile-data p-2"},et=t("span",null,"則貼文",-1),st=t("li",{class:"media_count profile-data p-2"},[D("0"),t("span",null,"位粉絲")],-1),ot=t("li",{class:"media_count profile-data p-2"},[D("0"),t("span",null,"人追蹤中")],-1),lt={class:"row mx-auto border-top"},nt=["onClick"],ct={class:"post-pic position-absolute w-100 h-100"},rt=["src"],it=["src"],dt=t("button",{class:"btn"},null,-1),pt={__name:"ProfileView",setup(c){const i=F(),o=V(),d=async()=>{await o.getUserData(),await i.getPostData()},p=n([]),_=A(U,"postsData");P(async()=>{await d(),B(_,r=>{const h=[];r.forEach(l=>{const g=l.key,v=l.val();o.userData.username===v.username&&h.push({key:g,...v})}),p.value=h})});const s=C(()=>[...i.postData,...p.value].sort((h,l)=>new Date(l.timestamp)-new Date(h.timestamp))),e=n(null),a=n(""),f=function(r){a.value=r,e.value.showModal()};return(r,h)=>(u(),m(x,null,[t("div",T,[w(N),t("main",j,[t("div",H,[t("div",J,[t("img",{src:b(o).userData.media_url,alt:""},null,8,K)]),t("div",Q,[t("div",W,[t("h4",X,k(b(o).userData.username),1),Y,Z]),t("ul",tt,[t("li",at,[D(k(s.value.length),1),et]),st,ot])])]),t("article",lt,[(u(!0),m(x,null,L(s.value,(l,g)=>(u(),m("div",{class:"mt-1 col-4 px-0 ps-1",key:g},[t("div",{class:"profile-post",onClick:v=>f(l.id)},[t("div",ct,[l.media_type==="IMAGE"||l.media_type==="CAROUSEL_ALBUM"?(u(),m("img",{key:0,src:l.media_url,alt:""},null,8,rt)):M("",!0),l.media_type==="VIDEO"?(u(),m("img",{key:1,src:l.thumbnail_url,alt:""},null,8,it)):M("",!0)])],8,nt)]))),128))]),dt])]),w(G,{postId:a.value,mergedPostData:s.value,ref_key:"profilePostModal",ref:e},null,8,["postId","mergedPostData"])],64))}};export{pt as default};
