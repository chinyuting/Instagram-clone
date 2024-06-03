import{M as P,_ as $,u as L,r as C,o as I,d as S,a as V}from"./postComponent-ndlsT2RS.js";import{q as B,r as d,j as E,o as M,a as c,c as i,b as t,l as f,d as N,u as m,t as y,s as b,F as w,e as A,m as x}from"./index-nG7fWBx9.js";const F=B("postDataList",()=>{const o=d([]);function l(){const s=d(!0),n=localStorage.getItem("long-lived-access-token");E.get(`https://cors-anywhere.herokuapp.com/https://graph.instagram.com/me/media?fields=caption,id,media_type,media_url,permalink,thumbnail_url,timestamp,username&access_token=${n}`).then(e=>{console.log(e),o.value=e.data.data,console.log("post",o.value),s.value=!1}).catch(e=>{console.log(e)})}return{postData:o,getPostData:l}}),U={class:"modal-dialog modal-lg"},O={class:"modal-content"},z=t("div",{class:"modal-header"},[t("h5",{class:"modal-title",id:"exampleModalLabel"},"Modal title"),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),R={class:"modal-body"},j=t("div",{class:"modal-footer"},[t("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"Close"),t("button",{type:"button",class:"btn btn-primary"},"Save changes")],-1),q={__name:"profilePostModalComponent",props:{postId:String,mergedPostData:Array},setup(o,{expose:l}){const s=d(null),n=d(null);return l({showModal:function(){s.value.show()}}),M(()=>{s.value=new P(n.value,{backdrop:"static",keyboard:!1})}),(g,_)=>(c(),i("div",{class:"modal fade custom-modal",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref_key:"profilePostModal",ref:n},[t("div",U,[t("div",O,[z,t("div",R,[f($,{postDataList:o.mergedPostData},null,8,["postDataList"])]),j])])],512))}},G={class:"row mx-0"},T={class:"col m-0 border-start min-vh-100"},H={class:"profile mx-auto py-md-4 d-flex"},J={class:"rounded-circle profile-pic m-1 flex-shrink-0 p-1"},K=["src"],Q={class:"align-self-center ms-5"},W={class:"d-flex my-1 align-self-center"},X={class:"userName p-2"},Y=t("div",null,[t("button",{class:"btn btn-light",type:"button"},"編輯個人檔案")],-1),Z=t("div",{class:"p-2 cursor-pointer"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-gear-wide",viewBox:"0 0 16 16"},[t("path",{d:"M8.932.727c-.243-.97-1.62-.97-1.864 0l-.071.286a.96.96 0 0 1-1.622.434l-.205-.211c-.695-.719-1.888-.03-1.613.931l.08.284a.96.96 0 0 1-1.186 1.187l-.284-.081c-.96-.275-1.65.918-.931 1.613l.211.205a.96.96 0 0 1-.434 1.622l-.286.071c-.97.243-.97 1.62 0 1.864l.286.071a.96.96 0 0 1 .434 1.622l-.211.205c-.719.695-.03 1.888.931 1.613l.284-.08a.96.96 0 0 1 1.187 1.187l-.081.283c-.275.96.918 1.65 1.613.931l.205-.211a.96.96 0 0 1 1.622.434l.071.286c.243.97 1.62.97 1.864 0l.071-.286a.96.96 0 0 1 1.622-.434l.205.211c.695.719 1.888.03 1.613-.931l-.08-.284a.96.96 0 0 1 1.187-1.187l.283.081c.96.275 1.65-.918.931-1.613l-.211-.205a.96.96 0 0 1 .434-1.622l.286-.071c.97-.243.97-1.62 0-1.864l-.286-.071a.96.96 0 0 1-.434-1.622l.211-.205c.719-.695.03-1.888-.931-1.613l-.284.08a.96.96 0 0 1-1.187-1.186l.081-.284c.275-.96-.918-1.65-1.613-.931l-.205.211a.96.96 0 0 1-1.622-.434zM8 12.997a4.998 4.998 0 1 1 0-9.995 4.998 4.998 0 0 1 0 9.996z"})])],-1),tt={class:"my-1 d-flex list-unstyled align-self-center"},at={class:"media_count profileData p-2"},st=t("span",null,"則貼文",-1),et=t("li",{class:"media_count profileData p-2"},[b("0"),t("span",null,"位粉絲")],-1),ot=t("li",{class:"media_count profileData p-2"},[b("0"),t("span",null,"人追蹤中")],-1),lt={class:"row mx-auto border-top"},nt=["onClick"],ct={class:"post-pic position-absolute w-100 h-100"},it=["src"],dt=["src"],rt=t("button",{class:"btn"},null,-1),_t={__name:"ProfileView",setup(o){const l=F(),s=L(),n=async()=>{await s.getUserData(),await l.getPostData()},e=d([]),g=C(S,"postsData");M(async()=>{await n(),I(g,r=>{const u=[];r.forEach(a=>{const p=a.key,h=a.val();s.userData.username===h.username&&u.push({key:p,...h})}),e.value=u})});const _=N(()=>[...l.postData,...e.value].sort((u,a)=>new Date(a.timestamp)-new Date(u.timestamp))),v=d(null);let D="";const k=function(r){D=r,v.value.showModal()};return(r,u)=>(c(),i(w,null,[t("div",G,[f(V),t("main",T,[t("div",H,[t("div",J,[t("img",{src:m(s).userData.media_url,alt:""},null,8,K)]),t("div",Q,[t("div",W,[t("h4",X,y(m(s).userData.username),1),Y,Z]),t("ul",tt,[t("li",at,[b(y(m(s).userData.media_count),1),st]),et,ot])])]),t("article",lt,[(c(!0),i(w,null,A(_.value,(a,p)=>(c(),i("div",{class:"mt-1 col-4 px-0 ps-1",key:p},[t("div",{class:"profile-post",onClick:h=>k(a.id)},[t("div",ct,[a.media_type==="IMAGE"||a.media_type==="CAROUSEL_ALBUM"?(c(),i("img",{key:0,src:a.media_url,alt:""},null,8,it)):x("",!0),a.media_type==="VIDEO"?(c(),i("img",{key:1,src:a.thumbnail_url,alt:""},null,8,dt)):x("",!0)])],8,nt)]))),128))]),rt])]),f(q,{postId:m(D),mergedPostData:_.value,ref_key:"profilePostModal",ref:v},null,8,["postId","mergedPostData"])],64))}};export{_t as default};
