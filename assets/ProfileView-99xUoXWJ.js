import{M as P,u as I,r as C,o as S,d as V,_ as L}from"./navComponent-4QxRPhMK.js";import{z as B,r as d,p as N,o as M,a as c,c as i,A as p,t as _,B as $,d as A,b as t,s as y,x as m,F as w,f as E,g as x}from"./index-swDbiOFV.js";const F=B("postDataList",()=>{const o=d([]);function l(){const e=d(!0),n=localStorage.getItem("long-lived-access-token");N.get(`https://cors-anywhere.herokuapp.com/https://graph.instagram.com/me/media?fields=caption,id,media_type,media_url,permalink,thumbnail_url,timestamp,username&access_token=${n}`).then(s=>{console.log(s),o.value=s.data.data,console.log("post",o.value),e.value=!1}).catch(s=>{console.log(s)})}return{postData:o,getPostData:l}}),U=$('<div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title" id="exampleModalLabel">Modal title</h5><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body">...</div><div class="modal-footer"><button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button><button type="button" class="btn btn-primary">Save changes</button></div></div></div>',1),z={__name:"profilePostModalComponent",props:{postId:String,mergedPostData:Array},setup(o,{expose:l}){const e=d(null),n=d(null);return l({showModal:function(){e.value.show()}}),M(()=>{e.value=new P(n.value)}),(v,h)=>(c(),i("div",{class:"modal fade custom-modal",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref_key:"profilePostModal",ref:n},[p(_(o.postId)+" "+_(o.mergedPostData)+" ",1),U],512))}},O={class:"row mx-0"},R={class:"col m-0 border-start min-vh-100"},G={class:"profile mx-auto py-md-4 d-flex"},T={class:"rounded-circle profile-pic m-1 flex-shrink-0 p-1"},j=["src"],q={class:"align-self-center ms-5"},H={class:"d-flex my-1 align-self-center"},J={class:"userName p-2"},K=t("div",null,[t("button",{class:"btn btn-light",type:"button"},"編輯個人檔案")],-1),Q=t("div",{class:"p-2 cursor-pointer"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-gear-wide",viewBox:"0 0 16 16"},[t("path",{d:"M8.932.727c-.243-.97-1.62-.97-1.864 0l-.071.286a.96.96 0 0 1-1.622.434l-.205-.211c-.695-.719-1.888-.03-1.613.931l.08.284a.96.96 0 0 1-1.186 1.187l-.284-.081c-.96-.275-1.65.918-.931 1.613l.211.205a.96.96 0 0 1-.434 1.622l-.286.071c-.97.243-.97 1.62 0 1.864l.286.071a.96.96 0 0 1 .434 1.622l-.211.205c-.719.695-.03 1.888.931 1.613l.284-.08a.96.96 0 0 1 1.187 1.187l-.081.283c-.275.96.918 1.65 1.613.931l.205-.211a.96.96 0 0 1 1.622.434l.071.286c.243.97 1.62.97 1.864 0l.071-.286a.96.96 0 0 1 1.622-.434l.205.211c.695.719 1.888.03 1.613-.931l-.08-.284a.96.96 0 0 1 1.187-1.187l.283.081c.96.275 1.65-.918.931-1.613l-.211-.205a.96.96 0 0 1 .434-1.622l.286-.071c.97-.243.97-1.62 0-1.864l-.286-.071a.96.96 0 0 1-.434-1.622l.211-.205c.719-.695.03-1.888-.931-1.613l-.284.08a.96.96 0 0 1-1.187-1.186l.081-.284c.275-.96-.918-1.65-1.613-.931l-.205.211a.96.96 0 0 1-1.622-.434zM8 12.997a4.998 4.998 0 1 1 0-9.995 4.998 4.998 0 0 1 0 9.996z"})])],-1),W={class:"my-1 d-flex list-unstyled align-self-center"},X={class:"media_count profileData p-2"},Y=t("span",null,"則貼文",-1),Z=t("li",{class:"media_count profileData p-2"},[p("0"),t("span",null,"位粉絲")],-1),tt=t("li",{class:"media_count profileData p-2"},[p("0"),t("span",null,"人追蹤中")],-1),at={class:"row mx-auto border-top"},et=["onClick"],st={class:"post-pic position-absolute w-100 h-100"},ot=["src"],lt=["src"],nt=t("button",{class:"btn"},null,-1),dt={__name:"ProfileView",setup(o){const l=F(),e=I(),n=async()=>{await e.getUserData(),await l.getPostData()},s=d([]),v=C(V,"postsData");M(async()=>{await n(),S(v,r=>{const u=[];r.forEach(a=>{const f=a.key,b=a.val();e.userData.username===b.username&&u.push({key:f,...b})}),s.value=u})});const h=A(()=>[...l.postData,...s.value].sort((u,a)=>new Date(a.timestamp)-new Date(u.timestamp))),g=d(null);let D="";const k=function(r){D=r,g.value.showModal()};return(r,u)=>(c(),i(w,null,[t("div",O,[y(L),t("main",R,[t("div",G,[t("div",T,[t("img",{src:m(e).userData.media_url,alt:""},null,8,j)]),t("div",q,[t("div",H,[t("h4",J,_(m(e).userData.username),1),K,Q]),t("ul",W,[t("li",X,[p(_(m(e).userData.media_count),1),Y]),Z,tt])])]),t("article",at,[(c(!0),i(w,null,E(h.value,(a,f)=>(c(),i("div",{class:"mt-1 col-4 px-0 ps-1",key:f},[t("div",{class:"profile-post",onClick:b=>k(a.id)},[t("div",st,[a.media_type==="IMAGE"||a.media_type==="CAROUSEL_ALBUM"?(c(),i("img",{key:0,src:a.media_url,alt:""},null,8,ot)):x("",!0),a.media_type==="VIDEO"?(c(),i("img",{key:1,src:a.thumbnail_url,alt:""},null,8,lt)):x("",!0)])],8,et)]))),128))]),nt])]),y(z,{postId:m(D),mergedPostData:h.value,ref_key:"profilePostModal",ref:g},null,8,["postId","mergedPostData"])],64))}};export{dt as default};