import{u as b,r as w,o as y,d as k,_ as x}from"./navComponent-OOzjK-KY.js";import{z as V,r as p,p as P,o as B,d as C,a as c,c as n,s as E,b as e,x as m,t as g,A as h,F as L,f as M,g as f}from"./index-DgnBbltf.js";const N=V("postDataList",()=>{const i=p([]);function r(){const s=p(!0),u=localStorage.getItem("long-lived-access-token");P.get(`https://cors-anywhere.herokuapp.com/https://graph.instagram.com/me/media?fields=caption,id,media_type,media_url,permalink,thumbnail_url,timestamp,username&access_token=${u}`).then(o=>{console.log(o),i.value=o.data.data,console.log("post",i.value),s.value=!1}).catch(o=>{console.log(o)})}return{postData:i,getPostData:r}}),S={class:"row mx-0"},A={class:"col m-0 border-start min-vh-100"},F={class:"profile mx-auto py-md-4 d-flex"},I={class:"rounded-circle profile-pic m-1 flex-shrink-0 p-1"},U=["src"],$={class:"align-self-center ms-5"},z={class:"d-flex my-1 align-self-center"},O={class:"userName p-2"},R=e("div",null,[e("button",{class:"btn btn-light",type:"button"},"編輯個人檔案")],-1),G=e("div",{class:"p-2 cursor-pointer"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-gear-wide",viewBox:"0 0 16 16"},[e("path",{d:"M8.932.727c-.243-.97-1.62-.97-1.864 0l-.071.286a.96.96 0 0 1-1.622.434l-.205-.211c-.695-.719-1.888-.03-1.613.931l.08.284a.96.96 0 0 1-1.186 1.187l-.284-.081c-.96-.275-1.65.918-.931 1.613l.211.205a.96.96 0 0 1-.434 1.622l-.286.071c-.97.243-.97 1.62 0 1.864l.286.071a.96.96 0 0 1 .434 1.622l-.211.205c-.719.695-.03 1.888.931 1.613l.284-.08a.96.96 0 0 1 1.187 1.187l-.081.283c-.275.96.918 1.65 1.613.931l.205-.211a.96.96 0 0 1 1.622.434l.071.286c.243.97 1.62.97 1.864 0l.071-.286a.96.96 0 0 1 1.622-.434l.205.211c.695.719 1.888.03 1.613-.931l-.08-.284a.96.96 0 0 1 1.187-1.187l.283.081c.96.275 1.65-.918.931-1.613l-.211-.205a.96.96 0 0 1 .434-1.622l.286-.071c.97-.243.97-1.62 0-1.864l-.286-.071a.96.96 0 0 1-.434-1.622l.211-.205c.719-.695.03-1.888-.931-1.613l-.284.08a.96.96 0 0 1-1.187-1.186l.081-.284c.275-.96-.918-1.65-1.613-.931l-.205.211a.96.96 0 0 1-1.622-.434zM8 12.997a4.998 4.998 0 1 1 0-9.995 4.998 4.998 0 0 1 0 9.996z"})])],-1),T={class:"my-1 d-flex list-unstyled align-self-center"},j={class:"media_count profileData p-2"},q=e("span",null,"則貼文",-1),H=e("li",{class:"media_count profileData p-2"},[h("0"),e("span",null,"位粉絲")],-1),J=e("li",{class:"media_count profileData p-2"},[h("0"),e("span",null,"人追蹤中")],-1),K={class:"row mx-auto border-top"},Q=["onClick"],W={class:"post-pic position-absolute w-100 h-100"},X=["src"],Y=["src"],Z=e("button",{class:"btn"},null,-1),se={__name:"ProfileView",setup(i){const r=N();r.getPostData();const s=b();s.getUserData();const u=function(a){console.log(a)},o=p([]),v=w(k,"postsData");B(()=>{y(v,a=>{const l=[];a.forEach(t=>{const _=t.key,d=t.val();console.log(d,"value"),console.log(s.value,"userData.value"),d.postownerid===s.value.id&&l.push({key:_,...d})}),o.value=l})});const D=C(()=>{const a=[...o,...r.value];return console.log(a),a.sort((l,t)=>new Date(t.timestamp)-new Date(l.timestamp)),a});return(a,l)=>(c(),n("div",S,[E(x),e("main",A,[e("div",F,[e("div",I,[e("img",{src:m(s).userData.media_url,alt:""},null,8,U)]),e("div",$,[e("div",z,[e("h4",O,g(m(s).userData.username),1),R,G]),e("ul",T,[e("li",j,[h(g(m(s).userData.media_count),1),q]),H,J])])]),e("article",K,[(c(!0),n(L,null,M(D.value,(t,_)=>(c(),n("div",{class:"mt-1 col-4 px-0 ps-1",key:_},[e("div",{class:"profile-post",onClick:d=>u(t.id)},[e("div",W,[t.media_type==="IMAGE"||t.media_type==="CAROUSEL_ALBUM"?(c(),n("img",{key:0,src:t.media_url,alt:""},null,8,X)):f("",!0),t.media_type==="VIDEO"?(c(),n("img",{key:1,src:t.thumbnail_url,alt:""},null,8,Y)):f("",!0)])],8,Q)]))),128))]),Z])]))}};export{se as default};
