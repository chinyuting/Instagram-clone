import{x as j,r as o,j as C,o as S,y as z,a as c,c as d,b as e,m as M,_ as T,l as q,q as $,w as U,z as G,F as P,A as H,B as J,d as K,p as L,t as A,C as E,f as Q}from"./index-Mo42MKLh.js";import{M as B,p as W,g as X,f as Y,b as Z,c as ee,e as ae,r as R,d as N,h as te,u as se,o as oe,_ as le}from"./postComponent-rf0CpcIp.js";const ne=j("postDataList",()=>{const n=o([]),p=o(!0),t=o(null);async function m(){const i=localStorage.getItem("long-lived-access-token");try{const l=await C.get(`https://cors-anywhere.herokuapp.com/https://graph.instagram.com/me/media?fields=caption,id,media_type,media_url,permalink,thumbnail_url,timestamp,username&access_token=${i}`);n.value=l.data.data,console.log("post",n.value),await Promise.all(n.value.map(async a=>{if(a.media_type==="CAROUSEL_ALBUM"){const h=await _(a.id);a.media_children=h}}))}catch(l){console.error(l),t.value=l}finally{p.value=!1}}async function _(i){const l=localStorage.getItem("long-lived-access-token");try{const a=await C.get(`https://cors-anywhere.herokuapp.com/https://graph.instagram.com/${i}/children?access_token=${l}`);return await Promise.all(a.data.data.map(async b=>await f(b.id)))}catch(a){return console.error(a),t.value=a,[]}}async function f(i){const l=localStorage.getItem("long-lived-access-token");try{return(await C.get(`https://cors-anywhere.herokuapp.com/https://graph.instagram.com/${i}?fields=id,media_type,media_url,permalink,thumbnail_url,timestamp,username&access_token=${l}`)).data.media_url}catch(a){return console.error(a),t.value=a,[]}}return{postData:n,getPostData:m}}),ie=e("button",{type:"button",class:"btn-close btn-close-white position-absolute top-0 end-0 m-3","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),re={class:"modal-dialog modal-dialog-scrollable"},ce={class:"modal-content"},de={class:"modal-body"},ue={__name:"profilePostModalComponent",props:{postId:String,postsData:Array},setup(n,{expose:p}){const t=o(null),m=o(null);p({showModal:function(){t.value.show()}}),S(()=>{t.value=new B(m.value)});const f=n,i=o(null);return z(()=>f.postId,l=>{i.value=l}),(l,a)=>(c(),d("div",{class:"modal fade custom-modal",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref_key:"profilePostModal",ref:m},[ie,e("div",re,[e("div",ce,[e("div",de,[M(W,{postDataList:n.postsData,postIdDirection:i.value},null,8,["postDataList","postIdDirection"])])])])],512))}},I=n=>(H("data-v-2fb64938"),n=n(),J(),n),me=I(()=>e("button",{type:"button",class:"btn-close btn-close-white position-absolute top-0 end-0 m-3","data-bs-dismiss":"modal","aria-label":"Close"},null,-1)),pe={class:"modal-content my-5"},_e={class:"modal-header d-flex justify-content-center"},fe=I(()=>e("h5",{class:"modal-title",id:"editUserImageModalLabel"},"更新使用者頭像",-1)),he={class:"d-flex flex-sm-column flex-md-row"},ge=I(()=>e("i",{class:"bi bi-image pic-icon"},null,-1)),ve=I(()=>e("span",null,"將相片和影片拖曳到這裡",-1)),ye=I(()=>e("label",{for:"file-input",class:"file-input-button btn btn-primary m-3"},"從電腦選擇",-1)),be={key:1,class:"modal-body d-flex flex-column align-items-center input-img-area p-0"},De=["src"],we={__name:"editUserImageModalComponent",props:{userData:{type:Object,default:{}}},setup(n,{expose:p}){const t=o(!1),m=n,_=o(null),f=o(null),i=function(){_.value.show(),l()},l=()=>{a.value="",h.value=null};p({showModal:i}),S(()=>{_.value=new B(f.value)});const a=o(null),h=o(null),b=function(s){if(t.value=!0,s.files){h.value=s.files[0];let u=new FileReader;u.onload=v=>{a.value=v.target.result,t.value=!1},u.readAsDataURL(s.files[0])}},w=o(!1),g=s=>{s.dataTransfer.dropEffect="copy",w.value=!0,s.preventDefault()},D=s=>{w.value=!1,s.preventDefault()},r=s=>{s.preventDefault(),b(s.dataTransfer)},x=o(null),k=function(){F()},V=()=>{a.value=null},F=async()=>{t.value=!0;const s=h.value;if(!s){console.error("No file selected."),t.value=!1;return}const u=X(Y),v=Z(u,"user/"+s.name);try{await ee(v,s);const y=await ae(v);if(y)O(y);else throw new Error("Fail to get imageUrl from storage")}catch(y){t.value=!1,console.error("Error uploading image:",y)}},O=function(s){const u={...m.userData},v=R(N,`userData/${m.userData.key}`);u.media_url=s,te(v,u).then(()=>{console.log("Data updated successfully!")}).catch(y=>{console.error("Error updating data:",y)}).finally(()=>{t.value=!1})};return(s,u)=>{const v=q("loading-overlay");return c(),d(P,null,[e("div",{class:"modal fade",id:"editUserImageModal",tabindex:"-1","aria-labelledby":"editUserImageModalLabel","aria-hidden":"true",ref_key:"editUserImageModal",ref:f},[me,e("div",{class:"modal-dialog",ref_key:"modalDialog",ref:x},[e("div",pe,[e("div",_e,[a.value?(c(),d("button",{key:0,class:"btn position-absolute start-0 mx-3 text-primary",onClick:V}," 上一步 ")):$("",!0),fe,a.value?(c(),d("button",{key:1,class:"btn position-absolute end-0 mx-3 text-primary",onClick:k}," 下一步 ")):$("",!0)]),e("div",he,[a.value?(c(),d("div",be,[e("img",{src:a.value,alt:"",class:"input-img"},null,8,De)])):(c(),d("div",{key:0,class:"modal-body align-items-center p-5",onDragover:U(g,["prevent"]),onDragleave:U(D,["prevent"]),onDrop:U(r,["prevent"])},[e("div",{class:G(["d-flex flex-column align-items-center justify-content-center",w.value?"text-primary":""])},[ge,ve,ye,e("input",{type:"file",id:"file-input",accept:"audio/*,video/*,image/*",onChange:u[0]||(u[0]=y=>b(y.target))},null,32)],2)],32))])])],512)],512),M(v,{active:t.value,"is-full-page":!0},null,8,["active"])],64)}}},xe=T(we,[["__scopeId","data-v-2fb64938"]]),ke={class:"row mx-0"},Me={class:"col m-0 border-start min-vh-100"},Ie={class:"profile mx-auto py-md-4 d-flex"},$e={class:"rounded-circle profile-pic m-1 flex-shrink-0 p-1 my-auto"},Ce=["src"],Ue={class:"align-self-center ms-md-5 ms-sm-2"},Le={class:"d-flex my-1 align-self-center flex-column flex-md-row"},Pe={class:"userName p-2 m-0"},Se=e("div",{class:"p-2 cursor-pointer"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-gear-wide",viewBox:"0 0 16 16"},[e("path",{d:"M8.932.727c-.243-.97-1.62-.97-1.864 0l-.071.286a.96.96 0 0 1-1.622.434l-.205-.211c-.695-.719-1.888-.03-1.613.931l.08.284a.96.96 0 0 1-1.186 1.187l-.284-.081c-.96-.275-1.65.918-.931 1.613l.211.205a.96.96 0 0 1-.434 1.622l-.286.071c-.97.243-.97 1.62 0 1.864l.286.071a.96.96 0 0 1 .434 1.622l-.211.205c-.719.695-.03 1.888.931 1.613l.284-.08a.96.96 0 0 1 1.187 1.187l-.081.283c-.275.96.918 1.65 1.613.931l.205-.211a.96.96 0 0 1 1.622.434l.071.286c.243.97 1.62.97 1.864 0l.071-.286a.96.96 0 0 1 1.622-.434l.205.211c.695.719 1.888.03 1.613-.931l-.08-.284a.96.96 0 0 1 1.187-1.187l.283.081c.96.275 1.65-.918.931-1.613l-.211-.205a.96.96 0 0 1 .434-1.622l.286-.071c.97-.243.97-1.62 0-1.864l-.286-.071a.96.96 0 0 1-.434-1.622l.211-.205c.719-.695.03-1.888-.931-1.613l-.284.08a.96.96 0 0 1-1.187-1.186l.081-.284c.275-.96-.918-1.65-1.613-.931l-.205.211a.96.96 0 0 1-1.622-.434zM8 12.997a4.998 4.998 0 1 1 0-9.995 4.998 4.998 0 0 1 0 9.996z"})])],-1),Ee={class:"my-1 d-flex list-unstyled align-self-center"},Ae={class:"media_count profile-data p-2"},Be=e("span",null,"則貼文",-1),Re=e("li",{class:"media_count profile-data p-2"},[E("0"),e("span",null,"位粉絲")],-1),Ne=e("li",{class:"media_count profile-data p-2"},[E("0"),e("span",null,"人追蹤中")],-1),Ve={class:"row mx-auto border-top"},Fe=["onClick"],Oe={class:"post-pic position-absolute w-100 h-100"},je=["src"],ze=["src"],Ge={__name:"ProfileView",setup(n){const p=ne(),t=se(),m=async()=>{await t.getUserData(),await p.getPostData()},_=o([]),f=R(N,"postsData");S(async()=>{await m(),oe(f,g=>{const D=[];g.forEach(r=>{const x=r.key,k=r.val();t.userData.username===k.username&&D.push({key:x,...k})}),_.value=D})});const i=K(()=>[...p.postData,..._.value].sort((D,r)=>new Date(r.timestamp)-new Date(D.timestamp))),l=o(null),a=o(""),h=function(g){a.value=g,l.value.showModal()},b=o(null),w=function(g){b.value.showModal()};return(g,D)=>(c(),d(P,null,[e("div",ke,[M(le),e("main",Me,[e("div",Ie,[e("div",$e,[e("img",{src:L(t).userData.media_url,alt:""},null,8,Ce)]),e("div",Ue,[e("div",Le,[e("h4",Pe,A(L(t).userData.username),1),e("div",{class:"d-flex flex-row"},[e("button",{class:"btn btn-light",type:"button",onClick:w}," 編輯個人檔案 "),Se])]),e("ul",Ee,[e("li",Ae,[E(A(i.value.length),1),Be]),Re,Ne])])]),e("article",Ve,[(c(!0),d(P,null,Q(i.value,(r,x)=>(c(),d("div",{class:"mt-1 col-4 px-0 ps-1",key:x},[e("div",{class:"profile-post",onClick:k=>h(r.id)},[e("div",Oe,[r.media_type==="IMAGE"||r.media_type==="CAROUSEL_ALBUM"?(c(),d("img",{key:0,src:r.media_url,alt:""},null,8,je)):$("",!0),r.media_type==="VIDEO"?(c(),d("img",{key:1,src:r.thumbnail_url,alt:""},null,8,ze)):$("",!0)])],8,Fe)]))),128))])])]),M(ue,{postId:a.value,postsData:i.value,ref_key:"profilePostModal",ref:l},null,8,["postId","postsData"]),M(xe,{ref_key:"editUserImageModal",ref:b,userData:L(t).userData},null,8,["userData"])],64))}};export{Ge as default};
